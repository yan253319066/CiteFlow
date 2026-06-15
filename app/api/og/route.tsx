import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const domain = searchParams.get('domain') || 'yourwebsite.com';
    const score = searchParams.get('score');
    const hasScore = score !== null && !isNaN(Number(score));
    const scoreNum = Number(score) || 0;
    const scoreColor = scoreNum >= 70 ? '#22C55E' : scoreNum >= 40 ? '#EAB308' : '#EF4444';

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
            fontFamily: 'system-ui, sans-serif',
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
                AI Visibility Score
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
                Check your AI Visibility Score
              </span>
              <span
                style={{
                  fontSize: 20,
                  color: '#6B7280',
                  marginTop: 8,
                  display: 'flex',
                }}
              >
                Free AI Visibility Scan
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
            <span style={{ display: 'flex' }}>AI Visibility</span>
            <span style={{ display: 'flex' }}>FAQ Coverage</span>
            <span style={{ display: 'flex' }}>Entity Clarity</span>
            <span style={{ display: 'flex' }}>Authority</span>
          </div>
        </div>
      ),
      { width: 1200, height: 630 }
    );

    const clone = new Response(imageResponse.body, imageResponse);
    clone.headers.set('Cache-Control', 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400');
    return clone;
  } catch (error) {
    console.error('OG Image error:', error);
    return new Response('Failed to generate OG image', { status: 500 });
  }
}
