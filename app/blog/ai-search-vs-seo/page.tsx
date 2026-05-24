'use client';

import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Share2, Bookmark } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { JsonLd } from "@/components/JsonLd";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Search vs. SEO: Why Traditional Rankings No Longer Drive Traffic",
  description: "The signals Google uses to rank pages and the signals LLMs use to cite sources are fundamentally different. Here is what the divergence means for content strategy.",
  datePublished: "2025-10-22",
  author: { "@type": "Organization", name: "GetCiteFlow Intelligence" },
  publisher: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.getciteflow.ai/blog/ai-search-vs-seo" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getciteflow.ai" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.getciteflow.ai/blog" },
    { "@type": "ListItem", position: 3, name: "AI Search vs SEO" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is AI search replacing Google?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not yet, and probably not entirely. AI search and Google serve different user intents. Google excels at navigational and transactional queries — finding a specific site or buying something. Generative AI excels at informational and comparison queries. The two coexist, but the share of queries going to generative engines is growing faster than Google's query growth."
      }
    },
    {
      "@type": "Question",
      name: "Do Google rankings affect AI citations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Weakly at best. The retrieval systems used by LLMs do not process Google's PageRank or backlink data. A page can rank #1 on Google and never appear in a ChatGPT citation, while a page with no Google visibility can be cited consistently if it has strong entity clarity and structured formatting."
      }
    },
    {
      "@type": "Question",
      name: "Should I invest in SEO or GEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both, but with realistic expectations. SEO captures existing search demand and is more mature as a channel. GEO captures emerging AI-driven demand and has less competition but less established measurement. For most teams, the right split is roughly 70 percent SEO and 30 percent GEO, with the GEO allocation increasing as the channel matures."
      }
    },
    {
      "@type": "Question",
      name: "How do I measure AI search traffic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most analytics platforms do not distinguish AI-referred traffic cleanly. You can approximate it by tracking referral traffic from domains like chatgpt.com, perplexity.ai, and gemini.google.com. For a more complete picture, run weekly citation audits across major models using a defined set of category queries and track whether your brand appears."
      }
    },
    {
      "@type": "Question",
      name: "Will SEO become irrelevant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unlikely in the near term. Google still handles the vast majority of global search queries. But the growth rate of traditional search is flat or declining in many verticals, while generative search usage is doubling year over year. SEO will remain important but will no longer be sufficient as a standalone channel."
      }
    }
  ]
};

export default function AISearchVsSEO() {
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
          <Badge className="mb-6 bg-primary/10 text-primary border-none">Analysis</Badge>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-8"
          >
            AI Search vs. SEO: Why Traditional Rankings<br />
            <span className="gradient-text">No Longer Drive Traffic</span>
          </motion.h1>
          
          <div className="flex items-center justify-between border-y border-white/5 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#6E7BFF] to-[#8B5CF6]" />
              <div>
                <p className="text-sm font-bold">GetCiteFlow Intelligence</p>
                <p className="text-xs text-muted-foreground">October 22, 2025 • 7 min read</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="text-muted-foreground hover:text-white transition-colors"><Bookmark className="w-5 h-5" /></button>
              <button className="text-muted-foreground hover:text-white transition-colors"><Share2 className="w-5 h-5" /></button>
            </div>
          </div>
        </header>

        <div className="prose prose-invert prose-primary max-w-none text-slate-400">
          <p className="text-xl text-white leading-relaxed mb-8">
            SEO as an industry assumes that ranking well on Google correlates with business outcomes. This assumption is breaking down. The rise of generative search means users are getting answers without clicking any links. Even when they do click, the decision to visit a site is mediated by an AI summary that may have already satisfied the query. The question is not whether SEO still works — it does, for now — but whether it works well enough to justify the investment when a parallel channel with different mechanics is growing fast.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Measurement Gap</h2>
          <p className="leading-relaxed mb-6">
            Rank tracking measures where your link appears in a list of ten blue links. That list is no longer the primary interface for a growing share of queries. According to data from multiple tracking tools published through early 2025, Google AI Overviews now appear for roughly 15 to 20 percent of search queries, depending on the vertical. When an Overview appears, the click-through rate for the first organic result drops by an estimated 40 to 60 percent. The user gets the answer without leaving the search page.
          </p>
          <p className="leading-relaxed mb-6">
            This creates a measurement problem. Your SEO dashboard shows you ranking at position three for a high-volume keyword. What it does not show you is that position three now receives a fraction of the traffic it would have received two years ago, because the Overview captured the query. You attribute the traffic decline to something else — algorithm update, competitor content, seasonality — and you invest more in the strategy that is yielding diminishing returns.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">What AI Search Actually Prioritizes</h2>
          <p className="leading-relaxed mb-6">
            The retrieval systems behind generative AI do not share Google's signal set. Here is what we know from observing citation patterns across ChatGPT, Perplexity, and Claude over the past year:
          </p>
          <p className="leading-relaxed mb-4">
            <strong className="text-white">Entity resolution comes first.</strong> A source is only citable if the model can determine what entity it represents. Pages that define their subject in unambiguous terms — "we are a CRM for small businesses" not "we help teams grow" — are systematically preferred.
          </p>
          <p className="leading-relaxed mb-4">
            <strong className="text-white">Structured data matters more than prose quality.</strong> FAQ markup, comparison tables, and definition lists provide extraction points that narrative text does not. A mediocre page with great structure outperforms a well-written page with no structure in every citation experiment we have run.
          </p>
          <p className="leading-relaxed mb-4">
            <strong className="text-white">Cross-source agreement amplifies authority.</strong> The model weights information that appears consistently across multiple trusted sources. A claim that appears on your site and on Wikipedia and in an industry report is more likely to be cited than a claim that appears only in a blog post with excellent SEO.
          </p>
          <p className="leading-relaxed mb-6">
            <strong className="text-white">Recency matters, but unevenly.</strong> Models with real-time retrieval give some weight to freshness, but the baseline preference is for established, frequently referenced sources. A well-structured evergreen page published two years ago will out-cite a fresh but unstructured post published last week.
          </p>

          <div className="p-8 glass rounded-3xl my-12 border-primary/20">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Where We See the Gap Widening Fastest
            </h3>
            <p className="text-sm text-slate-400">
              In our tracking across 12 B2B categories, the verticals with the widest divergence between Google rankings and AI citation rates are SaaS tools with generic product names, professional services firms, and e-commerce brands selling commodity products. In each case, the pattern is the same: the brands that invest heavily in SEO infrastructure (backlinks, technical optimization, keyword targeting) maintain their Google positions while losing ground in AI citations to smaller brands that write clearer, more structured content. The gap is worst for brands with polysemous names or vague category positioning, where the model struggles to disambiguate the entity regardless of SEO strength.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Traffic Redistribution</h2>
          <p className="leading-relaxed mb-6">
            The zero-click search trend predates generative AI. Google has been keeping more traffic on its own properties for years — featured snippets, knowledge panels, local packs, and now AI Overviews. What generative AI changes is the magnitude. A featured snippet still sends some traffic. An AI Overview that fully answers the query sends almost none. When Perplexity or ChatGPT answers a question, the referral click-through rate is lower because the user interface does not incentivize clicking.
          </p>
          <p className="leading-relaxed mb-6">
            We looked at referral traffic from Perplexity to a set of 15 B2B content sites over three months. The median click-through rate from a Perplexity citation to the source page was approximately 2 percent. For Google organic results in the same categories, median CTR was approximately 6 percent for position five and 25 percent for position one. The gap is large, but it is narrowing — Perplexity's CTR has been trending upward as the platform adds UI elements that encourage source visits. Meanwhile, Google's organic CTR has been declining as AI Overviews absorb more queries.
          </p>
          <p className="leading-relaxed mb-6">
            The net effect is a traffic redistribution. Google sends less traffic overall but still dominates. Generative engines send more traffic than they did a year ago but from a much smaller base. The brands that benefit most are the ones that appear in both channels — captured by SEO rankings and AI citations simultaneously. The brands that rely solely on SEO are experiencing slow traffic erosion without a clear attribution signal.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">What This Means for Content Teams</h2>
          <p className="leading-relaxed mb-6">
            The practical implication is not to abandon SEO. It is to recognize that SEO and AI visibility are separate channels requiring separate strategies and separate metrics. Most content teams are structured around SEO — keyword research, brief writing, on-page optimization, backlink outreach. That structure does not produce content that performs well in generative search. The formats that AI cites most — comparison pages, structured FAQs, definitional guides — are often the same formats that SEO teams deprioritize because they target low-search-volume queries.
          </p>
          <p className="leading-relaxed mb-6">
            A comparison page for "Tool X vs. Tool Y" may have negligible search volume but high AI citation probability, because LLMs use comparison content extensively for recommendation queries. A structured FAQ page for a niche technical question may never rank for a competitive keyword but may be the only source the model cites when answering that specific question. The returns on these pages come from AI visibility, not from Google rankings.
          </p>
          <p className="leading-relaxed mb-10">
            The teams that will navigate this transition best are the ones that build parallel workflows: an SEO track for capturing existing search demand, and a GEO track for establishing presence in AI-generated answers. The GEO track requires different research methods (entity gap analysis instead of keyword gap analysis), different content formats (structured extraction-friendly layouts instead of narrative blog posts), and different success metrics (citation frequency and sentiment instead of CTR and conversions). Running both tracks is more work, but the alternative is waiting until your organic traffic declines far enough that the board notices, at which point you are years behind on the GEO track.
          </p>
        </div>
      </article>
    </main>
  );
}
