import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ScoreCards } from "@/components/ScoreCards";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CiteFlow | Get Mentioned by AI',
  description: 'Analyze and optimize your website for ChatGPT, Gemini and AI Search.',
  keywords: ['AI Visibility Platform', 'GEO', 'Generative Engine Optimization'],
  alternates: { canonical: 'https://getciteflow.ai/' },
  twitter: { card: 'summary_large_image', title: 'CiteFlow | Get Mentioned by AI', description: 'AI Visibility Platform' },
  openGraph: { title: 'CiteFlow | Get Mentioned by AI', description: 'AI Visibility Platform for GEO', url: 'https://getciteflow.ai/' }
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ScoreCards />
    </main>
  );
}
