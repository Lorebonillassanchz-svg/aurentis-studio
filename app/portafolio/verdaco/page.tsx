'use client'

import React from 'react'
import Image from 'next/image'
import ConceptoLayout from '@/app/components/ConceptoLayout'

const mockup = (
  <div style={{ background: '#050E08', fontFamily: 'var(--font-body)' }}>

    {/* NAV */}
    <div style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#071A0E' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#16A34A' }} />
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700, color: '#fff' }}>VERDA·CO</span>
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        {['Temporada', 'Origen', 'Recetas'].map(l => (
          <span key={l} style={{ fontSize: 9, color: '#4B5A72' }}>{l}</span>
        ))}
      </div>
      <span style={{ background: '#16A34A', color: '#fff', fontSize: 9, fontWeight: 600, padding: '4px 10px', borderRadius: 4 }}>Pedir ahora</span>
    </div>

    {/* HERO */}
    <div style={{ position: 'relative', height: 160, overflow: 'hidden' }}>
      <Image
        src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=80&fit=crop"
        alt="Verduras ecológicas"
        fill
        style={{ objectFit: 'cover', opacity: 0.6 }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(5,14,8,0.9) 0%, rgba(5,14,8,0.4) 100%)' }} />
      <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: 20 }}>
        <div style={{ background: 'rgba(22,163,74,0.2)', color: '#4ADE80', fontSize: 8, padding: '3px 8px', borderRadius: 999, marginBottom: 8, display: 'inline-block' }}>
          🌿 Temporada de otoño
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 800, color: '#fff', lineHeight: 1.2, maxWidth: 180, margin: '0 0 6px' }}>
          Alimentación ecológica de tu barrio
        </h2>
        <p style={{ fontSize: 8, color: '#94A3B8', maxWidth: 160, margin: '0 0 10px', lineHeight: 1.5 }}>
          Productos frescos de temporada de productores locales certificados.
        </p>
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ background: '#16A34A', color: '#fff', fontSize: 8, padding: '5px 10px', borderRadius: 4, fontWeight: 600 }}>Ver productos →</span>
          <span style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontSize: 8, padding: '5px 8px', borderRadius: 4 }}>Nuestra historia</span>
        </div>
      </div>
    </div>

    {/* PRODUCTOS */}
    <div style={{ padding: '12px 20px', background: '#050E08' }}>
      <div style={{ fontSize: 7, color: '#4B5A72', letterSpacing: '0.1em', marginBottom: 8 }}>ESTA SEMANA</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
        {[
          { src: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=200&q=80&fit=crop', name: 'Tomates cherry', price: '2.40€/kg' },
          { src: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=200&q=80&fit=crop', name: 'Miel cruda',      price: '8.50€/250g' },
          { src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&q=80&fit=crop', name: 'Pan masa madre', price: '4.20€/ud' },
        ].map(item => (
          <div key={item.name} style={{ position: 'relative', height: 70, borderRadius: 6, overflow: 'hidden' }}>
            <Image src={item.src} alt={item.name} fill style={{ objectFit: 'cover', opacity: 0.7 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }} />
            <div style={{ position: 'absolute', bottom: 6, left: 6 }}>
              <div style={{ fontSize: 7, fontWeight: 700, color: '#fff' }}>{item.name}</div>
              <div style={{ fontSize: 7, color: '#4ADE80' }}>{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* TRUST BAR */}
    <div style={{ padding: '8px 20px', borderTop: '1px solid rgba(255,255,255,0.04)', display: 'flex', gap: 12, background: '#071A0E', alignItems: 'center' }}>
      {['Certificado ecológico', 'Productores locales', 'Pedido WhatsApp'].map(item => (
        <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <circle cx="4" cy="4" r="3.5" stroke="#16A34A" strokeWidth="0.8"/>
            <path d="M2.5 4l1 1 2-2" stroke="#16A34A" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{ fontSize: 7, color: '#4B5A72' }}>{item}</span>
        </div>
      ))}
    </div>

    {/* POR QUÉ ELEGIRNOS */}
    <div style={{ padding: '14px 18px', background: '#050E08', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ fontSize: 7, color: '#4B5A72', letterSpacing: '0.1em', marginBottom: 10 }}>POR QUÉ ELEGIRNOS</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
        {[
          {
            icon: (
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8 2 4 6 4 10c0 5 8 12 8 12s8-7 8-12c0-4-4-8-8-8z" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="#16A34A" strokeWidth="1.5"/>
              </svg>
            ),
            title: 'Origen certificado',
            text: 'Conoce el nombre del productor de cada producto',
          },
          {
            icon: (
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ),
            title: 'Sin intermediarios',
            text: 'Del productor a tu mesa, sin pasos innecesarios',
          },
          {
            icon: (
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ),
            title: 'Recogida en tienda',
            text: 'O pedido directo por WhatsApp sin complicaciones',
          },
        ].map(card => (
          <div key={card.title} style={{ background: 'rgba(22,163,74,0.05)', border: '1px solid rgba(22,163,74,0.1)', borderRadius: 6, padding: 8 }}>
            <div style={{ marginBottom: 4 }}>{card.icon}</div>
            <div style={{ fontSize: 7, fontWeight: 700, color: '#fff', marginBottom: 3 }}>{card.title}</div>
            <div style={{ fontSize: 6, color: '#4B5A72', lineHeight: 1.5 }}>{card.text}</div>
          </div>
        ))}
      </div>
    </div>

    {/* NEWSLETTER */}
    <div style={{ padding: '12px 18px', background: '#071A0E', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ fontSize: 8, fontWeight: 700, color: '#fff', marginBottom: 6 }}>Recibe recetas de temporada cada semana</div>
      <div style={{ display: 'flex', gap: 6 }}>
        <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4, padding: '5px 8px', fontSize: 7, color: '#64748B' }}>Tu email</div>
        <div style={{ background: '#16A34A', color: '#fff', fontSize: 7, padding: '5px 10px', borderRadius: 4, fontWeight: 600, whiteSpace: 'nowrap' }}>Suscribirme</div>
      </div>
    </div>

  </div>
)

export default function VerdacoPage() {
  return (
    <ConceptoLayout
      accentColor="#16A34A"
      accentRgb="22,163,74"
      heroImage="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&q=80&fit=crop"
      tags={['Proyecto conceptual', 'Web estratégica', 'Alimentación ecológica']}
      projectName="Verda·co"
      projectTagline="Una tienda de barrio que por fin se encuentra en Google"
      projectBrief="Web estratégica para tienda de alimentación ecológica local. El objetivo: captar clientes nuevos por búsquedas locales y fidelizar los actuales con un canal propio."
      mockupUrl="verdaco.es"
      mockupBgColor="#050E08"
      mockupContent={mockup}
      stats={[
        { value: '+65%', label: 'visibilidad en búsquedas locales' },
        { value: '3.8%', label: 'conversión estimada' },
        { value: '×2',   label: 'alcance con newsletter propio' },
      ]}
      insights={[
        {
          title: 'El barrio como diferenciador',
          text: 'El titular menciona la ubicación local. Una tienda de barrio no compite con Amazon en precio — compite en cercanía. Eso se comunica en 3 palabras.',
        },
        {
          title: 'Canal sin algoritmos',
          text: 'Newsletter de recetas semanales para construir audiencia propia. Independencia total de Instagram y Google Ads.',
        },
      ]}
      strategy={[
        { num: '01', title: 'Mensaje antes que diseño', text: 'Antes de abrir Figma, definimos qué hace única a Verda·co. La respuesta guía cada palabra de la web.' },
        { num: '02', title: 'Fricción mínima al comprar', text: 'Sin tienda online compleja. Pedido por WhatsApp — reduce barreras y mantiene el trato cercano.' },
        { num: '03', title: 'Fidelización con canal propio', text: 'Newsletter de recetas para construir una comunidad propia sin depender de ninguna red social.' },
      ]}
      services={['Web estratégica', 'Imagen digital coherente']}
    />
  )
}
