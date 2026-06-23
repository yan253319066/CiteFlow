import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Audit Every Brand Needs Before the Generative Web Arrives | GetCiteFlow',
  description: 'A 6-dimension generative web audit covering entity clarity, schema completeness, crawler configuration, content structure, comparison coverage, and agent readiness.',
  keywords: ['generative web audit', 'AI visibility audit', 'GEO audit', 'brand AI readiness', 'AI crawler audit'],
  alternates: {
    canonical: 'https://www.getciteflow.ai/blog/ai-visibility-audit',
    languages: { zh: 'https://www.getciteflow.ai/zh/blog/ai-visibility-audit' },
  },
  openGraph: {
    title: 'The Audit Every Brand Needs Before the Generative Web Arrives',
    description: 'A 6-dimension generative web audit covering entity clarity, schema completeness, crawler configuration, content structure, comparison coverage, and agent readiness.',
    type: 'article',
    publishedTime: '2026-06-22',
    authors: ['GetCiteFlow'],
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-visibility-audit&score=75', width: 1200, height: 630, alt: 'AI Visibility Audit' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Audit Every Brand Needs Before the Generative Web Arrives',
    description: 'A 6-dimension generative web audit covering entity clarity, schema completeness, crawler configuration, content structure, comparison coverage, and agent readiness.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-visibility-audit&score=75'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
