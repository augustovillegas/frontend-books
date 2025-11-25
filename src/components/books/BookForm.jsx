import Button from '../ui/Button.jsx'
import FormField from '../ui/FormField.jsx'
import { SelectInput, TextInput } from '../ui/Inputs.jsx'
import Card from '../ui/Card.jsx'
import PropTypes from 'prop-types'
import { useBookForm, defaultBook } from '../../hooks/useBookForm.js'

export default function BookForm({ initialValues = defaultBook, onSubmit }) {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useBookForm({
    initialValues,
    onSubmit,
  })

  return (
    <Card className="max-w-lg w-full mx-auto p-6 hover:translate-y-0 hover:shadow-sm">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FormField label="Titulo *" id="title" helper={touched.title && errors.title}>
        <TextInput
          id="title"
          name="title"
          type="text"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.title && Boolean(errors.title)}
        />
      </FormField>

      <FormField label="Autor/a *" id="author" helper={touched.author && errors.author}>
        <TextInput
          id="author"
          name="author"
          type="text"
          value={values.author}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.author && Boolean(errors.author)}
        />
      </FormField>

      <FormField label="Genero *" id="genre" helper={touched.genre && errors.genre}>
        <TextInput
          id="genre"
          name="genre"
          type="text"
          value={values.genre}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.genre && Boolean(errors.genre)}
        />
      </FormField>

      <FormField label="Estado de lectura" id="status" helper={touched.status && errors.status}>
        <SelectInput
          id="status"
          name="status"
          value={values.status}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.status && Boolean(errors.status)}
        >
          <option value="pendiente">Pendiente</option>
          <option value="leyendo">Leyendo</option>
          <option value="leido">Leido</option>
        </SelectInput>
      </FormField>

      <FormField label="Anio (opcional)" id="year" helper={touched.year && errors.year}>
        <TextInput
          id="year"
          name="year"
          type="number"
          value={values.year}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.year && Boolean(errors.year)}
        />
      </FormField>

      <FormField label="URL de portada (opcional)" id="coverUrl" helper={touched.coverUrl && errors.coverUrl}>
        <TextInput
          id="coverUrl"
          name="coverUrl"
          type="url"
          value={values.coverUrl}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.coverUrl && Boolean(errors.coverUrl)}
        />
      </FormField>

        <Button type="submit" fullWidth>
          Guardar
        </Button>
      </form>
    </Card>
  )
}

BookForm.propTypes = {
  initialValues: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    genre: PropTypes.string,
    status: PropTypes.string,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    coverUrl: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
}
