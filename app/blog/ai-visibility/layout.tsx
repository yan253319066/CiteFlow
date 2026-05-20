import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Visibility Is a Better Metric Than CTR | CiteFlow',
  description: 'CTR is fading as the primary metric for content performance. AI visibility — how often your brand is cited in LLM outputs — is the replacement. Here\'s why and how to measure it.',
  keywords: ['AI visibility', 'CTR alternative', 'citation frequency', 'LLM metrics', 'GEO measurement'],
  alternates: { canonical: 'https://www.getciteflow.ai/blog/ai-visibility' },
  openGraph: {
    title: 'AI Visibility Is a Better Metric Than CTR',
    description: 'Why AI visibility is replacing CTR as the primary metric for content performance in the age of generative search.',
    type: 'article',
    publishedTime: '2026-05-05',
    authors: ['CiteFlow Editorial'],
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-visibility&score=75', width: 1200, height: 630, alt: 'AI Visibility Is a Better Metric Than CTR' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Visibility Is a Better Metric Than CTR',
    description: 'Why AI visibility is replacing CTR in the age of generative search.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-visibility&score=75'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}