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

/* ── Sticker icon container ───────────────────────────────── */
function iconRing(r: string, b: string): React.CSSProperties {
  return {
    width: 18, height: 18, borderRadius: '50%',
    background: r, border: `1px solid ${b}`,
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  }
}

/* ── Landing page preview SVG ────────────────────────────── */
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

      {/* URL bar */}
      <text x="67" y="22.5" fontFamily="system-ui,sans-serif" fontSize="10" fill="#94A3B8">aurentistudio.com</text>

      {/* Live dot in top bar */}
      <circle cx="277" cy="18" r="3.5" fill="#34D399"/>
      <text x="284" y="22.5" fontFamily="system-ui,sans-serif" fontSize="9" fill="#34D399">En vivo</text>

      {/* ── Body background ── */}
      <rect x="0.6" y="36" width="338.8" height="222.8" fill="#0F172A"/>

      {/* ── Hero simulation section ── */}
      <rect x="0.6" y="36" width="338.8" height="84" fill="#0C1422"/>

      {/* Title bar */}
      <rect x="20" y="56" width="187" height="8" rx="3" fill="rgba(255,255,255,0.15)"/>
      {/* Subtitle bar */}
      <rect x="20" y="71" width="136" height="5" rx="2" fill="rgba(255,255,255,0.08)"/>
      {/* CTA button */}
      <rect x="20" y="82" width="90" height="18" rx="6" fill="#2563FF"/>
      <text x="65" y="95" fontFamily="system-ui,sans-serif" fontSize="7" fill="white" textAnchor="middle">Solicitar →</text>

      {/* Live indicator inside body (top right) */}
      <circle cx="308" cy="50" r="2.5" fill="#4ADE80">
        <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite"/>
      </circle>
      <text x="315" y="54" fontFamily="system-ui,sans-serif" fontSize="6" fill="#4ADE80">En vivo</text>

      {/* Section divider */}
      <line x1="14" y1="125" x2="326" y2="125" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>

      {/* ── Metric cards ── */}

      {/* Card 1 — Visitas (blue) */}
      <rect x="14" y="132" width="98" height="52" rx="7" fill="rgba(37,99,255,0.10)" stroke="rgba(37,99,255,0.20)" strokeWidth="0.8"/>
      <text x="23" y="148" fontFamily="system-ui,sans-serif" fontSize="6" fill="#94A3B8">Visitas</text>
      <text x="23" y="164" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="700" fill="#3B82F6">↑ 340%</text>

      {/* Card 2 — Leads (indigo) */}
      <rect x="120" y="132" width="98" height="52" rx="7" fill="rgba(99,102,241,0.10)" stroke="rgba(99,102,241,0.20)" strokeWidth="0.8"/>
      <text x="129" y="148" fontFamily="system-ui,sans-serif" fontSize="6" fill="#94A3B8">Leads</text>
      <text x="129" y="164" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="700" fill="#6366F1">↑ 28/mes</text>

      {/* Card 3 — Conversión (green) */}
      <rect x="226" y="132" width="98" height="52" rx="7" fill="rgba(74,222,128,0.08)" stroke="rgba(74,222,128,0.20)" strokeWidth="0.8"/>
      <text x="235" y="148" fontFamily="system-ui,sans-serif" fontSize="6" fill="#94A3B8">Conversión</text>
      <text x="235" y="164" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="700" fill="#4ADE80">4.2%</text>

      {/* ── Decorative bottom lines ── */}
      <rect x="14" y="198" width="312" height="6" rx="3" fill="rgba(255,255,255,0.04)"/>
      <rect x="14" y="212" width="200" height="4" rx="2" fill="rgba(255,255,255,0.03)"/>
      <rect x="14" y="224" width="260" height="4" rx="2" fill="rgba(255,255,255,0.03)"/>
      <rect x="14" y="236" width="180" height="4" rx="2" fill="rgba(255,255,255,0.03)"/>
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
        .hero-s1 { position:absolute; top:6%;     left:5%;  animation:floatS1 7s   ease-in-out         infinite; z-index:6; }
        .hero-s2 { position:absolute; top:16%;    right:2%; animation:floatS2 8s   ease-in-out 1.2s    infinite; z-index:6; }
        .hero-s3 { position:absolute; bottom:22%; left:0%;  animation:floatS3 6.5s ease-in-out 2.4s    infinite; z-index:6; }
        .hero-s4 { position:absolute; bottom:8%;  right:5%; animation:floatS1 7.5s ease-in-out 0.8s    infinite; z-index:6; }
        .hero-s5 { position:absolute; top:44%;    right:0%; animation:floatS2 9s   ease-in-out 1.8s    infinite; z-index:6; }

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
          .hero-visual { display: none; }
          .hero-chips  { position: relative; z-index: 10; }
        }
        @media (max-width: 420px) {
          .hero-visual { display: none; }
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
            Estrategia primero · Diseño después
          </div>

          {/* H1 */}
          <h1 style={{ margin:0, lineHeight:1.08, fontFamily:'var(--font-display)', animation:'fadeUp 0.55s ease 0.10s both' }}>
            <span style={{ display:'block', color:'#fff', fontSize:'clamp(36px, 4.2vw, 58px)', fontWeight:800 }}>
              Tu web atrae visitas...
            </span>
            <span style={{ display:'block', fontSize:'clamp(36px, 4.2vw, 58px)', fontWeight:800, background:'linear-gradient(100deg, #3B82F6, #818CF8, #A78BFA)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              ¿pero está trayendo clientes?
            </span>
          </h1>

          {/* Paragraph */}
          <p style={{ margin:0, color:'#94A3B8', fontSize:16.5, lineHeight:1.72, fontWeight:300, fontFamily:'var(--font-body)', maxWidth:480, animation:'fadeUp 0.55s ease 0.15s both' }}>
            En Aurentis Studio creo landings y sistemas de presencia digital que realmente convierten visitantes en clientes. Sin plantillas. Sin complicaciones. Solo estrategia y diseño de alto impacto.
          </p>

          {/* Buttons */}
          <div style={{ display:'flex', gap:12, flexWrap:'wrap', animation:'fadeUp 0.55s ease 0.20s both' }}>
            <Link
              href="/#auditoria"
              style={{ background:'#2563FF', color:'#fff', fontFamily:'var(--font-display)', fontWeight:600, fontSize:15, padding:'14px 30px', borderRadius:8, textDecoration:'none', boxShadow:'0 0 28px rgba(37,99,255,0.35)', transition:'background 0.2s, box-shadow 0.2s', display:'inline-block' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background='#1d4fd8'; el.style.boxShadow='0 0 36px rgba(37,99,255,0.5)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background='#2563FF'; el.style.boxShadow='0 0 28px rgba(37,99,255,0.35)' }}
            >
              Solicitar auditoría gratuita →
            </Link>
            <Link
              href="#proceso"
              style={{ background:'transparent', color:'#fff', fontFamily:'var(--font-display)', fontWeight:500, fontSize:15, padding:'14px 30px', borderRadius:8, textDecoration:'none', border:'1px solid rgba(255,255,255,0.12)', transition:'border-color 0.2s, background 0.2s', display:'inline-block' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor='rgba(255,255,255,0.25)'; el.style.background='rgba(255,255,255,0.04)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor='rgba(255,255,255,0.12)'; el.style.background='transparent' }}
            >
              Ver mi proceso de 5 pasos
            </Link>
          </div>

          {/* Trust signal chips */}
          <div className="hero-chips" style={{ display:'flex', gap:8, flexWrap:'wrap', animation:'fadeUp 0.55s ease 0.25s both' }}>

            {/* Chip 1 — blue */}
            <span style={{ display:'inline-flex', alignItems:'center', gap:6, background:'rgba(37,99,255,0.07)', border:'1px solid rgba(37,99,255,0.2)', color:'#93C5FD', borderRadius:999, fontSize:12, fontWeight:500, padding:'6px 13px', fontFamily:'var(--font-body)' }}>
              <span style={iconRing('rgba(37,99,255,0.15)', 'rgba(37,99,255,0.4)')}>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1.5 4L3 5.5L6.5 2.5" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              Sin compromiso ni presión de venta
            </span>

            {/* Chip 2 — indigo */}
            <span style={{ display:'inline-flex', alignItems:'center', gap:6, background:'rgba(99,102,241,0.07)', border:'1px solid rgba(99,102,241,0.2)', color:'#C4B5FD', borderRadius:999, fontSize:12, fontWeight:500, padding:'6px 13px', fontFamily:'var(--font-body)' }}>
              <span style={iconRing('rgba(99,102,241,0.15)', 'rgba(99,102,241,0.4)')}>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1.5 4L3 5.5L6.5 2.5" stroke="#C4B5FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              Respondo en menos de 48h
            </span>

            {/* Chip 3 — green */}
            <span style={{ display:'inline-flex', alignItems:'center', gap:6, background:'rgba(22,163,74,0.07)', border:'1px solid rgba(22,163,74,0.2)', color:'#4ADE80', borderRadius:999, fontSize:12, fontWeight:500, padding:'6px 13px', fontFamily:'var(--font-body)' }}>
              <span style={iconRing('rgba(22,163,74,0.15)', 'rgba(22,163,74,0.4)')}>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1.5 4L3 5.5L6.5 2.5" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              IA + estrategia humana
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

          {/* Sticker 1 — Sin plantillas genéricas (blue) */}
          <div className="hero-s1" style={stickerStyle('blue')}>
            <span style={iconRing('rgba(37,99,255,0.15)', 'rgba(37,99,255,0.4)')}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5L4 7L8 3" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Sin plantillas genéricas
          </div>

          {/* Sticker 2 — Orientado a conversión (violet) */}
          <div className="hero-s2" style={stickerStyle('violet')}>
            <span style={iconRing('rgba(99,102,241,0.15)', 'rgba(99,102,241,0.4)')}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 8L3.5 5L6 6.5L9 2" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Orientado a conversión
          </div>

          {/* Sticker 3 — Estrategia real (green) */}
          <div className="hero-s3" style={stickerStyle('green')}>
            <span style={iconRing('rgba(52,211,153,0.12)', 'rgba(52,211,153,0.35)')}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 1L8.5 3V5.5C8.5 7.3 6.9 8.8 5 9.2C3.1 8.8 1.5 7.3 1.5 5.5V3L5 1Z" stroke="#6EE7B7" strokeWidth="1.8" strokeLinejoin="round"/>
                <path d="M3.5 5L4.5 6L6.5 4" stroke="#6EE7B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Estrategia real
          </div>

          {/* Sticker 4 — Respuesta en 48h (blue) */}
          <div className="hero-s4" style={stickerStyle('blue')}>
            <span style={iconRing('rgba(37,99,255,0.15)', 'rgba(37,99,255,0.4)')}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <circle cx="5" cy="5" r="4" stroke="#93C5FD" strokeWidth="1.8"/>
                <path d="M5 2.5V5L6.5 7" stroke="#93C5FD" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </span>
            Respuesta en 48h
          </div>

          {/* Sticker 5 — IA + criterio humano (violet) */}
          <div className="hero-s5" style={stickerStyle('violet')}>
            <span style={iconRing('rgba(99,102,241,0.15)', 'rgba(99,102,241,0.4)')}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 1L5.8 3.5H8.5L6.3 5.2L7 8L5 6.5L3 8L3.7 5.2L1.5 3.5H4.2L5 1Z" stroke="#C4B5FD" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </span>
            IA + criterio humano
          </div>

        </div>
      </section>
    </>
  )
}
