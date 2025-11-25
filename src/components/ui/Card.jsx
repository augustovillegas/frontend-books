import PropTypes from 'prop-types'

export default function Card({ children, className = '', as: Component = 'article' }) {
  const classes = `group border border-black/10 rounded-xl p-4 sm:p-5 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md h-full flex flex-col ${className}`.trim()
  return <Component className={classes}>{children}</Component>
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  as: PropTypes.elementType,
}
