'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const links = [
  { label: 'Servicios',  href: '/servicios' },
  { label: 'Proceso',    href: '/proceso' },
  { label: 'Portafolio', href: '/portafolio' },
  { label: 'Sobre mí',   href: '/sobre-mi' },
  { label: 'Contacto',   href: '/contacto' },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const [linkHovered, setLinkHovered] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

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
          top: 0,
          left: 0,
          right: 0,
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
          borderBottom: scrolled
            ? '1px solid rgba(255,255,255,0.07)'
            : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <Image
            src="/logo.png"
            alt="Aurentis Studio"
            width={180}
            height={54}
            priority
            style={{ objectFit: 'contain', height: 54, width: 'auto' }}
          />
        </Link>

        {/* Desktop links */}
        <ul
          className="nav-desktop"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                onMouseEnter={() => setLinkHovered(label)}
                onMouseLeave={() => setLinkHovered(null)}
                style={{
                  color: linkHovered === label ? '#F1F5F9' : '#94A3B8',
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  fontWeight: 400,
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
              background: '#2563FF',
              color: '#fff',
              fontFamily: 'var(--font-display)',
              fontSize: 13.5,
              fontWeight: 600,
              padding: '9px 20px',
              borderRadius: 7,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'background 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background  = '#1d4fd8'
              el.style.boxShadow   = '0 0 22px rgba(37,99,255,0.4)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background  = '#2563FF'
              el.style.boxShadow   = 'none'
            }}
          >
            Solicitar propuesta
          </Link>

          {/* Hamburger — only visible on mobile */}
          <button
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen(v => !v)}
            className="nav-hamburger"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 6,
              display: 'flex',
              flexDirection: 'column',
              gap: 5,
              alignItems: 'center',
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
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          background: 'rgba(11,15,26,0.97)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2.2rem',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
          pointerEvents: menuOpen ? 'all' : 'none',
        }}
      >
        {links.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            onClick={() => setMenuOpen(false)}
            style={{
              color: '#F1F5F9',
              fontFamily: 'var(--font-display)',
              fontSize: 26,
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '-0.02em',
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
            background: '#2563FF',
            color: '#fff',
            fontFamily: 'var(--font-display)',
            fontSize: 15,
            fontWeight: 600,
            padding: '13px 32px',
            borderRadius: 8,
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
