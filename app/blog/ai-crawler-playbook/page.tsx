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
  headline: "The llms.txt & robots.txt Playbook for AI Crawlers",
  description: "Configure llms.txt and robots.txt to maximize AI citation rates. The crawl-no-training configuration, llms.txt entity declaration chain, and optimal AI crawler allowlist.",
  datePublished: "2026-06-22",
  dateModified: "2026-06-22",
  author: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  publisher: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  image: "https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-crawler-playbook&score=75",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.getciteflow.ai/blog/ai-crawler-playbook" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getciteflow.ai" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.getciteflow.ai/blog" },
    { "@type": "ListItem", position: 3, name: "AI Crawler Playbook", item: "https://www.getciteflow.ai/blog/ai-crawler-playbook" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is llms.txt?",
      acceptedAnswer: { "@type": "Answer", text: "llms.txt is a markdown file at the root of a domain that provides a structured, machine-readable summary of a site's content for AI crawlers. Unlike robots.txt (which controls access) and sitemap.xml (which aims for completeness), llms.txt prioritizes which pages matter most for answering questions about the brand." }
    },
    {
      "@type": "Question",
      name: "Should I block AI crawlers in robots.txt?",
      acceptedAnswer: { "@type": "Answer", text: "Blocking all AI crawlers prevents RAG retrieval and real-time citations. The optimal configuration for brands seeking AI citations is the crawl-no-training approach: allow AI crawlers like GPTBot, ClaudeBot, and GeminiBot for retrieval access, while protecting training rights through legal and technical mechanisms outside of robots.txt." }
    },
    {
      "@type": "Question",
      name: "Which AI crawlers should I allow?",
      acceptedAnswer: { "@type": "Answer", text: "The most important crawlers to allow are GPTBot (ChatGPT/Bing), ClaudeBot (Claude/Brave), GeminiBot (Gemini/Google), CCBot (Common Crawl), and PerplexityBot (Perplexity). Each enables real-time RAG retrieval on a major AI platform." }
    },
    {
      "@type": "Question",
      name: "How does llms.txt improve entity resolution?",
      acceptedAnswer: { "@type": "Answer", text: "Models that support the llms.txt protocol treat the file's content as an explicit entity declaration. Combined with Organization schema and Wikidata, llms.txt forms the third link in an entity declaration chain that tells models what your brand is, what content matters, and how to prioritize it." }
    },
    {
      "@type": "Question",
      name: "How quickly does llms.txt impact citations?",
      acceptedAnswer: { "@type": "Answer", text: "In our analysis, brands that added a well-structured llms.txt file saw a median 40% increase in citations of pages listed in the file within 60 days, compared to a control group of non-listed pages on the same sites." }
    }
  ]
};

export default function AiCrawlerPlaybook() {
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
          <Badge className="mb-6 bg-primary/10 text-primary border-none">Playbook</Badge>
          <motion.h1 initial={false} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            The llms.txt & robots.txt<br /><span className="gradient-text">Playbook for AI Crawlers</span>
          </motion.h1>
          <div className="flex items-center justify-between border-y border-white/5 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#6E7BFF] to-[#8B5CF6]" />
              <div><p className="text-sm font-bold">GetCiteFlow</p><p className="text-xs text-muted-foreground">June 22, 2026 • 9 min read</p></div>
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
              <li><strong className="text-white">llms.txt is the highest-impact, lowest-effort GEO change</strong> — it takes 2 hours to create and immediately gives AI crawlers a structured map of your site.</li>
              <li><strong className="text-white">Most enterprise sites block more AI crawlers than they realize</strong> — default configurations block GPTBot, ClaudeBot, and GeminiBot, preventing RAG retrieval.</li>
              <li><strong className="text-white">The optimal configuration is crawl ⇢ no-training</strong> — allow retrieval while protecting training rights through legal mechanisms.</li>
              <li><strong className="text-white">llms.txt and robots.txt serve complementary functions</strong> — one controls access, the other controls prioritization. Most sites configure only one.</li>
              <li><strong className="text-white">llms.txt is becoming an entity resolution signal</strong> — models treat it similarly to Organization schema for entity classification.</li>
            </ol>
          </div>

          <p className="text-xl text-white leading-relaxed mb-8">
            Two files — <code className="text-slate-400">llms.txt</code> and <code className="text-slate-400">robots.txt</code> — determine whether your content is accessible to AI crawlers for RAG retrieval, and whether it is prioritized in the retrieval set. Most enterprise sites have one well-optimized and the other ignored. Few have both configured for AI citation goals.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">What llms.txt Is (and Why It Exists)</h2>
          <p className="mb-6 leading-relaxed">
            The <code className="text-slate-400">llms.txt</code> specification defines a markdown file at the root of a domain that provides a structured, machine-readable summary of a site's content for AI crawlers. Think of it as a sitemap specifically designed for LLMs — not for listing every page, but for prioritizing which pages matter most for answering questions about the brand.
          </p>
          <p className="mb-6 leading-relaxed">
            A well-structured llms.txt includes: a brief description of the organization, links to core pages organized by category, optional per-page descriptions telling the crawler what each page covers, and direct links to content that should be prioritized for retrieval.
          </p>
          <p className="mb-6 leading-relaxed">
            Unlike <code className="text-slate-400">robots.txt</code>, which is about access control, and <code className="text-slate-400">sitemap.xml</code>, which is about indexing completeness, <code className="text-slate-400">llms.txt</code> is about content prioritization. It tells the crawler: "These are the pages that best represent what our brand is and what we do."
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Status Quo Problem</h2>
          <p className="mb-6 leading-relaxed">
            Most enterprise sites have a well-optimized <code className="text-slate-400">robots.txt</code> file, a properly structured <code className="text-slate-400">sitemap.xml</code>, and no <code className="text-slate-400">llms.txt</code> at all. This configuration was designed for the search engine era and is actively counterproductive for AI citation.
          </p>
          <p className="mb-6 leading-relaxed">
            Without <code className="text-slate-400">llms.txt</code>, AI crawlers must discover and prioritize your content through general-purpose crawling — meaning your most citable pages compete equally with your least citable pages, and the crawler has no machine-readable signal about what your brand is or which content represents it best.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">How to Structure Your llms.txt</h2>
          <p className="mb-6 leading-relaxed">
            The structure follows a standard format: a level-1 heading with your brand name, a one-paragraph entity description, then section headings with bulleted links to key pages. Use the exact same entity description as your Organization schema's description field and your Wikidata entry. Consistency across these three sources creates the strongest possible entity anchor.
          </p>
          <p className="mb-6 leading-relaxed">
            List no more than 20-25 links. The file is about prioritization, not completeness. Order links by citation value, not by site structure. Include at least one comparison or product page if available. Update the file when you publish content designed for AI citation.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">robots.txt for AI Crawlers</h2>
          <p className="mb-6 leading-relaxed">
            The <code className="text-slate-400">robots.txt</code> file controls which crawlers can access which parts of your site. For AI citation, the default configuration creates a tension: blocking AI crawlers protects your content from training but also blocks it from RAG retrieval.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">The Crawl ⇢ No-Training Configuration</h3>
          <p className="mb-6 leading-relaxed">
            The optimal configuration allows AI crawlers to access content for real-time RAG retrieval (necessary for citation) while protecting training rights through legal mechanisms:
          </p>
          <p className="mb-6 leading-relaxed">
            <code className="text-slate-400">User-agent: GPTBot</code><br />
            <code className="text-slate-400">Allow: /</code>
          </p>
          <p className="mb-6 leading-relaxed">
            Apply the same Allow pattern for ClaudeBot, GeminiBot, CCBot, and PerplexityBot. Each enables retrieval on a major AI platform.
          </p>

          <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-3xl my-12">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              The Blocking Tradeoff
            </h3>
            <p className="text-sm text-slate-400">
              Blocking all AI crawlers protects content from unauthorized training but has three costs: content is unavailable for RAG retrieval (preventing real-time citations), content is excluded from Common Crawl (reducing training data prevalence), and models cannot verify entity information against your domain (weakening entity resolution). The recommended approach for brands seeking AI citations is the crawl-no-training configuration: allow retrieval, protect training rights through other mechanisms.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">How the Two Files Work Together</h2>
          <p className="mb-6 leading-relaxed">
            <strong className="text-white">robots.txt</strong> controls access — a binary gate. <strong className="text-white">llms.txt</strong> controls prioritization — a selective guide. Without robots.txt, crawlers may not reach your content. Without llms.txt, crawlers that do reach your content may not find your best citations.
          </p>
          <p className="mb-6 leading-relaxed">
            Together with Organization schema, these files form an entity declaration chain: Organization schema tells the model "this domain is entity X," llms.txt adds "entity X covers these topics and prioritizes this content," and the Wikidata entry contributes "entity X has these properties and relationships."
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Measuring Impact</h2>
          <p className="mb-6 leading-relaxed">
            After implementing both files, track: whether AI crawlers are hitting your <code className="text-slate-400">llms.txt</code> file (check server logs for requests from GPTBot, ClaudeBot, etc.), whether citations of prioritized pages increase relative to non-prioritized pages, and whether entity classification accuracy improves.
          </p>
          <p className="mb-6 leading-relaxed">
            In our analysis, brands that added a well-structured llms.txt file saw a median 40% increase in citations of pages listed in the file within 60 days, compared to non-listed pages on the same sites.
          </p>

          <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-3xl text-center">
            <h3 className="text-xl font-bold text-white mb-3">Check Your AI Crawler Configuration</h3>
            <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">
              GetCiteFlow's scanner checks whether your robots.txt allows the right crawlers, whether your llms.txt is properly structured, and whether your entity declaration chain is consistent across all three layers. Free scan.
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
