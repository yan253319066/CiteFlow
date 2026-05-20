import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const domain = searchParams.get('domain') || 'yourwebsite.com';
    const score = searchParams.get('score');
    const hasScore = score !== null && !isNaN(Number(score));

    return new ImageResponse(
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
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#8B5CF6' }} />
            <span style={{ fontSize: 18, color: '#8B5CF6', fontWeight: 600, letterSpacing: '1.8px' }}>
              CITEFLOW
            </span>
          </div>

          <h1
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: '#FFFFFF',
              textAlign: 'center',
              marginBottom: 8,
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            {domain}
          </h1>

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
                  color: Number(score) >= 70 ? '#22C55E' : Number(score) >= 40 ? '#EAB308' : '#EF4444',
                  lineHeight: 1,
                }}
              >
                {score}/100
              </div>
              <span style={{ fontSize: 24, color: '#9CA3AF', marginTop: 8 }}>
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
              <div style={{ fontSize: 28, color: '#9CA3AF', textAlign: 'center' }}>
                Check your AI Visibility Score
              </div>
              <span style={{ fontSize: 20, color: '#6B7280', marginTop: 8 }}>
                Free GEO Report
              </span>
            </div>
          )}

          <div
            style={{
              display: 'flex',
              gap: 32,
              marginTop: 40,
              fontSize: 16,
              color: '#6B7280',
            }}
          >
            <span>AI Visibility</span>
            <span>FAQ Coverage</span>
            <span>Entity Clarity</span>
            <span>Authority</span>
          </div>
        </div>
      ),
      { width: 1200, height: 630 }
    );
  } catch {
    return new Response('Failed to generate OG image', { status: 500 });
  }
}