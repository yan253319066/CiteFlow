import { ai } from "@/lib/gemini";
import { ANALYZE_PROMPT, getProvider } from "@/lib/ai-provider";
import { Type } from "@google/genai";
import { cacheGet, cacheSet } from "@/lib/cache";
import { scrapeWebsite } from "@/lib/scrape";

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

async function getSiteData(url: string) {
  const cacheKey = `scrape:${url}`;
  const cached = cacheGet<Awaited<ReturnType<typeof scrapeWebsite>>>(cacheKey);
  if (cached) return cached;
  const data = await scrapeWebsite(url);
  cacheSet(cacheKey, data, CACHE_TTL_MS);
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

  // console.log(`[Deepseek] Request model=deepseek-v4-flash url=${url} retries=${retries}`);
  const res = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
    body: JSON.stringify(body),
  });

  // console.log(`[Deepseek] Response status=${res.status} ${res.statusText}`);
  if (!res.ok) {
    const text = await res.text();
    console.error(`[Deepseek] Error body: ${text}`);
    throw new Error(`Deepseek failed: ${res.status} ${text}`);
  }
  const data = await res.json();
  // console.log(`[Deepseek] Raw response keys=${Object.keys(data)} choices=${data?.choices?.length}`);
  // console.log(`[Deepseek] Finish reason: ${data?.choices?.[0]?.finish_reason}`);
  const content = data?.choices?.[0]?.message?.content?.trim();
  // console.log(`[Deepseek] Content length=${content?.length ?? 0} content_preview=${content?.slice(0, 200) ?? "(empty)"}`);

  if (!content && retries > 0) {
    // console.log(`[Deepseek] Empty content, retrying (${retries} left)`);
    return analyzeWithDeepseek(url, retries - 1);
  }
  if (!content) {
    console.warn(`[Deepseek] Empty content, no retries left, returning {}`);
    return {};
  }

  try {
    const parsed = JSON.parse(content);
    // console.log(`[Deepseek] Parsed OK keys=${Object.keys(parsed)}`);
    return parsed;
  } catch (e) {
    console.error(`[Deepseek] JSON parse error: ${e}`);
    if (retries > 0) {
      // console.log(`[Deepseek] Retrying after parse error (${retries} left)`);
      return analyzeWithDeepseek(url, retries - 1);
    }
    return {};
  }
}

const providerFns: Record<string, (url: string) => Promise<Record<string, unknown>>> = {
  gemini: analyzeWithGemini,
  openai: analyzeWithOpenAI,
  deepseek: analyzeWithDeepseek,
};

export async function analyzeSite(url: string): Promise<Record<string, unknown>> {
  const cacheKey = `report:${url}`;
  const cached = cacheGet<Record<string, unknown>>(cacheKey);
  if (cached) return { ...cached, cached: true };

  const activeProvider = getProvider();
  const fn = providerFns[activeProvider];
  if (!fn) throw new Error(`Unknown provider: ${activeProvider}`);
  const report = await fn(url);
  const result = { ...report, provider: activeProvider };
  cacheSet(cacheKey, result, CACHE_TTL_MS);
  return result;
}
