'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface ConceptoLayoutProps {
  accentColor: string
  accentRgb: string
  heroImage: string
  tags: string[]
  projectName: string
  projectTagline: string
  projectBrief: string
  mockupUrl: string
  mockupBgColor: string
  mockupContent: React.ReactNode
  stats: { value: string; label: string }[]
  insights: { title: string; text: string }[]
  strategy: { num: string; title: string; text: string }[]
  services: string[]
}

export default function ConceptoLayout({
  accentColor, accentRgb, heroImage, projectName, projectTagline,
  projectBrief, mockupUrl, mockupBgColor, mockupContent, stats, insights,
  strategy, services,
}: ConceptoLayoutProps) {
  const [hoveredStrategy, setHoveredStrategy] = useState<number | null>(null)

  return (
    <>
      <style>{`
        @keyframes cl-fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cl-hero-content { animation: cl-fadeUp 0.6s ease forwards; }
        .cl-strategy-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .cl-strategy-grid  { grid-template-columns: 1fr !important; }
          .cl-stats-below    { grid-template-columns: 1fr 1fr !important; }
          .cl-insights-below { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{ position: 'relative', height: 480, overflow: 'hidden' }}>
        <Image
          src={heroImage}
          alt={projectName}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(7,9,15,0.95) 0%, rgba(7,9,15,0.7) 50%, rgba(7,9,15,0.4) 100%)' }} />

        <div
          className="cl-hero-content"
          style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '48px 5%', zIndex: 1 }}
        >
          <Link
            href="/portafolio"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#94A3B8', fontSize: 12, padding: '7px 14px',
              borderRadius: 999, marginBottom: 20,
              textDecoration: 'none', fontFamily: 'var(--font-body)',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.color = '#fff'
              ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.25)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.color = '#94A3B8'
              ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.1)'
            }}
          >
            ← Volver al portafolio
          </Link>

          <p style={{
            fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700,
            color: accentColor, letterSpacing: '0.1em', textTransform: 'uppercase',
            margin: '0 0 10px',
          }}>
            {projectName}
          </p>

          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,3.5vw,48px)',
            fontWeight: 800, color: '#F1F5F9', margin: '0 0 14px',
            lineHeight: 1.15, maxWidth: 700,
          }}>
            {projectTagline}
          </h1>

          <p style={{
            color: '#94A3B8', fontSize: 15.5, lineHeight: 1.7,
            fontFamily: 'var(--font-body)', fontWeight: 300, maxWidth: 560, margin: 0,
          }}>
            {projectBrief}
          </p>
        </div>
      </section>

      {/* ── MOCKUP + STATS + INSIGHTS ────────────────────────── */}
      <section style={{ background: '#0B0F1A', padding: '64px 5%' }}>

        {/* Browser mockup — ancho completo */}
        <div style={{
          maxWidth: 900, margin: '0 auto',
          borderRadius: 14, overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
        }}>
          <div style={{ background: '#111827', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'flex', gap: 6 }}>
              {(['#EF4444', '#F59E0B', '#22C55E'] as const).map(c => (
                <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />
              ))}
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.07)', borderRadius: 6,
              padding: '3px 12px', color: '#64748B', fontSize: 11,
              fontFamily: 'var(--font-body)',
            }}>
              {mockupUrl}
            </div>
          </div>
          <div style={{ background: mockupBgColor, minHeight: 520, overflow: 'hidden' }}>
            {mockupContent}
          </div>
        </div>

        {/* Stats — 3 columnas debajo del browser */}
        <div
          className="cl-stats-below"
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16, maxWidth: 900, margin: '24px auto 0',
          }}
        >
          {stats.map(s => (
            <div key={s.label} style={{
              background: '#0F172A', border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 12, padding: '20px 24px',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 800,
                color: accentColor, marginBottom: 4,
              }}>
                {s.value}
              </div>
              <div style={{ fontSize: 12, color: '#4B5A72', fontFamily: 'var(--font-body)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Insights — 2 columnas debajo de stats */}
        <div
          className="cl-insights-below"
          style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: 16, maxWidth: 900, margin: '16px auto 0',
          }}
        >
          {insights.map(ins => (
            <div key={ins.title} style={{
              background: '#0F172A', borderLeft: `3px solid ${accentColor}`,
              borderRadius: '0 10px 10px 0', padding: '18px 20px',
            }}>
              <div style={{
                fontSize: 13, fontWeight: 700, color: '#F1F5F9',
                marginBottom: 6, fontFamily: 'var(--font-display)',
              }}>
                {ins.title}
              </div>
              <div style={{ fontSize: 12, color: '#64748B', lineHeight: 1.65, fontFamily: 'var(--font-body)' }}>
                {ins.text}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STRATEGY ─────────────────────────────────────────── */}
      <section style={{ background: '#0F172A', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '64px 5%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 40 }}>
            <span style={{
              fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: accentColor, display: 'block', marginBottom: 10,
            }}>
              Proceso y enfoque
            </span>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,32px)',
              fontWeight: 800, color: '#F1F5F9', margin: 0,
            }}>
              Decisiones estratégicas
            </h2>
          </div>

          <div className="cl-strategy-grid">
            {strategy.map((s, i) => (
              <div
                key={s.num}
                onMouseEnter={() => setHoveredStrategy(i)}
                onMouseLeave={() => setHoveredStrategy(null)}
                style={{
                  background: '#111827',
                  border: `1px solid ${hoveredStrategy === i ? `rgba(${accentRgb},0.3)` : 'rgba(255,255,255,0.07)'}`,
                  borderRadius: 14, padding: 28,
                  transition: 'border-color 0.3s, transform 0.3s',
                  transform: hoveredStrategy === i ? 'translateY(-3px)' : 'translateY(0)',
                }}
              >
                <div style={{
                  fontSize: 48, fontFamily: 'var(--font-display)', fontWeight: 800,
                  color: `rgba(${accentRgb},0.15)`, lineHeight: 1, marginBottom: 14,
                }}>
                  {s.num}
                </div>
                <div style={{
                  fontSize: 14, fontWeight: 700, color: '#F1F5F9',
                  marginBottom: 10, fontFamily: 'var(--font-display)',
                }}>
                  {s.title}
                </div>
                <div style={{ fontSize: 13, color: '#64748B', lineHeight: 1.65, fontFamily: 'var(--font-body)' }}>
                  {s.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM BAR ───────────────────────────────────────── */}
      <section style={{
        padding: '24px 5%', borderTop: '1px solid rgba(255,255,255,0.05)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 12, background: '#0F172A',
      }}>
        <span style={{ fontSize: 12, color: '#4B5A72', fontStyle: 'italic', fontFamily: 'var(--font-body)' }}>
          Proyecto conceptual — marca ficticia creada con fines ilustrativos
        </span>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {services.map(s => (
            <span key={s} style={{
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
              color: '#64748B', fontSize: 11, padding: '3px 9px', borderRadius: 999,
              fontFamily: 'var(--font-body)',
            }}>
              {s}
            </span>
          ))}
        </div>
      </section>
    </>
  )
}
