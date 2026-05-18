'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { ArrowRight, Search, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function Hero() {
  const [url, setUrl] = useState('');
  const router = useRouter();

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    // Clean URL or handle it
    const domain = url.replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0];
    router.push(`/report/${domain}`);
  };

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[70vh] flex flex-col justify-center">
      {/* Background Glow Effects from Design */}
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-[#6E7BFF] opacity-[0.08] blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-[#8B5CF6] opacity-[0.1] blur-[100px] rounded-full -z-10" />
      
      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-8"
        >
          <Sparkles className="w-3 h-3 text-primary" />
          <span>GEO Report 2026</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="hero-title mb-6"
        >
          Get Mentioned by AI
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-400 font-light max-w-2xl mx-auto mb-12"
        >
          Analyze and optimize your website for ChatGPT, Gemini and AI Search. 
          The first visibility platform for the generative era.
        </motion.p>
        
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          onSubmit={handleAnalyze}
          className="relative max-w-xl mx-auto"
        >
          {/* Subtle Outer Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#6E7BFF] to-[#8B5CF6] rounded-full blur opacity-20" />
          
          <div className="relative flex bg-[#0A0F24] border border-white/10 rounded-full p-2 pl-6 shadow-2xl">
            <input
              type="text"
              placeholder="Enter your website URL (e.g. acme.com)"
              className="bg-transparent flex-1 outline-none text-sm font-medium text-white placeholder:text-slate-500"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#6E7BFF] to-[#8B5CF6] px-8 py-3 rounded-full text-sm font-bold shadow-lg hover:opacity-90 transition-opacity cursor-pointer"
            >
              Analyze Site
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

