import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Future of Search Is Citation — What CMOs Should Know for 2027 | GetCiteFlow',
  description: 'By 2027, 50%+ of searches will return AI-generated answers. Entity authority will replace domain authority. What CMOs should invest in for the citation economy.',
  keywords: ['future of search', 'citation economy', 'GEO 2027', 'entity authority', 'CMO AI strategy'],
  alternates: { canonical: 'https://www.getciteflow.ai/blog/future-search-citations-cmo' },
  openGraph: {
    title: 'The Future of Search Is Citation — What CMOs Should Know for 2027 | GetCiteFlow',
    description: 'By 2027, 50%+ of searches will return AI-generated answers. Entity authority will replace domain authority. What CMOs should invest in for the citation economy.',
    type: 'article',
    publishedTime: '2026-06-22',
    authors: ['Neil Yan'],
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/future-search-citations-cmo&score=75', width: 1200, height: 630, alt: 'The Future of Search Is Citation — What CMOs Should Know for 2027' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Future of Search Is Citation — What CMOs Should Know for 2027 | GetCiteFlow',
    description: 'By 2027, 50%+ of searches will return AI-generated answers. Entity authority will replace domain authority.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/future-search-citations-cmo&score=75'],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
