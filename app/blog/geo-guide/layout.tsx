import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Generative Engines Choose What to Cite | CiteFlow GEO Guide',
  description: 'LLMs don\'t crawl the web like Google does. Understanding how AI selects sources changes everything about your content strategy. A deep dive into RAG pipelines and citation priority.',
  keywords: ['GEO guide', 'generative engine optimization', 'AI citations', 'LLM source selection', 'RAG pipeline'],
  alternates: { canonical: 'https://www.getciteflow.ai/blog/geo-guide' },
  openGraph: {
    title: 'How Generative Engines Choose What to Cite — GEO Guide',
    description: 'A deep dive into how LLMs select sources and why traditional SEO doesn\'t prepare you for AI citations.',
    type: 'article',
    publishedTime: '2026-05-15',
    authors: ['CiteFlow Editorial'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Generative Engines Choose What to Cite',
    description: 'A deep dive into how LLMs select sources.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}