import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diseño Web Corporativa Profesional para Empresas — Aurentis Studio',
  description: 'Diseño de páginas web corporativas profesionales a medida. Responsive, con SEO técnico integrado y CMS para que actualices tu web sin programar.',
}

const ACCENT = '#6366F1'
const ACCENT_RGB = '99,102,241'

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
  { title: 'Tu web no transmite lo que eres hoy', text: 'La web de hace 5 años ya no refleja tu empresa. Una presencia digital desactualizada comunica descuido antes de que el cliente lea una sola línea.' },
  { title: 'El usuario no encuentra lo que busca', text: 'Si tardan más de 10 segundos en entender qué haces o cómo contactarte, se van. La mala estructura cuesta más clientes que el mal diseño.' },
  { title: 'No funciona bien en el móvil', text: 'El 65% de las búsquedas locales se hacen desde el móvil. Si tu web no es responsive, estás perdiendo más de la mitad de tus clientes potenciales.' },
  { title: 'Google no te encuentra', text: 'Una web sin SEO técnico es invisible aunque esté bien diseñada. Da igual lo bonita que sea si no aparece cuando buscan lo que ofreces.' },
]

const includes = [
  'Diseño web profesional adaptado a tu sector e identidad visual',
  'Arquitectura de páginas estratégica para guiar al usuario hacia el contacto',
  '100% responsive: perfecta en móvil, tablet y ordenador',
  'SEO técnico integrado en la construcción, no como añadido posterior',
  'Formularios de captación configurados y probados',
  'Panel CMS para que actualices tu web sin saber programar',
]

const process = [
  { num: '01', title: 'Entendemos tu empresa y tus objetivos', text: '¿Qué hace tu empresa? ¿A quién le habla tu web? ¿Qué quieres que haga el visitante? Esas tres respuestas guían todo lo demás.' },
  { num: '02', title: 'Definimos la estructura y los mensajes', text: 'Qué páginas, en qué orden, con qué titulares. La arquitectura de la información antes de cualquier decisión de diseño.' },
  { num: '03', title: 'Diseñamos y desarrollamos', text: 'Propuesta visual, desarrollo responsive y optimizado, SEO técnico y pruebas de rendimiento en todos los dispositivos.' },
  { num: '04', title: 'Revisamos juntos, publicamos y te formamos', text: 'No publicamos nada sin tu visto bueno. Y cuando lo hacemos, te enseñamos a gestionar tu página web sin depender de nadie.' },
]

export default function WebCorporativaPage() {
  return (
    <>
      <style>{`
        .dwc-problems { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; max-width: 900px; margin: 0 auto; }
        .dwc-split { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; max-width: 1100px; margin: 0 auto; align-items: center; }
        .dwc-process { display: flex; flex-direction: column; gap: 0; max-width: 700px; margin: 0 auto; }
        @media (max-width: 768px) {
          .dwc-problems { grid-template-columns: 1fr !important; }
          .dwc-split { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: 480, overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        <Image
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80&fit=crop"
          alt="Diseño web corporativa"
          fill priority sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(7,9,15,0.97) 0%, rgba(7,9,15,0.65) 55%, rgba(7,9,15,0.3) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: `rgba(${ACCENT_RGB},0.08)` }} />

        <div style={{ position: 'relative', zIndex: 2, padding: '48px 5%', maxWidth: 700 }}>
          <BackBtn />
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 10px' }}>
            Diseño web corporativa
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,3.5vw,48px)', fontWeight: 800, color: '#F1F5F9', margin: '0 0 16px', lineHeight: 1.15 }}>
            Tu página web corporativa debería traerte clientes, no darte vergüenza
          </h1>
          <p style={{ color: '#94A3B8', fontSize: 16, lineHeight: 1.7, fontFamily: 'var(--font-body)', fontWeight: 300, maxWidth: 540, margin: 0 }}>
            Diseñamos páginas web profesionales para empresas que quieren transmitir confianza, aparecer en Google y convertir visitas en contactos reales. Sin plantillas, sin atajos.
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
        <div className="dwc-problems">
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

      {/* QUÉ INCLUYE */}
      <section style={{ background: '#0F172A', padding: '80px 5%', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="dwc-split">
          <div style={{ position: 'relative', height: 400, borderRadius: 16, overflow: 'hidden' }}>
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&fit=crop"
              alt="Web corporativa"
              fill sizes="(max-width:768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, rgba(${ACCENT_RGB},0.2) 0%, rgba(7,9,15,0.5) 100%)` }} />
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: ACCENT, display: 'block', marginBottom: 10 }}>
              Lo que recibes
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,30px)', fontWeight: 800, color: '#F1F5F9', margin: '0 0 28px', lineHeight: 1.2 }}>
              Qué incluye tu web corporativa
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {includes.map(item => (
                <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <Check />
                  <span style={{ color: '#94A3B8', fontSize: 14, lineHeight: 1.55, fontFamily: 'var(--font-body)', fontWeight: 300 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section style={{ background: '#0B0F1A', padding: '60px 5%' }}>
        <div style={{ maxWidth: 700, margin: '0 auto 40px' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: ACCENT, display: 'block', marginBottom: 10 }}>
            Cómo trabajamos
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,32px)', fontWeight: 800, color: '#F1F5F9', margin: 0 }}>
            Del primer café a la web publicada
          </h2>
        </div>
        <div className="dwc-process">
          {process.map((step, i) => (
            <div key={step.num} style={{ display: 'flex', gap: 24, paddingBottom: i < process.length - 1 ? 32 : 0 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                  background: `rgba(${ACCENT_RGB},0.1)`,
                  border: `1px solid rgba(${ACCENT_RGB},0.3)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, color: ACCENT,
                }}>
                  {step.num}
                </div>
                {i < process.length - 1 && (
                  <div style={{ width: 1, flex: 1, background: `rgba(${ACCENT_RGB},0.15)`, marginTop: 8 }} />
                )}
              </div>
              <div style={{ paddingTop: 8, paddingBottom: i < process.length - 1 ? 16 : 0 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: '#F1F5F9', marginBottom: 6 }}>{step.title}</div>
                <div style={{ fontSize: 13.5, color: '#64748B', lineHeight: 1.65, fontFamily: 'var(--font-body)' }}>{step.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0F172A', padding: '80px 5%', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.8vw,38px)', fontWeight: 800, color: '#F1F5F9', margin: '0 auto 16px', maxWidth: 600, lineHeight: 1.2 }}>
          ¿Tu web actual te está costando clientes?
        </h2>
        <p style={{ color: '#94A3B8', fontSize: 16, lineHeight: 1.7, fontFamily: 'var(--font-body)', fontWeight: 300, maxWidth: 440, margin: '0 auto 36px' }}>
          Cuéntame cómo es tu empresa y qué quieres que haga tu web. Te preparo una propuesta en 48 horas.
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
          Solicitar propuesta →
        </Link>
      </section>
    </>
  )
}
