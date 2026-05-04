import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

/* ── Contact icons ────────────────────────────────────────── */
function EmailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
      <rect x="1" y="2.5" width="12" height="9" rx="1.5" stroke="#4B5A72" strokeWidth="1.2"/>
      <path d="M1 5l6 4 6-4" stroke="#4B5A72" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  )
}
function WhatsAppIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
      <circle cx="7" cy="7" r="5.5" stroke="#4B5A72" strokeWidth="1.2"/>
      <path d="M4.5 5.5c.5 2.5 3.5 3.5 5 3l-.5-1.5-1 .5c-.5-.5-1-1-1.5-1.5l.5-1L5.5 5l-1 .5z" stroke="#4B5A72" strokeWidth="1" strokeLinejoin="round"/>
    </svg>
  )
}
function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
      <path d="M7 1.5a4 4 0 014 4c0 3-4 7-4 7S3 8.5 3 5.5a4 4 0 014-4z" stroke="#4B5A72" strokeWidth="1.2"/>
      <circle cx="7" cy="5.5" r="1.2" fill="#4B5A72"/>
    </svg>
  )
}

/* ── Sub-components ───────────────────────────────────────── */
function ColTitle({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: 'var(--font-display)',
      fontSize: 13,
      fontWeight: 700,
      color: '#F1F5F9',
      margin: '0 0 18px',
      letterSpacing: '0.03em',
    }}>
      {children}
    </p>
  )
}

function FLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="footer-link">
      {children}
    </Link>
  )
}

/* ── Component ────────────────────────────────────────────── */
export default function Footer() {
  return (
    <>
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.4fr;
          gap: 3rem;
          max-width: 1240px;
          margin: 0 auto 56px;
        }
        .footer-links-col  { display: flex; flex-direction: column; gap: 14px; }
        .footer-contact-col { display: flex; flex-direction: column; gap: 14px; }

        .footer-link {
          display: block;
          color: #4B5A72;
          font-family: var(--font-body);
          font-size: 13.5px;
          font-weight: 400;
          text-decoration: none;
          line-height: 1;
          transition: color 0.2s;
        }
        .footer-link:hover { color: #94A3B8; }

        .footer-cta {
          display: inline-block;
          margin-top: 6px;
          color: #60A5FA;
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-cta:hover { color: #93C5FD; }

        .footer-legal-link {
          color: #4B5A72;
          font-size: 12.5px;
          font-family: var(--font-body);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-legal-link:hover { color: #94A3B8; }

        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
        }
        @media (max-width: 420px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <footer style={{
        background: '#0F172A',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        padding: '72px 5% 36px',
      }}>

        <div className="footer-grid">

          {/* Col 1 — Brand */}
          <div>
            <Link href="/" style={{ display: 'inline-flex', marginBottom: 20 }}>
              <Image
                src="/logo.png"
                alt="Aurentis Studio"
                width={130}
                height={34}
                style={{ objectFit: 'contain', height: 34, width: 'auto' }}
              />
            </Link>
            <p style={{
              color: '#4B5A72',
              fontSize: 13.5,
              lineHeight: 1.7,
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              margin: 0,
              maxWidth: 280,
            }}>
              Estudio de presencia digital para negocios que quieren verse mejor, comunicar con claridad y captar con más intención.
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <ColTitle>Navegación</ColTitle>
            <div className="footer-links-col">
              <FLink href="/">Inicio</FLink>
              <FLink href="/servicios">Servicios</FLink>
              <FLink href="/portafolio">Portafolio</FLink>
              <FLink href="/sobre-mi">Sobre mí</FLink>
              <FLink href="/contacto">Contacto</FLink>
            </div>
          </div>

          {/* Col 3 — Services */}
          <div>
            <ColTitle>Servicios</ColTitle>
            <div className="footer-links-col">
              <FLink href="/servicios/diseno-tiendas-online">Diseño de tiendas online</FLink>
              <FLink href="/servicios/diseno-web-corporativa">Diseño web corporativa</FLink>
              <FLink href="/servicios/posicionamiento-web">Posicionamiento web</FLink>
              <FLink href="/servicios/marketing-digital">Marketing digital</FLink>
            </div>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <ColTitle>Contacto</ColTitle>
            <div className="footer-contact-col">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                <EmailIcon />
                <span style={{ color: '#4B5A72', fontSize: 13.5, fontFamily: 'var(--font-body)' }}>
                  aurentistudio@outlook.com
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                <WhatsAppIcon />
                <span style={{ color: '#4B5A72', fontSize: 13.5, fontFamily: 'var(--font-body)' }}>
                  Disponible por WhatsApp
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                <LocationIcon />
                <span style={{ color: '#4B5A72', fontSize: 13.5, fontFamily: 'var(--font-body)' }}>
                  Córdoba, España
                </span>
              </div>
              <Link href="/contacto" className="footer-cta">
                Solicitar propuesta →
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{
          maxWidth: 1240,
          margin: '0 auto',
          paddingTop: 28,
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <span style={{ color: '#4B5A72', fontSize: 12.5, fontFamily: 'var(--font-body)' }}>
            © 2026 Aurentis Studio. Todos los derechos reservados.
          </span>
          <div style={{ display: 'flex', gap: 20 }}>
            <Link href="/privacidad" className="footer-legal-link">
              Política de privacidad
            </Link>
            <Link href="/aviso-legal" className="footer-legal-link">
              Aviso legal
            </Link>
          </div>
        </div>

      </footer>
    </>
  )
}
