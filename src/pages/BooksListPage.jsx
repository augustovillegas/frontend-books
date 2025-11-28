import BookCard from '../components/books/BookCard.jsx'
import Button from '../components/ui/Button.jsx'
import PageSection from '../components/ui/PageSection.jsx'
import Spinner from '../components/ui/Spinner.jsx'
import { useBooks } from '../context/BooksContext.jsx'
import usePagination from '../hooks/usePagination.js'
import Pagination from '../components/ui/Pagination.jsx'

export default function BooksListPage() {
  const { books, loading, error } = useBooks()

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <PageSection className="min-h-[50vh] flex flex-col items-center justify-center gap-4">
          <Spinner size="lg" />
          <div className="text-center">
            <p className="text-base font-medium text-neutral-800 mb-1">Espere, conectándose al servidor</p>
            <p className="text-sm text-neutral-600">El servidor puede tardar unos segundos en activarse...</p>
          </div>
        </PageSection>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <PageSection>
          <p className="text-sm text-red-700">{error}</p>
        </PageSection>
      </div>
    )
  }

  const pagination = usePagination(books, 5, 3)

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-8">
      <PageSection>
        <header className="flex flex-wrap items-center gap-3 justify-between">
          <h1 className="text-2xl font-semibold m-0">Mis libros</h1>
          <Button to="/books/create" className="whitespace-nowrap">
            + Nuevo libro
          </Button>
        </header>

        {books.length === 0 ? (
          <p className="text-sm text-neutral-600">
            Todavia no cargaste libros. Empeza creando uno nuevo.
          </p>
        ) : (
          <>
            <div className="grid gap-5 sm:gap-6 xl:gap-7 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] justify-center">
              {pagination.paginatedItems.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
            <Pagination
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
              setPage={pagination.setPage}
              nextPage={pagination.nextPage}
              prevPage={pagination.prevPage}
              firstPage={pagination.firstPage}
              lastPage={pagination.lastPage}
            />
          </>
        )}
      </PageSection>
    </div>
  )
}
