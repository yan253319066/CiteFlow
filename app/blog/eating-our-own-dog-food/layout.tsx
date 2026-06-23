import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.getciteflow.ai/blog/eating-our-own-dog-food',
    languages: { zh: 'https://www.getciteflow.ai/zh/blog/eating-our-own-dog-food' },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
