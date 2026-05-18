'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Platform', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/blog/geo-guide' }, // Placeholder for now
    { name: 'Documentation', href: '/blog/geo-guide' }, // Placeholder for now
  ];

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-6 bg-background/5 backdrop-blur-md border-b border-white/5"
    >
      <Link href="/" className="flex items-center gap-2 group">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6E7BFF] to-[#8B5CF6] flex items-center justify-center shadow-lg shadow-[#6E7BFF]/20 group-hover:scale-110 transition-transform" />
        <span className="text-xl font-bold tracking-tight">CiteFlow</span>
      </Link>
      
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.name} 
              href={link.href} 
              className={cn(
                "relative transition-colors hover:text-white",
                isActive ? "text-white" : "text-slate-400"
              )}
            >
              {link.name}
              {isActive && (
                <motion.div 
                  layoutId="nav-active"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </nav>
      
      <div className="flex items-center gap-4">
        <button className="w-32 h-10 border border-white/10 rounded-full flex items-center justify-center text-sm font-medium bg-white/5 hover:bg-white/10 transition-all cursor-pointer hover:border-primary/50">
          Login
        </button>
      </div>
    </motion.header>
  );
}

