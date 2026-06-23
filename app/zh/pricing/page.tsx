'use client';

import { Navbar } from "@/components/Navbar";
import { useDictionary } from '@/i18n/useDictionary';
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function EnterpriseCard() {
  const dict = useDictionary();
  const t = dict!.pricing;

  return (
    <>
      <div className="p-6 border border-primary/40 bg-primary/5 rounded-2xl flex flex-col">
        <div className="mb-4 text-center">
          <h2 className="text-xl font-bold">{t.brandVisibility}</h2>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-sm text-muted-foreground font-medium">{t.from}</span>
            <span className="text-3xl font-black">$3,999</span>
            <span className="text-sm text-muted-foreground">{t.oneTime}</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">{t.brandDesc}</p>
          <ul className="space-y-1.5 mb-6 flex-1 text-sm">
            {t.brandFeatures.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <CheckIcon />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a href="mailto:support@getciteflow.ai" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold bg-primary text-white hover:bg-primary/90 transition-all cursor-pointer">
            {t.contactUs}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>

      <div className="p-6 border border-primary/40 bg-primary/5 rounded-2xl flex flex-col">
        <div className="mb-4 text-center">
          <h2 className="text-xl font-bold">{t.aiVisibilityGrowth}</h2>
        </div>
        <div className="flex flex-col flex-1">
          <span className="inline-flex items-center self-start px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-semibold mb-2">{t.new}</span>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-sm text-muted-foreground font-medium">{t.from}</span>
            <span className="text-3xl font-black">$4,999</span>
            <span className="text-sm text-muted-foreground">{t.perMonth}</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">{t.growthDesc}</p>
          <ul className="space-y-1.5 mb-6 flex-1 text-sm">
            {t.growthFeatures.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <CheckIcon />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <Link href="/zh/services/ai-visibility-growth" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold border border-primary/40 bg-primary/10 text-white hover:bg-primary/20 transition-all cursor-pointer mb-2">
            {t.learnMore}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
          <a href="mailto:support@getciteflow.ai" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold bg-primary text-white hover:bg-primary/90 transition-all cursor-pointer">
            {t.contactUs}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </>
  );
}

export default function ZhPricingPage() {
  const dict = useDictionary()!;
  const t = dict.pricing;

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <Badge className="mb-3 bg-primary/10 text-primary border-none">{t.badge}</Badge>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {t.title.split(t.titleHighlight)[0]}<span className="gradient-text">{t.titleHighlight}</span>{t.title.split(t.titleHighlight)[1]}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 border border-white/10 bg-card rounded-2xl flex flex-col">
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-1">{t.freeTitle}</h2>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-black">$0</span>
                <span className="text-sm text-muted-foreground">{t.freeForever}</span>
              </div>
              <p className="text-sm text-muted-foreground">{t.freeDesc}</p>
            </div>
            <ul className="space-y-2 mb-6 flex-1 text-sm">
              {t.freeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckIcon />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link href="/zh" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold bg-primary text-white hover:bg-primary/90 transition-all cursor-pointer">
              {t.analyzeSite}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <div className="mt-4 p-3 rounded-xl bg-primary/5 border border-primary/10 text-center">
              <p className="text-xs text-muted-foreground">
                {t.tryEnterprise}
              </p>
            </div>
          </div>

          <EnterpriseCard />
        </div>
      </div>
    </main>
  );
}
