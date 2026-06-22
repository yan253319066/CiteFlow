import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Blocking AI Crawlers Can Backfire | GetCiteFlow',
  description: 'The critical distinction between crawl and train. Brands that block all AI crawlers lose citations entirely, creating a citation vacuum for competitors.',
  keywords: ['block AI crawlers', 'robots.txt AI', 'crawl vs train', 'GPTBot', 'ClaudeBot', 'citation vacuum'],
  alternates: { canonical: 'https://www.getciteflow.ai/blog/block-ai-crawlers-backfire' },
  openGraph: {
    title: 'Why Blocking AI Crawlers Can Backfire',
    description: 'The crawl vs. train distinction. Brands that block all AI crawlers lose citations entirely, creating a citation vacuum. The optimal configuration is crawl-no-training.',
    type: 'article',
    publishedTime: '2026-06-22',
    authors: ['GetCiteFlow'],
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/block-ai-crawlers-backfire&score=75', width: 1200, height: 630, alt: 'Block AI Crawlers Backfire' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Blocking AI Crawlers Can Backfire',
    description: 'Blocking AI crawlers creates a citation vacuum. Allow crawl, block training.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/block-ai-crawlers-backfire&score=75'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
