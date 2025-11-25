import PropTypes from 'prop-types'

const base = 'inline-flex items-center rounded-full px-2 py-1 text-xs font-medium tracking-wide select-none'

const variants = {
  pendiente: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
  leyendo: 'bg-blue-100 text-blue-800 border border-blue-300',
  leido: 'bg-green-100 text-green-800 border border-green-300',
  default: 'bg-black/5 text-black border border-black/10',
}

export default function StatusBadge({ status, className = '' }) {
  const key = (status || '').toLowerCase()
  const styles = variants[key] || variants.default
  return <span className={`${base} ${styles} ${className}`.trim()}>{status}</span>
}

StatusBadge.propTypes = {
  status: PropTypes.string.isRequired,
  className: PropTypes.string,
}