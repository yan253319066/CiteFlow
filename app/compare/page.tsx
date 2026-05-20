import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { JsonLd } from "@/components/JsonLd";
import { ArrowRight, Crosshair, BarChart3, TrendingUp, Search } from "lucide-react";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GEO Comparison Tool: Compare AI Visibility Scores | CiteFlow',
  description: 'Compare your website\'s Generative Engine Optimization (GEO) score against competitors. See exactly who AI recommends and where you\'re winning or losing.',
  keywords: ['GEO comparison', 'AI visibility compare', 'compare AI scores', 'GEO tool', 'competitor GEO analysis', 'AI citation comparison'],
  alternates: { canonical: 'https://www.getciteflow.ai/compare' },
  openGraph: {
    title: 'Compare AI Visibility Scores — Free GEO Comparison Tool',
    description: 'See how your site stacks up against competitors in AI search. Free side-by-side GEO analysis.',
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/compare&score=75', width: 1200, height: 630, alt: 'CiteFlow Compare OG Image' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compare AI Visibility Scores — Free GEO Tool',
    description: 'Side-by-side GEO analysis for your site vs competitors.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/compare&score=75'],
  },
};

const steps = [
  { icon: Search, title: 'Get your GEO score', desc: 'Enter your URL on the homepage and get your AI Visibility Score in seconds.' },
  { icon: Crosshair, title: 'Enter a competitor', desc: 'At the bottom of your report, enter any competitor domain to compare.' },
  { icon: BarChart3, title: 'See side-by-side results', desc: 'AI Visibility, FAQ Coverage, Entity Clarity, and Authority — compared directly.' },
];

const useCases = [
  { stat: '~33%', label: 'of AI citations come from comparison content', source: 'Princeton GEO Study' },
  { stat: '140%', label: 'average increase in citations with structured comparisons', source: 'CiteFlow Data' },
  { stat: '5-25x', label: 'higher purchase intent when AI recommends you', source: 'Gartner' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.getciteflow.ai' },
    { '@type': 'ListItem', position: 2, name: 'GEO Comparison Tool' },
  ],
};

export default function ComparePage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={breadcrumbSchema} />
      <Navbar />
      <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-none">Free Tool</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Compare Your <span className="gradient-text">AI Visibility</span> Against Competitors
          </h1>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Most GEO tools show you a score. CiteFlow lets you see exactly where you win and lose — side by side with any competitor. Find out who AI recommends, and why.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:opacity-90 transition-opacity">
            Get Your Free Report <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {steps.map((step, i) => (
            <Card key={i} className="p-8 bg-card border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-primary uppercase">Step {i + 1}</span>
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-slate-400">{step.desc}</p>
            </Card>
          ))}
        </div>

        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Comparison pages drive <span className="gradient-text">AI citations</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((item, i) => (
              <div key={i} className="text-center p-8 bg-white/5 border border-white/10 rounded-3xl">
                <div className="text-4xl font-black text-primary mb-2">{item.stat}</div>
                <p className="text-sm text-slate-400 mb-2">{item.label}</p>
                <p className="text-[10px] text-slate-600">— {item.source}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 md:p-12 bg-gradient-to-r from-primary/5 to-transparent border border-primary/20 rounded-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Start with your free report</h2>
              <p className="text-slate-400 text-sm">Enter your URL, get your AI Visibility Score, then compare against any competitor.</p>
            </div>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition-opacity">
            Analyze Your Site <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}