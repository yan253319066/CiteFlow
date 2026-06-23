import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comparison Content: Highest-ROI Format for AI Citations | GetCiteFlow',
  description: '"X vs Y" pages average 3-5x higher citation frequency than standard blog posts. Why LLMs prefer comparison content and how to build pages that get cited.',
  keywords: ['comparison content AI', 'comparison pages LLM', 'X vs Y citations', 'highest ROI content format', 'comparison table schema'],
  alternates: {
    canonical: 'https://www.getciteflow.ai/blog/comparison-content-ai-citations',
    languages: { zh: 'https://www.getciteflow.ai/zh/blog/comparison-content-ai-citations' },
  },
  openGraph: {
    title: 'Comparison Content: Highest-ROI Format for AI Citations',
    description: 'Comparison pages are cited 3-5x more than general blog posts. Why LLMs prefer "X vs Y" content and how to build pages that capture recommendation queries.',
    type: 'article',
    publishedTime: '2026-06-22',
    authors: ['GetCiteFlow'],
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/comparison-content-ai-citations&score=75', width: 1200, height: 630, alt: 'Comparison Content AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comparison Content: Highest-ROI Format for AI Citations',
    description: 'Comparison pages are cited 3-5x more than general blog posts.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/comparison-content-ai-citations&score=75'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
