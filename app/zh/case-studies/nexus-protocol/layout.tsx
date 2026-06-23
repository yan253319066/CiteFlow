import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nexus Protocol 案例：3 周内 AI 引用提升 140% | GetCiteFlow',
  description: '一个在 ChatGPT 中完全不可见的 DeFi 协议，尽管 SEO 表现良好。修复方案比想象中更简单。',
  alternates: { canonical: 'https://www.getciteflow.ai/zh/case-studies/nexus-protocol', languages: { zh: 'https://www.getciteflow.ai/zh/case-studies/nexus-protocol', en: 'https://www.getciteflow.ai/case-studies/nexus-protocol', 'x-default': 'https://www.getciteflow.ai/case-studies/nexus-protocol' } },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
