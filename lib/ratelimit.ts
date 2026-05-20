import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ipMax = Number(process.env.RATE_LIMIT_MAX) || 5;
const domainMax = Number(process.env.DOMAIN_RATE_LIMIT_MAX) || 10;

let ipRatelimit: Ratelimit | null = null;
let domainRatelimit: Ratelimit | null = null;
let redisError: Error | null = null;

try {
  const redis = Redis.fromEnv();
  
  ipRatelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(ipMax, "1 h"),
    analytics: true,
    prefix: "@citeflow/ip-ratelimit",
  });

  domainRatelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(domainMax, "24 h"),
    analytics: true,
    prefix: "@citeflow/domain-ratelimit",
  });
} catch (error) {
  redisError = error as Error;
  console.error("Upstash Redis initialization failed:", redisError.message);
}

export type RateLimitResult =
  | { success: true }
  | { success: false; reason: 'ip_rate_limited' }
  | { success: false; reason: 'domain_rate_limited' }
  | { success: false; reason: 'redis_unavailable' };

export async function checkRateLimit(ip: string, domain?: string): Promise<RateLimitResult> {
  if (!ipRatelimit || !domainRatelimit) {
    return { success: false, reason: 'redis_unavailable' };
  }
  
  try {
    const { success: ipSuccess } = await ipRatelimit.limit(ip);
    if (!ipSuccess) {
      console.warn(`[RateLimit] IP ${ip} rate limited`);
      return { success: false, reason: 'ip_rate_limited' };
    }

    if (domain) {
      const domainKey = domain.toLowerCase().replace(/^https?:\/\//, '').split('/')[0];
      const { success: domainSuccess } = await domainRatelimit.limit(domainKey);
      if (!domainSuccess) {
        console.warn(`[RateLimit] Domain ${domainKey} rate limited`);
        return { success: false, reason: 'domain_rate_limited' };
      }
    }

    return { success: true };
  } catch (error) {
    console.error("Rate limit check failed:", error);
    return { success: false, reason: 'redis_unavailable' };
  }
}

export async function getDomainAnalysisCount(domain: string): Promise<number> {
  if (!domainRatelimit) return 0;
  
  try {
    const redis = Redis.fromEnv();
    const domainKey = domain.toLowerCase().replace(/^https?:\/\//, '').split('/')[0];
    const key = `@citeflow/domain-ratelimit:${domainKey}`;
    const count = await redis.get<number>(key);
    return count || 0;
  } catch (error) {
    console.error("Failed to get domain analysis count:", error);
    return 0;
  }
}

export async function getTimeUntilReset(ip: string): Promise<number> {
  if (!ipRatelimit) return 3600;
  
  try {
    const redis = Redis.fromEnv();
    const key = `@citeflow/ip-ratelimit:${ip}`;
    const data = await redis.get<{ reset: number }[]>(key);
    
    if (data && data.length > 0) {
      const resetTime = data[0]?.reset || Date.now() + 3600000;
      return Math.max(0, Math.ceil((resetTime - Date.now()) / 1000));
    }
    
    return 3600;
  } catch (error) {
    console.error("Failed to get rate limit reset time:", error);
    return 3600;
  }
}
