import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is GEO? Generative Engine Optimization Guide | GetCiteFlow',
  description: 'GEO means optimizing content so AI search engines cite your brand. Here is how it works, how it differs from SEO, and why you need both.',
  keywords: ['GEO definition', 'generative engine optimization explained', 'what is GEO', 'AI search optimization', 'GEO vs SEO'],
  alternates: { canonical: 'https://www.getciteflow.ai/blog/what-is-geo' },
  openGraph: {
    title: 'What Is GEO? A Complete Guide to Generative Engine Optimization',
    description: 'GEO is the practice of optimizing content so that AI search engines cite your brand. Here is how it works and why it matters.',
    type: 'article',
    publishedTime: '2025-10-08',
    authors: ['GetCiteFlow Editorial'],
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/what-is-geo&score=75', width: 1200, height: 630, alt: 'What Is GEO? Generative Engine Optimization Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is GEO? A Complete Guide to Generative Engine Optimization',
    description: 'GEO explained: how AI search citations work and why traditional SEO alone is no longer enough.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/what-is-geo&score=75'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
