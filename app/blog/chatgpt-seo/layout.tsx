import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search Rankings Don\'t Translate to AI Citations | GetCiteFlow',
  description: 'High Google rankings don\'t guarantee AI citations. We compared 50 B2B SaaS companies and found a weak correlation. Here\'s what causes the gap and how to bridge it.',
  keywords: ['ChatGPT SEO', 'AI citations vs rankings', 'entity association', 'GEO vs SEO'],
  alternates: { canonical: 'https://www.getciteflow.ai/blog/chatgpt-seo' },
  openGraph: {
    title: 'Search Rankings Don\'t Translate to AI Citations',
    description: 'The correlation between Google rankings and ChatGPT citations is only 0.3. Here\'s why.',
    type: 'article',
    publishedTime: '2026-05-10',
    authors: ['Neil Yan'],
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/chatgpt-seo&score=75', width: 1200, height: 630, alt: 'Search Rankings Don\'t Translate to AI Citations' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Search Rankings Don\'t Translate to AI Citations',
    description: 'The correlation between Google rankings and ChatGPT citations is only 0.3.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/chatgpt-seo&score=75'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}