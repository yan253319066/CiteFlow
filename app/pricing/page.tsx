import { Navbar } from "@/components/Navbar";
import { JsonLd } from "@/components/JsonLd";
import { Badge } from "@/components/ui/badge";
import { WaitlistButton } from "./WaitlistButton";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | GetCiteFlow — Free GEO Reports',
  description: 'Start with free AI Visibility reports. No credit card required. Pro plan coming soon with AI citation monitoring and competitive analysis.',
  keywords: ['GetCiteFlow pricing', 'GEO tool free', 'AI visibility pricing', 'free GEO tool', 'AI visibility checker free'],
  alternates: { canonical: 'https://www.getciteflow.ai/pricing' },
  openGraph: { title: 'GetCiteFlow Pricing — Free GEO Reports', description: 'Free AI Visibility reports for any URL. Pro monitoring coming soon.', images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/pricing&score=75', width: 1200, height: 630, alt: 'GetCiteFlow Pricing OG Image' }] },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is GetCiteFlow really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Free plan gives you unlimited GEO reports, AI Visibility Scores, breakdown analysis across 6 dimensions, missing component identification, and shareable report pages — no credit card required."
      }
    },
    {
      "@type": "Question",
      name: "What do you get in a free GEO report?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every free report includes an AI Visibility Score (0-100), breakdown across dimensions like entity clarity and FAQ coverage, a list of missing components AI systems look for, prioritized suggestions, and a shareable report page."
      }
    },
    {
      "@type": "Question",
      name: "What will the Pro plan include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Pro plan will include scheduled multi-platform citation tracking across ChatGPT, Perplexity, and Gemini, brand mention alerts, competitive analysis, API access, PDF exports, and support for unlimited URLs."
      }
    },
    {
      "@type": "Question",
      name: "Who is GetCiteFlow for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GetCiteFlow is for marketing teams, SEO professionals, content strategists, and founders who want their websites to be cited by AI search engines like ChatGPT, Claude, Perplexity, and Gemini."
      }
    },
    {
      "@type": "Question",
      name: "How is GEO different from SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO optimizes for Google rankings using backlinks and keywords. GEO optimizes for AI citations by improving entity clarity, structured data, FAQ markup, and machine-readable files like llms.txt. Most SEO tools don't check these signals — GetCiteFlow does."
      }
    }
  ]
};

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={faqSchema} />
      <Navbar />
      <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-none">Simple Pricing</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Start with a <span className="gradient-text">Free Report</span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            No credit card required. Get your AI Visibility Score in seconds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="p-8 border border-white/10 bg-card rounded-2xl">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-1">Free</h2>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-black">$0</span>
                <span className="text-sm text-muted-foreground">/forever</span>
              </div>
              <p className="text-sm text-muted-foreground">Get your AI Visibility Score and actionable GEO recommendations.</p>
            </div>
            <ul className="space-y-3 mb-8">
              {["Unlimited GEO reports", "AI Visibility Score (0-100)", "Breakdown analysis (6 dimensions)", "Missing components & suggestions", "Shareable report page"].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link href="/" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold bg-white/10 text-white hover:bg-white/20 transition-all">
              Analyze Your Site <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <WaitlistButton />
        </div>
      </div>
    </main>
  );
}