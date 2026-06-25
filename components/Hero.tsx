'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Sparkles, Loader2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useDictionary } from '@/i18n/useDictionary';

export function Hero() {
  const pathname = usePathname();
  const dict = useDictionary();
  const t = dict?.home;
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const prefix = pathname.startsWith('/zh') ? '/zh' : '';

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || isLoading) return;
    const domain = url.replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0];
    setIsLoading(true);
    router.push(`${prefix}/report/${domain}`);
  };

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-[#6E7BFF] opacity-[0.08] blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-[#8B5CF6] opacity-[0.1] blur-[100px] rounded-full -z-10" />

      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div initial={false} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-8">
          <Sparkles className="w-3 h-3 text-primary" />
          <span>{t?.badge || 'Enterprise AI Brand Service'}</span>
        </motion.div>

        <motion.h1 initial={false} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="hero-title mb-6">
          {t ? (
            <>{t.heroTitlePrefix}<span className="gradient-text"> {t.heroTitleHighlight}</span></>
          ) : (
            <>Get Your Brand<span className="gradient-text"> Recommended by AI</span></>
          )}
        </motion.h1>

        <motion.p initial={false} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-slate-400 font-light max-w-2xl mx-auto mb-10">
          {t?.heroSubtitle || "We build your brand\u2019s presence across ChatGPT, Claude, Perplexity, Gemini, DeepSeek, Doubao, and Qwen \u2014 so AI systems mention and recommend you."} {t?.scannerIncluded && <strong className="text-white">{t.scannerIncluded}</strong>}
        </motion.p>

        <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <Link href={`${prefix}/services/ai-visibility-growth`} className="bg-gradient-to-r from-[#6E7BFF] to-[#8B5CF6] px-8 py-3.5 rounded-xl text-sm font-bold text-white shadow-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2">
            {t?.talkToTeam || 'Talk to Our Team'} <ArrowRight className="w-4 h-4" />
          </Link>
          <span className="text-slate-600 text-sm">{t?.or || 'or'}</span>
          <button onClick={() => document.getElementById('scanner-section')?.scrollIntoView({ behavior: 'smooth' })} className="text-slate-400 hover:text-white transition-colors text-sm font-medium cursor-pointer">
            {t?.tryFreeScanner || 'Try Free AI Visibility Scanner \u2192'}
          </button>
        </motion.div>

        <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex items-center justify-center gap-3 text-sm">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-xs">
            {t?.visibilityBoost || '\u2191 Up to 40% visibility boost'}
          </span>
          <span className="text-slate-600">·</span>
          <span className="text-slate-500 text-xs font-semibold">{t?.researchBased || 'Based on KDD 2024 research'}</span>
        </motion.div>
      </div>

      <div id="scanner-section" className="max-w-5xl mx-auto text-center z-10 mt-20 pt-12 border-t border-white/5">
        <motion.p initial={false} whileInView={{ opacity: 1 }} className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-2">
          {t?.scannerLabel || 'Free AI Visibility Scanner \u2014 A Free Diagnostic for Your Brand'}
        </motion.p>
        <motion.p initial={false} whileInView={{ opacity: 1 }} transition={{ delay: 0.05 }} className="text-sm text-slate-500 mb-6">
          {t?.scannerHint || 'Enter any URL. Get a 0-100 score. No signup required.'}
        </motion.p>
        <motion.form initial={false} whileInView={{ opacity: 1, y: 0 }} onSubmit={handleAnalyze} className="relative max-w-xl mx-auto w-full">
          <div className="flex flex-col md:flex-row bg-[#0A0F24] border border-white/10 rounded-2xl md:rounded-full p-2 md:pl-6 shadow-xl gap-2 md:gap-0">
            <input type="text" placeholder={t?.inputPlaceholder || "Enter website URL (e.g. acme.com)"} className="bg-transparent flex-1 outline-none text-sm font-medium text-white placeholder:text-slate-500 py-3 px-4 md:py-0 md:px-0" value={url} onChange={(e) => setUrl(e.target.value)} />
            <button type="submit" disabled={isLoading} className="bg-gradient-to-r from-[#6E7BFF] to-[#8B5CF6] px-8 py-3 rounded-xl md:rounded-full text-sm font-bold text-white shadow-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer w-full md:w-auto inline-flex items-center justify-center gap-2">{isLoading ? <><Loader2 className="w-4 h-4 animate-spin" />{t?.analyzing || 'Analyzing...'}</> : (t?.analyzeButton || 'Analyze Site')}</button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
