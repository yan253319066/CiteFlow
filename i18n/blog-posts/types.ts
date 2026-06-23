/* ================================================================
   中文博客文章类型定义
   被 i18n/blog-posts/*.ts 和 app/zh/blog/[slug]/page.tsx 共享
   ================================================================ */

export interface ContentBlock {
  type: 'lead' | 'h2' | 'h3' | 'p' | 'key-takeaways' | 'ol' | 'cta';
  text?: string;
  items?: string[];
  strong?: string;
}

export interface BlogPost {
  title: string;
  description: string;
  date: string;
  category: string;
  blocks: ContentBlock[];
}
