import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GEO for SaaS | GetCiteFlow',
  description: 'Learn how to optimize your SaaS product for AI citations in ChatGPT, Perplexity, Gemini, DeepSeek, and Doubao. Specific strategies for software companies.',
  alternates: { canonical: 'https://www.getciteflow.ai/geo-for-saas' },
  openGraph: { title: "GEO for SaaS | GetCiteFlow", description: "Optimize your SaaS product for AI citations.", url: 'https://www.getciteflow.ai/geo-for-saas', type: 'article', images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/geo-for-saas&score=75', width: 1200, height: 630, alt: 'GEO for SaaS - Get CiteFlow' }] },
  twitter: { card: 'summary_large_image', title: 'GEO for SaaS | GetCiteFlow', description: 'Learn how to optimize your SaaS product for AI citations in ChatGPT, Perplexity, Gemini, DeepSeek, and Doubao. Specific strategies for software companies.', images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/geo-for-saas&score=75'] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
