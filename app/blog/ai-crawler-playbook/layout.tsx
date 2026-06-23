import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The llms.txt & robots.txt Playbook for AI Crawlers | GetCiteFlow',
  description: 'Configure llms.txt and robots.txt to maximize AI citation rates. The crawl-no-training configuration, llms.txt entity declaration chain, and optimal crawler allowlist.',
  keywords: ['llms.txt', 'robots.txt AI crawlers', 'GPTBot', 'ClaudeBot', 'AI citation infrastructure'],
  alternates: {
    canonical: 'https://www.getciteflow.ai/blog/ai-crawler-playbook',
    languages: { zh: 'https://www.getciteflow.ai/zh/blog/ai-crawler-playbook' },
  },
  openGraph: {
    title: 'The llms.txt & robots.txt Playbook for AI Crawlers',
    description: 'How to configure llms.txt and robots.txt for maximum AI citation value — including the crawl-no-training configuration and entity declaration chain.',
    type: 'article',
    publishedTime: '2026-06-22',
    authors: ['GetCiteFlow'],
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-crawler-playbook&score=75', width: 1200, height: 630, alt: 'AI Crawler Playbook' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The llms.txt & robots.txt Playbook for AI Crawlers',
    description: 'Configure llms.txt and robots.txt for AI citation.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-crawler-playbook&score=75'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
