import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'How to Rank in ChatGPT | CiteFlow',
  description: 'A practical GEO framework to increase your chances of being cited by ChatGPT.',
  keywords: ['how to rank in chatgpt', 'geo', 'ai visibility'],
  alternates: { canonical: 'https://citeflow.ai/blog/rank-in-chatgpt' },
};

export default function Page() {
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    { '@type': 'Question', name: 'Can ChatGPT rankings be optimized?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Structure content around entities, comparisons, and FAQs.' } },
    { '@type': 'Question', name: 'What is the fastest GEO win?', acceptedAnswer: { '@type': 'Answer', text: 'Publish clear FAQ and comparison pages with semantic headings.' } }
  ] };
  return <main className="min-h-screen pb-20"><Script id="faq" type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faq)}}/><Navbar /><article className="pt-32 px-6 max-w-3xl mx-auto"><h1 className="text-4xl font-bold mb-4">How to Rank in ChatGPT</h1><nav className="text-sm mb-8"><p className="font-semibold mb-2">Table of contents</p><ul className="list-disc ml-5"><li><a href="#entities">Entity clarity</a></li><li><a href="#comparisons">Comparison pages</a></li><li><a href="#faq">FAQ blocks</a></li></ul></nav><h2 id="entities" className="text-2xl font-bold mt-8">Entity clarity</h2><p>Use one clear category and definitions for your product.</p><h2 id="comparisons" className="text-2xl font-bold mt-8">Comparison pages</h2><p>Build pages like ahrefs-vs-citeflow to capture decision queries.</p><h2 id="faq" className="text-2xl font-bold mt-8">FAQ blocks</h2><p>Add question-answer blocks to help AI extraction.</p><p className="mt-8">Related: <Link className="text-primary" href="/blog/geo-guide">GEO Guide</Link> · <Link className="text-primary" href="/blog/chatgpt-seo">ChatGPT SEO</Link></p></article></main>
}
