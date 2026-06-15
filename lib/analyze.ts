import { getAiClient } from "@/lib/gemini";
import { ANALYZE_PROMPT, getProvider } from "@/lib/ai-provider";
import { Type } from "@google/genai";
import { cacheGet, cacheSet } from "@/lib/cache";
import { scrapeWebsite, ScrapeError, ScrapeErrorCode } from "@/lib/scrape";

const CACHE_TTL_MS = 60 * 60 * 1000;

// Module-level cache to ensure consistent scores between generateMetadata and page render
const pendingCache = new Map<string, Promise<Record<string, unknown>>>();

function formatSiteData(url: string, data: Awaited<ReturnType<typeof scrapeWebsite>>): string {
  const lines: string[] = [`URL: ${url}`];
  if (data.title) lines.push(`Page title: ${data.title}`);
  if (data.description) lines.push(`Meta description: ${data.description}`);
  lines.push(`Word count: ~${data.wordCount}`);
  lines.push(`Headings: ${data.h1Count} H1, ${data.h2Count} H2`);
  lines.push(`JSON-LD structured data: ${data.hasJsonLd ? "Yes (" + data.jsonLdTypes.join(", ") + ")" : "No"}`);
  lines.push(`FAQ schema: ${data.hasFaqSchema ? "Yes" : "No"}`);
  lines.push(`HowTo schema: ${data.hasHowToSchema ? "Yes" : "No"}`);
  lines.push(`Open Graph tags: ${data.hasOpenGraph ? "Yes" : "No"}`);
  lines.push(`Twitter Card tags: ${data.hasTwitterCards ? "Yes" : "No"}`);
  lines.push(`/robots.txt: ${data.hasRobotsTxt ? "Found" : "Not found"}`);
  lines.push(`/sitemap.xml: ${data.hasSitemap ? "Found" : "Not found"}`);
  lines.push(`/llms.txt: ${data.hasLlmstxt ? "Found" : "Not found"}`);
  lines.push(`Ordered lists: ${data.hasOrderedLists ? "Yes" : "No"}`);
  lines.push(`Unordered lists: ${data.hasUnorderedLists ? "Yes" : "No"}`);
  lines.push(`Tables: ${data.hasTables ? "Yes" : "No"}`);
  lines.push(`Average paragraph length: ~${data.avgParagraphLength} words`);
  lines.push(`Meta description length: ${data.metaDescriptionLength} chars`);
  lines.push(`Key takeaways / summary section: ${data.hasSummarySection ? "Found" : "Not found"}`);
  lines.push(`Content freshness: ${data.contentFreshnessDays !== null ? `${data.contentFreshnessDays} days since last update` : "No date metadata found"}`);
  lines.push(`Author bylines: ${data.hasAuthorBylines ? "Yes" : "No"}`);
  lines.push(`Original research / proprietary data: ${data.hasOriginalData ? "Yes" : "No"}`);
  return lines.join("\n");
}

async function getSiteData(url: string): Promise<Awaited<ReturnType<typeof scrapeWebsite>>> {
  const cacheKey = `scrape:${url}`;
  const cached = cacheGet<Awaited<ReturnType<typeof scrapeWebsite>>>(cacheKey);
  // if (cached) {
  //   console.log(`[ANALYZE] Cache hit for scrape: ${url}`);
  //   return cached;
  // }
  // console.log(`[ANALYZE] Cache miss for scrape: ${url}, fetching...`);
  const data = await scrapeWebsite(url);
  cacheSet(cacheKey, data, CACHE_TTL_MS);
  // console.log(`[ANALYZE] Site data fetched: title="${data.title}", wordCount=${data.wordCount}`);
  return data;
}

async function analyzeWithGemini(url: string) {
  const siteData = formatSiteData(url, await getSiteData(url));
  const response = await getAiClient().models.generateContent({
    model: "gemini-3-flash-preview",
    contents: ANALYZE_PROMPT(url, siteData),
    config: {
      temperature: 0,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        required: ["score", "breakdown", "missing", "suggestions", "summary"],
        properties: {
          score: { type: Type.NUMBER },
          breakdown: {
            type: Type.OBJECT,
            required: ["aiVisibility", "faqCoverage", "entityClarity", "authority"],
            properties: {
              aiVisibility: { type: Type.NUMBER },
              faqCoverage: { type: Type.NUMBER },
              entityClarity: { type: Type.NUMBER },
              authority: { type: Type.NUMBER },
              contentStructure: { type: Type.NUMBER },
              summaryOptimization: { type: Type.NUMBER },
            },
          },
          missing: { type: Type.ARRAY, items: { type: Type.STRING } },
          suggestions: { type: Type.ARRAY, items: { type: Type.STRING } },
          summary: { type: Type.STRING },
        },
      },
    },
  });

  return JSON.parse(response.text || "{}");
}

async function analyzeWithOpenAI(url: string) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) throw new Error("OPENAI_API_KEY missing");

  const siteData = formatSiteData(url, await getSiteData(url));

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: "You are a GEO analysis assistant. Output valid JSON only." },
        { role: "user", content: ANALYZE_PROMPT(url, siteData) },
      ],
      temperature: 0,
    }),
  });

  if (!res.ok) throw new Error(`OpenAI failed: ${res.status}`);
  const data = await res.json();
  const content = data?.choices?.[0]?.message?.content || "{}";
  return JSON.parse(content);
}

async function analyzeWithDeepseek(url: string, retries = 2): Promise<Record<string, unknown>> {
  const key = process.env.DEEPSEEK_API_KEY;
  if (!key) throw new Error("DEEPSEEK_API_KEY missing");

  const siteData = formatSiteData(url, await getSiteData(url));

  const body = {
    model: "deepseek-v4-flash",
    response_format: { type: "json_object" as const },
    messages: [
      { role: "system" as const, content: "You are a GEO analysis assistant. Always output valid JSON using the json format." },
      { role: "user" as const, content: ANALYZE_PROMPT(url, siteData) },
    ],
    temperature: 0,
    max_tokens: 2048,
  };

  const res = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Deepseek API failed: ${res.status} ${text}`);
  }
  const data = await res.json();
  const content = data?.choices?.[0]?.message?.content?.trim();

  if (!content && retries > 0) {
    return analyzeWithDeepseek(url, retries - 1);
  }
  if (!content) {
    return {};
  }

  const parsed = JSON.parse(content);
  return parsed;
}

function getDeterministicMissing(data: Awaited<ReturnType<typeof scrapeWebsite>>): string[] {
  const items: string[] = [];
  if (!data.hasOrderedLists && !data.hasUnorderedLists) {
    items.push("AI-readable list formatting (ordered/unordered lists)");
  }
  if (!data.hasTables) {
    items.push("Tables for structured content");
  }
  if (data.avgParagraphLength > 100) {
    items.push("Long paragraph blocks — shorten for AI scannability");
  }
  if (data.metaDescriptionLength < 50 || data.metaDescriptionLength > 200) {
    items.push("Meta description length optimization for AI summary extraction");
  }
  if (!data.hasSummarySection) {
    items.push("Key takeaways or executive summary section");
  }
  return items;
}

const providerFns: Record<string, (url: string) => Promise<Record<string, unknown>>> = {
  gemini: analyzeWithGemini,
  openai: analyzeWithOpenAI,
  deepseek: analyzeWithDeepseek,
};

export async function analyzeSite(url: string): Promise<Record<string, unknown>> {
  const cacheKey = `report:${url}`;
  const cached = cacheGet<Record<string, unknown>>(cacheKey);
  if (cached) {
    // console.log(`[ANALYZE] Report cache hit for: ${url}`);
    return { ...cached, cached: true };
  }
  // console.log(`[ANALYZE] Report cache miss for: ${url}`);

  // Deduplicate concurrent calls
  if (pendingCache.has(cacheKey)) {
    return pendingCache.get(cacheKey)!;
  }

  const analyze = async (): Promise<Record<string, unknown>> => {
    try {
      const activeProvider = getProvider();
      // console.log(`[ANALYZE] Active provider: ${activeProvider}`);
      
      const fn = providerFns[activeProvider];
      if (!fn) {
        // console.error(`[ANALYZE] Unknown provider: ${activeProvider}`);
        throw new Error(`Unknown provider: ${activeProvider}`);
      }
      
      // console.log(`[ANALYZE] Calling ${activeProvider} analyzer for: ${url}`);
      const report = await fn(url);
      // console.log(`[ANALYZE] ${activeProvider} analyzer returned: ${Object.keys(report).join(', ')}`);

      const siteData = await getSiteData(url);
      const deterministicMissing = getDeterministicMissing(siteData);
      const aiMissing = (report.missing as string[]) || [];
      const mergedMissing = [...new Set([...aiMissing, ...deterministicMissing])];

      const result = { ...report, missing: mergedMissing, provider: activeProvider, error: null };
      cacheSet(cacheKey, result, CACHE_TTL_MS);
      // console.log(`[ANALYZE] Report cached for: ${url}`);
      return result;
    } catch (err) {
      const msg = (err as Error).message || '';
      if (err instanceof ScrapeError) {
        if (err.code === ScrapeErrorCode.TIMEOUT) {
          return {
            error: true,
            errorCode: err.code,
            errorType: 'TIMEOUT',
            errorMessage: err.message,
            provider: null,
          };
        }
        return {
          error: true,
          errorCode: err.code,
          errorType: ScrapeErrorCode[err.code],
          errorMessage: err.message,
          provider: null,
        };
      }
      if (
        msg.toLowerCase().includes('timeout') ||
        msg.toLowerCase().includes('timed out') ||
        msg.includes('ETIMEDOUT') ||
        msg.includes('ECONNRESET') ||
        msg.includes('Connection closed')
      ) {
        return {
          error: true,
          errorCode: ScrapeErrorCode.TIMEOUT,
          errorType: 'TIMEOUT',
          errorMessage: msg || 'Request timed out',
          provider: null,
        };
      }
      throw err;
    } finally {
      pendingCache.delete(cacheKey);
    }
  };

  const promise = analyze();
  pendingCache.set(cacheKey, promise);
  return promise;
}
