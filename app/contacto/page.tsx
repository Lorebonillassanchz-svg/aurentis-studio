'use client'

import React, { useState } from 'react'
import Link from 'next/link'

/* ── Input focus state ────────────────────────────────────── */
function inputStyle(focused: boolean): React.CSSProperties {
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

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label style={{ display: 'block', fontSize: 13, fontWeight: 500, color: '#94A3B8', fontFamily: 'var(--font-body)', marginBottom: 6 }}>
      {children}
    </label>
  )
}

/* ── Contact item ─────────────────────────────────────────── */
function ContactItem({ icon, label, children }: { icon: React.ReactNode; label?: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
      <div style={{ width: 38, height: 38, borderRadius: 9, background: 'rgba(37,99,255,0.08)', border: '1px solid rgba(37,99,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {icon}
      </div>
      <div>
        {label && <p style={{ fontSize: 11, fontWeight: 600, color: '#4B5A72', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 3px' }}>{label}</p>}
        <div style={{ color: '#94A3B8', fontSize: 14, fontFamily: 'var(--font-body)' }}>{children}</div>
      </div>
    </div>
  )
}

/* ── Trust point ──────────────────────────────────────────── */
function TrustPt({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="rgba(37,99,255,0.35)" strokeWidth="1"/><path d="M5 8l2 2 4-4" stroke="#60A5FA" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
      <span style={{ color: '#94A3B8', fontSize: 13.5, fontFamily: 'var(--font-body)', fontWeight: 300 }}>{children}</span>
    </div>
  )
}

/* ── Page ─────────────────────────────────────────────────── */
export default function ContactoPage() {
  const [nombre,      setNombre]      = useState('')
  const [email,       setEmail]       = useState('')
  const [tipo,        setTipo]        = useState('')
  const [mensaje,     setMensaje]     = useState('')
  const [privacidad,  setPrivacidad]  = useState(false)
  const [comercial,   setComercial]   = useState(false)
  const [focused,     setFocused]     = useState<string | null>(null)
  const [sent,        setSent]        = useState(false)
  const [loading,     setLoading]     = useState(false)
  const [submitError, setSubmitError] = useState(false)

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
          empresa: '',
          whatsapp: '',
          sector: '',
          tipoProyecto: tipo,
          mensaje,
          aceptaComercial: comercial,
          fecha: new Date().toISOString(),
          origen: 'Aurentis Studio — Formulario de contacto',
        }),
      })

      // Correo de bienvenida vía Brevo
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
              tipoProyecto: tipo || '',
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

  const gradText: React.CSSProperties = {
    background: 'linear-gradient(100deg, #3B82F6, #818CF8)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  }

  return (
    <>
      <style>{`
        .ct-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
          max-width: 1100px;
          margin: 0 auto;
          padding: 140px 5% 100px;
        }
        .ct-input::placeholder { color: #4B5A72; }
        .ct-select {
          appearance: none;
          -webkit-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%234B5A72' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          cursor: pointer;
        }
        .ct-btn { transition: background 0.2s, box-shadow 0.2s; }
        .ct-btn:hover:not(:disabled) { background: #1d4fd8 !important; box-shadow: 0 0 36px rgba(37,99,255,0.45) !important; }
        @keyframes ct-spin { to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          .ct-layout { grid-template-columns: 1fr; padding: 120px 5% 80px; gap: 2.5rem; }
        }
      `}</style>

      <section style={{ background: '#0B0F1A', minHeight: '100vh' }}>
        <div className="ct-layout">

          {/* ── LEFT: Info ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3B82F6' }}>
              Contacto
            </span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 2.8vw, 38px)', fontWeight: 800, color: '#F1F5F9', margin: 0, lineHeight: 1.15 }}>
              <span style={{ display: 'block' }}>Construyamos el sistema</span>
              <span style={gradText}>que traerá tus próximos clientes.</span>
            </h1>
            <p style={{ color: '#94A3B8', fontSize: 15.5, lineHeight: 1.75, fontFamily: 'var(--font-body)', fontWeight: 300, margin: 0 }}>
              Ya sea que necesites una web que convierta, redes sociales que generen comunidad o aparecer el primero en Google, estoy aquí para hacerlo realidad. Cuéntame tu caso y diseñaremos un plan a medida para tu negocio.
            </p>

            {/* Checklist de valor */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 4 }}>
              {[
                'Estrategia multicanal — Web, RRSS y SEO trabajando juntos.',
                'Enfoque total en resultados y ventas, no en métricas de vanidad.',
                'Trato directo y transparencia en cada paso del proyecto.',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(37,99,255,0.1)', border: '1px solid rgba(37,99,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5l2.5 2.5 4.5-4.5" stroke="#60A5FA" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span style={{ color: '#94A3B8', fontSize: 14, fontFamily: 'var(--font-body)', fontWeight: 300, lineHeight: 1.55 }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Separador */}
            <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '4px 0' }} />

            {/* Contact items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <ContactItem label="Email" icon={
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="3" width="14" height="10" rx="1.5" stroke="#60A5FA" strokeWidth="1.2"/><path d="M1 6l7 4.5L15 6" stroke="#60A5FA" strokeWidth="1.2" strokeLinecap="round"/></svg>
              }>
                <Link href="mailto:aurentistudio@outlook.com" style={{ color: '#94A3B8', textDecoration: 'none' }}>
                  aurentistudio@outlook.com
                </Link>
              </ContactItem>

              <ContactItem label="WhatsApp" icon={
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="#60A5FA" strokeWidth="1.2"/><path d="M5.5 6.5c.5 3 4 4 5.5 3.5l-.5-1.5-1 .5c-.5-.5-1-1-1.5-1.5l.5-1-1.5-.5-.5 1z" stroke="#60A5FA" strokeWidth="1" strokeLinejoin="round"/></svg>
              }>
                <Link href="https://wa.me/34642040364" target="_blank" style={{ color: '#94A3B8', textDecoration: 'none' }}>
                  +34 642 040 364
                </Link>
              </ContactItem>

              <ContactItem label="Ubicación" icon={
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.5a5 5 0 015 5c0 3.75-5 9-5 9S3 10.25 3 6.5a5 5 0 015-5z" stroke="#60A5FA" strokeWidth="1.2"/><circle cx="8" cy="6.5" r="1.5" fill="#60A5FA"/></svg>
              }>
                Córdoba, España
              </ContactItem>

              <ContactItem label="Horario" icon={
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="#60A5FA" strokeWidth="1.2"/><path d="M8 4.5v4l2.5 2" stroke="#60A5FA" strokeWidth="1.3" strokeLinecap="round"/></svg>
              }>
                Lunes a viernes, 9:00 – 18:00
              </ContactItem>
            </div>

            {/* Trust points */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 8, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <TrustPt>Respondo en menos de 48h</TrustPt>
              <TrustPt>Sin compromiso ni presión</TrustPt>
              <TrustPt>Primera consulta gratuita</TrustPt>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div style={{ background: '#0F172A', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 36, position: 'relative', overflow: 'hidden' }}>
            {/* Top accent */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, #2563FF, #6366F1, transparent)' }} />

            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(22,163,74,0.1)', border: '1px solid rgba(22,163,74,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12l4 4 10-10" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: '#F1F5F9', margin: '0 0 10px' }}>¡Mensaje enviado!</h3>
                <p style={{ color: '#4ADE80', fontSize: 14, fontFamily: 'var(--font-body)', margin: 0 }}>Te respondo en menos de 48h.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div>
                  <FieldLabel>Nombre <span style={{ color: '#3B82F6' }}>*</span></FieldLabel>
                  <input type="text" required placeholder="Tu nombre" value={nombre} onChange={e => setNombre(e.target.value)} onFocus={() => setFocused('nombre')} onBlur={() => setFocused(null)} className="ct-input" style={inputStyle(focused === 'nombre')} />
                </div>
                <div>
                  <FieldLabel>Correo electrónico <span style={{ color: '#3B82F6' }}>*</span></FieldLabel>
                  <input type="email" required placeholder="tu@email.com" value={email} onChange={e => setEmail(e.target.value)} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} className="ct-input" style={inputStyle(focused === 'email')} />
                </div>
                <div>
                  <FieldLabel>Tipo de proyecto</FieldLabel>
                  <select value={tipo} onChange={e => setTipo(e.target.value)} onFocus={() => setFocused('tipo')} onBlur={() => setFocused(null)} className="ct-input ct-select" style={inputStyle(focused === 'tipo')}>
                    <option value="">Selecciona una opción</option>
                    <option value="web">Diseño Web o Landing Page</option>
                    <option value="rrss">Gestión de Redes Sociales (Instagram, TikTok, LinkedIn)</option>
                    <option value="seo">Posicionamiento SEO / Google Business</option>
                    <option value="ads">Publicidad Online (Meta Ads / Google Ads)</option>
                    <option value="pack">Pack de Marketing Integral (Todo en uno)</option>
                  </select>
                </div>
                <div>
                  <FieldLabel>¿En qué punto se encuentra tu negocio y qué te gustaría lograr? <span style={{ color: '#3B82F6' }}>*</span></FieldLabel>
                  <textarea required rows={5} placeholder="Cuéntame dónde estás ahora y qué resultado concreto buscas. Cuanto más específico seas, mejor podré ayudarte." value={mensaje} onChange={e => setMensaje(e.target.value)} onFocus={() => setFocused('mensaje')} onBlur={() => setFocused(null)} className="ct-input" style={{ ...inputStyle(focused === 'mensaje'), minHeight: 130, resize: 'vertical', lineHeight: 1.6 }} />
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

                <button
                  type="submit"
                  disabled={!privacidad || loading}
                  className="ct-btn"
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
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    transition: 'background 0.2s, box-shadow 0.2s, opacity 0.2s',
                  }}
                >
                  {loading ? (
                    <>
                      <span style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', display: 'inline-block', animation: 'ct-spin 0.7s linear infinite' }} />
                      Enviando...
                    </>
                  ) : 'Solicitar mi plan de crecimiento gratuito →'}
                </button>
                <p style={{ textAlign: 'center', fontSize: 12.5, color: '#4B5A72', fontStyle: 'italic', fontFamily: 'var(--font-body)', margin: 0 }}>
                  Analizo tu presencia digital actual (web y redes) antes de nuestra primera charla.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>
    </>
  )
}
