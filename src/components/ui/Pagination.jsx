import PropTypes from 'prop-types'

export default function Pagination({ currentPage, totalPages, setPage, nextPage, prevPage, firstPage, lastPage }) {
  // Siempre mostrar la paginación, aunque haya una sola página

  // Muestra máximo 5 números, centrando la página actual
  const getPageNumbers = () => {
    const maxNumbers = 5
    let start = Math.max(1, currentPage - 2)
    let end = Math.min(totalPages, start + maxNumbers - 1)
    if (end - start < maxNumbers - 1) start = Math.max(1, end - maxNumbers + 1)
    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  }

  return (
    <nav className="flex flex-wrap justify-center items-center gap-1 mt-6 select-none">
      <button onClick={firstPage} disabled={currentPage === 1} aria-label="Primera página"
        className="px-2 py-1 rounded text-sm font-medium text-neutral-600 hover:bg-blue-100 focus:ring-2 focus:ring-blue-400 disabled:opacity-40">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 16L7 10L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="4" y="4" width="2" height="12" rx="1" fill="currentColor"/>
        </svg>
      </button>
      <button onClick={prevPage} disabled={currentPage === 1} aria-label="Página anterior"
        className="px-2 py-1 rounded text-sm font-medium text-neutral-600 hover:bg-blue-100 focus:ring-2 focus:ring-blue-400 disabled:opacity-40">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 16L7 10L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {getPageNumbers().map((n) => (
        <button
          key={n}
          onClick={() => setPage(n)}
          className={`px-3 py-1 rounded text-sm font-medium ${n === currentPage ? 'bg-blue-600 text-white' : 'text-neutral-700 hover:bg-neutral-200'}`}
        >
          {n}
        </button>
      ))}
      <button onClick={nextPage} disabled={currentPage === totalPages} aria-label="Página siguiente"
        className="px-2 py-1 rounded text-sm font-medium text-neutral-600 hover:bg-blue-100 focus:ring-2 focus:ring-blue-400 disabled:opacity-40">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 16L13 10L7 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button onClick={lastPage} disabled={currentPage === totalPages} aria-label="Última página"
        className="px-2 py-1 rounded text-sm font-medium text-neutral-600 hover:bg-blue-100 focus:ring-2 focus:ring-blue-400 disabled:opacity-40">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 16L13 10L7 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="14" y="4" width="2" height="12" rx="1" fill="currentColor"/>
        </svg>
      </button>
    </nav>
  )
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  firstPage: PropTypes.func.isRequired,
  lastPage: PropTypes.func.isRequired,
}
