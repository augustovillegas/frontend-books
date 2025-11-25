import Swal from 'sweetalert2'
import PropTypes from 'prop-types'
import Button from '../ui/Button.jsx'
import Card from '../ui/Card.jsx'
import StatusBadge from '../ui/StatusBadge.jsx'
import { useBooks } from '../../context/BooksContext.jsx'

export default function BookCard({ book }) {
  const { deleteBook } = useBooks()

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: 'Eliminar libro?',
      text: 'Esta accion no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#000000',
      cancelButtonColor: '#6b7280',
    })

    if (result.isConfirmed) {
      await deleteBook(book.id)
    }
  }

  return (
    <Card className="focus-within:shadow-md">
      <div className="flex flex-col gap-2 flex-1">
        <header className="flex justify-between items-start gap-3">
          <div className="min-w-0">
            <h2 className="text-lg font-semibold m-0 line-clamp-2 uppercase" title={book.title}>
              {book.title}
            </h2>
            <p className="text-sm text-neutral-600 m-0 truncate" title={book.author}>
              por {book.author}
            </p>
          </div>
          <StatusBadge status={book.status} />
        </header>

        <p className="text-sm text-neutral-700 m-0 line-clamp-2" title={book.genre}>
          {book.genre}
        </p>
      </div>
      <footer className="flex flex-col sm:flex-row gap-1.5 pt-3 mt-2">
        <Button to={`/books/${book.id}`} variant="primary" size="sm" className="w-full sm:flex-1">
          Ver detalle
        </Button>
        <Button to={`/books/${book.id}/edit`} variant="soft" size="sm" className="w-full sm:flex-1">
          Editar
        </Button>
        <Button onClick={handleDelete} variant="destructive" size="sm" className="w-full sm:flex-1">
          Eliminar
        </Button>
      </footer>
    </Card>
  )
}

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    coverUrl: PropTypes.string,
  }).isRequired,
}
