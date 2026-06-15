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
