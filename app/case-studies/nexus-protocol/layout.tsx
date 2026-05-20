import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nexus Protocol Case Study: +140% AI Citations | CiteFlow',
  description: 'How Nexus Protocol increased AI citation frequency by 140% in 3 weeks using GEO. A DeFi case study showing the gap between SEO and LLM visibility.',
  keywords: ['GEO case study', 'AI citations DeFi', 'Nexus Protocol', 'generative engine optimization results'],
  alternates: { canonical: 'https://getciteflow.ai/case-studies/nexus-protocol' },
  openGraph: {
    title: 'Nexus Protocol: +140% AI Citations in 3 Weeks',
    description: 'A DeFi protocol that was invisible in ChatGPT despite strong SEO. The fix was simpler than expected.',
    type: 'article',
    publishedTime: '2026-05-20',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexus Protocol: +140% AI Citations in 3 Weeks',
    description: 'GEO case study: from zero ChatGPT mentions to 43% response rate.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}