'use client';

import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Share2, Bookmark, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { JsonLd } from "@/components/JsonLd";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Search Rankings Don't Translate to AI Citations",
  description: "High Google rankings don't guarantee AI citations. We compared 50 B2B SaaS companies and found a weak correlation.",
  datePublished: "2026-05-10",
  author: { "@type": "Organization", name: "GetCiteFlow Intelligence" },
  publisher: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.getciteflow.ai/blog/chatgpt-seo" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getciteflow.ai" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.getciteflow.ai/blog" },
    { "@type": "ListItem", position: 3, name: "AI Citations" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      "name": "Do Google rankings affect ChatGPT citations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The correlation is weak — around 0.3 in our study of 50 B2B SaaS companies. A page can rank #1 on Google and never appear in a ChatGPT citation, while a page with no Google visibility can be cited consistently if it has strong entity clarity."
      }
    },
    {
      "@type": "Question",
      "name": "What is entity association in AI search?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entity association is the model's ability to place your brand in the correct semantic neighborhood. If you sell a project management tool, the model needs to see your brand name alongside other project management tools in comparisons, roundups, and category-defining content."
      }
    },
    {
      "@type": "Question",
      "name": "Why doesn't thought leadership content help with AI citations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generic thought leadership like '10 SaaS Trends' does not help the model place your brand in any category. Comparison content like 'Product A vs. Product B' creates the entity clusters that models use for citation."
      }
    },
    {
      "@type": "Question",
      "name": "How does a polysemous brand name affect AI visibility?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Brands with generic or multi-context names (like Apple, Buffer, Slack) face an invisible penalty. The model must disambiguate every time, and it often fails. Mitigate this by heavily over-indexing on category-specific language in every piece of content."
      }
    },
    {
      "@type": "Question",
      "name": "What is the fastest way to improve AI citations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Create comparison pages against established competitors. Being compared to known brands is the fastest way to establish a shared entity cluster. The model may remember the comparison even if it does not remember your individual product page."
      }
    }
  ]
};

export default function ChatGPTSEO() {
  return (
    <main className="min-h-screen pb-20">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <Navbar />
      <article className="pt-32 px-6 max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        <header className="mb-12">
          <Badge className="mb-6 bg-primary/10 text-primary border-none">Strategy</Badge>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-8"
          >
            Search Rankings Don't Translate<br />
            <span className="gradient-text">to AI Citations</span>
          </motion.h1>
          
          <div className="flex items-center justify-between border-y border-white/5 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#6E7BFF] to-[#8B5CF6]" />
              <div>
                <p className="text-sm font-bold">GetCiteFlow Intelligence</p>
                <p className="text-xs text-muted-foreground">May 10, 2026 • 6 min read</p>
              </div>
            </div>
          </div>
        </header>

        <div className="prose prose-invert prose-primary max-w-none text-slate-400">
          <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-3xl my-12">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Key Takeaways <span className="text-xs font-normal text-slate-500">— also see <Link href="/why-chatgpt-doesnt-mention-your-site" className="text-primary underline">Why ChatGPT ignores your site</Link></span>
            </h3>
            <ol className="text-sm text-slate-400 space-y-3 list-decimal list-inside">
              <li><strong className="text-white">Google rankings and AI citations correlate weakly (~0.3)</strong> — page-one rankings do not guarantee AI visibility.</li>
              <li><strong className="text-white">Entity association, not keyword optimization, drives AI citations</strong> — the model needs to place your brand in the right semantic neighborhood.</li>
              <li><strong className="text-white">Comparison content is the fastest path to citations</strong> — being mentioned alongside established competitors creates the entity cluster the model needs.</li>
              <li><strong className="text-white">Generic thought leadership does almost nothing for AI visibility</strong> — "10 SaaS Trends" does not help the model place your brand in any category.</li>
              <li><strong className="text-white">Brands with polysemous names pay an invisible penalty</strong> — the model must disambiguate every time, and it often fails with thin context.</li>
            </ol>
          </div>

          <p className="text-xl text-white mb-8 leading-relaxed">
            A few months ago we compared the Google search rankings of 50 B2B SaaS companies against how often ChatGPT mentioned them in response to product-related queries. The correlation was weak — around 0.3. Companies ranking on page one for competitive keywords were just as likely to be ignored by ChatGPT as companies that barely registered in Google.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white font-bold">Metric</th>
                  <th className="text-left py-3 px-4 text-white font-bold">SEO (Google)</th>
                  <th className="text-left py-3 px-4 text-white font-bold">AI Citations (ChatGPT)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Primary Signal</td>
                  <td className="py-3 px-4 text-slate-400">Backlinks, domain authority, user engagement</td>
                  <td className="py-3 px-4 text-slate-400">Entity recognition, training data prevalence</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Correlation with Our Study</td>
                  <td className="py-3 px-4 text-slate-400">Strong for Google ranking positions</td>
                  <td className="py-3 px-4 text-slate-400">Weak (~0.3) with Google rankings</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Impact of Vague Language</td>
                  <td className="py-3 px-4 text-slate-400">Moderate — can be offset by backlinks</td>
                  <td className="py-3 px-4 text-slate-400">Severe — model cannot resolve the entity</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Value of Comparisons</td>
                  <td className="py-3 px-4 text-slate-400">Low — low search volume for most "vs" queries</td>
                  <td className="py-3 px-4 text-slate-400">High — most reliably cited content format</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-white font-semibold">Impact of Polysemous Names</td>
                  <td className="py-3 px-4 text-slate-400">Low — Google uses context signals</td>
                  <td className="py-3 px-4 text-slate-400">High — model struggles with disambiguation</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Attribution Gap</h2>
          <p className="mb-6 leading-relaxed">
            This gap exists because the two systems operate on fundamentally different signals. Google ranks pages based on a graph of links and user behavior signals. ChatGPT (and other LLMs) decide whether to mention something based on entity recognition and training data prevalence. A brand can have excellent SEO and zero entity presence in the model's latent space.
          </p>
          <p className="mb-6 leading-relaxed">
            Consider a project management tool called "Flowmatic." Google might rank it well because it has solid backlinks and good on-page SEO. But if the model's training data mostly discusses Flowmatic in the context of "airflow software" or "workflow automation tools," the entity boundary is fuzzy. When someone asks for the "best project management tool for design teams," the model may not associate Flowmatic with that query at all — not because the tool is bad, but because the model never learned that specific mapping.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Entity Association, Not Keyword Optimization</h2>
          <p className="mb-6 leading-relaxed">
            The fix is not better keywords. It is entity association. You want the model to learn that your brand name sits in a specific semantic neighborhood. If you sell a project management tool, you need to be mentioned alongside other project management tools, in comparisons, in roundups, in definitional content about project management. Every co-occurrence strengthens the entity vector.
          </p>
          <p className="mb-6 leading-relaxed">
            This is why generic thought leadership content does almost nothing for AI visibility. Writing "10 Trends in SaaS for 2026" does not help the model place your brand in any category. Writing "Flowmatic vs. Asana vs. Monday" does. The model sees the comparison, maps all four entities into the same semantic cluster, and now has a stronger association between Flowmatic and "project management tool."
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">How to Build Entity Associations</h3>
          <ol className="list-decimal list-inside space-y-3 mb-6 text-slate-400">
            <li><strong className="text-white">Audit your current entity presence.</strong> Ask ChatGPT "What is [your brand]?" and "What are the best [your category] tools?" Record whether you appear and in what context.</li>
            <li><strong className="text-white">Create comparison pages against 2-3 established competitors.</strong> Use consistent comparison criteria and real data points. The shared entity cluster is more valuable than the comparison itself.</li>
            <li><strong className="text-white">Standardize your category language everywhere.</strong> Choose one category label and use it on your homepage, product pages, documentation, and third-party profiles. Inconsistency creates fuzzy entities.</li>
            <li><strong className="text-white">Get mentioned in category roundups.</strong> Reach out to industry analysts and review sites. A mention in "Best [Category] Tools of 2026" creates co-occurrence signals the model uses for entity resolution.</li>
            <li><strong className="text-white">Repeat the association across every channel.</strong> The more pages and sources that pair your brand name with your category, the stronger the entity vector becomes.</li>
          </ol>
          
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl my-10">
            <h3 className="text-lg font-bold text-white mb-4">A Practical Test</h3>
            <p className="text-sm">
              Ask ChatGPT about your product category without mentioning your brand. Does it mention you? If not, that is your baseline. The goal is not just to rank for the query, but to be part of the model's default answer set. Start by auditing your entity presence: search your brand name in the model and see what it associates with you. Then build content that strengthens those associations — comparisons, definitions, and structured data that explicitly describe what category your product belongs to.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Polysemy Is a Hidden Tax</h2>
          <p className="mb-6 leading-relaxed">
            Brands with generic or multi-context names pay an invisible penalty. If your brand shares a name with a common noun (think "Apple," "Buffer," "Slack"), the model has to disambiguate every time. It often fails, especially when the context is thin. This is not a problem you can solve with content alone — it is baked into the name — but you can mitigate it by heavily over-indexing on category-specific language. Every piece of content should repeatedly anchor your brand to its category until the model has no choice but to make the right association.
          </p>

          <div className="mt-8 p-8 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-3xl text-center">
            <h3 className="text-xl font-bold text-white mb-3">Find Out If AI Cites Your Brand</h3>
            <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">
              Get a free GEO report that shows exactly what AI systems find on your site — and what they miss. Start with a free scan of any URL.
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
