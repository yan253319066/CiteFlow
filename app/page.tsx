export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', paddingTop: '80px', background: '#050816', color: '#ffffff', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', background: '#050816', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <span style={{ fontWeight: 'bold', fontSize: '20px' }}>GetCiteFlow</span>
        <nav style={{ display: 'flex', gap: '24px', fontSize: '14px', color: '#94a3b8' }}>
          <span>Scan</span>
          <span>Pricing</span>
          <span>Services</span>
        </nav>
      </header>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px' }}>WRS Test Page</h1>
        <p style={{ fontSize: '18px', color: '#94a3b8', marginBottom: '32px' }}>
          This is a minimal test page. H1 text. H2 text below. Paragraph below.
        </p>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px', marginTop: '48px' }}>Section One</h2>
        <p style={{ fontSize: '16px', color: '#94a3b8' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px', marginTop: '48px' }}>Section Two</h2>
        <p style={{ fontSize: '16px', color: '#94a3b8' }}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px', marginTop: '48px' }}>Section Three</h2>
        <p style={{ fontSize: '16px', color: '#94a3b8' }}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </main>
  );
}
