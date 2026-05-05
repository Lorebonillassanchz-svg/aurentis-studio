import Link from 'next/link'
import React from 'react'

/* ── Icons ───────────────────────────────────────────────── */
function MonitorIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="3" width="20" height="14" rx="2.5" stroke="#60A5FA" strokeWidth="1.5"/>
      <path d="M8 21h8M12 17v4" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
function EmailIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="4" width="20" height="16" rx="2.5" stroke="#60A5FA" strokeWidth="1.5"/>
      <path d="M2 8l10 7 10-7" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
function StarIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#60A5FA" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  )
}
function SunIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4.5" stroke="#60A5FA" strokeWidth="1.5"/>
      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
function BoltIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" stroke="#60A5FA" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  )
}

/* ── Gradient text helper ─────────────────────────────────── */
const gradText: React.CSSProperties = {
  background: 'linear-gradient(100deg, #3B82F6, #818CF8)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

/* ── Icon container style ─────────────────────────────────── */
function iconBox(size: number): React.CSSProperties {
  return {
    width: size,
    height: size,
    borderRadius: 11,
    background: 'rgba(37,99,255,0.08)',
    border: '1px solid rgba(37,99,255,0.22)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginBottom: 20,
  }
}

/* ── Label style ──────────────────────────────────────────── */
const labelStyle: React.CSSProperties = {
  display: 'inline-block',
  fontFamily: 'var(--font-display)',
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase' as const,
  color: '#3B82F6',
  marginBottom: 14,
}

/* ── Component ────────────────────────────────────────────── */
export default function Servicios() {
  return (
    <>
      <style>{`
        .servicios-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 14px;
          max-width: 1240px;
          margin: 0 auto;
        }
        .card-featured {
          grid-row: span 2;
          border-radius: 18px;
          padding: 30px;
          background: linear-gradient(160deg, #0C1422, #0B0F1A);
          border: 1px solid rgba(37,99,255,0.18);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .card-normal {
          border-radius: 18px;
          padding: 30px;
          background: #0F172A;
          border: 1px solid rgba(37,99,255,0.18);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .card-featured::before,
        .card-normal::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #2563FF, #6366F1);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .card-featured:hover,
        .card-normal:hover {
          border-color: rgba(37,99,255,0.30);
          transform: translateY(-3px);
        }
        .card-featured:hover::before,
        .card-normal:hover::before {
          opacity: 1;
        }
        @media (max-width: 1024px) {
          .servicios-grid { grid-template-columns: 1fr 1fr; }
          .card-featured   { grid-row: span 1; }
        }
        @media (max-width: 640px) {
          .servicios-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="servicios" style={{ padding:'110px 5%', background:'#0B0F1A' }}>

        {/* Header */}
        <div style={{ maxWidth:1240, margin:'0 auto 56px' }}>
          <span style={labelStyle}>Servicios</span>
          <h2
            className="reveal"
            style={{ fontFamily:'var(--font-display)', fontSize:'clamp(28px,3.2vw,42px)', fontWeight:800, color:'#F1F5F9', margin:'0 0 0', lineHeight:1.15 }}
          >
            Soluciones de marketing diseñadas para que tu negocio{' '}
            <span style={gradText}>escale</span>
          </h2>
        </div>

        {/* Bento grid */}
        <div className="servicios-grid">

          {/* ── Featured card ── */}
          <div className="card-featured reveal">
            <div style={iconBox(52)}><MonitorIcon size={26} /></div>

            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
              <h3 style={{ fontFamily:'var(--font-display)', fontSize:22, fontWeight:700, color:'#F1F5F9', margin:0 }}>
                Web Presencia Pro
              </h3>
              <span style={{ background:'rgba(37,99,255,0.12)', border:'1px solid rgba(37,99,255,0.3)', color:'#93C5FD', borderRadius:999, fontSize:11, fontWeight:600, padding:'4px 10px', whiteSpace:'nowrap' }}>
                Más solicitado
              </span>
            </div>

            <p style={{ color:'#94A3B8', fontSize:14.5, lineHeight:1.7, fontFamily:'var(--font-body)', fontWeight:300, flexGrow:1, margin:'0 0 24px' }}>
              Tu escaparate digital de alto nivel. Una web que no solo se ve profesional, sino que genera confianza inmediata y convierte visitas en contactos reales.
            </p>

            <Link
              href="/servicios/web-presencia-pro"
              style={{ color:'#60A5FA', fontFamily:'var(--font-display)', fontWeight:600, fontSize:14, textDecoration:'none', marginTop:'auto' }}
            >
              Saber más →
            </Link>
          </div>

          {/* ── Card 2: Landing de Captación ── */}
          <div className="card-normal reveal reveal-delay-1">
            <div style={iconBox(44)}><EmailIcon size={20} /></div>
            <h3 style={{ fontFamily:'var(--font-display)', fontSize:16, fontWeight:700, color:'#F1F5F9', margin:'0 0 10px', lineHeight:1.3 }}>
              Landings de Captación
            </h3>
            <p style={{ color:'#94A3B8', fontSize:13, lineHeight:1.65, fontFamily:'var(--font-body)', fontWeight:300, flexGrow:1, margin:'0 0 20px' }}>
              La vía rápida para vender un servicio específico. Diseñadas para maximizar la conversión y reducir tu coste por cliente.
            </p>
            <Link href="/servicios/landing-captacion" style={{ color:'#60A5FA', fontFamily:'var(--font-display)', fontWeight:600, fontSize:13, textDecoration:'none', marginTop:'auto' }}>
              Saber más →
            </Link>
          </div>

          {/* ── Card 3: Sistema de Captación ── */}
          <div className="card-normal reveal reveal-delay-2">
            <div style={iconBox(44)}><StarIcon size={20} /></div>
            <h3 style={{ fontFamily:'var(--font-display)', fontSize:16, fontWeight:700, color:'#F1F5F9', margin:'0 0 10px', lineHeight:1.3 }}>
              Sistemas de Venta
            </h3>
            <p style={{ color:'#94A3B8', fontSize:13, lineHeight:1.65, fontFamily:'var(--font-body)', fontWeight:300, flexGrow:1, margin:'0 0 20px' }}>
              Conecta tu web con formularios y respuestas automáticas. No dejes escapar ni un solo cliente por falta de tiempo.
            </p>
            <Link href="/servicios/sistema-captacion" style={{ color:'#60A5FA', fontFamily:'var(--font-display)', fontWeight:600, fontSize:13, textDecoration:'none', marginTop:'auto' }}>
              Saber más →
            </Link>
          </div>

          {/* ── Card 4: Imagen Digital Coherente ── */}
          <div className="card-normal reveal reveal-delay-1">
            <div style={iconBox(44)}><SunIcon size={20} /></div>
            <h3 style={{ fontFamily:'var(--font-display)', fontSize:16, fontWeight:700, color:'#F1F5F9', margin:'0 0 10px', lineHeight:1.3 }}>
              Imagen Digital Coherente
            </h3>
            <p style={{ color:'#94A3B8', fontSize:13, lineHeight:1.65, fontFamily:'var(--font-body)', fontWeight:300, flexGrow:1, margin:'0 0 20px' }}>
              Ajuste visual integral para que tu presencia online sea consistente y profesional en todos los canales.
            </p>
            <Link href="/servicios/imagen-digital" style={{ color:'#60A5FA', fontFamily:'var(--font-display)', fontWeight:600, fontSize:13, textDecoration:'none', marginTop:'auto' }}>
              Saber más →
            </Link>
          </div>

          {/* ── Card 5: Lanzamiento Digital ── */}
          <div className="card-normal reveal reveal-delay-2">
            <div style={iconBox(44)}><BoltIcon size={20} /></div>
            <h3 style={{ fontFamily:'var(--font-display)', fontSize:16, fontWeight:700, color:'#F1F5F9', margin:'0 0 10px', lineHeight:1.3 }}>
              Lanzamiento Digital
            </h3>
            <p style={{ color:'#94A3B8', fontSize:13, lineHeight:1.65, fontFamily:'var(--font-body)', fontWeight:300, flexGrow:1, margin:'0 0 20px' }}>
              Base digital completa para negocios que empiezan o se reorganizan. De cero a presencia profesional en tiempo récord.
            </p>
            <Link href="/servicios/lanzamiento-digital" style={{ color:'#60A5FA', fontFamily:'var(--font-display)', fontWeight:600, fontSize:13, textDecoration:'none', marginTop:'auto' }}>
              Saber más →
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}
