import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Visibility for E-Commerce Brands | GetCiteFlow',
  description: 'Product schema markup is the highest-impact signal for e-commerce AI citations. Review schema, category hierarchies, and inventory data for LLM purchase recommendations.',
  keywords: ['AI visibility ecommerce', 'product schema AI', 'ecommerce LLM citations', 'review schema citations', 'AI agent ecommerce'],
  alternates: { canonical: 'https://www.getciteflow.ai/blog/ai-visibility-ecommerce' },
  openGraph: {
    title: 'AI Visibility for E-Commerce Brands',
    description: 'Product schema, review data, category hierarchy, and inventory signals — how to make your e-commerce products citeable and agent-ready.',
    type: 'article',
    publishedTime: '2026-06-22',
    authors: ['GetCiteFlow'],
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-visibility-ecommerce&score=75', width: 1200, height: 630, alt: 'AI Visibility Ecommerce' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Visibility for E-Commerce Brands',
    description: 'Product schema, review data, and inventory signals for AI citations.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-visibility-ecommerce&score=75'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
