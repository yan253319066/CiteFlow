export type AIProvider = 'gemini' | 'openai' | 'deepseek';

export function getProvider(input?: string | null): AIProvider {
  if (input === 'openai' || input === 'gemini' || input === 'deepseek') return input;
  return (process.env.AI_PROVIDER_DEFAULT as AIProvider) || 'openai';
}

export const ANALYZE_PROMPT = (url: string, siteData?: string) => `You are an expert GEO (Generative Engine Optimization) analyst. Analyze the AI visibility potential of the website: ${url}.

SCORING METHODOLOGY (FOLLOW STRICTLY):
- AI Visibility (30% weight): Based on structured data, meta tags, and LLM accessibility signals
- FAQ Coverage (25% weight): Based on FAQ schema and comprehensive question-answer content
- Entity Clarity (25% weight): Based on content quality, headings, and semantic structure
- Authority (20% weight): Based on technical SEO and domain signals

SCORING CRITERIA (0-100 scale):
AI Visibility:
- 20 points: Has JSON-LD structured data
- 15 points: Has FAQ schema
- 15 points: Has HowTo schema
- 10 points: Has Open Graph tags
- 10 points: Has Twitter Card tags
- Remaining: Content structure and semantic markup quality

FAQ Coverage:
- 30 points: Has FAQ schema
- 30 points: Has HowTo schema
- 20 points: Word count >= 500
- 20 points: Word count >= 1500
- Remaining: Quality and depth of FAQ-style content

Entity Clarity:
- 20 points: Title >= 5 characters
- 20 points: Meta description >= 30 characters
- 20 points: 1-3 H1 headings
- 10 points: >= 3 H2 headings
- 15 points: Word count >= 500
- 15 points: Word count >= 1500
- Remaining: Content coherence and entity representation

Authority:
- 15 points: Has robots.txt
- 15 points: Has sitemap.xml
- 20 points: Has llms.txt
- Remaining: Domain reputation signals

${siteData ? `ACTUAL SIGNALS FROM WEBSITE:\n${siteData}\n\nIMPORTANT: Base your analysis PRIMARILY on the actual detected signals above. Your scores should correlate closely with the BASE SCORE CALCULATION provided.` : ''}

REQUIRED OUTPUT FORMAT - JSON ONLY:
{
  "score": <overall GEO score 0-100>,
  "breakdown": {
    "aiVisibility": <number 0-100>,
    "faqCoverage": <number 0-100>,
    "entityClarity": <number 0-100>,
    "authority": <number 0-100>
  },
  "missing": [<3-5 specific missing components as strings>],
  "suggestions": [<3-5 actionable improvement suggestions as strings>],
  "summary": "<1-2 sentence summary explaining the score based on detected signals>"
}

IMPORTANT RULES:
1. Scores must be realistic and evidence-based, not speculative
2. Missing items must be things actually absent from the detected signals
3. Suggestions must be specific and actionable
4. Summary must directly reference the detected signals
5. Output ONLY valid JSON - no extra text or explanations`;