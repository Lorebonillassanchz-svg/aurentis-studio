'use client'

import React, { useState } from 'react'
import Link from 'next/link'

/* ── Tab data ─────────────────────────────────────────────── */
type Step = { title: string; desc: string; entregable: string }
type Tab  = { id: string; label: string; icon: React.ReactNode; steps: Step[] }

const TABS: Tab[] = [
  {
    id: 'web',
    label: 'Diseño Web & Tienda Online',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    steps: [
      {
        title: 'Me cuentas tu proyecto',
        desc: 'Por WhatsApp o email me explicas qué necesitas, a qué te dedicas y qué quieres conseguir. Sin formularios complicados ni reuniones previas.',
        entregable: 'Primera respuesta en menos de 24h',
      },
      {
        title: 'Analizo tu situación y te envío un informe',
        desc: 'Estudio tu negocio, tu competencia y tu presencia digital actual. Te envío un informe gratuito con lo que trabajaría, cómo lo haría y qué resultado puedes esperar.',
        entregable: 'Auditoría gratuita con propuesta personalizada',
      },
      {
        title: 'Lo revisamos juntos',
        desc: 'Si el informe te convence, hacemos una videollamada o reunión presencial para resolver dudas, ajustar detalles y definir el plan de trabajo.',
        entregable: 'Plan de trabajo acordado y fechas confirmadas',
      },
      {
        title: 'Empezamos con el proyecto',
        desc: 'Con el primer pago confirmado, arrancamos. Me encargo del diseño, el desarrollo, los textos y la configuración técnica. Tú solo revisas y apruebas.',
        entregable: 'Propuesta visual para tu aprobación',
      },
      {
        title: 'Revisiones y lanzamiento',
        desc: 'Dos rondas de revisión incluidas para que el resultado sea exactamente lo que necesitas. Cuando das el visto bueno, publicamos. Te entrego los accesos y te explico cómo gestionar lo básico.',
        entregable: 'Web publicada, funcional y tuya',
      },
    ],
  },
  {
    id: 'rrss',
    label: 'Redes Sociales & Community Manager',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="18" cy="5"  r="3" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="6"  cy="12" r="3" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M8.59 13.51l6.83 3.98M15.41 6.51L8.59 10.49" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    steps: [
      {
        title: 'Auditoría de tus redes',
        desc: 'Analizo tu perfil actual, tu contenido, tu competencia y tu audiencia. Si empiezas desde cero, definimos juntos el punto de partida.',
        entregable: 'Informe gratuito con diagnóstico y propuesta',
      },
      {
        title: 'Definimos tu estrategia',
        desc: 'Trabajamos tu voz de marca, el tipo de contenido que mejor funciona para tu negocio y el calendario editorial. Nada de publicar por publicar.',
        entregable: 'Estrategia de contenido personalizada',
      },
      {
        title: 'Onboarding y accesos',
        desc: 'Me das acceso a tus cuentas y te explico cómo vamos a trabajar. Preparo las primeras piezas para tu aprobación antes de publicar nada.',
        entregable: 'Primeras publicaciones listas para revisar',
      },
      {
        title: 'Gestión mensual continua',
        desc: 'Publico, respondo, edito vídeos para Reels y TikTok, analizo qué funciona y ajusto la estrategia cada mes. Tú te centras en tu negocio.',
        entregable: 'Informe mensual de resultados y crecimiento',
      },
    ],
  },
  {
    id: 'seo',
    label: 'Posicionamiento SEO',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M8 11h6M11 8v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    steps: [
      {
        title: 'Auditoría SEO gratuita',
        desc: 'Analizo tu web, tus palabras clave actuales, tu posición en Google y la de tu competencia. Te digo exactamente por qué no apareces donde deberías.',
        entregable: 'Informe SEO gratuito con prioridades claras',
      },
      {
        title: 'Definimos la estrategia de palabras clave',
        desc: 'Investigamos qué busca exactamente tu cliente ideal en Google y construimos una estrategia para posicionarte en esas búsquedas.',
        entregable: 'Mapa de palabras clave aprobado',
      },
      {
        title: 'Optimización técnica y de contenido',
        desc: 'Optimizamos cada página de tu web, corregimos los errores técnicos y creamos el contenido que Google necesita para posicionarte.',
        entregable: 'Web optimizada lista para indexar',
      },
      {
        title: 'Seguimiento y mejora continua',
        desc: 'El SEO no es un trabajo puntual. Cada mes analizamos tu posición, ajustamos la estrategia y te enviamos un informe con la evolución.',
        entregable: 'Informe mensual de posicionamiento',
      },
    ],
  },
  {
    id: 'ads',
    label: 'Meta Ads & Google Ads',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M13 13l6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    steps: [
      {
        title: 'Analizamos tu negocio y tu competencia',
        desc: 'Estudio tu producto o servicio, tu cliente ideal y lo que está haciendo tu competencia en publicidad. Sin este paso no se lanza nada.',
        entregable: 'Análisis previo y propuesta de campaña',
      },
      {
        title: 'Diseñamos la campaña',
        desc: 'Definimos el objetivo, el presupuesto, los textos, las imágenes y la segmentación. Te presento la campaña antes de activarla para que la apruebes.',
        entregable: 'Campaña lista para tu aprobación',
      },
      {
        title: 'Lanzamiento y primeros datos',
        desc: 'Activamos la campaña y en los primeros días analizamos los resultados iniciales para hacer ajustes rápidos si es necesario.',
        entregable: 'Campaña activa generando resultados',
      },
      {
        title: 'Optimización continua',
        desc: 'Cada semana reviso el rendimiento, ajusto pujas, textos y segmentación para maximizar tu inversión. Cada mes recibes un informe completo.',
        entregable: 'Informe mensual con métricas y resultados',
      },
    ],
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
    <div style={{ background: '#0F172A', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, overflow: 'hidden' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}
      >
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, color: '#F1F5F9', lineHeight: 1.4 }}>
          {q}
        </span>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
          style={{ flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.25s ease' }}>
          <path d="M9 4v10M4 9h10" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
      <div style={{ maxHeight: open ? 600 : 0, overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
        <p style={{ margin: 0, padding: '0 24px 20px', color: '#94A3B8', fontSize: 14, lineHeight: 1.75, fontFamily: 'var(--font-body)', fontWeight: 300 }}>
          {a}
        </p>
      </div>
    </div>
  )
}

/* ── Step card ────────────────────────────────────────────── */
function StepCard({ step, index }: { step: Step; index: number }) {
  const num = String(index + 1).padStart(2, '0')
  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
      {/* Left: number + connector */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div style={{
          width: 52, height: 52, borderRadius: '50%',
          background: 'linear-gradient(135deg, #2563FF 0%, #818CF8 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 24px rgba(37,99,255,0.3)',
          flexShrink: 0,
        }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 800, color: '#fff' }}>
            {num}
          </span>
        </div>
      </div>

      {/* Right: card */}
      <div style={{
        flex: 1,
        background: 'linear-gradient(160deg, rgba(15,23,42,0.9), rgba(11,15,26,0.9))',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 16,
        padding: '24px 28px',
        marginBottom: 8,
      }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, color: '#F1F5F9', margin: '0 0 10px', lineHeight: 1.3 }}>
          {step.title}
        </h3>
        <p style={{ color: '#94A3B8', fontSize: 14, lineHeight: 1.75, fontFamily: 'var(--font-body)', fontWeight: 300, margin: '0 0 18px' }}>
          {step.desc}
        </p>
        {/* Entregable */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          background: 'rgba(37,99,255,0.07)',
          borderLeft: '3px solid #2563FF',
          borderRadius: '0 8px 8px 0',
          padding: '10px 14px',
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
            <path d="M2 7l3.5 3.5L12 3" stroke="#60A5FA" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{ fontSize: 13, color: '#93C5FD', fontFamily: 'var(--font-body)', fontWeight: 500 }}>
            {step.entregable}
          </span>
        </div>
      </div>
    </div>
  )
}

/* ── Page ─────────────────────────────────────────────────── */
export default function ProcesoPage() {
  const [activeTab, setActiveTab] = useState(0)

  const gradText: React.CSSProperties = {
    background: 'linear-gradient(100deg, #3B82F6, #818CF8)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  }

  const currentTab = TABS[activeTab]

  return (
    <>
      <style>{`
        .proceso-tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 11px 20px;
          border-radius: 10px;
          border: 1px solid transparent;
          background: transparent;
          cursor: pointer;
          font-family: var(--font-display);
          font-size: 13.5px;
          font-weight: 600;
          color: #64748B;
          transition: color 0.2s, background 0.2s, border-color 0.2s;
          white-space: nowrap;
        }
        .proceso-tab:hover:not(.active) {
          color: #94A3B8;
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.08);
        }
        .proceso-tab.active {
          color: #fff;
          background: rgba(37,99,255,0.15);
          border-color: rgba(37,99,255,0.4);
        }
        .proceso-tab.active svg { color: #60A5FA; }
        .proceso-cta-btn { transition: background 0.2s, box-shadow 0.2s; }
        .proceso-cta-btn:hover { background: #1d4fd8 !important; box-shadow: 0 0 36px rgba(37,99,255,0.45) !important; }
        .tab-content {
          animation: tabFade 0.3s ease;
        }
        @keyframes tabFade {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .proceso-tabs-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        /* Connector line between steps */
        .step-connector {
          width: 2px;
          height: 32px;
          background: linear-gradient(to bottom, rgba(37,99,255,0.5), rgba(99,102,241,0.2));
          margin: 0 25px;
        }
        @media (max-width: 640px) {
          .proceso-tab { padding: 9px 14px; font-size: 12.5px; gap: 6px; }
          .proceso-tab svg { display: none; }
        }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{ background: '#0B0F1A', padding: '140px 5% 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Background glow */}
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(37,99,255,0.08) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#3B82F6', display: 'block', marginBottom: 20 }}>
            Proceso de trabajo
          </span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 4.5vw, 56px)', fontWeight: 800, color: '#F1F5F9', margin: '0 auto 22px', lineHeight: 1.1, maxWidth: 700 }}>
            Así es como{' '}
            <span style={gradText}>trabajamos juntos</span>
          </h1>
          <p style={{ color: '#94A3B8', fontSize: 'clamp(15px, 1.5vw, 17px)', lineHeight: 1.75, fontFamily: 'var(--font-body)', fontWeight: 300, maxWidth: 560, margin: '0 auto' }}>
            Sin reuniones infinitas, sin sorpresas. Un proceso claro desde el primer mensaje hasta el resultado final.
          </p>
        </div>
      </section>

      {/* ── TABS + TIMELINE ──────────────────────────────── */}
      <section style={{ background: '#0F172A', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '80px 5% 100px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>

          {/* Tab selector */}
          <div className="proceso-tabs-row" style={{ marginBottom: 56, justifyContent: 'center' }}>
            {TABS.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                className={`proceso-tab${activeTab === i ? ' active' : ''}`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active tab label */}
          <div style={{ marginBottom: 36, paddingBottom: 20, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(37,99,255,0.1)', border: '1px solid rgba(37,99,255,0.25)', borderRadius: 8, padding: '8px 16px' }}>
              <span style={{ color: '#60A5FA' }}>{currentTab.icon}</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: '#93C5FD' }}>
                {currentTab.label}
              </span>
            </div>
          </div>

          {/* Steps */}
          <div key={currentTab.id} className="tab-content" style={{ display: 'flex', flexDirection: 'column' }}>
            {currentTab.steps.map((step, i) => (
              <React.Fragment key={i}>
                <StepCard step={step} index={i} />
                {i < currentTab.steps.length - 1 && (
                  <div className="step-connector" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section style={{ background: '#0B0F1A', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '100px 5%' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#3B82F6', display: 'block', marginBottom: 14 }}>
              FAQ
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#F1F5F9', margin: 0 }}>
              Preguntas frecuentes
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {faqs.map(faq => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────── */}
      <section style={{ background: '#0F172A', padding: '100px 5%', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.07)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: '-10%', left: '50%', transform: 'translateX(-50%)', width: 500, height: 300, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(37,99,255,0.1) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 800, color: '#F1F5F9', margin: '0 0 16px' }}>
            ¿Listo para empezar?
          </h2>
          <p style={{ color: '#94A3B8', fontSize: 16, lineHeight: 1.7, fontFamily: 'var(--font-body)', fontWeight: 300, margin: '0 auto 36px', maxWidth: 480 }}>
            Cuéntame tu proyecto y te explico cómo podría ayudarte.
          </p>
          <Link
            href="/#auditoria"
            className="proceso-cta-btn"
            style={{ display: 'inline-block', background: '#2563FF', color: '#fff', fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, padding: '14px 36px', borderRadius: 10, textDecoration: 'none', boxShadow: '0 0 28px rgba(37,99,255,0.3)' }}
          >
            Solicitar auditoría gratuita →
          </Link>
        </div>
      </section>
    </>
  )
}
