<div align="center">

# 📚 Biblioteca React

**Aplicación moderna de gestión de libros con React, Vite y Tailwind CSS**

[![React](https://img.shields.io/badge/React-18-61dafb?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646cff?logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![React Router](https://img.shields.io/badge/React_Router-7-ca4245?logo=reactrouter)](https://reactrouter.com)

**🌐 Demo en vivo:** [<!-- Agregar URL de Netlify aquí -->]()

[🚀 Inicio Rápido](#-inicio-rápido) • [📖 Documentación](#-documentación) • [🏗️ Arquitectura](#️-arquitectura) • [🚀 Deployment](#-deployment)

</div>

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Stack Tecnológico](#-stack-tecnológico)
- [Inicio Rápido](#-inicio-rápido)
- [Arquitectura](#️-arquitectura)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Componentes Principales](#-componentes-principales)
- [Validaciones](#-validaciones)
- [API Integration](#-api-integration)
- [Scripts Disponibles](#-scripts-disponibles)
- [Variables de Entorno](#-variables-de-entorno)
- [Deployment](#-deployment)

---

## 🎯 Descripción

**Biblioteca React** es una aplicación web SPA (Single Page Application) para la gestión completa de una biblioteca personal. Permite crear, leer, actualizar y eliminar (CRUD) libros con una interfaz moderna, validaciones en tiempo real y estado de lectura personalizable.

### ✨ Características

✅ **CRUD Completo** - Operaciones create, read, update, delete con API REST  
✅ **Validación en Tiempo Real** - Mensajes de error específicos por campo  
✅ **Estado de Lectura** - Seguimiento de libros (pendiente/leyendo/leído)  
✅ **Confirmaciones** - SweetAlert2 antes de eliminar registros  
✅ **Notificaciones** - Toasts informativos con React Toastify  
✅ **Diseño Responsive** - Grid adaptativo y mobile-first  
✅ **Routing Avanzado** - React Router con rutas protegidas y 404  
✅ **PropTypes** - Validación de props en componentes  
✅ **Context API** - Estado global sin librerías adicionales  
✅ **Loading States** - Spinners durante peticiones HTTP  

---

## 🛠️ Stack Tecnológico

| Tecnología | Propósito |
|------------|-----------|
| **React** | Librería UI con hooks y componentes funcionales |
| **Vite** | Build tool con HMR ultra-rápido |
| **Tailwind CSS** | Framework CSS utility-first |
| **React Router** | Enrutamiento client-side |
| **Axios** | Cliente HTTP para API REST |
| **SweetAlert2** | Modales de confirmación elegantes |
| **React Toastify** | Sistema de notificaciones toast |
| **PropTypes** | Validación de tipos en runtime |

---

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js (versión LTS recomendada) y npm/yarn/pnpm
- Backend REST API con endpoints `/api/books` desplegado y accesible

### Instalación

```bash
# 1. Clonar el repositorio
git clone <repository-url>
cd biblioteca-react

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
# Crear archivo .env en la raíz del proyecto
# Agregar: VITE_API_BASE_URL=<URL_de_tu_API>

# 4. Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible por defecto en el puerto local de Vite

### Build de Producción

```bash
npm run build      # Genera carpeta dist/
npm run preview    # Preview del build en local
```

---

## 🏗️ Arquitectura

### Patrones de Diseño

- **Componente de Presentación/Contenedor**: Separación entre lógica y UI
- **Custom Hooks**: Lógica reutilizable encapsulada (`useBookForm`, `useBooks`)
- **Context API**: Estado global sin prop drilling
- **Atomic Design**: Componentes UI (`Button`, `Card`, `FormField`)

### Flujo de Datos

```
┌─────────────┐
│ BooksContext│ ← Estado global (books, loading, error)
└──────┬──────┘
       │
       ├─→ fetchBooks()      ← GET /api/books
       ├─→ createBook()      ← POST /api/books
       ├─→ updateBook()      ← PUT /api/books/:id
       ├─→ deleteBook()      ← DELETE /api/books/:id
       └─→ getBookById()     ← GET /api/books/:id
```

---

## 📁 Estructura del Proyecto

```
biblioteca-react/
├── public/              # Assets estáticos
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── books/       # BookCard, BookForm
│   │   ├── layout/      # Navbar, Footer
│   │   └── ui/          # Button, Card, FormField, Inputs, StatusBadge, Spinner
│   ├── context/         # BooksContext (estado global)
│   ├── hooks/           # useBookForm (validación de formularios)
│   ├── pages/           # Páginas de rutas
│   │   ├── HomePage.jsx
│   │   ├── BooksListPage.jsx
│   │   ├── BookDetailPage.jsx
│   │   ├── BookCreatePage.jsx
│   │   ├── BookEditPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── router/          # AppRouter (configuración de rutas)
│   ├── services/        # api.js (cliente Axios)
│   ├── App.jsx          # Componente raíz
│   ├── main.jsx         # Entry point
│   └── styles.css       # Imports de Tailwind
├── .env                 # Variables de entorno
├── index.html           # HTML base
├── package.json         # Dependencias y scripts
├── vite.config.js       # Configuración Vite
└── README.md            # Este archivo
```

---

## 🧩 Componentes Principales

### `BooksContext.jsx`

Proveedor de estado global con métodos CRUD:

```javascript
const { 
  books,         // Array de libros
  loading,       // Boolean de carga
  error,         // String de error
  fetchBooks,    // () => Promise<void>
  getBookById,   // (id) => Promise<Book>
  createBook,    // (payload) => Promise<void>
  updateBook,    // (id, payload) => Promise<void>
  deleteBook     // (id) => Promise<void>
} = useBooks()
```

### `useBookForm.js`

Hook personalizado para manejo de formularios con validación:

```javascript
const { 
  values,        // { title, author, genre, year, coverUrl, status }
  errors,        // { title?: string, author?: string, ... }
  touched,       // { title?: boolean, author?: boolean, ... }
  handleChange,  // (e) => void
  handleBlur,    // (e) => void
  handleSubmit   // (e) => void
} = useBookForm({ initialValues, onSubmit })
```

### Componentes UI

| Componente | Props | Descripción |
|------------|-------|-------------|
| `Button` | `variant`, `size`, `to`, `disabled` | Botón con variantes y Link router |
| `Card` | `as`, `className`, `children` | Contenedor flexible con hover |
| `FormField` | `label`, `id`, `helper`, `children` | Campo de formulario con label |
| `TextInput` | `error`, `...inputProps` | Input text con estilos de error |
| `SelectInput` | `error`, `children`, `...selectProps` | Select con estilos de error |
| `StatusBadge` | `status` | Badge de estado (pendiente/leyendo/leído) |
| `Spinner` | `size` | Indicador de carga (sm/md/lg) |

---

## ✅ Validaciones

### Reglas de Validación por Campo

| Campo | Tipo | Validación | Mensaje de Error |
|-------|------|------------|------------------|
| **Titulo** | Texto | Requerido, 2-200 caracteres | "El título es obligatorio" / "El título debe tener entre 2 y 200 caracteres" |
| **Autor/a** | Texto | Requerido, solo letras/espacios/acentos, 2-100 caracteres | "El autor es obligatorio" / "El autor solo puede contener letras" / "El autor debe tener entre 2 y 100 caracteres" |
| **Genero** | Texto | Requerido, solo letras, 2-50 caracteres | "El género es obligatorio" / "El género solo puede contener letras" / "El género debe tener entre 2 y 50 caracteres" |
| **Año** | Número | Solo números, rango válido histórico hasta año actual | "El año debe ser un número válido" / "El año debe estar en un rango válido" |
| **URL Portada** | URL | Formato http/https, máximo 500 caracteres | "La URL debe comenzar con http:// o https://" / "La URL no debe exceder 500 caracteres" |
| **Estado** | Select | Selección requerida | "El estado de lectura es obligatorio" |

### Validación en Tiempo Real

- Validación **onBlur** (al salir del campo)
- Estados `touched` para mostrar errores solo en campos visitados
- Border rojo + mensaje específico en inputs con errores
- Validación completa antes de submit

---

## 🌐 API Integration

### Configuración

La URL base de la API se configura mediante la variable de entorno **`VITE_API_BASE_URL`** en el archivo `.env`:

```env
VITE_API_BASE_URL=<URL_de_tu_backend_API>
```

**Ejemplo**: Si tu backend está desplegado en Render, la URL sería similar a `https://tu-servidor.onrender.com/api`

### Endpoints Requeridos

| Método | Endpoint | Body | Respuesta |
|--------|----------|------|-----------|
| `GET` | `/books` | - | `Book[]` |
| `GET` | `/books/:id` | - | `Book` |
| `POST` | `/books` | `{ title, author, genre, year?, coverUrl?, status }` | `Book` |
| `PUT` | `/books/:id` | `{ title, author, genre, year?, coverUrl?, status }` | `Book` |
| `DELETE` | `/books/:id` | - | `{ message }` |

### Modelo de Datos

```typescript
interface Book {
  _id: string
  title: string
  author: string
  genre: string
  status: 'pendiente' | 'leyendo' | 'leido'
  year?: number
  coverUrl?: string
  createdAt: string
  updatedAt: string
}
```

---

## 📜 Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo en puerto local
npm run build    # Genera build de producción en carpeta dist/
npm run preview  # Preview del build de producción
```

---

## 🔐 Variables de Entorno

Crear archivo `.env` en la raíz del proyecto:

```env
# URL base de la API REST (sin barra final)
VITE_API_BASE_URL=<URL_de_tu_backend>
```

**Variables requeridas:**

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | URL base del backend API REST | `https://tu-backend.onrender.com/api` |

**⚠️ Importante**: 
- Todas las variables deben empezar con `VITE_` para ser accesibles en el cliente
- No incluir barra final `/` en la URL
- Configurar esta variable tanto en desarrollo local como en el servicio de deployment

---

## 🚀 Deployment

Esta aplicación está desplegada en **Netlify**.

### 🌐 Sitio en Producción

**URL:** <!-- Agregar link de Netlify aquí -->

---

### Desplegar en Netlify

#### Opción 1: Desde la interfaz web (Recomendado)

1. Crear cuenta en [Netlify](https://www.netlify.com/)
2. Conectar repositorio de GitHub/GitLab/Bitbucket
3. Configurar el build:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Agregar variable de entorno:
   - **Key:** `VITE_API_BASE_URL`
   - **Value:** URL de tu backend API
5. Clic en "Deploy site"

#### Opción 2: Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login en Netlify
netlify login

# Deploy inicial
netlify init

# Deploy de producción
netlify deploy --prod
```

### Configuración Netlify

Crear archivo `netlify.toml` en la raíz del proyecto:

```toml
[build]
  command = "npm run build"
  publish = "dist"

# Redirección para SPA (manejo de rutas client-side)
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Variables de Entorno en Netlify

Configurar en **Site settings → Environment variables**:

| Key | Value |
|-----|-------|
| `VITE_API_BASE_URL` | URL completa de tu backend API |

**Nota**: Después de agregar/modificar variables de entorno, redeploy el sitio para aplicar los cambios.

---

### Otros Servicios de Deployment

<details>
<summary><b>Vercel</b></summary>

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

**Configuración:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Environment Variables: `VITE_API_BASE_URL`

</details>

<details>
<summary><b>GitHub Pages</b></summary>

Requiere configuración adicional en `vite.config.js` para rutas base. No recomendado para SPAs con React Router.

</details>

---

## 📚 Guías de Uso

### Crear un Libro

1. Navegar a `/books/create`
2. Completar formulario (título, autor, género son obligatorios)
3. Seleccionar estado de lectura
4. Añadir año y URL de portada (opcional)
5. Clic en "Guardar Libro"

### Editar un Libro

1. Desde `/books`, clic en "Editar" en la card del libro
2. Modificar campos deseados
3. Clic en "Actualizar Libro"

### Eliminar un Libro

1. Desde `/books`, clic en "Eliminar" en la card del libro
2. Confirmar en modal de SweetAlert2
3. Libro eliminado + toast de confirmación

---

## 🎨 Personalización

### Modificar Colores

Tailwind CSS 4 usa variables CSS. Editar `src/styles.css`:

```css
@theme {
  --color-primary: #000000;
  --color-secondary: #ffffff;
  --radius-lg: 0.75rem;
}
```

### Añadir Nuevos Campos

1. Actualizar modelo en backend
2. Modificar `defaultBook` en `BookForm.jsx`
3. Añadir validación en `useBookForm.js` → `validateField()`
4. Añadir campo en JSX de `BookForm.jsx`

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crear feature branch (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push al branch (`git push origin feature/nueva-funcionalidad`)
5. Abrir Pull Request

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

<div align="center">

**Desarrollado con ❤️ usando React + Vite + Tailwind CSS**

[⬆ Volver arriba](#-biblioteca-react)

</div>
