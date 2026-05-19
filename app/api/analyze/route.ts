import { analyzeSite } from "@/lib/analyze";
import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";

const SESSION_TTL = 24 * 60 * 60 * 1000; // 24 hours

function createSessionToken(): string {
  const secret = process.env.SESSION_SECRET || process.env.TURNSTILE_SECRET_KEY || "fallback";
  const expiresAt = Date.now() + SESSION_TTL;
  const sig = createHmac("sha256", secret).update(String(expiresAt)).digest("hex");
  return `${expiresAt}.${sig}`;
}

function verifySessionToken(token: string): boolean {
  try {
    const [expiresAt, sig] = token.split(".");
    const secret = process.env.SESSION_SECRET || process.env.TURNSTILE_SECRET_KEY || "fallback";
    const expected = createHmac("sha256", secret).update(expiresAt).digest("hex");
    return sig === expected && parseInt(expiresAt) > Date.now();
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const { url, token } = await req.json();
    if (!url) return NextResponse.json({ error: "URL is required" }, { status: 400 });

    let verified = false;

    if (token) {
      if (verifySessionToken(token)) {
        verified = true;
      } else {
        const secret = process.env.TURNSTILE_SECRET_KEY;
        if (!secret) return NextResponse.json({ error: "Server configuration error" }, { status: 500 });

        const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ secret, response: token }),
        });
        const verifyData = await verifyRes.json();
        if (verifyData.success) verified = true;
      }
    }

    if (!verified) {
      return NextResponse.json({ error: "CAPTCHA verification required" }, { status: 403 });
    }

    const report = await analyzeSite(url);
    const sessionToken = createSessionToken();
    return NextResponse.json({ ...report, sessionToken });
  } catch (error: any) {
    console.error(`[POST] Error: ${error?.message}`, error?.stack);
    return NextResponse.json({ error: "Failed to analyze site", detail: error?.message }, { status: 500 });
  }
}
