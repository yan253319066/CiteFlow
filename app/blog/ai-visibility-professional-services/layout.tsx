import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Visibility for Professional Services & Agencies | GetCiteFlow',
  description: 'Person vs. firm entity resolution, individual entity pages, local LLM optimization, and case study entity associations for professional services firms and agencies.',
  keywords: ['AI visibility professional services', 'agency AI citations', 'person entity LLM', 'local business schema AI', 'case study entity associations'],
  alternates: {
    canonical: 'https://www.getciteflow.ai/blog/ai-visibility-professional-services',
    languages: { zh: 'https://www.getciteflow.ai/zh/blog/ai-visibility-professional-services' },
  },
  openGraph: {
    title: 'AI Visibility for Professional Services & Agencies',
    description: 'Person vs. firm entity resolution, individual entity pages, and local LLM optimization for consulting, legal, accounting, and agency brands.',
    type: 'article',
    publishedTime: '2026-06-22',
    authors: ['GetCiteFlow'],
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-visibility-professional-services&score=75', width: 1200, height: 630, alt: 'AI Visibility Professional Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Visibility for Professional Services & Agencies',
    description: 'Person vs. firm entity resolution for AI citations in professional services.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-visibility-professional-services&score=75'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
