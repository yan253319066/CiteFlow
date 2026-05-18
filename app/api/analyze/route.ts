import { ai } from "@/lib/gemini";
import { NextRequest, NextResponse } from "next/server";
import { Type } from "@google/genai";

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    const prompt = `
      Analyze the AI visibility (GEO - Generative Engine Optimization) of the website: ${url}.
      Provide a detailed report in JSON format including:
      - Overall visibility score (0-100)
      - Breakdown scores for: Entity Clarity, FAQ Coverage, Authority Signals, and Semantic Structure.
      - 3-5 specific "Missing Components" (e.g., No FAQ Schema, Weak Entity Linking).
      - 3-5 actionable "AI Suggestions" to improve its chances of being cited by LLMs like ChatGPT and Gemini.
      - A brief summary of why it ranks this way.
      
      Respond only with the JSON object.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: ["score", "breakdown", "missing", "suggestions", "summary"],
          properties: {
            score: { type: Type.NUMBER },
            breakdown: {
              type: Type.OBJECT,
              required: ["aiVisibility", "faqCoverage", "entityClarity", "authority"],
              properties: {
                aiVisibility: { type: Type.NUMBER },
                faqCoverage: { type: Type.NUMBER },
                entityClarity: { type: Type.NUMBER },
                authority: { type: Type.NUMBER },
              }
            },
            missing: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            suggestions: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            summary: { type: Type.STRING }
          }
        }
      }
    });

    const report = JSON.parse(response.text || "{}");
    return NextResponse.json(report);
  } catch (error: any) {
    console.error("Analysis error:", error);
    return NextResponse.json({ error: "Failed to analyze site" }, { status: 500 });
  }
}
