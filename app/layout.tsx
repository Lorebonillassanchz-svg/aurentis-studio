import type { Metadata } from 'next'
import { Outfit, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollRevealInit from './components/ScrollRevealInit'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aurentis Studio — Presencia digital estratégica',
  description: 'Diseño web estratégico, landing pages y sistemas de captación para negocios que quieren verse profesionales y convertir mejor.',
  keywords: ['diseño web', 'presencia digital', 'automatización comercial', 'marketing digital'],
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: '/logo.png',
    shortcut: '/logo.png',
  },
  openGraph: {
    title: 'Aurentis Studio',
    description: 'Presencia digital estratégica',
    siteName: 'Aurentis Studio',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${outfit.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <ScrollRevealInit />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
