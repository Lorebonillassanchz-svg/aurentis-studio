'use client'

import Link from 'next/link'
import React, { useState } from 'react'

/* ── Gradient text helper ─────────────────────────────────── */
const gradText: React.CSSProperties = {
  background: 'linear-gradient(100deg, #3B82F6, #818CF8)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

/* ── Icons ───────────────────────────────────────────────── */
function IconMonitor() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="3" width="20" height="14" rx="2.5" stroke="#60A5FA" strokeWidth="1.5"/>
      <path d="M8 21h8M12 17v4" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
function IconCart() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="#60A5FA" strokeWidth="1.5" strokeLinejoin="round"/>
      <line x1="3" y1="6" x2="21" y2="6" stroke="#60A5FA" strokeWidth="1.5"/>
      <path d="M16 10a4 4 0 01-8 0" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
function IconSearch() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="8" stroke="#60A5FA" strokeWidth="1.5"/>
      <path d="M21 21l-4.35-4.35" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
function IconUsers() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="7" r="4" stroke="#60A5FA" strokeWidth="1.5"/>
      <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 3.13a4 4 0 010 7.75M21 21v-2a4 4 0 00-3-3.87" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
function IconAds() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" stroke="#60A5FA" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M13 13l6 6" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
function IconEmail() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="4" width="20" height="16" rx="2.5" stroke="#60A5FA" strokeWidth="1.5"/>
      <path d="M2 8l10 7 10-7" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

/* ── Service data ─────────────────────────────────────────── */
const SERVICES = [
  {
    icon: <IconMonitor />,
    title: 'Diseño Web Profesional',
    desc: 'Tu web, seria y funcional. Diseñamos tu presencia digital para que genere confianza desde el primer clic y convierta visitas en contactos reales.',
    href: '/servicios/diseno-web-corporativa',
    featured: true,
  },
  {
    icon: <IconCart />,
    title: 'Tienda Online',
    desc: 'Vende por internet sin complicaciones. Desarrollamos tu tienda en WooCommerce o Shopify con catálogo, pasarela de pago y gestión de pedidos lista para funcionar.',
    href: '/servicios/diseno-tiendas-online',
    featured: false,
  },
  {
    icon: <IconSearch />,
    title: 'Posicionamiento SEO',
    desc: 'Aparece en Google cuando tu cliente te busca. Sin publicidad de pago. Trabajamos tu visibilidad orgánica para que te encuentren antes que a tu competencia.',
    href: '/servicios/posicionamiento-web',
    featured: false,
  },
  {
    icon: <IconUsers />,
    title: 'Community Manager',
    desc: 'Gestión completa de tus redes sociales. Estrategia de contenido, diseño de publicaciones, edición de vídeo para Reels y TikTok y crecimiento de comunidad.',
    href: '/servicios/community-manager',
    featured: false,
  },
  {
    icon: <IconAds />,
    title: 'Meta Ads & Google Ads',
    desc: 'Publicidad que trae clientes desde el primer día. Campañas en Instagram, Facebook y Google optimizadas para maximizar tu inversión.',
    href: '/servicios/meta-ads',
    featured: false,
  },
  {
    icon: <IconEmail />,
    title: 'Email Marketing & Automatización',
    desc: 'Mantén el contacto con tus clientes en automático. Secuencias de emails, newsletters y respuestas automáticas para no perder ningún lead.',
    href: '/servicios/email-marketing',
    featured: false,
  },
]

/* ── Card ─────────────────────────────────────────────────── */
function ServiceCard({ service }: { service: typeof SERVICES[number] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={service.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 18,
        padding: service.featured ? 32 : 28,
        background: service.featured
          ? 'linear-gradient(160deg, #0C1422, #0B0F1A)'
          : '#0F172A',
        border: hovered
          ? '1px solid rgba(37,99,255,0.35)'
          : '1px solid rgba(37,99,255,0.14)',
        position: 'relative',
        overflow: 'hidden',
        textDecoration: 'none',
        cursor: 'pointer',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        boxShadow: hovered ? '0 12px 40px rgba(37,99,255,0.12)' : 'none',
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: 'linear-gradient(90deg, #2563FF, #6366F1)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.25s ease',
      }} />

      {/* Badge on featured */}
      {service.featured && (
        <span style={{
          position: 'absolute', top: 20, right: 20,
          background: 'rgba(37,99,255,0.12)',
          border: '1px solid rgba(37,99,255,0.3)',
          color: '#93C5FD',
          borderRadius: 999, fontSize: 11, fontWeight: 600,
          padding: '4px 10px', whiteSpace: 'nowrap',
          fontFamily: 'var(--font-display)',
        }}>
          Más solicitado
        </span>
      )}

      {/* Icon */}
      <div style={{
        width: service.featured ? 50 : 44,
        height: service.featured ? 50 : 44,
        borderRadius: 11,
        background: 'rgba(37,99,255,0.08)',
        border: '1px solid rgba(37,99,255,0.22)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, marginBottom: 18,
      }}>
        {service.icon}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: service.featured ? 20 : 16,
        fontWeight: 700,
        color: '#F1F5F9',
        margin: '0 0 10px',
        lineHeight: 1.3,
      }}>
        {service.title}
      </h3>

      {/* Description */}
      <p style={{
        color: '#94A3B8',
        fontSize: service.featured ? 14.5 : 13,
        lineHeight: 1.68,
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        flexGrow: 1,
        margin: '0 0 20px',
      }}>
        {service.desc}
      </p>

      {/* CTA */}
      <span style={{
        color: hovered ? '#93C5FD' : '#60A5FA',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: service.featured ? 14 : 13,
        marginTop: 'auto',
        transition: 'color 0.2s',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
      }}>
        Saber más
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transition: 'transform 0.2s', transform: hovered ? 'translateX(3px)' : 'none' }}>
          <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </Link>
  )
}

/* ── Main component ───────────────────────────────────────── */
export default function Servicios() {
  return (
    <>
      <style>{`
        .servicios-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          max-width: 1240px;
          margin: 0 auto;
        }
        @media (max-width: 1024px) {
          .servicios-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .servicios-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="servicios" style={{ padding: '110px 5%', background: '#0B0F1A' }}>

        {/* Header */}
        <div style={{ maxWidth: 1240, margin: '0 auto 56px' }}>
          <span style={{
            display: 'inline-block',
            fontFamily: 'var(--font-display)',
            fontSize: 12, fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#3B82F6', marginBottom: 14,
          }}>
            Servicios
          </span>
          <h2
            className="reveal"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 3.2vw, 42px)',
              fontWeight: 800,
              color: '#F1F5F9',
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            Todo lo que necesitas para{' '}
            <span style={gradText}>crecer en digital</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="servicios-grid">
          {SERVICES.map((s, i) => (
            <div key={s.href} className={`reveal${i > 0 ? ` reveal-delay-${Math.min(i, 3)}` : ''}`}>
              <ServiceCard service={s} />
            </div>
          ))}
        </div>

      </section>
    </>
  )
}
