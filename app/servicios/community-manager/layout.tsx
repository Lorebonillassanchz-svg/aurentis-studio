import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community Manager Profesional | Gestión de Redes Sociales | Aurentis Studio',
  description: 'Gestión profesional de redes sociales para negocios y creadores de contenido. Estrategia de contenido, edición de vídeo para Reels y TikTok, y crecimiento de comunidad en Córdoba, Granada y toda España.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
