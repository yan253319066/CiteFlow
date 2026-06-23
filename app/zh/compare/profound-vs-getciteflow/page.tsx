'use client';

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { JsonLd } from "@/components/JsonLd";
import { ArrowRight, Check, X, BarChart3, Zap } from "lucide-react";
import Link from "next/link";

const comparisonRows = [
  { feature: 'AI 可见度评分', profound: <Check className="w-5 h-5 text-green-400" />, getciteflow: <Check className="w-5 h-5 text-green-400" /> },
  { feature: '免费报告', profound: '有限', getciteflow: <Check className="w-5 h-5 text-green-400" /> },
  { feature: '并排对比', profound: <X className="w-5 h-5 text-red-400" />, getciteflow: <Check className="w-5 h-5 text-green-400" /> },
  { feature: 'FAQ 覆盖分析', profound: <Check className="w-5 h-5 text-green-400" />, getciteflow: <Check className="w-5 h-5 text-green-400" /> },
  { feature: '实体清晰度审计', profound: <Check className="w-5 h-5 text-green-400" />, getciteflow: <Check className="w-5 h-5 text-green-400" /> },
  { feature: '可分享报告页面', profound: '仅付费', getciteflow: <Check className="w-5 h-5 text-green-400" /> },
  { feature: '多 URL 对比', profound: <X className="w-5 h-5 text-red-400" />, getciteflow: <Check className="w-5 h-5 text-green-400" /> },
  { feature: 'AI 生成建议', profound: <Check className="w-5 h-5 text-green-400" />, getciteflow: <Check className="w-5 h-5 text-green-400" /> },
  { feature: 'LLM 提及历史', profound: <Check className="w-5 h-5 text-green-400" />, getciteflow: '即将推出' },
  { feature: '无需注册', profound: <X className="w-5 h-5 text-red-400" />, getciteflow: <Check className="w-5 h-5 text-green-400" /> },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '首页', item: 'https://www.getciteflow.ai/zh' },
    { '@type': 'ListItem', position: 2, name: '对比', item: 'https://www.getciteflow.ai/zh/compare' },
    { '@type': 'ListItem', position: 3, name: 'Profound vs GetCiteFlow' },
  ],
};

export default function ZhProfoundCompare() {
  return (
    <main className="min-h-screen">
      <JsonLd data={breadcrumbSchema} />
      <Navbar />
      <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-none">AI 可见度对比</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Profound vs <span className="gradient-text">GetCiteFlow</span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            两个平台都分析 AI 可见度。但 GetCiteFlow 免费提供更多功能——包括并排竞争对手对比和无需注册的报告。
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card border-white/10 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">功能对比</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left pb-4 font-semibold text-muted-foreground">功能</th>
                  <th className="text-center pb-4 font-bold text-purple-400">Profound</th>
                  <th className="text-center pb-4 font-bold text-primary">GetCiteFlow</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="py-4 font-medium">{row.feature}</td>
                    <td className="py-4 text-center">{row.profound}</td>
                    <td className="py-4 text-center">{row.getciteflow}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
            <BarChart3 className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Profound 的优势</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />可靠的 AI 可见度评分和分析</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />LLM 提及追踪（付费套餐）</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />内容优化建议</li>
              <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />免费套餐有限——报告需要注册</li>
              <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />无并排竞争对手对比</li>
            </ul>
          </div>

          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
            <Zap className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">GetCiteFlow 的优势</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />免费 AI 可见度检测——无需注册</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />并排对比任意两个 URL</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />每次分析均有可分享报告页面</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />无限制的免费分析</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />可执行的 AI 生成优化步骤</li>
            </ul>
          </div>
        </div>

        <div className="p-8 md:p-12 bg-gradient-to-r from-primary/5 to-transparent border border-primary/20 rounded-3xl text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">试试免费的 AI 可见度检测</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            无需注册。无需信用卡。只需粘贴你的 URL，数秒内获取 AI 可见度评分。
          </p>
          <Link href="/zh" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:opacity-90 transition-opacity">
            免费检测你的网站 <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
