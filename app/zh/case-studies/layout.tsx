import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GEO 案例研究 | GetCiteFlow 中文',
  description: '真实的企业级 AI 可见度优化案例。看看各公司如何使用 GEO 策略提升 AI 引用率。',
  alternates: { canonical: 'https://www.getciteflow.ai/zh/case-studies', languages: { zh: 'https://www.getciteflow.ai/zh/case-studies', en: 'https://www.getciteflow.ai/case-studies', 'x-default': 'https://www.getciteflow.ai/case-studies' } },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
