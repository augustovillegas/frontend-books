import PropTypes from 'prop-types'

export default function Card({ children, className = '', as: Component = 'article' }) {
  // Agregamos sombra suave en hover
  const classes = `group border border-black/10 rounded-xl p-4 sm:p-5 bg-white shadow-sm hover:shadow-lg/30 transition-shadow duration-200 h-full flex flex-col ${className}`.trim()
  return <Component className={classes}>{children}</Component>
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  as: PropTypes.elementType,
}
