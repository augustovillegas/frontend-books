import PropTypes from 'prop-types'

export default function Spinner({ size = 'md', className = '' }) {
  const sizes = {
    sm: 'w-6 h-6 border-2',
    md: 'w-10 h-10 border-3',
    lg: 'w-16 h-16 border-4',
  }

  const sizeClass = sizes[size] || sizes.md

  return (
    <div
      className={`${sizeClass} border-black/20 border-t-black rounded-full animate-spin ${className}`}
      role="status"
      aria-label="Cargando"
    />
  )
}

Spinner.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
}
