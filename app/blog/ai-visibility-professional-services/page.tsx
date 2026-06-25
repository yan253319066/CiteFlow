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
  headline: "AI Visibility for Professional Services & Agencies",
  description: "Person vs. firm entity resolution, individual entity pages, local LLM optimization, and case study entity associations for professional services.",
  datePublished: "2026-06-22",
  dateModified: "2026-06-22",
  author: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  publisher: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  image: "https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-visibility-professional-services&score=75",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.getciteflow.ai/blog/ai-visibility-professional-services" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getciteflow.ai" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.getciteflow.ai/blog" },
    { "@type": "ListItem", position: 3, name: "AI Visibility Professional Services", item: "https://www.getciteflow.ai/blog/ai-visibility-professional-services" },
  ],
};

export default function AiVisibilityProfSvcs() {
  return (
    <main className="min-h-screen pb-20">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navbar />
      <article className="pt-32 px-6 max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        <header className="mb-12">
          <Badge className="mb-6 bg-primary/10 text-primary border-none">Industry Guide</Badge>
          <motion.h1 initial={false} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            AI Visibility for <span className="gradient-text">Professional Services</span> & Agencies
          </motion.h1>
          <div className="flex items-center justify-between border-y border-white/5 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#6E7BFF] to-[#8B5CF6]" />
              <div><p className="text-sm font-bold">GetCiteFlow</p><p className="text-xs text-muted-foreground">June 22, 2026 • 4 min read</p></div>
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
              <li><strong className="text-white">Models struggle with person vs. firm entity resolution</strong> — without explicit schema linking, "Jane Smith" and "McKinsey" may be treated as disconnected entities.</li>
              <li><strong className="text-white">Individual Person schema pages are the highest-impact investment</strong> — with SameAs links to LinkedIn, Twitter, and personal websites for cross-entity resolution.</li>
              <li><strong className="text-white">LocalBusiness schema drives geographic LLM citations</strong> — firms with complete location data get cited for "best [service] in [city]" queries.</li>
              <li><strong className="text-white">Case studies with named clients build the most durable entity associations</strong> — each named client creates a reinforced entity relationship.</li>
            </ol>
          </div>

          <p className="text-xl text-white leading-relaxed mb-8">
            Professional services firms face a unique AI visibility challenge: the person vs. firm entity split. Models must resolve individual practitioners, link them to their firms, and understand the relationship between both.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Person vs. Firm Entity Problem</h2>
          <p className="mb-6 leading-relaxed">
            When a model retrieves "Jane Smith, Partner at McKinsey," it must resolve three entity questions: Is Jane Smith a real person? Does she work at McKinsey? What is McKinsey? Without explicit schema linking the person to the organization, the model may treat them as disconnected entities.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Individual Entity Pages</h2>
          <p className="mb-6 leading-relaxed">
            Every practitioner who should be citable needs a personal entity page with Person schema (name, jobTitle, affiliation with Organization @id) and SameAs links (LinkedIn, Twitter, professional website). These links enable cross-entity resolution — the model verifies the person matches across sources.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Local LLM Optimization</h2>
          <p className="mb-6 leading-relaxed">
            Firms serving specific geographies benefit from LocalBusiness schema, verified Google Business Profile data, and location-specific content. Models cite firms with complete location data for "best law firm in Chicago" or "top marketing agency in San Francisco" queries.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Case Studies as Entity Association Builders</h2>
          <p className="mb-6 leading-relaxed">
            Case studies with named client logos create the most durable entity associations. "How We Increased Revenue 3x for HubSpot" creates an entity relationship between your firm and HubSpot, reinforced with every query involving HubSpot's growth or agency partnerships.
          </p>

          <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-3xl text-center">
            <h3 className="text-xl font-bold text-white mb-3">Check Your Entity Resolution</h3>
            <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">
              GetCiteFlow scans your domain for person-to-organization entity linking, SameAs consistency, and local schema completeness.
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
