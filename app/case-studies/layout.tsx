import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GEO Case Studies | CiteFlow',
  description: 'Real-world Generative Engine Optimization results. See how companies increased their AI citation frequency using GEO strategies.',
  keywords: ['GEO case studies', 'AI visibility results', 'generative engine optimization examples'],
  alternates: { canonical: 'https://www.getciteflow.ai/case-studies' },
  openGraph: {
    title: 'GEO Case Studies — Real AI Visibility Results',
    description: 'See how companies increased AI citations using GEO.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GEO Case Studies — Real AI Visibility Results',
    description: 'See how companies increased AI citations using GEO.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}