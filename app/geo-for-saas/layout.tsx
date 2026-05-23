import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GEO for SaaS | GetCiteFlow',
  description: 'Learn how to optimize your SaaS product for AI citations in ChatGPT, Perplexity, and Gemini. Specific strategies for software companies.',
  alternates: { canonical: 'https://www.getciteflow.ai/geo-for-saas' },
  openGraph: { title: "GEO for SaaS | GetCiteFlow", description: "Optimize your SaaS product for AI citations.", url: 'https://www.getciteflow.ai/geo-for-saas', type: 'article' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
