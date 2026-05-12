import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meta Ads y Google Ads | Publicidad Digital para Negocios | Aurentis Studio',
  description: 'Gestión profesional de campañas de Meta Ads y Google Ads para negocios que quieren crecer. Publicidad en Instagram, Facebook y Google en Córdoba, Granada y toda España.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
