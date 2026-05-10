'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Category = 'Todos' | 'Web' | 'Landing'

/* ── Data ──────────────────────────────────────────────────── */
const projects: {
  id: string
  category: 'Web' | 'Landing'
  sector: string
  name: string
  serviceType: string
  description: string
  services: string[]
  image: string
  accentColor: string
  accentBg: string
  accentBorder: string
}[] = [
  {
    id: 'verdaco',
    category: 'Web',
    sector: 'Alimentación ecológica',
    name: 'Verda·co',
    serviceType: 'Web estratégica',
    description: 'Diseño web para una tienda local de alimentación ecológica. El objetivo era comunicar cercanía, confianza y valores de sostenibilidad.',
    services: ['Web estratégica', 'Imagen digital coherente'],
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80&fit=crop',
    accentColor: '#16A34A',
    accentBg: 'rgba(22,163,74,0.1)',
    accentBorder: 'rgba(22,163,74,0.2)',
  },
  {
    id: 'novalaw',
    category: 'Landing',
    sector: 'Servicios legales',
    name: 'Nova·Law',
    serviceType: 'Landing de captación',
    description: 'Landing page para despacho de abogados especializado en derecho mercantil. Estructura diseñada para generar consultas cualificadas.',
    services: ['Landing de captación', 'Sistema de captación'],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80&fit=crop',
    accentColor: '#2563FF',
    accentBg: 'rgba(37,99,255,0.1)',
    accentBorder: 'rgba(37,99,255,0.2)',
  },
  {
    id: 'formahub',
    category: 'Web',
    sector: 'Formación online',
    name: 'Forma·Hub',
    serviceType: 'Web estratégica',
    description: 'Web para educador independiente que lanzaba su primer programa online. Foco en credibilidad desde cero y captación de los primeros alumnos.',
    services: ['Web estratégica', 'Lanzamiento digital'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&fit=crop',
    accentColor: '#6366F1',
    accentBg: 'rgba(99,102,241,0.1)',
    accentBorder: 'rgba(99,102,241,0.2)',
  },
  {
    id: 'pulsegym',
    category: 'Landing',
    sector: 'Deporte y salud',
    name: 'Pulse·Gym',
    serviceType: 'Landing de captación',
    description: 'Página de captación para gimnasio boutique de entrenamiento personalizado. Diferenciarse de las grandes cadenas con el mensaje correcto.',
    services: ['Landing de captación', 'Imagen digital coherente'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80&fit=crop',
    accentColor: '#A855F7',
    accentBg: 'rgba(168,85,247,0.1)',
    accentBorder: 'rgba(168,85,247,0.2)',
  },
]

/* ── Page ─────────────────────────────────────────────────── */
export default function PortafolioPage() {
  const [active, setActive] = useState<Category>('Todos')

  const visible = projects.filter(p => active === 'Todos' || p.category === active)

  const clampStyle: React.CSSProperties = {
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  }

  return (
    <>
      <style>{`
        .pf-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          max-width: 1100px;
          margin: 48px auto 0;
        }
        .pf-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          height: 380px;
          transition: transform 0.4s ease;
          display: block;
        }
        .pf-card:hover { transform: scale(1.02); }
        .pf-card-img { transition: transform 0.4s ease !important; }
        .pf-card:hover .pf-card-img { transform: scale(1.05) !important; }
        .pf-color-overlay { transition: opacity 0.4s ease; }
        .pf-card:hover .pf-color-overlay { opacity: 0.25 !important; }
        .pf-filter-btn {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.12);
          color: #94A3B8;
          font-family: var(--font-display);
          font-size: 13.5px;
          font-weight: 600;
          padding: 9px 22px;
          border-radius: 999px;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }
        .pf-filter-btn.active  { background: #2563FF; border-color: #2563FF; color: #fff; }
        .pf-filter-btn:hover:not(.active) { border-color: rgba(255,255,255,0.25); color: #F1F5F9; }
        .pf-see-link {
          font-size: 13px;
          font-weight: 600;
          font-family: var(--font-display);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          flex-shrink: 0;
          transition: gap 0.2s;
        }
        .pf-card:hover .pf-see-link { gap: 8px; }
        @media (max-width: 560px) { .pf-grid { grid-template-columns: 1fr; } }
      `}</style>

      {/* ── Hero ─────────────────────────────────── */}
      <section style={{ background: '#0B0F1A', padding: '140px 5% 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&fit=crop"
            alt=""
            fill
            style={{ objectFit: 'cover', opacity: 0.08 }}
          />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(11,15,26,0.7) 0%, #0B0F1A 100%)', zIndex: 0 }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3B82F6', display: 'block', marginBottom: 18 }}>
            Portafolio
          </span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 800, color: '#F1F5F9', margin: '0 auto 20px', lineHeight: 1.12, maxWidth: 680 }}>
            Proyectos en los que he trabajado
          </h1>
          <p style={{ color: '#94A3B8', fontSize: 16, lineHeight: 1.7, fontFamily: 'var(--font-body)', fontWeight: 300, maxWidth: 560, margin: '0 auto' }}>
            Una selección de conceptos visuales que muestra el enfoque estratégico y la dirección de diseño que aplico en cada proyecto.
          </p>
        </div>
      </section>

      {/* ── Filter + Grid ────────────────────────── */}
      <section style={{ background: '#0B0F1A', padding: '0 5% 100px' }}>

        {/* Filter */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 0 }}>
          {(['Todos', 'Web', 'Landing'] as Category[]).map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`pf-filter-btn${active === cat ? ' active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="pf-grid">
          {visible.map(p => (
            <Link key={p.id} href={`/portafolio/${p.id}`} className="pf-card">

              {/* Background photo */}
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="pf-card-img"
                style={{ objectFit: 'cover' }}
              />

              {/* Gradient overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,9,15,0.97) 0%, rgba(7,9,15,0.6) 50%, rgba(7,9,15,0.1) 100%)', zIndex: 1 }} />

              {/* Color tint */}
              <div
                className="pf-color-overlay"
                style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: p.accentColor, opacity: 0.15, zIndex: 1 }}
              />

              {/* Sector pill — top */}
              <div style={{ position: 'absolute', top: 16, left: 16, right: 16, zIndex: 2 }}>
                <span style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)', color: '#94A3B8', fontSize: 11, padding: '4px 12px', borderRadius: 999, fontFamily: 'var(--font-body)', display: 'inline-block' }}>
                  {p.sector}
                </span>
              </div>

              {/* Bottom content */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2, padding: 24 }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: '#fff', margin: '0 0 6px', lineHeight: 1.2 }}>
                  {p.name}
                </p>
                <p style={{ fontSize: 13, fontWeight: 500, color: p.accentColor, margin: '0 0 8px', fontFamily: 'var(--font-body)' }}>
                  {p.serviceType}
                </p>
                <p style={{ fontSize: 13, color: '#94A3B8', fontWeight: 300, lineHeight: 1.5, margin: '0 0 16px', fontFamily: 'var(--font-body)', ...clampStyle }}>
                  {p.description}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {p.services.map(s => (
                      <span key={s} style={{ background: p.accentBg, border: `1px solid ${p.accentBorder}`, color: p.accentColor, fontSize: 10, padding: '2px 8px', borderRadius: 999, fontFamily: 'var(--font-body)' }}>
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="pf-see-link" style={{ color: p.accentColor }}>
                    Ver concepto →
                  </span>
                </div>
              </div>

            </Link>
          ))}
        </div>


      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section style={{ background: '#0F172A', padding: '100px 5%', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.6vw, 36px)', fontWeight: 800, color: '#F1F5F9', margin: '0 auto 16px', maxWidth: 560, lineHeight: 1.2 }}>
          ¿Tu proyecto podría ser el siguiente?
        </h2>
        <p style={{ color: '#94A3B8', fontSize: 15.5, lineHeight: 1.7, fontFamily: 'var(--font-body)', fontWeight: 300, maxWidth: 480, margin: '0 auto 36px' }}>
          Trabajamos con negocios que quieren resultados reales. Si tienes un proyecto entre manos, cuéntanos y te decimos si podemos ayudarte.
        </p>
        <Link
          href="/contacto"
          style={{ display: 'inline-block', background: '#2563FF', color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, padding: '14px 32px', borderRadius: 9, textDecoration: 'none', boxShadow: '0 0 28px rgba(37,99,255,0.3)' }}
        >
          Hablemos
        </Link>
      </section>
    </>
  )
}
