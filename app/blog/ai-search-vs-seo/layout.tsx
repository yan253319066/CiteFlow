import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Search vs. SEO: Why Rankings No Longer Drive Traffic | GetCiteFlow',
  description: 'Google rankings do not guarantee AI citations. Analyzing the divergence between traditional SEO and AI-driven search visibility, with data and implications for content teams.',
  keywords: ['AI search vs SEO', 'AI citations', 'SEO diminishing returns', 'AI search impact', 'generative search traffic'],
  alternates: { canonical: 'https://www.getciteflow.ai/blog/ai-search-vs-seo' },
  openGraph: {
    title: 'AI Search vs. SEO: Why Traditional Rankings No Longer Drive Traffic',
    description: 'The signals Google uses to rank pages and the signals LLMs use to cite sources are fundamentally different. Here is what the gap means for your content strategy.',
    type: 'article',
    publishedTime: '2025-10-22',
    modifiedTime: '2026-05-31',
    authors: ['Neil Yan'],
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-search-vs-seo&score=75', width: 1200, height: 630, alt: 'AI Search vs SEO Comparison' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Search vs. SEO: Why Traditional Rankings No Longer Drive Traffic',
    description: 'Google rankings do not guarantee AI citations. The gap is widening.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-search-vs-seo&score=75'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
