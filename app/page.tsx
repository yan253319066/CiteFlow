import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ScoreCards } from "@/components/ScoreCards";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { JsonLd } from "@/components/JsonLd";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GetCiteFlow | Get Mentioned by AI',
  description: 'Analyze and optimize your website for ChatGPT, Gemini and AI Search.',
  keywords: ['AI Visibility Platform', 'GEO', 'Generative Engine Optimization', 'GEO tool', 'AI visibility checker', 'ChatGPT SEO checker', 'free GEO report'],
  alternates: { canonical: 'https://www.getciteflow.ai/' },
  twitter: { card: 'summary_large_image', title: 'GetCiteFlow | Get Mentioned by AI', description: 'AI Visibility Platform' },
  openGraph: { title: 'GetCiteFlow | Get Mentioned by AI', description: 'AI Visibility Platform for GEO', url: 'https://www.getciteflow.ai/', images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai&score=75', width: 1200, height: 630, alt: 'GetCiteFlow OG Image' }] }
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "GetCiteFlow",
  applicationCategory: "AI SEO Platform",
  operatingSystem: "Web",
  description: "AI Visibility Platform for GEO. Analyze and optimize your website for ChatGPT, Gemini, and AI search.",
  url: "https://www.getciteflow.ai",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is GEO (Generative Engine Optimization)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GEO (Generative Engine Optimization) is the practice of optimizing your website content to increase visibility and citation rates in AI-powered search results, including ChatGPT, Perplexity, Gemini, and Google AI Overviews. Unlike traditional SEO, GEO focuses on making content structure and entity clarity optimized for AI retrieval systems."
      }
    },
    {
      "@type": "Question",
      name: "How does GetCiteFlow analyze my website for AI visibility?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GetCiteFlow analyzes your website by examining your content structure, entity clarity, FAQ coverage, and other factors that AI systems use to determine citation priority. The tool provides an AI Visibility Score and specific recommendations to improve your chances of being cited by LLMs."
      }
    },
    {
      "@type": "Question",
      name: "What is the difference between SEO and GEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional SEO optimizes for Google/Bing rankings using backlinks, keywords, and page speed. GEO optimizes for AI citation by focusing on entity clarity, structured data, FAQ markup, and authoritative content that AI systems can easily extract and cite in their responses."
      }
    },
    {
      "@type": "Question",
      name: "How can I get my website mentioned by ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To increase your chances of being cited by ChatGPT, focus on: (1) Clear entity definitions with category-specific language, (2) Comparison content with competitors, (3) FAQ pages with Schema.org markup, and (4) Getting mentioned on high-authority sources that AI systems trust."
      }
    },
    {
      "@type": "Question",
      name: "Is GetCiteFlow free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, GetCiteFlow offers a free tier that allows you to analyze your website and receive an AI Visibility Score with basic recommendations. You can get started by entering your website URL on the homepage."
      }
    }
  ]
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={softwareSchema} />
      <JsonLd data={faqSchema} />
      <Navbar />
      <Hero />
      <ScoreCards />
      <HowItWorks />
      <Features />
    </main>
  );
}
