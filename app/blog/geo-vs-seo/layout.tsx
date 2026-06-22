import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GEO vs SEO: Three Critical Differences | GetCiteFlow',
  description: 'SEO optimizes for rankability and backlinks; GEO optimizes for extractability and entity consensus. Three mechanism-level differences that change how you build content.',
  keywords: ['GEO vs SEO', 'Generative Engine Optimization', 'AI citation optimization', 'entity consensus', 'extractability vs rankability'],
  alternates: { canonical: 'https://www.getciteflow.ai/blog/geo-vs-seo' },
  openGraph: {
    title: 'GEO vs SEO: Three Critical Differences',
    description: 'Extractability vs. rankability, entity consensus vs. backlinks, entity triples vs. keywords — how GEO diverges from SEO at the mechanism level.',
    type: 'article',
    publishedTime: '2026-06-22',
    authors: ['GetCiteFlow'],
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/geo-vs-seo&score=75', width: 1200, height: 630, alt: 'GEO vs SEO' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GEO vs SEO: Three Critical Differences',
    description: 'Three mechanism-level differences between GEO and SEO.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/geo-vs-seo&score=75'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
