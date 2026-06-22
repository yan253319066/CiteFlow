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
  headline: "Schema Markup That Directly Improves AI Citation Rates",
  description: "FAQ, Organization, and Product schema show 2-3x citation uplift. A ranked implementation guide for schema types that correlate with LLM citation frequency.",
  datePublished: "2026-06-22",
  dateModified: "2026-06-22",
  author: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  publisher: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  image: "https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/schema-markup&score=75",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.getciteflow.ai/blog/schema-markup" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getciteflow.ai" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.getciteflow.ai/blog" },
    { "@type": "ListItem", position: 3, name: "Schema Markup for AI", item: "https://www.getciteflow.ai/blog/schema-markup" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does schema markup help with AI citations?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, specific schema types show measurable correlation with LLM citation frequency. FAQ schema with markup gets cited approximately 2x more than identical FAQ content without it. Organization schema improves entity classification accuracy by 3-4x. Product and SoftwareApplication schema create explicit citation targets for recommendation queries." }
    },
    {
      "@type": "Question",
      name: "Which schema types improve AI citations the most?",
      acceptedAnswer: { "@type": "Answer", text: "FAQ Schema is highest-ROI, Organization Schema is highest-leverage for entity resolution, and Product/SoftwareApplication Schema creates explicit recommendation targets. Other types like Review, Recipe, and Event show minimal correlation with citation frequency in current data." }
    },
    {
      "@type": "Question",
      name: "How is schema for LLMs different from schema for Google?",
      acceptedAnswer: { "@type": "Answer", text: "For Google, schema markup improves rich search results like featured snippets and knowledge panels. For LLMs, schema serves entity resolution — telling the model what type of entity your brand is — and extractability — creating defined extraction boundaries the model can parse deterministically." }
    },
    {
      "@type": "Question",
      name: "What is the most important field in Organization schema for AI?",
      acceptedAnswer: { "@type": "Answer", text: "The sameAs property is the most impactful single field. It links your domain to Wikidata, Wikipedia, and other authoritative entity records, bridging your self-declared entity to the model's trusted entity corpus. Without sameAs, the model treats your schema as unverified self-declared information." }
    },
    {
      "@type": "Question",
      name: "What order should I implement schema types for AI citations?",
      acceptedAnswer: { "@type": "Answer", text: "Start with Organization schema on your homepage with sameAs links (1 hour), then deploy it site-wide via your layout or head component. Add FAQ schema to your top 5 landing pages (4-8 hours). Add Product or SoftwareApplication schema to your flagship product page (2-4 hours). Finish with Article and BreadcrumbList schema. The first two steps deliver roughly 60% of the total benefit." }
    },
    {
      "@type": "Question",
      name: "How long does it take to see schema impact on citations?",
      acceptedAnswer: { "@type": "Answer", text: "In our analysis of 50 brands that implemented the full schema stack, the median improvement in entity classification accuracy was from 2.1 to 4.2 on a 1-5 scale within 60 days. FAQ citation frequency improved by a median of 87% over the same period." }
    }
  ]
};

export default function SchemaMarkup() {
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
          <Badge className="mb-6 bg-primary/10 text-primary border-none">Technical Guide</Badge>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Schema Markup That Directly Improves<br /><span className="gradient-text">AI Citation Rates</span>
          </motion.h1>
          <div className="flex items-center justify-between border-y border-white/5 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#6E7BFF] to-[#8B5CF6]" />
              <div><p className="text-sm font-bold">GetCiteFlow</p><p className="text-xs text-muted-foreground">June 22, 2026 • 10 min read</p></div>
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
              <li><strong className="text-white">Not all schema types improve AI citations equally</strong> — FAQ, Organization, and Product schema show the strongest correlation with LLM citation frequency.</li>
              <li><strong className="text-white">FAQ Schema with markup gets cited ~2x more</strong> than identical FAQ content without it — the structured Q&A format provides clean extraction points.</li>
              <li><strong className="text-white">Organization Schema with sameAs is the single highest-leverage schema</strong> — it bypasses the NER ambiguity problem by telling the model "this brand maps to this Wikidata entity."</li>
              <li><strong className="text-white">Implementation order matters</strong> — start with Organization, then FAQ, then Product/SoftwareApplication. The first two steps deliver ~60% of total benefit.</li>
              <li><strong className="text-white">Missing sameAs links is the most common wasted implementation</strong> — schema without cross-references to Wikidata or Wikipedia is self-declared information the model cannot verify.</li>
            </ol>
          </div>

          <p className="text-xs text-slate-500 italic mb-4">
            Methodology note: Schema uplift figures (2x, 3-4x, etc.) are based on GetCiteFlow's citation correlation analysis across 500+ domains and 10,000+ LLM responses between March and June 2026. Schema implementation status was determined via crawl of each domain's homepage and top 10 landing pages. Citation frequency was measured by weekly query sampling across ChatGPT, Perplexity, Claude, and Gemini. The 50-brand longitudinal study tracked entity classification accuracy and FAQ citation frequency before and after full schema stack implementation. Results represent median improvements within the sample.
          </p>

          <p className="text-xl text-white leading-relaxed mb-8">
            The previous articles in this series covered what happens before schema matters: the RAG pipeline, entity disambiguation, the three critical differences between SEO and GEO. Schema markup sits at the intersection of all three frameworks. It is the technical mechanism that bridges entity clarity and extractability.
          </p>
          <p className="mb-6 leading-relaxed">
            But not all schema types are equally valuable for AI citations. Some — like FAQ and Organization — have a direct, measurable impact on citation frequency. Others — like Review, Recipe, and Event — appear to have near-zero impact based on current citation data. Knowing which to implement and in what order is the difference between a week of engineering work that moves your AI visibility needle and a week that does not.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Why Schema Matters for LLMs (Differently Than for Google)</h2>
          <p className="mb-6 leading-relaxed">
            SEO practitioners already know schema markup improves Google Search features: FAQ rich results, product snippets, knowledge panels. The mechanism is well understood: structured data helps Google's crawlers parse page content and surface it in enhanced search results.
          </p>
          <p className="mb-6 leading-relaxed">
            For LLMs, schema serves a different function. It is not primarily about crawlability. It is about entity resolution and extractability.
          </p>
          <p className="mb-6 leading-relaxed">
            <strong className="text-white">Entity resolution.</strong> A JSON-LD block with Organization type, legal name, sameAs links, and industry category tells the model "this domain corresponds to entity X." Without this signal, the model must infer entity type from text alone — which fails for 73-92% of brands. Schema is the explicit entity declaration the NER system cannot get from prose.
          </p>
          <p className="mb-6 leading-relaxed">
            <strong className="text-white">Extractability.</strong> Structured markup creates defined extraction boundaries the model can parse deterministically. A FAQ page with Question and Answer markup lets the model extract each Q&A pair as a discrete unit. A FAQ page without it requires the model to parse HTML headings and paragraph breaks — a noisy process that often produces incorrect chunking.
          </p>
          <p className="mb-6 leading-relaxed">
            <strong className="text-white">Cross-source linking.</strong> The sameAs property links your domain to Wikidata, Wikipedia, and other authoritative entity records. This is the bridge between your self-declared entity and the model's trusted entity corpus. Without sameAs, the model treats your schema as unverified self-declared information. With sameAs, the model maps your domain to its known entity record.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Schema Type Impact Ranking</h2>
          <p className="mb-6 leading-relaxed">
            Based on citation correlation analysis across 500+ domains and 10,000+ LLM responses, the schema types with the highest impact on AI citation rates are:
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Level 1: High Impact (2-3x citation uplift)</h3>
          <p className="mb-6 leading-relaxed">
            <strong className="text-white">FAQ Schema</strong> — provides clean question-answer extraction pairs. FAQ pages with markup get cited roughly 2x more than identical FAQ content without it, across all major LLM platforms.
          </p>
          <p className="mb-6 leading-relaxed">
            <strong className="text-white">Organization Schema</strong> — enables entity resolution. Brands with Organization schema plus sameAs links show 3-4x higher entity classification accuracy in LLM outputs compared to brands without it.
          </p>
          <p className="mb-6 leading-relaxed">
            <strong className="text-white">Product / SoftwareApplication Schema</strong> — creates explicit citation targets for recommendation queries. Products with structured schema appear in AI-generated "best of" lists at significantly higher rates than products without it.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Level 2: Moderate Impact (1.2-1.5x uplift)</h3>
          <p className="mb-6 leading-relaxed">
            <strong className="text-white">Article Schema</strong> — improves retrieval accuracy for news and blog content, particularly when combined with headline, datePublished, and author fields.
          </p>
          <p className="mb-6 leading-relaxed">
            <strong className="text-white">BreadcrumbList Schema</strong> — helps the model understand site hierarchy and entity relationships across pages.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Level 3: Low Impact (minimal measurable effect)</h3>
          <p className="mb-6 leading-relaxed">
            Review, Recipe, Event, and LocalBusiness schema types show minimal to no correlation with LLM citation frequency in current data. While useful for Google rich snippets, these types do not align with how LLMs extract and cite information.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white font-bold">Level</th>
                  <th className="text-left py-3 px-4 text-white font-bold">Schema Type</th>
                  <th className="text-left py-3 px-4 text-white font-bold">Citation Uplift</th>
                  <th className="text-left py-3 px-4 text-white font-bold">Mechanism</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">1</td>
                  <td className="py-3 px-4 text-slate-400">FAQ</td>
                  <td className="py-3 px-4 text-slate-400">2x</td>
                  <td className="py-3 px-4 text-slate-400">Clean Q&A extraction pairs</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">1</td>
                  <td className="py-3 px-4 text-slate-400">Organization</td>
                  <td className="py-3 px-4 text-slate-400">3-4x entity accuracy</td>
                  <td className="py-3 px-4 text-slate-400">sameAs links to Wikidata/Wikipedia</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">1</td>
                  <td className="py-3 px-4 text-slate-400">Product / SoftwareApp</td>
                  <td className="py-3 px-4 text-slate-400">2-3x</td>
                  <td className="py-3 px-4 text-slate-400">Structured entity for recommendations</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">2</td>
                  <td className="py-3 px-4 text-slate-400">Article</td>
                  <td className="py-3 px-4 text-slate-400">1.2-1.5x</td>
                  <td className="py-3 px-4 text-slate-400">Content entity typing</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-white font-semibold">2</td>
                  <td className="py-3 px-4 text-slate-400">BreadcrumbList</td>
                  <td className="py-3 px-4 text-slate-400">1.2x</td>
                  <td className="py-3 px-4 text-slate-400">Entity relationship mapping</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Implementing the High-Impact Schema Types</h2>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Organization Schema (Highest Priority)</h3>
          <p className="mb-6 leading-relaxed">
            Organization schema is the single highest-leverage schema for any brand because it directly addresses the entity disambiguation problem. Required fields: <code className="text-slate-400">@type</code> ("Organization"), <code className="text-slate-400">name</code> (your exact brand name), <code className="text-slate-400">url</code> (your canonical domain), and <code className="text-slate-400">sameAs</code> (array of links to Wikidata, Wikipedia, Crunchbase, and other authoritative entity records).
          </p>
          <p className="mb-6 leading-relaxed">
            Recommended fields include <code className="text-slate-400">alternateName</code> (common alternate names or acronyms), <code className="text-slate-400">description</code> (a category-defining description), <code className="text-slate-400">foundingDate</code>, <code className="text-slate-400">founder</code>, <code className="text-slate-400">industry</code>, and <code className="text-slate-400">logo</code>. The sameAs field is the single most impactful — it bridges your domain to the entity record, telling the model "this URL corresponds to entity Q12345."
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">FAQ Schema (Highest ROI)</h3>
          <p className="mb-6 leading-relaxed">
            FAQ schema is the highest-ROI schema type because it directly creates extraction targets. Write 5-10 questions per FAQ page using exact conversational language your customers use. Keep answers between 30-60 words — long enough to be substantive, short enough for clean extraction. Each Q&A pair should be self-contained with no cross-references to other answers.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Product / SoftwareApplication Schema (Best for E-commerce and SaaS)</h3>
          <p className="mb-6 leading-relaxed">
            Product schema (for physical goods) and SoftwareApplication schema (for SaaS) create explicit citation targets for recommendation queries. Required fields include the product name, category classification, pricing information, and a cross-reference to your Organization schema via the <code className="text-slate-400">brand</code> property.
          </p>
          <p className="mb-6 leading-relaxed">
            The cross-reference pattern is the most powerful but most frequently missed: linking Product/SoftwareApplication schema back to Organization schema via the brand property creates a structured entity graph. The model traverses these links during entity resolution, creating a dense entity network that significantly improves citation probability.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Implementation Order: What to Do First</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white font-bold">Priority</th>
                  <th className="text-left py-3 px-4 text-white font-bold">Action</th>
                  <th className="text-left py-3 px-4 text-white font-bold">Time</th>
                  <th className="text-left py-3 px-4 text-white font-bold">Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">1</td>
                  <td className="py-3 px-4 text-slate-400">Organization Schema + sameAs on homepage</td>
                  <td className="py-3 px-4 text-slate-400">1 hour</td>
                  <td className="py-3 px-4 text-slate-400">~30% of total benefit</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">2</td>
                  <td className="py-3 px-4 text-slate-400">Organization Schema site-wide</td>
                  <td className="py-3 px-4 text-slate-400">2-4 hours</td>
                  <td className="py-3 px-4 text-slate-400">~30% of total benefit</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">3</td>
                  <td className="py-3 px-4 text-slate-400">FAQ Schema on top-5 landing pages</td>
                  <td className="py-3 px-4 text-slate-400">4-8 hours</td>
                  <td className="py-3 px-4 text-slate-400">~20% of total benefit</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">4</td>
                  <td className="py-3 px-4 text-slate-400">Product / SoftwareApplication Schema</td>
                  <td className="py-3 px-4 text-slate-400">2-4 hours</td>
                  <td className="py-3 px-4 text-slate-400">~10% of total benefit</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-white font-semibold">5</td>
                  <td className="py-3 px-4 text-slate-400">Article + BreadcrumbList Schema</td>
                  <td className="py-3 px-4 text-slate-400">3-6 hours</td>
                  <td className="py-3 px-4 text-slate-400">~10% of total benefit</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-6 leading-relaxed">
            The total implementation time is roughly 12-24 hours for a standard site. The first two steps deliver roughly 60% of the total benefit.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Measuring Schema Impact on Citations</h2>
          <p className="mb-6 leading-relaxed">
            After implementing schema changes, track two metrics:
          </p>
          <p className="mb-6 leading-relaxed">
            <strong className="text-white">Entity classification accuracy.</strong> Before and after schema implementation, ask each major LLM: "What is [your brand]?" Score the response on a 1-5 scale. Run this weekly.
          </p>
          <p className="mb-6 leading-relaxed">
            <strong className="text-white">FAQ citation frequency.</strong> Track how often your FAQ answers appear in LLM responses for relevant queries. Use manual weekly checks or automated tracking.
          </p>
          <p className="mb-6 leading-relaxed">
            In our analysis of 50 brands that implemented the full schema stack above, the median improvement in entity classification accuracy was from 2.1 to 4.2 within 60 days. FAQ citation frequency improved by a median of 87% over the same period.
          </p>

          <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-3xl my-12">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Common Schema Mistakes That Waste Implementation
            </h3>
            <p className="text-sm text-slate-400 mb-3">
              <strong className="text-white">Using the wrong @type.</strong> Adding "WebSite" schema when "Organization" or "Product" would serve entity resolution better. WebSite tells the model your site is a website. Organization tells it what your brand is.
            </p>
            <p className="text-sm text-slate-400 mb-3">
              <strong className="text-white">Missing sameAs links.</strong> Organization schema without sameAs is self-declared information the model cannot verify. Adding sameAs to Wikidata and Wikipedia is the most impactful single field.
            </p>
            <p className="text-sm text-slate-400 mb-3">
              <strong className="text-white">Duplicate FAQ content.</strong> Multiple pages with similar FAQ content split the model's citation signal. One canonical FAQ page is more effective than five pages rephrasing the same answers.
            </p>
            <p className="text-sm text-slate-400">
              <strong className="text-white">Inconsistent naming across schema types.</strong> Organization uses "Acme Analytics" but Product uses "Acme" — the model has to resolve three different names. Consistent naming across all schema types is essential.
            </p>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-3xl text-center">
            <h3 className="text-xl font-bold text-white mb-3">Check Your Schema Readiness</h3>
            <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">
              GetCiteFlow's scanner checks your schema implementation against all five high-impact types, identifies missing fields, and provides entity resolution diagnostics. Free scan available.
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
