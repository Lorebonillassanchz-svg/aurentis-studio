import React from 'react'

const gradText: React.CSSProperties = {
  background: 'linear-gradient(100deg, #3B82F6, #818CF8)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

const steps = [
  {
    num: '01',
    title: 'Diagnóstico y objetivos',
    desc: 'Reviso tu negocio, tu oferta, tu cliente ideal y tu presencia actual para detectar qué está fallando y qué debe priorizarse.',
  },
  {
    num: '02',
    title: 'Mensaje y estructura',
    desc: 'Definimos qué debe comunicar la web, qué secciones necesita, qué llamadas a la acción tendrá y cómo ordenar la información para que sea clara y útil.',
  },
  {
    num: '03',
    title: 'Diseño y desarrollo',
    desc: 'Diseño una propuesta visual alineada con tu marca y construyo la web o landing con enfoque profesional, responsive y orientado a conversión.',
  },
  {
    num: '04',
    title: 'Captación y automatización',
    desc: 'Si el proyecto lo incluye, conecto formularios, seguimiento básico y automatizaciones iniciales para que no pierdas oportunidades por falta de respuesta.',
  },
  {
    num: '05',
    title: 'Revisión y lanzamiento',
    desc: 'Ajustamos detalles, revisamos que todo funcione bien y dejamos la base digital lista para presentarte con más seriedad y empezar a captar mejor.',
  },
]

export default function Proceso() {
  return (
    <>
      <style>{`
        .proceso-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
          max-width: 1240px;
          margin: 0 auto 72px;
        }
        .proceso-header-right {
          text-align: right;
        }
        .proceso-timeline {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          max-width: 1240px;
          margin: 0 auto;
        }
        .proceso-timeline::before {
          content: '';
          position: absolute;
          top: 27px;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(90deg, rgba(37,99,255,0.5), rgba(99,102,241,0.5), rgba(37,99,255,0.15));
          z-index: 0;
          pointer-events: none;
        }
        .proceso-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 18px;
        }
        .proceso-node {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: #111827;
          border: 1px solid rgba(37,99,255,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 700;
          color: #60A5FA;
          box-shadow: 0 0 16px rgba(37,99,255,0.2);
          position: relative;
          z-index: 2;
          flex-shrink: 0;
        }
        @media (max-width: 900px) {
          .proceso-header { grid-template-columns: 1fr; gap: 1.5rem; }
          .proceso-header-right { text-align: left; }
          .proceso-timeline { grid-template-columns: repeat(3, 1fr); }
          .proceso-timeline::before { left: 8%; right: 8%; }
        }
        @media (max-width: 768px) {
          .proceso-timeline {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .proceso-timeline::before { display: none; }
          .proceso-step {
            flex-direction: row;
            text-align: left;
            align-items: flex-start;
          }
        }
      `}</style>

      <section
        id="proceso"
        style={{ padding: '100px 5%', background: '#0F172A', borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        {/* Header */}
        <div className="proceso-header">
          <div>
            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-display)',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#3B82F6',
                marginBottom: 14,
              }}
            >
              Cómo trabajo
            </span>
            <h2
              className="reveal"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(26px, 2.8vw, 40px)',
                fontWeight: 800,
                color: '#F1F5F9',
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Así trabajo para construir una{' '}
              <span style={gradText}>presencia digital útil</span>{' '}
              de verdad
            </h2>
          </div>

          <div className="proceso-header-right reveal from-right">
            <p
              style={{
                color: '#94A3B8',
                fontSize: 15.5,
                lineHeight: 1.72,
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                margin: 0,
                maxWidth: 420,
                marginLeft: 'auto',
              }}
            >
              Cada proyecto sigue un proceso claro de 5 fases para que nada quede al azar: desde entender tu negocio hasta dejar lista una presencia digital que realmente trabaje para ti.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="proceso-timeline">
          {steps.map((step, i) => (
            <div key={i} className={`proceso-step reveal reveal-delay-${i % 3 + 1 > 3 ? 3 : i % 3 + 1}`}>
              <div className="proceso-node">{step.num}</div>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 14,
                    fontWeight: 700,
                    color: '#F1F5F9',
                    margin: '0 0 8px',
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: 12.5,
                    color: '#94A3B8',
                    lineHeight: 1.65,
                    fontFamily: 'var(--font-body)',
                    fontWeight: 300,
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
