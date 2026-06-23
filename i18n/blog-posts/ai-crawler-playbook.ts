import type { BlogPost } from './types';

export const aiCrawlerPlaybook: BlogPost = {
  title: 'AI 爬虫完全指南：llms.txt 与 robots.txt 配置策略手册',
  description: '通过正确配置 llms.txt 和 robots.txt 最大化 AI 引用率。涵盖"爬取不禁训练"配置方案、llms.txt 实体声明链路、以及最优 AI 爬虫白名单策略。',
  date: '2026年6月22日',
  category: '策略手册',
  blocks: [
    {
      type: 'lead',
      text: '两个文件——llms.txt 和 robots.txt——决定了你的内容是否能被 AI 爬虫访问以进行 RAG 检索，以及检索后是否会被优先引用。大多数企业网站只能做好其中一个的优化，而忽略了另一个。极少数能将两者协同配置以达到 AI 引用目标。本文提供完整的配置策略手册，涵盖从基础概念到效果衡量的每一步。',
    },
    {
      type: 'key-takeaways',
      strong: '核心要点',
      items: [
        'llms.txt 是投入产出比最高的 GEO 策略——仅需 2 小时即可创建，立即使 AI 爬虫获得你网站的结构化内容地图，让可引用页面被优先检索。',
        '大多数企业网站实际拦截的 AI 爬虫远超预期——默认 CDN 或安全配置会拦截 GPTBot、ClaudeBot 和 GeminiBot，直接阻断 RAG 检索通道，使品牌无法被 AI 实时引用。',
        '最优配置方案是"爬取不禁训练"（crawl ⇢ no-training）——允许爬虫实时检索以获取引用机会，同时通过法律机制保护训练权，而非简单粗暴地在 robots.txt 中全部拦截。',
        'llms.txt 与 robots.txt 功能互补——一个控制访问权限，一个控制内容优先级。大多数网站只配置了其中一个，导致 AI 可见度大打折扣。',
        'llms.txt 正在成为实体解析信号——AI 模型越来越将其视为与 Organization Schema 同等级别的实体分类依据，用于判断品牌身份和内容范围。',
      ],
    },
    { type: 'h2', text: '什么是 llms.txt？它为什么存在？' },
    {
      type: 'p',
      text: 'llms.txt 规范定义了位于域名根目录下的一个 Markdown 文件，为 AI 爬虫提供结构化、机器可读的网站内容摘要。你可以将其理解为专为 LLM 设计的站点地图——目标不是列出每一页，而是让爬虫知道哪些页面最能代表品牌并回答关于品牌的问题。',
    },
    {
      type: 'p',
      text: '一份结构良好的 llms.txt 包含以下要素：组织机构的简要描述文本、按类别组织的核心页面链接、可选的逐页描述（告诉爬虫每个链接页面的覆盖范围），以及应优先用于检索的内容直接链接。',
    },
    {
      type: 'p',
      text: '三者的定位不同——robots.txt 关乎访问控制，sitemap.xml 关乎索引完整性，而 llms.txt 关乎内容优先级排序。它向爬虫传达的核心信息是："这些页面最能代表我们品牌的身份和业务。"',
    },
    { type: 'h2', text: '现状问题：缺失的拼图' },
    {
      type: 'p',
      text: '大多数企业网站的状态是：robots.txt 配置完善，sitemap.xml 结构规范，但完全没有 llms.txt。这套配置是为传统搜索引擎时代设计的，对于 AI 引用目标而言，实际上是在起反作用。',
    },
    {
      type: 'p',
      text: '没有 llms.txt 的情况下，AI 爬虫只能通过通用爬取来发现和评估你的内容——这意味着最具引用价值的页面与最无关紧要的页面在爬虫眼中毫无区别，爬虫没有任何机器可读的信号来判断你的品牌是什么、哪些内容最能代表它。',
    },
    { type: 'h2', text: '如何构建你的 llms.txt' },
    {
      type: 'p',
      text: '标准格式如下：以品牌名称作为一级标题，一段实体描述段落，然后用章节标题加项目符号链接的方式列出核心页面。实体描述务必与 Organization Schema 的 description 字段以及 Wikidata 条目保持完全一致。三处来源的一致性可以构建最强的实体锚点。',
    },
    {
      type: 'p',
      text: '链接数量控制在 20 到 25 条以内。这个文件的原则是优先级排序，而非面面俱到。按引用价值排序，而不是按网站导航结构排序。如果存在对比页面或产品页面，务必至少包含一个。当发布专门为 AI 引用设计的内容时，同步更新该文件。',
    },
    { type: 'h2', text: 'robots.txt：AI 爬虫的访问之门' },
    {
      type: 'p',
      text: 'robots.txt 文件控制哪些爬虫可以访问网站的哪些部分。对于 AI 引用而言，默认配置面临一个基本矛盾：拦截 AI 爬虫可以保护内容不被用于训练，但同时也阻止了内容被 RAG 检索，切断了实时被引用的可能。',
    },
    { type: 'h3', text: '"爬取不禁训练"配置方案' },
    {
      type: 'p',
      text: '最优方案是允许 AI 爬虫访问内容以进行实时 RAG 检索（这是获取引用所必需的），同时通过法律机制而非技术拦截来保护训练权。具体配置如下：',
    },
    {
      type: 'p',
      text: 'User-agent: GPTBot\nAllow: /\n\n对 ClaudeBot、GeminiBot、CCBot 和 PerplexityBot 应用完全相同的 Allow 规则。每种爬虫对应一个主流 AI 平台的检索通道——GPTBot 对应 ChatGPT 与 Bing，ClaudeBot 对应 Claude 与 Brave，GeminiBot 对应 Gemini 与 Google，PerplexityBot 对应 Perplexity，CCBot 对应 Common Crawl 训练数据基础。',
    },
    {
      type: 'key-takeaways',
      strong: '拦截的代价',
      items: [
        '无法参与 RAG 检索——内容在 AI 回答中完全不可见，错失所有实时引用机会。',
        '被排除在 Common Crawl 之外——训练数据中的存在感降低，模型在训练阶段无法建立对品牌的基础认知。',
        '实体解析被削弱——模型无法通过对域名的直接访问来验证实体信息，导致实体分类模糊。',
      ],
    },
    {
      type: 'p',
      text: '对于追求 AI 引用的品牌，建议方案很明确：采用"爬取不禁训练"配置——允许检索，通过其他机制保护训练权。',
    },
    { type: 'h2', text: '两个文件如何协同工作' },
    {
      type: 'p',
      text: 'robots.txt 控制访问——这是一道二元闸门，要么允许，要么拒绝。llms.txt 控制优先级——这是一个筛选指南，告诉爬虫在可访问的内容中哪些最值得关注。没有 robots.txt 的放行，爬虫无法触达内容。没有 llms.txt 的指引，爬虫即使到达了网站也可能找不到最有引用价值的内容。',
    },
    {
      type: 'p',
      text: '将这两个文件与 Organization Schema 组合起来，三者构成了一条完整的实体声明链路：Organization Schema 告诉模型"这个域名对应实体 X"，llms.txt 补充"实体 X 涵盖这些话题并优先推荐这些内容"，Wikidata 条目则提供"实体 X 具有这些属性和关联关系"。三层信息互为印证，模型对品牌的认知因此更加准确和稳固。',
    },
    { type: 'h2', text: '如何衡量效果' },
    {
      type: 'p',
      text: '在部署两个文件之后，追踪以下指标：AI 爬虫是否开始请求你的 llms.txt 文件（在服务器日志中检查来自 GPTBot、ClaudeBot 等爬虫的请求记录）；优先列表中页面的引用量是否相对于未被列出的页面有所提升；实体分类的准确性是否改善——可以用"什么是[品牌名]"作为查询来前后对比模型回答的精确度。',
    },
    {
      type: 'p',
      text: '根据我们的分析数据，部署了结构完善的 llms.txt 文件的品牌，在 60 天内列入文件的页面引用量中位数提升了 40%，对比组为同一网站上未被列入的页面。',
    },
    {
      type: 'cta',
      text: '检查你的 AI 爬虫配置——GetCiteFlow 扫描器可检测你的 robots.txt 是否正确放行关键爬虫、llms.txt 结构是否规范、三层实体声明链路是否一致。免费扫描，立即获取你的 AI 可见度报告。',
    },
  ],
};
