import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GEO for AI Tools | GetCiteFlow',
  description: 'Learn how to optimize your AI tool or AI product for citations in ChatGPT, Perplexity, and Gemini. Special strategies for AI companies.',
  alternates: { canonical: 'https://www.getciteflow.ai/geo-for-ai-tools' },
  openGraph: { title: "GEO for AI Tools | GetCiteFlow", description: "Optimize your AI tool for AI citations.", url: 'https://www.getciteflow.ai/geo-for-ai-tools', type: 'article' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
