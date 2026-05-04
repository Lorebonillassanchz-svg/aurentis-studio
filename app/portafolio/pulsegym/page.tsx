'use client'

import React from 'react'
import Image from 'next/image'
import ConceptoLayout from '@/app/components/ConceptoLayout'

const mockup = (
  <div style={{ background: '#0A0612', fontFamily: 'var(--font-body)' }}>

    {/* NAV */}
    <div style={{ padding: '12px 20px', background: 'rgba(10,6,18,0.95)', borderBottom: '1px solid rgba(168,85,247,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 800, color: '#fff', letterSpacing: '0.05em' }}>PULSE·GYM</span>
      <div style={{ display: 'flex', gap: 10 }}>
        {['Clases', 'Entrenadores', 'Precio'].map(l => (
          <span key={l} style={{ fontSize: 9, color: '#4B5A72' }}>{l}</span>
        ))}
      </div>
      <span style={{ background: '#A855F7', color: '#fff', fontSize: 9, fontWeight: 600, padding: '4px 10px', borderRadius: 4 }}>Primera clase gratis</span>
    </div>

    {/* HERO */}
    <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
      <Image
        src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80&fit=crop"
        alt="Entrenamiento personalizado"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.45 }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,6,18,0.95) 0%, rgba(10,6,18,0.5) 100%)' }} />
      <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: 20 }}>
        <div style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)', color: '#D8B4FE', fontSize: 7, padding: '3px 8px', borderRadius: 999, marginBottom: 8, display: 'inline-block' }}>
          Máximo 8 personas por sesión
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 800, color: '#fff', lineHeight: 1.2, maxWidth: 180, margin: '0 0 6px' }}>
          Entrenamiento personalizado. No eres un número.
        </h2>
        <span style={{ background: '#A855F7', color: '#fff', fontSize: 8, padding: '5px 12px', borderRadius: 4, boxShadow: '0 0 14px rgba(168,85,247,0.4)', display: 'inline-block', fontWeight: 600 }}>
          Reservar clase de prueba →
        </span>
      </div>
    </div>

    {/* DIFERENCIADORES */}
    <div style={{ padding: '10px 20px', background: '#0A0612', borderTop: '1px solid rgba(168,85,247,0.08)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
        {[
          { icon: 'M10 10c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4zm-6 12c0-5.5 4.5-10 10-10s10 4.5 10 10', title: 'Entrenador dedicado', text: 'Solo tú y tu plan' },
          { icon: 'M9 12c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3zM3 20c0-4.4 3.6-8 8-8h2c4.4 0 8 3.6 8 8M20 8c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3z', title: 'Grupos de 8', text: 'Atención real en cada sesión' },
          { icon: 'M3 17l5-5 4 4 9-9M21 17v4H3v-4', title: 'Progreso medible', text: 'Resultados visibles en 30 días' },
        ].map(d => (
          <div key={d.title} style={{ background: 'rgba(168,85,247,0.05)', border: '1px solid rgba(168,85,247,0.12)', borderRadius: 6, padding: 8, textAlign: 'center' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ margin: '0 auto 4px', display: 'block' }}>
              <path d={d.icon} stroke="#D8B4FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div style={{ fontSize: 8, fontWeight: 700, color: '#fff', marginTop: 4, lineHeight: 1.3 }}>{d.title}</div>
            <div style={{ fontSize: 7, color: '#4B5A72', lineHeight: 1.4 }}>{d.text}</div>
          </div>
        ))}
      </div>
    </div>

    {/* HORARIOS */}
    <div style={{ padding: '8px 20px', background: '#080510', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ fontSize: 7, color: '#4B5A72', letterSpacing: '0.08em', marginBottom: 6 }}>PRÓXIMAS SESIONES DISPONIBLES</div>
      <div style={{ display: 'flex', gap: 6 }}>
        {[{ time: '07:30', tipo: 'Fuerza' }, { time: '10:00', tipo: 'Funcional' }, { time: '18:30', tipo: 'HIIT' }].map(slot => (
          <div key={slot.time} style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.15)', borderRadius: 4, padding: '4px 8px' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 9, fontWeight: 700, color: '#D8B4FE' }}>{slot.time}</div>
            <div style={{ fontSize: 7, color: '#4B5A72' }}>{slot.tipo}</div>
          </div>
        ))}
      </div>
    </div>

    {/* ENTRENADORES */}
    <div style={{ padding: '14px 18px', background: '#0A0612', borderTop: '1px solid rgba(168,85,247,0.08)' }}>
      <div style={{ fontSize: 7, color: '#4B5A72', letterSpacing: '0.1em', marginBottom: 10 }}>TU EQUIPO DE ENTRENADORES</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
        {[
          { name: 'Carlos M.', spec: 'Fuerza y musculación' },
          { name: 'Sara P.', spec: 'Funcional y movilidad' },
          { name: 'Miguel R.', spec: 'HIIT y cardio' },
        ].map(trainer => (
          <div key={trainer.name} style={{ background: 'rgba(168,85,247,0.05)', border: '1px solid rgba(168,85,247,0.12)', borderRadius: 6, padding: 8, textAlign: 'center' }}>
            <div style={{
              width: 28, height: 28,
              background: 'linear-gradient(135deg, rgba(168,85,247,0.3), rgba(168,85,247,0.1))',
              border: '1px solid rgba(168,85,247,0.3)',
              borderRadius: '50%', margin: '0 auto 5px',
            }} />
            <div style={{ fontSize: 7, fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>{trainer.name}</div>
            <div style={{ fontSize: 6, color: '#4B5A72', lineHeight: 1.4, marginTop: 2 }}>{trainer.spec}</div>
          </div>
        ))}
      </div>
    </div>

    {/* RESULTADOS REALES */}
    <div style={{ padding: '10px 18px', background: '#080510', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ fontSize: 7, color: '#4B5A72', letterSpacing: '0.1em', marginBottom: 8 }}>RESULTADOS DE NUESTROS ALUMNOS</div>
      <div style={{ display: 'flex', gap: 0 }}>
        {[
          { value: '-8kg', label: 'promedio en 3 meses' },
          { value: '94%', label: 'tasa de renovación' },
          { value: '4.9★', label: 'valoración media' },
        ].map((m, i) => (
          <div key={m.label} style={{ flex: 1, textAlign: 'center', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 800, color: '#D8B4FE', lineHeight: 1 }}>{m.value}</div>
            <div style={{ fontSize: 6, color: '#4B5A72', marginTop: 3 }}>{m.label}</div>
          </div>
        ))}
      </div>
    </div>

  </div>
)

export default function PulsegymPage() {
  return (
    <ConceptoLayout
      accentColor="#A855F7"
      accentRgb="168,85,247"
      heroImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80&fit=crop"
      tags={['Proyecto conceptual', 'Landing de captación', 'Deporte y salud']}
      projectName="Pulse·Gym"
      projectTagline="Diferenciarse de las grandes cadenas con una landing que habla al cliente correcto"
      projectBrief="Landing para gimnasio boutique de entrenamiento personalizado. El reto: atraer clientes que valoran la atención individual y alejarlos del mensaje genérico de las grandes cadenas."
      mockupUrl="pulsegym.es"
      mockupBgColor="#0A0612"
      mockupContent={mockup}
      stats={[
        { value: '8 max', label: 'personas por sesión — diferenciador clave' },
        { value: '+80%',  label: 'retención vs gimnasio tradicional' },
        { value: '5.1%',  label: 'conversión a clase de prueba' },
      ]}
      insights={[
        {
          title: 'El titular que aleja a los clientes equivocados',
          text: 'Un titular que dice "no eres un número" no es para todos. Es exactamente para quien se ha sentido ignorado en un gimnasio grande. Eso es segmentación real.',
        },
        {
          title: 'La limitación como ventaja',
          text: '"Máximo 8 personas" suena a restricción pero es el argumento de venta más poderoso del concepto. Lo que otros ven como defecto, aquí es la promesa principal.',
        },
      ]}
      strategy={[
        { num: '01', title: 'Posicionamiento por exclusión', text: 'Definir claramente para quién NO es el servicio atrae con mucha más fuerza a quien sí es el cliente ideal.' },
        { num: '02', title: 'La prueba sin riesgo', text: 'Primera clase gratuita elimina la barrera más grande: el miedo a comprometerse con algo que no conoces.' },
        { num: '03', title: 'Horarios como conversión', text: 'Mostrar slots disponibles en tiempo real genera urgencia sin artificios. Ver que quedan 2 plazas para mañana acelera la decisión.' },
      ]}
      services={['Landing de captación', 'Imagen digital coherente']}
    />
  )
}
