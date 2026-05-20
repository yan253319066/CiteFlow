import { analyzeSite } from "@/lib/analyze";
import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60;

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();
    if (!url) return NextResponse.json({ error: "URL is required" }, { status: 400 });

    const report = await analyzeSite(url);
    return NextResponse.json(report);
  } catch (error: any) {
    console.error(`[Compare] Error: ${error?.message}`);
    return NextResponse.json({ error: "Failed to analyze site", detail: error?.message }, { status: 500 });
  }
}