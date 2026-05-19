import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ScoreCards } from "@/components/ScoreCards";
import Script from "next/script";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CiteFlow | Get Mentioned by AI',
  description: 'Analyze and optimize your website for ChatGPT, Gemini and AI Search.',
  keywords: ['AI Visibility Platform', 'GEO', 'Generative Engine Optimization'],
  alternates: { canonical: 'https://citeflow.ai/' },
  twitter: { card: 'summary_large_image', title: 'CiteFlow | Get Mentioned by AI', description: 'AI Visibility Platform' },
  openGraph: { title: 'CiteFlow | Get Mentioned by AI', description: 'AI Visibility Platform for GEO', url: 'https://citeflow.ai/' }
};

export default function HomePage() {
  const jsonLd = {"@context":"https://schema.org","@type":"SoftwareApplication","name":"CiteFlow","operatingSystem":"Web","applicationCategory":"AI Visibility Platform","description":"AI Visibility Platform for Generative Engine Optimization (GEO).","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}};
  return (
    <main className="min-h-screen">
      <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <Hero />
      <ScoreCards />
    </main>
  );
}
