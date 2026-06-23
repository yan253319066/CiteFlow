import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How AI Overviews Changed Google Search | GetCiteFlow',
  description: 'AI Overviews reduced organic CTR by 15-25% for informational queries. Google\'s architecture differs fundamentally from ChatGPT — brands must optimize for both.',
  keywords: ['AI Overviews', 'Google AI search', 'zero-click search', 'AI Overviews strategy', 'Google generative search'],
  alternates: {
    canonical: 'https://www.getciteflow.ai/blog/ai-overviews-changed-google-search',
    languages: { zh: 'https://www.getciteflow.ai/zh/blog/ai-overviews-changed-google-search' },
  },
  openGraph: {
    title: 'How AI Overviews Changed Google Search',
    description: 'AI Overviews use a fundamentally different retrieval architecture from ChatGPT. Google + PageRank + E-E-A-T, versus RAG + entity clarity. Brands must optimize for both.',
    type: 'article',
    publishedTime: '2026-06-22',
    authors: ['GetCiteFlow'],
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-overviews-changed-google-search&score=75', width: 1200, height: 630, alt: 'AI Overviews Changed Google Search' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How AI Overviews Changed Google Search',
    description: 'AI Overviews use a fundamentally different retrieval architecture from ChatGPT.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-overviews-changed-google-search&score=75'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
