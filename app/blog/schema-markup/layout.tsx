import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schema Markup That Directly Improves AI Citation Rates | GetCiteFlow',
  description: 'FAQ, Organization, and Product schema show 2-3x citation uplift. A ranked implementation guide for schema types that correlate with LLM citation frequency.',
  keywords: ['schema markup AI citations', 'FAQ schema LLM', 'Organization schema entity resolution', 'structured data generative engine optimization', 'AI citation schema types'],
  alternates: {
    canonical: 'https://www.getciteflow.ai/blog/schema-markup',
    languages: { zh: 'https://www.getciteflow.ai/zh/blog/schema-markup' },
  },
  openGraph: {
    title: 'Schema Markup That Directly Improves AI Citation Rates',
    description: 'FAQ schema gets cited 2x more. Organization schema enables entity resolution. A ranked guide to schema types that improve LLM citation frequency.',
    type: 'article',
    publishedTime: '2026-06-22',
    authors: ['GetCiteFlow'],
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/schema-markup&score=75', width: 1200, height: 630, alt: 'Schema Markup for AI Citations' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schema Markup That Directly Improves AI Citation Rates',
    description: 'FAQ, Organization, and Product schema show 2-3x citation uplift.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/schema-markup&score=75'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
