import { Navbar } from "@/components/Navbar";
import { JsonLd } from "@/components/JsonLd";
import { Badge } from "@/components/ui/badge";
import { WaitlistButton } from "./WaitlistButton";
import { EnterpriseCard } from "./EnterpriseCard";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | GetCiteFlow — Free GEO Reports & Enterprise Services',
  description: 'Start with free AI Visibility reports. Pro plan at $19/month. Enterprise Technical GEO ($999) and AI Visibility Growth service (from $2,999/month) for comprehensive brand presence.',
  keywords: ['GetCiteFlow pricing', 'GEO tool free', 'AI visibility pricing', 'free GEO tool', 'AI visibility checker free', 'AI visibility service pricing', 'enterprise GEO'],
  alternates: { canonical: 'https://www.getciteflow.ai/pricing' },
  openGraph: { title: 'GetCiteFlow Pricing — Free GEO Reports', description: 'Free AI Visibility reports for any URL. Pro at $19/mo with fix package generation and export.', images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/pricing&score=75', width: 1200, height: 630, alt: 'GetCiteFlow Pricing OG Image' }] },
  twitter: { card: 'summary_large_image', title: 'Pricing | GetCiteFlow — Free GEO Reports', description: 'Start with free AI Visibility reports. No credit card required. Pro plan at $19/month unlocks fix package generation and multi-format export.', images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/pricing&score=75'] },
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
        text: "Yes. The Free plan gives you 5 GEO reports per hour, AI Visibility Scores, breakdown analysis across 8 dimensions, missing component identification, and shareable report pages — no credit card required."
      }
    },
    {
      "@type": "Question",
      name: "What do you get in a free GEO report?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every free report includes an AI Visibility Score (0-100), breakdown across 8 dimensions (FAQ coverage, entity clarity, llms.txt, robots.txt, schema, AI-readable markdown, and more), a list of missing components ranked by impact, prioritized suggestions, and a shareable report page."
      }
    },
    {
      "@type": "Question",
      name: "What will the Pro plan include?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "The Pro plan ($19/month) will unlock fix package generation — ready-to-deploy FAQ Schema JSON-LD, meta descriptions, llms.txt, robots.txt, and head code. Export as JSON-LD, Markdown, HTML Snippet, React JSX, Next.js, Vue, Nuxt.js, or WordPress PHP. One-click copy or download."
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
      name: "What is the AI Visibility Growth service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI Visibility Growth is a managed Enterprise service (from $2,999/month) that builds your brand's presence across AI systems through industry-specific platform strategy, brand entity building, citation-optimized content, competitor citation gap analysis, cross-platform distribution, and monthly monitoring & iteration."
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
      <div className="pt-32 pb-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <Badge className="mb-3 bg-primary/10 text-primary border-none">Simple Pricing</Badge>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Start with a <span className="gradient-text">Free Report</span>
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
              <p className="text-sm text-muted-foreground">Scan your site across 8 GEO dimensions and see exactly what AI systems find — and what they miss.</p>
            </div>
            <ul className="space-y-2 mb-6 flex-1 text-sm">
              {["5 reports per hour", "AI Visibility Score (0-100)", "8-dimension breakdown (FAQ, llms.txt, schema, entity clarity, etc.)", "Missing components ranked by impact", "Shareable report page"].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link href="/" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold bg-primary text-white hover:bg-primary/90 transition-all cursor-pointer">
              Analyze Your Site <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <WaitlistButton />

          <EnterpriseCard />
        </div>
      </div>
    </main>
  );
}
