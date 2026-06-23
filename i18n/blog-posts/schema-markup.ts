import type { BlogPost } from './types';

export const schemaMarkup: BlogPost = {
  title: '直接提升 AI 引用率的 Schema 标记指南',
  description: 'FAQ、Organization 和 Product Schema 带来 2 到 3 倍引用提升。按优先级排序的 Schema 类型实施指南，直接关联 LLM 引用频率。',
  date: '2026年6月22日',
  category: '指南',
  blocks: [
    {
      type: 'lead',
      text: 'Schema 标记处于一个独特的位置——它同时触及 RAG 流水线的向量检索和重新排序阶段、跨来源实体消歧、以及 SEO 与 GEO 之间的结构性差异。传统 SEO 使用 Schema 来争取富文本摘要，获取更高的点击率。GEO 使用 Schema 来实现更根本的目标：让模型能够正确解析你的实体身份、自信地提取结构化信息、以及通过 sameAs 跨来源链接建立一致性。相同的标记，完全不同的意图。',
    },
    {
      type: 'key-takeaways',
      strong: '核心要点',
      items: [
        'Schema 类型对 AI 引用的影响差异显著：Organization Schema 带来 3 到 4 倍实体分类准确度提升，FAQ Schema 带来约 2 倍引用频率提升，而 Review 和 Recipe Schema 的效果微乎其微。',
        'sameAs 是 Organization Schema 中最关键的字段——它是模型跨来源实体消歧的主要机制，直接关联引用置信度。',
        'FAQ Schema 的最佳实践是 5 到 10 个问题，每个回答 30 到 60 词的自包含答案——这个窗口在 RAG 分块中最容易被完整提取。',
        '前两步实施（Organization + FAQ）即可获得约 60% 的总收益，多数团队可在 1 到 2 周内完成。',
        '重复 FAQ 和不一致的实体命名是最常见的两类错误，会主动降低引用率——消除这些错误与添加新 Schema 同等重要。',
      ],
    },
    { type: 'h2', text: 'Schema 对 LLM 为何重要（与 Google 不同的原因）' },
    {
      type: 'p',
      text: 'Google 使用 Schema 来增强搜索结果展示——星级评分、FAQ 手风琴效果、面包屑导航。这些功能旨在提升传统搜索中的点击率。LLM 使用 Schema 的目的完全不同。Schema 为模型提供了三个能力：实体解析（这个页面关于哪个品牌、产品或组织）、结构化提取（无需解析自由文本即可可靠地拉取键值对信息）、以及跨来源链接（通过 sameAs 属性确认不同 URL 引用的是同一实体）。',
    },
    {
      type: 'p',
      text: '实体解析可能是最重要的功能。当模型遇到一个没有 Schema 的页面时，它必须从文本中推断实体身份——这个过程容易出错且高度依赖措辞。带有 Organization 或 Product Schema 的页面为模型提供了明确的实体类型、名称和属性。这消除了歧义，确保模型将页面内容归因于正确的实体。在 GEO 中，实体误分类是一个严重的失败模式——你所有的内容优化都在正确的实体下进行，但如果模型将你的品牌解析为错误的类别或将其与竞争对手混淆，这些优化都白费了。',
    },
    { type: 'h2', text: 'Schema 类型影响力排名' },
    { type: 'h3', text: '第一层级：高影响力（2 到 4 倍提升）' },
    {
      type: 'p',
      text: '三个 Schema 类型对 AI 引用产生了显著且可衡量的影响。Organization Schema 带来 3 到 4 倍的实体分类准确度提升——这是所有 Schema 类型中影响最大的单一因素。当模型准确知道你是谁时，正确的引用自然随之而来。FAQ Schema 在控制实验中显示，包含相同内容但带有 QA 标记的页面被引用频率约为无标记页面的 2 倍。Product 和 SoftwareApplication Schema 带来 2 到 3 倍的引用提升，尤其是在"最佳"和"对比"类查询中——模型可以可靠地提取产品名称、描述和属性，而无需猜测哪些文本片段代表产品信息。',
    },
    { type: 'h3', text: '第二层级：中等影响力（1.2 到 1.5 倍提升）' },
    {
      type: 'p',
      text: 'Article Schema 提供 1.2 到 1.5 倍的适度提升，主要是通过帮助模型区分内容类型（新闻、分析、教程）并将作者和发布日期归因到正确的实体。BreadcrumbList Schema 提供约 1.2 倍的提升——虽然不直接影响内容提取，但有助于模型理解网站层次结构，间接改善实体关联。这些类型值得实施，但不应在更高影响力的第一层级 Schema 之前优先考虑。',
    },
    { type: 'h3', text: '第三层级：最小影响力' },
    {
      type: 'p',
      text: 'Review、Recipe 和 Event Schema 目前对 AI 引用仅显示出最小影响。这并不意味它们毫无价值——它们对传统 SEO 仍然重要——但对于专门追求 AI 引用提升的团队来说，这些类型的投资回报率有限。',
    },
    {
      type: 'p',
      text: '影响力排名总结：Organization Schema 使实体分类准确度提升 3 到 4 倍，实施时间约 2 小时，优先级最高。FAQ Schema 带来约 2 倍引用频率提升，实施时间约 3 小时。Product/SoftwareApp Schema 带来 2 到 3 倍引用提升，实施时间约 4 小时。Article Schema 带来 1.2 到 1.5 倍提升，实施时间约 1 小时。BreadcrumbList Schema 带来约 1.2 倍提升，实施时间约 30 分钟。Review、Recipe、Event Schema 目前提升微乎其微。',
    },
    { type: 'h2', text: '实施高影响力 Schema 类型' },
    { type: 'h3', text: 'Organization Schema' },
    {
      type: 'p',
      text: 'sameAs 属性是 Organization Schema 中对 AI 引用最重要的字段。它明确地将你的网站连接到维基百科页面、维基数据条目、社交媒体资料和其他权威来源。这种跨来源链接直接为模型提供了实体消歧所需的数据——它在向量空间中拉近你的网站与其他可信来源的距离，增加了跨来源实体共识计算中的一致性。name、description 和 url 字段也是必需的，但 sameAs 是决定实体分类准确度的关键差异化因素。',
    },
    { type: 'h3', text: 'FAQ Schema' },
    {
      type: 'p',
      text: '有效的 FAQ Schema 遵循两个规则。第一，数量：5 到 10 个问题，不能多也不能少。太少无法建立实体关联密度，太多会稀释每个问答对在 RAG 分块窗口中被完整提取的概率。第二，格式：每个回答 30 到 60 词，自包含、声明性强。避免需要上下文的叙述性回答，也避免单行敷衍了事的回复。最佳的回答读起来像一个独立的定义陈述——模型可以直接引用而无需修改。使用客户和潜在客户实际使用的措辞，而不是你的内部术语。',
    },
    { type: 'h3', text: 'Product / SoftwareApplication Schema' },
    {
      type: 'p',
      text: '品牌交叉引用是这里最重要的技术。确保你的 Product Schema 中的 brand 字段链接到 Organization Schema 中定义的同一实体。这种内部一致性——Schema 明确声明"产品 X 由公司 Y 提供"——强化了两个实体之间的关联。在 AI 引用中，这意味着当模型在对比或推荐语境中引用你的产品时，它更有可能正确地将该产品归因于你的品牌。offer、aggregateRating 和 review 属性增加了产品实体的丰富性，但品牌链接提供了最关键的实体解析价值。',
    },
    { type: 'h2', text: '实施顺序' },
    {
      type: 'p',
      text: '实施顺序很重要，因为每步的收益递减。第 1 步：实施 Organization Schema 并填写 sameAs 引用，预计时间 2 小时，贡献约 35% 的总收益。第 2 步：为高价值页面添加 FAQ Schema，预计时间 3 小时，贡献约 25% 的总收益。前两步合计约 60% 的收益，且可在一周内完成。第 3 步：为重点产品页面实施 Product 或 SoftwareApplication Schema，预计时间 4 小时，贡献约 20% 的收益。第 4 步：添加 Article 和 BreadcrumbList Schema，预计时间 1.5 小时，贡献约 15% 的收益。第 5 步：审核和清理——移除重复 FAQ、修正不一致命名，预计时间 2 小时，贡献约 5% 的收益。',
    },
    { type: 'h2', text: '衡量 Schema 对引用的影响' },
    {
      type: 'p',
      text: 'Schema 的影响可以通过两个关键指标来衡量。实体分类准确度：在实施 Organization Schema 前后，询问 AI"什么是[你的品牌]？"记录答案是否准确反映了你的实体类型、类别和核心属性。在我们的测试中，实施完整 Organization Schema（含 sameAs 链接）后，中位实体分类准确度评分从 2.1 提升至 4.2（5 分制）。FAQ 引用频率：追踪你的 FAQ 页面在目标查询中被引用的频率变化。实施优化后的 FAQ Schema 后，中位 FAQ 引用频率提升了 87%。这些指标提供了比传统 SEO 指标更直接的 AI 可见度衡量。',
    },
    { type: 'h2', text: '常见 Schema 错误' },
    {
      type: 'p',
      text: '错误一：使用错误的 @type。将 SaaS 产品标记为 Thing 或 CreativeWork 而非 SoftwareApplication 会剥夺模型进行实体解析所需的具体类型信息。错误二：缺少 sameAs 引用。Organization Schema 而没有 sameAs 链接就像介绍一个人但不说他们认识谁——实体仍然模糊不清。错误三：同一页面上出现重复 FAQ Schema。多个 FAQ 块导致 RAG 系统对哪个是权威信息源产生混淆，降低而非提高了引用概率。错误四：各 Schema 类型间实体命名不一致——Organization 中 name 为"Acme Inc"，Product 的 brand 中为"Acme"——这种微小差异足以破坏跨实体关联。',
    },
    { type: 'h2', text: '方法论说明' },
    {
      type: 'p',
      text: '本文中的影响力估计基于 2026 年 4 月至 6 月期间对 80 个 B2B SaaS 网站的对比分析，比较了实施特定 Schema 类型前后在 ChatGPT 和 Perplexity 中的引用率。实体分类准确度评分通过标准化查询和人工验证收集。FAQ 引用频率测量了目标页面在相关查询中被引用的比例变化。需要注意的是，Schema 的效果因品类、竞争密度和基线实体清晰度而异。',
    },
    {
      type: 'cta',
      text: '检查你的 Schema 实施是否针对 AI 引用进行了优化——免费获取网站 Schema 分析报告，发现缺失和错误配置。',
    },
  ],
};
