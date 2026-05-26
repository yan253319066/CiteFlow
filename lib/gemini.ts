import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI;

export function getAiClient(): GoogleGenAI {
  if (!ai) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not set in environment variables.");
    }
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
}
