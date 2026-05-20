import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ScoreCards } from "@/components/ScoreCards";
import { JsonLd } from "@/components/JsonLd";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CiteFlow | Get Mentioned by AI',
  description: 'Analyze and optimize your website for ChatGPT, Gemini and AI Search.',
  keywords: ['AI Visibility Platform', 'GEO', 'Generative Engine Optimization', 'GEO tool', 'AI visibility checker', 'ChatGPT SEO checker', 'free GEO report'],
  alternates: { canonical: 'https://getciteflow.ai/' },
  twitter: { card: 'summary_large_image', title: 'CiteFlow | Get Mentioned by AI', description: 'AI Visibility Platform' },
  openGraph: { title: 'CiteFlow | Get Mentioned by AI', description: 'AI Visibility Platform for GEO', url: 'https://getciteflow.ai/' }
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CiteFlow",
  applicationCategory: "AI SEO Platform",
  operatingSystem: "Web",
  description: "AI Visibility Platform for GEO. Analyze and optimize your website for ChatGPT, Gemini, and AI search.",
  url: "https://getciteflow.ai",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is CiteFlow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CiteFlow is an AI Visibility Platform that helps website owners analyze and optimize their sites for Generative Engine Optimization (GEO). It helps you get mentioned by AI assistants like ChatGPT and Gemini."
      }
    },
    {
      "@type": "Question",
      name: "What is Generative Engine Optimization (GEO)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GEO is the practice of optimizing your website to improve its visibility in AI-powered search results and generative AI responses. It involves structured data markup, content optimization, and technical SEO improvements."
      }
    },
    {
      "@type": "Question",
      name: "How does CiteFlow analyze my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CiteFlow crawls your website to detect key signals including structured data (JSON-LD), FAQ schema, HowTo schema, meta tags, content quality, and technical SEO factors. Our AI analyzes these signals to provide actionable recommendations."
      }
    },
    {
      "@type": "Question",
      name: "Is CiteFlow free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, CiteFlow offers a free tier that allows you to analyze your website and get detailed GEO reports. Premium features are available for advanced users and businesses."
      }
    },
    {
      "@type": "Question",
      name: "Which AI platforms does CiteFlow optimize for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CiteFlow optimizes for all major AI platforms including ChatGPT, Gemini, Claude, Perplexity, and other AI search engines that use web data to generate responses."
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
    </main>
  );
}
