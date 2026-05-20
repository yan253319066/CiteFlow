import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ScoreCards } from "@/components/ScoreCards";
import { JsonLd } from "@/components/JsonLd";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CiteFlow | Get Mentioned by AI',
  description: 'Analyze and optimize your website for ChatGPT, Gemini and AI Search.',
  keywords: ['AI Visibility Platform', 'GEO', 'Generative Engine Optimization', 'GEO tool', 'AI visibility checker', 'ChatGPT SEO checker', 'free GEO report'],
  alternates: { canonical: 'https://www.getciteflow.ai/' },
  twitter: { card: 'summary_large_image', title: 'CiteFlow | Get Mentioned by AI', description: 'AI Visibility Platform' },
  openGraph: { title: 'CiteFlow | Get Mentioned by AI', description: 'AI Visibility Platform for GEO', url: 'https://www.getciteflow.ai/' }
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CiteFlow",
  applicationCategory: "AI SEO Platform",
  operatingSystem: "Web",
  description: "AI Visibility Platform for GEO. Analyze and optimize your website for ChatGPT, Gemini, and AI search.",
  url: "https://www.getciteflow.ai",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={softwareSchema} />
      <Navbar />
      <Hero />
      <ScoreCards />
    </main>
  );
}
