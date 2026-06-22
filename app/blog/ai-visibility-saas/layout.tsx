import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Visibility for B2B SaaS Companies | GetCiteFlow',
  description: 'SaaS brands with dictionary-word names face unique entity disambiguation challenges. Comparison pages, pricing schema, and integration entity graphs drive AI citations for B2B SaaS.',
  keywords: ['AI visibility SaaS', 'SaaS brand AI citations', 'B2B SaaS entity resolution', 'LLM citations SaaS', 'SaaS comparison pages AI'],
  alternates: { canonical: 'https://www.getciteflow.ai/blog/ai-visibility-saas' },
  openGraph: {
    title: 'AI Visibility for B2B SaaS Companies',
    description: 'Comparison pages, transparent pricing schema, and integration entity graphs drive AI citations for B2B SaaS brands. How to solve the common noun entity problem.',
    type: 'article',
    publishedTime: '2026-06-22',
    authors: ['GetCiteFlow'],
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-visibility-saas&score=75', width: 1200, height: 630, alt: 'AI Visibility SaaS' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Visibility for B2B SaaS Companies',
    description: 'Comparison pages, transparent pricing schema, and integration entity graphs drive AI citations for B2B SaaS brands.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-visibility-saas&score=75'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
