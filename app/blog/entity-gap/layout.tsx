import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Entity Gap: Why Most Brands Are Invisible to AI | GetCiteFlow',
  description: '73–92% of brands cannot be identified as entities by LLMs. Named Entity Recognition failure, polysemy, and the hidden tax on AI brand visibility.',
  keywords: ['entity gap', 'named entity recognition', 'brand AI visibility', 'LLM entity disambiguation', 'polysemy brand problem', 'why brands invisible to ChatGPT'],
  alternates: { canonical: 'https://www.getciteflow.ai/blog/entity-gap' },
  openGraph: {
    title: 'The Entity Gap: Why Most Brands Are Invisible to AI',
    description: 'NER failure, polysemy, and the five types of entity gap that prevent 73–92% of brands from being cited by generative AI.',
    type: 'article',
    publishedTime: '2026-06-22',
    authors: ['GetCiteFlow'],
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/entity-gap&score=75', width: 1200, height: 630, alt: 'The Entity Gap' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Entity Gap: Why Most Brands Are Invisible to AI',
    description: 'NER failure, polysemy, and the five types of entity gap.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/entity-gap&score=75'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
