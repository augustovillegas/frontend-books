import { useState } from 'react'
import { toast } from 'react-toastify'

export const defaultBook = {
  title: '',
  author: '',
  genre: '',
  status: 'pendiente',
  year: '',
  coverUrl: '',
}

const validateField = (name, value) => {
  switch (name) {
    case 'title':
      if (!value.trim()) return 'El título es obligatorio'
      if (value.trim().length < 2) return 'El título debe tener al menos 2 caracteres'
      if (value.trim().length > 200) return 'El título no puede exceder 200 caracteres'
      return ''
    
    case 'author':
      if (!value.trim()) return 'El autor es obligatorio'
      if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s.'-]+$/.test(value.trim())) return 'El autor solo puede contener letras, espacios y caracteres especiales básicos'
      if (value.trim().length < 2) return 'El autor debe tener al menos 2 caracteres'
      if (value.trim().length > 100) return 'El autor no puede exceder 100 caracteres'
      return ''
    
    case 'genre':
      if (!value.trim()) return 'El género es obligatorio'
      if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s,/-]+$/.test(value.trim())) return 'El género solo puede contener letras y caracteres básicos'
      if (value.trim().length < 2) return 'El género debe tener al menos 2 caracteres'
      if (value.trim().length > 50) return 'El género no puede exceder 50 caracteres'
      return ''
    
    case 'year':
      if (value && !/^\d+$/.test(value)) return 'El año solo puede contener números'
      const yearNum = parseInt(value)
      const currentYear = new Date().getFullYear()
      if (value && (yearNum < 1000 || yearNum > currentYear)) return `El año debe estar entre 1000 y ${currentYear}`
      return ''
    
    case 'coverUrl':
      if (value && !/^https?:\/\/.+/.test(value.trim())) return 'La URL debe comenzar con http:// o https://'
      if (value && value.trim().length > 500) return 'La URL no puede exceder 500 caracteres'
      return ''
    
    case 'status':
      if (!value) return 'Debes seleccionar un estado de lectura'
      return ''
    
    default:
      return ''
  }
}

export function useBookForm({ initialValues = defaultBook, onSubmit }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  const handleBlur = (event) => {
    const { name, value } = event.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const error = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    const newErrors = {}
    Object.keys(values).forEach((key) => {
      const error = validateField(key, values[key])
      if (error) newErrors[key] = error
    })

    setErrors(newErrors)
    setTouched(Object.keys(values).reduce((acc, key) => ({ ...acc, [key]: true }), {}))

    if (Object.keys(newErrors).some(key => newErrors[key])) {
      toast.error('Por favor corrige los errores en el formulario')
      return
    }

    onSubmit(values)
  }

  return { values, errors, touched, handleChange, handleBlur, handleSubmit }
}
