import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Visibility Growth Service | GetCiteFlow',
  description: 'A managed service that builds your brand\'s presence across AI systems — ChatGPT, Claude, Gemini, Perplexity. Industry-specific platform strategy, brand entity building, citation-optimized content, and more. From $2,999/month.',
  alternates: { canonical: 'https://www.getciteflow.ai/services/ai-visibility-growth' },
  keywords: ['AI visibility service', 'brand AI visibility', 'AI discoverability service', 'industry AI citation', 'brand presence in AI', 'AI content strategy service', 'GEO service', 'AI citation service', 'ChatGPT brand presence', 'GetCiteFlow enterprise'],
  openGraph: {
    title: 'AI Visibility Growth Service | GetCiteFlow',
    description: 'Build your brand\'s presence across ChatGPT, Claude, Gemini, and Perplexity with a managed visibility growth service.',
    url: 'https://www.getciteflow.ai/services/ai-visibility-growth',
    type: 'website',
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/services/ai-visibility-growth&score=85', width: 1200, height: 630, alt: 'AI Visibility Growth Service - Get CiteFlow' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Visibility Growth Service | GetCiteFlow',
    description: 'Build your brand\'s presence across ChatGPT, Claude, Gemini, and Perplexity with a managed visibility growth service.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/services/ai-visibility-growth&score=85']
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
