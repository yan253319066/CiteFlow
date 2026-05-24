import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ScoreCards } from "@/components/ScoreCards";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { JsonLd } from "@/components/JsonLd";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GetCiteFlow | GEO Platform — Get Your Site Cited by AI',
  description: 'Scan your website, diagnose GEO issues, and deploy fix packages to get cited by ChatGPT, Claude, Perplexity, and Gemini. Free AI Visibility report.',
  keywords: ['GEO platform', 'Generative Engine Optimization', 'AI visibility checker', 'GEO tool', 'ChatGPT citations', 'get cited by AI', 'free GEO report', 'AI SEO tool'],
  alternates: { canonical: 'https://www.getciteflow.ai/' },
  twitter: { card: 'summary_large_image', title: 'GetCiteFlow — GEO Platform for AI Citations', description: 'Scan. Diagnose. Fix. Export. Get your site cited by ChatGPT, Claude, and Perplexity.' },
  openGraph: { title: 'GetCiteFlow — GEO Platform for AI Citations', description: 'Scan your website, diagnose GEO issues, and get cited by ChatGPT, Claude, and Perplexity.', url: 'https://www.getciteflow.ai/', images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai&score=75', width: 1200, height: 630, alt: 'GetCiteFlow — GEO Platform for AI Citations' }] }
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
    },
    {
      "@type": "Question",
      name: "What do you get in a GetCiteFlow report?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GetCiteFlow scans your homepage and core landing pages, checking title tags, H1 structure, FAQ coverage, Schema markup, meta descriptions, robots.txt, and llms.txt. You get a GEO score (0-100) with prioritized issues and a fix package you can deploy — including FAQ Schema JSON-LD, optimized meta descriptions, llms.txt content, and robots.txt recommendations."
      }
    },
    {
      "@type": "Question",
      name: "What does Scan, Diagnose, Fix, Export mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scan — GetCiteFlow crawls your homepage and landing pages to check GEO signals. Diagnose — It outputs a prioritized list of issues affecting your AI visibility. Fix — It generates ready-to-deploy content like FAQ Schema, meta descriptions, and llms.txt files. Export — You can copy, download patches, or export in JSON-LD, Markdown, Next.js, or Vue format."
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
