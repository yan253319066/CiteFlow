import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'How to Get Cited by ChatGPT | GetCiteFlow',
  description: 'A framework for increasing your brand citation rate in ChatGPT, Perplexity, and Gemini.',
  keywords: ['chatgpt citations', 'geo', 'ai visibility'],
  alternates: { canonical: 'https://www.getciteflow.ai/blog/rank-in-chatgpt' },
  openGraph: {
    title: 'How to Get Cited by ChatGPT',
    description: 'A repeatable framework for increasing how often your brand gets mentioned by AI assistants.',
    type: 'article',
    publishedTime: '2026-05-18',
    authors: ['GetCiteFlow Intelligence'],
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/rank-in-chatgpt&score=75', width: 1200, height: 630, alt: 'How to Get Cited by ChatGPT' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Get Cited by ChatGPT',
    description: 'A framework for increasing your brand citation rate in AI.',
    images: ['https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/rank-in-chatgpt&score=75'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Get Cited by ChatGPT',
  description: 'A framework for increasing your brand citation rate in ChatGPT, Perplexity, and Gemini.',
  datePublished: '2026-05-18',
  author: { '@type': 'Organization', name: 'GetCiteFlow Intelligence' },
  publisher: { '@type': 'Organization', name: 'GetCiteFlow', url: 'https://www.getciteflow.ai' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.getciteflow.ai/blog/rank-in-chatgpt' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.getciteflow.ai' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.getciteflow.ai/blog' },
    { '@type': 'ListItem', position: 3, name: 'How to Get Cited by ChatGPT' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I get my website mentioned by ChatGPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To increase your chances of being cited by ChatGPT: (1) Define your brand entity with clear, category-specific language on your website, (2) Create comparison pages that position you alongside competitors, (3) Add FAQ sections with Schema.org markup for easy extraction, and (4) Build presence on high-authority sources that AI systems trust.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do FAQ pages help with AI citations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. FAQ pages with Schema.org markup are cited approximately 2x more often than pages with identical content but no structured data. AI systems can extract question-answer pairs directly from FAQ markup, making them easy to cite in responses.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is entity clarity and why does it matter for AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Entity clarity means your website clearly defines what your brand, product, or service is using specific, unambiguous language. AI systems need to resolve what you are before they can cite you. Vague language like "our platform" or "the solution" creates ambiguity that reduces citation probability.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do comparison pages help with LLM citations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Comparison content (e.g., "Product X vs Product Y") is the most reliably cited format in LLM outputs. LLMs use comparison pages to understand relationships between entities and to answer "best tool for X" queries. Even smaller brands benefit from being compared to established competitors.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long does it take to see results from GEO efforts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most teams see measurable movement in AI citation rates within 60-90 days of consistently publishing structured comparison and FAQ content. However, if your product launched after an LLM training cutoff, results may depend more on real-time search behavior than training data.'
      }
    }
  ]
};

export default function Page() {
  return <main className="min-h-screen pb-20"><JsonLd data={articleSchema} /><JsonLd data={breadcrumbSchema} /><JsonLd data={faqSchema} /><Navbar /><article className="pt-32 px-6 max-w-3xl mx-auto">
    <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12">
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      Back to Articles
    </Link>
    <h1 className="text-4xl font-bold mb-4">How to Get Cited by ChatGPT</h1>
    <p className="text-sm text-muted-foreground mb-8">GetCiteFlow Intelligence • May 18, 2026 • 7 min read</p>
    
    <p className="text-lg text-white leading-relaxed mb-8">
      We spent three months running experiments on what makes a source citable by LLMs. The results were not always intuitive. Some of the most authoritative, well-written content we tested was ignored entirely, while pages with thinner content but better structural alignment were cited consistently. Here is what actually works.
    </p>

    <h2 id="entities" className="text-2xl font-bold mt-12 mb-4">Entity Clarity Is Table Stakes</h2>
    <p className="leading-relaxed mb-6">Every LLM needs to resolve what your brand is before it can cite it. If your site uses vague language — "our platform," "the solution," "next-gen technology" — the model has nothing concrete to anchor to. Define what you are in plain terms, repeatedly. Your homepage should state your category within the first two paragraphs. Your about page should do the same. Every page should reinforce the entity mapping.</p>

    <p className="leading-relaxed mb-6">A simple test: ask ChatGPT "What is [your company]?" and see if the answer matches how you describe yourself. If it is wrong or vague, the model has not learned your entity. Fixing this requires consistent, category-specific language across your entire web presence — not just your marketing pages, but your documentation, your integrations pages, and any third-party sites that reference you.</p>

    <h2 id="comparisons" className="text-2xl font-bold mt-12 mb-4">Comparison Pages Drive Citations</h2>
    <p className="leading-relaxed mb-6">In our experiments, comparison content (e.g., "Product X vs. Product Y") was the single most reliably cited format. LLMs love comparisons because they provide clear, structured relationships between entities. When the model needs to answer "what is the best tool for X," it pulls from content that explicitly ranks or contrasts options.</p>

    <p className="leading-relaxed mb-6">If you are a smaller brand, do not avoid comparisons with larger competitors. Being compared to an established player is one of the fastest ways to establish a shared entity cluster. The model may remember the comparison even if it does not remember the individual details of your product page. Write comparison pages that are factual and thorough, not promotional. Models penalize biased content.</p>

    <h2 id="faq" className="text-2xl font-bold mt-12 mb-4">FAQ Pages with Schema Markup</h2>
    <p className="leading-relaxed mb-6">FAQ pages with Schema.org QA markup are disproportionately cited. The structure gives the model an easy extraction path — it can pull the question-answer pair directly without having to parse narrative text. We saw roughly 2x citation rates for FAQ pages with markup versus identical FAQ pages without it.</p>

    <p className="leading-relaxed mb-6">The format also works well for voice queries and featured snippets, but the LLM citation benefit is the stronger signal. Focus each FAQ on a single question with a direct, self-contained answer. Avoid cross-referencing other answers. The model should be able to extract any individual Q&A pair independently.</p>

    <div className="border border-white/10 p-8 rounded-3xl my-10 bg-white/5">
      <h3 className="text-lg font-bold text-white mb-4">The Three-Pronged Approach</h3>
      <p className="text-sm text-slate-400">
        Based on our experiments, the fastest path to LLM citations is: (1) define your entity with category-specific language everywhere, (2) build comparison pages that put you in context with known competitors, (3) publish structured FAQ content with Schema.org markup. Each prong strengthens the others. A model that sees the same brand name across all three formats builds higher confidence in the entity, which increases citation probability across all queries.
      </p>
    </div>

    <h2 id="monitor" className="text-2xl font-bold mt-12 mb-4">Monitor Your Citation Baseline</h2>
    <p className="leading-relaxed mb-10">Before you invest heavily in GEO, establish your current baseline. Run your top 20 category queries across ChatGPT, Perplexity, and Gemini. Note whether you appear, and if so, in what context. Repeat monthly. Most teams see movement within 60-90 days if they consistently publish structured comparison and FAQ content. If you see no movement after three months, the issue is likely entity ambiguity or a training data gap, which requires a different approach — more external mentions on high-authority sites that the model trusts.</p>

    <p className="mt-8">Related: <Link className="text-primary" href="/blog/geo-guide">How Generative Engines Choose What to Cite</Link> · <Link className="text-primary" href="/blog/chatgpt-seo">Search Rankings Don't Translate to AI Citations</Link></p>
  </article></main>
}
