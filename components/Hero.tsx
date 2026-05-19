'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Sparkles, Loader2 } from 'lucide-react';

export function Hero() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || isLoading) return;
    const domain = url.replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0];
    setIsLoading(true);
    router.push(`/report/${domain}`);
  };

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[70vh] flex flex-col justify-center">
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-[#6E7BFF] opacity-[0.08] blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-[#8B5CF6] opacity-[0.1] blur-[100px] rounded-full -z-10" />

      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-8">
          <Sparkles className="w-3 h-3 text-primary" />
          <span>GEO Report 2026</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="hero-title mb-6">
          Get Mentioned by AI
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-slate-400 font-light max-w-2xl mx-auto mb-8">
          Analyze and optimize your website for ChatGPT, Gemini and AI Search.
        </motion.p>

        <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} onSubmit={handleAnalyze} className="relative max-w-xl mx-auto w-full">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#6E7BFF] to-[#8B5CF6] rounded-2xl md:rounded-full blur opacity-20" />
          <div className="relative flex flex-col md:flex-row bg-[#0A0F24] border border-white/10 rounded-2xl md:rounded-full p-2 md:pl-6 shadow-2xl gap-2 md:gap-0">
            <input type="text" placeholder="Enter website URL (e.g. acme.com)" className="bg-transparent flex-1 outline-none text-sm font-medium text-white placeholder:text-slate-500 py-3 px-4 md:py-0 md:px-0" value={url} onChange={(e) => setUrl(e.target.value)} />
            <button type="submit" disabled={isLoading} className="bg-gradient-to-r from-[#6E7BFF] to-[#8B5CF6] px-8 py-3 rounded-xl md:rounded-full text-sm font-bold shadow-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer w-full md:w-auto inline-flex items-center justify-center gap-2">{isLoading ? <><Loader2 className="w-4 h-4 animate-spin" />Analyzing...</> : 'Analyze Site'}</button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
