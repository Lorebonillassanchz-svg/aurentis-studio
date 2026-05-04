'use client'

import React from 'react'
import Image from 'next/image'
import ConceptoLayout from '@/app/components/ConceptoLayout'

const mockup = (
  <div style={{ background: '#060912', fontFamily: 'var(--font-body)' }}>

    {/* NAV */}
    <div style={{ padding: '12px 20px', background: '#060912', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 800, color: '#fff', letterSpacing: '0.08em' }}>NOVA·LAW</span>
      <div style={{ display: 'flex', gap: 10 }}>
        {['Especialidades', 'Equipo', 'Casos'].map(l => (
          <span key={l} style={{ fontSize: 9, color: '#4B5A72' }}>{l}</span>
        ))}
      </div>
      <span style={{ border: '1px solid #2563FF', color: '#60A5FA', fontSize: 9, padding: '4px 10px', borderRadius: 4 }}>Consulta gratuita</span>
    </div>

    {/* HERO */}
    <div style={{ position: 'relative', height: 180, overflow: 'hidden' }}>
      <Image
        src="https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=800&q=80&fit=crop"
        alt="Despacho legal"
        fill
        style={{ objectFit: 'cover', opacity: 0.25 }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(6,9,18,0.97) 0%, rgba(6,9,18,0.75) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 30px', textAlign: 'center' }}>
        <span style={{ background: 'rgba(37,99,255,0.15)', border: '1px solid rgba(37,99,255,0.3)', color: '#93C5FD', fontSize: 8, padding: '3px 10px', borderRadius: 999, marginBottom: 10, display: 'inline-block' }}>
          Derecho Mercantil · Madrid
        </span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 800, color: '#fff', lineHeight: 1.25, margin: '0 0 8px' }}>
          Tu empresa necesita asesoramiento legal claro, no jerga jurídica
        </h2>
        <span style={{ background: '#2563FF', color: '#fff', fontSize: 9, fontWeight: 700, padding: '7px 16px', borderRadius: 5, marginBottom: 10, boxShadow: '0 0 16px rgba(37,99,255,0.4)', display: 'inline-block' }}>
          Reservar consulta inicial →
        </span>
        <div style={{ display: 'flex', gap: 8 }}>
          {['Contratos', 'Sociedades', 'Conflictos mercantiles'].map(s => (
            <span key={s} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#94A3B8', fontSize: 7, padding: '3px 8px', borderRadius: 4 }}>{s}</span>
          ))}
        </div>
      </div>
    </div>

    {/* FORMULARIO */}
    <div style={{ padding: '12px 20px', background: '#060912', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ fontSize: 7, color: '#4B5A72', letterSpacing: '0.1em', marginBottom: 8 }}>CONSULTA INICIAL GRATUITA</div>
      <div style={{ display: 'flex', gap: 6, marginBottom: 5 }}>
        {['Tu nombre', 'Email profesional'].map(ph => (
          <div key={ph} style={{ flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4, padding: '5px 8px', fontSize: 8, color: '#4B5A72' }}>{ph}</div>
        ))}
      </div>
      <div style={{ width: '100%', background: '#2563FF', color: '#fff', fontSize: 8, padding: 5, borderRadius: 4, textAlign: 'center', fontWeight: 600 }}>
        Enviar →
      </div>
    </div>

    {/* ESPECIALIDADES */}
    <div style={{ padding: '14px 18px', background: '#060912', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ fontSize: 7, color: '#4B5A72', letterSpacing: '0.1em', marginBottom: 10 }}>ESPECIALIDADES</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
        {[
          { title: 'Contratos mercantiles', text: 'Redacción, revisión y negociación' },
          { title: 'Constitución de sociedades', text: 'Desde la idea hasta el registro' },
          { title: 'Resolución de conflictos', text: 'Mediación y litigación especializada' },
        ].map(card => (
          <div key={card.title} style={{ background: 'rgba(37,99,255,0.05)', border: '1px solid rgba(37,99,255,0.12)', borderRadius: 6, padding: 10 }}>
            <div style={{ fontSize: 8, fontWeight: 700, color: '#fff', marginBottom: 4, lineHeight: 1.3 }}>{card.title}</div>
            <div style={{ fontSize: 6, color: '#4B5A72', lineHeight: 1.5 }}>{card.text}</div>
          </div>
        ))}
      </div>
    </div>

    {/* TESTIMONIOS */}
    <div style={{ padding: '12px 18px', background: '#06091A', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ fontSize: 7, color: '#4B5A72', letterSpacing: '0.1em', marginBottom: 8 }}>LO QUE DICEN NUESTROS CLIENTES</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
        {[
          { quote: 'Resolvieron nuestro conflicto mercantil en tiempo récord. Profesionalidad total.', author: '— CEO, empresa tecnológica' },
          { quote: 'Claridad y transparencia en todo el proceso. Saben de lo que hablan.', author: '— Fundadora, startup de moda' },
        ].map(t => (
          <div key={t.author} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 6, padding: 8 }}>
            <div style={{ fontSize: 8, color: '#FBBF24', marginBottom: 4 }}>★★★★★</div>
            <div style={{ fontSize: 7, color: '#64748B', fontStyle: 'italic', lineHeight: 1.5, marginBottom: 4 }}>{`"${t.quote}"`}</div>
            <div style={{ fontSize: 6, color: '#4B5A72' }}>{t.author}</div>
          </div>
        ))}
      </div>
    </div>

  </div>
)

export default function NovalawPage() {
  return (
    <ConceptoLayout
      accentColor="#2563FF"
      accentRgb="37,99,255"
      heroImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80&fit=crop"
      tags={['Proyecto conceptual', 'Landing de captación', 'Servicios legales']}
      projectName="Nova·Law"
      projectTagline="Una landing que convierte visitas en consultas iniciales"
      projectBrief="Landing page para despacho de abogados especializado en derecho mercantil. Objetivo único: reducir fricción al contactar y generar consultas iniciales cualificadas."
      mockupUrl="novalaw.es"
      mockupBgColor="#060912"
      mockupContent={mockup}
      stats={[
        { value: '1 CTA', label: 'único objetivo en toda la página' },
        { value: '-70%', label: 'reducción de fricción al contactar' },
        { value: '4.2%', label: 'conversión estimada a consulta' },
      ]}
      insights={[
        {
          title: 'Una página, una acción',
          text: 'Sin menú, sin distracciones, sin múltiples páginas. Todo lleva a un único lugar: reservar la consulta. Así funcionan las landing pages que convierten.',
        },
        {
          title: 'Lenguaje del cliente, no del abogado',
          text: 'El titular habla del problema del cliente, no de los servicios del despacho. Esa diferencia cambia completamente la tasa de conversión.',
        },
      ]}
      strategy={[
        { num: '01', title: 'Sin menú de navegación', text: 'Una landing de captación no necesita menú. Cada enlace extra es una salida posible. Aquí solo hay un destino.' },
        { num: '02', title: 'Formulario corto y directo', text: '3 campos máximo. Nombre, email y situación. Pedir más datos en el primer contacto reduce drásticamente las conversiones.' },
        { num: '03', title: 'Prueba social específica', text: 'No estrellas genéricas. Testimonios de empresarios reales con su sector y el problema que resolvieron.' },
      ]}
      services={['Landing de captación', 'Sistema de captación']}
    />
  )
}
