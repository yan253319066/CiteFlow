import { Navbar } from "@/components/Navbar";
import { JsonLd } from "@/components/JsonLd";
import { Badge } from "@/components/ui/badge";
import { EnterpriseCard } from "./EnterpriseCard";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | GetCiteFlow — Free AI Visibility Scanner & Enterprise Services',
  description: 'Start with a free AI Visibility Scan. Enterprise Brand Service (from $3,999) and AI Visibility Growth (from $4,999/month) to get your brand mentioned and recommended by AI.',
  keywords: ['GetCiteFlow pricing', 'free AI visibility scanner', 'AI brand service pricing', 'enterprise AI visibility', 'free AI brand scan', 'AI visibility service pricing', 'brand recommended by AI'],
  alternates: { canonical: 'https://www.getciteflow.ai/pricing' },
  openGraph: { title: 'GetCiteFlow Pricing — Free AI Visibility Scanner', description: 'Free AI Visibility Scan for any URL. Enterprise services to get your brand mentioned and recommended by AI.', images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/pricing&score=75', width: 1200, height: 630, alt: 'GetCiteFlow Pricing OG Image' }] },
  twitter: { card: 'summary_large_image', title: 'Pricing | GetCiteFlow — Free AI Visibility Scanner', description: 'Start with a free AI Visibility Scan. No credit card required. Enterprise brand services for getting recommended by AI.', images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/pricing&score=75'] },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the AI Visibility Scanner really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The free scanner gives you 5 scans per hour, AI Visibility Scores, breakdown analysis across 6 dimensions, missing component identification, and shareable report pages — no credit card required."
      }
    },
    {
      "@type": "Question",
      name: "What do you get in a free AI Visibility Scan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every free scan includes an AI Visibility Score (0-100), breakdown across 6 dimensions (AI visibility, FAQ coverage, entity clarity, authority, content structure, summary optimization), a list of missing components ranked by impact, prioritized suggestions, and a shareable report page."
      }
    },
    {
      "@type": "Question",
      name: "Who is GetCiteFlow for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GetCiteFlow's enterprise service is for brands and marketing teams who want to get mentioned and recommended by AI systems like ChatGPT, Claude, Perplexity, Gemini, DeepSeek, Doubao, and Qwen. Our free scanner is for anyone who wants to check their current AI visibility."
      }
    },
    {
      "@type": "Question",
      name: "What is the AI Visibility Growth service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI Visibility Growth is a managed Enterprise service (from $4,999/month) that builds your brand's presence across AI systems through industry-specific platform strategy, brand entity building, citation-optimized content, competitor citation gap analysis, cross-platform distribution, and monthly monitoring & iteration."
      }
    },
    {
      "@type": "Question",
      name: "What's the difference between the free scanner and the enterprise service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The free AI Visibility Scanner checks your website's current AI visibility and gives you a score with recommendations — it's a diagnostic tool. The enterprise service actively builds your brand's presence across AI systems through content strategy, entity optimization, and cross-platform distribution, so AI systems mention and recommend your brand."
      }
    }
  ]
};

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={faqSchema} />
      <Navbar />
      <div className="pt-32 pb-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <Badge className="mb-3 bg-primary/10 text-primary border-none">Simple Pricing</Badge>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Start with a <span className="gradient-text">Free Scan</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No credit card required. Get your AI Visibility Score in seconds.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 border border-white/10 bg-card rounded-2xl flex flex-col">
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-1">Free</h2>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-black">$0</span>
                <span className="text-sm text-muted-foreground">/forever</span>
              </div>
              <p className="text-sm text-muted-foreground">Scan your site across 6 dimensions and see exactly what AI systems find about your brand — and what they miss.</p>
            </div>
            <ul className="space-y-2 mb-6 flex-1 text-sm">
              {["5 scans per hour", "AI Visibility Score (0-100)", "6-dimension breakdown (AI visibility, FAQ coverage, entity clarity, authority, content structure, summary optimization)", "Missing components ranked by impact", "Shareable scan report"].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link href="/" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold bg-primary text-white hover:bg-primary/90 transition-all cursor-pointer">
              Analyze Your Site <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <div className="mt-4 p-3 rounded-xl bg-primary/5 border border-primary/10 text-center">
              <p className="text-xs text-muted-foreground">
                Want your brand recommended by AI?{' '}
                <span className="text-primary font-semibold">Try Enterprise Brand Service →</span>
              </p>
            </div>
          </div>

          <EnterpriseCard />
        </div>
      </div>
    </main>
  );
}
