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

export async function clientScrapeWebsite(url: string): Promise<ScrapeResult> {
  const startTime = Date.now();
  const baseUrl = url.startsWith('http') ? url : `https://${url}`;

  let origin: string;
  try {
    origin = new URL(baseUrl).origin;
  } catch {
    return {
      title: '',
      description: '',
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

  try {
    const response = await fetch(baseUrl, {
      method: 'GET',
      mode: 'cors',
      credentials: 'omit',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const html = await response.text();
    const data = parseHtml(html, origin);

    return {
      ...data,
      hasRobotsTxt: false,
      hasSitemap: false,
      hasLlmstxt: false,
      fetchTime: Date.now() - startTime,
    };
  } catch (error) {
    return {
      title: '',
      description: '',
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
      error: error instanceof Error ? error.message : 'Failed to fetch',
      fetchTime: Date.now() - startTime,
    };
  }
}

function parseHtml(html: string, origin: string): Omit<ScrapeResult, 'hasRobotsTxt' | 'hasSitemap' | 'hasLlmstxt' | 'error' | 'fetchTime'> {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  const title = doc.title || '';
  const description = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';

  const hasOpenGraph = !!(
    doc.querySelector('meta[property="og:title"]') ||
    doc.querySelector('meta[property="og:description"]') ||
    doc.querySelector('meta[property="og:image"]')
  );

  const hasTwitterCards = !!(
    doc.querySelector('meta[name="twitter:title"]') ||
    doc.querySelector('meta[name="twitter:description"]') ||
    doc.querySelector('meta[name="twitter:card"]')
  );

  const h1Count = doc.querySelectorAll('h1').length;
  const h2Count = doc.querySelectorAll('h2').length;

  const textContent = doc.body?.textContent || '';
  const wordCount = textContent.trim().split(/\s+/).filter(word => word.length > 0).length;

  const jsonLdTypes: string[] = [];
  let hasFaqSchema = false;
  let hasHowToSchema = false;

  const jsonLdScripts = doc.querySelectorAll('script[type="application/ld+json"]');
  for (const script of jsonLdScripts) {
    try {
      const content = script.textContent?.trim();
      if (content) {
        let parsed;
        try {
          parsed = JSON.parse(content);
        } catch {
          continue;
        }

        const items = Array.isArray(parsed) ? parsed : [parsed];
        for (const item of items) {
          if (item['@type']) {
            const types = Array.isArray(item['@type']) ? item['@type'] : [item['@type']];
            for (const type of types) {
              jsonLdTypes.push(type);
              if (/faq/i.test(type)) hasFaqSchema = true;
              if (/howto/i.test(type)) hasHowToSchema = true;
            }
          }
        }
      }
    } catch {
      // 跳过无效的 JSON-LD
    }
  }

  return {
    title,
    description,
    hasJsonLd: jsonLdTypes.length > 0,
    jsonLdTypes: [...new Set(jsonLdTypes)],
    hasFaqSchema,
    hasHowToSchema,
    hasOpenGraph,
    hasTwitterCards,
    h1Count,
    h2Count,
    wordCount,
  };
}
