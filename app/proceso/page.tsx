'use client'

import React, { useState } from 'react'
import Link from 'next/link'

/* ── Step data ────────────────────────────────────────────── */
const steps = [
  {
    num: '01',
    title: 'Diagnóstico y objetivos',
    desc: 'Antes de tocar el diseño necesito entender tu negocio a fondo. Revisamos juntos qué vendes, a quién, cómo lo comunicas ahora, qué está funcionando y qué no. También analizo tu presencia digital actual: web, redes, perfil de Google.',
    deliverable: 'Un diagnóstico claro de tu situación actual y una lista priorizada de qué hay que mejorar primero.',
  },
  {
    num: '02',
    title: 'Mensaje y estructura',
    desc: 'Definimos qué debe decir tu web, en qué orden y con qué palabras. Trabajamos el mensaje principal, las secciones que necesita cada página, las llamadas a la acción y cómo guiar al visitante hacia el contacto.',
    deliverable: 'Un esquema de contenido aprobado por ti antes de empezar a diseñar. Sin sorpresas visuales.',
  },
  {
    num: '03',
    title: 'Diseño y desarrollo',
    desc: 'Con la estructura aprobada, diseño la propuesta visual y construyo la web o landing. Trabajo con herramientas modernas, código limpio, carga rápida y adaptación completa a móvil.',
    deliverable: 'Una web funcional, responsive y alineada con tu marca. Incluye hasta 2 rondas de revisión.',
  },
  {
    num: '04',
    title: 'Captación y automatización',
    desc: 'Si el proyecto lo incluye, configuro los formularios de contacto, las respuestas automáticas y el seguimiento básico para que cada lead que llegue reciba atención sin que tengas que hacerlo todo a mano.',
    deliverable: 'Un sistema básico que captura contactos, responde automáticamente y te notifica sin intervención manual.',
  },
  {
    num: '05',
    title: 'Revisión y lanzamiento',
    desc: 'Revisamos juntos que todo esté correcto: textos, enlaces, formularios, velocidad, versión móvil. Cuando das el visto bueno, publicamos. Te entrego accesos, documentación básica y recomendaciones para los primeros días.',
    deliverable: 'Tu presencia digital publicada y funcionando, con todo entregado y explicado.',
  },
]

/* ── FAQ data ─────────────────────────────────────────────── */
const faqs = [
  {
    q: '¿Cuánto tarda en estar lista mi web o campaña?',
    a: 'Depende del proyecto. Un diseño web profesional suele estar listo en 3 a 5 semanas desde que empezamos. Una tienda online puede tardar entre 4 y 6 semanas según el catálogo. Las campañas de publicidad en Meta Ads o Google Ads se activan en menos de una semana. Antes de empezar te doy un plazo estimado por escrito para que puedas planificarlo.',
  },
  {
    q: '¿Cuánto cuesta contratar un servicio de diseño web o marketing digital?',
    a: 'Los precios varían según el servicio y el alcance del proyecto. Un diseño web profesional parte desde 500€, la gestión de redes sociales desde 200€/mes y las campañas de publicidad desde 150€/mes en gestión. Si quieres saber qué presupuesto necesitas para tu caso concreto, cuéntame tu proyecto y te hago una propuesta personalizada en menos de 48h sin compromiso.',
  },
  {
    q: '¿Qué necesito tener preparado antes de empezar?',
    a: 'Mucho menos de lo que crees. Con tener claro a qué te dedicas, quién es tu cliente y qué quieres conseguir es suficiente para arrancar. No necesitas textos redactados, fotos profesionales ni nada técnico. De la estructura, el contenido y la estrategia me encargo yo. Si ya tienes algún material, mejor, pero no es imprescindible.',
  },
  {
    q: '¿Apareceré en Google con una web nueva?',
    a: 'Una web bien construida es el punto de partida para el posicionamiento SEO, pero posicionarse en Google lleva tiempo — generalmente entre 3 y 6 meses para ver resultados orgánicos reales. Lo que sí hacemos desde el primer día es optimizar cada página con las palabras clave correctas, la estructura técnica adecuada y el contenido que Google necesita para indexarte bien. Si necesitas visibilidad inmediata, combinamos SEO con campañas de publicidad mientras el posicionamiento orgánico madura.',
  },
  {
    q: '¿Puedo pedirte cambios una vez entregado el proyecto?',
    a: 'Sí. Todos los proyectos incluyen dos rondas de revisión antes del lanzamiento para que el resultado sea exactamente lo que necesitas. Los cambios posteriores al lanzamiento se presupuestan aparte según el alcance. En servicios mensuales como gestión de redes o campañas, los ajustes están incluidos dentro del servicio.',
  },
  {
    q: '¿Trabajas solo con negocios de un sector concreto?',
    a: 'No. Trabajo con autónomos, marcas personales, pequeños negocios locales y PYMES de cualquier sector. Me especializo especialmente en negocios de servicios, consultoría, formación, comercio local y creadores de contenido que quieren monetizar su marca personal. Si tienes dudas sobre si tu proyecto encaja, escríbeme y te lo digo directamente.',
  },
  {
    q: '¿Gestionas las redes sociales de mi negocio desde cero?',
    a: 'Sí. Me encargo de todo: estrategia de contenido, diseño de publicaciones, edición de vídeo para Reels y TikTok, calendario editorial y crecimiento de comunidad. No necesitas tener experiencia en redes ni saber qué publicar. Analizamos tu negocio, definimos tu voz de marca y construimos una presencia digital coherente que atraiga a tu cliente ideal.',
  },
  {
    q: '¿Qué diferencia hay entre SEO y publicidad de pago?',
    a: 'El SEO o posicionamiento orgánico te ayuda a aparecer en Google de forma gratuita cuando alguien busca lo que ofreces. Los resultados tardan meses pero son duraderos y no requieren inversión publicitaria continua. La publicidad de pago en Meta Ads o Google Ads trae resultados desde el primer día pero requiere un presupuesto mensual de inversión en anuncios. La estrategia más efectiva combina los dos: publicidad mientras el SEO madura.',
  },
]

/* ── FAQ Item ─────────────────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      style={{
        background: '#0F172A',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 12,
        overflow: 'hidden',
      }}
    >
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 24px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: 16,
        }}
      >
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, color: '#F1F5F9', lineHeight: 1.4 }}>
          {q}
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          style={{ flexShrink: 0, transform: open ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}
        >
          <path d="M9 4v10M4 9h10" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <div
        style={{
          maxHeight: open ? 600 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        <p style={{ margin: 0, padding: '0 24px 20px', color: '#94A3B8', fontSize: 14, lineHeight: 1.7, fontFamily: 'var(--font-body)', fontWeight: 300 }}>
          {a}
        </p>
      </div>
    </div>
  )
}

/* ── Page ─────────────────────────────────────────────────── */
export default function ProcesoPage() {
  const gradText: React.CSSProperties = {
    background: 'linear-gradient(100deg, #3B82F6, #818CF8)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  }

  return (
    <>
      <style>{`
        .proceso-btn { transition: background 0.2s, box-shadow 0.2s; }
        .proceso-btn:hover { background: #1d4fd8 !important; box-shadow: 0 0 36px rgba(37,99,255,0.45) !important; }
      `}</style>

      {/* ── HERO ── */}
      <section style={{ background: '#0B0F1A', padding: '140px 5% 80px', textAlign: 'center' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3B82F6', display: 'block', marginBottom: 20 }}>
          Proceso
        </span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 800, color: '#F1F5F9', margin: '0 0 22px', lineHeight: 1.1 }}>
          Cómo trabajo <span style={gradText}>contigo</span>
        </h1>
        <p style={{ color: '#94A3B8', fontSize: 'clamp(15px, 1.6vw, 17px)', lineHeight: 1.75, fontFamily: 'var(--font-body)', fontWeight: 300, maxWidth: 640, margin: '0 auto' }}>
          Un proceso claro para que sepas exactamente qué va a pasar, qué recibirás y cuándo en cada etapa del proyecto.
        </p>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ background: '#0F172A', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '100px 5%' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ position: 'relative', paddingLeft: 32 }}>
            {/* Vertical connector line */}
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: 1, background: 'rgba(37,99,255,0.25)' }} />

            {steps.map((step, i) => (
              <React.Fragment key={step.num}>
                <div style={{ position: 'relative', paddingBottom: i < steps.length - 1 ? 56 : 0 }}>
                  {/* Dot on the line */}
                  <div style={{ position: 'absolute', left: -36, top: 12, width: 9, height: 9, borderRadius: '50%', background: '#2563FF', border: '2px solid #0F172A', boxShadow: '0 0 0 3px rgba(37,99,255,0.2)' }} />

                  {/* Step number */}
                  <div style={{ fontSize: 64, fontFamily: 'var(--font-display)', fontWeight: 800, color: 'rgba(37,99,255,0.15)', lineHeight: 1, marginBottom: 4, userSelect: 'none' }}>
                    {step.num}
                  </div>

                  {/* Title */}
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: '#F1F5F9', margin: '0 0 14px', lineHeight: 1.3 }}>
                    {step.title}
                  </h2>

                  {/* Description */}
                  <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, fontFamily: 'var(--font-body)', fontWeight: 300, margin: '0 0 18px' }}>
                    {step.desc}
                  </p>

                  {/* Deliverable block */}
                  <div style={{ background: 'rgba(37,99,255,0.06)', borderLeft: '3px solid #2563FF', borderRadius: 8, padding: '14px 18px' }}>
                    <span style={{ fontSize: 13, color: '#93C5FD', fontFamily: 'var(--font-body)', lineHeight: 1.6 }}>
                      <strong style={{ fontWeight: 600 }}>→ Entregable:</strong> {step.deliverable}
                    </span>
                  </div>
                </div>

                {/* Separator */}
                {i < steps.length - 1 && (
                  <div style={{ height: 1, background: 'rgba(255,255,255,0.05)', marginBottom: 56 }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: '#0B0F1A', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '100px 5%' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#F1F5F9', margin: '0 0 48px', textAlign: 'center' }}>
            Preguntas frecuentes
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map(faq => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{ background: '#0F172A', padding: '100px 5%', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 800, color: '#F1F5F9', margin: '0 0 16px' }}>
          ¿Listo para empezar?
        </h2>
        <p style={{ color: '#94A3B8', fontSize: 16, lineHeight: 1.7, fontFamily: 'var(--font-body)', fontWeight: 300, margin: '0 auto 36px', maxWidth: 480 }}>
          Cuéntame tu proyecto y te explico cómo podría ayudarte.
        </p>
        <Link
          href="/#auditoria"
          className="proceso-btn"
          style={{ display: 'inline-block', background: '#2563FF', color: '#fff', fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, padding: '14px 32px', borderRadius: 10, textDecoration: 'none', boxShadow: '0 0 28px rgba(37,99,255,0.3)' }}
        >
          Solicitar auditoría gratuita →
        </Link>
      </section>
    </>
  )
}
