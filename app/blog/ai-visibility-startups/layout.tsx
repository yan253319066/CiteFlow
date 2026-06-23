import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Visibility for Startups with No Backlinks | GetCiteFlow',
  description: "Backlinks don't matter for AI citations. Startups can compete with established brands through entity clarity, comparison pages, and directory submissions — zero backlinks needed.",
  keywords: ['AI visibility startups', 'startup AI citations', 'no backlinks AI', 'entity establishment startup', 'GEO for startups'],
  alternates: {
    canonical: 'https://www.getciteflow.ai/blog/ai-visibility-startups',
    languages: { zh: 'https://www.getciteflow.ai/zh/blog/ai-visibility-startups' },
  },
  openGraph: {
    title: 'AI Visibility for Startups with No Backlinks',
    description: "Backlinks are irrelevant to LLM citations. Startups can outperform high-DR domains through entity clarity and comparison pages. First-mover advantage is real in GEO.",
    type: 'article',
    publishedTime: '2026-06-22',
    authors: ['GetCiteFlow'],
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-visibility-startups&score=75', width: 1200, height: 630, alt: 'AI Visibility Startups' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Visibility for Startups with No Backlinks',
    description: "Backlinks are irrelevant to LLM citations. Startups can compete through entity clarity.",
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-visibility-startups&score=75'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
