'use client';

import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Share2, Bookmark, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { JsonLd } from "@/components/JsonLd";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Measuring AI Visibility: Beyond Google Analytics",
  description: "Google Analytics cannot measure AI citations. Three core metrics: citation frequency, citation share, and citation trend for generative engine optimization.",
  datePublished: "2026-06-22",
  dateModified: "2026-06-22",
  author: [{ "@type": "Organization", "name": "GetCiteFlow", "url": "https://www.getciteflow.ai" }],
  publisher: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  image: "https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-visibility-measurement&score=75",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.getciteflow.ai/blog/ai-visibility-measurement" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getciteflow.ai" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.getciteflow.ai/blog" },
    { "@type": "ListItem", position: 3, name: "AI Visibility Measurement", item: "https://www.getciteflow.ai/blog/ai-visibility-measurement" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can Google Analytics measure AI citations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. AI platform traffic appears as 'Direct' or 'Unknown Referrer' in Google Analytics because users interact with citations inside ChatGPT, Perplexity, or other AI tools without clicking through. GA can only measure click-through visits, not citation impressions."
      }
    },
    {
      "@type": "Question",
      name: "What are the three core metrics for GEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Citation frequency (how often your content is cited by AI platforms), citation share (your percentage of total citations within a category), and citation trend (whether citations are increasing or decreasing over time). Together they form a complete picture of AI visibility."
      }
    },
    {
      "@type": "Question",
      name: "What is citation half-life?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Citation half-life measures how long a page continues to generate AI citations after publication. A longer half-life means your content remains authoritative for longer — which favors structured evergreen content over fresh but unstructured posts."
      }
    }
  ]
};

export default function BlogPost() {
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
          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-8"
          >
            Measuring AI Visibility:<br />
            <span className="gradient-text">Beyond Google Analytics</span>
          </motion.h1>

          <div className="flex items-center justify-between border-y border-white/5 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-secondary" />
              <div>
                <p className="text-sm font-bold">GetCiteFlow</p>
                <p className="text-xs text-muted-foreground">Jun 22, 2026 • 4 min read</p>
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
            You open Google Analytics. Traffic looks fine. Pages are ranking. But when someone asks ChatGPT a question about your industry, is your content cited? You cannot tell — and that is the problem. Google Analytics was built for the click economy. AI citations do not generate clicks. They generate answers. Measuring AI visibility requires a fundamentally different framework.
          </p>

          <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-3xl my-12">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Key Takeaways
            </h3>
            <ol className="text-sm text-slate-400 space-y-3 list-decimal list-inside">
              <li><strong className="text-white">Google Analytics cannot measure AI citations</strong> — AI platform traffic appears as "Direct" or "Unknown Referrer"</li>
              <li><strong className="text-white">Three core metrics: citation frequency, share, and trend</strong> — how often cited, % of category, direction of change</li>
              <li><strong className="text-white">Citation half-life measures content durability</strong> — how long a page generates citations after publication</li>
              <li><strong className="text-white">Competitive citation share is the North Star metric</strong> — your visibility relative to every competitor in your category</li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Measurement Gap</h2>
          <p className="leading-relaxed mb-6">
            Google Analytics is a click-based analytics platform. It tracks pageviews, sessions, and referral sources. When someone visits your site from a Google search result, GA captures the referrer and attributes the visit to organic search. When the same person asks ChatGPT a question and ChatGPT cites your blog post, there is no click. The user reads the answer inside the AI interface and moves on. GA never fires. The citation is invisible.
          </p>
          <p className="leading-relaxed mb-6">
            Even when users do click through from AI platforms, the traffic is almost always attributed to "Direct" or a generic "Unknown Referrer." This is because ChatGPT, Perplexity, Claude, and Gemini do not pass standard HTTP referrer headers. Your analytics dashboard shows zero signal from the fastest-growing traffic source on the web. The measurement gap is not a technical glitch — it is a structural limitation of legacy analytics tools.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Three Core Metrics That Matter</h2>
          <p className="leading-relaxed mb-6">
            Since GA cannot measure AI citations, you need a different set of metrics. We have identified three that form the foundation of any GEO measurement framework:
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Citation Frequency</h3>
          <p className="leading-relaxed mb-6">
            This is the raw count of how often your content is cited by AI platforms over a given period. It answers the basic question: "Am I being cited at all?" Frequency varies dramatically by category and query type, but the direction matters more than the absolute number. A rising citation frequency means your content is becoming more authoritative in the eyes of AI systems.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Citation Share</h3>
          <p className="leading-relaxed mb-6">
            Citation share is your percentage of total citations within a specific category or for a set of related queries. If there are one hundred citations across your competitive set and your content accounts for fifteen, your citation share is 15%. This is the closest analogue to search market share in traditional SEO, and it accounts for the zero-sum nature of AI citations — every citation awarded to a competitor is one your content did not receive. Unlike frequency, share accounts for category growth. If the entire category doubles in citations but your share stays flat, you are keeping pace, not gaining ground.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Citation Trend</h3>
          <p className="leading-relaxed mb-6">
            Trend measures whether your citation count is increasing, decreasing, or stable over time. This is the lagging indicator that confirms whether your optimization efforts are working. A positive trend over 30 to 90 days is a strong signal that your content is becoming more embedded in AI knowledge bases. A flat or declining trend, even with decent absolute frequency, suggests that competitors are catching up or that your content is losing relevance in AI retrieval systems.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Citation Half-Life: Measuring Content Durability</h2>
          <p className="leading-relaxed mb-6">
            Not all citations are equal. Some content generates citations for years. Most generates citations for days or weeks. Citation half-life measures how long a page continues to generate AI citations after publication — the point at which it loses half its citation velocity. A page with a half-life of six months is fundamentally more valuable than a page with a half-life of six days, because the compound effect of sustained citations builds authority over time.
          </p>
          <p className="leading-relaxed mb-6">
            What determines half-life? In our analysis, structured evergreen content consistently outlasts news-style content. A well-structured FAQ page or definitive guide with clear entity language and FAQ Schema can have a half-life ten times longer than a topical news post with the same initial citation frequency. The trade-off is real: fresh content captures more initial citations, but structured content captures them for longer. The optimal strategy publishes both — short-lived spikes for immediate visibility and long-lived anchors for sustained authority.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Tracking Competitive Citation Share</h2>
          <p className="leading-relaxed mb-6">
            The most important metric — and the hardest to measure — is your citation share relative to specific competitors. In traditional SEO, you can run a third-party tool and see exactly which domains rank for which keywords. In GEO, no equivalent tool exists yet. The current best approach is controlled query sampling: run the same set of category-defining queries across multiple AI platforms at regular intervals and track which sources appear in the responses.
          </p>
          <p className="leading-relaxed mb-6">
            This is what GetCiteFlow does. We run thousands of queries each week across ChatGPT, Perplexity, Claude, and Gemini, recording every cited source. Over time, the data reveals citation share trends with statistical significance. The patterns are remarkably consistent across platforms — content that performs well on one AI tool tends to perform well on all of them, with minor variance by query phrasing. Competitive citation share is the North Star metric because it captures the only thing that ultimately matters: when someone asks an AI about your category, is your content among the sources the model chooses?
          </p>

          <div className="mt-8 p-8 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-3xl text-center">
            <h3 className="text-xl font-bold text-white mb-3">See Your AI Visibility Score</h3>
            <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">
              GetCiteFlow analyzes your site and returns your citation frequency, share, and trend data across major AI platforms. Know where you stand — and what to fix.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6E7BFF] to-[#8B5CF6] px-8 py-3 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity">
              Scan Your Site <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
