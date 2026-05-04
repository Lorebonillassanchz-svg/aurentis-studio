import Image from 'next/image'
import React from 'react'

const gradText: React.CSSProperties = {
  background: 'linear-gradient(100deg, #3B82F6, #818CF8)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

export default function SplitSection() {
  return (
    <>
      <style>{`
        .split-inner {
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          gap: 5rem;
          align-items: center;
          padding: 100px 5%;
        }
        .split-image-wrap {
          flex: 1;
          height: 380px;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          position: relative;
          flex-shrink: 0;
        }
        .split-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
        }
        @media (max-width: 768px) {
          .split-inner {
            flex-direction: column;
            gap: 2.5rem;
            padding: 72px 5%;
          }
          .split-image-wrap { height: 220px; width: 100%; }
        }
      `}</style>

      <section
        style={{
          background: '#121A2B',
          borderTop: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        <div className="split-inner">

          {/* Image column */}
          <div className="split-image-wrap reveal from-right">
            <Image
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80&fit=crop"
              alt="Proceso de trabajo en Aurentis Studio"
              fill
              style={{ objectFit: 'cover', opacity: 0.55, mixBlendMode: 'luminosity' }}
            />
            {/* Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(135deg, rgba(11,15,26,0.6) 0%, rgba(37,99,255,0.12) 100%)',
                zIndex: 1,
              }}
            />
          </div>

          {/* Text column */}
          <div className="split-text">
            <span
              className="reveal reveal-delay-1"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#3B82F6',
              }}
            >
              Enfoque de trabajo
            </span>

            <h2
              className="reveal reveal-delay-1"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(26px, 2.8vw, 40px)',
                fontWeight: 800,
                color: '#F1F5F9',
                margin: 0,
                lineHeight: 1.15,
              }}
            >
              Estrategia primero.{' '}
              <span style={gradText}>Diseño después.</span>
            </h2>

            <p
              className="reveal reveal-delay-2"
              style={{
                color: '#94A3B8',
                fontSize: 15.5,
                lineHeight: 1.72,
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                margin: 0,
              }}
            >
              Antes de diseñar una sola pantalla, entiendo qué necesita comunicar tu negocio, quién es tu cliente y qué acción quieres que tome. El diseño es la consecuencia de esa claridad, no el punto de partida.
            </p>

            <p
              className="reveal reveal-delay-3"
              style={{
                color: '#94A3B8',
                fontSize: 15.5,
                lineHeight: 1.72,
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                margin: 0,
              }}
            >
              Por eso cada proyecto empieza con preguntas, no con mockups.
            </p>
          </div>

        </div>
      </section>
    </>
  )
}
