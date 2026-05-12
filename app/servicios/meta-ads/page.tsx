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
// Words of the title — index >= 9 are the second sentence (blue)
const TITLE_WORDS = 'Tu próximo cliente ya está buscando lo que ofreces. ¿Apareces tú o aparece tu competencia?'.split(' ')
const SECOND_LINE_START = 9 // "¿Apareces" onwards

const PLATFORMS = [
  {
    name: 'Meta Ads',
    sub: 'Instagram & Facebook',
    color: '#0866FF',
    logo: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <rect width="52" height="52" rx="12" fill="rgba(8,102,255,0.12)"/>
        {/* Meta wordmark "M" infinity shape simplified */}
        <path
          d="M8 32.5C8 28.5 10.5 24 14.5 24C17 24 19 25.8 21 28.5C22.8 25.8 25.2 22 28.5 22C33.5 22 36 27 36 32.5C36 36.5 34 39 31 39C28.5 39 26.5 37 24.5 34C22.5 37 20.5 39 17.5 39C13 39 8 36 8 32.5Z"
          fill="none" stroke="#0866FF" strokeWidth="2.2" strokeLinejoin="round"
        />
        <path
          d="M36 22C38.5 22 44 24.5 44 32.5C44 37 42 39 39.5 39C37.5 39 35.5 37.5 34 35"
          fill="none" stroke="#0866FF" strokeWidth="2.2" strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: 'Google Ads',
    sub: 'Búsqueda, Display & YouTube',
    color: '#4285F4',
    logo: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <rect width="52" height="52" rx="12" fill="rgba(66,133,244,0.12)"/>
        {/* Google "G" colorful */}
        <path
          d="M38.5 26.3c0-.9-.08-1.8-.22-2.65H26v5h7.02a6 6 0 01-2.6 3.93v3.27h4.2c2.46-2.27 3.88-5.6 3.88-9.55z"
          fill="#4285F4"
        />
        <path
          d="M26 39c3.52 0 6.47-1.17 8.62-3.17l-4.2-3.27C29.2 33.5 27.72 34 26 34c-3.4 0-6.28-2.3-7.31-5.38h-4.34v3.38A13 13 0 0026 39z"
          fill="#34A853"
        />
        <path
          d="M18.69 28.62A7.8 7.8 0 0118.25 26c0-.9.16-1.78.44-2.62v-3.38h-4.34A13 13 0 0013 26c0 2.1.5 4.08 1.35 5.88l4.34-3.26z"
          fill="#FBBC05"
        />
        <path
          d="M26 18.62c1.92 0 3.63.66 4.98 1.95l3.73-3.73C32.46 14.68 29.5 13 26 13a13 13 0 00-11.65 7.12l4.34 3.38C19.72 20.92 22.6 18.62 26 18.62z"
          fill="#EA4335"
        />
      </svg>
    ),
  },
]

const PROBLEMS = [
  {
    title: 'Invertí en publicidad y no recuperé ni lo que gasté',
    desc: 'Una campaña mal configurada quema el presupuesto sin resultados. La segmentación incorrecta, los creativos sin estrategia y los objetivos mal definidos son la causa número uno de que la publicidad digital no funcione.',
  },
  {
    title: 'No sé si mis anuncios están funcionando o tirando dinero',
    desc: 'Sin un seguimiento correcto no puedes saber qué funciona y qué no. Muchos negocios invierten en publicidad a ciegas, sin datos claros de cuánto les cuesta cada cliente conseguido.',
  },
  {
    title: 'Intenté hacer los anuncios yo mismo y fue un desastre',
    desc: 'Meta Ads y Google Ads tienen una curva de aprendizaje real. Sin conocer las opciones de segmentación, los tipos de campaña y la optimización continua, es muy fácil gastar mucho y conseguir poco.',
  },
  {
    title: 'Mi competencia aparece en los primeros resultados y yo no',
    desc: 'Mientras tú no inviertes en publicidad, tu competencia está captando a tus clientes potenciales en Google y en Instagram. Cada día sin anuncios es un día que alguien más se lleva ese cliente.',
  },
]

const INCLUDES = [
  'Análisis previo de tu negocio, competencia y público objetivo',
  'Configuración completa de la campaña desde cero',
  'Diseño de creatividades y textos publicitarios',
  'Segmentación precisa por ubicación, edad, intereses y comportamiento',
  'Seguimiento de conversiones correctamente implementado',
  'Optimización continua semanal de pujas y creatividades',
  'Informe mensual con métricas reales: coste por lead, ROAS y ROI',
  'Gestión tanto de Meta Ads como de Google Ads',
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
      Quiero una campaña que funcione
    </Link>
  )
}

/* ── Page ────────────────────────────────────────────────── */
export default function MetaAdsPage() {
  const isMobile = useIsMobile()

  return (
    <>
      <style>{`
        .ma-problems  { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .ma-includes  { display: grid; grid-template-columns: 1fr 1fr; gap: 16px 40px; }
        .ma-split     { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
        .ma-platforms { display: flex; gap: 24px; justify-content: center; flex-wrap: wrap; }
        .ma-plat-card {
          display: flex; flex-direction: column; align-items: center; gap: 16px;
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px; padding: 40px 56px; cursor: default;
          transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s; min-width: 220px;
        }
        .ma-plat-card:hover { transform: scale(1.04); border-color: rgba(37,99,255,0.35); box-shadow: 0 8px 32px rgba(37,99,255,0.14); }
        /* Blobs — hidden on mobile */
        .ma-blob { position: absolute; border-radius: 50%; pointer-events: none; z-index: 0; }
        /* Aurora — hidden on mobile */
        .ma-aurora { display: block; }
        @keyframes maAuroraMove1 {
          0%   { transform: translate(0px, 0px) scale(1); }
          100% { transform: translate(30px, -30px) scale(1.1); }
        }
        @keyframes maAuroraMove2 {
          0%   { transform: translate(0px, 0px) scale(1); }
          100% { transform: translate(-20px, 20px) scale(1.15); }
        }
        @keyframes maAuroraMove3 {
          0%   { transform: translate(0px, 0px) scale(1); }
          100% { transform: translate(20px, -20px) scale(0.95); }
        }
        @media (max-width: 768px) {
          .ma-problems  { grid-template-columns: 1fr; }
          .ma-includes  { grid-template-columns: 1fr; }
          .ma-split     { grid-template-columns: 1fr; gap: 36px; }
          .ma-platforms { gap: 16px; }
          .ma-plat-card { padding: 28px 36px; min-width: 140px; }
          .ma-blob      { display: none; }
          .ma-aurora    { display: none; }
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
      <section style={{ backgroundColor: '#0B0F1A', padding: '60px 5% 100px', position: 'relative', overflow: 'hidden' }}>
        {/* Aurora — desktop only */}
        <div className="ma-aurora" style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', width: 720, height: 720, top: -200, right: -100, borderRadius: '50%', background: 'radial-gradient(circle, rgba(66,133,244,0.35) 0%, transparent 70%)', filter: 'blur(60px)', animation: 'maAuroraMove1 8s ease-in-out infinite alternate' }} />
          <div style={{ position: 'absolute', width: 600, height: 600, bottom: -100, left: -100, borderRadius: '50%', background: 'radial-gradient(circle, rgba(8,102,255,0.30) 0%, transparent 70%)', filter: 'blur(70px)', animation: 'maAuroraMove2 10s ease-in-out infinite alternate' }} />
          <div style={{ position: 'absolute', width: 480, height: 480, top: '50%', left: '40%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)', filter: 'blur(40px)', animation: 'maAuroraMove3 12s ease-in-out infinite alternate' }} />
        </div>

        <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Fade isMobile={isMobile} mode="enter" delay={0}>
            <div style={{ width: 40, height: 2, background: '#2563FF', borderRadius: 2, marginBottom: 14 }} />
            <span style={labelStyle}>Meta Ads &amp; Google Ads</span>
          </Fade>

          {/* Title — stagger words on desktop, plain on mobile */}
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? '2.2rem' : 'clamp(30px, 4.5vw, 58px)', fontWeight: 800, color: '#F1F5F9', margin: '0 0 24px', lineHeight: 1.15, wordBreak: 'break-word', overflowWrap: 'break-word', width: '100%' }}>
            {isMobile
              ? TITLE_WORDS.map((word, i) => (
                  <span
                    key={i}
                    style={{ marginRight: '0.28em', ...(i >= SECOND_LINE_START ? { color: '#2563FF' } : {}) }}
                  >
                    {word}
                  </span>
                ))
              : TITLE_WORDS.map((word, i) => (
                  <MotionWrapper
                    key={i}
                    style={{ display: 'inline-block', marginRight: '0.28em', ...(i >= SECOND_LINE_START ? { color: '#2563FF' } : {}) }}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  >
                    {word}
                  </MotionWrapper>
                ))
            }
          </h1>

          <Fade isMobile={isMobile} mode="enter" delay={1.2}>
            <p style={{ color: '#94A3B8', fontSize: 'clamp(15px, 1.5vw, 17px)', lineHeight: 1.78, fontFamily: 'var(--font-body)', fontWeight: 300, maxWidth: 620, margin: '0 0 36px' }}>
              Creo y gestiono campañas de publicidad en Meta Ads y Google Ads para que tu negocio llegue a las personas correctas, en el momento exacto en que están listas para comprar.
            </p>
          </Fade>

          <Fade isMobile={isMobile} mode="enter" delay={1.4}>
            <CTAButton />
          </Fade>
        </div>
      </section>

      {/* ── S2: PLATAFORMAS ──────────────────────────────────── */}
      <section style={{ backgroundColor: '#0F172A', background: 'linear-gradient(180deg, #0B0F1A 0%, #0F172A 100%)', padding: '70px 5%', borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="ma-blob" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 300, background: 'radial-gradient(ellipse, rgba(66,133,244,0.07) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Fade isMobile={isMobile}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#475569', marginBottom: 36 }}>
              Plataformas que gestiono
            </p>
          </Fade>
          <div className="ma-platforms">
            {PLATFORMS.map((p, i) => (
              <Fade key={p.name} isMobile={isMobile} delay={i * 0.2}>
                <div className="ma-plat-card">
                  {p.logo}
                  <div>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: p.color, margin: '0 0 4px', letterSpacing: '-0.01em' }}>{p.name}</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, fontWeight: 400, color: '#64748B', margin: 0 }}>{p.sub}</p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient divider */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent 0%, rgba(66,133,244,0.35) 40%, rgba(8,102,255,0.25) 60%, transparent 100%)' }} />

      {/* ── S3: PROBLEMAS ────────────────────────────────────── */}
      <section style={{ backgroundColor: '#0D1117', padding: '80px 5% 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '60%', height: '120%', borderRight: '1px solid rgba(99,102,241,0.03)', transform: 'rotate(15deg)', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '60%', height: '120%', borderLeft: '1px solid rgba(66,133,244,0.03)', transform: 'rotate(-15deg)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="ma-blob" style={{ bottom: '-30%', left: '-15%', width: 700, height: 700, background: 'rgba(8,102,255,0.09)', filter: 'blur(120px)' }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Fade isMobile={isMobile} style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 800, color: '#F1F5F9', margin: '0 0 12px', lineHeight: 1.2 }}>
              ¿Cuál de estas situaciones te suena?
            </h2>
            <p style={{ color: '#64748B', fontSize: 14.5, fontFamily: 'var(--font-body)', fontWeight: 300, margin: 0 }}>
              Si te identificas con alguna, tu publicidad necesita una revisión.
            </p>
          </Fade>
          <div className="ma-problems">
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
        <div className="ma-blob" style={{ top: '-10%', right: '-8%', width: 560, height: 560, background: 'rgba(66,133,244,0.09)', filter: 'blur(90px)' }} />
        <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Fade isMobile={isMobile} style={{ marginBottom: 48 }}>
            <span style={labelStyle}>Lo que recibes</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 800, color: '#F1F5F9', margin: 0, lineHeight: 1.2 }}>
              Todo lo que incluye la gestión de tus campañas
            </h2>
          </Fade>
          <div className="ma-includes">
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

      {/* ── S5: PÁRRAFO DESCRIPTIVO ──────────────────────────── */}
      <section style={{ backgroundColor: '#0F172A', padding: '100px 5%', position: 'relative', overflow: 'hidden' }}>
        <div className="ma-blob" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 300, background: 'radial-gradient(ellipse, rgba(66,133,244,0.05) 0%, transparent 70%)', filter: 'blur(50px)' }} />
        <Fade isMobile={isMobile} style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ position: 'relative', background: '#0F172A', padding: '36px 36px 36px 40px', borderRadius: '0 16px 16px 0' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: 'linear-gradient(to bottom, #2563FF, #6366F1)', borderRadius: 2, boxShadow: '0 0 18px 3px rgba(37,99,255,0.38)' }} />
            <p style={{ color: '#94A3B8', fontSize: 15.5, lineHeight: 1.88, fontFamily: 'var(--font-body)', fontWeight: 300, margin: '0 0 24px' }}>
              Las empresas que usan Google Ads de forma correcta obtienen de media 2 euros por cada euro invertido. En Meta Ads, una campaña bien segmentada puede reducir el coste por cliente hasta un 20% respecto a métodos tradicionales. Pero estos números solo se consiguen cuando la campaña está bien construida desde el principio: con el objetivo correcto, la segmentación adecuada, los creativos probados y un seguimiento que permita tomar decisiones basadas en datos reales. La publicidad digital no es cara cuando funciona. Lo caro es pagar por anuncios que no convierten porque nadie los ha optimizado. Gestiono tus campañas con el mismo cuidado que pondría en las mías propias: analizando cada euro invertido, ajustando cada semana lo que no rinde y escalando lo que sí funciona.
            </p>
            <p style={{ color: '#4B5A72', fontSize: 13, fontStyle: 'italic', fontFamily: 'var(--font-body)', margin: 0 }}>
              Gestiono campañas de Meta Ads y Google Ads para negocios en Córdoba, Granada y en toda España.
            </p>
          </div>
        </Fade>
      </section>

      {/* Gradient divider */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent 0%, rgba(66,133,244,0.2) 50%, transparent 100%)' }} />

      {/* ── S6: IMAGEN + TEXTO ───────────────────────────────── */}
      <section style={{ backgroundColor: '#0B0F1A', padding: '100px 5%', position: 'relative', overflow: 'hidden' }}>
        <div className="ma-blob" style={{ bottom: '-20%', left: '-10%', width: 500, height: 500, background: 'rgba(8,102,255,0.07)', filter: 'blur(90px)' }} />
        <div className="ma-split" style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Image — enters from left on desktop */}
          {isMobile
            ? (
              <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', aspectRatio: '4/3' }}>
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&fit=crop"
                  alt="Análisis de campañas de publicidad digital"
                  fill loading="lazy" decoding="async"
                  style={{ objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(66,133,244,0.08) 0%, transparent 60%)' }} />
              </div>
            )
            : (
              <MotionWrapper
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7 }}
              >
                <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', aspectRatio: '4/3' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&fit=crop"
                    alt="Análisis de campañas de publicidad digital"
                    fill loading="lazy" decoding="async"
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(66,133,244,0.08) 0%, transparent 60%)' }} />
                </div>
              </MotionWrapper>
            )
          }
          {/* Text — enters from right on desktop */}
          {isMobile
            ? (
              <div>
                <span style={labelStyle}>La diferencia</span>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.8vw, 34px)', fontWeight: 800, color: '#F1F5F9', margin: '0 0 18px', lineHeight: 1.2 }}>
                  Una campaña bien hecha no gasta. Invierte.
                </h2>
                <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.78, fontFamily: 'var(--font-body)', fontWeight: 300, margin: '0 0 28px' }}>
                  Antes de activar un solo anuncio analizo tu negocio, tu competencia y tu cliente ideal. Cada euro tiene que tener una razón para estar ahí.
                </p>
                <Link href="/proceso" style={{ color: '#60A5FA', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  Ver proceso completo →
                </Link>
              </div>
            )
            : (
              <MotionWrapper
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <span style={labelStyle}>La diferencia</span>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.8vw, 34px)', fontWeight: 800, color: '#F1F5F9', margin: '0 0 18px', lineHeight: 1.2 }}>
                  Una campaña bien hecha no gasta. Invierte.
                </h2>
                <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.78, fontFamily: 'var(--font-body)', fontWeight: 300, margin: '0 0 28px' }}>
                  Antes de activar un solo anuncio analizo tu negocio, tu competencia y tu cliente ideal. Cada euro tiene que tener una razón para estar ahí.
                </p>
                <Link
                  href="/proceso"
                  style={{ color: '#60A5FA', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'gap 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.gap = '10px' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.gap = '6px' }}
                >
                  Ver proceso completo →
                </Link>
              </MotionWrapper>
            )
          }
        </div>
      </section>

      {/* ── S7: CTA FINAL ────────────────────────────────────── */}
      <section style={{ backgroundColor: '#0F172A', background: 'linear-gradient(135deg, #0F172A 0%, #141C2E 50%, #0F172A 100%)', padding: '110px 5%', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="ma-blob" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 500, background: 'radial-gradient(ellipse, rgba(8,102,255,0.14) 0%, rgba(66,133,244,0.09) 35%, transparent 70%)', filter: 'blur(60px)' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <Fade isMobile={isMobile}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.5vw, 46px)', fontWeight: 800, color: '#F1F5F9', margin: '0 0 18px', lineHeight: 1.15 }}>
              Reserva una sesión de{' '}
              <span style={gradText}>consultoría gratuita</span>
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 16, lineHeight: 1.75, fontFamily: 'var(--font-body)', fontWeight: 300, maxWidth: 560, margin: '0 auto 40px' }}>
              Analizo tu situación actual y te digo exactamente qué tipo de campaña necesitas y cuánto deberías invertir para ver resultados reales.
            </p>
            <CTAButton />
          </Fade>
        </div>
      </section>
    </>
  )
}
