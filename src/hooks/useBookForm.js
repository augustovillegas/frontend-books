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

const normalizeAuthor = (raw) => {
  return raw
    .toUpperCase()
    .trim()
    .replace(/\s+/g, ' ') 
    .replace(/,\s*/g, ', ') 
    .replace(/,{2,}/g, ',') 
    .replace(/^,|,$/g, '')
}

const validateField = (name, value) => {
  switch (name) {
    case 'title':
      if (!value.trim()) return 'El título es obligatorio'
      if (value.trim().length < 2) return 'El título debe tener al menos 2 caracteres'
      if (value.trim().length > 200) return 'El título no puede exceder 200 caracteres'
      return ''
    
    case 'author':
      const normalized = normalizeAuthor(value)
      if (!normalized) return 'El autor es obligatorio'      
      if (!/^[A-ZÁÉÍÓÚÜÑ ,.'\-]+$/.test(normalized)) return 'Solo letras, espacios, comas y puntuación básica (.\'-)' 
      if (normalized.length < 3) return 'El autor debe tener al menos 3 caracteres'
      if (normalized.length > 120) return 'El autor no puede exceder 120 caracteres'
      const parts = normalized.split(',').map(p => p.trim()).filter(p => p)
      if (parts.length === 0) return 'Debes ingresar al menos un autor'
      if (parts.some(p => p.length < 2)) return 'Cada autor debe tener al menos 2 caracteres'
      if (parts.length > 10) return 'Máximo 10 autores'
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
   
    const nextValue = name === 'author' ? normalizeAuthor(value) : value
    setValues((prev) => ({ ...prev, [name]: nextValue }))
    
    if (touched[name]) {
      const error = validateField(name, nextValue)
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  const handleBlur = (event) => {
    const { name, value } = event.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const finalValue = name === 'author' ? normalizeAuthor(value) : value
    if (finalValue !== values[name]) {
      setValues((prev) => ({ ...prev, [name]: finalValue }))
    }
    const error = validateField(name, finalValue)
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
