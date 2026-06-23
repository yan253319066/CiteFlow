import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The ROI of AI Citations: Converting Visibility into Revenue | GetCiteFlow',
  description: 'AI citations drive three forms of value: direct referral traffic, brand awareness, and entity reinforcement. How to measure and attribute revenue from generative engine citations.',
  keywords: ['ROI AI citations', 'AI visibility revenue', 'citation attribution', 'GEO ROI', 'AI citations value'],
  alternates: {
    canonical: 'https://www.getciteflow.ai/blog/ai-citations-roi',
    languages: { zh: 'https://www.getciteflow.ai/zh/blog/ai-citations-roi' },
  },
  openGraph: {
    title: 'The ROI of AI Citations: Converting Visibility into Revenue',
    description: 'AI citations drive three forms of value: direct referral traffic, brand awareness, and entity reinforcement. How to measure and attribute revenue from generative engine citations.',
    type: 'article',
    publishedTime: '2026-06-22',
    authors: ['GetCiteFlow'],
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-citations-roi&score=75', width: 1200, height: 630, alt: 'ROI of AI Citations' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The ROI of AI Citations: Converting Visibility into Revenue',
    description: 'AI citations drive three forms of value: direct referral traffic, brand awareness, and entity reinforcement.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-citations-roi&score=75'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
