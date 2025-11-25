import PropTypes from 'prop-types'

export default function PageSection({ children, className = '' }) {
  const classes = `flex flex-col gap-4 ${className}`.trim()
  return <section className={classes}>{children}</section>
}

PageSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
