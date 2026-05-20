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
  error?: string;
  fetchTime?: number;
}

export interface ScrapeError {
  code: string;
  message: string;
  recoverable: boolean;
}

const TIMEOUT_MS = 10_000;
const MAX_RETRIES = 2;

export const SCRAPE_ERRORS = {
  TIMEOUT: { code: 'TIMEOUT', message: 'Request timed out', recoverable: true },
  DNS_ERROR: { code: 'DNS_ERROR', message: 'Could not resolve domain', recoverable: false },
  CONNECTION_REFUSED: { code: 'CONNECTION_REFUSED', message: 'Connection refused', recoverable: false },
  SSL_ERROR: { code: 'SSL_ERROR', message: 'SSL certificate error', recoverable: true },
  SERVER_ERROR: { code: 'SERVER_ERROR', message: 'Server returned error', recoverable: true },
  NETWORK_ERROR: { code: 'NETWORK_ERROR', message: 'Network error', recoverable: true },
  UNKNOWN_ERROR: { code: 'UNKNOWN_ERROR', message: 'Unknown error occurred', recoverable: false },
} as const;

function detectError(error: unknown, status?: number): ScrapeError {
  if (error instanceof Error) {
    if (error.message.includes('timeout') || error.message.includes('Timeout')) {
      return { ...SCRAPE_ERRORS.TIMEOUT };
    }
    if (error.message.includes('ENOTFOUND') || error.message.includes('getaddrinfo')) {
      return { ...SCRAPE_ERRORS.DNS_ERROR };
    }
    if (error.message.includes('ECONNREFUSED')) {
      return { ...SCRAPE_ERRORS.CONNECTION_REFUSED };
    }
    if (error.message.includes('SSL') || error.message.includes('certificate')) {
      return { ...SCRAPE_ERRORS.SSL_ERROR };
    }
  }
  
  if (status) {
    if (status >= 500) {
      return { ...SCRAPE_ERRORS.SERVER_ERROR };
    }
    if (status === 403 || status === 401) {
      return { code: 'AUTH_ERROR', message: 'Access forbidden', recoverable: false };
    }
    if (status === 404) {
      return { code: 'NOT_FOUND', message: 'Page not found', recoverable: false };
    }
  }
  
  return { ...SCRAPE_ERRORS.UNKNOWN_ERROR };
}

async function fetchWithTimeout(
  url: string, 
  retries = MAX_RETRIES
): Promise<{ response: Response | null; error?: ScrapeError }> {
  let lastError: ScrapeError | undefined;
  
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), TIMEOUT_MS);
      
      const res = await fetch(url, { 
        signal: controller.signal, 
        redirect: "follow",
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
        }
      });
      
      clearTimeout(id);
      
      if (res.ok) {
        return { response: res };
      }
      
      const error = detectError(null, res.status);
      if (!error.recoverable || attempt === retries) {
        return { response: res, error };
      }
      
      lastError = error;
      await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1)));
      
    } catch (err) {
      const error = detectError(err);
      if (!error.recoverable || attempt === retries) {
        return { response: null, error };
      }
      lastError = error;
      await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1)));
    }
  }
  
  return { response: null, error: lastError };
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
    new RegExp(`<meta[^>]+name=["']${property}["'][^>]+content=`, "i"),
    new RegExp(`<meta[^>]+content=["'][^"']*["'][^>]+name=["']${property}["']`, "i"),
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
  const startTime = Date.now();
  const baseUrl = url.startsWith("http") ? url : `https://${url}`;
  
  let origin: string;
  try {
    origin = new URL(baseUrl).origin;
  } catch {
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
      error: 'Invalid URL format',
      fetchTime: 0,
    };
  }

  const { response: res, error: fetchError } = await fetchWithTimeout(baseUrl);
  
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
      error: fetchError?.message || 'Failed to fetch website',
      fetchTime: Date.now() - startTime,
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

  const [robotsRes, sitemapRes, llmstxtRes] = await Promise.all([
    fetchWithTimeout(`${origin}/robots.txt`),
    fetchWithTimeout(`${origin}/sitemap.xml`),
    fetchWithTimeout(`${origin}/llms.txt`),
  ]);

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
    hasRobotsTxt: robotsRes.response?.ok ?? false,
    hasSitemap: sitemapRes.response?.ok ?? false,
    hasLlmstxt: llmstxtRes.response?.ok ?? false,
    fetchTime: Date.now() - startTime,
  };
}