'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Check } from 'lucide-react'

/* ── Dynamic imports — framer-motion never loads on mobile ── */
const MotionWrapper = dynamic(
  () => import('../../components/MotionWrapper'),
  { ssr: false }
)

/* ── Mobile detection (starts true = safe default) ──────── */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(true)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return isMobile
}

/* ── Fade helper — plain div on mobile, animated on desktop ─ */
type FadeProps = {
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
  delay?: number
  mode?: 'enter' | 'inView'
  isMobile: boolean
}
function Fade({ children, style, className, delay = 0, mode = 'inView', isMobile }: FadeProps) {
  if (isMobile) {
    return <div style={style} className={className}>{children}</div>
  }
  if (mode === 'enter') {
    return (
      <MotionWrapper
        style={style} className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
      >
        {children}
      </MotionWrapper>
    )
  }
  return (
    <MotionWrapper
      style={style} className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </MotionWrapper>
  )
}

/* ── Shared styles ───────────────────────────────────────── */
const gradText: React.CSSProperties = {
  background: 'linear-gradient(100deg, #3B82F6, #818CF8)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}
const labelStyle: React.CSSProperties = {
  display: 'inline-block',
  fontFamily: 'var(--font-display)',
  fontSize: 11, fontWeight: 700,
  letterSpacing: '0.13em',
  textTransform: 'uppercase',
  color: '#3B82F6',
  marginBottom: 18,
}

/* ── Data ────────────────────────────────────────────────── */
const TITLE_WORDS = 'Gestiono tu comunidad: mucho más que publicar en redes sociales'.split(' ')

const NETWORKS = [
  {
    name: 'Instagram', color: '#E1306C',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <rect x="5" y="5" width="28" height="28" rx="8" stroke="#E1306C" strokeWidth="2"/>
        <circle cx="19" cy="19" r="6" stroke="#E1306C" strokeWidth="2"/>
        <circle cx="27.5" cy="10.5" r="1.5" fill="#E1306C"/>
      </svg>
    ),
  },
  {
    name: 'TikTok', color: '#F1F5F9',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <path d="M25 8c.5 2.8 2.2 4.8 5 5.5v4c-1.8-.1-3.5-.7-5-1.7v7.7c0 4.7-3.8 8.5-8.5 8.5S8 28.2 8 23.5 11.8 15 16.5 15c.5 0 .9 0 1.3.1v4.1c-.4-.1-.9-.2-1.3-.2-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5V8h4z" fill="#F1F5F9"/>
      </svg>
    ),
  },
  {
    name: 'Facebook', color: '#1877F2',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <path d="M34 19C34 10.7 27.3 4 19 4S4 10.7 4 19c0 7.5 5.5 13.7 12.6 14.8V23.3h-3.8V19h3.8v-3.3c0-3.7 2.2-5.8 5.6-5.8 1.6 0 3.3.3 3.3.3v3.7H23c-1.8 0-2.4 1.1-2.4 2.3V19h4l-.6 4.3h-3.4v10.5C28.5 32.7 34 26.5 34 19z" fill="#1877F2"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn', color: '#0A66C2',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <rect x="4" y="4" width="30" height="30" rx="6" stroke="#0A66C2" strokeWidth="2"/>
        <path d="M11 15h4v14h-4zM13 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM23.5 15c-2 0-3.5 1.2-3.5 3v-3H16v14h4v-7c0-1.7 1.3-3 3-3s3 1.3 3 3v7h4v-8c0-3.3-2.7-6-6.5-6z" fill="#0A66C2"/>
      </svg>
    ),
  },
  {
    name: 'YouTube', color: '#FF0000',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <rect x="3" y="9" width="32" height="20" rx="6" stroke="#FF0000" strokeWidth="2"/>
        <path d="M15.5 14.5l9 4.5-9 4.5v-9z" fill="#FF0000"/>
      </svg>
    ),
  },
]

const PROBLEMS = [
  {
    title: 'Tienes redes sociales pero no generan nada',
    desc: 'Llevas meses publicando sin estrategia, sin constancia y sin ver resultados. Tus seguidores no crecen, nadie interactúa y, lo más importante, nadie te contacta para comprarte.',
  },
  {
    title: 'Publicas cuando puedes, no cuando debes',
    desc: 'El algoritmo premia la constancia. Cada semana que no publicas, Instagram y TikTok te penalizan y te hacen invisible. Tu competencia sí publica. Y se lleva a tus clientes.',
  },
  {
    title: 'Tu contenido no refleja lo bueno que eres',
    desc: 'Haces un trabajo excelente pero tus redes no lo transmiten. Fotos mal editadas, vídeos sin estrategia, textos sin gancho. El cliente potencial te ve y sigue scrolleando.',
  },
  {
    title: 'No tienes tiempo para llevar tus redes y tu negocio a la vez',
    desc: 'Gestionar redes sociales bien requiere entre 15 y 20 horas semanales. Horas que necesitas para lo que de verdad genera dinero: tu negocio.',
  },
]

const INCLUDES = [
  'Estrategia de contenido personalizada para tu marca',
  'Diseño de publicaciones adaptadas a cada red social',
  'Edición de vídeo para Reels y TikTok',
  'Calendario editorial mensual',
  'Gestión de comentarios y mensajes directos',
  'Análisis mensual de resultados y ajuste de estrategia',
  'Crecimiento orgánico de comunidad',
  'Hashtag research y optimización de perfil',
]

/* ── CTA Button ──────────────────────────────────────────── */
function CTAButton() {
  return (
    <Link
      href="/contacto"
      style={{ display: 'inline-block', background: '#2563FF', color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, padding: '14px 32px', borderRadius: 8, textDecoration: 'none', boxShadow: '0 0 28px rgba(37,99,255,0.35)', transition: 'background 0.2s, box-shadow 0.2s' }}
      onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = '#1d4fd8'; el.style.boxShadow = '0 0 36px rgba(37,99,255,0.5)' }}
      onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = '#2563FF'; el.style.boxShadow = '0 0 28px rgba(37,99,255,0.35)' }}
    >
      Quiero que gestionen mis redes
    </Link>
  )
}

/* ── Page ────────────────────────────────────────────────── */
export default function CommunityManagerPage() {
  const isMobile = useIsMobile()

  return (
    <>
      <style>{`
        .cm-problems  { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .cm-includes  { display: grid; grid-template-columns: 1fr 1fr; gap: 16px 40px; }
        .cm-split     { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
        .cm-networks  { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        .cm-net-card  {
          display: flex; flex-direction: column; align-items: center; gap: 12px;
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px; padding: 20px 32px; cursor: default;
          transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s; min-width: 140px;
        }
        .cm-net-card:hover { transform: scale(1.05); border-color: rgba(37,99,255,0.35); box-shadow: 0 8px 28px rgba(37,99,255,0.12); }
        /* Blobs — hidden on mobile (no GPU filter:blur cost) */
        .cm-blob { position: absolute; border-radius: 50%; pointer-events: none; z-index: 0; }
        /* Network SVG — hidden on mobile */
        .cm-network-svg { display: block; }
        @keyframes flowLine {
          0%   { stroke-dashoffset: 1000; opacity: 0; }
          20%  { opacity: 0.6; }
          80%  { opacity: 0.6; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes cmPulse {
          0%, 100% { r: 3; opacity: 1; }
          50%       { r: 6; opacity: 0.5; }
        }
        @media (max-width: 768px) {
          .cm-problems    { grid-template-columns: 1fr; }
          .cm-includes    { grid-template-columns: 1fr; }
          .cm-split       { grid-template-columns: 1fr; gap: 36px; }
          .cm-networks    { gap: 10px; }
          .cm-net-card    { padding: 16px 20px; min-width: 120px; }
          .cm-blob        { display: none; }
          .cm-network-svg { display: none; }
        }
      `}</style>

      {/* ── BREADCRUMB ───────────────────────────────────────── */}
      <div style={{ backgroundColor: '#0B0F1A', padding: '16px 24px', paddingTop: 86, position: 'relative', zIndex: 1 }}>
        <Link
          href="/servicios"
          style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#818CF8', textDecoration: 'none', display: 'inline-block' }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#2563FF' }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#818CF8' }}
        >
          ← Volver a Servicios
        </Link>
      </div>

      {/* ── S1: HERO ─────────────────────────────────────────── */}
      <section style={{
        backgroundColor: '#0B0F1A',
        padding: '60px max(20px, 5%) 100px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Network SVG — desktop only (cm-network-svg hidden on mobile via CSS) */}
        <svg
          className="cm-network-svg"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.12, pointerEvents: 'none', zIndex: 0 }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            {/* Drop-shadow filters per network */}
            <filter id="glowIG" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="0.4" floodColor="#E1306C" floodOpacity="0.9"/>
            </filter>
            <filter id="glowTK" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="0.4" floodColor="#ffffff" floodOpacity="0.7"/>
            </filter>
            <filter id="glowFB" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="0.4" floodColor="#1877F2" floodOpacity="0.9"/>
            </filter>
            <filter id="glowLI" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="0.4" floodColor="#0A66C2" floodOpacity="0.9"/>
            </filter>
            <filter id="glowYT" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="0.4" floodColor="#FF0000" floodOpacity="0.9"/>
            </filter>
          </defs>

          {/* ── Bezier lines from each network origin → center (50,50) ── */}

          {/* Instagram (85,20) → center */}
          <path
            d="M 85,20 C 75,25 65,35 50,50"
            fill="none" stroke="#E1306C" strokeWidth="0.5" opacity="0.6"
            filter="url(#glowIG)"
            strokeDasharray="1000"
            style={{ animation: 'flowLine 5s ease-in-out infinite', animationDelay: '0s' }}
          />
          {/* Instagram branch to LinkedIn */}
          <path
            d="M 85,20 C 80,15 72,12 60,10"
            fill="none" stroke="#E1306C" strokeWidth="0.5" opacity="0.35"
            filter="url(#glowIG)"
            strokeDasharray="1000"
            style={{ animation: 'flowLine 7s ease-in-out infinite', animationDelay: '1.2s' }}
          />

          {/* TikTok (95,45) → center */}
          <path
            d="M 95,45 C 82,44 68,47 50,50"
            fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.4"
            filter="url(#glowTK)"
            strokeDasharray="1000"
            style={{ animation: 'flowLine 6s ease-in-out infinite', animationDelay: '0.8s' }}
          />
          {/* TikTok branch to YouTube */}
          <path
            d="M 95,45 C 90,52 82,56 70,60"
            fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.25"
            filter="url(#glowTK)"
            strokeDasharray="1000"
            style={{ animation: 'flowLine 8s ease-in-out infinite', animationDelay: '3s' }}
          />

          {/* Facebook (80,80) → center */}
          <path
            d="M 80,80 C 72,72 62,62 50,50"
            fill="none" stroke="#1877F2" strokeWidth="0.5" opacity="0.6"
            filter="url(#glowFB)"
            strokeDasharray="1000"
            style={{ animation: 'flowLine 4.5s ease-in-out infinite', animationDelay: '1.5s' }}
          />
          {/* Facebook branch to YouTube */}
          <path
            d="M 80,80 C 76,72 73,66 70,60"
            fill="none" stroke="#1877F2" strokeWidth="0.5" opacity="0.35"
            filter="url(#glowFB)"
            strokeDasharray="1000"
            style={{ animation: 'flowLine 6.5s ease-in-out infinite', animationDelay: '0.4s' }}
          />

          {/* LinkedIn (60,10) → center */}
          <path
            d="M 60,10 C 58,22 55,36 50,50"
            fill="none" stroke="#0A66C2" strokeWidth="0.5" opacity="0.6"
            filter="url(#glowLI)"
            strokeDasharray="1000"
            style={{ animation: 'flowLine 7s ease-in-out infinite', animationDelay: '2.2s' }}
          />

          {/* YouTube (70,60) → center */}
          <path
            d="M 70,60 C 64,57 58,54 50,50"
            fill="none" stroke="#FF0000" strokeWidth="0.5" opacity="0.6"
            filter="url(#glowYT)"
            strokeDasharray="1000"
            style={{ animation: 'flowLine 5.5s ease-in-out infinite', animationDelay: '0.6s' }}
          />
          {/* YouTube branch to Instagram */}
          <path
            d="M 70,60 C 74,45 78,32 85,20"
            fill="none" stroke="#FF0000" strokeWidth="0.5" opacity="0.3"
            filter="url(#glowYT)"
            strokeDasharray="1000"
            style={{ animation: 'flowLine 9s ease-in-out infinite', animationDelay: '4s' }}
          />

          {/* ── Icon nodes at each origin ── */}
          {/* Each group: bg rect + glow circle + scaled 24×24 icon path */}

          {/* Instagram at (85,20) */}
          <g>
            <rect x="80.5" y="15.5" width="9" height="9" rx="2" fill="#E1306C" opacity="0.06"/>
            <circle cx="85" cy="20" r="4.5" fill="#E1306C" opacity="0.06" filter="url(#glowIG)">
              <animate attributeName="opacity" values="0.15;0.28;0.15" dur="2s" repeatCount="indefinite" begin="0s"/>
            </circle>
            <g transform="translate(85 20) scale(0.375) translate(-12 -12)">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="white" opacity="0.15"/>
            </g>
          </g>

          {/* TikTok at (95,45) */}
          <g>
            <rect x="90.5" y="40.5" width="9" height="9" rx="2" fill="#ffffff" opacity="0.06"/>
            <circle cx="95" cy="45" r="4.5" fill="#ffffff" opacity="0.06" filter="url(#glowTK)">
              <animate attributeName="opacity" values="0.12;0.22;0.12" dur="2.4s" repeatCount="indefinite" begin="0.5s"/>
            </circle>
            <g transform="translate(95 45) scale(0.375) translate(-12 -12)">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.15 8.15 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z" fill="white" opacity="0.15"/>
            </g>
          </g>

          {/* Facebook at (80,80) */}
          <g>
            <rect x="75.5" y="75.5" width="9" height="9" rx="2" fill="#1877F2" opacity="0.06"/>
            <circle cx="80" cy="80" r="4.5" fill="#1877F2" opacity="0.06" filter="url(#glowFB)">
              <animate attributeName="opacity" values="0.15;0.28;0.15" dur="1.8s" repeatCount="indefinite" begin="1s"/>
            </circle>
            <g transform="translate(80 80) scale(0.375) translate(-12 -12)">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="white" opacity="0.15"/>
            </g>
          </g>

          {/* LinkedIn at (60,10) */}
          <g>
            <rect x="55.5" y="5.5" width="9" height="9" rx="2" fill="#0A66C2" opacity="0.06"/>
            <circle cx="60" cy="10" r="4.5" fill="#0A66C2" opacity="0.06" filter="url(#glowLI)">
              <animate attributeName="opacity" values="0.15;0.28;0.15" dur="2.2s" repeatCount="indefinite" begin="0.3s"/>
            </circle>
            <g transform="translate(60 10) scale(0.375) translate(-12 -12)">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="white" opacity="0.15"/>
            </g>
          </g>

          {/* YouTube at (70,60) */}
          <g>
            <rect x="65.5" y="55.5" width="9" height="9" rx="2" fill="#FF0000" opacity="0.06"/>
            <circle cx="70" cy="60" r="4.5" fill="#FF0000" opacity="0.06" filter="url(#glowYT)">
              <animate attributeName="opacity" values="0.15;0.28;0.15" dur="2s" repeatCount="indefinite" begin="0.8s"/>
            </circle>
            <g transform="translate(70 60) scale(0.375) translate(-12 -12)">
              <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" fill="white" opacity="0.15"/>
            </g>
          </g>

          {/* Center convergence dot */}
          <circle cx="50" cy="50" r="2" fill="rgba(129,140,248,0.6)">
            <animate attributeName="r" values="2;4;2" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
          </circle>
        </svg>

        <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Fade isMobile={isMobile} mode="enter" delay={0}>
            <div style={{ width: 40, height: 2, background: '#2563FF', borderRadius: 2, marginBottom: 14 }} />
            <span style={labelStyle}>Community Manager</span>
          </Fade>

          {/* Title — stagger words on desktop, plain on mobile */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: '#F1F5F9', margin: '0 0 24px', wordBreak: 'normal', hyphens: 'none', width: '100%' }}>
            {isMobile
              ? TITLE_WORDS.map((word, i) => {
                  const isLast4 = i >= TITLE_WORDS.length - 4
                  return (
                    <span key={i} style={{ marginRight: '0.28em', ...(isLast4 ? gradText : {}) }}>
                      {word}
                    </span>
                  )
                })
              : TITLE_WORDS.map((word, i) => {
                  const isLast4 = i >= TITLE_WORDS.length - 4
                  return (
                    <MotionWrapper
                      key={i}
                      style={{ display: 'inline-block', marginRight: '0.28em', ...(isLast4 ? gradText : {}) }}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                    >
                      {word}
                    </MotionWrapper>
                  )
                })
            }
          </h1>

          <Fade isMobile={isMobile} mode="enter" delay={0.9}>
            <p style={{ color: '#94A3B8', fontSize: 'clamp(15px, 1.5vw, 17px)', lineHeight: 1.78, fontFamily: 'var(--font-body)', fontWeight: 300, maxWidth: 620, margin: '0 0 36px' }}>
              Gestión profesional de redes sociales para negocios y creadores de contenido. Estrategia, diseño, edición de vídeo y crecimiento de comunidad. Todo incluido.
            </p>
          </Fade>

          <Fade isMobile={isMobile} mode="enter" delay={1.05}>
            <CTAButton />
          </Fade>
        </div>
      </section>

      {/* ── S2: REDES SOCIALES ───────────────────────────────── */}
      <section style={{ backgroundColor: '#0F172A', background: 'linear-gradient(180deg, #0B0F1A 0%, #0F172A 100%)', padding: '60px 5%', borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="cm-blob" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 300, background: 'radial-gradient(ellipse, rgba(37,99,255,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Fade isMobile={isMobile}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#475569', marginBottom: 28 }}>
              Redes que gestiono
            </p>
          </Fade>
          <div className="cm-networks">
            {NETWORKS.map((net, i) => (
              <Fade key={net.name} isMobile={isMobile} delay={i * 0.12}>
                <div className="cm-net-card">
                  {net.icon}
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: net.color, letterSpacing: '0.02em' }}>
                    {net.name}
                  </span>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient divider */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent 0%, rgba(37,99,255,0.35) 40%, rgba(99,102,241,0.25) 60%, transparent 100%)' }} />

      {/* ── S3: PROBLEMAS ────────────────────────────────────── */}
      <section style={{ backgroundColor: '#0D1117', padding: '80px 5% 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '60%', height: '120%', borderRight: '1px solid rgba(99,102,241,0.03)', transform: 'rotate(15deg)', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '60%', height: '120%', borderLeft: '1px solid rgba(37,99,255,0.03)', transform: 'rotate(-15deg)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="cm-blob" style={{ bottom: '-30%', left: '-15%', width: 700, height: 700, background: 'rgba(99,102,241,0.10)', filter: 'blur(120px)' }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Fade isMobile={isMobile} style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 800, color: '#F1F5F9', margin: '0 0 12px', lineHeight: 1.2 }}>
              ¿Cuál de estas situaciones te suena?
            </h2>
            <p style={{ color: '#64748B', fontSize: 14.5, fontFamily: 'var(--font-body)', fontWeight: 300, margin: 0 }}>
              Si te identificas con alguna, tus redes necesitan una gestión profesional.
            </p>
          </Fade>
          <div className="cm-problems">
            {PROBLEMS.map((p, i) => (
              <Fade key={i} isMobile={isMobile} delay={i * 0.1}>
                <div style={{ background: '#0F172A', borderLeft: '3px solid #2563FF', borderRadius: '0 14px 14px 0', padding: '24px 26px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 15.5, fontWeight: 700, color: '#F1F5F9', margin: '0 0 10px', lineHeight: 1.35 }}>{p.title}</h3>
                  <p style={{ color: '#94A3B8', fontSize: 13.5, lineHeight: 1.72, fontFamily: 'var(--font-body)', fontWeight: 300, margin: 0 }}>{p.desc}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient divider */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.2) 50%, transparent 100%)' }} />

      {/* ── S4: LO QUE INCLUYE ───────────────────────────────── */}
      <section style={{ backgroundColor: '#0B0F1A', padding: '100px 5%', position: 'relative', overflow: 'hidden' }}>
        <div className="cm-blob" style={{ top: '-10%', right: '-8%', width: 560, height: 560, background: 'rgba(99,102,241,0.10)', filter: 'blur(90px)' }} />
        <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Fade isMobile={isMobile} style={{ marginBottom: 48 }}>
            <span style={labelStyle}>Lo que recibes</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 800, color: '#F1F5F9', margin: 0, lineHeight: 1.2 }}>
              Todo lo que incluye la gestión de tus redes
            </h2>
          </Fade>
          <div className="cm-includes">
            {INCLUDES.map((item, i) => (
              <Fade key={i} isMobile={isMobile} delay={i * 0.09}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{ width: 26, height: 26, borderRadius: 8, background: 'rgba(37,99,255,0.1)', border: '1px solid rgba(37,99,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                    <Check size={14} color="#2563FF" strokeWidth={2.5} />
                  </div>
                  <span style={{ color: '#CBD5E1', fontSize: 14.5, fontFamily: 'var(--font-body)', fontWeight: 400, lineHeight: 1.55 }}>{item}</span>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient divider */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent 0%, rgba(37,99,255,0.18) 50%, transparent 100%)' }} />

      {/* ── S5: PÁRRAFO DESCRIPTIVO 1 ────────────────────────── */}
      <section style={{ backgroundColor: '#0F172A', padding: '100px 5%', position: 'relative', overflow: 'hidden' }}>
        <div className="cm-blob" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 300, background: 'radial-gradient(ellipse, rgba(37,99,255,0.06) 0%, transparent 70%)', filter: 'blur(50px)' }} />
        <Fade isMobile={isMobile} style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ position: 'relative', background: '#0F172A', padding: '36px 36px 36px 40px', borderRadius: '0 16px 16px 0' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: 'linear-gradient(to bottom, #2563FF, #6366F1)', borderRadius: 2, boxShadow: '0 0 18px 3px rgba(37,99,255,0.38)' }} />
            <p style={{ color: '#94A3B8', fontSize: 15.5, lineHeight: 1.88, fontFamily: 'var(--font-body)', fontWeight: 300, margin: 0 }}>
              Gestionar redes sociales no es subir fotos bonitas y esperar a que lleguen los clientes. Es entender a qué público le hablas, qué le preocupa, qué le emociona y qué le hace detenerse mientras hace scroll. Es saber que un Reel publicado el martes a las 19h puede llegar a 10.000 personas si está bien construido, y que ese mismo vídeo publicado sin estrategia puede no llegar ni a tus propios seguidores. Las redes sociales tienen reglas, y quien no las conoce está tirando tiempo y dinero. Llevo años creando contenido y gestionando comunidades, y lo que más escucho de los clientes que llegan es siempre lo mismo: contrataron a alguien que prometía mucho, publicaba poco y no sabía explicar por qué no llegaban los resultados. Eso no va a pasar aquí. Cada decisión tiene una razón, cada publicación tiene un objetivo y cada mes recibes un informe real con lo que ha funcionado y lo que vamos a mejorar.
            </p>
          </div>
        </Fade>
      </section>

      {/* Gradient divider */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.2) 50%, transparent 100%)' }} />

      {/* ── S6: PÁRRAFO DESCRIPTIVO 2 ────────────────────────── */}
      <section style={{ backgroundColor: '#0D1117', padding: '100px 5%', position: 'relative', overflow: 'hidden' }}>
        <div className="cm-blob" style={{ bottom: '-20%', right: '-10%', width: 500, height: 500, background: 'rgba(99,102,241,0.08)', filter: 'blur(90px)' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Fade isMobile={isMobile} style={{ marginBottom: 28 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2.5vw, 30px)', fontWeight: 800, color: '#F1F5F9', margin: 0, lineHeight: 1.25 }}>
              ¿Por qué tu negocio necesita una gestión de redes profesional?
            </h2>
          </Fade>
          <Fade isMobile={isMobile} delay={0.1}>
            <p style={{ color: '#94A3B8', fontSize: 15.5, lineHeight: 1.88, fontFamily: 'var(--font-body)', fontWeight: 300, margin: '0 0 24px' }}>
              En el mercado actual, ya seas un negocio local que busca visibilidad en tu ciudad, un creador de contenido que necesita proteger su marca personal o una empresa escalando procesos, las redes sociales son tu escaparate principal. No basta con estar presente — hay que ser relevante. Muchos negocios cometen el error de delegar su comunicación a herramientas automáticas o perfiles sin estrategia real detrás. Trabajo desde tres pilares que lo cambian todo: una identidad visual coherente donde tu perfil respira la misma profesionalidad que tu trabajo presencial, una estrategia de contenidos que educa, entretiene y vende, y una gestión de comunidad activa donde respondo, interactúo y humanizo tu marca para que el algoritmo trabaje a tu favor.
            </p>
            <p style={{ color: '#4B5A72', fontSize: 13, fontStyle: 'italic', fontFamily: 'var(--font-body)', margin: 0 }}>
              Ofrezco servicios de community manager para negocios y creadores de contenido en Córdoba, Granada y en toda España.
            </p>
          </Fade>
        </div>
      </section>

      {/* Gradient divider */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent 0%, rgba(37,99,255,0.18) 50%, transparent 100%)' }} />

      {/* ── S7: IMAGEN + TEXTO ───────────────────────────────── */}
      <section style={{ backgroundColor: '#0B0F1A', padding: '100px 5%', position: 'relative', overflow: 'hidden' }}>
        <div className="cm-blob" style={{ bottom: '-20%', left: '-10%', width: 500, height: 500, background: 'rgba(37,99,255,0.07)', filter: 'blur(90px)' }} />
        <div className="cm-split" style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Fade isMobile={isMobile}>
            <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', aspectRatio: '4/3' }}>
              <Image
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&q=80&fit=crop"
                alt="Gestión de redes sociales profesional"
                fill
                loading="lazy"
                decoding="async"
                style={{ objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(37,99,255,0.08) 0%, transparent 60%)' }} />
            </div>
          </Fade>
          <Fade isMobile={isMobile} delay={0.1}>
            <span style={labelStyle}>El proceso</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.8vw, 34px)', fontWeight: 800, color: '#F1F5F9', margin: '0 0 18px', lineHeight: 1.2 }}>
              De perfiles abandonados a comunidades que compran
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.78, fontFamily: 'var(--font-body)', fontWeight: 300, margin: '0 0 28px' }}>
              Antes de publicar nada analizo tu marca, tu competencia y tu audiencia. Cada pieza de contenido tiene un objetivo concreto detrás.
            </p>
            <Link
              href="/proceso"
              style={{ color: '#60A5FA', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'gap 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.gap = '10px' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.gap = '6px' }}
            >
              Ver proceso completo →
            </Link>
          </Fade>
        </div>
      </section>

      {/* ── S8: CTA FINAL ────────────────────────────────────── */}
      <section style={{ backgroundColor: '#0F172A', background: 'linear-gradient(135deg, #0F172A 0%, #141C2E 50%, #0F172A 100%)', padding: '110px 5%', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="cm-blob" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 500, background: 'radial-gradient(ellipse, rgba(99,102,241,0.15) 0%, rgba(37,99,255,0.10) 35%, transparent 70%)', filter: 'blur(60px)' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <Fade isMobile={isMobile}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.5vw, 46px)', fontWeight: 800, color: '#F1F5F9', margin: '0 0 18px', lineHeight: 1.15 }}>
              Reserva una sesión de{' '}
              <span style={gradText}>consultoría gratuita</span>
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 16, lineHeight: 1.75, fontFamily: 'var(--font-body)', fontWeight: 300, maxWidth: 520, margin: '0 auto 40px' }}>
              Definamos juntos cómo llevar tu presencia digital al siguiente nivel.
            </p>
            <CTAButton />
          </Fade>
        </div>
      </section>
    </>
  )
}
