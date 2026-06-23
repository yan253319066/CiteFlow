import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Build Entity Associations LLMs Recognize | GetCiteFlow',
  description: 'Wikidata strategy, cross-source category consistency, and the Acquisition-Reinforcement-Consolidation lifecycle for building durable entity associations that LLMs trust.',
  keywords: ['entity associations LLM', 'Wikidata entity strategy', 'cross-source brand consistency', 'entity resolution maintenance', 'brand entity building'],
  alternates: {
    canonical: 'https://www.getciteflow.ai/blog/build-entity-associations',
    languages: { zh: 'https://www.getciteflow.ai/zh/blog/build-entity-associations' },
  },
  openGraph: {
    title: 'How to Build Entity Associations LLMs Recognize',
    description: 'From Wikidata to cross-source consistency: the Acquisition-Reinforcement-Consolidation lifecycle for building entity associations that persist across model updates.',
    type: 'article',
    publishedTime: '2026-06-22',
    authors: ['GetCiteFlow'],
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/build-entity-associations&score=75', width: 1200, height: 630, alt: 'Build Entity Associations' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Build Entity Associations LLMs Recognize',
    description: 'The ARC lifecycle for durable entity associations.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/build-entity-associations&score=75'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
