import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ScoreCards } from "@/components/ScoreCards";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { JsonLd } from "@/components/JsonLd";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GetCiteFlow | Enterprise AI Brand Service — Get Recommended by AI',
  description: 'Enterprise service that makes your brand get mentioned and recommended by ChatGPT, Claude, Perplexity, and Gemini. Free AI Visibility Scanner to check where your brand stands.',
  keywords: ['AI brand visibility', 'get mentioned by AI', 'enterprise AI service', 'brand recommended by AI', 'AI visibility scanner', 'ChatGPT brand mentions', 'AI brand service'],
  alternates: { canonical: 'https://www.getciteflow.ai/' },
  twitter: { card: 'summary_large_image', title: 'GetCiteFlow — Get Your Brand Recommended by AI', description: 'Enterprise service that makes your brand get mentioned and recommended by ChatGPT, Claude, and Perplexity. Free AI Visibility Scanner included.' },
  openGraph: { title: 'GetCiteFlow — Get Your Brand Recommended by AI', description: 'Enterprise service that makes your brand get mentioned and recommended by ChatGPT, Claude, and Perplexity. Free AI Visibility Scanner included.', url: 'https://www.getciteflow.ai/', images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai&score=75', width: 1200, height: 630, alt: 'GetCiteFlow — Get Your Brand Recommended by AI' }] }
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "GetCiteFlow",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: "Enterprise AI brand service. Get your brand mentioned and recommended by ChatGPT, Gemini, Claude, and Perplexity. Free AI Visibility Scanner available.",
  url: "https://www.getciteflow.ai",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Visibility Growth",
  description: "A managed service that builds your brand's presence across AI systems including ChatGPT, Claude, Gemini, and Perplexity. We analyze the platforms AI trusts in your specific industry and build discoverable brand signals across them — through custom content, entity optimization, and cross-platform distribution.",
  provider: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  areaServed: "Worldwide",
  audience: { "@type": "Audience", audienceType: "Business" },
  offers: { "@type": "AggregateOffer", lowPrice: "4999", priceCurrency: "USD", offerCount: "1" },
  url: "https://www.getciteflow.ai/services/ai-visibility-growth",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is GetCiteFlow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GetCiteFlow is an enterprise service that helps brands get mentioned and recommended by AI systems — ChatGPT, Claude, Perplexity, Gemini, and Google AI Overviews. We also offer a free AI Visibility Scanner that checks your website's current AI visibility."
      }
    },
    {
      "@type": "Question",
      name: "How does GetCiteFlow help my brand get recommended by AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GetCiteFlow analyzes the platforms and sources that AI systems trust in your specific industry, then builds discoverable brand signals across them — through custom content, entity optimization, and cross-platform distribution. Our enterprise service actively builds your brand's presence so AI systems mention and recommend you."
      }
    },
    {
      "@type": "Question",
      name: "Is GetCiteFlow a GEO tool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — GetCiteFlow is an enterprise brand service. We offer a free AI Visibility Scanner that checks GEO (Generative Engine Optimization) signals, but the scanner is just a diagnostic tool. Our core business is helping enterprise brands get mentioned and recommended by AI systems."
      }
    },
    {
      "@type": "Question",
      name: "What is the free AI Visibility Scanner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The free AI Visibility Scanner checks your website's content structure, entity clarity, FAQ coverage, and other factors that AI systems use to determine who to mention. You get an AI Visibility Score (0-100) with recommendations — a free diagnostic to see where your brand stands."
      }
    },
    {
      "@type": "Question",
      name: "How can I get my brand mentioned by ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To increase your chances of being mentioned by ChatGPT, focus on: (1) Clear entity definitions with category-specific language, (2) Comparison content with competitors, (3) FAQ pages with Schema.org markup, and (4) Getting mentioned on high-authority sources that AI systems trust. Our enterprise service handles all of this for you."
      }
    },
    {
      "@type": "Question",
      name: "Is the AI Visibility Scanner free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the AI Visibility Scanner is completely free — no credit card required. Enter any URL and get an AI Visibility Score with basic recommendations. It's a free diagnostic to show you where your brand stands with AI."
      }
    },
    {
      "@type": "Question",
      name: "What do you get in a free AI Visibility Scan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GetCiteFlow scans your homepage and core landing pages, checking title tags, H1 structure, FAQ coverage, Schema markup, meta descriptions, robots.txt, and llms.txt. You get an AI Visibility Score (0-100) with prioritized issues and actionable recommendations."
      }
    },
    {
      "@type": "Question",
      name: "How does the free scanner work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scan — GetCiteFlow crawls your homepage and landing pages. Diagnose — It scores your AI visibility across 6 dimensions and highlights what's missing. Improve — Follow the recommendations or let our enterprise team build your brand presence."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Check Your Brand's AI Visibility",
  description: "Three simple steps to check your brand's AI visibility using GetCiteFlow's free scanner.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Full Site Scan",
      text: "Enter any URL and GetCiteFlow crawls your homepage and core landing pages — checking title tags, H1s, FAQ coverage, Schema markup, meta descriptions, robots.txt, and llms.txt."
    },
    {
      "@type": "HowToStep",
      position: 2,
    name: "AI Visibility Score",
    text: "Get an AI Visibility Score (0-100) with a detailed breakdown across 6 dimensions. See exactly what AI systems find about your brand — and what they miss — ranked by impact."
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Track & Improve",
      text: "Follow the prioritized recommendations to fix what's holding your site back. Re-scan anytime to track your progress and watch your score grow."
    }
  ]
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={softwareSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={howToSchema} />
      <Navbar />
      <Hero />
      <ScoreCards />
      <HowItWorks />
      <Features />
    </main>
  );
}
