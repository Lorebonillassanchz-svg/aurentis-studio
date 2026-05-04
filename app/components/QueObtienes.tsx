import React from 'react'

const gradText: React.CSSProperties = {
  background: 'linear-gradient(100deg, #3B82F6, #818CF8)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

function iconBox(): React.CSSProperties {
  return {
    width: 42,
    height: 42,
    borderRadius: 10,
    background: 'rgba(37,99,255,0.08)',
    border: '1px solid rgba(37,99,255,0.22)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  }
}

function CheckCircleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7.5" stroke="#60A5FA" strokeWidth="1.3"/>
      <path d="M5.5 9l2.5 2.5 4.5-4.5" stroke="#60A5FA" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function MonitorIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="1.5" y="2.5" width="15" height="10.5" rx="2" stroke="#60A5FA" strokeWidth="1.3"/>
      <path d="M6 15.5h6M9 13v2.5" stroke="#60A5FA" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3.5 3.5h3l1.5 3.5L6.5 8.5a9.5 9.5 0 004 4l1.5-1.5 3.5 1.5v3a1 1 0 01-1 1A13.5 13.5 0 012.5 4.5a1 1 0 011-1z" stroke="#60A5FA" strokeWidth="1.3" strokeLinejoin="round"/>
    </svg>
  )
}

function BoltIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M10 2L4 10h6l-2 6 8-9h-6l2-5z" stroke="#60A5FA" strokeWidth="1.3" strokeLinejoin="round"/>
    </svg>
  )
}

const cards = [
  {
    icon: <CheckCircleIcon />,
    title: 'Claridad en tu oferta',
    desc: 'Tu negocio comunica mejor qué hace, para quién y por qué elegirte. Sin ambigüedades ni lenguaje vacío.',
  },
  {
    icon: <MonitorIcon />,
    title: 'Una presencia más profesional',
    desc: 'Tu web deja de verse improvisada y empieza a transmitir confianza desde el primer segundo.',
  },
  {
    icon: <PhoneIcon />,
    title: 'Más facilidad para captar contactos',
    desc: 'Diseño páginas y recorridos pensados para convertir interés en conversaciones reales, no solo visitas.',
  },
  {
    icon: <BoltIcon />,
    title: 'Menos trabajo manual',
    desc: 'Si el proyecto lo incluye, dejo automatizaciones básicas para ahorrar tiempo y ordenar el seguimiento sin hacerlo todo a mano.',
  },
]

export default function QueObtienes() {
  return (
    <>
      <style>{`
        .obtiene-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-top: 56px;
          max-width: 1240px;
          margin-left: auto;
          margin-right: auto;
        }
        .obtiene-card {
          background: #111827;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 18px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .obtiene-card:hover {
          border-color: rgba(37,99,255,0.25);
          transform: translateY(-3px);
        }
        @media (max-width: 900px) {
          .obtiene-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 420px) {
          .obtiene-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section
        id="obtiene"
        style={{ padding: '110px 5%', background: '#0F172A', borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        {/* Header */}
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
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
            Resultados
          </span>
          <h2
            className="reveal"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(26px, 2.8vw, 40px)',
              fontWeight: 800,
              color: '#F1F5F9',
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            Qué obtienes al{' '}
            <span style={gradText}>trabajar conmigo</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="obtiene-grid" style={{ marginTop: 56 }}>
          {cards.map((card, i) => (
            <div
              key={i}
              className={`obtiene-card reveal from-bottom reveal-delay-${i + 1 > 3 ? 3 : i + 1}`}
            >
              <div style={iconBox()}>{card.icon}</div>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 15,
                    fontWeight: 700,
                    color: '#F1F5F9',
                    margin: '0 0 6px',
                  }}
                >
                  {card.title}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: '#94A3B8',
                    lineHeight: 1.65,
                    fontFamily: 'var(--font-body)',
                    fontWeight: 300,
                    margin: 0,
                  }}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
