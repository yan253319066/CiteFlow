import { Navbar } from '@/components/Navbar';
import { Badge } from '@/components/ui/badge';
import { JsonLd } from '@/components/JsonLd';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why ChatGPT Doesn\'t Mention Your Site (And How to Fix It) | GetCiteFlow',
  description: 'Your site ranks on Google but ChatGPT ignores it. Here are the 5 reasons AI systems skip your content — and exactly what to do about each one.',
  keywords: ['ChatGPT not mentioning my site', 'why AI ignores my website', 'ChatGPT citations', 'GEO fix', 'get cited by ChatGPT', 'AI visibility problem'],
  alternates: { canonical: 'https://www.getciteflow.ai/why-chatgpt-doesnt-mention-your-site' },
  openGraph: {
    title: 'Why ChatGPT Doesn\'t Mention Your Site',
    description: '5 reasons AI systems skip your content — and how to fix each one.',
    images: [{ url: 'https://www.getciteflow.ai/api/og?domain=getciteflow.ai/why-chatgpt-doesnt-mention-your-site&score=75' }],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Why ChatGPT Doesn\'t Mention Your Site (And How to Fix It)',
  description: 'Five reasons AI systems ignore your content even if you rank well on Google, with actionable fixes for each.',
  datePublished: '2026-05-24',
  author: { '@type': 'Organization', name: 'GetCiteFlow Editorial' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why does ChatGPT ignore my site even though I rank on Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google rankings and AI citations use different signals. Google uses backlinks and domain authority. AI systems look for entity clarity, structured data, and training data prevalence. A page can rank #1 on Google and never appear in ChatGPT.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I get ChatGPT to mention my website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To get cited by ChatGPT: (1) Clearly define what your brand is using category-specific language, (2) Add FAQ Schema markup to your pages, (3) Create comparison pages against competitors, (4) Get mentioned on high-authority sources like Wikipedia, (5) Make sure your content is structured for machine extraction with tables and lists.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does Google ranking help with AI citations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The correlation is weak — roughly 0.3 in our study of 50 B2B companies. Strong SEO does not guarantee AI visibility. The two systems use fundamentally different signals to determine what to surface.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is entity clarity and why does it matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Entity clarity means your website explicitly states what category your brand belongs to. AI systems need to resolve what you are before they can cite you. Vague language like "our platform" or "the solution" creates ambiguity that reduces citation probability.'
      }
    },
    {
      '@type': 'Question',
      name: 'How fast can I fix my AI visibility?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most teams see measurable improvement within 60-90 days of publishing structured comparison and FAQ content. The fastest fix is adding FAQ Schema to existing pages — this can show results in weeks because it gives AI systems an immediate extraction path.'
      }
    }
  ]
};

export default function Page() {
  return (
    <main className="min-h-screen pb-20">
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <Navbar />
      <article className="pt-32 px-6 max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12">
          ← Back to Home
        </Link>

        <header className="mb-12">
          <Badge className="mb-6 bg-primary/10 text-primary border-none">GEO Guide</Badge>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Why ChatGPT Doesn&apos;t Mention Your Site
          </h1>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>GetCiteFlow Editorial</span>
            <span>•</span>
            <span>May 24, 2026</span>
            <span>•</span>
            <span>6 min read</span>
          </div>
        </header>

        <div className="prose prose-invert prose-primary max-w-none text-slate-400">
          <p className="text-xl text-white leading-relaxed mb-8">
            You check your Google rankings. Position one, position three, top of page one for most of your target keywords. Traffic is steady. Then you open ChatGPT and ask it to recommend tools in your category. Your brand is nowhere. Your competitors — the ones ranking below you on Google — are cited. This is not a bug. It is how AI citation works.
          </p>

          <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-3xl my-12">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Key Takeaways
            </h3>
            <ol className="text-sm text-slate-400 space-y-3 list-decimal list-inside">
              <li><strong className="text-white">Google rankings and AI citations are weakly correlated</strong> — being #1 on Google does not mean ChatGPT will mention you.</li>
              <li><strong className="text-white">Entity clarity is the most common gap</strong> — if your site never says &quot;we are a [category] tool,&quot; the model cannot place you.</li>
              <li><strong className="text-white">Missing FAQ Schema is a quick fix</strong> — adding structured Q&A markup gives AI systems an easy extraction path.</li>
              <li><strong className="text-white">Comparison pages are the most cited format</strong> — being compared to competitors creates the entity clusters models rely on.</li>
              <li><strong className="text-white">Training data matters more than content freshness</strong> — older brands in the model&apos;s training data have a structural advantage.</li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Reason 1: Your Entity Is Invisible to the Model</h2>
          <p className="leading-relaxed mb-6">
            The most common reason ChatGPT ignores your site is the simplest: the model cannot figure out what you are. If your homepage leads with &quot;we empower teams&quot; or &quot;next-gen platform&quot; instead of &quot;we are a project management tool for remote teams,&quot; the model has nothing to anchor your brand to. Vague language is the #1 entity clarity killer.
          </p>
          <p className="leading-relaxed mb-6">
            The fix is straightforward. State your category explicitly within the first two paragraphs of your homepage. Use the same category language on your product page, your about page, and your documentation. The model needs to see the same label repeated consistently across your web presence before it confidently associates your brand with that category.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Reason 2: No Structured Data for AI to Extract</h2>
          <p className="leading-relaxed mb-6">
            AI systems prefer content they can parse without reading narrative prose. FAQ pages with Schema.org markup, comparison tables, and definition lists provide extraction points. A page with excellent writing but no structure is harder for the model to cite than a mediocre page with FAQ Schema and comparison tables.
          </p>
          <p className="leading-relaxed mb-6">
            In our experiments, FAQ pages with Schema markup were cited roughly 2x more often than identical FAQ pages without it. The structure itself is a signal. It tells the model &quot;this content is designed to be extracted.&quot; Adding FAQ Schema to your existing pages is the single highest-ROI change most sites can make.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Reason 3: No Comparison Content</h2>
          <p className="leading-relaxed mb-6">
            Comparison content — &quot;Product X vs Product Y&quot; — is the most reliably cited format in AI outputs. LLMs use comparisons to understand how entities relate to each other. When a model needs to answer &quot;what is the best tool for X,&quot; it pulls from content that explicitly ranks or contrasts options.
          </p>
          <p className="leading-relaxed mb-6">
            If you have no comparison pages, you are missing the single biggest driver of AI citations. Create comparison pages against your top 2-3 competitors. Use consistent row labels across all comparisons. Include real data points, not just feature lists. The model should be able to extract and repeat the comparison programmatically.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Reason 4: Weak External Consensus</h2>
          <p className="leading-relaxed mb-6">
            LLMs measure authority through consistency across sources. A brand that appears on Wikipedia, in industry reports, and across review sites carries more weight than a brand with excellent SEO but no external presence. The model sees information that appears across multiple trusted sources as more reliable.
          </p>
          <p className="leading-relaxed mb-6">
            This is not about backlinks. It is about co-occurrence. Being mentioned on Wikipedia matters more for AI visibility than having a hundred niche blogs link to you. Focus on getting into sources the model already trusts — Wikipedia, G2, Capterra, industry publications. Each mention reinforces the entity association.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Reason 5: Your Brand Is Post-Training-Cutoff</h2>
          <p className="leading-relaxed mb-6">
            If your product launched after 2024, ChatGPT has zero parametric knowledge of it. Every citation must come through real-time retrieval. This is both a disadvantage and an opportunity. You cannot rely on the model remembering your brand, but you also do not compete against older brands embedded in the training data.
          </p>
          <p className="leading-relaxed mb-6">
            The fix is aggressive content structuring. Since the model must retrieve everything about you in real time, every page needs to be optimized for RAG pipelines. Clear entity language, FAQ Schema, comparison tables, and machine-readable files (llms.txt, pricing.md) become even more critical for post-cutoff brands.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white font-bold">Reason</th>
                  <th className="text-left py-3 px-4 text-white font-bold">Impact</th>
                  <th className="text-left py-3 px-4 text-white font-bold">Fix</th>
                  <th className="text-left py-3 px-4 text-white font-bold">Timeline</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Invisible entity</td>
                  <td className="py-3 px-4 text-slate-400">High — model cannot resolve your brand</td>
                  <td className="py-3 px-4 text-slate-400">Add explicit category language to homepage and product pages</td>
                  <td className="py-3 px-4 text-slate-400">2-4 weeks</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">No structured data</td>
                  <td className="py-3 px-4 text-slate-400">High — no extraction path for AI</td>
                  <td className="py-3 px-4 text-slate-400">Add FAQ Schema markup to existing pages</td>
                  <td className="py-3 px-4 text-slate-400">1-2 weeks</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">No comparisons</td>
                  <td className="py-3 px-4 text-slate-400">Very high — most cited format</td>
                  <td className="py-3 px-4 text-slate-400">Create 2-3 comparison pages with structured data</td>
                  <td className="py-3 px-4 text-slate-400">4-8 weeks</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Weak consensus</td>
                  <td className="py-3 px-4 text-slate-400">Medium — amplifies other signals</td>
                  <td className="py-3 px-4 text-slate-400">Get listed on Wikipedia, G2, industry publications</td>
                  <td className="py-3 px-4 text-slate-400">8-16 weeks</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-white font-semibold">Post-cutoff brand</td>
                  <td className="py-3 px-4 text-slate-400">Structural — requires RAG-only strategy</td>
                  <td className="py-3 px-4 text-slate-400">Optimize every page for RAG: structured data, llms.txt, pricing.md</td>
                  <td className="py-3 px-4 text-slate-400">2-6 weeks</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">How to Check If Your Site Is Visible to AI</h2>
          <p className="leading-relaxed mb-6">
            The only way to know your current AI visibility is to get a proper GEO analysis. Manual testing — asking ChatGPT about your brand — is useful but incomplete. It only tells you about one model at one moment. A comprehensive audit checks your site against the full set of signals AI systems evaluate.
          </p>

          <ol className="list-decimal list-inside space-y-4 mb-6">
            <li><strong className="text-white">Test entity clarity.</strong> Ask ChatGPT &quot;What is [your brand]?&quot; If the answer is wrong or vague, start with Reason 1 above.</li>
            <li><strong className="text-white">Check for FAQ Schema.</strong> Use Google&apos;s Rich Results Test to see if your pages have structured data AI can extract.</li>
            <li><strong className="text-white">Audit your comparison content.</strong> Do you have &quot;vs&quot; pages against your main competitors? If not, you are missing the most cited format.</li>
            <li><strong className="text-white">Scan your site with GetCiteFlow.</strong> Get a full AI Visibility Score with breakdown analysis and prioritized fix recommendations.</li>
          </ol>

          <div className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-3xl text-center">
            <h3 className="text-xl font-bold text-white mb-3">Scan Your Site for Free</h3>
            <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">
              GetCiteFlow checks your homepage and landing pages for the signals AI systems use to determine citations. See your score, diagnose issues, and get a fix package you can deploy.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6E7BFF] to-[#8B5CF6] px-8 py-3 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity">
              Get Your Free GEO Report <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
