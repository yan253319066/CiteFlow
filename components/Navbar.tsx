'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
import { useDictionary } from '@/i18n/useDictionary';

const enResourcesLinks = [
  { name: 'Blog', href: '/blog' },
  { name: 'Case Studies', href: '/case-studies' },
  { type: 'group', name: 'GEO Guides' },
  { name: 'AI Visibility for SaaS', href: '/geo-for-saas', indent: true },
  { name: 'AI Visibility for AI Tools', href: '/geo-for-ai-tools', indent: true },
  { name: 'AI Visibility for Startups', href: '/geo-for-startups', indent: true },
  { type: 'divider' },
  { name: 'Why ChatGPT Ignores You', href: '/why-chatgpt-doesnt-mention-your-site' },
  { name: 'Compare Tool', href: '/compare' },
  { type: 'divider' },
  { name: 'App', href: 'https://app.getciteflow.ai', external: true },
];

function isResourceActive(pathname: string, href?: string): boolean {
  if (!href) return false;
  const stripped = pathname.replace(/^\/zh/, '') || '/';
  if (stripped === href) return true;
  if (href === '/geo-for-saas' && stripped.startsWith('/geo-for-saas')) return true;
  if (href === '/geo-for-ai-tools' && stripped.startsWith('/geo-for-ai-tools')) return true;
  if (href === '/geo-for-startups' && stripped.startsWith('/geo-for-startups')) return true;
  if (href === '/why-chatgpt-doesnt-mention-your-site' && stripped.startsWith('/why-chatgpt-doesnt-mention-your-site')) return true;
  if (href === '/compare' && stripped.startsWith('/compare')) return true;
  if (href === '/blog' && stripped.startsWith('/blog')) return true;
  if (href === '/case-studies' && stripped.startsWith('/case-studies')) return true;
  return false;
}

export function Navbar() {
  const pathname = usePathname();
  const dict = useDictionary();
  const isZh = !!dict;
  const prefix = isZh ? '/zh' : '';

  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setIsResourcesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const resourcesLinks = isZh
    ? [
        { name: dict!.nav.blog, href: '/blog' },
        { name: dict!.nav.caseStudies, href: '/case-studies' },
        { type: 'divider' as const },
        { name: '对比工具', href: '/compare' },
        { type: 'divider' as const },
        { name: dict!.nav.app, href: 'https://app.getciteflow.ai', external: true },
      ]
    : enResourcesLinks;

  const navLinks = [
    { name: dict?.nav?.scan || 'Scan', href: prefix || '/' },
    { name: dict?.nav?.pricing || 'Pricing', href: `${prefix}/pricing` },
    { name: dict?.nav?.services || 'Services', href: `${prefix}/services/ai-visibility-growth` },
  ];

  const resourcesActive = resourcesLinks.some(
    (l) => 'href' in l && isResourceActive(pathname, l.href)
  );

  function switchLocale(target: string) {
    document.cookie = `NEXT_LOCALE=${target === '/zh' ? 'zh' : 'en'}; path=/; max-age=${60*60*24*365}`;
    const currentPath = pathname.replace(/^\/zh/, '') || '/';
    window.location.href = target === '/zh' ? `/zh${currentPath}` : currentPath;
  }

  return (
    <>
      <motion.header 
        initial={false}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 md:py-6 bg-background/5 backdrop-blur-md border-b border-white/5"
      >
        <Link href={prefix || '/'} className="flex items-center gap-2 group">
          <Image src="/logo.png" alt="GetCiteFlow" width={32} height={32} className="rounded-lg group-hover:scale-110 transition-transform" />
          <span className="text-xl font-bold tracking-tight">GetCiteFlow</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const strippedPath = pathname.replace(/^\/zh/, '') || '/';
            const linkStripped = link.href.replace(/^\/zh/, '') || '/';
            const isActive = strippedPath === linkStripped || (linkStripped !== '/' && strippedPath.startsWith(linkStripped + '/')) || (linkStripped !== '/' && strippedPath.startsWith(linkStripped));
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
          
          {/* Resources Dropdown */}
          <div ref={resourcesRef} className="relative">
            <button
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              className={cn(
                "flex items-center gap-1 transition-colors hover:text-white",
                resourcesActive ? "text-white" : "text-slate-400"
              )}
            >
              {dict?.nav?.resources || 'Resources'}
              <ChevronDown className={cn("w-4 h-4 transition-transform", isResourcesOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {isResourcesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full right-0 mt-2 w-64 bg-[#0A0F24] border border-white/10 rounded-xl p-2 shadow-xl"
                >
                  {resourcesLinks.map((link, i) => {
                    if (link.type === 'divider') {
                      return <div key={`div-${i}`} className="my-1 border-t border-white/5" />;
                    }
                    if (link.type === 'group') {
                      return (
                        <p key={link.name} className="px-4 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                          {link.name}
                        </p>
                      );
                    }
                    const resolvedHref = link.external ? link.href! : `${prefix}${link.href}`;
                    const active = 'href' in link && isResourceActive(pathname, link.href);
                    if (link.external) {
                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsResourcesOpen(false)}
                          className={cn(
                            "flex items-center justify-between px-4 py-2.5 rounded-lg hover:bg-white/5 transition-colors text-sm",
                            active ? "text-white" : "text-slate-300"
                          )}
                        >
                          {link.name}
                          <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                        </a>
                      );
                    }
                    return (
                      <Link
                        key={link.href}
                        href={prefix + link.href!}
                        onClick={() => setIsResourcesOpen(false)}
                        className={cn(
                          "flex items-center px-4 py-2.5 rounded-lg hover:bg-white/5 transition-colors text-sm",
                          active ? "text-white" : "text-slate-300"
                        )}
                      >
                        {link.indent && <span className="w-3 inline-block" />}
                        {link.name}
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
        
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <button
            onClick={() => switchLocale(isZh ? '/' : '/zh')}
            className="hidden md:flex h-10 px-4 border border-white/20 rounded-full items-center justify-center text-xs font-bold bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white transition-all cursor-pointer tracking-wide"
          >
            {isZh ? 'English' : '中文'}
          </button>

          <a 
            href="mailto:support@getciteflow.ai"
            className="hidden md:flex h-10 px-5 border border-primary/30 rounded-full items-center justify-center text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-all"
          >
            {dict?.nav?.talkToTeam || 'Talk to Our Team'}
          </a>
          
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
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 pb-12">
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
              
              <div>
                <p className="text-lg font-bold text-slate-400 mb-3">{dict?.nav?.resources || 'Resources'}</p>
                <div className="pl-4 flex flex-col gap-4">
                  {resourcesLinks.map((link, i) => {
                    if (link.type === 'divider') return <hr key={`div-${i}`} className="border-white/5 my-1" />;
                    if (link.type === 'group') return (
                      <p key={link.name} className="text-sm font-semibold uppercase tracking-wider text-slate-500 mt-1">
                        {link.name}
                      </p>
                    );
                    if (link.external) {
                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-2 text-lg text-slate-300 hover:text-white transition-colors"
                        >
                          {link.name}
                          <ExternalLink className="w-4 h-4 text-slate-500" />
                        </a>
                      );
                    }
                    return (
                      <Link
                        key={link.href}
                        href={prefix + link.href!}
                        onClick={() => setIsOpen(false)}
                        className="text-lg text-slate-300 transition-colors hover:text-white"
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Language Switcher */}
              <button
                onClick={() => switchLocale(isZh ? '/' : '/zh')}
                className="flex w-full h-14 border border-white/20 rounded-2xl items-center justify-center text-lg font-bold bg-white/5 text-slate-300 cursor-pointer"
              >
                {isZh ? 'Switch to English' : '切换到中文'}
              </button>
              
              <hr className="border-white/5 my-4" />
              <a 
                href="mailto:support@getciteflow.ai"
                onClick={() => setIsOpen(false)}
                className="flex w-full h-14 border border-primary/30 rounded-2xl items-center justify-center text-lg font-bold bg-primary/10 text-primary"
              >
                {dict?.nav?.talkToTeam || 'Talk to Our Team'}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
