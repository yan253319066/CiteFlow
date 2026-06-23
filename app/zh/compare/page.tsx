'use client';

import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useDictionary } from '@/i18n/useDictionary';
import { ArrowRight, Crosshair, BarChart3, TrendingUp, Search } from "lucide-react";
import Link from "next/link";

const stepsIcons = [Search, Crosshair, BarChart3];

export default function ZhComparePage() {
  const dict = useDictionary()!;
  const t = dict.compare;

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-none">{t.badge}</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {t.title} <span className="gradient-text">{t.titleHighlight}</span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">{t.subtitle}</p>
          <Link href="/zh" className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:opacity-90 transition-opacity">
            {t.getFreeScan} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            { title: t.step1Title, desc: t.step1Desc },
            { title: t.step2Title, desc: t.step2Desc },
            { title: t.step3Title, desc: t.step3Desc },
          ].map((step, i) => {
            const Icon = stepsIcons[i];
            return (
              <Card key={i} className="p-8 bg-card border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-primary uppercase">步骤 {i + 1}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400">{step.desc}</p>
              </Card>
            );
          })}
        </div>

        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">{t.statsHeading}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: '~33%', label: '的 AI 引用来自对比内容', source: 'Princeton GEO Study' },
              { stat: '140%', label: '结构化对比使引用平均增长', source: 'GetCiteFlow 数据' },
              { stat: '5-25x', label: 'AI 推荐时更高的购买意向', source: 'Gartner' },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 bg-white/5 border border-white/10 rounded-3xl">
                <div className="text-4xl font-black text-primary mb-2">{item.stat}</div>
                <p className="text-sm text-slate-400 mb-2">{item.label}</p>
                <p className="text-[10px] text-slate-600">— {item.source}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 md:p-12 bg-gradient-to-r from-primary/5 to-transparent border border-primary/20 rounded-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{t.ctaTitle}</h2>
              <p className="text-slate-400 text-sm">{t.ctaDesc}</p>
            </div>
          </div>
          <Link href="/zh" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition-opacity">
            {t.ctaButton} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
