import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notion GEO Playbook: Dominating AI Productivity Answers | CiteFlow',
  description: 'A two-month analysis of why Notion appears first in 92% of AI-generated productivity recommendations — and what every SaaS company can learn.',
  keywords: ['Notion GEO', 'AI productivity recommendations', 'category anchor effect', 'SaaS GEO strategy'],
  alternates: { canonical: 'https://www.getciteflow.ai/case-studies/notion-strategy' },
  openGraph: {
    title: 'Notion GEO Playbook: Dominating AI Productivity Answers',
    description: 'Why Notion appears first in 92% of AI-generated productivity recommendations.',
    type: 'article',
    publishedTime: '2026-05-20',
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/case-studies/notion-strategy&score=75', width: 1200, height: 630, alt: 'Notion GEO Playbook Case Study' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Notion GEO Playbook: Dominating AI Productivity Answers',
    description: 'Why Notion appears first in 92% of AI productivity recommendations.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/case-studies/notion-strategy&score=75'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}