'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail, Twitter, Github } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const pathname = usePathname();
  const isZh = pathname.startsWith('/zh');
  const prefix = isZh ? '/zh' : '';
  const [copied, setCopied] = useState(false);

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
            {isZh
              ? '企业级 AI 品牌服务，让您的品牌被 ChatGPT、Claude、Perplexity、Gemini、DeepSeek、豆包、通义千问等 AI 主动推荐。'
              : 'The enterprise AI brand service that gets your brand mentioned and recommended by ChatGPT, Claude, Perplexity, Gemini, DeepSeek, Doubao, and Qwen.'}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">{isZh ? '产品' : 'Product'}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href={prefix || '/'} className="hover:text-primary transition-colors">{isZh ? 'AI 可见度检测' : 'AI Visibility Scanner'}</Link></li>
              <li><Link href={`${prefix}/blog/geo-guide`} className="hover:text-primary transition-colors">{isZh ? 'AI 可见度指南' : 'AI Visibility Guide'}</Link></li>
              <li><Link href={`${prefix}/services/ai-visibility-growth`} className="hover:text-primary transition-colors">{isZh ? 'AI 可见度增长服务' : 'AI Visibility Growth'}</Link></li>
              <li><Link href={`${prefix}/case-studies`} className="hover:text-primary transition-colors">{isZh ? '案例研究' : 'Case Studies'}</Link></li>
              <li><Link href={`${prefix}/compare/ahrefs-vs-getciteflow`} className="hover:text-primary transition-colors">Ahrefs vs GetCiteFlow</Link></li>
              <li><Link href={`${prefix}/compare/profound-vs-getciteflow`} className="hover:text-primary transition-colors">Profound vs GetCiteFlow</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">{isZh ? '资源' : 'Resources'}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href={`${prefix}/blog`} className="hover:text-primary transition-colors">{isZh ? '博客' : 'Blog'}</Link></li>
              <li><Link href={`${prefix}/blog/ai-visibility`} className="hover:text-primary transition-colors">{isZh ? 'AI 可见度指南' : 'AI Visibility Guide'}</Link></li>
              <li><Link href={`${prefix}/blog/chatgpt-seo`} className="hover:text-primary transition-colors">ChatGPT SEO</Link></li>
              <li><Link href={`${prefix}/why-chatgpt-doesnt-mention-your-site`} className="hover:text-primary transition-colors">{isZh ? '为什么 ChatGPT 忽略你的品牌' : 'Why ChatGPT Ignores You'}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">{isZh ? '生态' : 'Ecosystem'}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="https://platform.openai.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">OpenAI Platform</Link></li>
              <li><Link href="https://ai.google" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Google AI</Link></li>
              <li><Link href="https://anthropic.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Anthropic</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">{isZh ? '联系' : 'Connect'}</h4>
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
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText('wangwei830328');
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="text-slate-400 hover:text-primary transition-colors cursor-pointer relative"
                aria-label={isZh ? '微信: wangwei830328，点击复制' : 'WeChat: wangwei830328, click to copy'}
              >
                <svg className="w-5 h-5" viewBox="0 0 1024 1024" fill="currentColor">
                  <path d="M290.048 294.592c0-13.632-4.16-24.64-12.48-33.024-8.32-8.384-19.328-12.544-33.024-12.48-14.336 0-27.008 4.224-38.016 12.736C195.584 270.336 190.08 281.216 190.08 294.592c0 12.992 5.504 23.744 16.512 32.256C217.6 335.36 230.272 339.584 244.608 339.584c13.632 0 24.64-4.096 33.024-12.224C285.952 319.232 290.112 308.288 290.048 294.592zM661.568 548.032c0-9.344-4.224-17.664-12.736-25.024-8.512-7.36-19.392-11.008-32.768-11.008-9.024 0-17.28 3.776-24.768 11.264C583.808 530.816 580.032 539.072 580.032 548.032c0 9.344 3.776 17.792 11.264 25.28 7.488 7.488 15.744 11.264 24.768 11.264 13.312 0 24.256-3.648 32.768-11.008zM543.552 294.592c0-13.632-4.096-24.64-12.224-33.024C523.2 253.184 512.256 249.024 498.56 249.088c-14.336 0-27.008 4.224-38.016 12.736C449.536 270.336 444.032 281.216 444.032 294.592c0 12.992 5.504 23.744 16.512 32.256C471.552 335.36 484.224 339.584 498.56 339.584c13.632 0 24.576-4.096 32.768-12.224S543.616 308.288 543.552 294.592zM860.992 548.032c0-9.344-4.352-17.664-12.992-25.024-8.64-7.36-19.52-11.008-32.512-11.008-9.024 0-17.28 3.776-24.768 11.264-7.488 7.488-11.264 15.744-11.264 24.768 0 9.344 3.776 17.792 11.264 25.28 7.488 7.488 15.744 11.264 24.768 11.264 12.992 0 23.872-3.648 32.512-11.008zM728.064 349.568c-10.304-1.344-22.016-1.984-35.008-1.984-56.32 0-108.16 12.864-155.52 38.528-47.36 25.664-84.608 60.416-111.744 104.256C398.656 534.144 385.088 582.08 385.024 634.048c0 25.984 3.84 51.328 11.52 75.968-11.648 0.96-22.976 1.472-33.984 1.472-8.64 0-17.024-0.256-25.024-0.768-8-0.512-17.216-1.6-27.52-3.264-10.304-1.664-17.728-2.816-22.272-3.52-4.544-0.704-13.632-2.432-27.264-5.248-13.632-2.816-22.016-4.544-25.024-5.248l-126.528 63.488 36.032-108.992C48.32 580.288 0 498.624 0 403.008c0-56.32 16.256-108.16 48.768-155.52 32.512-47.36 76.48-84.608 131.968-111.744 55.488-27.136 116.032-40.704 181.76-40.768C421.12 94.976 476.544 105.984 528.704 128c52.16 22.016 95.808 52.416 131.008 91.264 35.136 38.848 57.92 82.24 68.224 130.24zM1024 630.016c0 38.976-11.392 76.224-34.24 111.744-22.848 35.52-53.76 67.776-92.736 96.768l27.52 90.496-99.52-54.528c-49.984 12.352-86.336 18.496-108.992 18.496-56.32 0-108.16-11.776-155.52-35.264-47.36-23.488-84.608-55.424-111.744-95.744s-40.704-84.288-40.768-131.968C408.064 582.4 421.632 538.368 448.832 498.112c27.2-40.32 64.448-72.256 111.744-95.744 47.296-23.488 99.072-35.264 155.52-35.264 53.696 0 104.128 11.776 151.488 35.264 47.296 23.488 85.248 55.488 113.728 96C1009.728 538.816 1024 582.72 1024 630.08z"/>
                </svg>
                {copied && (
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-0.5 rounded whitespace-nowrap">
                    {isZh ? '已复制' : 'Copied!'}
                  </span>
                )}
              </button>
              <Link href="mailto:support@getciteflow.ai" className="text-slate-400 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>{isZh ? '© 2026 GetCiteFlow AI。保留所有权利。' : '© 2026 GetCiteFlow AI. All rights reserved.'} <span className="text-slate-600">·</span> <span className="text-slate-500">{isZh ? 'AI 可见性研究：Aggarwal et al., KDD 2024' : 'AI visibility research by Aggarwal et al., KDD 2024'}</span></p>
        <div className="flex gap-6">
          <Link href={`${prefix}/privacy-policy`} className="hover:text-primary">{isZh ? '隐私政策' : 'Privacy Policy'}</Link>
          <Link href={`${prefix}/terms-of-service`} className="hover:text-primary">{isZh ? '服务条款' : 'Terms of Service'}</Link>
        </div>
      </div>
    </footer>
  );
}
