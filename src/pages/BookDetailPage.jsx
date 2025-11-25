import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import PageSection from '../components/ui/PageSection.jsx'
import Spinner from '../components/ui/Spinner.jsx'
import { useBooks } from '../context/BooksContext.jsx'

export default function BookDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getBookById } = useBooks()
  const [book, setBook] = useState(null)

  useEffect(() => {
    async function load() {
      const data = await getBookById(id)
      if (!data) {
        navigate('/books')
        return
      }
      setBook(data)
    }
    load()
  }, [id, getBookById, navigate])

  if (!book) {
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

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-8">
      <PageSection className="max-w-3xl mx-auto">
      <Card className="p-6 space-y-4">
        <header>
          <h1 className="text-2xl font-semibold mb-1">{book.title}</h1>
          <p className="text-sm text-neutral-600 m-0">por {book.author}</p>
        </header>

        <dl className="text-sm flex flex-col gap-2 m-0">
          <div className="flex justify-between border-b border-dotted border-black/10 pb-1">
            <dt className="font-semibold">Genero</dt>
            <dd>{book.genre}</dd>
          </div>
          <div className="flex justify-between border-b border-dotted border-black/10 pb-1">
            <dt className="font-semibold">Estado</dt>
            <dd>{book.status}</dd>
          </div>
          {book.year ? (
            <div className="flex justify-between border-b border-dotted border-black/10 pb-1">
              <dt className="font-semibold">Anio</dt>
              <dd>{book.year}</dd>
            </div>
          ) : null}
        </dl>

        {book.coverUrl ? (
          <img
            src={book.coverUrl}
            alt={book.title}
            className="w-full max-h-80 object-cover border border-black/10 rounded-lg"
          />
        ) : null}

        <div className="flex gap-2 pt-2">
          <Button onClick={() => navigate(-1)} variant="secondary" fullWidth>
            Volver
          </Button>
          <Button to={`/books/${book.id}/edit`} fullWidth>
            Editar
          </Button>
        </div>
      </Card>
      </PageSection>
    </div>
  )
}
