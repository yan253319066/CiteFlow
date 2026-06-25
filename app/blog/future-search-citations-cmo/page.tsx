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
  headline: "The Future of Search Is Citation — What CMOs Should Know for 2027",
  description: "By 2027, 50%+ of searches will return AI-generated answers. Entity authority will replace domain authority. What CMOs should invest in for the citation economy.",
  datePublished: "2026-06-22",
  dateModified: "2026-06-22",
  author: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  publisher: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  image: "https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/future-search-citations-cmo&score=75",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.getciteflow.ai/blog/future-search-citations-cmo" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getciteflow.ai" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.getciteflow.ai/blog" },
    { "@type": "ListItem", position: 3, name: "Future of Search", item: "https://www.getciteflow.ai/blog/future-search-citations-cmo" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the citation economy?",
      acceptedAnswer: { "@type": "Answer", text: "The citation economy describes a web where generative AI citations replace blue links as the primary unit of search visibility. The brand that gets cited is the brand that gets chosen. Entity authority replaces domain authority as the key ranking signal." }
    },
    {
      "@type": "Question",
      name: "What should CMOs do in 2026 to prepare?",
      acceptedAnswer: { "@type": "Answer", text: "Commission a generative web audit, establish entity clarity (Wikipedia, Wikidata, schema), build comparison pages, configure crawl-no-training, shift budget from link-building to entity-building, and track citation share as a board-level metric." }
    },
    {
      "@type": "Question",
      name: "When will AI-generated answers become the majority of searches?",
      acceptedAnswer: { "@type": "Answer", text: "By 2027, an estimated 50%+ of all searches will return AI-generated answers rather than traditional blue links. Brands that invest in entity building in 2026 will have an insurmountable citation advantage by 2028 as entity graphs compound over time." }
    }
  ]
};

export default function FutureSearch() {
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
          <Badge className="mb-6 bg-primary/10 text-primary border-none">Guide</Badge>
          <motion.h1 initial={false} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            The <span className="gradient-text">Future of Search Is Citation</span> — What CMOs Should Know for 2027
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
              <li><strong className="text-white">By 2027, 50%+ of searches will return AI-generated answers</strong> — citations will be the primary unit of search visibility.</li>
              <li><strong className="text-white">The brand that gets cited is the brand that gets chosen</strong> — purchase decisions happen at the citation layer, not the search results page.</li>
              <li><strong className="text-white">Entity authority will replace domain authority</strong> — the question shifts from "which website is most trusted" to "which entity is most referenced."</li>
              <li><strong className="text-white">CMOs should reallocate budget from link-building to entity-building</strong> — Wikipedia, Wikidata, schema markup, and comparison content are higher-ROI investments.</li>
              <li><strong className="text-white">Brands investing in GEO in 2026 will have an insurmountable advantage by 2028</strong> — entity graphs compound over time.</li>
            </ol>
          </div>

          <p className="text-xl text-white leading-relaxed mb-8">
            The shift from links to citations as the primary unit of search value is as significant as the shift from directories to PageRank. In the citation economy, brands that define their entities clearly, structure content for extractability, and build durable entity associations will capture the majority of generative search traffic.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Citation Economy</h2>
          <p className="mb-6 leading-relaxed">
            When Google replaced directories with PageRank, the entire SEO industry had to relearn how value was created. The same shift is happening now. In the citation economy, the unit of value is not a link — it is a citation from an LLM. Brands optimized for citation value will capture generative search traffic. Brands optimized for traditional ranking signals will lose share.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">What CMOs Should Do in 2026</h2>
          <ol className="space-y-3 text-sm text-slate-400 list-decimal list-inside mb-6">
            <li>Commission a generative web audit (Article 19) as a baseline measurement.</li>
            <li>Establish entity clarity as a core brand initiative — Wikipedia, Wikidata, schema.</li>
            <li>Build the comparison page portfolio (Article 8) — the highest-ROI content investment.</li>
            <li>Configure crawl-no-training for all AI crawlers (Article 7).</li>
            <li>Shift budget from link-building to entity-building.</li>
            <li>Track citation share as a board-level metric alongside organic traffic.</li>
          </ol>

          <p className="mb-6 leading-relaxed">
            The brands that invest in GEO in 2026 will have an insurmountable citation advantage by 2028. Entity graphs compound over time — every citation reinforces the entity, making future citations more likely. The window to establish entity clarity is open now.
          </p>

          <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-3xl text-center">
            <h3 className="text-xl font-bold text-white mb-3">Start Your GEO Journey</h3>
            <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">
              GetCiteFlow provides the generative web audit, entity clarity analysis, and citation tracking that CMOs need to navigate the shift from links to citations.
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
