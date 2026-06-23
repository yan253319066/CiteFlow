import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Generative Engines Choose What to Cite | GetCiteFlow GEO Guide',
  description: 'LLMs don\'t crawl the web like Google does. Understanding how AI selects sources changes everything about your content strategy. A deep dive into RAG pipelines and citation priority.',
  keywords: ['GEO guide', 'generative engine optimization', 'AI citations', 'LLM source selection', 'RAG pipeline'],
  alternates: {
    canonical: 'https://www.getciteflow.ai/blog/geo-guide',
    languages: { zh: 'https://www.getciteflow.ai/zh/blog/geo-guide' },
  },
  openGraph: {
    title: 'How Generative Engines Choose What to Cite — GEO Guide',
    description: 'A deep dive into how LLMs select sources and why traditional SEO doesn\'t prepare you for AI citations.',
    type: 'article',
    publishedTime: '2026-05-15',
    authors: ['Neil Yan'],
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/geo-guide&score=75', width: 1200, height: 630, alt: 'How Generative Engines Choose What to Cite' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Generative Engines Choose What to Cite',
    description: 'A deep dive into how LLMs select sources.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/geo-guide&score=75'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}