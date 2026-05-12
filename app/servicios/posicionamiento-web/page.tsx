import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Posicionamiento Web SEO — Aparecer en la Primera Página de Google — Aurentis Studio',
  description: 'Servicio de posicionamiento SEO: auditoría técnica, palabras clave, contenido optimizado y SEO local. Tráfico orgánico sostenible sin depender de publicidad.',
}

const ACCENT = '#0EA5E9'
const ACCENT_RGB = '14,165,233'

function BackBtn() {
  return (
    <Link
      href="/servicios"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,0.1)',
        color: '#94A3B8', fontSize: 12, padding: '7px 14px',
        borderRadius: 999, marginBottom: 20,
        textDecoration: 'none', fontFamily: 'var(--font-body)',
      }}
    >
      ← Servicios
    </Link>
  )
}

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="8" cy="8" r="7" stroke={`rgba(${ACCENT_RGB},0.4)`} strokeWidth="1"/>
      <path d="M5 8l2 2 4-4" stroke={ACCENT} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const problems = [
  { title: 'No apareces cuando buscan lo que vendes', text: 'Si tu competencia aparece antes en Google, están captando los clientes que deberían ser tuyos. Una web sin SEO es invisible aunque esté bien diseñada.' },
  { title: 'No sabes por qué palabras posicionarte', text: 'No todas las búsquedas valen lo mismo. Hay que encontrar las frases con intención de compra real, no solo de información. Eso requiere análisis, no intuición.' },
  { title: 'Tienes visitas pero no consultas ni ventas', text: 'El tráfico genérico no sirve de nada. El SEO bien hecho atrae exactamente a quien ya está buscando lo que ofreces — con intención de contratar.' },
  { title: 'No puedes mantener el ritmo tú solo', text: 'El posicionamiento web necesita trabajo continuo: actualización de contenidos, revisión técnica y análisis de posiciones. Sin constancia, lo que subes baja.' },
]

const seoServices = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M9 11a4 4 0 108 0 4 4 0 00-8 0zM21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Auditoría SEO completa',
    text: 'Analizamos cada elemento técnico de tu web: velocidad de carga, indexación, errores de rastreo, estructura de URLs y Core Web Vitals.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Investigación de palabras clave',
    text: 'Encontramos los términos exactos que usa tu cliente cuando busca lo que vendes, con datos reales de volumen de búsqueda y nivel de competencia.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'SEO técnico on-page',
    text: 'Optimizamos metaetiquetas, encabezados, imágenes, datos estructurados y velocidad de carga para que Google entienda y priorice tu web.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Contenido SEO optimizado',
    text: 'Páginas de servicio, artículos de blog y textos pensados para posicionar en las búsquedas que traen clientes con intención de compra, no solo tráfico.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8 2 4 6 4 10c0 5 8 12 8 12s8-7 8-12c0-4-4-8-8-8z" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'SEO local y Google My Business',
    text: 'Optimización de tu ficha de Google y estrategia de posicionamiento local para negocios que dependen de clientes de su ciudad o zona.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 17l5-5 4 4 9-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Informes mensuales de posicionamiento',
    text: 'Cada mes sabes exactamente en qué posición estás para cada palabra clave, cuánto tráfico orgánico recibes y qué acciones tomamos el siguiente mes.',
  },
]

export default function PosicionamientoWebPage() {
  return (
    <>
      <style>{`
        .pw-problems { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; max-width: 900px; margin: 0 auto; }
        .pw-seo-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; max-width: 1000px; margin: 0 auto; }
        .pw-split { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; max-width: 1100px; margin: 0 auto; align-items: center; }
        @media (max-width: 768px) {
          .pw-problems { grid-template-columns: 1fr !important; }
          .pw-seo-grid { grid-template-columns: 1fr !important; }
          .pw-split { grid-template-columns: 1fr !important; }
        }
        .bc-back { color: #818CF8; text-decoration: none; font-family: var(--font-body); font-size: 14px; font-weight: 400; display: inline-block; transition: color 0.2s; }
        .bc-back:hover { color: #2563FF; }
      `}</style>

      {/* BREADCRUMB */}
      <div style={{ background: '#0B0F1A', padding: '16px 24px', paddingTop: 86, position: 'relative', zIndex: 1 }}>
        <a href="/servicios" className="bc-back">← Volver a Servicios</a>
      </div>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: 480, overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        <Image
          src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1600&q=80&fit=crop"
          alt="Posicionamiento web SEO"
          fill priority sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(7,9,15,0.97) 0%, rgba(7,9,15,0.65) 55%, rgba(7,9,15,0.3) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: `rgba(${ACCENT_RGB},0.06)` }} />

        <div style={{ position: 'relative', zIndex: 2, padding: '48px 5%', maxWidth: 700 }}>
          <BackBtn />
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 10px' }}>
            Posicionamiento web
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,3.5vw,48px)', fontWeight: 800, color: '#F1F5F9', margin: '0 0 16px', lineHeight: 1.15 }}>
            SEO para aparecer en la primera página de Google y quedarte
          </h1>
          <p style={{ color: '#94A3B8', fontSize: 16, lineHeight: 1.7, fontFamily: 'var(--font-body)', fontWeight: 300, maxWidth: 540, margin: 0 }}>
            Posicionamiento web real: auditoría técnica, investigación de palabras clave, contenidos optimizados y SEO local. Sin promesas de resultados en 24 horas ni atajos que penalicen tu web.
          </p>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section style={{ background: '#0B0F1A', padding: '80px 5%' }}>
        <div style={{ maxWidth: 900, margin: '0 auto 40px' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: ACCENT, display: 'block', marginBottom: 10 }}>
            El diagnóstico
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,32px)', fontWeight: 800, color: '#F1F5F9', margin: 0 }}>
            ¿Cuál de estos problemas te está frenando?
          </h2>
        </div>
        <div className="pw-problems">
          {problems.map(p => (
            <div key={p.title} style={{
              background: '#0F172A',
              borderLeft: `3px solid ${ACCENT}`,
              borderRadius: '0 12px 12px 0',
              padding: '20px 24px',
            }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#F1F5F9', marginBottom: 8, fontFamily: 'var(--font-display)' }}>{p.title}</div>
              <div style={{ fontSize: 13, color: '#64748B', lineHeight: 1.65, fontFamily: 'var(--font-body)' }}>{p.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS SEO */}
      <section style={{ background: '#0F172A', padding: '80px 5%', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto 40px' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: ACCENT, display: 'block', marginBottom: 10 }}>
            Qué trabajamos
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,32px)', fontWeight: 800, color: '#F1F5F9', margin: 0 }}>
            Qué incluye nuestro servicio SEO
          </h2>
        </div>
        <div className="pw-seo-grid">
          {seoServices.map(s => (
            <div key={s.title} style={{
              background: '#0B0F1A',
              border: `1px solid rgba(${ACCENT_RGB},0.12)`,
              borderRadius: 14,
              padding: '22px 24px',
              display: 'flex',
              gap: 16,
              alignItems: 'flex-start',
            }}>
              <div style={{
                width: 42, height: 42, borderRadius: 10, flexShrink: 0,
                background: `rgba(${ACCENT_RGB},0.1)`,
                border: `1px solid rgba(${ACCENT_RGB},0.2)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: ACCENT,
              }}>
                {s.icon}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: '#F1F5F9', marginBottom: 6 }}>{s.title}</div>
                <div style={{ fontSize: 13, color: '#64748B', lineHeight: 1.6, fontFamily: 'var(--font-body)' }}>{s.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SPLIT — largo plazo */}
      <section style={{ background: '#0B0F1A', padding: '80px 5%' }}>
        <div className="pw-split">
          <div style={{ position: 'relative', height: 420, borderRadius: 16, overflow: 'hidden' }}>
            <Image
              src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80&fit=crop"
              alt="SEO a largo plazo"
              fill sizes="(max-width:768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, rgba(${ACCENT_RGB},0.15) 0%, rgba(7,9,15,0.6) 100%)` }} />
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: ACCENT, display: 'block', marginBottom: 10 }}>
              El enfoque correcto
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,32px)', fontWeight: 800, color: '#F1F5F9', margin: '0 0 20px', lineHeight: 1.2 }}>
              El SEO es la única inversión digital que sigue funcionando cuando paras de pagar.
            </h2>
            <p style={{ color: '#64748B', fontSize: 15, lineHeight: 1.75, fontFamily: 'var(--font-body)', fontWeight: 300, margin: '0 0 16px' }}>
              Un anuncio en Google Ads para el día que apagas la campaña. Un artículo bien posicionado en SEO puede traerte clientes durante años sin coste adicional. Esa es la diferencia.
            </p>
            <p style={{ color: '#64748B', fontSize: 15, lineHeight: 1.75, fontFamily: 'var(--font-body)', fontWeight: 300, margin: 0 }}>
              No es rápido. No es magia. Es trabajo técnico sistemático que acumula autoridad en Google y convierte tu web en el mejor vendedor que tienes — uno que trabaja las 24 horas sin coste por clic.
            </p>
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Resultados sostenibles sin depender de ads', 'Tráfico cualificado que llega porque te busca', 'Posicionamiento que crece con el tiempo'].map(item => (
                <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <Check />
                  <span style={{ color: '#94A3B8', fontSize: 14, lineHeight: 1.55, fontFamily: 'var(--font-body)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0F172A', padding: '80px 5%', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.8vw,38px)', fontWeight: 800, color: '#F1F5F9', margin: '0 auto 16px', maxWidth: 600, lineHeight: 1.2 }}>
          ¿Tu web aparece en Google cuando buscan lo que vendes?
        </h2>
        <p style={{ color: '#94A3B8', fontSize: 16, lineHeight: 1.7, fontFamily: 'var(--font-body)', fontWeight: 300, maxWidth: 440, margin: '0 auto 36px' }}>
          Si la respuesta es no o no lo sabes, empieza por aquí. Analizamos tu situación SEO actual sin coste y te decimos exactamente qué falta.
        </p>
        <Link
          href="/#auditoria"
          style={{
            display: 'inline-block', background: ACCENT, color: '#fff',
            fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15,
            padding: '14px 32px', borderRadius: 9, textDecoration: 'none',
            boxShadow: `0 0 28px rgba(${ACCENT_RGB},0.3)`,
          }}
        >
          Solicitar análisis SEO gratuito →
        </Link>
      </section>
    </>
  )
}
