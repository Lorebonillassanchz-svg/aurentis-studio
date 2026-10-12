import Image from 'next/image'
import Link from 'next/link'

export default function GlowUpStudioPage() {
  return (
    <>
      <style>{`
        .gu-before-after {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          max-width: 900px;
          margin: 0 auto;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(201,168,76,0.2);
        }
        .gu-mosaic {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .gu-mosaic-wide {
          grid-column: span 2;
        }
        @media (max-width: 700px) {
          .gu-before-after { grid-template-columns: 1fr; }
          .gu-mosaic { grid-template-columns: 1fr; }
          .gu-mosaic-wide { grid-column: span 1; }
        }
      `}</style>

      {/* ── HERO: logo a pantalla completa ─────────────── */}
      <section style={{ position: 'relative', height: '92vh', minHeight: 520, overflow: 'hidden' }}>
        <Image
          src="/glow-up/glow-logo.jpg"
          alt="Glow Up Studio — identidad visual"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Gradiente oscuro en la parte baja para el texto */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,4,10,0.92) 0%, rgba(6,4,10,0.3) 55%, transparent 100%)' }} />

        {/* Back link */}
        <Link
          href="/portafolio"
          style={{ position: 'absolute', top: 100, left: 32, zIndex: 10, color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-body)', fontSize: 13, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', padding: '7px 16px', borderRadius: 999 }}
        >
          ← Portafolio
        </Link>

        {/* Texto hero */}
        <div style={{ position: 'absolute', bottom: 60, left: 0, right: 0, padding: '0 5%', zIndex: 2 }}>
          <div style={{ maxWidth: 700 }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A84C', display: 'block', marginBottom: 14 }}>
              Proyecto real · Branding completo
            </span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 800, color: '#fff', margin: '0 0 14px', lineHeight: 1.08 }}>
              Glow Up Studio
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'rgba(255,255,255,0.65)', fontWeight: 300, maxWidth: 520, lineHeight: 1.6, margin: 0 }}>
              Identidad visual desde cero para estudio de extensiones de pestañas en Granada — logo, tarjetas, uniformes, señalética y catálogo digital.
            </p>
          </div>
        </div>
      </section>

      {/* ── ANTES / DESPUÉS ─────────────────────────────── */}
      <section style={{ background: '#06040A', padding: '80px 5%' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A84C', textAlign: 'center', marginBottom: 14 }}>
          Transformación de imagen
        </p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.8vw, 34px)', fontWeight: 800, color: '#F1F5F9', textAlign: 'center', margin: '0 0 48px' }}>
          Antes y después
        </h2>

        <div className="gu-before-after" style={{ alignItems: 'stretch' }}>
          {/* ANTES */}
          <div style={{ position: 'relative', background: '#0d0d0d', minHeight: 420, height: '100%', display: 'flex', flexDirection: 'column', padding: '28px 20px', gap: 0, overflow: 'hidden' }}>

            {/* Simulación perfil Instagram antiguo */}
            {/* Header: foto + nombre + stats */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 16 }}>
              {/* Foto de perfil: foto personal sin marco de marca */}
              <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg, #888 0%, #555 100%)', border: '2px solid rgba(255,255,255,0.15)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <span style={{ fontSize: 34, lineHeight: 1 }}>🙍‍♀️</span>
              </div>
              {/* Stats */}
              <div style={{ display: 'flex', gap: 18, flex: 1 }}>
                {[['3', 'publicaciones'], ['47', 'seguidores'], ['61', 'seguidos']].map(([n, label]) => (
                  <div key={label} style={{ textAlign: 'center' }}>
                    <p style={{ fontFamily: 'var(--font-body)', color: '#fff', fontSize: 15, fontWeight: 700, margin: 0 }}>{n}</p>
                    <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.4)', fontSize: 10, margin: 0 }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Nombre y bio */}
            <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.55)', fontSize: 12, margin: '0 0 4px', fontWeight: 600 }}>loraine_bonilla</p>
            <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.35)', fontSize: 11, margin: '0 0 16px', lineHeight: 1.5 }}>
              Pongo pestañas 💅<br />
              📍 Granada
            </p>

            {/* Grid de posts: 3 fotos genéricas sin marca */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, flex: 1 }}>
              {['#3a3a3a', '#2e2e2e', '#333'].map((bg, i) => (
                <div key={i} style={{ aspectRatio: '1/1', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 22, opacity: 0.25 }}>📷</span>
                </div>
              ))}
            </div>

            {/* Nota descriptiva */}
            <div style={{ marginTop: 14, padding: '8px 14px', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: 8 }}>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.22)', fontSize: 10, margin: 0, textAlign: 'center', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1.6 }}>
                Sin logo · Sin identidad · Foto personal como imagen de negocio
              </p>
            </div>

            {/* Label */}
            <div style={{ position: 'absolute', top: 16, left: 16, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)', color: '#94A3B8', fontSize: 12, fontFamily: 'var(--font-body)', padding: '5px 14px', borderRadius: 999 }}>
              Antes
            </div>
          </div>

          {/* DESPUÉS */}
          <div style={{ position: 'relative', minHeight: 420, height: '100%' }}>
            <Image
              src="/glow-up/glow-instagram.jpg"
              alt="Glow Up Studio — perfil Instagram diseñado"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,4,10,0.15)' }} />
            {/* Label */}
            <div style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(201,168,76,0.9)', color: '#06040A', fontSize: 12, fontFamily: 'var(--font-body)', fontWeight: 700, padding: '5px 14px', borderRadius: 999 }}>
              Después
            </div>
          </div>
        </div>
      </section>

      {/* ── MOSAICO DE PIEZAS DISEÑADAS ─────────────────── */}
      <section style={{ background: '#06040A', padding: '20px 5% 80px' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A84C', textAlign: 'center', marginBottom: 14 }}>
          Piezas del proyecto
        </p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.8vw, 34px)', fontWeight: 800, color: '#F1F5F9', textAlign: 'center', margin: '0 0 48px' }}>
          Identidad visual completa
        </h2>

        <div className="gu-mosaic">
          {/* Logo principal — ocupa 2 columnas */}
          <div className="gu-mosaic-wide" style={{ position: 'relative', aspectRatio: '16/9', borderRadius: 16, overflow: 'hidden' }}>
            <Image src="/glow-up/glow-cartel.jpg" alt="Señalética exterior Glow Up Studio" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 14, left: 14, background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', color: '#C9A84C', fontSize: 11, fontFamily: 'var(--font-body)', padding: '4px 12px', borderRadius: 999 }}>
              Señalética exterior
            </div>
          </div>

          {/* Monogramas */}
          <div style={{ position: 'relative', aspectRatio: '1/1', borderRadius: 16, overflow: 'hidden' }}>
            <Image src="/glow-up/glow-monogramas.jpg" alt="Monogramas GU Studio" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 14, left: 14, background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', color: '#C9A84C', fontSize: 11, fontFamily: 'var(--font-body)', padding: '4px 12px', borderRadius: 999 }}>
              Monogramas GU
            </div>
          </div>

          {/* Uniforme 1 */}
          <div style={{ position: 'relative', aspectRatio: '1/1', borderRadius: 16, overflow: 'hidden' }}>
            <Image src="/glow-up/glow-uniforme1.jpg" alt="Uniforme Glow Up Studio" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
            <div style={{ position: 'absolute', bottom: 14, left: 14, background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', color: '#C9A84C', fontSize: 11, fontFamily: 'var(--font-body)', padding: '4px 12px', borderRadius: 999 }}>
              Uniforme profesional
            </div>
          </div>

          {/* Uniforme 2 */}
          <div style={{ position: 'relative', aspectRatio: '1/1', borderRadius: 16, overflow: 'hidden' }}>
            <Image src="/glow-up/glow-uniforme2.jpg" alt="Uniforme detalle con color corporativo" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
            <div style={{ position: 'absolute', bottom: 14, left: 14, background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', color: '#C9A84C', fontSize: 11, fontFamily: 'var(--font-body)', padding: '4px 12px', borderRadius: 999 }}>
              Color corporativo
            </div>
          </div>

          {/* Tarjetas — ocupa 2 columnas */}
          <div className="gu-mosaic-wide" style={{ position: 'relative', aspectRatio: '16/9', borderRadius: 16, overflow: 'hidden' }}>
            <Image src="/glow-up/glow-tarjetas.jpg" alt="Tarjetas de visita Glow Up Studio" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 14, left: 14, background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', color: '#C9A84C', fontSize: 11, fontFamily: 'var(--font-body)', padding: '4px 12px', borderRadius: 999 }}>
              Tarjetas de visita
            </div>
          </div>

          {/* Rótulo interior */}
          <div style={{ position: 'relative', aspectRatio: '1/1', borderRadius: 16, overflow: 'hidden' }}>
            <Image src="/glow-up/glow-rotulo.jpg" alt="Rótulo interior salón" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 14, left: 14, background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', color: '#C9A84C', fontSize: 11, fontFamily: 'var(--font-body)', padding: '4px 12px', borderRadius: 999 }}>
              Rótulo interior
            </div>
          </div>

          {/* Banners digitales — imagen completa sin recortar, ocupa 2 columnas */}
          <div className="gu-mosaic-wide" style={{ borderRadius: 16, overflow: 'hidden', position: 'relative' }}>
            <Image
              src="/glow-up/glow-banners.jpg"
              alt="Banners digitales Glow Up Studio"
              width={2084}
              height={2084}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div style={{ position: 'absolute', bottom: 14, left: 14, background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', color: '#C9A84C', fontSize: 11, fontFamily: 'var(--font-body)', padding: '4px 12px', borderRadius: 999 }}>
              Banners para redes sociales
            </div>
          </div>
        </div>
      </section>

      {/* ── CATÁLOGO DIGITAL ──────────────────────────────── */}
      <section style={{ background: '#0F172A', padding: '80px 5%', textAlign: 'center', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 14 }}>
          Resultado final
        </p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.8vw, 34px)', fontWeight: 800, color: '#F1F5F9', margin: '0 auto 16px', maxWidth: 520 }}>
          Catálogo digital interactivo
        </h2>
        <p style={{ color: '#94A3B8', fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 15.5, lineHeight: 1.7, maxWidth: 500, margin: '0 auto 48px' }}>
          Toda la identidad visual del estudio reunida en un catálogo de servicios en formato digital, listo para compartir y consultar desde cualquier dispositivo.
        </p>
        <a
          href="https://lorebonillassanchz-svg.github.io/glow-up-lorainebonilla/glow_up_catalog.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: 'linear-gradient(135deg, #C9A84C 0%, #E8C96A 50%, #C9A84C 100%)',
            color: '#06040A',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 15,
            padding: '15px 36px',
            borderRadius: 10,
            textDecoration: 'none',
            boxShadow: '0 0 32px rgba(201,168,76,0.35)',
            letterSpacing: '0.02em',
          }}
        >
          <span>✦</span>
          <span>Ver catálogo completo</span>
          <span>→</span>
        </a>
      </section>

      {/* ── NAV INFERIOR ──────────────────────────────────── */}
      <section style={{ background: '#06040A', padding: '60px 5%', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <Link
          href="/portafolio"
          style={{ color: '#64748B', fontFamily: 'var(--font-body)', fontSize: 14, textDecoration: 'none' }}
        >
          ← Volver al portafolio
        </Link>
      </section>
    </>
  )
}
