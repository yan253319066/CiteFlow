/* ================================================================
   中文博客文章统一导出
   每篇博客是 i18n/blog-posts/ 下的独立文件
   新增博客时：创建文件 + 在此添加一条映射
   ================================================================ */

import type { BlogPost } from './types';

import { whatIsGeo } from './what-is-geo';
import { aiSearchVsSeo } from './ai-search-vs-seo';
import { geoGuide } from './geo-guide';
import { chatgptSeo } from './chatgpt-seo';
import { aiVisibility } from './ai-visibility';
import { rankInChatgpt } from './rank-in-chatgpt';
import { aiOverviewsChangedGoogleSearch } from './ai-overviews-changed-google-search';
import { contentStructureLlmCitations } from './content-structure-llm-citations';
import { eatingOurOwnDogFood } from './eating-our-own-dog-food';
import { blockAiCrawlersBackfire } from './block-ai-crawlers-backfire';
import { aiVisibilityMeasurement } from './ai-visibility-measurement';
import { aiVisibilityProfessionalServices } from './ai-visibility-professional-services';
import { aiVisibilitySaas } from './ai-visibility-saas';
import { aiVisibilityStartups } from './ai-visibility-startups';
import { buildEntityAssociations } from './build-entity-associations';
import { comparisonContentAiCitations } from './comparison-content-ai-citations';
import { aiTraffic2026 } from './ai-traffic-2026';
import { entityGap } from './entity-gap';
import { futureSearchCitationsCmo } from './future-search-citations-cmo';
import { aiAgentTrafficGrowth } from './ai-agent-traffic-growth';
import { aiCitationsRoi } from './ai-citations-roi';
import { aiCrawlerPlaybook } from './ai-crawler-playbook';
import { aiVisibilityAudit } from './ai-visibility-audit';
import { aiVisibilityEcommerce } from './ai-visibility-ecommerce';
import { geoVsSeo } from './geo-vs-seo';
import { howAiChoosesSources } from './how-ai-chooses-sources';
import { schemaMarkup } from './schema-markup';

export type { BlogPost, ContentBlock } from './types';

export const zhPosts: Record<string, BlogPost> = {
  'what-is-geo': whatIsGeo,
  'ai-search-vs-seo': aiSearchVsSeo,
  'geo-guide': geoGuide,
  'chatgpt-seo': chatgptSeo,
  'ai-visibility': aiVisibility,
  'rank-in-chatgpt': rankInChatgpt,
  'ai-agent-traffic-growth': aiAgentTrafficGrowth,
  'ai-citations-roi': aiCitationsRoi,
  'ai-crawler-playbook': aiCrawlerPlaybook,
  'ai-overviews-changed-google-search': aiOverviewsChangedGoogleSearch,
  'ai-visibility-audit': aiVisibilityAudit,
  'content-structure-llm-citations': contentStructureLlmCitations,
  'eating-our-own-dog-food': eatingOurOwnDogFood,
  'block-ai-crawlers-backfire': blockAiCrawlersBackfire,
  'ai-visibility-measurement': aiVisibilityMeasurement,
  'ai-visibility-professional-services': aiVisibilityProfessionalServices,
  'ai-visibility-saas': aiVisibilitySaas,
  'ai-visibility-startups': aiVisibilityStartups,
  'build-entity-associations': buildEntityAssociations,
  'comparison-content-ai-citations': comparisonContentAiCitations,
  'ai-traffic-2026': aiTraffic2026,
  'ai-visibility-ecommerce': aiVisibilityEcommerce,
  'entity-gap': entityGap,
  'future-search-citations-cmo': futureSearchCitationsCmo,
  'geo-vs-seo': geoVsSeo,
  'how-ai-chooses-sources': howAiChoosesSources,
  'schema-markup': schemaMarkup,
};

/** 所有已有中文翻译的博客 slug 列表 */
export const zhBlogSlugs = Object.keys(zhPosts);
