export type AIProvider = 'gemini' | 'openai' | 'deepseek';

export function getProvider(input?: string | null): AIProvider {
  if (input === 'openai' || input === 'gemini' || input === 'deepseek') return input;
  return (process.env.AI_PROVIDER_DEFAULT as AIProvider) || 'openai';
}

export const ANALYZE_PROMPT = (url: string) => `Analyze the AI visibility (GEO - Generative Engine Optimization) of the website: ${url}.
Return ONLY a JSON object with these exact keys:
{
  "score": <number 0-100>,
  "breakdown": { "aiVisibility": <number 0-100>, "faqCoverage": <number 0-100>, "entityClarity": <number 0-100>, "authority": <number 0-100> },
  "missing": [<3-5 strings of missing components>],
  "suggestions": [<3-5 strings of actionable AI suggestions>],
  "summary": "<brief summary of why it ranks this way>"
}`;
