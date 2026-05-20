import { analyzeSite } from "@/lib/analyze";
import { checkRateLimit } from "@/lib/ratelimit";
import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60;

export async function POST(req: NextRequest) {
  const startTime = Date.now();
  try {
    const { url } = await req.json();
    console.log(`[API] Received analyze request for URL: ${url}`);
    
    if (!url) {
      console.log(`[API] Missing URL parameter`);
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    const ip = req.headers.get("x-forwarded-for") ?? "anonymous";
    console.log(`[API] Client IP: ${ip}`);
    
    const result = await checkRateLimit(ip);
    console.log(`[API] Rate limit check result: ${result.success ? 'passed' : 'failed (' + result.reason + ')'}`);
    
    if (!result.success) {
      if (result.reason === 'redis_unavailable') {
        return NextResponse.json({ error: "Service unavailable" }, { status: 503 });
      }
      return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
    }

    console.log(`[API] Starting analyzeSite for: ${url}`);
    const report = await analyzeSite(url);
    const duration = Date.now() - startTime;
    console.log(`[API] analyzeSite completed in ${duration}ms, hasError: ${report.error ? 'yes' : 'no'}`);
    
    if (report.error) {
      console.log(`[API] Analysis failed: ${report.errorType} - ${report.errorMessage}`);
    } else {
      console.log(`[API] Analysis succeeded, score: ${report.score ?? 'N/A'}, provider: ${report.provider}`);
    }
    
    return NextResponse.json(report);
  } catch (error: any) {
    const duration = Date.now() - startTime;
    console.error(`[API] Error after ${duration}ms: ${error?.message}`, error?.stack);
    return NextResponse.json({ error: "Failed to analyze site", detail: error?.message }, { status: 500 });
  }
}