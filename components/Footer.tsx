import Link from "next/link";
import Image from "next/image";
import { Mail, Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050816] py-20 px-6 relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 blur-[100px] -z-10 rounded-full" />
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="max-w-sm">
          <div className="flex items-center gap-2 mb-4">
            <Image src="/logo.png" alt="GetCiteFlow" width={24} height={24} className="rounded" />
            <span className="text-lg font-bold">GetCiteFlow</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            The enterprise AI brand service that gets your brand mentioned and recommended by ChatGPT, Claude, Gemini, Perplexity, DeepSeek, and Doubao.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-primary transition-colors">AI Visibility Scanner</Link></li>
              <li><Link href="/blog/geo-guide" className="hover:text-primary transition-colors">AI Visibility Guide</Link></li>
              <li><Link href="/services/ai-visibility-growth" className="hover:text-primary transition-colors">AI Visibility Growth</Link></li>
              <li><Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="/compare/ahrefs-vs-getciteflow" className="hover:text-primary transition-colors">Ahrefs vs GetCiteFlow</Link></li>
              <li><Link href="/compare/profound-vs-getciteflow" className="hover:text-primary transition-colors">Profound vs GetCiteFlow</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/blog/ai-visibility" className="hover:text-primary transition-colors">AI Visibility Guide</Link></li>
              <li><Link href="/blog/chatgpt-seo" className="hover:text-primary transition-colors">ChatGPT SEO</Link></li>
              <li><Link href="/why-chatgpt-doesnt-mention-your-site" className="hover:text-primary transition-colors">Why ChatGPT Ignores You</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Ecosystem</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="https://platform.openai.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">OpenAI Platform</Link></li>
              <li><Link href="https://ai.google" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Google AI</Link></li>
              <li><Link href="https://anthropic.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Anthropic</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Connect</h4>
            <div className="flex gap-4">
              <Link href="https://x.com/getciteflow" target="_blank" className="text-slate-400 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="https://github.com/yan253319066" target="_blank" className="text-slate-400 hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="https://t.me/OS_Blockchain" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 4L4 10l7 4 3 6 7-16z"/><path d="M11 14l7-8"/></svg>
              </Link>
              <Link href="mailto:support@getciteflow.ai" className="text-slate-400 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© 2026 GetCiteFlow AI. All rights reserved. <span className="text-slate-600">·</span> <span className="text-slate-500">AI visibility research by Aggarwal et al., KDD 2024</span></p>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-primary">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
