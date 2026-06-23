import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { zhPosts } from "@/i18n/blog-posts";
import type { ContentBlock } from "@/i18n/blog-posts/types";

/* ================================================================
   内容块渲染器 — 服务端组件
   ================================================================ */

function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  if (!blocks || blocks.length === 0) {
    return <p className="text-lg text-slate-300 leading-relaxed">这篇博客文章正在完善中。请查看英文原版。</p>;
  }

  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'lead':
            return <p key={i} className="text-xl text-white leading-relaxed mb-8">{block.text}</p>;
          case 'h2':
            return <h2 key={i} className="text-2xl font-bold text-white mt-12 mb-4">{block.text}</h2>;
          case 'h3':
            return <h3 key={i} className="text-xl font-semibold text-white mt-8 mb-3">{block.text}</h3>;
          case 'p':
            return <p key={i} className="leading-relaxed mb-6 text-slate-300">{block.text}</p>;
          case 'key-takeaways':
            return (
              <div key={i} className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-3xl my-12">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {block.strong || '核心要点'}
                </h3>
                <ol className="text-sm text-slate-400 space-y-3 list-decimal list-inside">
                  {block.items?.map((item, j) => <li key={j}>{item}</li>)}
                </ol>
              </div>
            );
          case 'ol':
            return (
              <ol key={i} className="list-decimal list-inside space-y-3 mb-6 text-slate-300">
                {block.items?.map((item, j) => (
                  <li key={j}>
                    <strong className="text-white">{item.split('：')[0]}：</strong>
                    {item.includes('：') ? item.substring(item.indexOf('：') + 1) : item}
                  </li>
                ))}
              </ol>
            );
          case 'cta':
            return (
              <div key={i} className="mt-8 p-8 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-3xl text-center">
                <h3 className="text-xl font-bold text-white mb-3">检测你的 AI 可见度</h3>
                <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">{block.text}</p>
                <Link href="/zh" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6E7BFF] to-[#8B5CF6] px-8 py-3 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity">
                  免费获取 AI 可见度检测 <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
}

/* ================================================================
   Metadata 生成 & 页面组件
   ================================================================ */

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = zhPosts[slug];

  if (!post) {
    return {
      title: '博客 | GetCiteFlow 中文',
      description: 'GetCiteFlow 中文博客 — AI 品牌可见度、GEO 策略与 AI 搜索优化深度文章。',
      alternates: {
        canonical: `https://www.getciteflow.ai/zh/blog/${slug}`,
        languages: { zh: `https://www.getciteflow.ai/zh/blog/${slug}`, en: `https://www.getciteflow.ai/blog/${slug}`, 'x-default': `https://www.getciteflow.ai/blog/${slug}` },
      },
    };
  }

  return {
    title: `${post.title} | GetCiteFlow 中文`,
    description: post.description,
    keywords: ['AI可见度', 'GEO', '生成式引擎优化', 'AI引用', 'ChatGPT引用', '品牌AI可见度'],
    alternates: {
      canonical: `https://www.getciteflow.ai/zh/blog/${slug}`,
      languages: { zh: `https://www.getciteflow.ai/zh/blog/${slug}`, en: `https://www.getciteflow.ai/blog/${slug}`, 'x-default': `https://www.getciteflow.ai/blog/${slug}` },
    },
    openGraph: {
      title: `${post.title} | GetCiteFlow 中文`,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Neil Yan'],
      images: [{ url: `https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/${slug}&score=75&locale=zh`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | GetCiteFlow 中文`,
      description: post.description,
      images: [`https://www.getciteflow.ai/api/og?domain=getciteflow.ai/blog/${slug}&score=75&locale=zh`],
    },
  };
}

export default async function ZhBlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = zhPosts[slug];

  return (
    <main className="min-h-screen pb-20">
      <Navbar />
      <article className="pt-32 px-6 max-w-3xl mx-auto">
        <Link href="/zh/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> 返回博客列表
        </Link>

        {!post ? (
          <>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">文章未找到</h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-slate-300 leading-relaxed">
                该文章尚未翻译为中文。请查看{' '}
                <Link href={`/blog/${slug}`} className="text-primary hover:underline">英文原版</Link>。
              </p>
            </div>
          </>
        ) : (
          <>
            <header className="mb-12">
              <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-6">{post.category}</span>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{post.title}</h1>
              <p className="text-sm text-muted-foreground">Neil Yan · {post.date} · 约 {Math.ceil(post.description.length / 150)} 分钟阅读</p>
            </header>
            <div className="prose prose-invert max-w-none text-slate-400">
              <ContentRenderer blocks={post.blocks} />
            </div>
          </>
        )}
      </article>
    </main>
  );
}
