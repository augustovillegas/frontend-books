import Button from '../components/ui/Button.jsx'
import PageSection from '../components/ui/PageSection.jsx'

export default function NotFoundPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-8">
      <PageSection className="min-h-[60vh] items-center justify-center text-center">
      <h1 className="text-4xl font-semibold m-0">404</h1>
      <p className="text-sm text-neutral-600 m-0">
        La pagina que intentas visitar no existe.
      </p>
      <Button to="/">Volver al inicio</Button>
      </PageSection>
    </div>
  )
}
