import Button from '../components/ui/Button.jsx'
import PageSection from '../components/ui/PageSection.jsx'

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Image Focused */}
      <div className="relative overflow-hidden mb-12">
        {/* Background Image */}
        <div className="relative h-[400px] md:h-[450px] lg:h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1651157078535-131ed67fcc57?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Colección de libros"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-8 md:px-12 lg:px-16">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white m-0 mb-6">
                Biblioteca Digital
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
                Gestiona tu colección personal de libros de forma simple y elegante. 
                Crea, edita, organiza y lleva el control de tus lecturas.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  to="/books"
                  size="lg"
                  className="shadow-lg hover:shadow-[0_6px_32px_0_rgba(255,255,255,0.45)] ring-2 ring-white/70 hover:scale-102 transition-all duration-300 border-2 border-white"
                >
                  Ver mis libros
                </Button>
                <Button to="/books/create" variant="soft" size="lg" className="shadow-lg bg-white hover:bg-neutral-100">
                  Agregar libro
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
        <PageSection className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4">
            <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-black/5">
              <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
                <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
                <line x1="6" y1="2" x2="6" y2="4"></line>
                <line x1="10" y1="2" x2="10" y2="4"></line>
                <line x1="14" y1="2" x2="14" y2="4"></line>
              </svg>
            </div>
            <p className="text-sm text-neutral-700 leading-relaxed text-left m-0">
              Esta aplicación permite gestionar una pequeña colección de libros:
              crear, listar, editar y eliminar registros almacenados en una API
              remota. Forma parte del Trabajo Práctico 5.
            </p>
          </div>
        </PageSection>
      </div>
    </>
  )
}
