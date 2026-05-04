'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const gradText: React.CSSProperties = {
  background: 'linear-gradient(100deg, #3B82F6, #818CF8)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

const services = [
  {
    num: '01',
    title: 'Diseño de Tiendas Online',
    desc: 'Creamos tu tienda online en WooCommerce o PrestaShop para que venda desde el primer día. Estructura pensada para comprar, no solo para navegar. SEO incluido de base.',
    href: '/servicios/diseno-tiendas-online',
    color: '#2563FF',
    colorRgb: '37,99,255',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&fit=crop',
    pills: ['WooCommerce', 'PrestaShop', 'SEO incluido'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 6h18M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Diseño Web Corporativa',
    desc: 'Página web corporativa profesional, responsive y con SEO técnico incluido. Diseñada para que el visitante entienda qué haces, confíe y contacte. Sin plantillas genéricas.',
    href: '/servicios/diseno-web-corporativa',
    color: '#6366F1',
    colorRgb: '99,102,241',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80&fit=crop',
    pills: ['A medida', 'Responsive', 'CMS incluido'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Posicionamiento Web',
    desc: 'SEO para aparecer en la primera página de Google cuando alguien busca lo que vendes. Auditoría técnica, palabras clave, contenidos optimizados y SEO local.',
    href: '/servicios/posicionamiento-web',
    color: '#0EA5E9',
    colorRgb: '14,165,233',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80&fit=crop',
    pills: ['SEO técnico', 'SEO local', 'Contenidos'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 17l5-5 4 4 9-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 4v6h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Marketing Digital',
    desc: 'Gestión de redes sociales, community manager, campañas en Meta Ads y Google Ads. Todo lo que necesita tu negocio para crecer en digital sin que tengas que hacerlo tú.',
    href: '/servicios/marketing-digital',
    color: '#A855F7',
    colorRgb: '168,85,247',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop',
    pills: ['Redes sociales', 'SEM', 'Community Manager'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M22 5L11 12M22 5l-7 16-4-7-7-4 16-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function ServiciosPage() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <>
      <style>{`
        .sv2-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          height: 320px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-decoration: none;
          display: block;
        }
        .sv2-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.4);
        }
        @media (max-width: 768px) {
          .sv2-cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: 480, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&fit=crop"
          alt="Servicios"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', opacity: 0.12 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(11,15,26,0.98) 0%, rgba(11,15,26,0.85) 100%)' }} />

        <div style={{ position: 'relative', zIndex: 2, padding: '140px 5% 80px', maxWidth: 700 }}>
          <span style={{
            display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: 12,
            fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const,
            color: '#3B82F6', marginBottom: 18,
          }}>
            Servicios
          </span>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(30px,4vw,52px)',
            fontWeight: 800, color: '#F1F5F9', margin: '0 0 20px', lineHeight: 1.12,
          }}>
            Diseño web, SEO y marketing digital{' '}
            <span style={gradText}>que generan clientes</span>
          </h1>
          <p style={{
            color: '#94A3B8', fontSize: 17, lineHeight: 1.7,
            fontFamily: 'var(--font-body)', fontWeight: 300, maxWidth: 560, margin: 0,
          }}>
            Tiendas online, webs corporativas, posicionamiento en Google y gestión de redes sociales. Cada servicio resuelve un problema concreto de tu negocio.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section style={{ background: '#0B0F1A', padding: '80px 5%' }}>
        <div
          className="sv2-cards-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 24,
            maxWidth: 1240,
            margin: '0 auto',
          }}
        >
          {services.map((srv, i) => (
            <Link
              key={srv.num}
              href={srv.href}
              className="sv2-card"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Background image */}
              <Image src={srv.image} alt={srv.title} fill sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />

              {/* Dark overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(7,9,15,0.97) 0%, rgba(7,9,15,0.5) 55%, rgba(7,9,15,0.1) 100%)',
              }} />

              {/* Color overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: srv.color,
                opacity: hovered === i ? 0.18 : 0.08,
                transition: 'opacity 0.3s',
              }} />

              {/* Content */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 28, zIndex: 2 }}>
                {/* Icon circle */}
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: `rgba(${srv.colorRgb},0.15)`,
                  border: `1px solid rgba(${srv.colorRgb},0.3)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 14, color: srv.color,
                }}>
                  {srv.icon}
                </div>

                <div style={{
                  fontSize: 11, color: 'rgba(255,255,255,0.3)', fontWeight: 600,
                  letterSpacing: '0.1em', marginBottom: 6, fontFamily: 'var(--font-body)',
                }}>
                  {srv.num}
                </div>

                <h2 style={{
                  fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800,
                  color: '#fff', margin: '0 0 8px',
                }}>
                  {srv.title}
                </h2>

                <p style={{
                  fontSize: 13, color: '#94A3B8', lineHeight: 1.6,
                  fontFamily: 'var(--font-body)', margin: '0 0 14px',
                }}>
                  {srv.desc}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' as const, gap: 8 }}>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' as const }}>
                    {srv.pills.map(p => (
                      <span key={p} style={{
                        background: `rgba(${srv.colorRgb},0.12)`,
                        border: `1px solid rgba(${srv.colorRgb},0.25)`,
                        color: '#94A3B8', fontSize: 11, padding: '3px 9px',
                        borderRadius: 999, fontFamily: 'var(--font-body)',
                      }}>
                        {p}
                      </span>
                    ))}
                  </div>
                  <span style={{
                    fontSize: 13, fontWeight: 600, color: srv.color,
                    fontFamily: 'var(--font-display)', whiteSpace: 'nowrap' as const,
                  }}>
                    Ver servicio →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{
        padding: '80px 5%', background: '#0F172A',
        borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.8vw,38px)',
          fontWeight: 800, color: '#F1F5F9', margin: '0 auto 16px',
          maxWidth: 600, lineHeight: 1.2,
        }}>
          ¿No sabes por dónde empezar?
        </h2>
        <p style={{
          color: '#94A3B8', fontSize: 16, lineHeight: 1.7,
          fontFamily: 'var(--font-body)', fontWeight: 300,
          maxWidth: 480, margin: '0 auto 36px',
        }}>
          Dime en qué punto está tu negocio ahora mismo y te digo exactamente qué necesitas — sin rodeos y sin compromiso.
        </p>
        <Link
          href="/#auditoria"
          style={{
            display: 'inline-block', background: '#2563FF', color: '#fff',
            fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15,
            padding: '14px 32px', borderRadius: 9, textDecoration: 'none',
            boxShadow: '0 0 28px rgba(37,99,255,0.3)',
          }}
        >
          Solicitar auditoría gratuita →
        </Link>
      </section>
    </>
  )
}
