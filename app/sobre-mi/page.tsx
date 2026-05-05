'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const gradText: React.CSSProperties = {
  background: 'linear-gradient(100deg, #3B82F6, #818CF8)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

/* ── SVG icons ─────────────────────────────────────────────── */
function PeopleIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="7" r="3" stroke={color} strokeWidth="1.5"/>
      <path d="M3 20c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="17" cy="8" r="2.5" stroke={color} strokeWidth="1.4"/>
      <path d="M21 20c0-2.761-1.79-5-4-5" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  )
}

function TargetIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="5" stroke={color} strokeWidth="1.4"/>
      <circle cx="12" cy="12" r="2" fill={color}/>
    </svg>
  )
}

function ShieldCheckIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L4 6v6c0 5 3.5 9.3 8 11 4.5-1.7 8-6 8-11V6L12 2z" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M9 12l2 2 4-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

/* ── Card data ─────────────────────────────────────────────── */
const WHY_CARDS = [
  {
    color: '#2563FF',
    colorRgb: '37,99,255',
    tagColor: '#93C5FD',
    tag: 'Humanismo',
    title: 'Trato directo, sin filtros',
    desc: 'No hablas con una agencia llena de intermediarios. Hablas conmigo. Me involucro en tu negocio como si fuera el mío porque entiendo el esfuerzo que hay detrás de cada proyecto.',
    icon: (c: string) => <PeopleIcon color={c} />,
  },
  {
    color: '#6366F1',
    colorRgb: '99,102,241',
    tagColor: '#C4B5FD',
    tag: 'Profesionalismo',
    title: 'Estrategia antes que código',
    desc: 'Antes de tocar una sola línea de diseño, analizo a tu competencia y a tu cliente ideal. Si no sabemos a quién le vendemos, la web no servirá de nada.',
    icon: (c: string) => <TargetIcon color={c} />,
  },
  {
    color: '#16A34A',
    colorRgb: '22,163,74',
    tagColor: '#4ADE80',
    tag: 'Honestidad',
    title: 'Realismo sobre promesas vacías',
    desc: 'Si creo que una idea no va a funcionar para tu negocio, te lo diré. Mi objetivo no es entregarte una web, es entregarte resultados.',
    icon: (c: string) => <ShieldCheckIcon color={c} />,
  },
]

/* ── Why card with hover state ─────────────────────────────── */
function WhyCard({ card }: { card: typeof WHY_CARDS[number] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#111827',
        border: `1px solid ${hovered ? `rgba(${card.colorRgb},0.30)` : 'rgba(255,255,255,0.07)'}`,
        borderRadius: 18,
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        transition: 'border-color 0.3s, transform 0.3s',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
      }}
    >
      {/* Icon circle */}
      <div style={{
        width: 48, height: 48, borderRadius: '50%',
        background: `rgba(${card.colorRgb},0.1)`,
        border: `1px solid rgba(${card.colorRgb},0.2)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        {card.icon(card.color)}
      </div>

      {/* Text */}
      <div>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: '#F1F5F9', margin: '0 0 10px' }}>
          {card.title}
        </p>
        <p style={{ fontSize: 13.5, color: '#94A3B8', lineHeight: 1.7, fontFamily: 'var(--font-body)', fontWeight: 300, margin: '0 0 16px' }}>
          {card.desc}
        </p>
      </div>

      {/* Tag */}
      <span style={{
        display: 'inline-block', alignSelf: 'flex-start',
        background: `rgba(${card.colorRgb},0.08)`,
        border: `1px solid rgba(${card.colorRgb},0.2)`,
        color: card.tagColor,
        fontSize: 11, fontWeight: 600,
        padding: '4px 12px', borderRadius: 999,
        fontFamily: 'var(--font-body)',
      }}>
        {card.tag}
      </span>
    </div>
  )
}

/* ── Page ──────────────────────────────────────────────────── */
export default function SobreMiPage() {
  return (
    <>
      <style>{`
        .sm-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
        }
        .sm-why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1100px;
          margin: 48px auto 0;
        }
        .sm-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
        }
        @media (max-width: 900px) {
          .sm-why-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .sm-hero  { grid-template-columns: 1fr; }
          .sm-split { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── SECCIÓN 1: HERO ──────────────────────────────────── */}
      <section style={{ background: '#0B0F1A', padding: '140px 5% 80px' }}>
        <div className="sm-hero">

          {/* Texto izquierda */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            <span style={{
              fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#3B82F6',
            }}>
              Sobre mí
            </span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px,3vw,44px)', fontWeight: 800, color: '#F1F5F9', margin: 0, lineHeight: 1.12 }}>
              <span style={{ display: 'block' }}>No diseño webs para que se vean bien.</span>
              <span style={gradText}>Las diseño para que tu negocio crezca.</span>
            </h1>
            <p style={{ color: '#94A3B8', fontSize: 16, lineHeight: 1.78, fontFamily: 'var(--font-body)', fontWeight: 300, margin: 0, maxWidth: 480 }}>
              Soy Lorena, y fundé Aurentis Studio porque me cansé de ver autónomos y PYMES con webs increíbles que no recibían ni un solo mensaje de contacto. Mi trabajo es unir la estética con la psicología de ventas para que tu presencia digital deje de ser un gasto y pase a ser tu mejor comercial.
            </p>
          </div>

          {/* Foto derecha */}
          <div style={{ position: 'relative', width: '100%', height: 480, borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(37,99,255,0.15)' }}>
            <Image
              src="/lorena.png"
              alt="Lorena — Aurentis Studio"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 2: ¿POR QUÉ YO? ─────────────────────────── */}
      <section style={{ background: '#0F172A', padding: '100px 5%', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase' as const,
            color: '#3B82F6', display: 'block', marginBottom: 14,
          }}>
            Por qué trabajar conmigo
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.8vw,38px)', fontWeight: 800, color: '#F1F5F9', margin: 0, lineHeight: 1.2 }}>
            Por qué elegir un enfoque{' '}
            <span style={gradText}>estratégico</span>
            {' '}frente a uno solo visual.
          </h2>
        </div>
        <div className="sm-why-grid">
          {WHY_CARDS.map(card => <WhyCard key={card.title} card={card} />)}
        </div>
      </section>

      {/* ── SECCIÓN 3: FILOSOFÍA ─────────────────────────────── */}
      <section style={{ background: '#0B0F1A', padding: '100px 5%', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="sm-split">

          {/* Imagen izquierda */}
          <div style={{ position: 'relative', height: 420, borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)' }}>
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&fit=crop"
              alt="Filosofía de trabajo — Aurentis Studio"
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(11,15,26,0.4), rgba(37,99,255,0.08))' }} />
          </div>

          {/* Texto derecha */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <span style={{
              fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#3B82F6',
            }}>
              Mi filosofía
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,34px)', fontWeight: 800, color: '#F1F5F9', margin: 0, lineHeight: 1.2 }}>
              La web es el centro,{' '}
              <br />
              pero{' '}
              <span style={gradText}>la estrategia es el motor.</span>
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15.5, lineHeight: 1.78, fontFamily: 'var(--font-body)', fontWeight: 300, margin: 0 }}>
              Un negocio real necesita soluciones reales. No creo en las plantillas genéricas. Creo en sistemas que comunican autoridad, resuelven dudas de forma instintiva y guían al usuario hacia el botón de contacto sin fricción.
            </p>
            <p style={{ color: '#94A3B8', fontSize: 15.5, lineHeight: 1.78, fontFamily: 'var(--font-body)', fontWeight: 300, margin: 0 }}>
              Cada decisión de diseño tiene un porqué. Cada sección de tu web tiene un objetivo. Nada está puesto porque queda bonito.
            </p>

            {/* 3 puntos con línea azul */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 8 }}>
              {[
                'Diseño orientado a conversión, no a premios',
                'Estrategia antes de abrir el editor',
                'Resultados medibles, no promesas vacías',
              ].map(item => (
                <div
                  key={item}
                  style={{
                    borderLeft: '3px solid #2563FF',
                    paddingLeft: 16,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                  }}
                >
                  <span style={{ color: '#CBD5E1', fontSize: 14.5, fontFamily: 'var(--font-body)', fontWeight: 400, lineHeight: 1.5 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 4: CTA FINAL ─────────────────────────────── */}
      <section style={{ background: '#0F172A', padding: '100px 5%', borderTop: '1px solid rgba(255,255,255,0.07)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>

        {/* Glow decorativo */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          width: 600, height: 400, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(37,99,255,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)', pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 680, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#3B82F6',
          }}>
            ¿Conectamos?
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.8vw,40px)', fontWeight: 800, color: '#F1F5F9', margin: 0, lineHeight: 1.2 }}>
            Si buscas a alguien que entienda tu negocio<br />
            y te ayude a captar clientes,{' '}
            <span style={gradText}>hablemos.</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: 16, lineHeight: 1.75, fontFamily: 'var(--font-body)', fontWeight: 300, margin: 0, maxWidth: 520 }}>
            Si buscas a alguien que solo haga webs bonitas, quizás no soy yo. Pero si buscas a alguien que entienda tu negocio y te ayude a captar clientes de verdad, estoy aquí.
          </p>

          {/* Botones */}
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' as const, justifyContent: 'center', marginTop: 8 }}>
            <Link
              href="/#auditoria"
              style={{
                display: 'inline-block',
                background: '#2563FF', color: '#fff',
                fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15,
                padding: '14px 32px', borderRadius: 9, textDecoration: 'none',
                boxShadow: '0 0 28px rgba(37,99,255,0.3)',
                transition: 'background 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.background = '#1d4fd8'
                el.style.boxShadow  = '0 0 36px rgba(37,99,255,0.45)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.background = '#2563FF'
                el.style.boxShadow  = '0 0 28px rgba(37,99,255,0.3)'
              }}
            >
              Agendar mi auditoría estratégica →
            </Link>
            <a
              href="https://wa.me/34642040364"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'transparent', color: '#F1F5F9',
                fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15,
                padding: '14px 28px', borderRadius: 9, textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.12)',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'rgba(255,255,255,0.25)'
                el.style.background  = 'rgba(255,255,255,0.04)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'rgba(255,255,255,0.12)'
                el.style.background  = 'transparent'
              }}
            >
              {/* WhatsApp icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
