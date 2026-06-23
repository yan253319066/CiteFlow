import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Measuring AI Visibility: Beyond Google Analytics | GetCiteFlow',
  description: 'Google Analytics cannot measure AI citations. Three core metrics: citation frequency, citation share, and citation trend. How to measure what matters for generative engine optimization.',
  keywords: ['measuring AI visibility', 'GEO metrics', 'citation frequency', 'citation share', 'AI visibility measurement'],
  alternates: {
    canonical: 'https://www.getciteflow.ai/blog/ai-visibility-measurement',
    languages: { zh: 'https://www.getciteflow.ai/zh/blog/ai-visibility-measurement' },
  },
  openGraph: {
    title: 'Measuring AI Visibility: Beyond Google Analytics',
    description: 'Google Analytics cannot measure AI citations. Three core metrics: citation frequency, citation share, and citation trend for GEO.',
    type: 'article',
    publishedTime: '2026-06-22',
    authors: ['GetCiteFlow'],
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-visibility-measurement&score=75', width: 1200, height: 630, alt: 'AI Visibility Measurement' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Measuring AI Visibility: Beyond Google Analytics',
    description: 'Google Analytics cannot measure AI citations. Three core metrics for GEO.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-visibility-measurement&score=75'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
