import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GEO for Startups | GetCiteFlow',
description: 'Learn how startups can build AI visibility from day one. Strategies for getting your startup mentioned by ChatGPT, Gemini, DeepSeek, Doubao, Qwen, and AI search.',
  alternates: { canonical: 'https://www.getciteflow.ai/geo-for-startups' },
  openGraph: { title: "GEO for Startups | GetCiteFlow", description: "Build AI visibility for your startup.", url: 'https://www.getciteflow.ai/geo-for-startups', type: 'article', images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/geo-for-startups&score=75', width: 1200, height: 630, alt: 'GEO for Startups - Get CiteFlow' }] },
  twitter: { card: 'summary_large_image', title: 'GEO for Startups | GetCiteFlow', description: 'Learn how startups can build AI visibility from day one. Strategies for getting your startup mentioned by ChatGPT, Gemini, DeepSeek, Doubao, Qwen, and AI search.', images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/geo-for-startups&score=75'] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
