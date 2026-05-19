import { analyzeSite } from "@/lib/analyze";
import { verifyAnalysisToken } from "@/lib/verification";
import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60;

export async function POST(req: NextRequest) {
  try {
    const { url, token } = await req.json();
    if (!url) return NextResponse.json({ error: "URL is required" }, { status: 400 });

    if (!(await verifyAnalysisToken(token))) {
      return NextResponse.json({ error: "CAPTCHA verification required" }, { status: 403 });
    }

    const report = await analyzeSite(url);
    return NextResponse.json(report);
  } catch (error: any) {
    console.error(`[POST] Error: ${error?.message}`, error?.stack);
    return NextResponse.json({ error: "Failed to analyze site", detail: error?.message }, { status: 500 });
  }
}
