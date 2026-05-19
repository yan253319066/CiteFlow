export type AIProvider = 'gemini' | 'openai' | 'deepseek';

export function getProvider(input?: string | null): AIProvider {
  if (input === 'openai' || input === 'gemini' || input === 'deepseek') return input;
  return (process.env.AI_PROVIDER_DEFAULT as AIProvider) || 'openai';
}

export const ANALYZE_PROMPT = (url: string) => `Analyze the AI visibility (GEO - Generative Engine Optimization) of the website: ${url}.\nProvide a detailed report in JSON format including:\n- Overall visibility score (0-100)\n- Breakdown scores for: Entity Clarity, FAQ Coverage, Authority Signals, and Semantic Structure.\n- 3-5 specific \"Missing Components\"\n- 3-5 actionable \"AI Suggestions\"\n- A brief summary of why it ranks this way.\nRespond only with the JSON object.`;
