import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { JsonLd } from "@/components/JsonLd";
import { ArrowRight, Check, X, BarChart3, DollarSign, Zap, Shield, Layers } from "lucide-react";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profound vs GetCiteFlow | GetCiteFlow',
  description: 'Compare Profound and GetCiteFlow head-to-head for AI visibility. See which scanner gives you better insights for free.',
  keywords: ['GetCiteFlow vs Profound', 'AI visibility comparison', 'AI visibility checker'],
  alternates: { canonical: 'https://www.getciteflow.ai/compare/profound-vs-getciteflow' },
  openGraph: {
    title: 'Profound vs GetCiteFlow — AI Visibility Comparison',
    description: 'Two AI visibility scanners compared. See which one gives you more for free.',
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/compare/profound-vs-getciteflow&score=75', width: 1200, height: 630, alt: 'Profound vs GetCiteFlow' }],
  },
  twitter: { card: 'summary_large_image', title: 'Profound vs GetCiteFlow | GetCiteFlow', description: 'Compare Profound and GetCiteFlow head-to-head for GEO and AI visibility. See which platform gives you better insights for free.', images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/compare/profound-vs-getciteflow&score=75'] },
};

const comparisonRows = [
  { feature: 'AI Visibility Score', profound: <Check className="w-5 h-5 text-green-400" />, getciteflow: <Check className="w-5 h-5 text-green-400" /> },
  { feature: 'Free Reports', profound: 'Limited', getciteflow: <Check className="w-5 h-5 text-green-400" /> },
  { feature: 'Side-by-Side Comparison', profound: <X className="w-5 h-5 text-red-400" />, getciteflow: <Check className="w-5 h-5 text-green-400" /> },
  { feature: 'FAQ Coverage Analysis', profound: <Check className="w-5 h-5 text-green-400" />, getciteflow: <Check className="w-5 h-5 text-green-400" /> },
  { feature: 'Entity Clarity Audit', profound: <Check className="w-5 h-5 text-green-400" />, getciteflow: <Check className="w-5 h-5 text-green-400" /> },
  { feature: 'Shareable Report Pages', profound: 'Paid only', getciteflow: <Check className="w-5 h-5 text-green-400" /> },
  { feature: 'Multi-URL Comparison', profound: <X className="w-5 h-5 text-red-400" />, getciteflow: <Check className="w-5 h-5 text-green-400" /> },
  { feature: 'AI-Generated Suggestions', profound: <Check className="w-5 h-5 text-green-400" />, getciteflow: <Check className="w-5 h-5 text-green-400" /> },
  { feature: 'LLM Mention History', profound: <Check className="w-5 h-5 text-green-400" />, getciteflow: 'Coming soon' },
  { feature: 'No Signup Required', profound: <X className="w-5 h-5 text-red-400" />, getciteflow: <Check className="w-5 h-5 text-green-400" /> },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.getciteflow.ai' },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://www.getciteflow.ai/compare' },
    { '@type': 'ListItem', position: 3, name: 'Profound vs GetCiteFlow' },
  ],
};

export default function ProfoundVsGetCiteFlow() {
  return (
    <main className="min-h-screen">
      <JsonLd data={breadcrumbSchema} />
      <Navbar />
      <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-none">AI Visibility Comparison</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Profound vs <span className="gradient-text">GetCiteFlow</span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Both platforms analyze AI visibility. But GetCiteFlow gives you more for free — including side-by-side competitor comparisons and reports with no signup.
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card border-white/10 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left pb-4 font-semibold text-muted-foreground">Feature</th>
                  <th className="text-center pb-4 font-bold text-purple-400">Profound</th>
                  <th className="text-center pb-4 font-bold text-primary">GetCiteFlow</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="py-4 font-medium">{row.feature}</td>
                    <td className="py-4 text-center">{row.profound}</td>
                    <td className="py-4 text-center">{row.getciteflow}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
            <BarChart3 className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">What Profound Does Well</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                Solid AI visibility scoring and analysis
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                LLM mention tracking (paid plans)
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                Content optimization suggestions
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                Limited free tier — reports require signup
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                No side-by-side competitor comparison
              </li>
            </ul>
          </div>

          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
            <Zap className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">Where GetCiteFlow Wins</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                Free AI Visibility scans — no signup required
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                Compare any two URLs side-by-side
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                Shareable report pages for every analysis
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                Unlimited free analyses
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                Actionable AI-generated optimization steps
              </li>
            </ul>
          </div>
        </div>

        <div className="p-8 md:p-12 bg-gradient-to-r from-primary/5 to-transparent border border-primary/20 rounded-3xl text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Try the free AI Visibility Scanner</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            No signup. No credit card. Just paste your URL and get your AI Visibility Score in seconds.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:opacity-90 transition-opacity">
            Analyze Your Site Free <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
