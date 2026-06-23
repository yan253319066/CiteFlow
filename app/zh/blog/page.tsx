'use client';

import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  { title: "搜索的未来是引用——2027 年 CMO 必知", slug: "future-search-citations-cmo", date: "2026-06-22", category: "指南", excerpt: "实体权威将取代域名权威。到 2027 年，50%+ 的搜索将返回 AI 生成的答案。" },
  { title: "生成式 Web 到来前每个品牌必须做的审计", slug: "ai-visibility-audit", date: "2026-06-22", category: "指南", excerpt: "6 维度生成式 Web 审计：实体清晰度、Schema 完整性、爬虫配置、内容结构、对比覆盖和 AI 就绪度。" },
  { title: "AI 引用的 ROI：将可见度转化为收入", slug: "ai-citations-roi", date: "2026-06-22", category: "指南", excerpt: "AI 引用驱动三种价值：直接引荐流量、品牌知名度和实体强化。如何衡量和归因 GEO 收入。" },
  { title: "衡量 AI 可见度：超越 Google Analytics", slug: "ai-visibility-measurement", date: "2026-06-22", category: "指南", excerpt: "Google Analytics 看不到 AI 引用。三个核心指标：引用频率、引用份额和引用趋势。" },
  { title: "AI 概览如何改变了 Google 搜索", slug: "ai-overviews-changed-google-search", date: "2026-06-22", category: "分析", excerpt: "AI 概览使自然 CTR 降低 15-25%。Google AI 概览的架构与 ChatGPT 有本质区别。" },
  { title: "阻止 AI 爬虫可能适得其反", slug: "block-ai-crawlers-backfire", date: "2026-06-22", category: "策略", excerpt: "爬取与训练的区分。阻止所有 AI 爬虫的品牌会完全失去引用。" },
];

const zhBlogPosts = [
  { title: "什么是 GEO？生成式引擎优化完全指南", slug: "what-is-geo", date: "2025-10-08", category: "指南", excerpt: "GEO 意味着优化内容让 AI 搜索引擎引用你的品牌。" },
  { title: "AI 搜索 vs. SEO：传统排名不再驱动流量", slug: "ai-search-vs-seo", date: "2025-10-22", category: "分析", excerpt: "Google 使用的信号和 LLM 使用的信号有本质区别。" },
];

const allPosts = [...zhBlogPosts, ...posts];

export default function ZhBlogPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <div className="mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-none">博客</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">AI 可见度<span className="gradient-text">洞察</span></h1>
          <p className="text-muted-foreground text-xl max-w-2xl">在引用成为新权威货币的生成式 Web 时代的策略。</p>
        </div>
        <section>
          <div className="grid md:grid-cols-2 gap-8">
            {allPosts.map((post) => (
              <Link key={post.slug} href={`/zh/blog/${post.slug}`}>
                <Card className="p-8 bg-card border-white/5 h-full hover:border-primary/50 transition-all group flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                    <Badge variant="outline" className="border-white/10 text-xs uppercase tracking-widest">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors flex-grow">{post.title}</h2>
                  <p className="text-muted-foreground text-sm mb-8 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    阅读文章 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
