import { MetadataRoute } from 'next'

const pages = [
  '',
  '/blog',
  '/blog/geo-guide',
  '/blog/chatgpt-seo',
  '/blog/ai-visibility',
  '/blog/rank-in-chatgpt',
  '/geo-for-saas',
  '/geo-for-ai-tools',
  '/geo-for-startups',
  '/compare/ahrefs-vs-citeflow',
  '/compare/profound-vs-citeflow',
  '/why-chatgpt-doesnt-mention-your-site',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({
    url: `https://getciteflow.ai${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.8,
  }));
}
