'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { WaitlistModal } from './WaitlistModal';

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenWaitlist, setIsOpenWaitlist] = useState(false);

  const navLinks = [
    { name: 'Platform', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 md:py-6 bg-background/5 backdrop-blur-md border-b border-white/5"
      >
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6E7BFF] to-[#8B5CF6] flex items-center justify-center shadow-lg shadow-[#6E7BFF]/20 group-hover:scale-110 transition-transform" />
          <span className="text-xl font-bold tracking-tight">CiteFlow</span>
        </Link>
        
        {/* Desktop Nav */}
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
          <button 
            onClick={() => setIsOpenWaitlist(true)}
            className="hidden md:flex w-32 h-10 border border-white/10 rounded-full items-center justify-center text-sm font-medium bg-white/5 hover:bg-white/10 transition-all cursor-pointer hover:border-primary/50"
          >
            Login
          </button>
          
          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-2xl font-bold transition-colors",
                    pathname === link.href ? "text-primary" : "text-slate-400"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-white/5 my-4" />
              <button 
                onClick={() => {
                  setIsOpen(false);
                  setIsOpenWaitlist(true);
                }}
                className="w-full h-14 border border-white/10 rounded-2xl flex items-center justify-center text-lg font-bold bg-white/5 cursor-pointer"
              >
                Login
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <WaitlistModal isOpen={isOpenWaitlist} onClose={() => setIsOpenWaitlist(false)} />
    </>
  );
}

