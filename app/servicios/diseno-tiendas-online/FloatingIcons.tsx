'use client'

import React from 'react'

/* ── SVG icon paths ──────────────────────────────────────── */
const ICON_PATHS: Record<string, React.ReactNode> = {
  cart: (
    <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
      <path d="M2 3H4.5L6.5 14H17.5L19.5 7H6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="9" cy="18" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="16" cy="18" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  ),
  box: (
    <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
      <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22V12M2 7L12 12M22 7L12 12M7 4.5L17 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  tag: (
    <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
      <path d="M3 3H10L21 14L14 21L3 10V3Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor"/>
    </svg>
  ),
  card: (
    <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
      <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M2 10H22" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M6 15H9M12 15H15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  bag: (
    <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
      <path d="M6 2L3 8H21L18 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 8V20H21V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M9 4C9 3 10.3 2 12 2C13.7 2 15 3 15 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
}

const HERO_PARTICLES = [
  { icon: 'cart', size: 28, left: '7%',  bottom: '8%',  duration: '12s', delay: '0s',   color: 'rgba(99,102,241,0.55)' },
  { icon: 'box',  size: 22, left: '16%', bottom: '28%', duration: '9s',  delay: '2s',   color: 'rgba(37,99,255,0.45)'  },
  { icon: 'tag',  size: 34, left: '24%', bottom: '5%',  duration: '14s', delay: '4s',   color: 'rgba(99,102,241,0.50)' },
  { icon: 'card', size: 24, left: '38%', bottom: '18%', duration: '11s', delay: '1s',   color: 'rgba(37,99,255,0.45)'  },
  { icon: 'bag',  size: 30, left: '52%', bottom: '12%', duration: '13s', delay: '3s',   color: 'rgba(99,102,241,0.55)' },
  { icon: 'cart', size: 20, left: '63%', bottom: '32%', duration: '10s', delay: '5s',   color: 'rgba(37,99,255,0.45)'  },
  { icon: 'box',  size: 32, left: '74%', bottom: '6%',  duration: '15s', delay: '0.5s', color: 'rgba(99,102,241,0.50)' },
  { icon: 'tag',  size: 24, left: '83%', bottom: '22%', duration: '8s',  delay: '2.5s', color: 'rgba(37,99,255,0.45)'  },
  { icon: 'bag',  size: 26, left: '91%', bottom: '10%', duration: '11s', delay: '4.5s', color: 'rgba(99,102,241,0.52)' },
]

const CTA_PARTICLES = [
  { icon: 'cart', size: 48, left: '6%',  bottom: '10%', duration: '14s', delay: '1s', color: 'rgba(99,102,241,0.35)' },
  { icon: 'bag',  size: 40, left: '80%', bottom: '20%', duration: '12s', delay: '0s', color: 'rgba(37,99,255,0.30)'  },
  { icon: 'box',  size: 44, left: '50%', bottom: '5%',  duration: '16s', delay: '3s', color: 'rgba(99,102,241,0.32)' },
  { icon: 'card', size: 36, left: '90%', bottom: '45%', duration: '10s', delay: '2s', color: 'rgba(37,99,255,0.28)'  },
]

const particleStyle: React.CSSProperties = {
  position: 'absolute',
  pointerEvents: 'none',
  zIndex: 0,
  animationName: 'floatUp',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
}

export function HeroParticles() {
  return (
    <>
      {HERO_PARTICLES.map((p, i) => (
        <div
          key={i}
          style={{
            ...particleStyle,
            left: p.left,
            bottom: p.bottom,
            width: p.size,
            height: p.size,
            color: p.color,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        >
          {ICON_PATHS[p.icon]}
        </div>
      ))}
    </>
  )
}

export function CTAParticles() {
  return (
    <>
      {CTA_PARTICLES.map((p, i) => (
        <div
          key={i}
          style={{
            ...particleStyle,
            left: p.left,
            bottom: p.bottom,
            width: p.size,
            height: p.size,
            color: p.color,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        >
          {ICON_PATHS[p.icon]}
        </div>
      ))}
    </>
  )
}
