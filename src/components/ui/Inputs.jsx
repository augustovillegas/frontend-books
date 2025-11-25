import PropTypes from 'prop-types'

const baseInput =
  'w-full border rounded-lg px-3 py-2 min-h-[44px] text-sm bg-white text-black outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed'

const validInput = 'border-black/20 focus:border-black focus-visible:ring-black'
const errorInput = 'border-red-500 focus:border-red-600 focus-visible:ring-red-500'

export function TextInput({ className = '', error, ...props }) {
  const classes = `${baseInput} ${error ? errorInput : validInput} ${className}`.trim()
  return <input {...props} className={classes} />
}

export function SelectInput({ className = '', error, children, ...props }) {
  const classes = `${baseInput} ${error ? errorInput : validInput} ${className}`.trim()
  return (
    <select {...props} className={classes}>
      {children}
    </select>
  )
}

TextInput.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
}

SelectInput.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  children: PropTypes.node,
}
