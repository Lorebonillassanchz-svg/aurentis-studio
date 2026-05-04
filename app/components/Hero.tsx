'use client'

import Link from 'next/link'
import React from 'react'

/* ── Sticker visual style helper ─────────────────────────── */
function stickerStyle(color: 'blue' | 'violet' | 'green'): React.CSSProperties {
  const map = {
    blue:   { bg: 'rgba(37,99,255,0.12)',  bd: 'rgba(37,99,255,0.35)',  color: '#93C5FD', glow: 'rgba(37,99,255,0.15)'  },
    violet: { bg: 'rgba(99,102,241,0.12)', bd: 'rgba(99,102,241,0.35)', color: '#C4B5FD', glow: 'rgba(99,102,241,0.15)' },
    green:  { bg: 'rgba(52,211,153,0.08)', bd: 'rgba(52,211,153,0.30)', color: '#6EE7B7', glow: 'rgba(52,211,153,0.10)' },
  }
  const c = map[color]
  return {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 7,
    background: c.bg,
    border: `1px solid ${c.bd}`,
    borderRadius: 999,
    padding: '10px 16px',
    fontSize: 12,
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    color: c.color,
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    boxShadow: `0 0 18px ${c.glow}`,
    whiteSpace: 'nowrap' as const,
  }
}

/* ── Dashboard SVG mockup ─────────────────────────────────── */
function DeviceSVG() {
  return (
    <svg width="340" height="260" viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Frame */}
      <rect x="0.6" y="0.6" width="338.8" height="258.8" rx="13.5" fill="#0C1422" stroke="rgba(37,99,255,0.25)" strokeWidth="1.2"/>
      {/* Top bar */}
      <rect x="0.6" y="0.6" width="338.8" height="36" rx="13.5" fill="#0F1B2D"/>
      <rect x="0.6" y="22" width="338.8" height="14.6" fill="#0F1B2D"/>
      {/* Traffic lights */}
      <circle cx="21" cy="18" r="4.5" fill="#FF5F57"/>
      <circle cx="36" cy="18" r="4.5" fill="#FEBC2E"/>
      <circle cx="51" cy="18" r="4.5" fill="#28C840"/>
      {/* Title */}
      <text x="67" y="22.5" fontFamily="system-ui,sans-serif" fontSize="10" fill="#94A3B8">Panel de rendimiento</text>
      {/* Live dot */}
      <circle cx="222" cy="18" r="3.5" fill="#34D399"/>
      <text x="229" y="22.5" fontFamily="system-ui,sans-serif" fontSize="9" fill="#34D399">En vivo</text>

      {/* Metric 1 */}
      <rect x="14" y="45" width="92" height="50" rx="7" fill="#111827"/>
      <text x="23" y="61" fontFamily="system-ui,sans-serif" fontSize="9" fill="#94A3B8">Visitas</text>
      <text x="23" y="78" fontFamily="system-ui,sans-serif" fontSize="16" fontWeight="700" fill="#F1F5F9">12.4K</text>
      <text x="75" y="78" fontFamily="system-ui,sans-serif" fontSize="9" fill="#34D399">+25%</text>

      {/* Metric 2 */}
      <rect x="116" y="45" width="92" height="50" rx="7" fill="#111827"/>
      <text x="125" y="61" fontFamily="system-ui,sans-serif" fontSize="9" fill="#94A3B8">Contactos</text>
      <text x="125" y="78" fontFamily="system-ui,sans-serif" fontSize="16" fontWeight="700" fill="#F1F5F9">386</text>
      <text x="163" y="78" fontFamily="system-ui,sans-serif" fontSize="9" fill="#34D399">+31%</text>

      {/* Metric 3 */}
      <rect x="218" y="45" width="108" height="50" rx="7" fill="#111827"/>
      <text x="227" y="61" fontFamily="system-ui,sans-serif" fontSize="9" fill="#94A3B8">Conversión</text>
      <text x="227" y="78" fontFamily="system-ui,sans-serif" fontSize="16" fontWeight="700" fill="#F1F5F9">3.12%</text>
      <text x="277" y="78" fontFamily="system-ui,sans-serif" fontSize="9" fill="#34D399">+22%</text>

      {/* Chart area */}
      <rect x="14" y="105" width="312" height="112" rx="8" fill="#0A111E"/>

      {/* Bars anchored at y=217 */}
      <rect x="27"  y="165" width="24" height="52" rx="3.5" fill="#2563FF" fillOpacity="0.75"/>
      <rect x="68"  y="145" width="24" height="72" rx="3.5" fill="#3B82F6" fillOpacity="0.75"/>
      <rect x="109" y="170" width="24" height="47" rx="3.5" fill="#2563FF" fillOpacity="0.75"/>
      <rect x="150" y="133" width="24" height="84" rx="3.5" fill="#6366F1" fillOpacity="0.80"/>
      <rect x="191" y="153" width="24" height="64" rx="3.5" fill="#3B82F6" fillOpacity="0.75"/>
      <rect x="232" y="121" width="24" height="96" rx="3.5" fill="#818CF8" fillOpacity="0.80"/>
      <rect x="273" y="130" width="24" height="87" rx="3.5" fill="#6366F1" fillOpacity="0.80"/>

      {/* Trend line */}
      <defs>
        <linearGradient id="trendGrad" x1="27" y1="0" x2="297" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6"/>
          <stop offset="1" stopColor="#818CF8"/>
        </linearGradient>
      </defs>
      <polyline
        points="39,162 80,141 121,167 162,130 203,148 244,118 285,128"
        stroke="url(#trendGrad)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Badge */}
      <rect x="105" y="226" width="130" height="24" rx="6" fill="rgba(37,99,255,0.18)" stroke="rgba(37,99,255,0.4)" strokeWidth="0.8"/>
      <text x="170" y="242" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="600" fill="#93C5FD" textAnchor="middle">+33% crecimiento</text>
    </svg>
  )
}

/* ── Main component ───────────────────────────────────────── */
export default function Hero() {
  return (
    <>
      <style>{`
        .hero-root {
          min-height: 100vh;
          background: #0B0F1A;
          display: grid;
          grid-template-columns: 52% 48%;
          align-items: center;
          padding: 70px 5% 0;
          position: relative;
          overflow: hidden;
        }
        .hero-left {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .hero-visual {
          position: relative;
          height: 520px;
          z-index: 2;
        }
        .hero-device {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-46%, -50%);
          animation: floatDevice 8s ease-in-out infinite;
          z-index: 5;
        }
        .hero-s1 { position:absolute; top:6%;    left:5%;  animation:floatS1 7s   ease-in-out         infinite; z-index:6; }
        .hero-s2 { position:absolute; top:16%;   right:2%; animation:floatS2 8s   ease-in-out 1.2s    infinite; z-index:6; }
        .hero-s3 { position:absolute; bottom:22%;left:0%;  animation:floatS3 6.5s ease-in-out 2.4s    infinite; z-index:6; }
        .hero-s4 { position:absolute; bottom:8%; right:5%; animation:floatS1 7.5s ease-in-out 0.8s    infinite; z-index:6; }
        .hero-s5 { position:absolute; top:44%;   right:0%; animation:floatS2 9s   ease-in-out 1.8s    infinite; z-index:6; }

        @media (max-width: 1024px) {
          .hero-visual { height: 420px; }
          .hero-s3, .hero-s5 { display: none; }
        }
        @media (max-width: 768px) {
          .hero-root {
            grid-template-columns: 1fr;
            padding-bottom: 60px;
            min-height: auto;
          }
          .hero-visual { height: 300px; }
          .hero-s2, .hero-s3, .hero-s5 { display: none; }
          .hero-device { animation: none; transform: translate(-50%, -50%); }
        }
        @media (max-width: 420px) {
          .hero-visual { height: 240px; }
          .hero-s1, .hero-s4 { display: none; }
        }
      `}</style>

      <section className="hero-root">

        {/* Atmospheric background glows */}
        <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:0 }}>
          <div style={{ position:'absolute', top:'-10%', left:'-5%', width:600, height:600, borderRadius:'50%', background:'radial-gradient(circle, rgba(37,99,255,0.10) 0%, transparent 70%)', filter:'blur(40px)' }} />
          <div style={{ position:'absolute', bottom:'10%', right:'5%', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)', filter:'blur(50px)' }} />
          <div style={{ position:'absolute', top:'50%', left:'40%', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle, rgba(37,99,255,0.06) 0%, transparent 70%)', filter:'blur(60px)' }} />
        </div>

        {/* ── LEFT COLUMN ────────────────────────────────── */}
        <div className="hero-left">

          {/* Badge pill */}
          <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(37,99,255,0.1)', border:'1px solid rgba(37,99,255,0.3)', color:'#93C5FD', borderRadius:999, padding:'7px 16px', fontSize:13, fontFamily:'var(--font-body)', fontWeight:500, width:'fit-content', animation:'fadeUp 0.55s ease 0.05s both' }}>
            <span style={{ width:7, height:7, borderRadius:'50%', background:'#3B82F6', flexShrink:0, display:'inline-block', animation:'pulseDot 2s ease-in-out infinite' }} />
            Presencia digital estratégica
          </div>

          {/* H1 */}
          <h1 style={{ margin:0, lineHeight:1.08, fontFamily:'var(--font-display)', animation:'fadeUp 0.55s ease 0.10s both' }}>
            <span style={{ display:'block', color:'#fff', fontSize:'clamp(40px, 4.6vw, 62px)', fontWeight:800 }}>
              Tu presencia digital debe
            </span>
            <span style={{ display:'block', fontSize:'clamp(40px, 4.6vw, 62px)', fontWeight:800, background:'linear-gradient(100deg, #3B82F6, #818CF8, #A78BFA)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              ayudarte a vender,
            </span>
            <span style={{ display:'block', color:'#fff', fontSize:'clamp(35px, 4.05vw, 54.6px)', fontWeight:800, opacity:0.85 }}>
              no solo a existir.
            </span>
          </h1>

          {/* Paragraph */}
          <p style={{ margin:0, color:'#94A3B8', fontSize:16.5, lineHeight:1.72, fontWeight:300, fontFamily:'var(--font-body)', maxWidth:480, animation:'fadeUp 0.55s ease 0.15s both' }}>
            Diseño webs estratégicas, landing pages y sistemas básicos de captación para negocios que necesitan verse profesionales, comunicar mejor su oferta y convertir interés en contactos reales.
          </p>

          {/* Buttons */}
          <div style={{ display:'flex', gap:12, flexWrap:'wrap', animation:'fadeUp 0.55s ease 0.20s both' }}>
            <Link
              href="/contacto"
              style={{ background:'#2563FF', color:'#fff', fontFamily:'var(--font-display)', fontWeight:600, fontSize:15, padding:'14px 30px', borderRadius:8, textDecoration:'none', boxShadow:'0 0 28px rgba(37,99,255,0.35)', transition:'background 0.2s, box-shadow 0.2s', display:'inline-block' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background='#1d4fd8'; el.style.boxShadow='0 0 36px rgba(37,99,255,0.5)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background='#2563FF'; el.style.boxShadow='0 0 28px rgba(37,99,255,0.35)' }}
            >
              Solicitar propuesta →
            </Link>
            <Link
              href="#servicios"
              style={{ background:'transparent', color:'#fff', fontFamily:'var(--font-display)', fontWeight:500, fontSize:15, padding:'14px 30px', borderRadius:8, textDecoration:'none', border:'1px solid rgba(255,255,255,0.12)', transition:'border-color 0.2s, background 0.2s', display:'inline-block' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor='rgba(255,255,255,0.25)'; el.style.background='rgba(255,255,255,0.04)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor='rgba(255,255,255,0.12)'; el.style.background='transparent' }}
            >
              Ver servicios
            </Link>
          </div>

          {/* Chips */}
          <div style={{ display:'flex', gap:8, flexWrap:'wrap', animation:'fadeUp 0.55s ease 0.25s both' }}>
            <span style={{ display:'inline-flex', alignItems:'center', gap:6, background:'rgba(37,99,255,0.07)', border:'1px solid rgba(37,99,255,0.2)', color:'#93C5FD', borderRadius:999, fontSize:12, fontWeight:500, padding:'6px 13px', fontFamily:'var(--font-body)' }}>
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><rect x="1" y="1" width="9" height="9" rx="1.5" stroke="#93C5FD" strokeWidth="1.3"/><line x1="1" y1="3.5" x2="10" y2="3.5" stroke="#93C5FD" strokeWidth="1.1"/></svg>
              Web estratégica
            </span>
            <span style={{ display:'inline-flex', alignItems:'center', gap:6, background:'rgba(99,102,241,0.07)', border:'1px solid rgba(99,102,241,0.2)', color:'#C4B5FD', borderRadius:999, fontSize:12, fontWeight:500, padding:'6px 13px', fontFamily:'var(--font-body)' }}>
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M5.5 1L7 4.2H10.5L7.75 6.3L8.75 9.5L5.5 7.5L2.25 9.5L3.25 6.3L0.5 4.2H4L5.5 1Z" stroke="#C4B5FD" strokeWidth="1.1" strokeLinejoin="round"/></svg>
              Captación clara
            </span>
            <span style={{ display:'inline-flex', alignItems:'center', gap:6, background:'rgba(52,211,153,0.06)', border:'1px solid rgba(52,211,153,0.2)', color:'#6EE7B7', borderRadius:999, fontSize:12, fontWeight:500, padding:'6px 13px', fontFamily:'var(--font-body)' }}>
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><circle cx="5.5" cy="5.5" r="4" stroke="#6EE7B7" strokeWidth="1.1"/><path d="M5.5 1.5V5.5L8 8" stroke="#6EE7B7" strokeWidth="1.3" strokeLinecap="round"/></svg>
              Automatización inicial
            </span>
          </div>
        </div>

        {/* ── RIGHT COLUMN ───────────────────────────────── */}
        <div className="hero-visual">

          {/* Glow orb */}
          <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:320, height:320, borderRadius:'50%', background:'radial-gradient(circle, rgba(37,99,255,0.14) 0%, transparent 70%)', filter:'blur(30px)', zIndex:0 }} />

          {/* Ring 1 */}
          <div style={{ position:'absolute', top:'50%', left:'50%', width:340, height:180, marginLeft:-170, marginTop:-90, borderRadius:'50%', border:'1px solid rgba(37,99,255,0.22)', transform:'rotateX(70deg)', animation:'ringPulse 4s ease-in-out infinite', zIndex:1 }} />

          {/* Ring 2 */}
          <div style={{ position:'absolute', top:'50%', left:'50%', width:460, height:240, marginLeft:-230, marginTop:-120, borderRadius:'50%', border:'1px solid rgba(99,102,241,0.14)', transform:'rotateX(70deg) rotateZ(15deg)', animation:'ringPulse 4s ease-in-out 1.5s infinite', zIndex:1 }} />

          {/* SVG device mockup */}
          <div className="hero-device">
            <DeviceSVG />
          </div>

          {/* Sticker 1 — Diseño web estratégico */}
          <div className="hero-s1" style={stickerStyle('blue')}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="1" y="1" width="11" height="11" rx="2" stroke="#93C5FD" strokeWidth="1.3"/><line x1="1" y1="4" x2="12" y2="4" stroke="#93C5FD" strokeWidth="1.1"/></svg>
            Diseño web estratégico
          </div>

          {/* Sticker 2 — Automatización inicial */}
          <div className="hero-s2" style={stickerStyle('violet')}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="5" stroke="#C4B5FD" strokeWidth="1.1"/><path d="M6.5 2V6.5L9 9" stroke="#C4B5FD" strokeWidth="1.3" strokeLinecap="round"/></svg>
            Automatización inicial
          </div>

          {/* Sticker 3 — Captación estructurada */}
          <div className="hero-s3" style={stickerStyle('green')}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 10L5 7L8 9L11 4" stroke="#6EE7B7" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Captación estructurada
          </div>

          {/* Sticker 4 — Landing pages */}
          <div className="hero-s4" style={stickerStyle('blue')}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="1.5" y="2" width="10" height="9" rx="1.5" stroke="#93C5FD" strokeWidth="1.2"/><line x1="4" y1="5.5" x2="9" y2="5.5" stroke="#93C5FD" strokeWidth="1.1"/><line x1="4" y1="7.5" x2="7.5" y2="7.5" stroke="#93C5FD" strokeWidth="1.1"/></svg>
            Landing pages
          </div>

          {/* Sticker 5 — Imagen digital coherente */}
          <div className="hero-s5" style={stickerStyle('violet')}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="5" stroke="#C4B5FD" strokeWidth="1.1"/><path d="M4 6.5L6 8.5L9.5 4.5" stroke="#C4B5FD" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Imagen digital coherente
          </div>

        </div>
      </section>
    </>
  )
}
