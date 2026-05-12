'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
  Check, BarChart2, Users, FileText, Activity, RefreshCw,
  Search, Target, Settings, Zap, TrendingUp,
} from 'lucide-react'

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

/* ── Fade helper ─────────────────────────────────────────── */
type FadeProps = {
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
  delay?: number
  mode?: 'enter' | 'inView'
  isMobile: boolean
}
function Fade({ children, style, className, delay = 0, mode = 'inView', isMobile }: FadeProps) {
  if (isMobile) return <div style={style} className={className}>{children}</div>
  if (mode === 'enter') {
    return (
      <MotionWrapper style={style} className={className}
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}>
        {children}
      </MotionWrapper>
    )
  }
  return (
    <MotionWrapper style={style} className={className}
      initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}>
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

/* ── Icon type ───────────────────────────────────────────── */
type LIcon = React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>

/* ── Data ────────────────────────────────────────────────── */
const TITLE_WORDS = 'Tu próximo cliente ya está buscando lo que ofreces. ¿Apareces tú o aparece tu competencia?'.split(' ')
const SECOND_LINE_START = 9

const PROBLEMS = [
  { title: 'Invertí en publicidad y no recuperé ni lo que gasté', desc: 'Una campaña mal configurada quema el presupuesto sin resultados. La segmentación incorrecta, los creativos sin estrategia y los objetivos mal definidos son la causa número uno de que la publicidad digital no funcione.' },
  { title: 'No sé si mis anuncios están funcionando o tirando dinero', desc: 'Sin un seguimiento correcto no puedes saber qué funciona y qué no. Muchos negocios invierten en publicidad a ciegas, sin datos claros de cuánto les cuesta cada cliente conseguido.' },
  { title: 'Intenté hacer los anuncios yo mismo y fue un desastre', desc: 'Meta Ads y Google Ads tienen una curva de aprendizaje real. Sin conocer las opciones de segmentación, los tipos de campaña y la optimización continua, es muy fácil gastar mucho y conseguir poco.' },
  { title: 'Mi competencia aparece en los primeros resultados y yo no', desc: 'Mientras tú no inviertes en publicidad, tu competencia está captando a tus clientes potenciales en Google y en Instagram. Cada día sin anuncios es un día que alguien más se lleva ese cliente.' },
]

const STEPS: { num: number; icon: LIcon; title: string; desc: string }[] = [
  { num: 1, icon: Search,     title: 'Diagnóstico',   desc: 'Analizo tu negocio, audiencia y competencia' },
  { num: 2, icon: Target,     title: 'Estrategia',    desc: 'Diseño una estrategia con objetivos y KPIs claros' },
  { num: 3, icon: Settings,   title: 'Configuración', desc: 'Configuro campañas, píxeles y conversiones' },
  { num: 4, icon: Zap,        title: 'Testeo',        desc: 'Pruebo creatividades y audiencias' },
  { num: 5, icon: TrendingUp, title: 'Optimización',  desc: 'Optimizo continuamente para escalar resultados' },
]

const INCLUDE_CARDS: { icon: LIcon; title: string; desc: string }[] = [
  { icon: BarChart2,  title: 'Configuración de campañas',  desc: 'Estructura profesional optimizada para conversión' },
  { icon: Users,      title: 'Segmentación avanzada',       desc: 'Audiencias precisas para impactar a las personas correctas' },
  { icon: FileText,   title: 'Copies y creatividades',      desc: 'Mensajes y anuncios que conectan y convierten' },
  { icon: Activity,   title: 'Seguimiento de métricas',     desc: 'Dashboards claros para medir, entender y decidir mejor' },
  { icon: RefreshCw,  title: 'Optimización continua',       desc: 'Mejoras constantes para escalar resultados y reducir costes' },
]

const META_BULLETS = [
  'Llega a audiencias altamente segmentadas',
  'Ideal para generar demanda y comunidad',
  'Formatos visuales que capturan la atención',
  'Retargeting avanzado para recuperar interés',
]

const GOOGLE_BULLETS = [
  'Aparece cuando te están buscando',
  'Tráfico de alta intención y calidad',
  'Anuncios en búsqueda, display, YouTube y más',
  'Genera leads y ventas de forma inmediata',
]

const HERO_TAGS = [
  'Estrategias basadas en datos',
  'Enfoque en resultados y ROI',
  'Transparencia y reportes claros',
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

/* ── Metrics Dashboard Card ──────────────────────────────── */
function Dashboard() {
  return (
    <div style={{ background: '#0F172A', border: '1px solid rgba(37,99,255,0.2)', borderRadius: 16, padding: 24 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: '#94A3B8' }}>
          Resumen de rendimiento
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: 20, padding: '3px 10px' }}>
          <span className="ma-live-dot" />
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 600, color: '#22C55E', letterSpacing: '0.06em' }}>En vivo</span>
        </span>
      </div>

      {/* Metrics 2×2 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
        {[
          { label: 'ROAS',          value: '5.42x', delta: '+28%' },
          { label: 'Leads',         value: '1,248',  delta: '+34%' },
          { label: 'CTR',           value: '2.87%',  delta: '+18%' },
          { label: 'Conversiones',  value: '326',    delta: '+31%' },
        ].map(m => (
          <div key={m.label} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: '14px 16px' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: '#64748B', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{m.label}</p>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: '#F1F5F9', margin: '0 0 6px', lineHeight: 1 }}>{m.value}</p>
            <span style={{ display: 'inline-block', background: 'rgba(34,197,94,0.12)', borderRadius: 4, padding: '2px 7px', fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, color: '#22C55E' }}>{m.delta} vs periodo anterior</span>
          </div>
        ))}
      </div>

      {/* Bar chart SVG */}
      <div style={{ marginBottom: 12 }}>
        <svg viewBox="0 0 200 60" width="100%" height="60" style={{ display: 'block' }}>
          {/* Bars */}
          {[15, 22, 18, 28, 34, 26, 42, 52].map((h, i) => (
            <rect
              key={i}
              x={8 + i * 24} y={60 - h} width={16} height={h}
              rx={3}
              fill={i === 7 ? '#60A5FA' : '#2563FF'}
              opacity={i === 7 ? 1 : 0.65}
              filter={i === 7 ? 'drop-shadow(0 0 4px rgba(96,165,250,0.7))' : undefined}
            />
          ))}
        </svg>
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', gap: 16 }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-body)', fontSize: 11, color: '#64748B' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#2563FF', display: 'inline-block' }} /> Meta Ads
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-body)', fontSize: 11, color: '#64748B' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#6366F1', display: 'inline-block' }} /> Google Ads
        </span>
      </div>
    </div>
  )
}

/* ── Meta logo SVG ───────────────────────────────────────── */
const MetaLogo = (
  <svg width="48" height="48" viewBox="0 0 52 52" fill="none">
    <path d="M8 32.5C8 28.5 10.5 24 14.5 24C17 24 19 25.8 21 28.5C22.8 25.8 25.2 22 28.5 22C33.5 22 36 27 36 32.5C36 36.5 34 39 31 39C28.5 39 26.5 37 24.5 34C22.5 37 20.5 39 17.5 39C13 39 8 36 8 32.5Z" fill="none" stroke="#0866FF" strokeWidth="2.2" strokeLinejoin="round"/>
    <path d="M36 22C38.5 22 44 24.5 44 32.5C44 37 42 39 39.5 39C37.5 39 35.5 37.5 34 35" fill="none" stroke="#0866FF" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
)

/* ── Google logo SVG ─────────────────────────────────────── */
const GoogleLogo = (
  <svg width="48" height="48" viewBox="0 0 52 52" fill="none">
    <path d="M38.5 26.3c0-.9-.08-1.8-.22-2.65H26v5h7.02a6 6 0 01-2.6 3.93v3.27h4.2c2.46-2.27 3.88-5.6 3.88-9.55z" fill="#4285F4"/>
    <path d="M26 39c3.52 0 6.47-1.17 8.62-3.17l-4.2-3.27C29.2 33.5 27.72 34 26 34c-3.4 0-6.28-2.3-7.31-5.38h-4.34v3.38A13 13 0 0026 39z" fill="#34A853"/>
    <path d="M18.69 28.62A7.8 7.8 0 0118.25 26c0-.9.16-1.78.44-2.62v-3.38h-4.34A13 13 0 0013 26c0 2.1.5 4.08 1.35 5.88l4.34-3.26z" fill="#FBBC05"/>
    <path d="M26 18.62c1.92 0 3.63.66 4.98 1.95l3.73-3.73C32.46 14.68 29.5 13 26 13a13 13 0 00-11.65 7.12l4.34 3.38C19.72 20.92 22.6 18.62 26 18.62z" fill="#EA4335"/>
  </svg>
)

/* ── Page ────────────────────────────────────────────────── */
export default function MetaAdsPage() {
  const isMobile = useIsMobile()

  return (
    <>
      <style>{`
        .ma-problems    { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .ma-include-cards { display: grid; grid-template-columns: repeat(5,1fr); gap: 16px; }
        .ma-split       { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
        .ma-hero-split  { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
        .ma-plat-cards  { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .ma-steps       { display: flex; align-items: flex-start; gap: 0; position: relative; }
        .ma-step        { display: flex; flex-direction: column; align-items: center; text-align: center; flex: 1; position: relative; z-index: 1; }
        .ma-connector   { position: absolute; top: 28px; left: 10%; right: 10%; height: 1px;
                          border-top: 1.5px dashed rgba(37,99,255,0.25); z-index: 0; }
        /* Blobs */
        .ma-blob   { position: absolute; border-radius: 50%; pointer-events: none; z-index: 0; }
        .ma-aurora { display: block; }
        /* En vivo pulsing dot */
        .ma-live-dot { display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: #22C55E;
                       animation: maLivePulse 1.6s ease-in-out infinite; }
        @keyframes maLivePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.4); }
        }
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
          .ma-problems      { grid-template-columns: 1fr; }
          .ma-include-cards { grid-template-columns: 1fr 1fr; }
          .ma-split         { grid-template-columns: 1fr; gap: 36px; }
          .ma-hero-split    { grid-template-columns: 1fr; }
          .ma-plat-cards    { grid-template-columns: 1fr; }
          .ma-dashboard     { display: none; }
          .ma-steps         { flex-direction: column; gap: 28px; }
          .ma-step          { flex-direction: row; text-align: left; align-items: flex-start; gap: 16px; }
          .ma-connector     { display: none; }
          .ma-blob          { display: none; }
          .ma-aurora        { display: none; }
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
      <section style={{ backgroundColor: '#0B0F1A', padding: '60px max(20px, 5%) 100px', position: 'relative', overflow: 'hidden' }}>
        {/* Aurora */}
        <div className="ma-aurora" style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', width: 720, height: 720, top: -200, right: -100, borderRadius: '50%', background: 'radial-gradient(circle, rgba(66,133,244,0.35) 0%, transparent 70%)', filter: 'blur(60px)', animation: 'maAuroraMove1 8s ease-in-out infinite alternate' }} />
          <div style={{ position: 'absolute', width: 600, height: 600, bottom: -100, left: -100, borderRadius: '50%', background: 'radial-gradient(circle, rgba(8,102,255,0.30) 0%, transparent 70%)', filter: 'blur(70px)', animation: 'maAuroraMove2 10s ease-in-out infinite alternate' }} />
          <div style={{ position: 'absolute', width: 480, height: 480, top: '50%', left: '40%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)', filter: 'blur(40px)', animation: 'maAuroraMove3 12s ease-in-out infinite alternate' }} />
        </div>

        <div className="ma-hero-split" style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Left — text */}
          <div>
            <Fade isMobile={isMobile} mode="enter" delay={0}>
              <div style={{ width: 40, height: 2, background: '#2563FF', borderRadius: 2, marginBottom: 14 }} />
              <span style={labelStyle}>Meta Ads &amp; Google Ads</span>
            </Fade>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: '#F1F5F9', margin: '0 0 24px', wordBreak: 'normal', hyphens: 'none', width: '100%' }}>
              {isMobile
                ? TITLE_WORDS.map((word, i) => (
                    <span key={i} style={{ marginRight: '0.28em', ...(i >= SECOND_LINE_START ? { color: '#2563FF' } : {}) }}>
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
              <p style={{ color: '#94A3B8', fontSize: 'clamp(14px, 1.4vw, 16px)', lineHeight: 1.78, fontFamily: 'var(--font-body)', fontWeight: 300, maxWidth: 520, margin: '0 0 32px' }}>
                Creo y gestiono campañas de publicidad en Meta Ads y Google Ads para que tu negocio llegue a las personas correctas, en el momento exacto en que están listas para comprar.
              </p>
            </Fade>

            <Fade isMobile={isMobile} mode="enter" delay={1.35}>
              <CTAButton />
            </Fade>

            {/* Tags */}
            <Fade isMobile={isMobile} mode="enter" delay={1.5}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
                {HERO_TAGS.map(tag => (
                  <span key={tag} style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 400, color: '#64748B', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: '5px 12px' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </Fade>
          </div>

          {/* Right — dashboard (hidden on mobile via CSS) */}
          <div className="ma-dashboard">
            <Fade isMobile={isMobile} mode="enter" delay={0.6}>
              <Dashboard />
            </Fade>
          </div>
        </div>
      </section>

      {/* ── S2: PLATAFORMAS ──────────────────────────────────── */}
      <section style={{ backgroundColor: '#0F172A', background: 'linear-gradient(180deg, #0B0F1A 0%, #0F172A 100%)', padding: '80px 5%', borderTop: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
        <div className="ma-blob" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 300, background: 'radial-gradient(ellipse, rgba(66,133,244,0.07) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Fade isMobile={isMobile} style={{ textAlign: 'center', marginBottom: 40 }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#475569', marginBottom: 0 }}>
              Plataformas que gestiono
            </p>
          </Fade>
          <div className="ma-plat-cards">
            {/* Meta Ads card */}
            <Fade isMobile={isMobile} delay={0}>
              <div style={{ background: '#0F172A', borderLeft: '3px solid #0866FF', borderRadius: '0 16px 16px 0', padding: '32px 32px 32px 28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 10 }}>
                  {MetaLogo}
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 800, color: '#F1F5F9', margin: 0 }}>Meta Ads</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#0866FF', margin: 0, fontWeight: 500 }}>Alcance y conexión que convierte</p>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 18 }}>
                  {META_BULLETS.map((b, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <div style={{ width: 22, height: 22, borderRadius: 6, background: 'rgba(8,102,255,0.12)', border: '1px solid rgba(8,102,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        <Check size={12} color="#0866FF" strokeWidth={2.5} />
                      </div>
                      <span style={{ color: '#94A3B8', fontSize: 13.5, fontFamily: 'var(--font-body)', fontWeight: 400, lineHeight: 1.5 }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Fade>
            {/* Google Ads card */}
            <Fade isMobile={isMobile} delay={0.15}>
              <div style={{ background: '#0F172A', borderLeft: '3px solid #4285F4', borderRadius: '0 16px 16px 0', padding: '32px 32px 32px 28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 10 }}>
                  {GoogleLogo}
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 800, color: '#F1F5F9', margin: 0 }}>Google Ads</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#4285F4', margin: 0, fontWeight: 500 }}>Intención que se convierte en acción</p>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 18 }}>
                  {GOOGLE_BULLETS.map((b, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <div style={{ width: 22, height: 22, borderRadius: 6, background: 'rgba(66,133,244,0.12)', border: '1px solid rgba(66,133,244,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        <Check size={12} color="#4285F4" strokeWidth={2.5} />
                      </div>
                      <span style={{ color: '#94A3B8', fontSize: 13.5, fontFamily: 'var(--font-body)', fontWeight: 400, lineHeight: 1.5 }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Fade>
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
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent 0%, rgba(37,99,255,0.2) 50%, transparent 100%)' }} />

      {/* ── S4: PROCESO ──────────────────────────────────────── */}
      <section style={{ backgroundColor: '#0B0F1A', padding: '100px 5%', position: 'relative', overflow: 'hidden' }}>
        <div className="ma-blob" style={{ top: '50%', right: '-10%', width: 500, height: 500, background: 'rgba(99,102,241,0.08)', filter: 'blur(90px)' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Fade isMobile={isMobile} style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={labelStyle}>El proceso</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 800, color: '#F1F5F9', margin: 0, lineHeight: 1.2 }}>
              Cómo trabajo tus campañas
            </h2>
          </Fade>
          {/* Steps container */}
          <div className="ma-steps">
            {/* Dotted connector line (desktop only) */}
            <div className="ma-connector" />
            {STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <Fade key={step.num} isMobile={isMobile} delay={i * 0.12} className="ma-step">
                  {/* Circle number */}
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg, #2563FF, #6366F1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: isMobile ? 0 : 16, flexShrink: 0, boxShadow: '0 0 20px rgba(37,99,255,0.3)' }}>
                    <Icon size={22} color="#fff" strokeWidth={1.8} />
                  </div>
                  <div style={{ ...(isMobile ? { paddingTop: 4 } : {}) }}>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700, color: '#3B82F6', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 4px' }}>
                      {String(step.num).padStart(2, '0')}
                    </p>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: '#F1F5F9', margin: '0 0 4px' }}>{step.title}</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: '#64748B', margin: 0, lineHeight: 1.5 }}>{step.desc}</p>
                  </div>
                </Fade>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gradient divider */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.2) 50%, transparent 100%)' }} />

      {/* ── S5: LO QUE INCLUYE ───────────────────────────────── */}
      <section style={{ backgroundColor: '#0F172A', padding: '100px 5%', position: 'relative', overflow: 'hidden' }}>
        <div className="ma-blob" style={{ top: '-10%', right: '-8%', width: 560, height: 560, background: 'rgba(66,133,244,0.09)', filter: 'blur(90px)' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Fade isMobile={isMobile} style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={labelStyle}>Lo que recibes</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 800, color: '#F1F5F9', margin: 0, lineHeight: 1.2 }}>
              Todo lo que incluye la gestión de tus campañas
            </h2>
          </Fade>
          <div className="ma-include-cards">
            {INCLUDE_CARDS.map((card, i) => {
              const Icon = card.icon
              return (
                <Fade key={i} isMobile={isMobile} delay={i * 0.1}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '28px 22px', transition: 'border-color 0.2s, transform 0.2s' }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = 'rgba(37,99,255,0.3)'; el.style.transform = 'translateY(-3px)' }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = 'rgba(255,255,255,0.07)'; el.style.transform = 'translateY(0)' }}
                  >
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,255,0.1)', border: '1px solid rgba(37,99,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                      <Icon size={20} color="#3B82F6" strokeWidth={1.8} />
                    </div>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: 13.5, fontWeight: 700, color: '#F1F5F9', margin: '0 0 8px', lineHeight: 1.3 }}>{card.title}</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: '#64748B', margin: 0, lineHeight: 1.55 }}>{card.desc}</p>
                  </div>
                </Fade>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gradient divider */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent 0%, rgba(37,99,255,0.18) 50%, transparent 100%)' }} />

      {/* ── S6: PÁRRAFO DESCRIPTIVO ──────────────────────────── */}
      <section style={{ backgroundColor: '#0B0F1A', padding: '100px 5%', position: 'relative', overflow: 'hidden' }}>
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
