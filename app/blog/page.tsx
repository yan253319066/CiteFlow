import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Zap, Code, Terminal } from "lucide-react";

interface Post {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
}

const posts: Post[] = [
  {
    title: "GEO Deep Dive: How Generative Engines Decide the Citation Order",
    slug: "geo-guide",
    date: "May 15, 2026",
    category: "Technical Guide",
    excerpt: "Go beyond keyword stuffing. Understand the 'Attention Mechanism' of LLMs and how to make your brand the primary source of truth in AI-generated answers."
  },
  {
    title: "Semantic Mapping: Solving AI 'Hallucinations' and Brand Omissions",
    slug: "chatgpt-seo",
    date: "May 10, 2026",
    category: "Strategy",
    excerpt: "Why high search volume doesn't equal high citation volume. Explore how to use Entity Linking to correct LLM cognitive bias toward your products."
  },
  {
    title: "AI Visibility: The North Star Metric for the Post-SEO Era",
    slug: "ai-visibility",
    date: "May 5, 2026",
    category: "Trends",
    excerpt: "Traffic is no longer the only goal. If users can get answers without clicking, how do we measure brand share of voice in generative responses?"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <div className="mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-none">Intelligence</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Insights on <span className="gradient-text">AI Visibility</span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl">
            Strategies for the generative web where citations are the new currency of authority.
          </p>
        </div>

        {/* Blog Posts Section */}
        <section>
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <MotionWrapper key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <Card className="p-8 bg-card border-white/5 h-full hover:border-primary/50 transition-all group flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                      <Badge variant="outline" className="border-white/10 text-xs uppercase tracking-widest">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors flex-grow">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-8 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                      Read analysis <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              </MotionWrapper>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

// Simple wrapper since we can't use motion directly in server component without 'use client'
// but we want the list to be SEO friendly
function MotionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="transform hover:translate-y-[-4px] transition-transform">
      {children}
    </div>
  )
}
