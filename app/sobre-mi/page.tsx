import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre mí — Aurentis Studio',
  description: 'Diseño presencias digitales que ayudan a negocios reales a comunicar mejor, captar más y crecer con estructura.',
}

const gradText: React.CSSProperties = {
  background: 'linear-gradient(100deg, #3B82F6, #818CF8)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

function iconBox(): React.CSSProperties {
  return {
    width: 44, height: 44, borderRadius: 11,
    background: 'rgba(37,99,255,0.08)',
    border: '1px solid rgba(37,99,255,0.22)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  }
}

function TargetIcon() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#60A5FA" strokeWidth="1.3"/><circle cx="10" cy="10" r="4.5" stroke="#60A5FA" strokeWidth="1.2"/><circle cx="10" cy="10" r="1.5" fill="#60A5FA"/></svg>
}
function UserIcon() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="7" r="3.5" stroke="#60A5FA" strokeWidth="1.3"/><path d="M3 17c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#60A5FA" strokeWidth="1.3" strokeLinecap="round"/></svg>
}
function CheckIcon() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#60A5FA" strokeWidth="1.3"/><path d="M6.5 10l2.5 2.5 5-5" stroke="#60A5FA" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
}

export default function SobreMiPage() {
  return (
    <>
      <style>{`
        .sm-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
        }
        .sm-why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1100px;
          margin: 48px auto 0;
        }
        .sm-why-card {
          background: #0B0F1A;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 18px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: border-color 0.3s, transform 0.3s;
        }
        .sm-why-card:hover { border-color: rgba(37,99,255,0.2); transform: translateY(-3px); }
        .sm-split {
          display: flex;
          gap: 4rem;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .sm-hero    { grid-template-columns: 1fr; }
          .sm-why-grid { grid-template-columns: 1fr; }
          .sm-split   { flex-direction: column-reverse; gap: 2rem; }
        }
      `}</style>

      {/* Hero */}
      <section style={{ background: '#0B0F1A', padding: '140px 5% 80px' }}>
        <div className="sm-hero">
          {/* Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3B82F6' }}>
              Sobre mí
            </span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 800, color: '#F1F5F9', margin: 0, lineHeight: 1.15 }}>
              Soy Lorena, diseño presencias digitales que ayudan a negocios reales a{' '}
              <span style={gradText}>comunicar mejor.</span>
            </h1>
            <p style={{ color: '#94A3B8', fontSize: 16, lineHeight: 1.75, fontFamily: 'var(--font-body)', fontWeight: 300, margin: 0 }}>
              Aurentis Studio nació de una convicción simple: la mayoría de negocios pequeños merece una presencia digital mejor de la que tiene. No por estética, sino porque una web bien pensada puede cambiar cómo te perciben, cómo te encuentran y cuántos contactos recibes.
            </p>
          </div>

          {/* Photo */}
          <div style={{ position: 'relative', width: '100%', height: 480, borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(37,99,255,0.15)' }}>
            <Image
              src="/lorena.png"
              alt="Lorena — Aurentis Studio"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Por qué Aurentis */}
      <section style={{ background: '#0F172A', padding: '100px 5%', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3B82F6', display: 'block', marginBottom: 14 }}>
            Mi enfoque
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 2.8vw, 38px)', fontWeight: 800, color: '#F1F5F9', margin: 0, lineHeight: 1.2 }}>
            Por qué trabajo así
          </h2>
        </div>
        <div className="sm-why-grid">
          {[
            { icon: <TargetIcon />, title: 'Estrategia antes que diseño', desc: 'No empiezo a diseñar hasta entender qué necesita comunicar tu negocio y qué quieres que haga el visitante.' },
            { icon: <UserIcon />, title: 'Trato directo, sin intermediarios', desc: 'Trabajas conmigo directamente. Sin cuentas gestionadas por becarios ni proyectos delegados.' },
            { icon: <CheckIcon />, title: 'Realismo y honestidad', desc: 'Si algo no encaja con tu momento o presupuesto, te lo digo. No vendo lo que no necesitas.' },
          ].map((c, i) => (
            <div key={i} className="sm-why-card">
              <div style={iconBox()}>{c.icon}</div>
              <div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: '#F1F5F9', margin: '0 0 8px' }}>{c.title}</p>
                <p style={{ fontSize: 13.5, color: '#94A3B8', lineHeight: 1.65, fontFamily: 'var(--font-body)', fontWeight: 300, margin: 0 }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enfoque de trabajo */}
      <section style={{ background: '#0B0F1A', padding: '100px 5%', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="sm-split">
          {/* Text */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3B82F6' }}>
              Cómo entiendo este trabajo
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 800, color: '#F1F5F9', margin: 0, lineHeight: 1.2 }}>
              El diseño tiene sentido{' '}
              <span style={gradText}>cuando hay estrategia detrás.</span>
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15.5, lineHeight: 1.75, fontFamily: 'var(--font-body)', fontWeight: 300, margin: 0 }}>
              Cada proyecto es diferente, pero mi punto de partida siempre es el mismo: entender el negocio antes de tocar el diseño. Qué vende, a quién, cómo lo comunica ahora y qué está fallando. Con eso claro, el diseño tiene sentido. Sin eso, es solo decoración.
            </p>
            <p style={{ color: '#94A3B8', fontSize: 15.5, lineHeight: 1.75, fontFamily: 'var(--font-body)', fontWeight: 300, margin: 0 }}>
              Trabajo con negocios pequeños, autónomos y emprendedores que necesitan una presencia digital que funcione de verdad, no solo que se vea bien.
            </p>
          </div>

          {/* Image */}
          <div style={{ flex: 1, height: 380, borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', position: 'relative', flexShrink: 0 }}>
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80&fit=crop"
              alt="Trabajo en Aurentis Studio"
              fill
              style={{ objectFit: 'cover', opacity: 0.5, mixBlendMode: 'luminosity' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(11,15,26,0.55), rgba(37,99,255,0.12))', zIndex: 1 }} />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section style={{ background: '#0F172A', padding: '100px 5%', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.6vw, 36px)', fontWeight: 800, color: '#F1F5F9', margin: '0 auto 36px', maxWidth: 520, lineHeight: 1.2 }}>
          Si crees que podemos trabajar bien juntos
        </h2>
        <Link
          href="/#auditoria"
          style={{ display: 'inline-block', background: '#2563FF', color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, padding: '14px 32px', borderRadius: 9, textDecoration: 'none', boxShadow: '0 0 28px rgba(37,99,255,0.3)' }}
        >
          Solicitar auditoría gratuita →
        </Link>
      </section>
    </>
  )
}
