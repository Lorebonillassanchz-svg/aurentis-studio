'use client'

import { useState, useRef, useEffect } from 'react'
import React from 'react'

/* ── Sector list ──────────────────────────────────────────── */
const SECTORS = [
  'Consultoría y servicios profesionales',
  'Restauración y hostelería',
  'Comercio minorista / Tienda física',
  'Ecommerce / Tienda online',
  'Salud y bienestar',
  'Educación y formación',
  'Inmobiliario',
  'Construcción y reformas',
  'Tecnología y software',
  'Marketing y comunicación',
  'Moda y lifestyle',
  'Turismo y viajes',
  'Deporte y ocio',
  'Legal y asesoría',
  'Contabilidad y finanzas',
  'Fotografía y diseño',
  'Arquitectura e interiorismo',
  'Automoción',
  'Logística y transporte',
  'Agricultura y alimentación',
  'Industria y manufactura',
  'ONGs y sector social',
  'Arte y cultura',
  'Belleza y peluquería',
  'Otro',
]

/* ── Styles ───────────────────────────────────────────────── */
const gradText: React.CSSProperties = {
  background: 'linear-gradient(100deg, #3B82F6, #818CF8)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

function inputBase(focused: boolean): React.CSSProperties {
  return {
    width: '100%',
    background: 'rgba(11,15,26,0.8)',
    border: focused ? '1px solid rgba(37,99,255,0.5)' : '1px solid rgba(255,255,255,0.08)',
    boxShadow: focused ? '0 0 0 3px rgba(37,99,255,0.08)' : 'none',
    borderRadius: 9,
    padding: '12px 14px',
    color: '#F1F5F9',
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    outline: 'none',
    boxSizing: 'border-box' as const,
    transition: 'border-color 0.2s, box-shadow 0.2s',
  }
}

/* ── Trust point ──────────────────────────────────────────── */
function TrustPoint({ text }: { text: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: '50%',
          background: 'rgba(37,99,255,0.12)',
          border: '1px solid rgba(37,99,255,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          marginTop: 1,
        }}
      >
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
          <path d="M2 5.5l2.5 2.5 4.5-4.5" stroke="#60A5FA" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <span style={{ color: '#94A3B8', fontSize: 14.5, fontFamily: 'var(--font-body)', fontWeight: 300, lineHeight: 1.5 }}>
        {text}
      </span>
    </div>
  )
}

/* ── Field label ──────────────────────────────────────────── */
function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label
      style={{
        display: 'block',
        fontSize: 13,
        fontWeight: 500,
        color: '#94A3B8',
        fontFamily: 'var(--font-body)',
        marginBottom: 6,
      }}
    >
      {children}
    </label>
  )
}

/* ── Main component ───────────────────────────────────────── */
export default function AuditoriaForm() {
  const [nombre,      setNombre]      = useState('')
  const [empresa,     setEmpresa]     = useState('')
  const [email,       setEmail]       = useState('')
  const [whatsapp,    setWhatsapp]    = useState('')
  const [sector,      setSector]      = useState('')
  const [problema,    setProblema]    = useState('')
  const [privacidad,  setPrivacidad]  = useState(false)
  const [comercial,   setComercial]   = useState(false)
  const [loading,     setLoading]     = useState(false)
  const [sent,        setSent]        = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const [sectorOpen,      setSectorOpen]      = useState(false)
  const [sectorHighlight, setSectorHighlight] = useState(-1)

  const [focused, setFocused] = useState<string | null>(null)

  const sectorRef  = useRef<HTMLDivElement>(null)
  const sectorInput = useRef<HTMLInputElement>(null)

  const filtered = SECTORS.filter(s =>
    s.toLowerCase().includes(sector.toLowerCase())
  )

  /* Close dropdown on outside click */
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (sectorRef.current && !sectorRef.current.contains(e.target as Node)) {
        setSectorOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  function handleSectorKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!sectorOpen && e.key !== 'Escape') setSectorOpen(true)
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSectorHighlight(h => Math.min(h + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSectorHighlight(h => Math.max(h - 1, 0))
    } else if (e.key === 'Enter' && sectorHighlight >= 0 && sectorOpen) {
      e.preventDefault()
      setSector(filtered[sectorHighlight])
      setSectorOpen(false)
      setSectorHighlight(-1)
    } else if (e.key === 'Escape') {
      setSectorOpen(false)
    }
  }

  function selectSector(s: string) {
    setSector(s)
    setSectorOpen(false)
    setSectorHighlight(-1)
    sectorInput.current?.blur()
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!privacidad) return
    setLoading(true)
    setSubmitError(false)
    try {
      await fetch(process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL || '', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre,
          email,
          empresa,
          whatsapp,
          sector,
          tipoProyecto: '',
          mensaje: problema,
          aceptaComercial: comercial,
          fecha: new Date().toISOString(),
          origen: 'Aurentis Studio — Formulario de auditoría',
        }),
      })

      // Correo de bienvenida vía Brevo
      console.log('Brevo API Key presente:', !!process.env.NEXT_PUBLIC_BREVO_API_KEY)
      try {
        const BREVO_API_KEY = process.env.NEXT_PUBLIC_BREVO_API_KEY || ''
        await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-key': BREVO_API_KEY,
          },
          body: JSON.stringify({
            to: [{ email, name: nombre }],
            templateId: 1,
            params: {
              nombre,
              tipoProyecto: sector || '',
            },
          }),
        })
      } catch (error) {
        console.error('Error enviando email de bienvenida:', error)
        // No bloqueamos el flujo principal si falla Brevo
      }

      setSent(true)
    } catch {
      setSubmitError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <style>{`
        .auditoria-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 5rem;
          align-items: start;
          max-width: 1240px;
          margin: 0 auto;
        }
        .auditoria-sticky { position: sticky; top: 100px; }
        .auditoria-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .auditoria-input::placeholder { color: #4B5A72; }
        .sector-option:hover { background: rgba(37,99,255,0.12) !important; }
        @keyframes aud-spin { to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          .auditoria-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .auditoria-sticky { position: static; }
          .auditoria-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <section
        id="auditoria"
        style={{
          padding: '120px 5%',
          background: '#0F172A',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          position: 'relative',
        }}
      >
        {/* Decorative glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            right: '-5%',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37,99,255,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
            transform: 'translateY(-50%)',
            zIndex: 0,
          }}
        />

        <div className="auditoria-grid" style={{ position: 'relative', zIndex: 1 }}>

          {/* ── LEFT: info column ── */}
          <div className="auditoria-sticky">
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
              Auditoría gratuita
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(24px, 2.6vw, 38px)',
                fontWeight: 800,
                color: '#F1F5F9',
                margin: '0 0 18px',
                lineHeight: 1.15,
              }}
            >
              Cuéntame tu caso.{' '}
              <span style={gradText}>Te diré qué está fallando en tu web.</span>
            </h2>

            <p
              style={{
                color: '#94A3B8',
                fontSize: 15,
                lineHeight: 1.72,
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                margin: '0 0 32px',
              }}
            >
              Rellena el formulario y en menos de 48h recibirás un análisis honesto de tu presencia digital. Sin compromiso y sin presión de venta.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <TrustPoint text="Sin compromiso ni coste" />
              <TrustPoint text="Análisis honesto, no una propuesta de venta disfrazada" />
              <TrustPoint text="Solo te contacto si tiene sentido para los dos" />
            </div>
          </div>

          {/* ── RIGHT: form ── */}
          <div
            style={{
              background: '#0F172A',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 20,
              padding: 36,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top accent line */}
            <div
              style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: 2,
                background: 'linear-gradient(90deg, #2563FF, #6366F1, transparent)',
              }}
            />

          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(22,163,74,0.1)', border: '1px solid rgba(22,163,74,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12l4 4 10-10" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: '#F1F5F9', margin: '0 0 10px' }}>¡Solicitud recibida!</h3>
              <p style={{ color: '#4ADE80', fontSize: 14, fontFamily: 'var(--font-body)', margin: 0 }}>Te respondo en menos de 48h con tu análisis.</p>
            </div>
          ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
            }}
          >

            {/* Row 1: Nombre + Empresa */}
            <div className="auditoria-row">
              <div>
                <FieldLabel>Nombre <span style={{ color: '#3B82F6' }}>*</span></FieldLabel>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre"
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
                  onFocus={() => setFocused('nombre')}
                  onBlur={() => setFocused(null)}
                  className="auditoria-input"
                  style={inputBase(focused === 'nombre')}
                />
              </div>
              <div>
                <FieldLabel>Empresa o negocio <span style={{ color: '#3B82F6' }}>*</span></FieldLabel>
                <input
                  type="text"
                  required
                  placeholder="Nombre de tu negocio"
                  value={empresa}
                  onChange={e => setEmpresa(e.target.value)}
                  onFocus={() => setFocused('empresa')}
                  onBlur={() => setFocused(null)}
                  className="auditoria-input"
                  style={inputBase(focused === 'empresa')}
                />
              </div>
            </div>

            {/* Row 2: Email + WhatsApp */}
            <div className="auditoria-row">
              <div>
                <FieldLabel>Correo electrónico <span style={{ color: '#3B82F6' }}>*</span></FieldLabel>
                <input
                  type="email"
                  required
                  placeholder="tu@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  className="auditoria-input"
                  style={inputBase(focused === 'email')}
                />
              </div>
              <div>
                <FieldLabel>WhatsApp <span style={{ color: '#4B5A72', fontWeight: 400 }}>(opcional)</span></FieldLabel>
                <input
                  type="tel"
                  placeholder="+34 600 000 000"
                  value={whatsapp}
                  onChange={e => setWhatsapp(e.target.value)}
                  onFocus={() => setFocused('whatsapp')}
                  onBlur={() => setFocused(null)}
                  className="auditoria-input"
                  style={inputBase(focused === 'whatsapp')}
                />
              </div>
            </div>

            {/* Sector smart search */}
            <div>
              <FieldLabel>Sector</FieldLabel>
              <div ref={sectorRef} style={{ position: 'relative' }}>
                <input
                  ref={sectorInput}
                  type="text"
                  placeholder="Escribe o selecciona tu sector…"
                  value={sector}
                  onChange={e => { setSector(e.target.value); setSectorOpen(true); setSectorHighlight(-1) }}
                  onFocus={() => { setFocused('sector'); setSectorOpen(true) }}
                  onBlur={() => setFocused(null)}
                  onKeyDown={handleSectorKey}
                  className="auditoria-input"
                  style={{ ...inputBase(focused === 'sector'), paddingRight: 36 }}
                  autoComplete="off"
                />
                {/* Chevron */}
                <svg
                  width="14" height="14" viewBox="0 0 14 14" fill="none"
                  style={{ position: 'absolute', right: 12, top: '50%', transform: `translateY(-50%) rotate(${sectorOpen ? '180deg' : '0deg'})`, transition: 'transform 0.2s', pointerEvents: 'none' }}
                >
                  <path d="M3 5l4 4 4-4" stroke="#4B5A72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                {/* Dropdown */}
                {sectorOpen && filtered.length > 0 && (
                  <ul
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 6px)',
                      left: 0, right: 0,
                      background: '#0F172A',
                      border: '1px solid rgba(255,255,255,0.10)',
                      borderRadius: 9,
                      maxHeight: 220,
                      overflowY: 'auto',
                      listStyle: 'none',
                      margin: 0,
                      padding: '4px 0',
                      zIndex: 50,
                      boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                    }}
                  >
                    {filtered.map((s, i) => (
                      <li
                        key={s}
                        className="sector-option"
                        onMouseDown={() => selectSector(s)}
                        style={{
                          padding: '10px 14px',
                          fontSize: 13.5,
                          fontFamily: 'var(--font-body)',
                          color: sectorHighlight === i ? '#F1F5F9' : '#94A3B8',
                          background: sectorHighlight === i ? 'rgba(37,99,255,0.12)' : 'transparent',
                          cursor: 'pointer',
                          transition: 'background 0.15s',
                        }}
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Problem textarea */}
            <div>
              <FieldLabel>¿Qué problema quieres resolver?</FieldLabel>
              <textarea
                rows={4}
                placeholder="Cuéntame brevemente qué está fallando o qué quieres conseguir. Sin filtros, cuanto más concreto mejor."
                value={problema}
                onChange={e => setProblema(e.target.value)}
                onFocus={() => setFocused('problema')}
                onBlur={() => setFocused(null)}
                className="auditoria-input"
                style={{
                  ...inputBase(focused === 'problema'),
                  minHeight: 110,
                  resize: 'vertical',
                  lineHeight: 1.6,
                }}
              />
            </div>

            {/* RGPD checkboxes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  required
                  checked={privacidad}
                  onChange={e => setPrivacidad(e.target.checked)}
                  style={{ width: 16, height: 16, accentColor: '#2563FF', flexShrink: 0, marginTop: 2, cursor: 'pointer' }}
                />
                <span style={{ color: '#94A3B8', fontSize: 13, fontFamily: 'var(--font-body)', lineHeight: 1.5 }}>
                  He leído y acepto la <span style={{ color: '#60A5FA' }}>Política de Privacidad</span> y el tratamiento de mis datos para gestionar mi consulta. <span style={{ color: '#3B82F6' }}>*</span>
                </span>
              </label>
              <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={comercial}
                  onChange={e => setComercial(e.target.checked)}
                  style={{ width: 16, height: 16, accentColor: '#2563FF', flexShrink: 0, marginTop: 2, cursor: 'pointer' }}
                />
                <span style={{ color: '#94A3B8', fontSize: 13, fontFamily: 'var(--font-body)', lineHeight: 1.5 }}>
                  Acepto recibir comunicaciones comerciales y novedades por email.
                </span>
              </label>
              <p style={{ fontSize: 11, color: '#4B5A72', fontStyle: 'italic', fontFamily: 'var(--font-body)', margin: 0, lineHeight: 1.5 }}>
                Responsable: Aurentis Studio. Tus datos se usarán para gestionar tu consulta y, si lo has aceptado, enviarte comunicaciones comerciales. No cedemos datos a terceros. Puedes ejercer tus derechos en aurentistudio@outlook.com.
              </p>
            </div>

            {/* Error feedback */}
            {submitError && (
              <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: 9, padding: '12px 14px' }}>
                <p style={{ color: '#F87171', fontSize: 13.5, fontFamily: 'var(--font-body)', margin: 0 }}>
                  Algo salió mal. Escríbeme directamente a{' '}
                  <a href="mailto:aurentistudio@outlook.com" style={{ color: '#F87171', textDecoration: 'underline' }}>aurentistudio@outlook.com</a>
                </p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={!privacidad || loading}
              style={{
                width: '100%',
                background: '#2563FF',
                color: '#fff',
                fontFamily: 'var(--font-display)',
                fontSize: 15,
                fontWeight: 600,
                padding: 14,
                borderRadius: 9,
                border: 'none',
                cursor: (!privacidad || loading) ? 'not-allowed' : 'pointer',
                opacity: (!privacidad || loading) ? 0.45 : 1,
                boxShadow: '0 0 28px rgba(37,99,255,0.3)',
                transition: 'background 0.2s, box-shadow 0.2s, opacity 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
              }}
              onMouseEnter={e => {
                if (privacidad && !loading) {
                  const el = e.currentTarget as HTMLButtonElement
                  el.style.background = '#1d4fd8'
                  el.style.boxShadow  = '0 0 36px rgba(37,99,255,0.45)'
                }
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLButtonElement
                el.style.background = '#2563FF'
                el.style.boxShadow  = '0 0 28px rgba(37,99,255,0.3)'
              }}
            >
              {loading ? (
                <>
                  <span style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', display: 'inline-block', animation: 'aud-spin 0.7s linear infinite' }} />
                  Enviando...
                </>
              ) : 'Quiero mi análisis gratuito →'}
            </button>

            <p
              style={{
                textAlign: 'center',
                fontSize: 12.5,
                color: '#4B5A72',
                fontStyle: 'italic',
                fontFamily: 'var(--font-body)',
                margin: 0,
              }}
            >
              Respondo en menos de 48h. Sin spam, sin llamadas no solicitadas.
            </p>
          </form>
          )}
          </div>
        </div>
      </section>
    </>
  )
}
