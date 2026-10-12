'use client'

import React from 'react'
import ConceptoLayout from '@/app/components/ConceptoLayout'

const mockup = (
  <div style={{ background: '#0D0508', fontFamily: 'var(--font-body)' }}>

    {/* Brand header */}
    <div style={{
      background: 'linear-gradient(135deg, #1C0A0A 0%, #0D0508 70%)',
      padding: '20px 20px 14px',
      borderBottom: '1px solid rgba(185,28,28,0.2)',
      textAlign: 'center',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 6 }}>
        <div style={{ width: 28, height: 1, background: 'rgba(201,169,110,0.45)' }} />
        <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#B91C1C' }} />
        <div style={{ width: 28, height: 1, background: 'rgba(201,169,110,0.45)' }} />
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 800, color: '#fff', letterSpacing: '0.16em', marginBottom: 3 }}>
        GLOW UP STUDIO
      </div>
      <div style={{ fontSize: 8, color: '#C9A96E', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 6 }}>
        LASHES by Loraine Bonilla
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
        <div style={{ width: 28, height: 1, background: 'rgba(201,169,110,0.45)' }} />
        <div style={{ width: 4, height: 4, background: '#C9A96E', transform: 'rotate(45deg)' }} />
        <div style={{ width: 28, height: 1, background: 'rgba(201,169,110,0.45)' }} />
      </div>
      <div style={{ fontSize: 7, color: '#4B5A72', marginTop: 8, letterSpacing: '0.06em' }}>
        Granada · Extensiones de Pestañas
      </div>
    </div>

    {/* Services grid */}
    <div style={{ padding: '14px 16px' }}>
      <div style={{ fontSize: 7, color: '#C9A96E', letterSpacing: '0.18em', textTransform: 'uppercase', textAlign: 'center', marginBottom: 10 }}>
        Servicios
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
        {[
          { name: 'Classic', technique: 'Pelo a pelo', price: 'Desde 35€' },
          { name: 'Volume', technique: 'Efecto volumen', price: 'Desde 45€' },
          { name: 'Mega Volume', technique: 'Máximo impacto', price: 'Desde 55€' },
          { name: 'Relleno', technique: 'Mantenimiento', price: 'Desde 25€' },
        ].map(s => (
          <div key={s.name} style={{
            background: 'rgba(185,28,28,0.06)',
            border: '1px solid rgba(185,28,28,0.18)',
            borderRadius: 6,
            padding: '8px 10px',
          }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#fff', marginBottom: 2 }}>{s.name}</div>
            <div style={{ fontSize: 7, color: '#4B5A72', marginBottom: 5 }}>{s.technique}</div>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#C9A96E' }}>{s.price}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Color palette strip */}
    <div style={{
      padding: '8px 16px',
      borderTop: '1px solid rgba(185,28,28,0.1)',
      borderBottom: '1px solid rgba(185,28,28,0.1)',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'rgba(185,28,28,0.04)',
    }}>
      <div style={{ fontSize: 7, color: '#4B5A72', flexShrink: 0 }}>Paleta de marca</div>
      <div style={{ display: 'flex', gap: 4, flex: 1, justifyContent: 'flex-end' }}>
        {['#B91C1C', '#C9A96E', '#1A0508', '#F1F5F9'].map(c => (
          <div key={c} style={{ width: 14, height: 14, borderRadius: '50%', background: c, border: '1px solid rgba(255,255,255,0.12)' }} />
        ))}
      </div>
    </div>

    {/* CTA */}
    <div style={{ padding: '14px 16px', textAlign: 'center' }}>
      <a
        href="https://lorebonillassanchz-svg.github.io/glow-up-lorainebonilla/glow_up_catalog.html"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          background: '#B91C1C',
          color: '#fff',
          fontSize: 9,
          fontWeight: 700,
          padding: '7px 18px',
          borderRadius: 4,
          textDecoration: 'none',
          letterSpacing: '0.05em',
        }}
      >
        Ver catálogo completo →
      </a>
      <div style={{ fontSize: 7, color: '#4B5A72', marginTop: 7 }}>
        Reserva directa desde Instagram · @glowupstudio.granada
      </div>
    </div>

  </div>
)

export default function GlowUpStudioPage() {
  return (
    <ConceptoLayout
      accentColor="#B91C1C"
      accentRgb="185,28,28"
      heroImage="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&q=80&fit=crop"
      tags={['Proyecto real', 'Identidad de marca', 'Belleza & Estética']}
      projectName="Glow Up Studio"
      projectTagline="Identidad de marca y catálogo digital"
      projectBrief="Loraine Bonilla llevaba tiempo trabajando como especialista en extensiones de pestañas en Granada sin una identidad visual clara. Su presencia en Instagram era su propia foto de perfil, sin logo, sin coherencia de marca, sin nada que transmitiera profesionalidad. El encargo fue construir esa identidad desde cero."
      mockupUrl="lorebonillassanchz-svg.github.io/glow-up-lorainebonilla"
      mockupBgColor="#0D0508"
      mockupContent={mockup}
      stats={[
        { value: '2.4K', label: 'visualizaciones mensuales en Instagram' },
        { value: '100%', label: 'identidad construida desde cero' },
        { value: '4',    label: 'categorías de servicios en catálogo' },
      ]}
      insights={[
        {
          title: 'Logo tipográfico',
          text: "Diseño de logotipo con el nombre 'LASHES by Loraine Bonilla – Glow Up Studio', combinando tipografía serif blackletter con script, en paleta vino/dorado que transmite exclusividad y calidez.",
        },
        {
          title: 'Imagen de perfil con identidad',
          text: 'Fotografía de perfil con halo de luz que integra el logo, dando coherencia visual al feed de Instagram y convirtiendo la cuenta en un perfil de estudio profesional.',
        },
      ]}
      strategy={[
        {
          num: '01',
          title: 'Diagnóstico de marca',
          text: 'Loraine trabajaba sin identidad visual. Su Instagram era su propia foto, sin logo, sin coherencia. El primer paso fue definir el posicionamiento y el cliente objetivo del estudio.',
        },
        {
          num: '02',
          title: 'Catálogo digital interactivo',
          text: 'Desarrollo de catálogo web con menú de servicios, precios desde 35€, técnicas disponibles y botón de reserva directo a Instagram. Accesible desde el perfil.',
        },
        {
          num: '03',
          title: 'Identidad aplicada a redes',
          text: 'Publicaciones con plantillas coherentes en la paleta de marca, transformando un perfil amateur en un perfil de estudio profesional con presencia consistente.',
        },
      ]}
      services={['Branding', 'Diseño gráfico', 'Catálogo digital', 'Redes sociales']}
      isReal
      realNote="identidad en uso activo desde 2026"
    />
  )
}
