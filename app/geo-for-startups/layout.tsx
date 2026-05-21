import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GEO for Startups | CiteFlow',
  description: 'Learn how startups can build AI visibility from day one. Strategies for getting your startup mentioned by ChatGPT, Gemini, and AI search.',
  alternates: { canonical: 'https://www.getciteflow.ai/geo-for-startups' },
  openGraph: { title: "GEO for Startups | CiteFlow", description: "Build AI visibility for your startup.", url: 'https://www.getciteflow.ai/geo-for-startups', type: 'article' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
