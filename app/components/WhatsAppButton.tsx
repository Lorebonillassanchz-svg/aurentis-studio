'use client'

import { useState, useEffect, useRef } from 'react'

const OPTIONS = [
  {
    text: 'Quiero mejorar mi web actual',
    href: 'https://wa.me/34642040364?text=Hola!%20Quiero%20que%20analices%20mi%20web%20actual%20para%20vender%20m%C3%A1s.',
    dot: '#25D366',
    hoverBorder: 'rgba(37,211,102,0.4)',
    hoverBg: 'rgba(37,211,102,0.08)',
  },
  {
    text: 'Necesito una web desde cero',
    href: 'https://wa.me/34642040364?text=Hola!%20Estoy%20empezando%20un%20proyecto%20y%20necesito%20una%20web%20profesional.',
    dot: '#2563FF',
    hoverBorder: 'rgba(37,99,255,0.4)',
    hoverBg: 'rgba(37,99,255,0.08)',
  },
  {
    text: 'Otro tipo de consulta',
    href: 'https://wa.me/34642040364?text=Hola!%20Tengo%20una%20duda%20sobre%20tus%20servicios%20de%20marketing.',
    dot: '#FBBF24',
    hoverBorder: 'rgba(251,191,36,0.4)',
    hoverBg: 'rgba(251,191,36,0.08)',
  },
]

function OptionItem({ opt }: { opt: typeof OPTIONS[number] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={opt.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
    >
      <span
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          background: hovered ? opt.hoverBg : 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: `1px solid ${hovered ? opt.hoverBorder : 'rgba(255,255,255,0.1)'}`,
          color: '#fff',
          fontSize: 13,
          fontWeight: 500,
          padding: '10px 16px',
          borderRadius: 10,
          whiteSpace: 'nowrap' as const,
          fontFamily: 'var(--font-body)',
          cursor: 'pointer',
          transition: 'border-color 0.2s, background 0.2s',
        }}
      >
        {opt.text}
        <span style={{
          width: 10, height: 10,
          background: opt.dot,
          borderRadius: '50%',
          marginLeft: 10,
          flexShrink: 0,
          boxShadow: `0 0 6px ${opt.dot}88`,
        }} />
      </span>
    </a>
  )
}

export default function WhatsAppButton() {
  const [open, setOpen]       = useState(false)
  const [btnHover, setBtnHover] = useState(false)
  const containerRef           = useRef<HTMLDivElement>(null)

  /* Close on outside click */
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <>
      <style>{`
        @keyframes waPulse {
          0%,100% { transform: scale(1); }
          50%      { transform: scale(1.03); }
        }
        @keyframes waMenuIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes waMenuOut {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(10px); }
        }
      `}</style>

      <div ref={containerRef} style={{ position: 'fixed', bottom: 28, right: 28, zIndex: 999 }}>

        {/* ── Dropdown menu ── */}
        {open && (
          <div
            style={{
              position: 'absolute',
              bottom: 72,
              right: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              alignItems: 'flex-end',
              animation: 'waMenuIn 0.2s ease forwards',
            }}
          >
            {OPTIONS.map(opt => (
              <OptionItem key={opt.text} opt={opt} />
            ))}
          </div>
        )}

        {/* ── "¿Hablamos?" pill label ── */}
        {!open && (
          <div
            style={{
              position: 'absolute',
              bottom: 66,
              right: 0,
              background: 'rgba(0,0,0,0.75)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff',
              fontSize: 11,
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              padding: '5px 12px',
              borderRadius: 999,
              whiteSpace: 'nowrap' as const,
              pointerEvents: 'none',
              animation: 'waPulse 3s ease-in-out infinite',
            }}
          >
            ¿Hablamos?
          </div>
        )}

        {/* ── Main button ── */}
        <button
          onClick={() => setOpen(v => !v)}
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
          aria-label={open ? 'Cerrar menú WhatsApp' : 'Abrir menú WhatsApp'}
          style={{
            width: 58,
            height: 58,
            borderRadius: '50%',
            background: btnHover ? '#20BA5A' : '#25D366',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: btnHover
              ? '0 6px 28px rgba(37,211,102,0.55)'
              : '0 4px 20px rgba(37,211,102,0.4)',
            transform: btnHover ? 'scale(1.05)' : 'scale(1)',
            transition: 'background 0.2s, box-shadow 0.2s, transform 0.2s',
            position: 'relative',
            zIndex: 999,
          }}
        >
          {/* Icon: WhatsApp ↔ X */}
          <span style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s ease, opacity 0.2s ease',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}>
            {open ? (
              /* X icon */
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M4 4l14 14M18 4L4 18" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            ) : (
              /* WhatsApp icon */
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            )}
          </span>
        </button>
      </div>
    </>
  )
}
