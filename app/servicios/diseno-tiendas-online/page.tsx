import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diseño de Tiendas Online WooCommerce y PrestaShop — Aurentis Studio',
  description: 'Creamos tu tienda online profesional en WooCommerce o PrestaShop. Diseño optimizado para vender, SEO incluido y formación para que la gestiones tú solo.',
}

const ACCENT = '#2563FF'
const ACCENT_RGB = '37,99,255'

function BackBtn() {
  return (
    <Link
      href="/servicios"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,0.1)',
        color: '#94A3B8', fontSize: 12, padding: '7px 14px',
        borderRadius: 999, marginBottom: 20,
        textDecoration: 'none', fontFamily: 'var(--font-body)',
      }}
    >
      ← Servicios
    </Link>
  )
}

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="8" cy="8" r="7" stroke={`rgba(${ACCENT_RGB},0.4)`} strokeWidth="1"/>
      <path d="M5 8l2 2 4-4" stroke={ACCENT} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const problems = [
  { title: 'Tienes visitas pero no vendes', text: 'Tu tienda recibe tráfico pero no convierte. Pasa en el 80% de las tiendas online mal estructuradas. La solución casi nunca es más publicidad — es rediseñar cómo está construida.' },
  { title: 'Tu tienda se ve amateur', text: 'Los clientes deciden si comprar en los primeros 3 segundos. Una tienda online anticuada o poco profesional pierde ventas antes de que el cliente lea el precio.' },
  { title: 'No apareces cuando buscan lo que vendes', text: 'Sin SEO técnico bien aplicado, tu tienda online es invisible en Google. El tráfico orgánico tarda más que los anuncios, pero no para cuando dejas de pagar.' },
  { title: 'Dependes de un técnico para todo', text: 'Si cambiar un precio o subir un producto requiere llamar a alguien, tu tienda está mal construida. Te la entregamos lista para gestionarla tú solo desde el día 1.' },
]

const includes = [
  'Diseño personalizado coherente con tu marca y tu sector',
  'Estructura de categorías y navegación diseñada para que comprar sea fácil',
  'Ficha de producto optimizada para convertir: imágenes, textos y llamada a la acción',
  'Pasarela de pago integrada: Stripe, PayPal o transferencia bancaria',
  'SEO técnico aplicado de base: URLs, metadatos, velocidad y estructura',
  'Formación incluida — gestiona tu tienda sin depender de nadie',
]

const process = [
  { num: '01', title: 'Analizamos tu negocio y tu competencia', text: 'Antes de diseñar nada, entendemos qué vendes, quién te compra y por qué te eligen (o no) frente a quien ya vende online en tu sector.' },
  { num: '02', title: 'Planificamos la estructura de la tienda', text: 'Categorías, flujo de compra y wireframes. El diseño sigue a la estrategia de ventas, no al revés.' },
  { num: '03', title: 'Desarrollamos, configuramos y probamos', text: 'Tienda completa: productos, pagos, envíos, SEO técnico y pruebas de usabilidad antes de publicar nada.' },
  { num: '04', title: 'Publicamos y te formamos', text: 'Entrega con sesión de formación en directo para que puedas gestionar tu tienda online con total autonomía desde el primer día.' },
]

export default function TiendasOnlinePage() {
  return (
    <>
      <style>{`
        .dto-problems { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; max-width: 900px; margin: 0 auto; }
        .dto-split { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; max-width: 1100px; margin: 0 auto; align-items: center; }
        .dto-platforms { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; max-width: 900px; margin: 0 auto; }
        .dto-process { display: flex; flex-direction: column; gap: 0; max-width: 700px; margin: 0 auto; }
        @media (max-width: 768px) {
          .dto-problems { grid-template-columns: 1fr !important; }
          .dto-split { grid-template-columns: 1fr !important; }
          .dto-platforms { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: 480, overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        <Image
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80&fit=crop"
          alt="Diseño de tiendas online"
          fill priority sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(7,9,15,0.97) 0%, rgba(7,9,15,0.65) 55%, rgba(7,9,15,0.3) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: `rgba(${ACCENT_RGB},0.08)` }} />

        <div style={{ position: 'relative', zIndex: 2, padding: '48px 5%', maxWidth: 700 }}>
          <BackBtn />
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 10px' }}>
            Diseño de tiendas online
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,3.5vw,48px)', fontWeight: 800, color: '#F1F5F9', margin: '0 0 16px', lineHeight: 1.15 }}>
            Tiendas online que venden — no solo que existen
          </h1>
          <p style={{ color: '#94A3B8', fontSize: 16, lineHeight: 1.7, fontFamily: 'var(--font-body)', fontWeight: 300, maxWidth: 540, margin: 0 }}>
            Diseñamos tu tienda en WooCommerce o PrestaShop para que sea rápida, profesional y fácil de comprar. Con SEO incluido para que Google la encuentre y con formación para que la gestiones tú.
          </p>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section style={{ background: '#0B0F1A', padding: '80px 5%' }}>
        <div style={{ maxWidth: 900, margin: '0 auto 40px' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: ACCENT, display: 'block', marginBottom: 10 }}>
            El diagnóstico
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,32px)', fontWeight: 800, color: '#F1F5F9', margin: 0 }}>
            ¿Tienes tienda online pero no funciona como debería?
          </h2>
        </div>
        <div className="dto-problems">
          {problems.map(p => (
            <div key={p.title} style={{
              background: '#0F172A',
              borderLeft: `3px solid ${ACCENT}`,
              borderRadius: '0 12px 12px 0',
              padding: '20px 24px',
            }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#F1F5F9', marginBottom: 8, fontFamily: 'var(--font-display)' }}>{p.title}</div>
              <div style={{ fontSize: 13, color: '#64748B', lineHeight: 1.65, fontFamily: 'var(--font-body)' }}>{p.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section style={{ background: '#0F172A', padding: '80px 5%', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="dto-split">
          <div style={{ position: 'relative', height: 400, borderRadius: 16, overflow: 'hidden' }}>
            <Image
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80&fit=crop"
              alt="Tienda online"
              fill sizes="(max-width:768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, rgba(${ACCENT_RGB},0.2) 0%, rgba(7,9,15,0.5) 100%)` }} />
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: ACCENT, display: 'block', marginBottom: 10 }}>
              Lo que recibes
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,30px)', fontWeight: 800, color: '#F1F5F9', margin: '0 0 28px', lineHeight: 1.2 }}>
              Qué incluye el diseño de tu tienda online
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {includes.map(item => (
                <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <Check />
                  <span style={{ color: '#94A3B8', fontSize: 14, lineHeight: 1.55, fontFamily: 'var(--font-body)', fontWeight: 300 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PLATAFORMAS */}
      <section style={{ background: '#0B0F1A', padding: '60px 5%' }}>
        <div style={{ maxWidth: 900, margin: '0 auto 36px' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: ACCENT, display: 'block', marginBottom: 10 }}>
            Tecnología
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,32px)', fontWeight: 800, color: '#F1F5F9', margin: 0 }}>
            ¿Con qué plataforma trabajamos?
          </h2>
        </div>
        <div className="dto-platforms">
          {[
            {
              badge: 'Más popular',
              name: 'WooCommerce',
              desc: 'La plataforma de ecommerce más usada del mundo, integrada en WordPress. Flexible, con miles de plugins y fácil de gestionar sin conocimientos técnicos.',
              features: ['Gestión sencilla sin programar', 'SEO nativo potente', 'Miles de integraciones disponibles', '100% personalizable'],
            },
            {
              badge: null,
              name: 'PrestaShop',
              desc: 'Plataforma de ecommerce puro para catálogos grandes o negocios con necesidades avanzadas de stock, envíos o múltiples idiomas y divisas.',
              features: ['Alto rendimiento con catálogos grandes', 'Multi-idioma y multi-divisa', 'Gestión avanzada de stock', 'Módulos de logística integrados'],
            },
          ].map(pl => (
            <div key={pl.name} style={{
              background: '#0F172A',
              border: `1px solid rgba(${ACCENT_RGB},0.2)`,
              borderRadius: 16,
              padding: 28,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 800, color: '#F1F5F9', margin: 0 }}>{pl.name}</h3>
                {pl.badge && (
                  <span style={{ background: `rgba(${ACCENT_RGB},0.12)`, border: `1px solid rgba(${ACCENT_RGB},0.3)`, color: '#93C5FD', borderRadius: 999, fontSize: 11, fontWeight: 600, padding: '3px 10px' }}>{pl.badge}</span>
                )}
              </div>
              <p style={{ color: '#64748B', fontSize: 13.5, lineHeight: 1.65, fontFamily: 'var(--font-body)', margin: '0 0 18px' }}>{pl.desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {pl.features.map(f => (
                  <div key={f} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <Check />
                    <span style={{ color: '#94A3B8', fontSize: 13, fontFamily: 'var(--font-body)' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESO */}
      <section style={{ background: '#0F172A', padding: '60px 5%', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto 40px' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: ACCENT, display: 'block', marginBottom: 10 }}>
            Cómo trabajamos
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,32px)', fontWeight: 800, color: '#F1F5F9', margin: 0 }}>
            Del brief a la tienda publicada
          </h2>
        </div>
        <div className="dto-process">
          {process.map((step, i) => (
            <div key={step.num} style={{ display: 'flex', gap: 24, paddingBottom: i < process.length - 1 ? 32 : 0 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                  background: `rgba(${ACCENT_RGB},0.1)`,
                  border: `1px solid rgba(${ACCENT_RGB},0.3)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, color: ACCENT,
                }}>
                  {step.num}
                </div>
                {i < process.length - 1 && (
                  <div style={{ width: 1, flex: 1, background: `rgba(${ACCENT_RGB},0.15)`, marginTop: 8 }} />
                )}
              </div>
              <div style={{ paddingTop: 8, paddingBottom: i < process.length - 1 ? 16 : 0 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: '#F1F5F9', marginBottom: 6 }}>{step.title}</div>
                <div style={{ fontSize: 13.5, color: '#64748B', lineHeight: 1.65, fontFamily: 'var(--font-body)' }}>{step.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0B0F1A', padding: '80px 5%', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.8vw,38px)', fontWeight: 800, color: '#F1F5F9', margin: '0 auto 16px', maxWidth: 600, lineHeight: 1.2 }}>
          ¿Quieres crear o mejorar tu tienda online?
        </h2>
        <p style={{ color: '#94A3B8', fontSize: 16, lineHeight: 1.7, fontFamily: 'var(--font-body)', fontWeight: 300, maxWidth: 440, margin: '0 auto 36px' }}>
          Cuéntame qué vendes y en qué punto está tu tienda ahora mismo. Te preparo una propuesta personalizada en 48 horas.
        </p>
        <Link
          href="/#auditoria"
          style={{
            display: 'inline-block', background: ACCENT, color: '#fff',
            fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15,
            padding: '14px 32px', borderRadius: 9, textDecoration: 'none',
            boxShadow: `0 0 28px rgba(${ACCENT_RGB},0.3)`,
          }}
        >
          Solicitar propuesta →
        </Link>
      </section>
    </>
  )
}
