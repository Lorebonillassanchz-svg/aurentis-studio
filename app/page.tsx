import Hero from './components/Hero'
import BenefitsBar from './components/BenefitsBar'
import VisualBand from './components/VisualBand'
import Servicios from './components/Servicios'
import SplitSection from './components/SplitSection'
import Proceso from './components/Proceso'
import QueObtienes from './components/QueObtienes'
import AuditoriaForm from './components/AuditoriaForm'

const gradSpan = {
  background: 'linear-gradient(100deg, #3B82F6, #818CF8)',
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent' as const,
  backgroundClip: 'text' as const,
}

export default function Home() {
  return (
    <>
      <Hero />
      <BenefitsBar />
      <VisualBand
        imageSrc="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1400&q=80&fit=crop"
        title={
          <>
            Diseño web que trabaja{' '}
            <span style={gradSpan}>por tu negocio</span>
          </>
        }
        subtitle="No solo una presencia visual — una herramienta que comunica, capta y convierte."
        height={320}
        eager
      />
      <Servicios />
      <SplitSection />
      <Proceso />
      <QueObtienes />
      <AuditoriaForm />
    </>
  )
}
