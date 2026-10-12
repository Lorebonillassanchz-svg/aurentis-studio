'use client'

import React from 'react'
import ConceptoLayout from '@/app/components/ConceptoLayout'

const mockup = (
  <div style={{ display: 'flex', fontFamily: 'var(--font-body)', background: '#020B14', minHeight: 520 }}>

    {/* Sidebar */}
    <div style={{ width: 140, background: '#0A1628', borderRight: '1px solid rgba(255,255,255,0.06)', flexShrink: 0 }}>
      {/* Logo */}
      <div style={{ padding: '12px 12px 10px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 28, height: 28, borderRadius: 6, background: '#0EA5E9', flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>HoroFincas</div>
            <div style={{ fontSize: 7, color: '#4B5A72', lineHeight: 1.3 }}>Administración de Fincas</div>
          </div>
        </div>
      </div>
      {/* Nav links */}
      <div style={{ paddingTop: 6 }}>
        {[
          { label: 'Inicio', active: true },
          { label: 'Comunidades', active: false },
          { label: 'Siniestros', active: false },
          { label: 'Trabajos', active: false },
          { label: 'Tareas', active: false },
          { label: 'Calendario', active: false },
          { label: 'Compañías', active: false },
        ].map(link => (
          <div
            key={link.label}
            style={{
              padding: '6px 12px',
              fontSize: 9,
              color: link.active ? '#38BDF8' : '#4B5A72',
              background: link.active ? 'rgba(14,165,233,0.15)' : 'transparent',
            }}
          >
            {link.label}
          </div>
        ))}
      </div>
    </div>

    {/* Main area */}
    <div style={{ flex: 1, padding: 14, overflow: 'hidden' }}>

      {/* Header */}
      <div style={{ marginBottom: 12 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, color: '#fff' }}>Panel de gestión</div>
        <div style={{ fontSize: 8, color: '#4B5A72' }}>Resumen de siniestros activos</div>
      </div>

      {/* 4 metric cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
        {/* Avisos activos */}
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 6, padding: 8 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 4, display: 'block' }}>
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#FB923C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#FB923C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div style={{ fontSize: 16, fontWeight: 800, color: '#FB923C', lineHeight: 1 }}>5</div>
          <div style={{ fontSize: 7, color: '#4B5A72', marginTop: 2 }}>Avisos activos</div>
        </div>
        {/* Tareas vencidas */}
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 6, padding: 8 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 4, display: 'block' }}>
            <circle cx="12" cy="12" r="10" stroke="#F87171" strokeWidth="1.5"/>
            <path d="M12 6v6l4 2" stroke="#F87171" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div style={{ fontSize: 16, fontWeight: 800, color: '#F87171', lineHeight: 1 }}>3</div>
          <div style={{ fontSize: 7, color: '#4B5A72', marginTop: 2 }}>Tareas vencidas</div>
        </div>
        {/* Pend. documentación */}
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 6, padding: 8 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 4, display: 'block' }}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div style={{ fontSize: 16, fontWeight: 800, color: '#FBBF24', lineHeight: 1 }}>18</div>
          <div style={{ fontSize: 7, color: '#4B5A72', marginTop: 2 }}>Pend. documentación</div>
        </div>
        {/* Cerrados mes */}
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 6, padding: 8 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 4, display: 'block' }}>
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 4L12 14.01l-3-3" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div style={{ fontSize: 16, fontWeight: 800, color: '#4ADE80', lineHeight: 1 }}>4</div>
          <div style={{ fontSize: 7, color: '#4B5A72', marginTop: 2 }}>Cerrados mes</div>
        </div>
      </div>

      {/* Siniestros recientes */}
      <div style={{ marginTop: 10 }}>
        <div style={{ fontSize: 8, color: '#4B5A72', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>
          Siniestros recientes
        </div>
        {[
          { estado: 'Abierto',    estadoBg: 'rgba(251,146,60,0.15)',  estadoColor: '#FB923C', texto: 'Comunidad A · Filtración en local' },
          { estado: 'En proceso', estadoBg: 'rgba(14,165,233,0.15)',   estadoColor: '#38BDF8', texto: 'Comunidad B · Fuga de agua' },
          { estado: 'Abierto',    estadoBg: 'rgba(251,146,60,0.15)',  estadoColor: '#FB923C', texto: 'Comunidad C · Humedad en fachada' },
        ].map((row, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
            <span style={{ background: row.estadoBg, color: row.estadoColor, fontSize: 6, padding: '2px 6px', borderRadius: 999, flexShrink: 0 }}>
              {row.estado}
            </span>
            <span style={{ fontSize: 8, color: '#94A3B8' }}>{row.texto}</span>
          </div>
        ))}
      </div>

      {/* Gráfico de barras */}
      <div style={{ marginTop: 10 }}>
        <div style={{ fontSize: 8, color: '#4B5A72', marginBottom: 5 }}>Siniestros por tipo</div>
        {[
          { label: 'Fuga de agua',     width: '85%', color: '#0EA5E9', count: '19' },
          { label: 'Humedades',        width: '55%', color: '#6366F1', count: '11' },
          { label: 'Daños estéticos',  width: '20%', color: '#8B5CF6', count: '4'  },
        ].map(bar => (
          <div key={bar.label} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
            <div style={{ fontSize: 7, color: '#4B5A72', width: 70, flexShrink: 0 }}>{bar.label}</div>
            <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: 2, height: 5 }}>
              <div style={{ width: bar.width, background: bar.color, height: 5, borderRadius: 2 }} />
            </div>
            <div style={{ fontSize: 7, color: '#4B5A72', width: 14, textAlign: 'right', flexShrink: 0 }}>{bar.count}</div>
          </div>
        ))}
      </div>

    </div>
  </div>
)

export default function HoroFincasPage() {
  return (
    <ConceptoLayout
      accentColor="#0EA5E9"
      accentRgb="14,165,233"
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80&fit=crop"
      tags={['Proyecto real', 'Aplicación web a medida', 'Administración de Fincas']}
      projectName="HoroFincas"
      projectTagline="De las hojas de cálculo a un sistema de gestión real"
      projectBrief="Aplicación web personalizada para un despacho de administración de fincas. Gestión de siniestros, trabajos encargados, seguimiento por comunidad, calendario y comunicación con aseguradoras. En producción y uso diario desde 2026."
      mockupUrl="horofincasapp.onrender.com"
      mockupBgColor="#020B14"
      mockupContent={mockup}
      stats={[
        { value: '56',    label: 'trabajos gestionados actualmente' },
        { value: '100%',  label: 'proyecto a medida — sin plantillas' },
        { value: '2026',  label: 'en producción y uso diario' },
      ]}
      insights={[
        {
          title: 'Problema real, solución real',
          text: 'El despacho gestionaba siniestros en hojas de cálculo y notas de teléfono. La app centraliza todo: apertura, seguimiento, trabajos encargados y comunicación con aseguradoras.',
        },
        {
          title: 'Diseñado con el usuario final',
          text: 'Cada módulo se construyó a partir de cómo el despacho trabaja realmente. Sin funcionalidades genéricas — todo responde a un flujo de trabajo específico.',
        },
      ]}
      strategy={[
        { num: '01', title: 'Diagnóstico del flujo real', text: 'Antes de escribir código, analicé cómo el despacho gestionaba cada siniestro desde apertura hasta cierre con aseguradora.' },
        { num: '02', title: 'Arquitectura modular',       text: 'Siniestros, trabajos encargados, tareas, calendario y compañías de seguros como módulos independientes pero conectados.' },
        { num: '03', title: 'En producción desde el primer día', text: 'La app se lanzó directamente a uso real. El feedback diario del usuario ha guiado cada iteración posterior.' },
      ]}
      services={['Desarrollo web', 'Diseño UX', 'App a medida']}
      isReal
    />
  )
}
