import { createHmac, timingSafeEqual } from "crypto";

const SESSION_TTL = 24 * 60 * 60 * 1000;

function getSessionSecret(): string {
  return process.env.SESSION_SECRET || process.env.TURNSTILE_SECRET_KEY || "fallback";
}

export function createSessionToken(): string {
  const expiresAt = Date.now() + SESSION_TTL;
  const sig = createHmac("sha256", getSessionSecret()).update(String(expiresAt)).digest("hex");
  return `${expiresAt}.${sig}`;
}

export function verifySessionToken(token: string): boolean {
  try {
    const [expiresAt, sig] = token.split(".");
    if (!expiresAt || !sig) return false;

    const expected = createHmac("sha256", getSessionSecret()).update(expiresAt).digest("hex");
    const sigBuffer = Buffer.from(sig, "hex");
    const expectedBuffer = Buffer.from(expected, "hex");
    return (
      sigBuffer.length === expectedBuffer.length &&
      timingSafeEqual(sigBuffer, expectedBuffer) &&
      parseInt(expiresAt, 10) > Date.now()
    );
  } catch {
    return false;
  }
}

export async function verifyAnalysisToken(token?: string | null): Promise<boolean> {
  if (!token) return false;
  if (verifySessionToken(token)) return true;

  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) throw new Error("TURNSTILE_SECRET_KEY missing");

  const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ secret, response: token }),
  });

  const verifyData = await verifyRes.json();
  return Boolean(verifyData.success);
}
