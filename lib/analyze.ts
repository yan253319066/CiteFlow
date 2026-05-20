import { ai } from "@/lib/gemini";
import { ANALYZE_PROMPT, getProvider } from "@/lib/ai-provider";
import { Type } from "@google/genai";
import { cacheGet, cacheSet } from "@/lib/cache";
import { scrapeWebsite, ScrapeResult } from "@/lib/scrape";

const CACHE_TTL_MS = 60 * 60 * 1000;

interface AnalysisScore {
  aiVisibility: number;
  faqCoverage: number;
  entityClarity: number;
  authority: number;
}

interface AnalysisResult {
  score: number;
  breakdown: AnalysisScore;
  missing: string[];
  suggestions: string[];
  summary: string;
}

function calculateBaseScore(data: ScrapeResult): AnalysisScore {
  let aiVisibility = 0;
  let faqCoverage = 0;
  let entityClarity = 0;
  let authority = 0;

  if (data.hasJsonLd) aiVisibility += 20;
  if (data.hasFaqSchema) { aiVisibility += 15; faqCoverage += 30; }
  if (data.hasHowToSchema) { aiVisibility += 15; faqCoverage += 30; }
  if (data.hasOpenGraph) aiVisibility += 10;
  if (data.hasTwitterCards) aiVisibility += 10;
  if (data.title && data.title.length >= 5) entityClarity += 20;
  if (data.description && data.description.length >= 30) entityClarity += 20;
  if (data.h1Count >= 1 && data.h1Count <= 3) entityClarity += 20;
  if (data.h2Count >= 3) entityClarity += 10;
  if (data.wordCount >= 500) { 
    entityClarity += 15; 
    faqCoverage += 20;
  }
  if (data.wordCount >= 1500) {
    entityClarity += 15;
    faqCoverage += 20;
  }
  if (data.hasRobotsTxt) authority += 15;
  if (data.hasSitemap) authority += 15;
  if (data.hasLlmstxt) authority += 20;

  return {
    aiVisibility: Math.min(aiVisibility, 100),
    faqCoverage: Math.min(faqCoverage, 100),
    entityClarity: Math.min(entityClarity, 100),
    authority: Math.min(authority, 100),
  };
}

function formatSiteData(url: string, data: ScrapeResult): string {
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
  
  const baseScore = calculateBaseScore(data);
  lines.push(`\n--- BASE SCORE CALCULATION ---`);
  lines.push(`AI Visibility (max 100): ${baseScore.aiVisibility}`);
  lines.push(`FAQ Coverage (max 100): ${baseScore.faqCoverage}`);
  lines.push(`Entity Clarity (max 100): ${baseScore.entityClarity}`);
  lines.push(`Authority (max 100): ${baseScore.authority}`);
  
  return lines.join("\n");
}

function validateAndAdjustScore(aiScore: AnalysisResult, baseScore: AnalysisScore): AnalysisResult {
  const maxDiff = 25;
  
  const adjustScore = (aiValue: number, baseValue: number): number => {
    if (Math.abs(aiValue - baseValue) <= maxDiff) {
      return Math.round((aiValue * 0.6 + baseValue * 0.4));
    }
    return Math.round((aiValue * 0.3 + baseValue * 0.7));
  };

  const adjustedBreakdown: AnalysisScore = {
    aiVisibility: adjustScore(aiScore.breakdown.aiVisibility, baseScore.aiVisibility),
    faqCoverage: adjustScore(aiScore.breakdown.faqCoverage, baseScore.faqCoverage),
    entityClarity: adjustScore(aiScore.breakdown.entityClarity, baseScore.entityClarity),
    authority: adjustScore(aiScore.breakdown.authority, baseScore.authority),
  };

  const adjustedTotalScore = Math.round(
    (adjustedBreakdown.aiVisibility * 0.3 + 
     adjustedBreakdown.faqCoverage * 0.25 + 
     adjustedBreakdown.entityClarity * 0.25 + 
     adjustedBreakdown.authority * 0.2)
  );

  return {
    ...aiScore,
    score: Math.max(0, Math.min(100, adjustedTotalScore)),
    breakdown: adjustedBreakdown,
  };
}

async function getSiteData(url: string): Promise<ScrapeResult> {
  const cacheKey = `scrape:${url}`;
  const cached = cacheGet<ScrapeResult>(cacheKey);
  if (cached) return cached;
  const data = await scrapeWebsite(url);
  cacheSet(cacheKey, data, CACHE_TTL_MS);
  return data;
}

async function analyzeWithGemini(url: string, siteData: string, baseScore: AnalysisScore): Promise<AnalysisResult> {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: ANALYZE_PROMPT(url, siteData),
    config: {
      temperature: 0.1,
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

  const rawResult = JSON.parse(response.text || JSON.stringify({
    score: 0,
    breakdown: { aiVisibility: 0, faqCoverage: 0, entityClarity: 0, authority: 0 },
    missing: [],
    suggestions: [],
    summary: "Failed to parse response",
  }));

  return validateAndAdjustScore(rawResult, baseScore);
}

async function analyzeWithOpenAI(url: string, siteData: string, baseScore: AnalysisScore): Promise<AnalysisResult> {
  const key = process.env.OPENAI_API_KEY;
  if (!key) throw new Error("OPENAI_API_KEY missing");

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
      temperature: 0.1,
    }),
  });

  if (!res.ok) throw new Error(`OpenAI failed: ${res.status}`);
  const data = await res.json();
  const content = data?.choices?.[0]?.message?.content || JSON.stringify({
    score: 0,
    breakdown: { aiVisibility: 0, faqCoverage: 0, entityClarity: 0, authority: 0 },
    missing: [],
    suggestions: [],
    summary: "Failed to parse response",
  });

  const rawResult = JSON.parse(content);
  return validateAndAdjustScore(rawResult, baseScore);
}

async function analyzeWithDeepseek(url: string, siteData: string, baseScore: AnalysisScore, retries = 2): Promise<AnalysisResult> {
  const key = process.env.DEEPSEEK_API_KEY;
  if (!key) throw new Error("DEEPSEEK_API_KEY missing");

  const body = {
    model: "deepseek-v4-flash",
    response_format: { type: "json_object" as const },
    messages: [
      { role: "system" as const, content: "You are a GEO analysis assistant. Always output valid JSON using the json format." },
      { role: "user" as const, content: ANALYZE_PROMPT(url, siteData) },
    ],
    temperature: 0.1,
    max_tokens: 2048,
  };

  const res = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error(`[Deepseek] Error body: ${text}`);
    throw new Error(`Deepseek failed: ${res.status} ${text}`);
  }
  const data = await res.json();
  const content = data?.choices?.[0]?.message?.content?.trim();

  if (!content && retries > 0) {
    return analyzeWithDeepseek(url, siteData, baseScore, retries - 1);
  }
  if (!content) {
    console.warn(`[Deepseek] Empty content, returning default`);
    return {
      score: Math.round((baseScore.aiVisibility + baseScore.faqCoverage + baseScore.entityClarity + baseScore.authority) / 4),
      breakdown: baseScore,
      missing: ["No AI analysis available"],
      suggestions: ["Check API provider status"],
      summary: "Analysis limited due to API response issues",
    };
  }

  try {
    const rawResult = JSON.parse(content);
    return validateAndAdjustScore(rawResult, baseScore);
  } catch (e) {
    console.error(`[Deepseek] JSON parse error: ${e}`);
    if (retries > 0) {
      return analyzeWithDeepseek(url, siteData, baseScore, retries - 1);
    }
    return {
      score: Math.round((baseScore.aiVisibility + baseScore.faqCoverage + baseScore.entityClarity + baseScore.authority) / 4),
      breakdown: baseScore,
      missing: ["AI response could not be parsed"],
      suggestions: ["Retry analysis later"],
      summary: "Analysis based on detected signals only",
    };
  }
}

const providerFns: Record<string, (url: string, siteData: string, baseScore: AnalysisScore) => Promise<AnalysisResult>> = {
  gemini: analyzeWithGemini,
  openai: analyzeWithOpenAI,
  deepseek: analyzeWithDeepseek,
};

export async function analyzeSite(url: string): Promise<Record<string, unknown>> {
  const cacheKey = `report:${url}`;
  const cached = cacheGet<Record<string, unknown>>(cacheKey);
  if (cached) return { ...cached, cached: true };

  const siteDataRaw = await getSiteData(url);
  
  if (!siteDataRaw.title && siteDataRaw.wordCount === 0) {
    return {
      score: 0,
      breakdown: { aiVisibility: 0, faqCoverage: 0, entityClarity: 0, authority: 0 },
      missing: ["Failed to fetch website content"],
      suggestions: ["Verify the URL is accessible", "Check website availability"],
      summary: "Analysis failed: unable to retrieve website data",
      error: "Website inaccessible",
    };
  }

  const baseScore = calculateBaseScore(siteDataRaw);
  const siteData = formatSiteData(url, siteDataRaw);

  const activeProvider = getProvider();
  const fn = providerFns[activeProvider];
  if (!fn) throw new Error(`Unknown provider: ${activeProvider}`);
  
  const report = await fn(url, siteData, baseScore);
  const result = { ...report, provider: activeProvider };
  cacheSet(cacheKey, result, CACHE_TTL_MS);
  return result;
}