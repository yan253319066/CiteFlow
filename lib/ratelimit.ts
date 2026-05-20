import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const max = Number(process.env.RATE_LIMIT_MAX) || 5;

let ratelimit: Ratelimit | null = null;
let redisError: Error | null = null;

try {
  const redis = Redis.fromEnv();
  ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(max, "1 h"),
    analytics: true,
    prefix: "@citeflow/ratelimit",
  });
} catch (error) {
  redisError = error as Error;
  console.error("Upstash Redis initialization failed:", redisError.message);
}

export type RateLimitResult =
  | { success: true }
  | { success: false; reason: 'rate_limited' }
  | { success: false; reason: 'redis_unavailable' };

export async function checkRateLimit(ip: string): Promise<RateLimitResult> {
  if (!ratelimit) {
    return { success: false, reason: 'redis_unavailable' };
  }
  
  try {
    const { success } = await ratelimit.limit(ip);
    if (!success) {
      return { success: false, reason: 'rate_limited' };
    }
    return { success: true };
  } catch (error) {
    console.error("Rate limit check failed:", error);
    return { success: false, reason: 'redis_unavailable' };
  }
}