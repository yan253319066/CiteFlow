import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Crawlers Now Outpace Human Browsers — Cloudflare 2026 Data Breakdown | GetCiteFlow',
  description: 'Cloudflare\'s 2026 Radar data shows AI crawlers account for 26.7% of verified bot traffic. GPTBot alone grew 305% since 2024. Enterprise implications for the generative web.',
  keywords: ['AI crawler traffic', 'Cloudflare radar 2026', 'GPTBot traffic', 'bad bot report', 'AI agent traffic'],
  alternates: { canonical: 'https://www.getciteflow.ai/blog/ai-traffic-2026' },
  openGraph: {
    title: 'AI Crawlers Now Outpace Human Browsers',
    description: '57.5% of HTTP requests are now bots. AI crawlers alone account for 26.7% of verified bot traffic — and that number is accelerating.',
    type: 'article',
    publishedTime: '2026-06-18',
    authors: ['GetCiteFlow'],
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-traffic-2026&score=75', width: 1200, height: 630, alt: 'AI Crawler Traffic Surpasses Human Traffic' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Crawlers Now Outpace Human Browsers',
    description: 'Cloudflare data: 57.5% of web requests are bots, 26.7% are AI crawlers. GPTBot up 305% since 2024.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-traffic-2026&score=75'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
