'use client'

import { useState, useEffect, useRef } from 'react'
import { FileText, MessageCircle, Zap, Star } from 'lucide-react'

/* ── Option data ──────────────────────────────────────────── */
const OPTIONS = [
  {
    icon: FileText,
    title: 'Quiero presupuesto para un proyecto',
    href: 'https://wa.me/34642040364?text=Hola%20Lorena%2C%20me%20gustar%C3%ADa%20recibir%20presupuesto%20para%20un%20proyecto.%20Te%20cuento...',
  },
  {
    icon: MessageCircle,
    title: 'Tengo una duda antes de contratar',
    href: 'https://wa.me/34642040364?text=Hola%20Lorena%2C%20tengo%20una%20duda%20antes%20de%20contratar%20tus%20servicios...',
  },
  {
    icon: Zap,
    title: 'Necesito ayuda urgente',
    href: 'https://wa.me/34642040364?text=Hola%20Lorena%2C%20necesito%20ayuda%20con%20mi%20presencia%20digital%20lo%20antes%20posible...',
  },
  {
    icon: Star,
    title: 'Soy creador de contenido',
    href: 'https://wa.me/34642040364?text=Hola%20Lorena%2C%20soy%20creador%20de%20contenido%20y%20quiero%20profesionalizar%20y%20monetizar%20mi%20marca%20personal.%20Te%20cuento%20mi%20caso...',
  },
]

/* ── Card ─────────────────────────────────────────────────── */
function OptionCard({ opt }: { opt: typeof OPTIONS[number] }) {
  const [hovered, setHovered] = useState(false)
  const Icon = opt.icon

  return (
    <a
      href={opt.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        width: '100%',
        padding: 16,
        borderRadius: 14,
        background: 'rgba(15,23,42,0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: hovered
          ? '1px solid rgba(37,99,255,0.55)'
          : '1px solid rgba(99,102,241,0.3)',
        boxShadow: hovered
          ? '0 8px 32px rgba(37,99,255,0.18)'
          : '0 4px 16px rgba(0,0,0,0.3)',
        textDecoration: 'none',
        cursor: 'pointer',
        transform: hovered ? 'scale(1.02)' : 'scale(1)',
        transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
        boxSizing: 'border-box',
      }}
    >
      {/* Icon container */}
      <div style={{
        width: 44, height: 44, borderRadius: 12, flexShrink: 0,
        background: 'linear-gradient(135deg, #2563FF 0%, #6366F1 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 4px 14px rgba(37,99,255,0.35)',
      }}>
        <Icon size={20} color="#fff" strokeWidth={1.8} />
      </div>

      {/* Title */}
      <span style={{
        fontFamily: 'var(--font-display)',
        fontSize: 13.5,
        fontWeight: 600,
        color: '#F1F5F9',
        lineHeight: 1.35,
      }}>
        {opt.title}
      </span>
    </a>
  )
}

/* ── Main component ───────────────────────────────────────── */
export default function WhatsAppButton() {
  const [open,     setOpen]     = useState(false)
  const [btnHover, setBtnHover] = useState(false)
  const containerRef            = useRef<HTMLDivElement>(null)

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
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.04); }
        }
        @keyframes waMenuIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div ref={containerRef} style={{ position: 'fixed', bottom: 28, right: 28, zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12 }}>

        {/* ── Menu ── */}
        {open && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            width: 290,
            animation: 'waMenuIn 0.22s cubic-bezier(0.22,1,0.36,1) forwards',
          }}>
            {OPTIONS.map(opt => (
              <OptionCard key={opt.title} opt={opt} />
            ))}
          </div>
        )}

        {/* ── "¿Hablamos?" label ── */}
        {!open && (
          <span style={{
            color: '#fff',
            fontSize: 11,
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            letterSpacing: '0.02em',
            pointerEvents: 'none',
            animation: 'waPulse 3s ease-in-out infinite',
            textShadow: '0 1px 4px rgba(0,0,0,0.5)',
          }}>
            ¿Hablamos?
          </span>
        )}

        {/* ── Main button ── */}
        <button
          onClick={() => setOpen(v => !v)}
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
          aria-label={open ? 'Cerrar menú WhatsApp' : 'Abrir menú WhatsApp'}
          style={{
            width: 58, height: 58,
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
            transform: btnHover ? 'scale(1.06)' : 'scale(1)',
            transition: 'background 0.2s, box-shadow 0.2s, transform 0.2s',
            flexShrink: 0,
          }}
        >
          <span style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s ease, opacity 0.2s ease',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}>
            {open ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M4 4l14 14M18 4L4 18" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            ) : (
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
