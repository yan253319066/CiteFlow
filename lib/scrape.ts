export interface ScrapeResult {
  title: string;
  description: string;
  hasJsonLd: boolean;
  jsonLdTypes: string[];
  hasFaqSchema: boolean;
  hasHowToSchema: boolean;
  hasOpenGraph: boolean;
  hasTwitterCards: boolean;
  h1Count: number;
  h2Count: number;
  wordCount: number;
  hasRobotsTxt: boolean;
  hasSitemap: boolean;
  hasLlmstxt: boolean;
}

const TIMEOUT_MS = 8_000;

async function fetchWithTimeout(url: string): Promise<Response | null> {
  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), TIMEOUT_MS);
    const res = await fetch(url, { signal: controller.signal, redirect: "follow" });
    clearTimeout(id);
    return res;
  } catch {
    return null;
  }
}

function extractTitle(html: string): string {
  const m = /<title[^>]*>([^<]*)<\/title>/i.exec(html);
  return m ? m[1].trim() : "";
}

function extractMeta(html: string, name: string): string {
  const patterns = [
    new RegExp(`<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']*)["']`, "i"),
    new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+name=["']${name}["']`, "i"),
  ];
  for (const pattern of patterns) {
    const m = pattern.exec(html);
    if (m) return m[1].trim();
  }
  return "";
}

function extractMetaProperty(html: string, property: string): boolean {
  const patterns = [
    new RegExp(`<meta[^>]+property=["']${property}["'][^>]+content=`, "i"),
    new RegExp(`<meta[^>]+content=["'][^"']*["'][^>]+property=["']${property}["']`, "i"),
  ];
  return patterns.some((p) => p.test(html));
}

function extractJsonLd(html: string): { types: string[]; hasFaq: boolean; hasHowTo: boolean } {
  const types: string[] = [];
  let hasFaq = false;
  let hasHowTo = false;
  const regex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    try {
      const parsed = JSON.parse(match[1].trim());
      const items = Array.isArray(parsed) ? parsed : [parsed];
      for (const item of items) {
        if (item["@type"]) {
          const t = Array.isArray(item["@type"]) ? item["@type"] : [item["@type"]];
          types.push(...t.map((x: string) => x));
          if (t.some((x: string) => /faq/i.test(x))) hasFaq = true;
          if (t.some((x: string) => /howto/i.test(x))) hasHowTo = true;
        }
      }
    } catch {
      // skip invalid JSON-LD
    }
  }
  return { types: [...new Set(types)], hasFaq, hasHowTo };
}

function extractHeadings(html: string): { h1: number; h2: number } {
  const h1 = (html.match(/<h1[\s>]/gi) || []).length;
  const h2 = (html.match(/<h2[\s>]/gi) || []).length;
  return { h1, h2 };
}

function countWords(html: string): number {
  const text = html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text.split(/\s+/).filter(Boolean).length;
}

export async function scrapeWebsite(url: string): Promise<ScrapeResult> {
  const baseUrl = url.startsWith("http") ? url : `https://${url}`;
  const origin = new URL(baseUrl).origin;

  const res = await fetchWithTimeout(baseUrl);
  if (!res || !res.ok) {
    return {
      title: "",
      description: "",
      hasJsonLd: false,
      jsonLdTypes: [],
      hasFaqSchema: false,
      hasHowToSchema: false,
      hasOpenGraph: false,
      hasTwitterCards: false,
      h1Count: 0,
      h2Count: 0,
      wordCount: 0,
      hasRobotsTxt: false,
      hasSitemap: false,
      hasLlmstxt: false,
    };
  }

  const html = await res.text();

  const title = extractTitle(html);
  const description = extractMeta(html, "description");
  const hasOpenGraph =
    extractMetaProperty(html, "og:title") || extractMetaProperty(html, "og:description") || extractMetaProperty(html, "og:image");
  const hasTwitterCards =
    extractMetaProperty(html, "twitter:title") || extractMetaProperty(html, "twitter:description") || extractMetaProperty(html, "twitter:card");
  const { types: jsonLdTypes, hasFaq: hasFaqSchema, hasHowTo: hasHowToSchema } = extractJsonLd(html);
  const { h1, h2 } = extractHeadings(html);
  const wordCount = countWords(html);

  const robotsRes = await fetchWithTimeout(`${origin}/robots.txt`);
  const sitemapRes = await fetchWithTimeout(`${origin}/sitemap.xml`);
  const llmstxtRes = await fetchWithTimeout(`${origin}/llms.txt`);

  return {
    title,
    description,
    hasJsonLd: jsonLdTypes.length > 0,
    jsonLdTypes,
    hasFaqSchema,
    hasHowToSchema,
    hasOpenGraph,
    hasTwitterCards,
    h1Count: h1,
    h2Count: h2,
    wordCount,
    hasRobotsTxt: robotsRes?.ok ?? false,
    hasSitemap: sitemapRes?.ok ?? false,
    hasLlmstxt: llmstxtRes?.ok ?? false,
  };
}
