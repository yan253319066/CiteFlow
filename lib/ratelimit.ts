import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const max = Number(process.env.RATE_LIMIT_MAX) || 5;

let ratelimit: Ratelimit | null = null;

try {
  const redis = Redis.fromEnv();
  ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(max, "1 h"),
    analytics: true,
    prefix: "@citeflow/ratelimit",
  });
} catch (error) {
    // Redis init failed silently, treat as unavailable
  }

export type RateLimitResult =
  | { success: true }
  | { success: false; reason: 'rate_limited' }
  | { success: false; reason: 'redis_unavailable' };

export async function checkRateLimit(ip: string): Promise<RateLimitResult> {
  if (!ratelimit) {
    console.log(`[RateLimit] Redis unavailable, allowing request for IP: ${ip}`);
    return { success: true };
  }
  
  console.log(`[RateLimit] Checking for IP: ${ip}, limit: ${max}/hour`);
  
  try {
    const { success, remaining, reset } = await ratelimit.limit(ip);
    console.log(`[RateLimit] Result: success=${success}, remaining=${remaining}, reset=${reset}`);
    if (!success) {
      return { success: false, reason: 'rate_limited' };
    }
    return { success: true };
  } catch (err) {
    console.error(`[RateLimit] Error:`, err);
    return { success: false, reason: 'redis_unavailable' };
  }
}