'use client';

import { motion } from "motion/react";
import { Globe, FileText, TrendingUp } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDictionary } from '@/i18n/useDictionary';

const stepIcons = [Globe, FileText, TrendingUp] as const;

const enSteps = [
  { title: "Full Site Scan", desc: "Enter any URL and GetCiteFlow crawls your homepage and core landing pages \u2014 checking title tags, H1s, FAQ coverage, Schema markup, meta descriptions, robots.txt, and llms.txt." },
  { title: "AI Visibility Score", desc: "Get an AI Visibility Score (0-100) with a detailed breakdown across 6 dimensions. See exactly what AI systems find about your brand \u2014 and what they miss \u2014 ranked by impact." },
  { title: "Track & Improve", desc: "Follow the prioritized recommendations to fix what's holding your site back. Re-scan anytime to track your progress and watch your score grow." },
];

export function HowItWorks() {
  const pathname = usePathname();
  const dict = useDictionary();
  const t = dict?.howItWorks;
  const prefix = pathname.startsWith('/zh') ? '/zh' : '';
  const steps = t?.steps ?? enSteps;

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent via-[#0A0F24]/50 to-transparent">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t?.title || 'How GetCiteFlow Works'}
        </h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
          {t?.subtitle || "Three simple steps to understand and improve your site's AI visibility."}
        </p>

        <ol className="grid md:grid-cols-3 gap-6 list-none">
          {steps.map((step: any, idx: number) => {
            const Icon = stepIcons[idx] ?? stepIcons[0];
            return (
              <li key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="text-5xl font-black text-white/5 mb-2">{`0${idx + 1}`}</span>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{step.desc}</p>
                  </div>
                  
                  {idx < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                </motion.div>
              </li>
            );
          })}
        </ol>

        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm mb-4">{t?.cta || "Want your brand mentioned and recommended by AI \u2014 without doing the work yourself?"}</p>
          <Link href={`${prefix}/pricing`} className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6E7BFF] to-[#8B5CF6] px-8 py-3 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity">
            {t?.ctaButton || "Let Our Team Build Your Brand Presence"} <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
