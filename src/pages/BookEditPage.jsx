import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BookForm from '../components/books/BookForm.jsx'
import PageSection from '../components/ui/PageSection.jsx'
import Spinner from '../components/ui/Spinner.jsx'
import { useBooks } from '../context/BooksContext.jsx'

export default function BookEditPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getBookById, updateBook } = useBooks()
  const [initialValues, setInitialValues] = useState(null)

  useEffect(() => {
    async function load() {
      const data = await getBookById(id)
      if (!data) {
        navigate('/books')
        return
      }
      setInitialValues(data)
    }
    load()
  }, [id, getBookById, navigate])

  const handleUpdate = async (values) => {
    await updateBook(id, values)
    navigate('/books')
  }

  if (!initialValues) {
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
      <PageSection>
      <h1 className="text-2xl font-semibold m-0">Editar libro</h1>
      <BookForm initialValues={initialValues} onSubmit={handleUpdate} />
      </PageSection>
    </div>
  )
}
