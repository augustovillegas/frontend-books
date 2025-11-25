import PropTypes from 'prop-types'

export default function FormField({ label, id, children, helper }) {
  const hasError = Boolean(helper)
  
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold" htmlFor={id}>
        {label}
      </label>
      {children}
      {helper ? (
        <p className={`text-xs m-0 ${hasError ? 'text-red-600' : 'text-neutral-500'}`}>{helper}</p>
      ) : null}
    </div>
  )
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  helper: PropTypes.node,
}
