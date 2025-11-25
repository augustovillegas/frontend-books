import PageSection from '../components/ui/PageSection.jsx'
import BookForm from '../components/books/BookForm.jsx'
import { useBooks } from '../context/BooksContext.jsx'
import { useNavigate } from 'react-router-dom'

export default function BookCreatePage() {
  const { createBook } = useBooks()
  const navigate = useNavigate()

  const handleCreate = async (values) => {
    await createBook(values)
    navigate('/books')
  }

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-8">
      <PageSection>
      <h1 className="text-2xl font-semibold m-0">Agregar libro</h1>
      <BookForm onSubmit={handleCreate} />
      </PageSection>
    </div>
  )
}
