import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { JsonLd } from "@/components/JsonLd";
import { ArrowRight, Check, X, BarChart3, Search, Globe, Bot, Smartphone, FileText } from "lucide-react";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ahrefs vs GetCiteFlow | GetCiteFlow',
  description: 'Ahrefs is for Google SEO. GetCiteFlow is for AI visibility. Compare the two and see why you need both for a complete search strategy.',
  alternates: { canonical: 'https://www.getciteflow.ai/compare/ahrefs-vs-getciteflow' },
  openGraph: {
    title: 'Ahrefs vs GetCiteFlow — Traditional SEO vs GEO',
    description: 'See how Ahrefs and GetCiteFlow compare for search visibility. Hint: you need both.',
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/compare/ahrefs-vs-getciteflow&score=75', width: 1200, height: 630, alt: 'Ahrefs vs GetCiteFlow' }],
  },
};

const comparisonRows = [
  { feature: 'Focus Area', ahrefs: 'Google Search Rankings', getciteflow: 'AI Visibility & GEO Score' },
  { feature: 'Primary Metric', ahrefs: 'Domain Rating (DR)', getciteflow: 'AI Visibility Score (0-100)' },
  { feature: 'Backlink Analysis', ahrefs: <Check className="w-5 h-5 text-green-400" />, getciteflow: 'Indirect (authority signals)' },
  { feature: 'Keyword Research', ahrefs: <Check className="w-5 h-5 text-green-400" />, getciteflow: <X className="w-5 h-5 text-red-400" /> },
  { feature: 'AI Citation Tracking', ahrefs: <X className="w-5 h-5 text-red-400" />, getciteflow: <Check className="w-5 h-5 text-green-400" /> },
  { feature: 'FAQ Coverage Analysis', ahrefs: <X className="w-5 h-5 text-red-400" />, getciteflow: <Check className="w-5 h-5 text-green-400" /> },
  { feature: 'Entity Clarity Audit', ahrefs: <X className="w-5 h-5 text-red-400" />, getciteflow: <Check className="w-5 h-5 text-green-400" /> },
  { feature: 'SERP Rank Tracking', ahrefs: <Check className="w-5 h-5 text-green-400" />, getciteflow: <X className="w-5 h-5 text-red-400" /> },
  { feature: 'Free Tier', ahrefs: 'Limited', getciteflow: <Check className="w-5 h-5 text-green-400" /> },
  { feature: 'GEO Recommendations', ahrefs: <X className="w-5 h-5 text-red-400" />, getciteflow: <Check className="w-5 h-5 text-green-400" /> },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.getciteflow.ai' },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://www.getciteflow.ai/compare' },
    { '@type': 'ListItem', position: 3, name: 'Ahrefs vs GetCiteFlow' },
  ],
};

export default function AhrefsVsGetCiteFlow() {
  return (
    <main className="min-h-screen">
      <JsonLd data={breadcrumbSchema} />
      <Navbar />
      <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-none">Comparison</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Ahrefs vs <span className="gradient-text">GetCiteFlow</span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Ahrefs dominates traditional SEO. GetCiteFlow owns AI visibility. The truth is you need both — but for very different reasons.
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card border-white/10 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Side-by-Side Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left pb-4 font-semibold text-muted-foreground">Feature</th>
                  <th className="text-center pb-4 font-bold text-orange-400">Ahrefs</th>
                  <th className="text-center pb-4 font-bold text-primary">GetCiteFlow</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="py-4 font-medium">{row.feature}</td>
                    <td className="py-4 text-center">{row.ahrefs}</td>
                    <td className="py-4 text-center">{row.getciteflow}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
            <Globe className="w-8 h-8 text-orange-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Ahrefs — Traditional SEO Powerhouse</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                Best-in-class backlink analysis and domain rating
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                Comprehensive keyword research and SERP tracking
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                Content gap analysis and site audits
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                No AI visibility scoring or GEO analysis
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                No insight into how ChatGPT/Gemini cite your content
              </li>
            </ul>
          </div>

          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
            <Bot className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">GetCiteFlow — AI Visibility Platform</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                AI Visibility Score with breakdown analysis
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                FAQ coverage and entity clarity audit
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                Actionable GEO recommendations
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                Free unlimited reports — no credit card
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                No backlink database or keyword research (yet)
              </li>
            </ul>
          </div>
        </div>

        <div className="p-8 md:p-12 bg-gradient-to-r from-primary/5 to-transparent border border-primary/20 rounded-3xl text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Don&apos;t choose. Use both.</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Ahrefs tells you how Google sees your site. GetCiteFlow tells you how AI sees it. In the age of LLMs, you need visibility everywhere.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:opacity-90 transition-opacity">
            Get Your Free GEO Report <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
