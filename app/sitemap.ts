import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.getciteflow.ai';
  return [
    { url: baseUrl, lastModified: new Date('2026-05-20'), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/blog`, lastModified: new Date('2026-05-18'), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/blog/geo-guide`, lastModified: new Date('2026-05-15'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/chatgpt-seo`, lastModified: new Date('2026-05-10'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/ai-visibility`, lastModified: new Date('2026-05-05'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/rank-in-chatgpt`, lastModified: new Date('2026-05-18'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/what-is-geo`, lastModified: new Date('2025-10-08'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/ai-search-vs-seo`, lastModified: new Date('2025-10-22'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/why-chatgpt-doesnt-mention-your-site`, lastModified: new Date('2026-05-24'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/geo-for-ai-tools`, lastModified: new Date('2026-05-20'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/geo-for-saas`, lastModified: new Date('2026-05-20'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/geo-for-startups`, lastModified: new Date('2026-05-20'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/services/ai-visibility-growth`, lastModified: new Date('2026-05-25'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies`, lastModified: new Date('2026-05-20'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/nexus-protocol`, lastModified: new Date('2026-05-20'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/notion-strategy`, lastModified: new Date('2026-05-20'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/compare`, lastModified: new Date('2026-05-20'), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/compare/ahrefs-vs-getciteflow`, lastModified: new Date('2026-05-20'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/compare/profound-vs-getciteflow`, lastModified: new Date('2026-05-20'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/pricing`, lastModified: new Date('2026-05-20'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date('2026-05-01'), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, lastModified: new Date('2026-05-01'), changeFrequency: 'yearly', priority: 0.3 },
  ];
}
