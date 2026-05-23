import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nexus Protocol Case Study: +140% AI Citations | GetCiteFlow',
  description: 'How Nexus Protocol increased AI citation frequency by 140% in 3 weeks using GEO. A DeFi case study showing the gap between SEO and LLM visibility.',
  keywords: ['GEO case study', 'AI citations DeFi', 'Nexus Protocol', 'generative engine optimization results'],
  alternates: { canonical: 'https://www.getciteflow.ai/case-studies/nexus-protocol' },
  openGraph: {
    title: 'Nexus Protocol: +140% AI Citations in 3 Weeks',
    description: 'A DeFi protocol that was invisible in ChatGPT despite strong SEO. The fix was simpler than expected.',
    type: 'article',
    publishedTime: '2026-05-20',
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/case-studies/nexus-protocol&score=75', width: 1200, height: 630, alt: 'Nexus Protocol GEO Case Study' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexus Protocol: +140% AI Citations in 3 Weeks',
    description: 'GEO case study: from zero ChatGPT mentions to 43% response rate.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/case-studies/nexus-protocol&score=75'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}