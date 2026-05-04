import React from 'react'

/* ── Icon components ──────────────────────────────────────── */
function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7.5" stroke="#60A5FA" strokeWidth="1.4"/>
      <path d="M10 6v4l2.5 2.5" stroke="#60A5FA" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function PulseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M2 10h3l2-5 3 9 2-6 2 3 2-1h2" stroke="#60A5FA" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function DocIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="4" y="2.5" width="12" height="15" rx="2" stroke="#60A5FA" strokeWidth="1.4"/>
      <line x1="7" y1="7" x2="13" y2="7" stroke="#60A5FA" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="7" y1="10" x2="13" y2="10" stroke="#60A5FA" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="7" y1="13" x2="10" y2="13" stroke="#60A5FA" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  )
}

function LayersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2.5L17.5 6.5L10 10.5L2.5 6.5L10 2.5Z" stroke="#60A5FA" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M2.5 10L10 14L17.5 10" stroke="#60A5FA" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.5 13.5L10 17.5L17.5 13.5" stroke="#60A5FA" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55"/>
    </svg>
  )
}

/* ── Data ─────────────────────────────────────────────────── */
const items = [
  {
    icon: <ClockIcon />,
    title: '100% Enfoque estratégico',
    desc: 'Cada solución se construye sobre tu objetivo de negocio, no sobre plantillas genéricas.',
  },
  {
    icon: <PulseIcon />,
    title: 'Resultados medibles',
    desc: 'Webs que generan leads, no solo visitas. Métricas claras desde el primer mes.',
  },
  {
    icon: <DocIcon />,
    title: 'Automatización incluida',
    desc: 'Sistemas que trabajan por ti: seguimiento, respuestas y recordatorios sin intervención manual.',
  },
  {
    icon: <LayersIcon />,
    title: 'Escalable desde el inicio',
    desc: 'Arquitectura pensada para crecer. Lo que construimos hoy aguanta el doble de tráfico mañana.',
  },
]

/* ── Component ────────────────────────────────────────────── */
export default function BenefitsBar() {
  return (
    <>
      <style>{`
        .benefits-wrap {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.07);
          border-radius: 18px;
          overflow: hidden;
        }
        @media (max-width: 768px) {
          .benefits-wrap { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 420px) {
          .benefits-wrap { grid-template-columns: 1fr; }
        }
      `}</style>

      <section style={{ background:'#141C2E', borderTop:'1px solid rgba(255,255,255,0.07)', borderBottom:'1px solid rgba(255,255,255,0.07)', padding:'56px 5%' }}>
        <div className="benefits-wrap">
          {items.map((item, i) => (
            <div
              key={i}
              style={{ background:'#141C2E', padding:'32px 28px', display:'flex', flexDirection:'column', gap:14 }}
            >
              <div style={{ width:44, height:44, borderRadius:11, background:'rgba(37,99,255,0.08)', border:'1px solid rgba(37,99,255,0.22)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                {item.icon}
              </div>
              <div>
                <p style={{ fontFamily:'var(--font-display)', fontSize:15, fontWeight:700, color:'#F1F5F9', margin:'0 0 6px' }}>
                  {item.title}
                </p>
                <p style={{ fontSize:13, color:'#94A3B8', lineHeight:1.62, margin:0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
