'use client';

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ScoreCards } from "@/components/ScoreCards";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { EnterpriseSection } from "@/components/EnterpriseSection";

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'GetCiteFlow AI 可见度检测',
  description: '企业级 AI 品牌服务，让您的品牌被 ChatGPT、Claude、Perplexity、Gemini、DeepSeek、豆包、通义千问等 AI 主动推荐。',
  url: 'https://www.getciteflow.ai/zh',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

export default function ZhHomePage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <Hero />
      <ScoreCards />
      <EnterpriseSection />
      <HowItWorks />
      <Features />
    </main>
  );
}
