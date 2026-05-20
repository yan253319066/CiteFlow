import { analyzeSite } from "@/lib/analyze";
import { checkRateLimit } from "@/lib/ratelimit";
import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60;

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();
    if (!url) return NextResponse.json({ error: "URL is required" }, { status: 400 });

    const ip = req.headers.get("x-forwarded-for") ?? "anonymous";
    const { success } = await checkRateLimit(ip);
    if (!success) {
      return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
    }

    const report = await analyzeSite(url);
    return NextResponse.json(report);
  } catch (error: any) {
    console.error(`[POST] Error: ${error?.message}`, error?.stack);
    return NextResponse.json({ error: "Failed to analyze site", detail: error?.message }, { status: 500 });
  }
}