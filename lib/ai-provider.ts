export type AIProvider = 'gemini' | 'openai' | 'deepseek';

export function getProvider(input?: string | null): AIProvider {
  if (input === 'openai' || input === 'gemini' || input === 'deepseek') return input;
  return (process.env.AI_PROVIDER_DEFAULT as AIProvider) || 'openai';
}

export const ANALYZE_PROMPT = (url: string, siteData?: string) => `Analyze the AI visibility (GEO - Generative Engine Optimization) of the website: ${url}.

${siteData ? `Here are the actual signals detected from the website:\n${siteData}\n\nBase your analysis on these real signals rather than guessing.` : ''}
Evaluate these factors specifically using the signals above:
- contentStructure (0-100): How well the content is structured for AI parsing — uses lists, tables, short paragraphs, clear heading hierarchy.
- summaryOptimization (0-100): How optimized the page is for AI summarization — strong meta description, opening paragraph that serves as a clear summary, and a dedicated summary/key takeaways section.
- authority (0-100): Demonstrates first-hand experience, original analysis, proprietary data, named authors with credentials, and authoritative citations — not generic or commodity content.
- entityClarity (0-100): How clearly the page defines what entity/category it belongs to — unambiguous category language, consistent terminology, explicit "X is a Y" statements.

Return ONLY a JSON object with these exact keys:
{
  "score": <number 0-100>,
  "breakdown": { "aiVisibility": <number 0-100>, "faqCoverage": <number 0-100>, "entityClarity": <number 0-100>, "authority": <number 0-100>, "contentStructure": <number 0-100>, "summaryOptimization": <number 0-100> },
  "missing": [<3-5 strings of missing components>],
  "suggestions": [<3-5 strings of actionable AI suggestions>],
  "summary": "<brief summary of why it ranks this way>"
}`;
