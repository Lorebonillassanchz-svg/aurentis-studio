import Image from 'next/image'
import React from 'react'

interface VisualBandProps {
  imageSrc: string
  title: React.ReactNode
  subtitle?: string
  height?: number
  eager?: boolean
}

export default function VisualBand({ imageSrc, title, subtitle, height = 320, eager = false }: VisualBandProps) {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        height,
        borderTop: '1px solid rgba(255,255,255,0.07)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background image */}
      <Image
        src={imageSrc}
        alt=""
        fill
        priority={eager}
        style={{ objectFit: 'cover', opacity: 0.3, mixBlendMode: 'luminosity' }}
      />

      {/* Lateral gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(11,15,26,0.95) 0%, rgba(11,15,26,0.5) 50%, rgba(11,15,26,0.95) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '0 5%',
          maxWidth: 860,
        }}
      >
        <h2
          className="reveal from-bottom"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(26px, 3vw, 44px)',
            fontWeight: 800,
            color: '#fff',
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            style={{
              color: '#94A3B8',
              fontSize: 16,
              marginTop: 14,
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              lineHeight: 1.65,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
