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
  headline: "The Audit Every Brand Needs Before the Generative Web Arrives",
  description: "A 6-dimension generative web audit covering entity clarity, schema completeness, crawler configuration, content structure, comparison coverage, and agent readiness.",
  datePublished: "2026-06-22",
  dateModified: "2026-06-22",
  author: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  publisher: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  image: "https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-visibility-audit&score=75",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.getciteflow.ai/blog/ai-visibility-audit" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getciteflow.ai" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.getciteflow.ai/blog" },
    { "@type": "ListItem", position: 3, name: "AI Visibility Audit", item: "https://www.getciteflow.ai/blog/ai-visibility-audit" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the 6 dimensions of a generative web audit?",
      acceptedAnswer: { "@type": "Answer", text: "Entity clarity, schema completeness, crawler configuration (robots.txt and llms.txt), content structure (the four-layer architecture), comparison content coverage, and agent readiness (structured pricing and product data)." }
    },
    {
      "@type": "Question",
      name: "How often should I run a generative web audit?",
      acceptedAnswer: { "@type": "Answer", text: "Quarterly. The AI platform landscape and your content inventory both change faster than traditional SEO factors. A quarterly cadence keeps your entity signals aligned with current platform requirements." }
    },
    {
      "@type": "Question",
      name: "What is the most common gap found in first audits?",
      acceptedAnswer: { "@type": "Answer", text: "Most brands score below 50/100. The most common gaps are: missing Organization schema with @id, no llms.txt file, weak entity definition on subpages (not just the homepage), and zero comparison content against competitors." }
    }
  ]
};

export default function AiVisibilityAudit() {
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
            The Audit Every Brand Needs Before the<br /><span className="gradient-text">Generative Web Arrives</span>
          </motion.h1>
          <div className="flex items-center justify-between border-y border-white/5 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#6E7BFF] to-[#8B5CF6]" />
              <div><p className="text-sm font-bold">GetCiteFlow</p><p className="text-xs text-muted-foreground">Jun 22, 2026 • 5 min read</p></div>
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
              <li><strong className="text-white">The generative web audit covers 6 dimensions</strong> — entity clarity, schema completeness, crawl-no-training, content structure, comparison coverage, and agent readiness.</li>
              <li><strong className="text-white">Most brands score below 50/100 on their first audit</strong> — common gaps include missing Organization schema @id, no llms.txt, and weak entity definition.</li>
              <li><strong className="text-white">The audit should be conducted quarterly</strong> as the AI landscape changes faster than traditional SEO factors.</li>
            </ol>
          </div>

          <p className="text-xl text-white leading-relaxed mb-8">
            The generative web is coming faster than most brands realize. By 2027, Gartner predicts that 40% of all search traffic will flow through AI-powered interfaces rather than traditional search engine results pages. When that tipping point arrives, brands that prepared will be cited automatically; brands that did not will be invisible. The difference will not come down to domain authority or backlinks — it will come down to six specific dimensions of AI readiness that most marketing teams have never measured.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Dimension 1: Entity Clarity</h2>
          <p className="mb-6 leading-relaxed">
            Entity clarity measures how well an AI can identify who your brand is, what it does, and how it relates to other concepts in its semantic network. This is not the same as brand awareness. A brand with high entity clarity has its name, category, key differentiators, and associated entities defined unambiguously across the web. LLMs build entity graphs from structured data, Wikipedia entries, industry publications, and co-occurrence patterns in training data. If your brand entity is vague or inconsistent across these sources, the model will either misclassify you or fail to surface you at all.
          </p>
          <p className="mb-6 leading-relaxed">
            The most common gap is the absence of a resolvable Organization schema @id — a canonical identifier that tells knowledge graphs which entity is your brand. Without it, AI systems must infer your identity from context, which frequently produces errors. A generative web audit scores your entity clarity by checking Knowledge Panel completeness, Wikipedia presence, Schema.org Organization markup with a stable @id, and entity association density across the web.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Dimension 2: Schema Completeness</h2>
          <p className="mb-6 leading-relaxed">
            Schema completeness goes beyond basic structured data. A traditional SEO audit checks whether your pages have schema markup. A generative web audit asks a harder question: does your schema give an AI everything it needs to cite you with confidence? This means Organization schema with logo, social profiles, and founding date. Article schema with author, date, and image. Product schema with price, availability, and reviews. FAQ schema for extractable answer blocks. BreadcrumbList for navigation context.
          </p>
          <p className="mb-6 leading-relaxed">
            The critical distinction is that AI systems use schema not just for rich snippets but for entity resolution and source confidence scoring. A page with complete, valid schema is more likely to be cited because the model can verify the source's authority and relevance without additional lookups. Pages with missing or invalid schema create uncertainty that the ranker resolves — often against you.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Dimension 3: Crawl-No-Training Configuration</h2>
          <p className="mb-6 leading-relaxed">
            The most preventable AI visibility failure is blocking AI crawlers entirely. Many brands, fearing unauthorized training on their content, have added blanket blocks in robots.txt that prevent AI crawlers from accessing their site at all. The problem is that the same crawlers that serve training also serve retrieval. If GPTBot, CCBot, Claude-Web, or PerplexityBot cannot access your pages, your content cannot surface in RAG results regardless of how well it is written or structured.
          </p>
          <p className="mb-6 leading-relaxed">
            The generative web audit checks your robots.txt, any AI-specific crawl directives, and your llms.txt file. An llms.txt file — the emerging standard for AI content discovery — acts like a sitemap specifically for language models, telling AI crawlers which pages to prioritize and how to understand your content hierarchy. Most brands do not have one, and that is a structural disadvantage that compounds with every new AI crawler that comes online.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Dimension 4: Content Structure</h2>
          <p className="mb-6 leading-relaxed">
            Content structure measures whether your pages are organized in a way that AI retrieval systems can efficiently chunk, embed, and extract. The key metric is passage-level extractability — can a model pull a single self-contained answer block of 40 to 60 words from your page without needing surrounding context? Pages with clear heading hierarchies, numbered sections, concise definitions, and standalone paragraphs score higher than pages with dense narrative prose.
          </p>
          <p className="mb-6 leading-relaxed">
            The audit evaluates your content against the 4-stage RAG pipeline: query analysis fitness (do you cover comprehensive sub-topics?), vector retrieval fitness (is your entity density sufficient?), re-ranking fitness (do you provide original information gain?), and citation synthesis fitness (are your answer blocks extractable?). Most brands discover that their most important pages — the ones they want AI to cite — are structurally optimized for human reading, not machine extraction.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Dimension 5: Comparison Coverage</h2>
          <p className="mb-6 leading-relaxed">
            Comparison content is disproportionately effective for AI citations because every "X vs Y" page is by definition unique. The specific feature-by-feature comparison between two named products or services does not exist anywhere else in the retrieval set, giving it high information gain by default. AI systems regularly cite comparison pages because they answer the most common user query patterns: "which is better," "what is the difference," and "should I use X or Y."
          </p>
          <p className="mb-6 leading-relaxed">
            The generative web audit maps your comparison content coverage against the queries your prospects ask. If you compete in a category with established alternatives, the absence of structured comparison pages is a measurable AI visibility gap. GetCiteFlow's comparison tooling automatically generates these pages with FAQ schema and entity markup, ensuring they are optimized for both retrieval and citation.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Dimension 6: Agent Readiness</h2>
          <p className="mb-6 leading-relaxed">
            Agent readiness is the frontier dimension. As AI agents — not just chatbots but autonomous tools that browse, book, purchase, and configure — become the primary interface between consumers and brands, your site must be machine-actionable. This means having clear API endpoints or structured output that an agent can parse, pricing that is machine-readable, availability data that can be queried programmatically, and forms that an AI agent can complete.
          </p>
          <p className="mb-6 leading-relaxed">
            The audit checks for OpenAPI specs, machine-readable pricing, structured inventory data, and agent-compatible form interfaces. Most brands score lowest on this dimension because agent readiness is not yet a standard marketing metric. But every major AI platform — OpenAI, Google, Anthropic — is investing heavily in agent capabilities, and the brands that prepare now will have a 12-to-18-month head start on competitors that wait.
          </p>

          <div className="p-8 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-3xl my-12">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Why These Six Dimensions
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              These six dimensions were selected because they are independently measurable, actionable (each dimension has clear remediation steps), and structurally aligned with how AI systems discover, evaluate, and cite sources. They are not static — as the AI landscape evolves, the audit framework evolves with it. A quarterly cadence ensures your AI visibility infrastructure keeps pace with new crawlers, updated retrieval algorithms, and emerging AI platform requirements.
            </p>
            <p className="text-sm text-slate-400">
              GetCiteFlow covers all six dimensions in a single automated scan. The platform generates a scored audit, prioritized remediation plan, and automated fixes for schema gaps, llms.txt configuration, comparison content generation, and entity enhancement. Most brands go from below 50/100 to above 80/100 within two audit cycles.
            </p>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-3xl text-center">
            <h3 className="text-xl font-bold text-white mb-3">Run Your Generative Web Audit</h3>
            <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">
              Get a free 6-dimension AI visibility audit of your brand. Covers entity clarity, schema completeness, crawler configuration, content structure, comparison coverage, and agent readiness — with a scored report and prioritized fixes.
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
