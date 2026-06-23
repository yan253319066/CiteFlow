import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Generative AI Actually Chooses What to Cite | GetCiteFlow',
  description: 'LLMs use retrieval-augmented generation, training data prevalence, and entity recognition to select sources. Understanding these mechanisms is the foundation of GEO strategy.',
  keywords: ['AI source selection', 'RAG retrieval', 'GEO mechanics', 'how ChatGPT cites sources', 'LLM citation mechanism'],
  alternates: {
    canonical: 'https://www.getciteflow.ai/blog/how-ai-chooses-sources',
    languages: { zh: 'https://www.getciteflow.ai/zh/blog/how-ai-chooses-sources' },
  },
  openGraph: {
    title: 'How Generative AI Actually Chooses What to Cite',
    description: 'Retrieval-augmented generation, training data prevalence, and entity recognition — the three mechanisms that determine whether your brand gets cited by an LLM.',
    type: 'article',
    publishedTime: '2026-06-20',
    authors: ['GetCiteFlow'],
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/how-ai-chooses-sources&score=75', width: 1200, height: 630, alt: 'How AI Chooses Sources' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Generative AI Actually Chooses What to Cite',
    description: 'RAG, training data prevalence, and entity recognition — the three mechanisms behind AI citation decisions.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/how-ai-chooses-sources&score=75'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
