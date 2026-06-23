'use client';

import { Navbar } from "@/components/Navbar";
import { JsonLd } from "@/components/JsonLd";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useDictionary } from '@/i18n/useDictionary';

const zhCases = [
  {
    title: '我们如何优化 GetCiteFlow 自身的 AI 可见度',
    company: 'GetCiteFlow',
    slug: 'nexus-protocol',
    result: '75 → 92 分',
    description: '我们对自身运行了 AI 可见度扫描——结果发现，我们恰好缺少那些我们告诉用户需要修复的东西。这是吃自家狗粮的教训。',
  },
  {
    title: 'Notion GEO 策略：主导生产力领域 AI 回答',
    company: 'Notion',
    slug: 'notion-strategy',
    result: '行业领先',
    description: '为期两个月的分析：为何 Notion 在 92% 的 AI 生成生产力推荐中排名第一——以及每家 SaaS 公司能从其内容策略中学到什么。',
  },
];

export default function ZhCaseStudiesPage() {
  const dict = useDictionary()!;
  const t = dict.caseStudies;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首页', item: 'https://www.getciteflow.ai/zh' },
      { '@type': 'ListItem', position: 2, name: '案例研究' },
    ],
  };

  return (
    <main className="min-h-screen">
      <JsonLd data={breadcrumbSchema} />
      <Navbar />
      <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <div className="mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-none">{t.badge}</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {t.title} <span className="gradient-text">{t.titleHighlight}</span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl">{t.subtitle}</p>
        </div>

        <div className="grid gap-8">
          {zhCases.map((item, idx) => (
            <Card key={idx} className="p-8 bg-card border-white/10 hover:border-primary/50 transition-all group">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="max-w-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">{item.company}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-xs text-slate-500">{t.earlyAdopter}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                  <p className="text-slate-400 mb-6 leading-relaxed">{item.description}</p>
                  <Link
                    href={`/zh/case-studies/${item.slug}`}
                    className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors cursor-pointer"
                  >
                    {t.readMore} <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 flex flex-col items-center justify-center min-w-[200px] border border-white/5 group-hover:border-primary/20 transition-colors">
                  <FileText className="w-8 h-8 text-primary mb-2" />
                  <span className="text-2xl font-black text-white">{item.result}</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase mt-1">{t.growthIndicator}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
