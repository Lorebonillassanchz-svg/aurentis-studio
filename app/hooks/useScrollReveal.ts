'use client'
import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target) // once: true — no bloquea render posterior
          }
        })
      },
      // threshold 0 = dispara en cuanto un píxel entra en viewport
      // sin rootMargin negativo que crea zona ciega en móvil
      { threshold: 0, rootMargin: '0px 0px 0px 0px' }
    )

    function observeAll() {
      document.querySelectorAll<Element>('.reveal:not(.visible)').forEach(el => observer.observe(el))
    }

    // Observa elementos presentes ahora
    observeAll()

    // MutationObserver: recoge elementos .reveal añadidos después
    // (componentes 'use client' que hidratan tras el primer render)
    const mutationObs = new MutationObserver(observeAll)
    mutationObs.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObs.disconnect()
    }
  }, [])
}
