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

export enum ScrapeErrorCode {
  TIMEOUT = 1001,
  NETWORK_ERROR = 1002,
  HTTP_ERROR = 1003,
  INVALID_URL = 1004,
  BROWSER_ERROR = 1005,
}

export class ScrapeError extends Error {
  constructor(public code: ScrapeErrorCode, message: string) {
    super(message);
    this.name = "ScrapeError";
  }
}

const MAX_TIMEOUT_MS = 15_000;

async function resolveOrigin(baseUrl: string): Promise<string> {
  try {
    const res = await fetch(baseUrl, {
      signal: AbortSignal.timeout(5000),
      redirect: "follow",
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    return res.url ? new URL(res.url).origin : new URL(baseUrl).origin;
  } catch {
    return new URL(baseUrl).origin;
  }
}

async function checkStaticFile(origin: string, path: string): Promise<boolean> {
  const origins = [origin];
  const url = new URL(origin);
  if (url.hostname.startsWith("www.")) {
    origins.push(origin.replace("www.", ""));
  } else {
    origins.push(`https://www.${url.hostname}`);
  }

  for (const o of origins) {
    try {
      const res = await fetch(`${o}${path}`, { signal: AbortSignal.timeout(5000) });
      if (res.ok) return true;
    } catch {
      // continue to next
    }
  }
  return false;
}

function extractFromHtml(html: string) {
  const titleMatch = /<title[^>]*>([^<]*)<\/title>/i.exec(html);
  const extractedTitle = titleMatch ? titleMatch[1].trim() : "";

  const descPatterns = [
    /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i,
    /<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i,
  ];
  let description = "";
  for (const p of descPatterns) {
    const m = p.exec(html);
    if (m) { description = m[1].trim(); break; }
  }

  const hasOpenGraph =
    /<meta[^>]+property=["']og:(title|description|image)["']/i.test(html) ||
    /<meta[^>]+property=["']og:/i.test(html);
  const hasTwitterCards =
    /<meta[^>]+name=["']twitter:(title|description|card)["']/i.test(html);

  const h1Count = (html.match(/<h1[\s>]/gi) || []).length;
  const h2Count = (html.match(/<h2[\s>]/gi) || []).length;

  const jsonLdRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  const jsonLdTypes: string[] = [];
  let hasFaqSchema = false;
  let hasHowToSchema = false;
  let match;
  while ((match = jsonLdRegex.exec(html)) !== null) {
    try {
      const parsed = JSON.parse(match[1].trim());
      const items = Array.isArray(parsed) ? parsed : [parsed];
      for (const item of items) {
        if (item["@type"]) {
          const types: string[] = Array.isArray(item["@type"]) ? item["@type"] : [item["@type"]];
          jsonLdTypes.push(...types);
          if (types.some((t) => /faq/i.test(t))) hasFaqSchema = true;
          if (types.some((t) => /howto/i.test(t))) hasHowToSchema = true;
        }
      }
    } catch {
      // skip invalid JSON-LD
    }
  }

  const text = html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const wordCount = text.split(/\s+/).filter(Boolean).length;

  return {
    title: extractedTitle,
    description,
    hasOpenGraph,
    hasTwitterCards,
    h1Count,
    h2Count,
    jsonLdTypes: [...new Set(jsonLdTypes)],
    hasFaqSchema,
    hasHowToSchema,
    wordCount,
  };
}

export async function scrapeWebsite(url: string): Promise<ScrapeResult> {
  let baseUrl: string;
  try {
    baseUrl = url.startsWith("http") ? url : `https://${url}`;
    const urlObj = new URL(baseUrl);
    if (!urlObj.hostname) {
      throw new ScrapeError(ScrapeErrorCode.INVALID_URL, `Invalid URL: ${url}`);
    }
  } catch (err) {
    if (err instanceof ScrapeError) throw err;
    throw new ScrapeError(ScrapeErrorCode.INVALID_URL, `Invalid URL: ${url}`);
  }

  const resolvedOrigin = await resolveOrigin(baseUrl);

  let response: Response;
  try {
    response = await fetch(baseUrl, {
      signal: AbortSignal.timeout(MAX_TIMEOUT_MS),
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; CiteFlow/1.0; +https://getciteflow.ai)",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
      },
      redirect: "follow",
    });
  } catch (err) {
    const msg = (err as Error).message || String(err);
    if (msg.includes("Timeout") || msg.includes("timeout") || msg.includes("AbortError")) {
      throw new ScrapeError(ScrapeErrorCode.TIMEOUT, `Request timeout: ${baseUrl}`);
    }
    throw new ScrapeError(ScrapeErrorCode.NETWORK_ERROR, `Network error: ${msg}`);
  }

  if (!response.ok) {
    throw new ScrapeError(
      ScrapeErrorCode.HTTP_ERROR,
      `HTTP error ${response.status}: ${baseUrl}`
    );
  }

  const html = await response.text();
  const extracted = extractFromHtml(html);

  const [hasRobotsTxt, hasSitemap, hasLlmstxt] = await Promise.all([
    checkStaticFile(resolvedOrigin, "/robots.txt"),
    checkStaticFile(resolvedOrigin, "/sitemap.xml"),
    checkStaticFile(resolvedOrigin, "/llms.txt"),
  ]);

  return {
    title: extracted.title,
    description: extracted.description,
    hasJsonLd: extracted.jsonLdTypes.length > 0,
    jsonLdTypes: extracted.jsonLdTypes,
    hasFaqSchema: extracted.hasFaqSchema,
    hasHowToSchema: extracted.hasHowToSchema,
    hasOpenGraph: extracted.hasOpenGraph,
    hasTwitterCards: extracted.hasTwitterCards,
    h1Count: extracted.h1Count,
    h2Count: extracted.h2Count,
    wordCount: extracted.wordCount,
    hasRobotsTxt,
    hasSitemap,
    hasLlmstxt,
  };
}
