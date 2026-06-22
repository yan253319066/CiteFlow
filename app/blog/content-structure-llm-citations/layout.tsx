import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Content Structure That Gets Cited by Every Major LLM | GetCiteFlow',
  description: 'Reverse-engineered from 1,200+ cited pages: the universal four-layer architecture (Entity Definition → Relationship Map → Proof Layer → Structured Data) that predicts citation success across ChatGPT, Perplexity, Claude, Gemini, and Copilot.',
  keywords: ['content structure LLM citations', 'entity definition', 'relationship map', 'structured data citations', 'content cited by ChatGPT'],
  alternates: { canonical: 'https://www.getciteflow.ai/blog/content-structure-llm-citations' },
  openGraph: {
    title: 'The Content Structure That Gets Cited by Every Major LLM',
    description: 'Content cited by ChatGPT, Perplexity, Claude, Gemini, and Copilot shares a universal four-layer architecture. Build every page to satisfy all four layers and 4x your citation rate.',
    type: 'article',
    publishedTime: '2026-06-22',
    authors: ['GetCiteFlow'],
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/content-structure-llm-citations&score=75', width: 1200, height: 630, alt: 'Content Structure LLM' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Content Structure That Gets Cited by Every Major LLM',
    description: 'Content cited by ChatGPT, Perplexity, Claude, Gemini, and Copilot shares a universal four-layer architecture.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/content-structure-llm-citations&score=75'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
