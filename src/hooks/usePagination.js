import { useState, useEffect } from 'react'

// Devuelve: { currentPage, totalPages, pageSize, setPage, nextPage, prevPage, firstPage, lastPage, paginatedItems }
export default function usePagination(items, desktopSize = 5, mobileSize = 3) {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(desktopSize)

  useEffect(() => {
    // Detecta ancho de pantalla y ajusta pageSize
    function handleResize() {
      setPageSize(window.innerWidth < 640 ? mobileSize : desktopSize)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [desktopSize, mobileSize])

  const totalPages = Math.max(1, Math.ceil(items.length / pageSize))

  useEffect(() => {
    // Si la página actual queda fuera de rango al cambiar pageSize/items
    if (currentPage > totalPages) setCurrentPage(totalPages)
  }, [totalPages, currentPage])

  const paginatedItems = items.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  return {
    currentPage,
    totalPages,
    pageSize,
    setPage: setCurrentPage,
    nextPage: () => setCurrentPage((p) => Math.min(p + 1, totalPages)),
    prevPage: () => setCurrentPage((p) => Math.max(p - 1, 1)),
    firstPage: () => setCurrentPage(1),
    lastPage: () => setCurrentPage(totalPages),
    paginatedItems,
  }
}
