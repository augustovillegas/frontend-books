import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const baseLink =
    'px-3 py-2 text-sm border rounded-full no-underline transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white'
  const inactiveLink = 'bg-white text-black border-black/10 hover:bg-black hover:text-white'
  const activeLink = 'bg-black text-white border-black shadow-md'

  return (
    <header className="border-b border-black/10 bg-white">
      <nav className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-y-2 px-4 md:px-6 lg:px-8 py-3 box-border">
        <Link
          to="/"
          className="font-semibold tracking-tight text-lg text-black no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
        >
          Biblioteca Digital
        </Link>
        <div className="flex items-center gap-2 flex-wrap text-sm">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : inactiveLink}`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : inactiveLink}`
            }
          >
            Libros
          </NavLink>
          <NavLink
            to="/books/create"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : inactiveLink}`
            }
          >
            + Nuevo libro
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
