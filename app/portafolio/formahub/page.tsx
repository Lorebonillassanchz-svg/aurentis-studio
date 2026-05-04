'use client'

import React from 'react'
import Image from 'next/image'
import ConceptoLayout from '@/app/components/ConceptoLayout'

const mockup = (
  <div style={{ background: '#080610', fontFamily: 'var(--font-body)' }}>

    {/* NAV */}
    <div style={{ padding: '12px 20px', background: '#080610', borderBottom: '1px solid rgba(99,102,241,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <div style={{ width: 14, height: 14, borderRadius: 3, background: '#6366F1' }} />
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 800, color: '#fff' }}>FORMA·HUB</span>
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        {['Programa', 'Sobre mí', 'Testimonios'].map(l => (
          <span key={l} style={{ fontSize: 9, color: '#4B5A72' }}>{l}</span>
        ))}
      </div>
      <span style={{ background: '#6366F1', color: '#fff', fontSize: 9, fontWeight: 600, padding: '4px 10px', borderRadius: 4 }}>Reservar plaza</span>
    </div>

    {/* HERO 2 COLUMNAS */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, minHeight: 200 }}>

      {/* Columna izquierda */}
      <div style={{ padding: '16px 20px', background: '#080610' }}>
        <div style={{ background: 'rgba(99,102,241,0.15)', color: '#A5B4FC', fontSize: 7, padding: '3px 8px', borderRadius: 999, marginBottom: 8, display: 'inline-block' }}>
          Próxima edición — marzo 2025
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 800, color: '#fff', lineHeight: 1.2, margin: '0 0 6px' }}>
          Aprende a gestionar tu negocio sin perder la cabeza
        </h2>
        <p style={{ fontSize: 8, color: '#64748B', margin: '0 0 10px' }}>8 semanas · Grupos reducidos · Soporte directo</p>
        <span style={{ background: '#6366F1', color: '#fff', fontSize: 8, padding: '5px 12px', borderRadius: 4, marginBottom: 8, display: 'inline-block', fontWeight: 600 }}>
          Quiero mi plaza →
        </span>
        <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
          {[['8 sem.', 'formación'], ['24 lec.', 'incluidas'], ['Soporte', 'directo']].map(([val, lbl]) => (
            <div key={val}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 10, fontWeight: 800, color: '#A5B4FC' }}>{val}</div>
              <div style={{ fontSize: 7, color: '#4B5A72' }}>{lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Columna derecha — imagen */}
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: 200 }}>
        <Image
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80&fit=crop"
          alt="Formación online"
          fill
          style={{ objectFit: 'cover', opacity: 0.5 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, transparent, rgba(8,6,16,0.8))' }} />
        {/* Card flotante */}
        <div style={{ position: 'absolute', bottom: 10, left: 10, right: 10, background: 'rgba(8,6,16,0.9)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: 6, padding: 8 }}>
          <div style={{ fontSize: 7, color: '#4B5A72', marginBottom: 4 }}>Plazas disponibles</div>
          <div style={{ height: 4, background: 'rgba(255,255,255,0.08)', borderRadius: 999, overflow: 'hidden', marginBottom: 4 }}>
            <div style={{ width: '75%', height: '100%', background: '#6366F1', borderRadius: 999 }} />
          </div>
          <div style={{ fontSize: 7, color: '#A5B4FC' }}>Solo quedan 4 plazas</div>
        </div>
      </div>
    </div>

    {/* MÓDULOS DEL PROGRAMA */}
    <div style={{ padding: '14px 18px', background: '#080610', borderTop: '1px solid rgba(99,102,241,0.08)' }}>
      <div style={{ fontSize: 7, color: '#4B5A72', letterSpacing: '0.1em', marginBottom: 10 }}>CONTENIDO DEL PROGRAMA</div>
      {[
        { num: '01', title: 'Fundamentos del negocio', dur: '2 semanas' },
        { num: '02', title: 'Estrategia y posicionamiento', dur: '2 semanas' },
        { num: '03', title: 'Captación de clientes', dur: '2 semanas' },
        { num: '04', title: 'Sistemas y automatización', dur: '2 semanas' },
      ].map((mod, i) => (
        <div key={mod.num} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
          <div style={{
            width: 16, height: 16, borderRadius: '50%',
            background: 'rgba(99,102,241,0.15)', color: '#A5B4FC',
            fontSize: 7, fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            {mod.num}
          </div>
          <div style={{ fontSize: 8, fontWeight: 600, color: '#fff', flex: 1 }}>{mod.title}</div>
          <div style={{ fontSize: 7, color: '#4B5A72', marginLeft: 'auto', whiteSpace: 'nowrap' }}>{mod.dur}</div>
        </div>
      ))}
    </div>

    {/* GARANTÍA */}
    <div style={{ padding: '10px 18px', background: 'rgba(99,102,241,0.05)', borderTop: '1px solid rgba(99,102,241,0.1)', display: 'flex', alignItems: 'center', gap: 10 }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7l-9-5z" stroke="#A5B4FC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="#A5B4FC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div style={{ fontSize: 7, color: '#A5B4FC', lineHeight: 1.5 }}>
        Garantía de 7 días. Si en la primera semana no es lo que esperabas, te devolvemos el dinero sin preguntas.
      </div>
    </div>

  </div>
)

export default function FormahubPage() {
  return (
    <ConceptoLayout
      accentColor="#6366F1"
      accentRgb="99,102,241"
      heroImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80&fit=crop"
      tags={['Proyecto conceptual', 'Web estratégica', 'Formación online']}
      projectName="Forma·Hub"
      projectTagline="El primer lanzamiento digital de un formador independiente"
      projectBrief="Web completa para educador independiente que lanzaba su primer programa online. Foco en construir credibilidad desde cero y captar los primeros 100 alumnos."
      mockupUrl="formahub.es"
      mockupBgColor="#080610"
      mockupContent={mockup}
      stats={[
        { value: '230',  label: 'suscriptores en la primera semana' },
        { value: '12d',  label: 'de cero a web publicada' },
        { value: '×3',   label: 'conversión vs página genérica' },
      ]}
      insights={[
        {
          title: 'La escasez como palanca real',
          text: 'La barra de plazas restantes no es un truco — es información útil. Cuando es verdad, genera urgencia legítima y acorta el tiempo de decisión.',
        },
        {
          title: 'El precio justificado visualmente',
          text: 'Mostrar el precio tachado junto al real cambia la percepción de valor. El usuario ve lo que gana, no solo lo que paga.',
        },
      ]}
      strategy={[
        { num: '01', title: 'Credibilidad desde cero', text: 'Sin testimonios reales al principio. Construimos credibilidad con transparencia: quién es el formador, su método y por qué funciona.' },
        { num: '02', title: 'Urgencia real, no fake', text: 'Plazas limitadas de verdad. La escasez artificial destruye confianza. La real acelera decisiones de forma ética.' },
        { num: '03', title: 'Email antes que venta', text: 'Lista de espera gratuita antes del lanzamiento. 230 suscriptores antes de abrir ventas cambia completamente las conversiones el día 1.' },
      ]}
      services={['Web estratégica', 'Lanzamiento digital']}
    />
  )
}
