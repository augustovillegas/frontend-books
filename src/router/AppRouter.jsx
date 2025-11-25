import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/layout/Navbar.jsx'
import HomePage from '../pages/HomePage.jsx'
import BooksListPage from '../pages/BooksListPage.jsx'
import BookDetailPage from '../pages/BookDetailPage.jsx'
import BookCreatePage from '../pages/BookCreatePage.jsx'
import BookEditPage from '../pages/BookEditPage.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'
import Footer from '../components/layout/Footer.jsx'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-100 text-black font-sans flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<BooksListPage />} />
            <Route path="/books/create" element={<BookCreatePage />} />
            <Route path="/books/:id" element={<BookDetailPage />} />
            <Route path="/books/:id/edit" element={<BookEditPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
