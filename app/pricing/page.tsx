import { Navbar } from "@/components/Navbar";
import { JsonLd } from "@/components/JsonLd";
import { Badge } from "@/components/ui/badge";
import { WaitlistButton } from "./WaitlistButton";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | GetCiteFlow — Free GEO Reports',
  description: 'Start with free AI Visibility reports. No credit card required. Pro plan at $19/month unlocks fix package generation and multi-format export.',
  keywords: ['GetCiteFlow pricing', 'GEO tool free', 'AI visibility pricing', 'free GEO tool', 'AI visibility checker free'],
  alternates: { canonical: 'https://www.getciteflow.ai/pricing' },
  openGraph: { title: 'GetCiteFlow Pricing — Free GEO Reports', description: 'Free AI Visibility reports for any URL. Pro at $19/mo with fix package generation and export.', images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/pricing&score=75', width: 1200, height: 630, alt: 'GetCiteFlow Pricing OG Image' }] },
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
              <p className="text-sm text-muted-foreground">Scan your site across 8 GEO dimensions and see exactly what AI systems find — and what they miss.</p>
            </div>
            <ul className="space-y-3 mb-8">
              {["5 reports per hour", "AI Visibility Score (0-100)", "8-dimension breakdown (FAQ, llms.txt, schema, entity clarity, etc.)", "Missing components ranked by impact", "Shareable report page"].map((f) => (
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

        <section className="mt-20">
          <div className="text-center mb-10">
            <Badge className="mb-3 bg-primary/10 text-primary border-none">Done-For-You</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Human Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Let the GetCiteFlow team optimize your site for AI citations. We handle the full GEO audit, fix generation, and deployment guidance.
            </p>
          </div>
          <div className="max-w-sm mx-auto">
            <div className="p-8 border border-white/10 bg-card rounded-2xl">
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-1">Full GEO Optimization</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-3xl font-black">$999</span>
                  <span className="text-sm text-muted-foreground">/one-time</span>
                </div>
                <p className="text-sm text-muted-foreground">Complete site-wide GEO audit, fix package generation, and deployment guidance — done by the GetCiteFlow team.</p>
              </div>
              <ul className="space-y-3 mb-8">
                {["Full site GEO scan & report", "FAQ Schema + llms.txt generation", "Meta & entity optimization", "Competitor citation analysis", "Deployment support"].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="mailto:support@getciteflow.ai" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold bg-white/10 text-white hover:bg-white/20 transition-all">
                Contact Us <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}