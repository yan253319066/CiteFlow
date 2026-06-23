import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notion GEO 策略：主导 AI 生产力推荐 | GetCiteFlow',
  description: '两个月分析揭示为何 Notion 在 92% 的 AI 生成生产力推荐中出现——以及每家 SaaS 公司可以学到什么。',
  alternates: { canonical: 'https://www.getciteflow.ai/zh/case-studies/notion-strategy', languages: { zh: 'https://www.getciteflow.ai/zh/case-studies/notion-strategy', en: 'https://www.getciteflow.ai/case-studies/notion-strategy', 'x-default': 'https://www.getciteflow.ai/case-studies/notion-strategy' } },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
