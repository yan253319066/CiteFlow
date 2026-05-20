import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notion GEO Playbook: Dominating AI Productivity Answers | CiteFlow',
  description: 'A two-month analysis of why Notion appears first in 92% of AI-generated productivity recommendations — and what every SaaS company can learn.',
  keywords: ['Notion GEO', 'AI productivity recommendations', 'category anchor effect', 'SaaS GEO strategy'],
  alternates: { canonical: 'https://getciteflow.ai/case-studies/notion-strategy' },
  openGraph: {
    title: 'Notion GEO Playbook: Dominating AI Productivity Answers',
    description: 'Why Notion appears first in 92% of AI-generated productivity recommendations.',
    type: 'article',
    publishedTime: '2026-05-20',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Notion GEO Playbook: Dominating AI Productivity Answers',
    description: 'Why Notion appears first in 92% of AI productivity recommendations.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}