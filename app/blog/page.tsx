import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Post {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
}

const posts: Post[] = [
  {
    title: "The Ultimate Guide to GEO: Generative Engine Optimization",
    slug: "geo-guide",
    date: "May 15, 2026",
    category: "Guides",
    excerpt: "Learn how to optimize your website for the new era of AI-driven search results from ChatGPT and Gemini."
  },
  {
    title: "Why ChatGPT Doesn't Mention Your SaaS (and how to fix it)",
    slug: "chatgpt-seo",
    date: "May 10, 2026",
    category: "Strategy",
    excerpt: "Understanding how LLMs select their sources and how you can influence their 'citing' decisions."
  },
  {
    title: "AI Visibility: The Metric That Matters More Than CTR",
    slug: "ai-visibility",
    date: "May 5, 2026",
    category: "Concepts",
    excerpt: "Why traditional organic traffic is changing and how to measure your presence in AI responses."
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <div className="mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-none">Our Journal</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Insights on <span className="gradient-text">AI Visibility</span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl">
            Staying ahead of the curve as the web shifts from traditional search to generative answers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
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
                  <p className="text-muted-foreground text-sm mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            </MotionWrapper>
          ))}
        </div>
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
