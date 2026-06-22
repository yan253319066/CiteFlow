import { Navbar } from "@/components/Navbar";
import { JsonLd } from "@/components/JsonLd";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GetCiteFlow Blog | AI Brand Visibility Insights',
  description: 'Guides about AI brand visibility, getting mentioned by ChatGPT, and AI visibility growth strategies.',
  keywords: ['AI brand visibility', 'brand AI mentions', 'AI visibility', 'brand visibility guide', 'AI visibility scanner', 'AI visibility checker'],
  alternates: { canonical: 'https://www.getciteflow.ai/blog' },
  openGraph: {
    title: 'GetCiteFlow Blog — AI Brand Visibility Insights',
    description: 'Strategies for getting your brand mentioned by AI. Guides on AI brand visibility and getting recommended by ChatGPT.',
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog&score=75', width: 1200, height: 630, alt: 'GetCiteFlow Blog OG Image' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GetCiteFlow Blog — AI Brand Visibility Insights',
    description: 'Strategies for getting your brand mentioned by AI.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog&score=75'],
  },
};

const posts = [
  { title: "The Future of Search Is Citation — What CMOs Should Know for 2027", slug: "future-search-citations-cmo", date: "Jun 22, 2026", category: "Guide", excerpt: "Entity authority will replace domain authority. 50%+ of searches will return AI-generated answers by 2027. What CMOs should invest in for the citation economy." },
  { title: "The Audit Every Brand Needs Before the Generative Web Arrives", slug: "ai-visibility-audit", date: "Jun 22, 2026", category: "Guide", excerpt: "A 6-dimension generative web audit: entity clarity, schema completeness, crawler configuration, content structure, comparison coverage, and agent readiness." },
  { title: "The ROI of AI Citations: Converting Visibility into Revenue", slug: "ai-citations-roi", date: "Jun 22, 2026", category: "Guide", excerpt: "AI citations drive three forms of value: direct referral traffic, brand awareness, and entity reinforcement. How to measure and attribute revenue from GEO." },
  { title: "Measuring AI Visibility: Beyond Google Analytics", slug: "ai-visibility-measurement", date: "Jun 22, 2026", category: "Guide", excerpt: "Google Analytics cannot see AI citations. Three core metrics: citation frequency, citation share, and citation trend for measuring generative engine visibility." },
  { title: "How AI Overviews Changed Google Search", slug: "ai-overviews-changed-google-search", date: "Jun 22, 2026", category: "Analysis", excerpt: "AI Overviews reduced organic CTR by 15-25%. Google's AI Overviews architecture differs fundamentally from ChatGPT — PageRank + E-E-A-T vs. RAG + entity clarity." },
  { title: "Why Blocking AI Crawlers Can Backfire", slug: "block-ai-crawlers-backfire", date: "Jun 22, 2026", category: "Strategy", excerpt: "The crawl vs. train distinction. Brands that block all AI crawlers lose citations entirely. The optimal configuration is crawl-no-training using robots.txt and llms.txt." },
  { title: "AI Visibility for Professional Services & Agencies", slug: "ai-visibility-professional-services", date: "Jun 22, 2026", category: "Industry Guide", excerpt: "Person vs. firm entity resolution, individual Person schema pages, local LLM optimization, and case study entity associations for consulting and agency brands." },
  { title: "AI Visibility for Startups with No Backlinks", slug: "ai-visibility-startups", date: "Jun 22, 2026", category: "Industry Guide", excerpt: "Backlinks are irrelevant to LLM citations. Startups can compete with established brands through entity clarity, comparison pages, and directory submissions." },
  { title: "AI Visibility for E-Commerce Brands", slug: "ai-visibility-ecommerce", date: "Jun 22, 2026", category: "Industry Guide", excerpt: "Product schema markup drives 4x more AI citations for e-commerce. Review schema, category hierarchies, and inventory data for LLM purchase recommendations." },
  { title: "AI Visibility for B2B SaaS Companies", slug: "ai-visibility-saas", date: "Jun 22, 2026", category: "Industry Guide", excerpt: "SaaS brands with dictionary-word names face unique entity disambiguation challenges. Comparison pages, pricing schema, and integration entity graphs drive AI citations." },
  { title: "AI Agent Traffic Is Coming — 7,851% Growth and What It Means", slug: "ai-agent-traffic-growth", date: "Jun 22, 2026", category: "Data & Trends", excerpt: "AI agent traffic projected to grow 7,851% by 2028. Why agents need machine-readable, verifiable, instruction-oriented content — and how to prepare your site for the agent web." },
  { title: "The Content Structure That Gets Cited by Every Major LLM", slug: "content-structure-llm-citations", date: "Jun 22, 2026", category: "Research Report", excerpt: "Reverse-engineered from 1,200+ cited pages: the universal four-layer architecture (Entity Definition → Relationship Map → Proof Layer → Structured Data) that predicts citation success across ChatGPT, Perplexity, Claude, Gemini, and Copilot." },
  { title: "Comparison Content: Highest-ROI Format for AI Citations", slug: "comparison-content-ai-citations", date: "Jun 22, 2026", category: "Strategy", excerpt: '"X vs Y" pages average 3-5x higher citation frequency than standard blog posts. Why LLMs prefer comparison content and how to build pages that get cited by ChatGPT, Perplexity, and Claude.' },
  { title: "The llms.txt & robots.txt Playbook for AI Crawlers", slug: "ai-crawler-playbook", date: "Jun 22, 2026", category: "Playbook", excerpt: "How llms.txt and robots.txt control AI crawler access and content prioritization. The crawl-no-training configuration and entity declaration chain for maximum citability." },
  { title: "How to Build Entity Associations LLMs Recognize", slug: "build-entity-associations", date: "Jun 22, 2026", category: "Playbook", excerpt: "Wikidata strategy, cross-source category consistency, and the Acquisition-Reinforcement-Consolidation lifecycle for building durable entity associations that LLMs trust." },
  { title: "Schema Markup That Directly Improves AI Citation Rates", slug: "schema-markup", date: "Jun 22, 2026", category: "Technical Guide", excerpt: "FAQ schema gets cited 2x more. Organization schema enables entity resolution. A ranked, implementation-ready guide to schema types that correlate with LLM citation frequency." },
  { title: "GEO vs SEO: Three Critical Differences", slug: "geo-vs-seo", date: "Jun 22, 2026", category: "Strategy", excerpt: "Extractability vs. rankability, entity consensus vs. backlinks, entity triples vs. keywords. Three mechanism-level differences between generative engine optimization and traditional SEO." },
  { title: "The Entity Gap: Why Most Brands Are Invisible to AI", slug: "entity-gap", date: "Jun 22, 2026", category: "Research Report", excerpt: "73–92% of brands cannot be identified as entities by LLMs. How NER failure, polysemy, and entity disambiguation gaps prevent brands from being cited — and how to fix each type." },
  { title: "AI Crawler Traffic Has Surpassed Human Traffic: Cloudflare 2026 Data", slug: "ai-traffic-2026", date: "Jun 18, 2026", category: "Data & Trends", excerpt: "57.5% of HTTP requests are now bots. AI crawlers make up 26.7% of verified bot traffic. GPTBot grew 305% in one year. Enterprise implications of the generative web shift." },
  { title: "How Generative AI Actually Chooses What to Cite", slug: "how-ai-chooses-sources", date: "Jun 20, 2026", category: "Technical Guide", excerpt: "The 4-stage RAG pipeline — query analysis, vector retrieval, re-ranking by information gain, and citation synthesis. How each major LLM platform selects sources differently, and what it means for content engineering." },
  { title: "We Built an AI Visibility Scanner, Ran It on Ourselves, and Scored 75/100", slug: "eating-our-own-dog-food", date: "Jun 13, 2026", category: "Case Study", excerpt: "The humbling moment we ran our own scanner on getciteflow.ai — and found we were missing FAQ Schema, llms.txt, and entity clarity. Here's how we went from 75 to 92." },
  { title: "How Generative Engines Choose What to Cite", slug: "geo-guide", date: "May 15, 2026", category: "Technical Guide", excerpt: "LLMs don't crawl the web like Google does. Understanding how they select sources changes everything about content strategy." },
  { title: "Search Rankings Don't Translate to AI Citations", slug: "chatgpt-seo", date: "May 10, 2026", category: "Strategy", excerpt: "High search volume and AI mentions are two different games. Here is what causes the gap and how to bridge it." },
  { title: "AI Visibility Is a Better Metric Than CTR", slug: "ai-visibility", date: "May 5, 2026", category: "Trends", excerpt: "In a zero-click world, being cited by an LLM matters more than driving a click. Here is how to measure it." },
  { title: "How to Get Cited by ChatGPT", slug: "rank-in-chatgpt", date: "May 18, 2026", category: "Playbook", excerpt: "A repeatable framework for increasing how often your product gets mentioned by AI assistants." },
  { title: "What Is GEO? A Complete Guide to Generative Engine Optimization", slug: "what-is-geo", date: "Oct 8, 2025", category: "Guides", excerpt: "GEO means optimizing content so AI search engines cite your brand. Here is how it works, how it differs from SEO, and how to implement it." },
  { title: "AI Search vs. SEO: Why Traditional Rankings No Longer Drive Traffic", slug: "ai-search-vs-seo", date: "Oct 22, 2025", category: "Analysis", excerpt: "The signals Google uses and the signals LLMs use are fundamentally different. Here is what the divergence means for content strategy." },
];

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "GetCiteFlow Blog — AI Search & GEO Insights",
  description: "Guides about AI brand visibility, getting mentioned by ChatGPT, and AI visibility growth strategies.",
  url: "https://www.getciteflow.ai/blog",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={blogSchema} />
      <Navbar />
      <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <div className="mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-none">Intelligence</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Insights on <span className="gradient-text">AI Visibility</span></h1>
          <p className="text-muted-foreground text-xl max-w-2xl">Strategies for the generative web where citations are the new currency of authority.</p>
        </div>
        <section><div className="grid md:grid-cols-2 gap-8">{posts.map((post) => <Link key={post.slug} href={`/blog/${post.slug}`}><Card className="p-8 bg-card border-white/5 h-full hover:border-primary/50 transition-all group flex flex-col"><div className="flex justify-between items-center mb-6"><Badge variant="outline" className="border-white/10 text-xs uppercase tracking-widest">{post.category}</Badge><span className="text-xs text-muted-foreground">{post.date}</span></div><h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors flex-grow">{post.title}</h2><p className="text-muted-foreground text-sm mb-8 line-clamp-3 leading-relaxed">{post.excerpt}</p><div className="flex items-center gap-2 text-sm font-semibold text-primary">Read analysis <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></div></Card></Link>)}</div></section>
      </div>
    </main>
  );
}
