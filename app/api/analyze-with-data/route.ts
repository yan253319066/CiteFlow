import { analyzeWithData } from '@/lib/analyze-with-data';
import { checkRateLimit } from '@/lib/ratelimit';
import { NextRequest, NextResponse } from 'next/server';

export const maxDuration = 60;

export async function POST(req: NextRequest) {
  try {
    const { url, scrapeData } = await req.json();
    
    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }
    
    if (!scrapeData) {
      return NextResponse.json({ error: 'Scrape data is required' }, { status: 400 });
    }

    const ip = req.headers.get('x-forwarded-for') ?? 'anonymous';
    const domain = new URL(url.startsWith('http') ? url : `https://${url}`).hostname;
    
    const rateLimitResult = await checkRateLimit(ip, domain);
    if (!rateLimitResult.success) {
      if (rateLimitResult.reason === 'redis_unavailable') {
        return NextResponse.json({ 
          error: 'Service temporarily unavailable. Please try again later.',
          retryAfter: 3600 
        }, { status: 503 });
      }
      
      if (rateLimitResult.reason === 'ip_rate_limited') {
        return NextResponse.json({ 
          error: 'Too many requests from your IP. Please wait before trying again.',
          reason: 'ip_rate_limited',
          retryAfter: 3600
        }, { status: 429 });
      }
      
      if (rateLimitResult.reason === 'domain_rate_limited') {
        return NextResponse.json({ 
          error: 'This domain has been analyzed too many times today. Please try again tomorrow.',
          reason: 'domain_rate_limited',
          retryAfter: 86400
        }, { status: 429 });
      }
      
      return NextResponse.json({ 
        error: 'Rate limit exceeded',
        retryAfter: 3600
      }, { status: 429 });
    }

    const report = await analyzeWithData(url, scrapeData);
    return NextResponse.json(report);
  } catch (error: any) {
    console.error('[analyze-with-data] Error:', error?.message, error?.stack);
    return NextResponse.json(
      { error: 'Failed to analyze site', detail: error?.message },
      { status: 500 }
    );
  }
}
