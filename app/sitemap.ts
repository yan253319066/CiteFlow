import { MetadataRoute } from 'next';
import { zhBlogSlugs as zhBlogSlugsArr } from '@/i18n/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.getciteflow.ai';

  const englishUrls = [
    { url: `${siteUrl}/`, lastModified: new Date('2026-05-20'), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${siteUrl}/blog`, lastModified: new Date('2026-05-18'), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${siteUrl}/blog/geo-guide`, lastModified: new Date('2026-05-15'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/blog/chatgpt-seo`, lastModified: new Date('2026-05-10'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/blog/ai-visibility`, lastModified: new Date('2026-05-05'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/blog/rank-in-chatgpt`, lastModified: new Date('2026-05-18'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/blog/what-is-geo`, lastModified: new Date('2026-05-31'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/blog/ai-search-vs-seo`, lastModified: new Date('2026-05-31'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/why-chatgpt-doesnt-mention-your-site`, lastModified: new Date('2026-05-24'), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${siteUrl}/geo-for-ai-tools`, lastModified: new Date('2026-05-20'), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${siteUrl}/geo-for-saas`, lastModified: new Date('2026-05-20'), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${siteUrl}/geo-for-startups`, lastModified: new Date('2026-05-20'), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${siteUrl}/services/ai-visibility-growth`, lastModified: new Date('2026-05-25'), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${siteUrl}/case-studies`, lastModified: new Date('2026-05-20'), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${siteUrl}/case-studies/nexus-protocol`, lastModified: new Date('2026-05-20'), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${siteUrl}/case-studies/notion-strategy`, lastModified: new Date('2026-05-20'), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${siteUrl}/blog/ai-traffic-2026`, lastModified: new Date('2026-06-18'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/blog/eating-our-own-dog-food`, lastModified: new Date('2026-06-13'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/blog/how-ai-chooses-sources`, lastModified: new Date('2026-06-22'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/blog/entity-gap`, lastModified: new Date('2026-06-22'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/blog/geo-vs-seo`, lastModified: new Date('2026-06-22'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/blog/schema-markup`, lastModified: new Date('2026-06-22'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/blog/build-entity-associations`, lastModified: new Date('2026-06-22'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/blog/ai-crawler-playbook`, lastModified: new Date('2026-06-22'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/blog/comparison-content-ai-citations`, lastModified: new Date('2026-06-22'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/blog/content-structure-llm-citations`, lastModified: new Date('2026-06-22'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/blog/ai-agent-traffic-growth`, lastModified: new Date('2026-06-22'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/blog/ai-visibility-saas`, lastModified: new Date('2026-06-22'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/blog/ai-visibility-ecommerce`, lastModified: new Date('2026-06-22'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/blog/ai-visibility-startups`, lastModified: new Date('2026-06-22'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/blog/ai-visibility-professional-services`, lastModified: new Date('2026-06-22'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/blog/block-ai-crawlers-backfire`, lastModified: new Date('2026-06-22'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/blog/ai-overviews-changed-google-search`, lastModified: new Date('2026-06-22'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/blog/ai-visibility-measurement`, lastModified: new Date('2026-06-22'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/blog/ai-citations-roi`, lastModified: new Date('2026-06-22'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/blog/ai-visibility-audit`, lastModified: new Date('2026-06-22'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/blog/future-search-citations-cmo`, lastModified: new Date('2026-06-22'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/compare`, lastModified: new Date('2026-05-20'), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${siteUrl}/compare/ahrefs-vs-getciteflow`, lastModified: new Date('2026-05-20'), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${siteUrl}/compare/profound-vs-getciteflow`, lastModified: new Date('2026-05-20'), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${siteUrl}/pricing`, lastModified: new Date('2026-05-20'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/privacy-policy`, lastModified: new Date('2026-05-01'), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${siteUrl}/terms-of-service`, lastModified: new Date('2026-05-01'), changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  const zhPathSet = new Set([
    '/', '/pricing', '/services/ai-visibility-growth', '/blog', '/compare',
    '/case-studies', '/case-studies/nexus-protocol', '/case-studies/notion-strategy',
    '/compare/ahrefs-vs-getciteflow', '/compare/profound-vs-getciteflow',
  ]);
  const zhBlogSlugs = new Set(zhBlogSlugsArr);
  const zhPrefix = (p: string) => p === '/' ? '/zh' : `/zh${p}`;

  function hasZh(p: string): boolean {
    if (zhPathSet.has(p)) return true;
    if (p.startsWith('/report/')) return true;
    if (p.startsWith('/blog/')) return zhBlogSlugs.has(p.replace('/blog/', ''));
    return false;
  }

  const englishWithAlternates = englishUrls.map(({ url, lastModified, changeFrequency, priority }) => {
    const p = url.replace(siteUrl, '') || '/';
    const alt: Record<string, string> = { en: `${siteUrl}${p}`, 'x-default': `${siteUrl}${p}` };
    if (hasZh(p)) alt.zh = `${siteUrl}${zhPrefix(p)}`;
    return {
      url,
      lastModified,
      changeFrequency,
      priority,
      alternates: { languages: alt },
    };
  });

  const chineseUrls = englishUrls
    .filter(({ url }) => hasZh(url.replace(siteUrl, '') || '/'))
    .map(({ url, changeFrequency, priority }) => {
      const p = url.replace(siteUrl, '') || '/';
      return {
        url: `${siteUrl}${zhPrefix(p)}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
        alternates: {
          languages: { zh: `${siteUrl}${zhPrefix(p)}`, en: `${siteUrl}${p}`, 'x-default': `${siteUrl}${p}` },
        },
      };
    });

  return [...englishWithAlternates, ...chineseUrls];
}
