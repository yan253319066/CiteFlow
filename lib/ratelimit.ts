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
  console.error("Upstash Redis initialization failed - rate limiting will block requests:", redisError.message);
}

export async function checkRateLimit(ip: string): Promise<{ success: boolean }> {
  if (!ratelimit) {
    return { success: false };
  }
  
  try {
    return await ratelimit.limit(ip);
  } catch (error) {
    console.error("Rate limit check failed, blocking request to protect AI tokens:", error);
    return { success: false };
  }
}