import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Agent Traffic Is Coming — 7,851% Growth and What It Means | GetCiteFlow',
  description: 'AI agent traffic projected to grow 7,851% by 2028. Why agents need fundamentally different content from LLM retrieval — and how to prepare your site for the agent web.',
  keywords: ['AI agent traffic', 'agent traffic growth', 'agent-optimized content', 'agent web', 'AI agent content requirements'],
  alternates: { canonical: 'https://www.getciteflow.ai/blog/ai-agent-traffic-growth' },
  openGraph: {
    title: 'AI Agent Traffic Is Coming — 7,851% Growth and What It Means',
    description: 'AI agent traffic projected to grow 7,851% by 2028. Agents need machine-readable, verifiable, instruction-oriented content — fundamentally different from LLM retrieval.',
    type: 'article',
    publishedTime: '2026-06-22',
    authors: ['GetCiteFlow'],
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-agent-traffic-growth&score=75', width: 1200, height: 630, alt: 'AI Agent Traffic' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agent Traffic Is Coming — 7,851% Growth and What It Means',
    description: 'AI agent traffic projected to grow 7,851% by 2028.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-agent-traffic-growth&score=75'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
