'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

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
const PROBLEMS = [
  {
    title: 'Tengo web pero nadie me contacta a través de ella',
    desc: 'Tienes visitas pero el teléfono no suena. Una web sin estructura de conversión es solo un escaparate vacío. La gente entra, no entiende qué haces ni cómo contratarte, y se va.',
  },
  {
    title: 'Me da vergüenza enviarle mi web a un cliente potencial',
    desc: 'Si dudas antes de compartir tu propia web, algo falla. Tu web debería ser tu mejor carta de presentación, no algo que prefieres no enseñar.',
  },
  {
    title: 'Mi competencia aparece en Google y yo no',
    desc: 'Cada día que no apareces en Google es un cliente que va a otro. Una web invisible es como tener una tienda sin letrero en una calle sin salida.',
  },
  {
    title: 'Mi competencia se ve más profesional aunque yo trabajo mejor',
    desc: 'Pierdes contratos por imagen antes de que el cliente sepa lo que vales. En el mundo digital, la percepción es la realidad.',
  },
]

const INCLUDES = [
  'Diseño profesional adaptado a tu sector e identidad visual',
  'Estructura pensada para guiar al visitante hacia el contacto',
  '100% adaptada a móvil, tablet y ordenador',
  'SEO técnico integrado desde la construcción, no como añadido',
  'Formularios de captación configurados y probados',
  'Te enseño a gestionar tu web sin depender de nadie',
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
      Analiza mi web gratis
    </Link>
  )
}

/* ── Page ────────────────────────────────────────────────── */
export default function DisenoWebCorporativaPage() {
  return (
    <>
      <style>{`
        .dwc-problems { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .dwc-includes { display: grid; grid-template-columns: 1fr 1fr; gap: 16px 40px; }
        .dwc-split    { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
        @media (max-width: 768px) {
          .dwc-problems { grid-template-columns: 1fr; }
          .dwc-includes { grid-template-columns: 1fr; }
          .dwc-split    { grid-template-columns: 1fr; gap: 36px; }
        }
      `}</style>

      {/* ── S1: HERO ─────────────────────────────────────── */}
      <section style={{ background: '#0B0F1A', padding: '140px 5% 100px', position: 'relative', overflow: 'hidden' }}>

        {/* Dot grid — hero only, very subtle */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }} />

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

        <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={trans(0)}>
            {/* Decorative horizontal line */}
            <div style={{ width: 40, height: 2, background: '#2563FF', borderRadius: 2, marginBottom: 14 }} />
            <span style={labelStyle}>Diseño web profesional</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={trans(0.08)}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 62px)', fontWeight: 800, color: '#F1F5F9', margin: '0 0 24px', lineHeight: 1.08 }}
          >
            Tu web debería traerte clientes.{' '}
            <span style={gradText}>¿La tuya lo hace?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={trans(0.16)}
            style={{ color: '#94A3B8', fontSize: 'clamp(15px, 1.5vw, 17px)', lineHeight: 1.78, fontFamily: 'var(--font-body)', fontWeight: 300, maxWidth: 620, margin: '0 0 36px' }}
          >
            Diseño webs profesionales para autónomos, marcas personales y PYMES que quieren transmitir confianza, aparecer en Google y convertir visitas en clientes reales.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={trans(0.24)}>
            <CTAButton />
          </motion.div>
        </div>
      </section>

      {/* Gradient divider hero → problemas */}
      <div style={{
        height: 1,
        background: 'linear-gradient(90deg, transparent 0%, rgba(37,99,255,0.35) 40%, rgba(99,102,241,0.25) 60%, transparent 100%)',
      }} />

      {/* ── S2: PROBLEMAS ────────────────────────────────── */}
      <section style={{ background: '#0D1117', padding: '80px 5% 100px', position: 'relative', overflow: 'hidden' }}>

        {/* Blob bottom-left global */}
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
              Si te identificas con alguna, tu web necesita una revisión.
            </p>
          </motion.div>

          <div className="dwc-problems">
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

      {/* Gradient divider problemas → incluye */}
      <div style={{
        height: 1,
        background: 'linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.2) 50%, transparent 100%)',
      }} />

      {/* ── S3: LO QUE INCLUYE ───────────────────────────── */}
      <section style={{ background: '#0B0F1A', padding: '100px 5%', position: 'relative', overflow: 'hidden' }}>

        {/* Blob decorativo azul esquina derecha */}
        <div style={{
          position: 'absolute', top: '-10%', right: '-8%',
          width: 520, height: 520, borderRadius: '50%',
          background: 'rgba(37,99,255,0.08)',
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
              Todo lo que incluye tu web profesional
            </h2>
          </motion.div>

          <div className="dwc-includes">
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

      {/* Gradient divider incluye → párrafo */}
      <div style={{
        height: 1,
        background: 'linear-gradient(90deg, transparent 0%, rgba(37,99,255,0.18) 50%, transparent 100%)',
      }} />

      {/* ── S4: PÁRRAFO DESCRIPTIVO ──────────────────────── */}
      <section style={{ background: '#0F172A', padding: '100px 5%' }}>
        <motion.div
          initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={trans()}
          style={{ maxWidth: 800, margin: '0 auto', position: 'relative' }}
        >
          {/* Borde izquierdo con glow */}
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: 4,
            background: 'linear-gradient(to bottom, #2563FF, #6366F1)',
            borderRadius: 2,
            boxShadow: '0 0 18px 3px rgba(37,99,255,0.38)',
          }} />
          <div style={{ paddingLeft: 28 }}>
            <p style={{ color: '#94A3B8', fontSize: 15.5, lineHeight: 1.88, fontFamily: 'var(--font-body)', fontWeight: 300, margin: '0 0 20px' }}>
              ¿Sabías que el 75% de los usuarios juzga la credibilidad de un negocio por el diseño de su web en menos de 3 segundos? Antes de leer una sola línea de lo que ofreces, tu cliente potencial ya ha decidido si confía en ti o no. No es superficial — es psicología humana básica. El cerebro procesa imágenes 60.000 veces más rápido que el texto, y una web lenta, desorganizada o visualmente anticuada activa de forma automática una señal de alerta.
            </p>
            <p style={{ color: '#94A3B8', fontSize: 15.5, lineHeight: 1.88, fontFamily: 'var(--font-body)', fontWeight: 300, margin: '0 0 20px' }}>
              En cambio, una web bien construida hace lo contrario: genera confianza inmediata, reduce la fricción y convierte visitas en conversaciones reales. No se trata de tener la web más bonita de tu sector. Se trata de tener la web que mejor explica quién eres, qué resuelves y por qué elegirte a ti.
            </p>
            <p style={{ color: '#4B5A72', fontSize: 13, fontStyle: 'italic', fontFamily: 'var(--font-body)', margin: 0 }}>
              Trabajo con negocios en Córdoba, Granada y en toda España de forma remota.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Gradient divider párrafo → split */}
      <div style={{
        height: 1,
        background: 'linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.2) 50%, transparent 100%)',
      }} />

      {/* ── S5: SPLIT IMAGEN ─────────────────────────────── */}
      <section style={{ background: '#0B0F1A', padding: '100px 5%' }}>
        <div className="dwc-split" style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={trans()}
            style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', aspectRatio: '4/3' }}
          >
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80&fit=crop"
              alt="Diseño web profesional"
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
              De la idea a la web publicada, sin sorpresas
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.78, fontFamily: 'var(--font-body)', fontWeight: 300, margin: '0 0 28px' }}>
              Antes de tocar el diseño entiendo tu negocio, tu cliente y tu objetivo. Cada decisión visual y estructural tiene una razón estratégica detrás. Nada es aleatorio.
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

      {/* ── S6: CTA FINAL ────────────────────────────────── */}
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

        {/* Blob bottom-left */}
        <div style={{
          position: 'absolute', bottom: '-20%', left: '-10%',
          width: 600, height: 600, borderRadius: '50%',
          background: 'rgba(99,102,241,0.10)',
          filter: 'blur(100px)',
          pointerEvents: 'none', zIndex: 0,
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={trans()}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.5vw, 46px)', fontWeight: 800, color: '#F1F5F9', margin: '0 0 18px', lineHeight: 1.15 }}>
              ¿Tu web actual te está{' '}
              <span style={gradText}>costando clientes?</span>
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 16, lineHeight: 1.75, fontFamily: 'var(--font-body)', fontWeight: 300, maxWidth: 520, margin: '0 auto 40px' }}>
              Cuéntame tu caso. Analizo tu presencia digital actual y te digo exactamente qué cambiaría y por qué. Sin compromiso.
            </p>
            <CTAButton />
          </motion.div>
        </div>
      </section>
    </>
  )
}
