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
  hasOrderedLists: boolean;
  hasUnorderedLists: boolean;
  hasTables: boolean;
  avgParagraphLength: number;
  metaDescriptionLength: number;
  hasSummarySection: boolean;
  contentFreshnessDays: number | null;
  hasAuthorBylines: boolean;
  hasOriginalData: boolean;
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

  const hasOrderedLists = /<ol[\s>]/i.test(html);
  const hasUnorderedLists = /<ul[\s>]/i.test(html);
  const hasTables = /<table[\s>]/i.test(html);

  const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
  let pMatch;
  let totalWords = 0;
  let paraCount = 0;
  while ((pMatch = pRegex.exec(html)) !== null) {
    const clean = pMatch[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    const wc = clean.split(/\s+/).filter(Boolean).length;
    if (wc > 0) { totalWords += wc; paraCount++; }
  }
  const avgParagraphLength = paraCount > 0 ? Math.round(totalWords / paraCount) : 0;

  const bodyLower = text.toLowerCase();
  const hasSummarySection = /\b(key takeaways?|executive summary|tldr|tl;dr|what we cover|quick summary|summary|recap|key (points|findings)|in (this )?(article|post|guide|section)|in conclusion|bottom line)\b/i.test(bodyLower);

  let contentFreshnessDays: number | null = null;
  const dateCandidates: string[] = [];

  // JSON-LD datePublished / dateModified
  const jsonLdDate = /"date(?:Published|Modified)"\s*:\s*"([^"]+)"/i.exec(html);
  if (jsonLdDate) dateCandidates.push(jsonLdDate[1]);

  // Open Graph article:published_time / article:modified_time
  const ogDateMatch = /<meta[^>]+(?:property|name)=["']article:(?:published|modified)_time["'][^>]+content=["']([^"']+)["']/i.exec(html);
  if (ogDateMatch) dateCandidates.push(ogDateMatch[1]);

  // <time datetime="...">
  const timeTagRegex = /<time[^>]+datetime=["']([^"']+)["']/gi;
  let timeMatch;
  while ((timeMatch = timeTagRegex.exec(html)) !== null) {
    dateCandidates.push(timeMatch[1]);
  }

  // <meta name="date" content="...">
  const metaDateMatch = /<meta[^>]+name=["']date["'][^>]+content=["']([^"']+)["']/i.exec(html);
  if (metaDateMatch) dateCandidates.push(metaDateMatch[1]);

  // Visible date text: "Published on Jan 1, 2026" or "Updated: 2026-01-01"
  const visibleDatePattern = /(?:published|updated|posted|modified|last updated)\s*:?\s*(?:on\s*)?(\w+\s+\d{1,2},?\s*\d{4})/i.exec(bodyLower);
  if (visibleDatePattern) dateCandidates.push(visibleDatePattern[1]);

  for (const dateStr of dateCandidates) {
    const parsed = new Date(dateStr);
    if (!isNaN(parsed.getTime())) {
      contentFreshnessDays = Math.floor((Date.now() - parsed.getTime()) / (1000 * 60 * 60 * 24));
      break;
    }
  }

  const hasPersonInJsonLd = /"@type"\s*:\s*"Person"/i.test(html);
  const hasMetaAuthor = /<meta[^>]+name=["']author["'][^>]+content=["']([^"']+)["']/i.test(html);
  const hasVisibleByline = /\b(?:written by|author[\s:]+)\w+\s+\w+/i.test(bodyLower);
  const hasAuthorBylines = hasPersonInJsonLd || hasMetaAuthor || hasVisibleByline;

  const originalDataMatches = (bodyLower.match(/\b(we found|our research|our (data|analysis|study)|we tested|we surveyed|proprietary|original (research|data|analysis))\b/gi) || []);
  const hasOriginalData = originalDataMatches.length >= 2;

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
    hasOrderedLists,
    hasUnorderedLists,
    hasTables,
    avgParagraphLength,
    metaDescriptionLength: description.length,
    hasSummarySection,
    contentFreshnessDays,
    hasAuthorBylines,
    hasOriginalData,
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
        "User-Agent": "Mozilla/5.0 (compatible; GetCiteFlow/1.0; +https://getciteflow.ai)",
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
    hasOrderedLists: extracted.hasOrderedLists,
    hasUnorderedLists: extracted.hasUnorderedLists,
    hasTables: extracted.hasTables,
    avgParagraphLength: extracted.avgParagraphLength,
    metaDescriptionLength: extracted.metaDescriptionLength,
    hasSummarySection: extracted.hasSummarySection,
    contentFreshnessDays: extracted.contentFreshnessDays,
    hasAuthorBylines: extracted.hasAuthorBylines,
    hasOriginalData: extracted.hasOriginalData,
  };
}
