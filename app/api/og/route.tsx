import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

const ZH_CHARS = '检测你的AI可见度评分免费覆盖实体清晰权威性FAQ';
type FontEntry = { name: string; data: ArrayBuffer; weight: 400 | 700 | 800; style: 'normal' };

async function getZhFonts(): Promise<FontEntry[] | null> {
  try {
    const cssUrl = `https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700;800&text=${encodeURIComponent(ZH_CHARS)}`;
    const css = await fetch(cssUrl).then(r => r.text());
    const urls = [...css.matchAll(/url\(([^)]+)\)/g)];
    const weights: (FontEntry['weight'])[] = [400, 700, 800];
    const fonts: FontEntry[] = [];
    for (let i = 0; i < urls.length && i < weights.length; i++) {
      const data = await fetch(urls[i][1]).then(r => r.arrayBuffer());
      fonts.push({ name: 'Noto Sans SC', data, weight: weights[i], style: 'normal' });
    }
    return fonts;
  } catch {
    return null;
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const domain = searchParams.get('domain') || 'yourwebsite.com';
    const score = searchParams.get('score');
    const locale = searchParams.get('locale') || 'en';
    const hasScore = score !== null && !isNaN(Number(score));
    const scoreNum = Number(score) || 0;
    const scoreColor = scoreNum >= 70 ? '#22C55E' : scoreNum >= 40 ? '#EAB308' : '#EF4444';
    const isZh = locale === 'zh';

    const fonts = isZh ? (await getZhFonts()) ?? undefined : undefined;

    const imageResponse = new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #0A0F24 0%, #1A1040 50%, #0F1B3D 100%)',
            fontFamily: fonts ? '"Noto Sans SC", system-ui, sans-serif' : 'system-ui, sans-serif',
            padding: '60px 80px',
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: '#8B5CF6',
                display: 'flex',
              }}
            />
            <span
              style={{
                fontSize: 18,
                color: '#8B5CF6',
                fontWeight: 600,
                letterSpacing: '1.8px',
                display: 'flex',
              }}
            >
              CITEFLOW
            </span>
          </div>

          {/* Domain */}
          <h1
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: '#FFFFFF',
              textAlign: 'center',
              marginBottom: 8,
              lineHeight: 1.2,
              margin: 0,
              display: 'flex',
            }}
          >
            {domain}
          </h1>

          {/* Score Section */}
          {hasScore ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 24,
              }}
            >
              <div
                style={{
                  fontSize: 96,
                  fontWeight: 800,
                  color: scoreColor,
                  lineHeight: 1,
                  display: 'flex',
                }}
              >
                {score}/100
              </div>
              <span
                style={{
                  fontSize: 24,
                  color: '#9CA3AF',
                  marginTop: 8,
                  display: 'flex',
                }}
              >
                {isZh ? 'AI 可见度评分' : 'AI Visibility Score'}
              </span>
            </div>
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 24,
              }}
            >
              <span
                style={{
                  fontSize: 28,
                  color: '#9CA3AF',
                  textAlign: 'center',
                  display: 'flex',
                }}
              >
                {isZh ? '检测你的 AI 可见度评分' : 'Check your AI Visibility Score'}
              </span>
              <span
                style={{
                  fontSize: 20,
                  color: '#6B7280',
                  marginTop: 8,
                  display: 'flex',
                }}
              >
                {isZh ? '免费 AI 可见度检测' : 'Free AI Visibility Scan'}
              </span>
            </div>
          )}

          {/* Bottom Labels */}
          <div
            style={{
              display: 'flex',
              gap: 32,
              marginTop: 40,
              fontSize: 16,
              color: '#6B7280',
            }}
          >
            <span style={{ display: 'flex' }}>{isZh ? 'AI 可见度' : 'AI Visibility'}</span>
            <span style={{ display: 'flex' }}>{isZh ? 'FAQ 覆盖' : 'FAQ Coverage'}</span>
            <span style={{ display: 'flex' }}>{isZh ? '实体清晰度' : 'Entity Clarity'}</span>
            <span style={{ display: 'flex' }}>{isZh ? '权威性' : 'Authority'}</span>
          </div>
        </div>
      ),
      { width: 1200, height: 630, fonts }
    );

    const clone = new Response(imageResponse.body, imageResponse);
    clone.headers.set('Cache-Control', 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400');
    return clone;
  } catch (error) {
    console.error('OG Image error:', error);
    return new Response('Failed to generate OG image', { status: 500 });
  }
}
