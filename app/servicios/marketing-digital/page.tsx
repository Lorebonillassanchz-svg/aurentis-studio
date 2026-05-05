import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing Digital: Gestión de Redes Sociales y Publicidad Online — Aurentis Studio',
  description: 'Community manager, gestión de redes sociales, campañas en Meta Ads y Google Ads, y estrategia de contenidos para negocios que quieren crecer en digital.',
}

const ACCENT = '#A855F7'
const ACCENT_RGB = '168,85,247'

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
  { title: 'No tienes tiempo para gestionar tus redes sociales', text: 'Publicar con consistencia, responder comentarios, crear contenido visual de calidad... requiere horas que no tienes. Hacerlo a medias es peor que no hacerlo.' },
  { title: 'Publicas pero nadie reacciona ni te sigue', text: 'Si tus publicaciones no generan interacción, el problema no es el algoritmo — es la estrategia y el mensaje. Con el contenido correcto, las redes funcionan.' },
  { title: 'No sabes qué publicar ni cómo hacerlo bien', text: 'Crear contenido profesional para Instagram, LinkedIn o TikTok requiere criterio, diseño y constancia. No es solo hacer fotos con el móvil.' },
  { title: 'Tu reputación online está sin gestionar', text: 'Los comentarios negativos sin respuesta, los mensajes sin atender y los perfiles desactualizados dañan tu imagen más de lo que crees — y los clientes lo notan.' },
]

const blocks = [
  {
    id: 'redes',
    title: 'Gestión de redes sociales y community manager',
    desc: 'Gestionamos tus redes de principio a fin: estrategia, creación de contenido, publicación y gestión de la comunidad. Instagram, Facebook, LinkedIn y TikTok — cada red con su voz y su formato.',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80&fit=crop',
    imageRight: true,
    items: [
      'Plan de contenidos mensual con objetivos medibles',
      'Diseño gráfico y redacción adaptados a tu marca',
      'Publicación en los horarios de mayor alcance por plataforma',
      'Gestión de comentarios, mensajes directos y reputación online',
    ],
  },
  {
    id: 'email',
    title: 'Campañas de publicidad en Meta Ads y Google Ads',
    desc: 'Creamos y gestionamos campañas en Facebook Ads, Instagram Ads y Google Ads para llegar a tu cliente ideal, conseguir leads y vender más. Con presupuesto controlado y optimización continua.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&fit=crop',
    imageRight: false,
    items: [
      'Segmentación por intereses, comportamiento y datos demográficos',
      'Creatividades A/B para encontrar qué convierte mejor',
      'Gestión diaria de pujas y presupuesto publicitario',
      'Informe mensual con coste por resultado real',
    ],
  },
  {
    id: 'geo',
    title: 'Estrategia de contenidos para redes sociales',
    desc: 'Una marca que publica sin estrategia es invisible. Desarrollamos el plan de contenidos, los mensajes clave y el calendario editorial para que cada publicación tenga un propósito claro.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80&fit=crop',
    imageRight: true,
    items: [
      'Calendario editorial mensual alineado con tus objetivos',
      'Contenido diferente para cada red social — no el mismo en todas',
      'Identidad visual coherente en todas las publicaciones',
      'Análisis de métricas y ajuste de estrategia cada mes',
    ],
  },
  {
    id: 'auditoria',
    title: 'Auditoría y optimización de perfiles sociales',
    desc: 'Si no sabes en qué punto está tu presencia en redes ahora mismo, empezamos por ahí. Auditamos tus perfiles, tu contenido y tu audiencia para saber exactamente qué hay que cambiar primero.',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&q=80&fit=crop',
    imageRight: false,
    items: [
      'Análisis de perfiles actuales y benchmarking frente a tu competencia',
      'Optimización de bio, foto de perfil y datos de contacto',
      'Definición de buyer persona y tono de comunicación de marca',
      'Propuesta de estrategia y primeros pasos para activar el crecimiento',
    ],
  },
]

const steps = [
  { num: '01', title: 'Nos conocemos', text: 'Hablamos sobre tu marca, tu competencia, tus objetivos y lo que quieres conseguir en redes.' },
  { num: '02', title: 'Analizamos y planificamos', text: 'Auditoría de tu presencia actual, definición del buyer persona y estrategia mensual.' },
  { num: '03', title: 'Creamos y publicamos', text: 'Contenido de calidad, publicado en los momentos correctos y con el mensaje adecuado.' },
  { num: '04', title: 'Medimos y mejoramos', text: 'Seguimiento de resultados, informes mensuales y ajuste de estrategia según los datos.' },
]

export default function MarketingDigitalPage() {
  return (
    <>
      <style>{`
        .md-problems { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; max-width: 900px; margin: 0 auto; }
        .md-block { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; max-width: 1100px; margin: 0 auto; align-items: center; }
        .md-block-rev { direction: rtl; }
        .md-block-rev > * { direction: ltr; }
        .md-steps { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; max-width: 900px; margin: 0 auto; }
        @media (max-width: 768px) {
          .md-problems { grid-template-columns: 1fr !important; }
          .md-block { grid-template-columns: 1fr !important; }
          .md-block-rev { direction: ltr; }
          .md-steps { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: 480, overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        <Image
          src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1600&q=80&fit=crop"
          alt="Marketing digital"
          fill priority sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(7,9,15,0.97) 0%, rgba(7,9,15,0.65) 55%, rgba(7,9,15,0.3) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: `rgba(${ACCENT_RGB},0.08)` }} />

        <div style={{ position: 'relative', zIndex: 2, padding: '48px 5%', maxWidth: 700 }}>
          <BackBtn />
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 10px' }}>
            Marketing digital
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,3.5vw,48px)', fontWeight: 800, color: '#F1F5F9', margin: '0 0 16px', lineHeight: 1.15 }}>
            Gestión de redes sociales y marketing digital para negocios que quieren crecer
          </h1>
          <p style={{ color: '#94A3B8', fontSize: 16, lineHeight: 1.7, fontFamily: 'var(--font-body)', fontWeight: 300, maxWidth: 540, margin: 0 }}>
            Community manager, Meta Ads, Google Ads y estrategia de contenidos. Llevamos tu presencia digital para que tú te dediques a lo que sabes hacer — tu negocio.
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
        <div className="md-problems">
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

      {/* BLOQUES DE SERVICIOS */}
      <section style={{ background: '#0F172A', padding: '80px 5%', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto 56px' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: ACCENT, display: 'block', marginBottom: 10 }}>
            Lo que trabajamos
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,32px)', fontWeight: 800, color: '#F1F5F9', margin: 0 }}>
            Qué incluye el servicio de Marketing Digital
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
          {blocks.map((block, idx) => (
            <div
              key={block.title}
              id={block.id}
              className={`md-block${!block.imageRight ? ' md-block-rev' : ''}`}
            >
              <div style={{ position: 'relative', height: 340, borderRadius: 16, overflow: 'hidden' }}>
                <Image
                  src={block.image}
                  alt={block.title}
                  fill sizes="(max-width:768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, rgba(${ACCENT_RGB},0.15) 0%, rgba(7,9,15,0.55) 100%)` }} />
              </div>
              <div>
                <div style={{
                  width: 32, height: 3, background: ACCENT,
                  borderRadius: 999, marginBottom: 16,
                }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px,2vw,24px)', fontWeight: 800, color: '#F1F5F9', margin: '0 0 14px' }}>
                  {block.title}
                </h3>
                <p style={{ color: '#64748B', fontSize: 14, lineHeight: 1.75, fontFamily: 'var(--font-body)', fontWeight: 300, margin: '0 0 22px' }}>
                  {block.desc}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {block.items.map(item => (
                    <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <Check />
                      <span style={{ color: '#94A3B8', fontSize: 14, lineHeight: 1.55, fontFamily: 'var(--font-body)', fontWeight: 300 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section style={{ background: '#0B0F1A', padding: '60px 5%' }}>
        <div style={{ maxWidth: 900, margin: '0 auto 36px' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: ACCENT, display: 'block', marginBottom: 10 }}>
            El proceso
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,32px)', fontWeight: 800, color: '#F1F5F9', margin: 0 }}>
            Cómo vamos a trabajar juntos
          </h2>
        </div>
        <div className="md-steps">
          {steps.map(step => (
            <div key={step.num} style={{
              background: '#0F172A',
              border: `1px solid rgba(${ACCENT_RGB},0.12)`,
              borderRadius: 14,
              padding: '24px 28px',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 800,
                color: `rgba(${ACCENT_RGB},0.15)`, lineHeight: 1, marginBottom: 12,
              }}>
                {step.num}
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: '#F1F5F9', marginBottom: 8 }}>{step.title}</div>
              <div style={{ fontSize: 13, color: '#64748B', lineHeight: 1.65, fontFamily: 'var(--font-body)' }}>{step.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0F172A', padding: '80px 5%', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.8vw,38px)', fontWeight: 800, color: '#F1F5F9', margin: '0 auto 16px', maxWidth: 600, lineHeight: 1.2 }}>
          ¿Quieres que tu marca crezca en redes sociales?
        </h2>
        <p style={{ color: '#94A3B8', fontSize: 16, lineHeight: 1.7, fontFamily: 'var(--font-body)', fontWeight: 300, maxWidth: 440, margin: '0 auto 36px' }}>
          Cuéntame en qué redes estás, qué has probado y qué quieres conseguir. Te propongo un plan concreto sin compromiso.
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
