import Link from 'next/link'

export default function EmailMarketingPage() {
  return (
    <>
      <style>{`
        .bc-back { color: #818CF8; text-decoration: none; font-family: var(--font-body); font-size: 14px; font-weight: 400; display: inline-block; transition: color 0.2s; }
        .bc-back:hover { color: #2563FF; }
      `}</style>

      <div style={{ background: '#0B0F1A', padding: '16px 24px', paddingTop: 86, position: 'relative', zIndex: 1 }}>
        <Link href="/servicios" className="bc-back">← Volver a Servicios</Link>
      </div>

      <section style={{ minHeight: 'calc(100vh - 118px)', background: '#0B0F1A', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 5%', textAlign: 'center' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3B82F6', marginBottom: 16, display: 'block' }}>
          Servicios
        </span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 800, color: '#F1F5F9', margin: '0 0 20px', lineHeight: 1.15 }}>
          Email Marketing &amp; Automatización
        </h1>
        <p style={{ color: '#4B5A72', fontSize: 16, fontFamily: 'var(--font-body)', fontWeight: 300, margin: 0 }}>
          Próximamente
        </p>
      </section>
    </>
  )
}
