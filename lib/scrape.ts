import { chromium, Browser, Page } from "playwright";

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

const MAX_TIMEOUT_MS = 20_000;

let browserInstance: Browser | null = null;

async function getBrowser(): Promise<Browser> {
  if (!browserInstance || !browserInstance.isConnected()) {
    browserInstance = await chromium.launch({ headless: true });
  }
  return browserInstance;
}

async function checkStaticFile(origin: string, path: string): Promise<boolean> {
  try {
    const res = await fetch(`${origin}${path}`, { signal: AbortSignal.timeout(5000) });
    return res.ok;
  } catch {
    return false;
  }
}

async function extractFromPage(page: Page): Promise<{
  title: string;
  description: string;
  hasOpenGraph: boolean;
  hasTwitterCards: boolean;
  h1Count: number;
  h2Count: number;
  jsonLdTypes: string[];
  hasFaqSchema: boolean;
  hasHowToSchema: boolean;
  wordCount: number;
}> {
  const content = await page.content();
  const titleMatch = /<title[^>]*>([^<]*)<\/title>/i.exec(content);
  const extractedTitle = titleMatch ? titleMatch[1].trim() : "";

  const descPatterns = [
    /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i,
    /<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i,
  ];
  let description = "";
  for (const p of descPatterns) {
    const m = p.exec(content);
    if (m) { description = m[1].trim(); break; }
  }

  const hasOpenGraph =
    /<meta[^>]+property=["']og:(title|description|image)["']/i.test(content) ||
    /<meta[^>]+property=["']og:/i.test(content);
  const hasTwitterCards =
    /<meta[^>]+name=["']twitter:(title|description|card)["']/i.test(content);

  const h1Count = (content.match(/<h1[\s>]/gi) || []).length;
  const h2Count = (content.match(/<h2[\s>]/gi) || []).length;

  const jsonLdRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  const jsonLdTypes: string[] = [];
  let hasFaqSchema = false;
  let hasHowToSchema = false;
  let match;
  while ((match = jsonLdRegex.exec(content)) !== null) {
    try {
      const parsed = JSON.parse(match[1].trim());
      const items = Array.isArray(parsed) ? parsed : [parsed];
      for (const item of items) {
        if (item["@type"]) {
          const types = Array.isArray(item["@type"]) ? item["@type"] : [item["@type"]];
          jsonLdTypes.push(...types);
          if (types.some((t: string) => /faq/i.test(t))) hasFaqSchema = true;
          if (types.some((t: string) => /howto/i.test(t))) hasHowToSchema = true;
        }
      }
    } catch {
      // skip invalid JSON-LD
    }
  }

  const text = content
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
    if (!urlObj.hostname || urlObj.hostname === "") {
      throw new ScrapeError(ScrapeErrorCode.INVALID_URL, `无效的 URL: ${url}`);
    }
  } catch (err) {
    if (err instanceof ScrapeError) throw err;
    throw new ScrapeError(ScrapeErrorCode.INVALID_URL, `无效的 URL: ${url}`);
  }

  const origin = new URL(baseUrl).origin;
  let browser: Browser | null = null;
  let page: Page | null = null;

  try {
    browser = await getBrowser();
    page = await browser.newPage();

    // console.log(`[SCRAPE] Navigating to ${baseUrl} with headless browser...`);

    const response = await page.goto(baseUrl, {
      timeout: MAX_TIMEOUT_MS,
      waitUntil: "domcontentloaded",
    });

    if (response && !response.ok()) {
      throw new ScrapeError(
        ScrapeErrorCode.HTTP_ERROR,
        `HTTP 错误 ${response.status()}: ${baseUrl}`
      );
    }

    const pageTitle = await page.title();
    // console.log(`[SCRAPE] Page loaded, title: "${pageTitle}"`);

    await page.waitForTimeout(2000);

    const extracted = await extractFromPage(page);

    const [hasRobotsTxt, hasSitemap, hasLlmstxt] = await Promise.all([
      checkStaticFile(origin, "/robots.txt"),
      checkStaticFile(origin, "/sitemap.xml"),
      checkStaticFile(origin, "/llms.txt"),
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
  } catch (err) {
    if (err instanceof ScrapeError) throw err;
    const msg = (err as Error).message || String(err);
    if (msg.includes("Timeout") || msg.includes("timeout")) {
      throw new ScrapeError(ScrapeErrorCode.TIMEOUT, `请求超时: ${baseUrl}`);
    }
    throw new ScrapeError(ScrapeErrorCode.NETWORK_ERROR, `网络错误: ${msg}`);
  } finally {
    if (page) {
      await page.close().catch(() => {});
    }
  }
}
