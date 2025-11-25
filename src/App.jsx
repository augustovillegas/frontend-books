import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AppRouter from './router/AppRouter.jsx'

export default function App() {
  return (
    <>
      <AppRouter />
      <ToastContainer position="top-right" autoClose={2500} />
    </>
  )
}
