'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

/* ─── Diseño web cards ───────────────────────────────────────────────── */
const WEB_SERVICES = [
  {
    title: 'Diseño de Tiendas Online',
    subtitle: 'Vende desde el primer día',
    desc: 'Tiendas en WooCommerce, PrestaShop o plataforma a medida. Estructura pensada para que el usuario compre, con SEO técnico incluido de base y sin plantillas genéricas.',
    href: '/servicios/diseno-tiendas-online',
    color: '#2563FF',
    colorRgb: '37,99,255',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80&fit=crop',
    pills: ['WooCommerce', 'PrestaShop', 'SEO incluido', 'Responsive'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 6h18M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Diseño Web Corporativa',
    subtitle: 'Presencia profesional que convierte',
    desc: 'Web corporativa responsive, con identidad visual de marca y CMS para que puedas gestionarla tú. Diseñada para que el visitante entienda qué haces, confíe en tu negocio y contacte.',
    href: '/servicios/diseno-web-corporativa',
    color: '#6366F1',
    colorRgb: '99,102,241',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=80&fit=crop',
    pills: ['A medida', 'Responsive', 'CMS incluido', 'SEO técnico'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
]

/* ─── Marketing digital cards ────────────────────────────────────────── */
const MKTG_SERVICES = [
  {
    title: 'Posicionamiento SEO',
    desc: 'Aparece en la primera página de Google cuando alguien busca lo que vendes. Sin publicidad, sin depender de Meta. SEO técnico, local y de contenidos.',
    href: '/servicios/posicionamiento-web',
    color: '#0EA5E9',
    colorRgb: '14,165,233',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=700&q=80&fit=crop',
    pills: ['SEO técnico', 'SEO local', 'Contenidos'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M11 7v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Redes Sociales',
    desc: 'Community manager, creación de contenido, gestión de Instagram, LinkedIn y TikTok. Publicaciones con estrategia — no solo fotos con filtro.',
    href: '/servicios/marketing-digital#redes',
    color: '#A855F7',
    colorRgb: '168,85,247',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80&fit=crop',
    pills: ['Community Manager', 'Contenido visual', 'Calendario editorial'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M22 5L11 12M22 5l-7 16-4-7-7-4 16-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Publicidad Online',
    desc: 'Campañas en Meta Ads y Google Ads con presupuesto controlado, segmentación precisa y optimización continua. Pagás por resultados reales, no por clics vacíos.',
    href: '/servicios/marketing-digital#email',
    color: '#F59E0B',
    colorRgb: '245,158,11',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80&fit=crop',
    pills: ['Meta Ads', 'Google Ads', 'A/B creativas'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 17l5-5 4 4 9-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="16" y="16" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Posicionamiento GEO',
    desc: 'Ficha de Google Business optimizada, reputación online y visibilidad en búsquedas de "cerca de mí". Clientes locales que te encuentran cuando te buscan.',
    href: '/servicios/marketing-digital#geo',
    color: '#16A34A',
    colorRgb: '22,163,74',
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=700&q=80&fit=crop',
    pills: ['Google Business', 'SEO local', 'Reseñas'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
]

export default function ServiciosPage() {
  const [hoveredWeb,  setHoveredWeb]  = useState<number | null>(null)
  const [hoveredMktg, setHoveredMktg] = useState<number | null>(null)

  return (
    <>
      <style>{`
        .srv-web-card {
          position: relative; overflow: hidden;
          border-radius: 18px; cursor: pointer;
          text-decoration: none; display: block;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .srv-web-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 28px 70px rgba(0,0,0,0.45);
        }
        .srv-mktg-card {
          position: relative; overflow: hidden;
          border-radius: 16px; cursor: pointer;
          text-decoration: none; display: block;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .srv-mktg-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.4);
        }
        .srv-web-grid   { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .srv-mktg-grid  { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        @media (max-width: 768px) {
          .srv-web-grid  { grid-template-columns: 1fr !important; }
          .srv-mktg-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', minHeight: 460, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&fit=crop"
          alt="Servicios Aurentis Studio"
          fill priority sizes="100vw"
          style={{ objectFit: 'cover', opacity: 0.1 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(11,15,26,0.99) 0%, rgba(11,15,26,0.88) 100%)' }} />

        <div style={{ position: 'relative', zIndex: 2, padding: '140px 5% 80px', maxWidth: 720 }}>
          <span style={{
            display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: 11,
            fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const,
            color: '#3B82F6', marginBottom: 16,
          }}>
            Servicios
          </span>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4vw,52px)',
            fontWeight: 800, color: '#F1F5F9', margin: '0 0 18px', lineHeight: 1.1,
          }}>
            Diseño web y marketing digital{' '}
            <span style={{
              background: 'linear-gradient(100deg, #3B82F6 0%, #818CF8 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              para negocios que quieren crecer
            </span>
          </h1>
          <p style={{
            color: '#94A3B8', fontSize: 17, lineHeight: 1.7,
            fontFamily: 'var(--font-body)', fontWeight: 300, maxWidth: 560, margin: 0,
          }}>
            Cada servicio resuelve un problema concreto: conseguir más clientes, aparecer en Google, gestionar tu presencia digital o vender online. Sin paquetes genéricos.
          </p>
        </div>
      </section>

      {/* ── SECCIÓN 1: DISEÑO WEB ─────────────────────────────────────── */}
      <section style={{ background: '#0B0F1A', padding: '80px 5%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* Label + heading */}
          <div style={{ marginBottom: 40 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase' as const,
              color: '#3B82F6', marginBottom: 12,
            }}>
              <span style={{ display: 'inline-block', width: 24, height: 2, background: '#3B82F6', borderRadius: 999 }} />
              Diseño web
            </span>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,34px)',
              fontWeight: 800, color: '#F1F5F9', margin: '0 0 10px', lineHeight: 1.15,
            }}>
              Tu presencia digital, construida para convertir
            </h2>
            <p style={{
              color: '#64748B', fontSize: 15, lineHeight: 1.65,
              fontFamily: 'var(--font-body)', fontWeight: 300, maxWidth: 540, margin: 0,
            }}>
              Diseñamos webs que generan confianza y acción. No plantillas, no genéricos — cada proyecto parte de tu negocio.
            </p>
          </div>

          {/* 2 large cards */}
          <div className="srv-web-grid">
            {WEB_SERVICES.map((srv, i) => (
              <Link
                key={srv.title}
                href={srv.href}
                className="srv-web-card"
                onMouseEnter={() => setHoveredWeb(i)}
                onMouseLeave={() => setHoveredWeb(null)}
              >
                {/* BG image */}
                <div style={{ position: 'relative', height: 220 }}>
                  <Image src={srv.image} alt={srv.title} fill sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(7,9,15,0.3) 0%, rgba(7,9,15,0.85) 100%)' }} />
                  <div style={{ position: 'absolute', inset: 0, background: srv.color, opacity: hoveredWeb === i ? 0.2 : 0.1, transition: 'opacity 0.3s' }} />
                  {/* Icon in image */}
                  <div style={{
                    position: 'absolute', bottom: 20, left: 24,
                    width: 48, height: 48, borderRadius: '50%',
                    background: `rgba(${srv.colorRgb},0.18)`,
                    border: `1px solid rgba(${srv.colorRgb},0.4)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: srv.color,
                  }}>
                    {srv.icon}
                  </div>
                </div>

                {/* Text content */}
                <div style={{
                  background: '#0F172A',
                  borderTop: `2px solid ${srv.color}`,
                  padding: '22px 24px 26px',
                }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 600, color: srv.color, letterSpacing: '0.08em', textTransform: 'uppercase' as const, margin: '0 0 6px' }}>
                    {srv.subtitle}
                  </p>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 800, color: '#F1F5F9', margin: '0 0 10px' }}>
                    {srv.title}
                  </h3>
                  <p style={{ color: '#64748B', fontSize: 13, lineHeight: 1.65, fontFamily: 'var(--font-body)', fontWeight: 300, margin: '0 0 18px' }}>
                    {srv.desc}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' as const, gap: 10 }}>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' as const }}>
                      {srv.pills.map(p => (
                        <span key={p} style={{
                          background: `rgba(${srv.colorRgb},0.1)`,
                          border: `1px solid rgba(${srv.colorRgb},0.22)`,
                          color: '#94A3B8', fontSize: 11, padding: '3px 9px',
                          borderRadius: 999, fontFamily: 'var(--font-body)',
                        }}>
                          {p}
                        </span>
                      ))}
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 600, color: srv.color, fontFamily: 'var(--font-display)', whiteSpace: 'nowrap' as const }}>
                      Ver servicio →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 2: MARKETING DIGITAL ──────────────────────────────── */}
      <section style={{ background: '#0F172A', padding: '80px 5%', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* Label + heading */}
          <div style={{ marginBottom: 40 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase' as const,
              color: '#A855F7', marginBottom: 12,
            }}>
              <span style={{ display: 'inline-block', width: 24, height: 2, background: '#A855F7', borderRadius: 999 }} />
              Marketing digital
            </span>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,34px)',
              fontWeight: 800, color: '#F1F5F9', margin: '0 0 10px', lineHeight: 1.15,
            }}>
              Atrae clientes sin depender solo del boca a boca
            </h2>
            <p style={{
              color: '#64748B', fontSize: 15, lineHeight: 1.65,
              fontFamily: 'var(--font-body)', fontWeight: 300, maxWidth: 540, margin: 0,
            }}>
              SEO, redes sociales, publicidad y posicionamiento local. Elige lo que tu negocio necesita ahora mismo.
            </p>
          </div>

          {/* 2×2 grid */}
          <div className="srv-mktg-grid">
            {MKTG_SERVICES.map((srv, i) => (
              <Link
                key={srv.title}
                href={srv.href}
                className="srv-mktg-card"
                onMouseEnter={() => setHoveredMktg(i)}
                onMouseLeave={() => setHoveredMktg(null)}
              >
                {/* Top image strip */}
                <div style={{ position: 'relative', height: 160 }}>
                  <Image src={srv.image} alt={srv.title} fill sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(7,9,15,0.25) 0%, rgba(7,9,15,0.88) 100%)' }} />
                  <div style={{ position: 'absolute', inset: 0, background: srv.color, opacity: hoveredMktg === i ? 0.2 : 0.08, transition: 'opacity 0.3s' }} />
                  {/* Icon */}
                  <div style={{
                    position: 'absolute', bottom: 16, left: 20,
                    width: 40, height: 40, borderRadius: '50%',
                    background: `rgba(${srv.colorRgb},0.18)`,
                    border: `1px solid rgba(${srv.colorRgb},0.4)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: srv.color,
                  }}>
                    {srv.icon}
                  </div>
                </div>

                {/* Text */}
                <div style={{
                  background: '#0B0F1A',
                  borderTop: `2px solid ${srv.color}`,
                  padding: '18px 20px 22px',
                }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 800, color: '#F1F5F9', margin: '0 0 8px' }}>
                    {srv.title}
                  </h3>
                  <p style={{ color: '#64748B', fontSize: 12.5, lineHeight: 1.65, fontFamily: 'var(--font-body)', fontWeight: 300, margin: '0 0 14px' }}>
                    {srv.desc}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' as const, gap: 8 }}>
                    <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' as const }}>
                      {srv.pills.map(p => (
                        <span key={p} style={{
                          background: `rgba(${srv.colorRgb},0.1)`,
                          border: `1px solid rgba(${srv.colorRgb},0.2)`,
                          color: '#94A3B8', fontSize: 10.5, padding: '2px 8px',
                          borderRadius: 999, fontFamily: 'var(--font-body)',
                        }}>
                          {p}
                        </span>
                      ))}
                    </div>
                    <span style={{ fontSize: 12, fontWeight: 600, color: srv.color, fontFamily: 'var(--font-display)', whiteSpace: 'nowrap' as const }}>
                      Ver más →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section style={{
        padding: '80px 5%', background: '#0B0F1A',
        borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center',
      }}>
        <span style={{
          display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: 11,
          fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const,
          color: '#3B82F6', marginBottom: 16,
        }}>
          ¿Por dónde empezamos?
        </span>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.8vw,40px)',
          fontWeight: 800, color: '#F1F5F9', margin: '0 auto 14px',
          maxWidth: 620, lineHeight: 1.15,
        }}>
          Cuéntame en qué punto está tu negocio
        </h2>
        <p style={{
          color: '#94A3B8', fontSize: 16, lineHeight: 1.7,
          fontFamily: 'var(--font-body)', fontWeight: 300,
          maxWidth: 480, margin: '0 auto 40px',
        }}>
          Te digo exactamente qué necesitas y cuánto cuesta — sin rodeos, sin compromiso y sin perderte en opciones que no necesitas.
        </p>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' as const }}>
          {/* Primary CTA */}
          <Link
            href="/#auditoria"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#2563FF', color: '#fff',
              fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15,
              padding: '14px 32px', borderRadius: 9, textDecoration: 'none',
              boxShadow: '0 0 28px rgba(37,99,255,0.3)',
              transition: 'background 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background  = '#1d4fd8'
              el.style.boxShadow   = '0 0 36px rgba(37,99,255,0.45)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background  = '#2563FF'
              el.style.boxShadow   = '0 0 28px rgba(37,99,255,0.3)'
            }}
          >
            Solicitar propuesta →
          </Link>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/34600000000?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20vuestros%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#F1F5F9',
              fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15,
              padding: '14px 28px', borderRadius: 9, textDecoration: 'none',
              transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background   = 'rgba(255,255,255,0.09)'
              el.style.borderColor  = 'rgba(255,255,255,0.2)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background   = 'rgba(255,255,255,0.05)'
              el.style.borderColor  = 'rgba(255,255,255,0.1)'
            }}
          >
            {/* WhatsApp icon */}
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Escríbenos por WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
