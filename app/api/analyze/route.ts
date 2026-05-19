import { ai } from "@/lib/gemini";
import { ANALYZE_PROMPT, getProvider } from "@/lib/ai-provider";
import { NextRequest, NextResponse } from "next/server";
import { Type } from "@google/genai";

async function analyzeWithGemini(url: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: ANALYZE_PROMPT(url),
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
            },
          },
          missing: { type: Type.ARRAY, items: { type: Type.STRING } },
          suggestions: { type: Type.ARRAY, items: { type: Type.STRING } },
          summary: { type: Type.STRING },
        },
      },
    },
  });

  return JSON.parse(response.text || "{}");
}

async function analyzeWithOpenAI(url: string) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) throw new Error("OPENAI_API_KEY missing");

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: "You are a GEO analysis assistant. Output valid JSON only." },
        { role: "user", content: ANALYZE_PROMPT(url) },
      ],
      temperature: 0.2,
    }),
  });

  if (!res.ok) throw new Error(`OpenAI failed: ${res.status}`);
  const data = await res.json();
  const content = data?.choices?.[0]?.message?.content || "{}";
  return JSON.parse(content);
}

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();
    if (!url) return NextResponse.json({ error: "URL is required" }, { status: 400 });

    const activeProvider = getProvider();
    const report = activeProvider === "gemini" ? await analyzeWithGemini(url) : await analyzeWithOpenAI(url);
    return NextResponse.json({ ...report, provider: activeProvider });
  } catch (error: any) {
    return NextResponse.json({ error: "Failed to analyze site", detail: error?.message }, { status: 500 });
  }
}
