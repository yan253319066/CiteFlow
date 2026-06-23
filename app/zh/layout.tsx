import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { LocaleProvider } from '@/i18n/useDictionary';
import "./../globals.css";

export const metadata: Metadata = {
  title: "GetCiteFlow 中文 | 让品牌被 AI 推荐的权威服务",
  description: "企业级 AI 品牌服务。免费检测您的品牌在 ChatGPT、Claude、DeepSeek、豆包等 AI 中的可见度。",
  alternates: {
    canonical: 'https://www.getciteflow.ai/zh',
    languages: {
      en: 'https://www.getciteflow.ai/',
      zh: 'https://www.getciteflow.ai/zh',
      'x-default': 'https://www.getciteflow.ai/',
    },
  },
  openGraph: {
    title: "GetCiteFlow 中文 — AI 品牌可见性服务",
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai&score=75&locale=zh', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GetCiteFlow 中文 — AI 品牌可见性服务',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org', '@type': 'Organization',
  name: 'GetCiteFlow', alternateName: ['GetCiteFlow'],
  description: 'GetCiteFlow 是一家企业级 AI 品牌可见性服务商，帮助品牌在 ChatGPT、Claude、DeepSeek 等 AI 中获得推荐。',
  url: 'https://www.getciteflow.ai/zh',
};

export default function ZhLayout({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider locale="zh">
      <JsonLd data={organizationSchema} />
      {children}
    </LocaleProvider>
  );
}
