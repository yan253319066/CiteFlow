'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';

export function Navbar() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-6"
    >
      <Link href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6E7BFF] to-[#8B5CF6] flex items-center justify-center shadow-lg shadow-[#6E7BFF]/20" />
        <span className="text-xl font-bold tracking-tight">CiteFlow</span>
      </Link>
      
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
        <Link href="#features" className="hover:text-white transition-colors">Platform</Link>
        <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
        <Link href="#how-it-works" className="hover:text-white transition-colors">Case Studies</Link>
        <Link href="#docs" className="hover:text-white transition-colors">Documentation</Link>
      </nav>
      
      <div className="flex items-center gap-4">
        <button className="w-32 h-10 border border-white/10 rounded-full flex items-center justify-center text-sm font-medium bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
          Login
        </button>
      </div>
    </motion.header>
  );
}

