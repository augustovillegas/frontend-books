import linkedin from './linkedin.svg'

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-neutral-600 box-border">
        <span className="text-black">Biblioteca React</span>
        <a
          href="https://www.linkedin.com/in/augustovillegas/"
          target="_blank"
          rel="noreferrer noopener"
          className="group inline-flex items-center gap-2 text-black no-underline border border-black/10 rounded-lg px-3 py-2 bg-white transition-all hover:-translate-y-0.5 hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          <img src={linkedin} alt="LinkedIn" className="w-5 h-5 brightness-0 group-hover:brightness-0 group-hover:invert transition-all" />
          Dev. Augusto Villegas
        </a>
      </div>
    </footer>
  )
}
