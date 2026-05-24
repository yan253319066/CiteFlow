import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GEO for AI Tools | GetCiteFlow',
  description: 'Learn how to optimize your AI tool or AI product for citations in ChatGPT, Perplexity, and Gemini. Special strategies for AI companies.',
  alternates: { canonical: 'https://www.getciteflow.ai/geo-for-ai-tools' },
  openGraph: { title: "GEO for AI Tools | GetCiteFlow", description: "Optimize your AI tool for AI citations.", url: 'https://www.getciteflow.ai/geo-for-ai-tools', type: 'article', images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/geo-for-ai-tools&score=75', width: 1200, height: 630, alt: 'GEO for AI Tools - Get CiteFlow' }] },
  twitter: { card: 'summary_large_image', title: 'GEO for AI Tools | GetCiteFlow', description: 'Learn how to optimize your AI tool or AI product for citations in ChatGPT, Perplexity, and Gemini. Special strategies for AI companies.', images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/geo-for-ai-tools&score=75'] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
