'use client';

import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { JsonLd } from "@/components/JsonLd";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Visibility for E-Commerce Brands",
  description: "Product schema markup is the highest-impact signal for e-commerce AI citations. Review schema, category hierarchies, and inventory data for LLM purchase recommendations.",
  datePublished: "2026-06-22",
  dateModified: "2026-06-22",
  author: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  publisher: { "@type": "Organization", name: "GetCiteFlow", url: "https://www.getciteflow.ai" },
  image: "https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/ai-visibility-ecommerce&score=75",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.getciteflow.ai/blog/ai-visibility-ecommerce" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getciteflow.ai" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.getciteflow.ai/blog" },
    { "@type": "ListItem", position: 3, name: "AI Visibility Ecommerce", item: "https://www.getciteflow.ai/blog/ai-visibility-ecommerce" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the most important signal for e-commerce AI citations?",
      acceptedAnswer: { "@type": "Answer", text: "Complete Product schema with all eight fields (name, description, price, priceCurrency, availability, brand, SKU, image, aggregateRating). Products with complete schema are cited 4x more than products with only name and price." }
    },
    {
      "@type": "Question",
      name: "How do reviews affect LLM purchase recommendations?",
      acceptedAnswer: { "@type": "Answer", text: "Products with aggregateRating schema data are cited 3x more in recommendation queries. A product with '4.5 stars, 1,200+ reviews' provides a verifiable quality signal that models cite directly." }
    },
    {
      "@type": "Question",
      name: "Why is category structure important for AI citations?",
      acceptedAnswer: { "@type": "Answer", text: "BreadcrumbList schema with a clear category hierarchy (Category > Subcategory > Product) enables models to resolve the product's position in the entity hierarchy. Without it, the model must infer the product category from context." }
    },
    {
      "@type": "Question",
      name: "How should e-commerce brands prepare for AI agents?",
      acceptedAnswer: { "@type": "Answer", text: "Add Offers schema with availability dates, shipping details, and return policies. As AI agents begin executing purchase workflows, products with complete transaction data will be preferred over those without." }
    }
  ]
};

export default function AiVisibilityEcommerce() {
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
          <Badge className="mb-6 bg-primary/10 text-primary border-none">Industry Guide</Badge>
          <motion.h1 initial={false} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            AI Visibility for <span className="gradient-text">E-Commerce Brands</span>
          </motion.h1>
          <div className="flex items-center justify-between border-y border-white/5 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#6E7BFF] to-[#8B5CF6]" />
              <div><p className="text-sm font-bold">GetCiteFlow</p><p className="text-xs text-muted-foreground">June 22, 2026 • 4 min read</p></div>
            </div>
          </div>
        </header>

        <div className="prose prose-invert prose-primary max-w-none text-slate-400">
          <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-3xl my-12">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Key Takeaways
            </h3>
            <ol className="text-sm text-slate-400 space-y-3 list-decimal list-inside">
              <li><strong className="text-white">Complete Product schema drives 4x more citations</strong> — products with all 8 schema fields cited far more than basic schema.</li>
              <li><strong className="text-white">Review and rating schema influence purchase recommendations 3x</strong> — aggregateRating is a verifiable quality signal.</li>
              <li><strong className="text-white">BreadcrumbList schema builds the entity hierarchy</strong> — models need to understand product category relationships.</li>
              <li><strong className="text-white">Inventory data is the next frontier</strong> — as AI agents execute purchases, schema-marked availability and shipping data determine product selection.</li>
            </ol>
          </div>

          <p className="text-xl text-white leading-relaxed mb-8">
            E-commerce presents different AI visibility challenges than B2B SaaS. Thousands of products, each needing entity resolution. Product schema is the foundation.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Product Schema as the Foundation</h2>
          <p className="mb-6 leading-relaxed">
            Complete Product schema should include: name, description, price, priceCurrency, availability (InStock, OutOfStock, PreOrder), brand (with Organization schema), SKU or MPN, image, and aggregateRating with review count. Products with all fields are cited 4x more.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Review Schema and Recommendation Queries</h2>
          <p className="mb-6 leading-relaxed">
            Products with <code className="text-primary">aggregateRating</code> data are cited 3x more in recommendation queries. A verifiable quality signal — "4.5 stars, 1,200+ reviews" — is directly citable. Models prefer products with clear rating data over those without.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Category Structure and Entity Hierarchy</h2>
          <p className="mb-6 leading-relaxed">
            BreadcrumbList schema with a clear hierarchy (Category {">"} Subcategory {">"} Product) tells the model where each product sits in the entity graph. Without it, the model infers categories from context — introducing error.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Inventory and Agent Readiness</h2>
          <p className="mb-6 leading-relaxed">
            As AI agents begin executing purchase workflows (Article 10), inventory and shipping data become critical. Products with <code className="text-primary">Offers</code> schema, availability dates, and shipping details will be preferred. Adding this data now positions your products for the agent economy.
          </p>

          <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-3xl text-center">
            <h3 className="text-xl font-bold text-white mb-3">Check Your Product Schema</h3>
            <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">
              GetCiteFlow scans your product pages for schema completeness, review data, and agent-readiness signals.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6E7BFF] to-[#8B5CF6] px-8 py-3 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity">
              Get Your Free AI Visibility Scan <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
