'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const DROPDOWN_GROUPS = [
  {
    label: 'Diseño web',
    items: [
      { label: 'Diseño Web Profesional', desc: 'Web seria, funcional y que convierte', href: '/servicios/diseno-web-corporativa', color: '#2563FF' },
      { label: 'Tienda Online',          desc: 'WooCommerce · Shopify · pasarela de pago', href: '/servicios/diseno-tiendas-online', color: '#6366F1' },
    ],
  },
  {
    label: 'Marketing digital',
    items: [
      { label: 'Posicionamiento SEO',            desc: 'Primera página de Google sin publicidad', href: '/servicios/posicionamiento-web',   color: '#0EA5E9' },
      { label: 'Community Manager',              desc: 'Redes sociales, Reels y TikTok',          href: '/servicios/community-manager',     color: '#A855F7' },
      { label: 'Meta Ads & Google Ads',          desc: 'Publicidad que trae clientes desde el día 1', href: '/servicios/meta-ads',         color: '#F59E0B' },
      { label: 'Email Marketing & Automatización', desc: 'Secuencias y newsletters en automático', href: '/servicios/email-marketing',     color: '#16A34A' },
    ],
  },
]

const NAV_LINKS = [
  { label: 'Proceso',    href: '/proceso' },
  { label: 'Portafolio', href: '/portafolio' },
  { label: 'Sobre mí',   href: '/sobre-mi' },
  { label: 'Contacto',   href: '/contacto' },
]

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false)
  const [menuOpen,       setMenuOpen]        = useState(false)
  const [linkHovered,    setLinkHovered]     = useState<string | null>(null)
  const [dropdownOpen,   setDropdownOpen]    = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function openDropdown() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setDropdownOpen(true)
  }
  function scheduleClose() {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 150)
  }

  const bar: React.CSSProperties = {
    display: 'block',
    width: 22,
    height: 2,
    borderRadius: 2,
    background: '#F1F5F9',
    transition: 'transform 0.25s ease, opacity 0.25s ease',
  }

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          height: 70,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          padding: '0 5%',
          justifyContent: 'space-between',
          transition: 'background 0.3s ease, backdrop-filter 0.3s ease, border-bottom 0.3s ease',
          background: scrolled ? 'rgba(11,15,26,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <Image
            src="/logo.png"
            alt="Aurentis Studio"
            width={180} height={54}
            priority
            style={{ objectFit: 'contain', height: 54, width: 'auto' }}
          />
        </Link>

        {/* Desktop links */}
        <ul className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>

          {/* Servicios dropdown trigger */}
          <li style={{ position: 'relative' }}
            onMouseEnter={openDropdown}
            onMouseLeave={scheduleClose}
          >
            <button
              style={{
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                color: dropdownOpen || linkHovered === 'Servicios' ? '#F1F5F9' : '#94A3B8',
                fontFamily: 'var(--font-body)',
                fontSize: 14, fontWeight: 400,
                transition: 'color 0.2s ease',
                letterSpacing: '0.01em',
                display: 'flex', alignItems: 'center', gap: 5,
              }}
              onMouseEnter={() => setLinkHovered('Servicios')}
              onMouseLeave={() => setLinkHovered(null)}
            >
              Servicios
              <svg
                width="10" height="10" viewBox="0 0 10 10" fill="none"
                style={{ transition: 'transform 0.2s ease', transform: dropdownOpen ? 'rotate(180deg)' : 'none', marginTop: 1 }}
              >
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Dropdown panel */}
            <div
              onMouseEnter={openDropdown}
              onMouseLeave={scheduleClose}
              style={{
                position: 'absolute',
                top: 'calc(100% + 18px)',
                left: '50%',
                width: 520,
                background: 'rgba(11,15,26,0.97)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 14,
                padding: '20px 20px 14px',
                boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
                opacity: dropdownOpen ? 1 : 0,
                transform: dropdownOpen
                  ? 'translateX(-50%) translateY(0)'
                  : 'translateX(-50%) translateY(-8px)',
                transition: 'opacity 0.2s ease, transform 0.2s ease',
                pointerEvents: dropdownOpen ? 'all' : 'none',
                zIndex: 200,
              }}
            >
              {/* Arrow */}
              <div style={{
                position: 'absolute', top: -6, left: '50%', transform: 'translateX(-50%)',
                width: 12, height: 12,
                background: 'rgba(11,15,26,0.97)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRight: 'none', borderBottom: 'none',
                rotate: '45deg',
              }} />

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {DROPDOWN_GROUPS.map(group => (
                  <div key={group.label}>
                    <div style={{
                      fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: '#475569', fontFamily: 'var(--font-display)',
                      marginBottom: 8, paddingLeft: 4,
                    }}>
                      {group.label}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {group.items.map(item => (
                        <DropdownItem key={item.href} item={item} onClose={() => setDropdownOpen(false)} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                <Link
                  href="/servicios"
                  onClick={() => setDropdownOpen(false)}
                  style={{
                    fontSize: 12, color: '#64748B',
                    fontFamily: 'var(--font-body)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#94A3B8')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#64748B')}
                >
                  Ver todos los servicios →
                </Link>
              </div>
            </div>
          </li>

          {/* Other nav links */}
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                onMouseEnter={() => setLinkHovered(label)}
                onMouseLeave={() => setLinkHovered(null)}
                style={{
                  color: linkHovered === label ? '#F1F5F9' : '#94A3B8',
                  fontFamily: 'var(--font-body)',
                  fontSize: 14, fontWeight: 400,
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  letterSpacing: '0.01em',
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link
            href="/contacto"
            className="nav-cta"
            style={{
              background: '#2563FF', color: '#fff',
              fontFamily: 'var(--font-display)',
              fontSize: 13.5, fontWeight: 600,
              padding: '9px 20px', borderRadius: 7,
              textDecoration: 'none', whiteSpace: 'nowrap',
              transition: 'background 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = '#1d4fd8'
              el.style.boxShadow  = '0 0 22px rgba(37,99,255,0.4)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = '#2563FF'
              el.style.boxShadow  = 'none'
            }}
          >
            Solicitar propuesta
          </Link>

          <button
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen(v => !v)}
            className="nav-hamburger"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: 6, display: 'flex', flexDirection: 'column',
              gap: 5, alignItems: 'center',
            }}
          >
            <span style={{ ...bar, transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
            <span style={{ ...bar, opacity: menuOpen ? 0 : 1, transform: menuOpen ? 'scaleX(0)' : 'none' }} />
            <span style={{ ...bar, transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className="nav-mobile-menu"
        style={{
          position: 'fixed', inset: 0, zIndex: 99,
          background: 'rgba(11,15,26,0.97)',
          backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: '1.8rem',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
          pointerEvents: menuOpen ? 'all' : 'none',
          overflowY: 'auto', padding: '80px 24px 40px',
        }}
      >
        {/* Servicios accordion */}
        <div style={{ width: '100%', maxWidth: 320, textAlign: 'center' }}>
          <button
            onClick={() => setMobileServices(v => !v)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#F1F5F9', fontFamily: 'var(--font-display)',
              fontSize: 26, fontWeight: 700, letterSpacing: '-0.02em',
              display: 'flex', alignItems: 'center', gap: 10, margin: '0 auto',
            }}
          >
            Servicios
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
              style={{ transition: 'transform 0.25s ease', transform: mobileServices ? 'rotate(180deg)' : 'none', marginTop: 2 }}
            >
              <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Sub-items */}
          <div style={{
            overflow: 'hidden',
            maxHeight: mobileServices ? 600 : 0,
            transition: 'max-height 0.35s ease',
            marginTop: mobileServices ? 16 : 0,
          }}>
            {DROPDOWN_GROUPS.map(group => (
              <div key={group.label} style={{ marginBottom: 16 }}>
                <div style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: '#475569',
                  fontFamily: 'var(--font-display)', marginBottom: 8,
                }}>
                  {group.label}
                </div>
                {group.items.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => { setMenuOpen(false); setMobileServices(false) }}
                    style={{
                      display: 'block', color: '#94A3B8',
                      fontFamily: 'var(--font-body)', fontSize: 15,
                      textDecoration: 'none', padding: '6px 0',
                      borderLeft: `2px solid ${item.color}`,
                      paddingLeft: 12, marginBottom: 4,
                      transition: 'color 0.2s',
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              href="/servicios"
              onClick={() => { setMenuOpen(false); setMobileServices(false) }}
              style={{
                display: 'inline-block', color: '#64748B',
                fontFamily: 'var(--font-body)', fontSize: 12,
                textDecoration: 'none', marginTop: 4,
              }}
            >
              Ver todos los servicios →
            </Link>
          </div>
        </div>

        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            onClick={() => setMenuOpen(false)}
            style={{
              color: '#F1F5F9', fontFamily: 'var(--font-display)',
              fontSize: 26, fontWeight: 700,
              textDecoration: 'none', letterSpacing: '-0.02em',
            }}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/contacto"
          onClick={() => setMenuOpen(false)}
          style={{
            marginTop: '0.5rem',
            background: '#2563FF', color: '#fff',
            fontFamily: 'var(--font-display)',
            fontSize: 15, fontWeight: 600,
            padding: '13px 32px', borderRadius: 8,
            textDecoration: 'none',
          }}
        >
          Solicitar propuesta
        </Link>
      </div>

      <style>{`
        .nav-desktop   { display: flex !important; }
        .nav-cta       { display: inline-block !important; }
        .nav-hamburger { display: none !important; }

        @media (max-width: 768px) {
          .nav-desktop   { display: none !important; }
          .nav-cta       { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}

/* ---- Sub-component for dropdown items ---- */
function DropdownItem({ item, onClose }: { item: { label: string; desc: string; href: string; color: string }; onClose: () => void }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      href={item.href}
      onClick={onClose}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'flex-start', gap: 10,
        padding: '9px 10px', borderRadius: 8,
        background: hovered ? 'rgba(255,255,255,0.04)' : 'transparent',
        textDecoration: 'none',
        transition: 'background 0.15s ease',
      }}
    >
      <span style={{
        width: 8, height: 8, borderRadius: '50%',
        background: item.color, flexShrink: 0, marginTop: 5,
        boxShadow: `0 0 6px ${item.color}88`,
      }} />
      <div>
        <div style={{
          fontSize: 13, fontWeight: 600, color: hovered ? '#F1F5F9' : '#CBD5E1',
          fontFamily: 'var(--font-display)', marginBottom: 2,
          transition: 'color 0.15s',
        }}>
          {item.label}
        </div>
        <div style={{
          fontSize: 11, color: '#475569',
          fontFamily: 'var(--font-body)', lineHeight: 1.4,
        }}>
          {item.desc}
        </div>
      </div>
    </Link>
  )
}
