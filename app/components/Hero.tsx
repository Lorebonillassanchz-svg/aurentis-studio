'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 lg:pt-32 lg:pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Columna izquierda - Texto */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-3xl text-sm font-medium">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              Estrategia primero • Diseño después
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
              Tu web atrae visitas...<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                pero ¿está trayendo clientes?
              </span>
            </h1>

            <p className="text-xl text-blue-100 max-w-lg">
              En Aurentis Studio creo landings y sistemas de presencia digital que realmente convierten visitantes en clientes.
              Sin plantillas. Sin complicaciones. Solo estrategia + diseño de alto impacto.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#auditoria"
                onClick={() => document.getElementById('auditoria-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-slate-950 hover:bg-cyan-300 transition-colors px-8 py-5 rounded-3xl font-semibold text-lg inline-flex items-center gap-3 group"
              >
                Solicitar auditoría gratuita
                <span className="text-xl group-active:rotate-45 transition">→</span>
              </a>

              <Link
                href="#proceso"
                className="border border-white/60 hover:border-white/90 transition-colors px-8 py-5 rounded-3xl font-semibold text-lg inline-flex items-center"
              >
                Ver mi proceso de 5 pasos
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                Sin compromiso ni presión de venta
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                Respondo en menos de 48h
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                IA + estrategia humana
              </div>
            </div>
          </div>

          {/* Columna derecha - Mockup visual (solo desktop) */}
          <div className="relative lg:flex justify-center hidden">
            <div className="relative w-full max-w-md">
              {/* Mockup de landing */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/20">
                <div className="h-8 bg-slate-900 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="p-6 text-slate-900">
                  <div className="h-6 bg-slate-200 rounded mb-4 w-3/4"></div>
                  <div className="h-4 bg-slate-100 rounded mb-2"></div>
                  <div className="h-4 bg-slate-100 rounded w-5/6"></div>
                  <div className="mt-8 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-sm font-medium">
                    Obtener mi auditoría gratuita
                  </div>
                </div>
              </div>

              {/* Badge flotante */}
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-white text-xs font-bold px-6 py-2 rounded-3xl shadow-xl rotate-12">
                +47% conversión promedio
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Línea decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </section>
  )
}
