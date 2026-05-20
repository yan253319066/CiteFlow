import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GEO Case Studies | CiteFlow',
  description: 'Real-world Generative Engine Optimization results. See how companies increased their AI citation frequency using GEO strategies.',
  keywords: ['GEO case studies', 'AI visibility results', 'generative engine optimization examples'],
  alternates: { canonical: 'https://www.getciteflow.ai/case-studies' },
  openGraph: {
    title: 'GEO Case Studies — Real AI Visibility Results',
    description: 'See how companies increased AI citations using GEO.',
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/case-studies&score=75', width: 1200, height: 630, alt: 'CiteFlow Case Studies OG Image' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GEO Case Studies — Real AI Visibility Results',
    description: 'See how companies increased AI citations using GEO.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/case-studies&score=75'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}