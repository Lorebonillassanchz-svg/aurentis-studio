'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const HeroParticles = dynamic(
  () => import('./FloatingIcons').then(m => m.HeroParticles),
  { ssr: false }
)
const CTAParticles = dynamic(
  () => import('./FloatingIcons').then(m => m.CTAParticles),
  { ssr: false }
)

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
const trans = (delay = 0) => ({ duration: 0.6, delay })

/* ── Data ────────────────────────────────────────────────── */
const TITLE_WORDS = 'Tu tienda online debería vender mientras duermes. ¿La tuya lo hace?'.split(' ')

const PLATFORMS = [
  {
    name: 'WooCommerce',
    color: '#7F54B3',
    logo: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect width="44" height="44" rx="10" fill="#7F54B3"/>
        <path d="M7 27.5c-.8 0-1.3-.8-1.1-1.6L9.5 12c.2-.9 1-1.5 1.9-1.5s1.6.6 1.8 1.5l2.2 8.8 2.5-8.8c.3-.9 1.1-1.5 2-1.5s1.7.6 1.9 1.5l2.5 8.8 2.2-8.8c.2-.9 1-.5 1.9-1.5.9 0 1.7.6 1.8 1.5l3.6 13.9c.2.8-.3 1.6-1.1 1.6-.6 0-1.2-.4-1.4-1l-2.7-10.4-2.7 10.4c-.3.6-.9 1-1.5 1-.7 0-1.3-.4-1.5-1L22 16.6l-2.7 10.4c-.2.6-.8 1-1.5 1-.6 0-1.2-.4-1.4-1L13.7 16.6 11 27c-.2.6-.8 1-1.5 1h-.5z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Shopify',
    color: '#96BF48',
    logo: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect width="44" height="44" rx="10" fill="#96BF48"/>
        <path d="M30.5 11.8c0-.2-.1-.3-.3-.3-.1 0-2.1-.1-2.1-.1s-1.4-1.4-1.6-1.5c-.1-.1-.4-.1-.5 0l-.7.2c-.4-1.2-1.1-2.3-2.4-2.3h-.1c-.3-.5-.8-.7-1.2-.7-3 0-4.5 3.8-4.9 5.7l-2.1.6c-.6.2-.6.2-.7.8L12.5 32l13.6 2.5 7.4-1.6-3-21.1zm-6.2-1.5c-.9.3-2 .6-3 .9.3-1.2.9-2.4 1.7-3.2.3.6.9 1.8 1.3 2.3zm-2.5-3.1c.2 0 .3.1.5.2-.9.9-1.6 2.3-2 3.8l-2.5.8c.5-1.7 1.8-4.8 4-4.8zm1.2 12.2c.1.5-.1 1-.5 1.2-.4.2-.8 0-1.1-.3-.4-.4-.6-1-.6-1.5-.9.3-1.8.5-2.7.8 0 .1 0 .2.1.3.5 1.8 2.1 2.8 3.8 2.3 1.5-.5 2.3-2.1 1.9-3.8-.1-.3-.5-.8-.9-1l1-.3c-.1.8 0 1.6.4 2.1.3.2.4.2.6.2z" fill="white"/>
        <path d="M28.1 11.5c-.1 0-1.5-.2-1.5-.2l-.8 5 .1.1L30 15l.5-3.2c-.1-.2-.3-.3-.4-.3z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'PrestaShop',
    color: '#DF0067',
    logo: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect width="44" height="44" rx="10" fill="#DF0067"/>
        <path d="M22 8C14.3 8 8 14.3 8 22s6.3 14 14 14 14-6.3 14-14S29.7 8 22 8zm0 5.5c2.5 0 4.5.8 6 2.3 1.4 1.4 2.1 3.2 2.1 5.2 0 2.1-.8 3.9-2.3 5.3-1.5 1.4-3.5 2.1-5.8 2.1h-3.5V36h-3V13.5H22zm-3.5 12h3.3c1.5 0 2.7-.4 3.5-1.2.8-.8 1.3-1.9 1.3-3.2 0-1.3-.4-2.3-1.2-3.1-.8-.8-2-1.1-3.5-1.1h-3.4v8.6z" fill="white"/>
      </svg>
    ),
  },
]

const PROBLEMS = [
  {
    title: 'Tengo tienda online pero apenas recibo pedidos',
    desc: 'Tener una tienda no garantiza ventas. Si no está bien estructurada, con fichas de producto claras y un proceso de compra fluido, el cliente abandona antes de pagar.',
  },
  {
    title: 'Mi tienda se ve amateur comparada con la competencia',
    desc: 'El diseño genera confianza. Una tienda que parece poco profesional hace que el cliente dude antes de introducir su tarjeta. La primera impresión lo es todo.',
  },
  {
    title: 'El proceso de compra es complicado y la gente lo abandona',
    desc: 'El 70% de los carritos se abandonan. Un checkout largo, confuso o que no funciona bien en móvil cuesta ventas reales cada día.',
  },
  {
    title: 'No sé si mi tienda aparece en Google cuando buscan mis productos',
    desc: 'Una tienda sin SEO es invisible. Si Google no indexa tus productos correctamente, solo venden los que ya te conocen.',
  },
]

const INCLUDES = [
  'Diseño personalizado adaptado a tu marca y sector',
  'Catálogo de productos configurado y listo para vender',
  'Pasarela de pago integrada y probada',
  '100% adaptada a móvil — donde ocurre el 70% de las compras',
  'SEO técnico para que tus productos aparezcan en Google',
  'Integración con métodos de envío y gestión de stock',
  'Te enseño a gestionar tu tienda sin depender de nadie',
]

/* ── CTA Button ──────────────────────────────────────────── */
function CTAButton() {
  return (
    <Link
      href="/contacto"
      style={{
        display: 'inline-block',
        background: '#2563FF',
        color: '#fff',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 15,
        padding: '14px 32px',
        borderRadius: 8,
        textDecoration: 'none',
        boxShadow: '0 0 28px rgba(37,99,255,0.35)',
        transition: 'background 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLAnchorElement
        el.style.background = '#1d4fd8'
        el.style.boxShadow  = '0 0 36px rgba(37,99,255,0.5)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLAnchorElement
        el.style.background = '#2563FF'
        el.style.boxShadow  = '0 0 28px rgba(37,99,255,0.35)'
      }}
    >
      Quiero mi tienda online
    </Link>
  )
}

/* ── Page ────────────────────────────────────────────────── */
export default function DisenoTiendasOnlinePage() {
  return (
    <>
      <style>{`
        .dto-problems { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .dto-includes { display: grid; grid-template-columns: 1fr 1fr; gap: 16px 40px; }
        .dto-split    { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
        .dto-platforms { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        .dto-platform-card {
          display: flex; flex-direction: column; align-items: center; gap: 12px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px; padding: 20px 32px;
          cursor: default; transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
          min-width: 160px;
        }
        .dto-platform-card:hover {
          transform: scale(1.05);
          border-color: rgba(37,99,255,0.35);
          box-shadow: 0 8px 28px rgba(37,99,255,0.12);
        }
        @keyframes floatUp {
          0%   { transform: translateY(0) rotate(0deg);    opacity: 0; }
          50%  { opacity: 0.6; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        .dto-particle {
          position: absolute;
          pointer-events: none;
          z-index: 0;
          animation: floatUp linear infinite;
        }
        @media (max-width: 768px) {
          .dto-problems  { grid-template-columns: 1fr; }
          .dto-includes  { grid-template-columns: 1fr; }
          .dto-split     { grid-template-columns: 1fr; gap: 36px; }
          .dto-platforms { gap: 12px; }
          .dto-platform-card { padding: 16px 24px; min-width: 130px; }
          .dto-particle  { display: none; }
        }
      `}</style>

      {/* ── BREADCRUMB ───────────────────────────────────── */}
      <div style={{ background: '#0B0F1A', padding: '16px 24px', paddingTop: 86, position: 'relative', zIndex: 1 }}>
        <Link
          href="/servicios"
          style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 400, color: '#818CF8', textDecoration: 'none', transition: 'color 0.2s', display: 'inline-block' }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#2563FF' }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#818CF8' }}
        >
          ← Volver a Servicios
        </Link>
      </div>

      {/* ── S1: HERO ─────────────────────────────────────── */}
      <section style={{ background: '#0B0F1A', padding: '60px 5% 100px', position: 'relative', overflow: 'hidden' }}>

        {/* Radial gradient overlay centre-right */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 70% 50%, rgba(37,99,255,0.15) 0%, transparent 60%)',
        }} />

        {/* Blob top-right */}
        <div style={{
          position: 'absolute', top: '-20%', right: '-12%',
          width: 750, height: 750, borderRadius: '50%',
          background: 'rgba(37,99,255,0.12)',
          filter: 'blur(110px)',
          pointerEvents: 'none', zIndex: 0,
        }} />

        {/* Floating ecommerce particles — client-only, no SSR flash */}
        <HeroParticles />

        <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={trans(0)}>
            <div style={{ width: 40, height: 2, background: '#2563FF', borderRadius: 2, marginBottom: 14 }} />
            <span style={labelStyle}>Tienda Online</span>
          </motion.div>

          {/* Word-by-word stagger title */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 62px)',
            fontWeight: 800,
            color: '#F1F5F9',
            margin: '0 0 24px',
            lineHeight: 1.08,
          }}>
            {TITLE_WORDS.map((word, i) => {
              const isLast4 = i >= TITLE_WORDS.length - 4
              return (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  style={{
                    display: 'inline-block',
                    marginRight: '0.28em',
                    ...(isLast4 ? gradText : {}),
                  }}
                >
                  {word}
                </motion.span>
              )
            })}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={trans(0.9)}
            style={{ color: '#94A3B8', fontSize: 'clamp(15px, 1.5vw, 17px)', lineHeight: 1.78, fontFamily: 'var(--font-body)', fontWeight: 300, maxWidth: 620, margin: '0 0 36px' }}
          >
            Desarrollo tiendas online profesionales en WooCommerce, Shopify y PrestaShop para negocios que quieren vender por internet sin complicaciones técnicas.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={trans(1.0)}>
            <CTAButton />
          </motion.div>
        </div>
      </section>

      {/* ── S2: PLATAFORMAS ──────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(180deg, #0B0F1A 0%, #0F172A 100%)',
        padding: '60px 5%',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Blob centrado sutil */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600, height: 300, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(37,99,255,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none', zIndex: 0,
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={trans()}
            style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#475569', marginBottom: 28 }}
          >
            Trabajo con las mejores plataformas
          </motion.p>

          <div className="dto-platforms">
            {PLATFORMS.map((p, i) => (
              <motion.div
                key={p.name}
                className="dto-platform-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={trans(i * 0.15)}
              >
                {p.logo}
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 13,
                  fontWeight: 600,
                  color: p.color,
                  letterSpacing: '0.02em',
                }}>
                  {p.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient divider */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent 0%, rgba(37,99,255,0.35) 40%, rgba(99,102,241,0.25) 60%, transparent 100%)' }} />

      {/* ── S3: PROBLEMAS ────────────────────────────────── */}
      <section style={{ background: '#0D1117', padding: '80px 5% 100px', position: 'relative', overflow: 'hidden' }}>

        {/* Diagonal decorative lines */}
        <div style={{
          position: 'absolute', top: '-10%', left: '-5%',
          width: '60%', height: '120%',
          borderRight: '1px solid rgba(99,102,241,0.03)',
          transform: 'rotate(15deg)',
          pointerEvents: 'none', zIndex: 0,
        }} />
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: '60%', height: '120%',
          borderLeft: '1px solid rgba(37,99,255,0.03)',
          transform: 'rotate(-15deg)',
          pointerEvents: 'none', zIndex: 0,
        }} />

        {/* Blob */}
        <div style={{
          position: 'absolute', bottom: '-30%', left: '-15%',
          width: 700, height: 700, borderRadius: '50%',
          background: 'rgba(99,102,241,0.10)',
          filter: 'blur(120px)',
          pointerEvents: 'none', zIndex: 0,
        }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={trans()}
            style={{ marginBottom: 48 }}
          >
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 800, color: '#F1F5F9', margin: '0 0 12px', lineHeight: 1.2 }}>
              ¿Cuál de estas situaciones te suena?
            </h2>
            <p style={{ color: '#64748B', fontSize: 14.5, fontFamily: 'var(--font-body)', fontWeight: 300, margin: 0 }}>
              Si te identificas con alguna, tu tienda necesita una revisión.
            </p>
          </motion.div>

          <div className="dto-problems">
            {PROBLEMS.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={trans(i * 0.1)}
                style={{ background: '#0F172A', borderLeft: '3px solid #2563FF', borderRadius: '0 14px 14px 0', padding: '24px 26px' }}
              >
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 15.5, fontWeight: 700, color: '#F1F5F9', margin: '0 0 10px', lineHeight: 1.35 }}>
                  {p.title}
                </h3>
                <p style={{ color: '#94A3B8', fontSize: 13.5, lineHeight: 1.72, fontFamily: 'var(--font-body)', fontWeight: 300, margin: 0 }}>
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient divider */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.2) 50%, transparent 100%)' }} />

      {/* ── S4: LO QUE INCLUYE ───────────────────────────── */}
      <section style={{ background: '#0B0F1A', padding: '100px 5%', position: 'relative', overflow: 'hidden' }}>

        {/* Blob violeta esquina derecha */}
        <div style={{
          position: 'absolute', top: '-10%', right: '-8%',
          width: 560, height: 560, borderRadius: '50%',
          background: 'rgba(99,102,241,0.10)',
          filter: 'blur(90px)',
          pointerEvents: 'none', zIndex: 0,
        }} />

        <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={trans()}
            style={{ marginBottom: 48 }}
          >
            <span style={labelStyle}>Lo que recibes</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 800, color: '#F1F5F9', margin: 0, lineHeight: 1.2 }}>
              Todo lo que incluye tu tienda online
            </h2>
          </motion.div>

          <div className="dto-includes">
            {INCLUDES.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={trans(i * 0.1)}
                style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}
              >
                <div style={{ width: 26, height: 26, borderRadius: 8, background: 'rgba(37,99,255,0.1)', border: '1px solid rgba(37,99,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                  <Check size={14} color="#2563FF" strokeWidth={2.5} />
                </div>
                <span style={{ color: '#CBD5E1', fontSize: 14.5, fontFamily: 'var(--font-body)', fontWeight: 400, lineHeight: 1.55 }}>
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient divider */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent 0%, rgba(37,99,255,0.18) 50%, transparent 100%)' }} />

      {/* ── S5: PÁRRAFO DESCRIPTIVO ──────────────────────── */}
      <section style={{ background: '#0F172A', padding: '100px 5%', position: 'relative', overflow: 'hidden' }}>

        {/* Glow detrás de la card */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 700, height: 300, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(37,99,255,0.06) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none', zIndex: 0,
        }} />

        <motion.div
          initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={trans()}
          style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}
        >
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: 4,
            background: 'linear-gradient(to bottom, #2563FF, #6366F1)',
            borderRadius: 2,
            boxShadow: '0 0 18px 3px rgba(37,99,255,0.38)',
          }} />
          <div style={{ paddingLeft: 28 }}>
            <p style={{ color: '#94A3B8', fontSize: 15.5, lineHeight: 1.88, fontFamily: 'var(--font-body)', fontWeight: 300, margin: '0 0 20px' }}>
              El 53% de los usuarios abandona una tienda online si tarda más de 3 segundos en cargar, y Google penaliza directamente esa lentitud bajando tu posición en los resultados de búsqueda. Pero la velocidad es solo una parte del problema. Una tienda online que convierte de verdad necesita fichas de producto claras, un proceso de compra sin fricción, diseño que transmita confianza y una estructura que Google pueda leer e indexar correctamente. Sin eso, tienes un escaparate bonito que no vende. Con eso, tienes un sistema que trabaja por ti las 24 horas.
            </p>
            <p style={{ color: '#4B5A72', fontSize: 13, fontStyle: 'italic', fontFamily: 'var(--font-body)', margin: 0 }}>
              Desarrollo tiendas online para negocios en Córdoba, Granada y en toda España.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Gradient divider */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.2) 50%, transparent 100%)' }} />

      {/* ── S6: SPLIT IMAGEN ─────────────────────────────── */}
      <section style={{ background: '#0B0F1A', padding: '100px 5%', position: 'relative', overflow: 'hidden' }}>

        {/* Blob azul esquina izquierda */}
        <div style={{
          position: 'absolute', bottom: '-20%', left: '-10%',
          width: 500, height: 500, borderRadius: '50%',
          background: 'rgba(37,99,255,0.07)',
          filter: 'blur(90px)',
          pointerEvents: 'none', zIndex: 0,
        }} />

        <div className="dto-split" style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={trans()}
            style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', aspectRatio: '4/3' }}
          >
            <Image
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80&fit=crop"
              alt="Tienda online profesional"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(37,99,255,0.08) 0%, transparent 60%)' }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={trans(0.1)}
          >
            <span style={labelStyle}>El proceso</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.8vw, 34px)', fontWeight: 800, color: '#F1F5F9', margin: '0 0 18px', lineHeight: 1.2 }}>
              De cero a tienda publicada y vendiendo
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.78, fontFamily: 'var(--font-body)', fontWeight: 300, margin: '0 0 28px' }}>
              Antes de desarrollar nada estudio tu producto, tu cliente y tu competencia. Cada decisión técnica y visual tiene un objetivo claro: vender más.
            </p>
            <Link
              href="/proceso"
              style={{ color: '#60A5FA', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'gap 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.gap = '10px' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.gap = '6px' }}
            >
              Ver proceso completo →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── S7: CTA FINAL ────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #141C2E 50%, #0F172A 100%)',
        padding: '110px 5%',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Blob azul-violeta centrado */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800, height: 500, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.15) 0%, rgba(37,99,255,0.10) 35%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none', zIndex: 0,
        }} />

        {/* Floating particles CTA — client-only, no SSR flash */}
        <CTAParticles />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={trans()}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.5vw, 46px)', fontWeight: 800, color: '#F1F5F9', margin: '0 0 18px', lineHeight: 1.15 }}>
              ¿Tu tienda online está{' '}
              <span style={gradText}>perdiendo ventas cada día?</span>
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 16, lineHeight: 1.75, fontFamily: 'var(--font-body)', fontWeight: 300, maxWidth: 520, margin: '0 auto 40px' }}>
              Cuéntame tu caso. Analizo tu tienda actual y te digo exactamente qué cambiaría para que empiece a vender más.
            </p>
            <CTAButton />
          </motion.div>
        </div>
      </section>
    </>
  )
}
