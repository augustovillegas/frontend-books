import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../services/api'

const BooksContext = createContext()

export function useBooks() {
  return useContext(BooksContext)
}

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchBooks = async () => {
    try {
      setLoading(true)
      const { data } = await api.get('/books')
      setBooks(data)
      setError(null)
    } catch (err) {
      console.error(err)
      setError('Error al cargar libros')
      toast.error('Error al cargar libros')
    } finally {
      setLoading(false)
    }
  }

  const getBookById = async (id) => {
    try {
      const { data } = await api.get(`/books/${id}`)
      return data
    } catch (err) {
      console.error(err)
      toast.error('No se pudo obtener el libro')
      return null
    }
  }

  const createBook = async (payload) => {
    try {
      const { data } = await api.post('/books', payload)
      setBooks((prev) => [...prev, data])
      toast.success('Libro creado correctamente')
    } catch (err) {
      console.error(err)
      toast.error('Error al crear el libro')
      throw err
    }
  }

  const updateBook = async (id, payload) => {
    try {
      const { data } = await api.put(`/books/${id}`, payload)
      setBooks((prev) => prev.map((book) => (book.id === id ? data : book)))
      toast.success('Libro actualizado correctamente')
    } catch (err) {
      console.error(err)
      toast.error('Error al actualizar el libro')
      throw err
    }
  }

  const deleteBook = async (id) => {
    try {
      await api.delete(`/books/${id}`)
      setBooks((prev) => prev.filter((book) => book.id !== id))
      toast.success('Libro eliminado')
    } catch (err) {
      console.error(err)
      toast.error('Error al eliminar el libro')
      throw err
    }
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  const value = {
    books,
    loading,
    error,
    fetchBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
  }

  return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
}
