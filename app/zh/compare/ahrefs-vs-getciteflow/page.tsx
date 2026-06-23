'use client';

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { JsonLd } from "@/components/JsonLd";
import { ArrowRight, Check, X, Globe, Bot } from "lucide-react";
import Link from "next/link";

const comparisonRows = [
  { feature: '专注领域', ahrefs: 'Google 搜索排名', getciteflow: 'AI 可见度评分' },
  { feature: '核心指标', ahrefs: '域名评级 (DR)', getciteflow: 'AI 可见度评分 (0-100)' },
  { feature: '外链分析', ahrefs: <Check className="w-5 h-5 text-green-400" />, getciteflow: '间接（权威信号）' },
  { feature: '关键词研究', ahrefs: <Check className="w-5 h-5 text-green-400" />, getciteflow: <X className="w-5 h-5 text-red-400" /> },
  { feature: 'AI 引用追踪', ahrefs: <X className="w-5 h-5 text-red-400" />, getciteflow: <Check className="w-5 h-5 text-green-400" /> },
  { feature: 'FAQ 覆盖分析', ahrefs: <X className="w-5 h-5 text-red-400" />, getciteflow: <Check className="w-5 h-5 text-green-400" /> },
  { feature: '实体清晰度审计', ahrefs: <X className="w-5 h-5 text-red-400" />, getciteflow: <Check className="w-5 h-5 text-green-400" /> },
  { feature: 'SERP 排名追踪', ahrefs: <Check className="w-5 h-5 text-green-400" />, getciteflow: <X className="w-5 h-5 text-red-400" /> },
  { feature: '免费套餐', ahrefs: '有限', getciteflow: <Check className="w-5 h-5 text-green-400" /> },
  { feature: 'GEO 建议', ahrefs: <X className="w-5 h-5 text-red-400" />, getciteflow: <Check className="w-5 h-5 text-green-400" /> },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '首页', item: 'https://www.getciteflow.ai/zh' },
    { '@type': 'ListItem', position: 2, name: '对比', item: 'https://www.getciteflow.ai/zh/compare' },
    { '@type': 'ListItem', position: 3, name: 'Ahrefs vs GetCiteFlow' },
  ],
};

export default function ZhAhrefsCompare() {
  return (
    <main className="min-h-screen">
      <JsonLd data={breadcrumbSchema} />
      <Navbar />
      <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-none">对比</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Ahrefs vs <span className="gradient-text">GetCiteFlow</span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Ahrefs 主导传统 SEO。GetCiteFlow 掌控 AI 可见度。事实是你两者都需要——但原因截然不同。
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card border-white/10 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">功能并排对比</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left pb-4 font-semibold text-muted-foreground">功能</th>
                  <th className="text-center pb-4 font-bold text-orange-400">Ahrefs</th>
                  <th className="text-center pb-4 font-bold text-primary">GetCiteFlow</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="py-4 font-medium">{row.feature}</td>
                    <td className="py-4 text-center">{row.ahrefs}</td>
                    <td className="py-4 text-center">{row.getciteflow}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
            <Globe className="w-8 h-8 text-orange-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Ahrefs — 传统 SEO 强者</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />一流的外链分析和域名评级</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />全面的关键词研究和 SERP 追踪</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />内容差距分析和网站审计</li>
              <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />无 AI 可见度评分或 GEO 分析</li>
              <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />无法了解 ChatGPT、Gemini 等如何引用你的内容</li>
            </ul>
          </div>

          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
            <Bot className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">GetCiteFlow — AI 品牌可见度服务</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />AI 可见度评分及分解分析</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />FAQ 覆盖和实体清晰度审计</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />可执行的 GEO 建议</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />免费检测报告——无需信用卡</li>
              <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />无外链数据库或关键词研究（即将推出）</li>
            </ul>
          </div>
        </div>

        <div className="p-8 md:p-12 bg-gradient-to-r from-primary/5 to-transparent border border-primary/20 rounded-3xl text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">不用选择。两者都用。</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Ahrefs 告诉你 Google 如何看你的网站。GetCiteFlow 告诉你 AI 如何看它。在 LLM 时代，你需要处处可见。
          </p>
          <Link href="/zh" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:opacity-90 transition-opacity">
            免费检测 AI 可见度 <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
