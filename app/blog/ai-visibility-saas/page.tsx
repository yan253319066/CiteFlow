'use client';

import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { JsonLd } from "@/components/JsonLd";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Visibility for B2B SaaS Companies",
  description: "SaaS brands with dictionary-word names face unique entity disambiguation challenges. Comparison pages, pricing schema, and integration entity graphs drive AI citations.",
  datePublished: "2026-06-22",
  dateModified: "2026-06-22",
  author: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  publisher: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  image: "https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-visibility-saas&score=75",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.getciteflow.ai/blog/ai-visibility-saas" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getciteflow.ai" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.getciteflow.ai/blog" },
    { "@type": "ListItem", position: 3, name: "AI Visibility SaaS", item: "https://www.getciteflow.ai/blog/ai-visibility-saas" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why do SaaS brands with dictionary-word names have an entity problem?",
      acceptedAnswer: { "@type": "Answer", text: "NER systems identify common words like 'Slack,' 'Notion,' or 'Asana' as concepts before brands. Every page must include Organization schema with @id pointing to a Wikidata or Wikipedia URL, and repeat the entity definition in schema on every subpage." }
    },
    {
      "@type": "Question",
      name: "How important are comparison pages for SaaS AI visibility?",
      acceptedAnswer: { "@type": "Answer", text: "Recommendation queries account for 35-40% of generative search queries in B2B SaaS — the highest of any vertical. Comparison pages are the most critical content format for SaaS AI citations." }
    },
    {
      "@type": "Question",
      name: "Why does pricing schema matter for SaaS brands?",
      acceptedAnswer: { "@type": "Answer", text: "SaaS pricing is among the most cited data points across LLMs. Transparent pricing pages with clear tiers and dollar amounts in Product schema are cited 3x more than opaque 'contact us' pricing." }
    },
    {
      "@type": "Question",
      name: "How do integrations help AI visibility?",
      acceptedAnswer: { "@type": "Answer", text: "Each integration creates an entity relationship between your brand and the integrated tool. List integrations on dedicated pages with schema markup — this is among the highest-ROI content investments for AI citations because each integration creates a durable entity association." }
    }
  ]
};

export default function AiVisibilitySaaS() {
  return (
    <main className="min-h-screen pb-20">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <Navbar />
      <article className="pt-32 px-6 max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        <header className="mb-12">
          <Badge className="mb-6 bg-primary/10 text-primary border-none">Industry Guide</Badge>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            AI Visibility for <span className="gradient-text">B2B SaaS Companies</span>
          </motion.h1>
          <div className="flex items-center justify-between border-y border-white/5 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#6E7BFF] to-[#8B5CF6]" />
              <div><p className="text-sm font-bold">GetCiteFlow</p><p className="text-xs text-muted-foreground">June 22, 2026 • 5 min read</p></div>
            </div>
          </div>
        </header>

        <div className="prose prose-invert prose-primary max-w-none text-slate-400">
          <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-3xl my-12">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Key Takeaways
            </h3>
            <ol className="text-sm text-slate-400 space-y-3 list-decimal list-inside">
              <li><strong className="text-white">SaaS brands with dictionary-word names face a common noun entity problem</strong> — every page needs Organization schema with Wikidata @id to disambiguate.</li>
              <li><strong className="text-white">Comparison pages drive 35-40% of SaaS recommendation queries</strong> — the highest of any industry vertical.</li>
              <li><strong className="text-white">Transparent pricing with schema markup gets cited 3x more</strong> than opaque pricing pages.</li>
              <li><strong className="text-white">Integration pages create durable entity associations</strong> with every tool in your ecosystem.</li>
            </ol>
          </div>

          <p className="text-xl text-white leading-relaxed mb-8">
            The principles from Articles 1-10 apply universally, but B2B SaaS has distinct entity characteristics. This article covers the four most impactful strategies.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. Solve the Common Noun Entity Problem</h2>
          <p className="mb-6 leading-relaxed">
            If your brand uses a dictionary word — Slack, Asana, Notion, Basecamp, Harvest — you face disambiguation challenges that brands with unique names (Salesforce, HubSpot, Zendesk) do not. NER systems identify "Slack" as a concept first. Every page must include Organization schema with <code className="text-primary">@id</code> pointing to your Wikidata URL, and repeat the entity definition in schema on every subpage.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. Build Category-Winning Comparison Pages</h2>
          <p className="mb-6 leading-relaxed">
            B2B SaaS is the most comparison-driven vertical. Recommendation queries account for 35-40% of generative search queries. Follow the comparison portfolio from Article 8: your brand vs. market leader, vs. direct competitor, vs. free alternative, and three-way comparisons.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. Make Pricing Transparent</h2>
          <p className="mb-6 leading-relaxed">
            SaaS pricing is among the most cited data points in LLM outputs. Pricing pages with clear tiers, dollar amounts, and Product schema are cited 3x more than opaque "contact us" pricing.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. Exploit the Integration Entity Graph</h2>
          <p className="mb-6 leading-relaxed">
            Every integration listed creates an entity relationship between your brand and the integrated tool. Listing "Slack integration, Salesforce integration, HubSpot integration" places your brand in the same ecosystem. Use dedicated integration pages with schema markup for each relationship — this is among the highest-ROI content investments because each integration creates a durable entity association (Article 6).
          </p>

          <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-3xl text-center">
            <h3 className="text-xl font-bold text-white mb-3">Scan Your SaaS Brand</h3>
            <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">
              GetCiteFlow checks your domain for entity resolution, pricing schema, and integration entity graphs — the three most critical signals for B2B SaaS AI visibility.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6E7BFF] to-[#8B5CF6] px-8 py-3 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity">
              Get Your Free AI Visibility Scan <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
