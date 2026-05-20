import { ai } from "@/lib/gemini";
import { ANALYZE_PROMPT, getProvider } from "@/lib/ai-provider";
import { Type } from "@google/genai";
import { cacheGet, cacheSet } from "@/lib/cache";
import { scrapeWebsite, ScrapeError, ScrapeErrorCode } from "@/lib/scrape";

const CACHE_TTL_MS = 60 * 60 * 1000;

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
  const response = await ai.models.generateContent({
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
    
    const result = { ...report, provider: activeProvider, error: null };
    cacheSet(cacheKey, result, CACHE_TTL_MS);
    // console.log(`[ANALYZE] Report cached for: ${url}`);
    return result;
  } catch (err) {
    if (err instanceof ScrapeError) {
      // console.error(`[ANALYZE] Scrape failed: ${ScrapeErrorCode[err.code]} - ${err.message}`);
      const errorInfo = {
        error: true,
        errorCode: err.code,
        errorType: ScrapeErrorCode[err.code],
        errorMessage: err.message,
        provider: null,
      };
      return errorInfo;
    }
    // console.error(`[ANALYZE] Unexpected error: ${(err as Error).message}`, (err as Error).stack);
    throw err;
  }
}
