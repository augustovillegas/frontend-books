import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Button({
  children,
  to,
  onClick,
  type = 'button',
  fullWidth = false,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-lg border transition-all duration-200 no-underline disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white active:translate-y-px'
  const sizes = {
    sm: 'text-xs min-h-[36px] px-3 py-1.5',
    md: 'text-sm min-h-[44px] px-3.5 py-2.5',
    lg: 'text-base min-h-[52px] px-4 py-3',
  }
  const variants = {
    primary:
      'bg-black text-white border-black hover:shadow-md hover:-translate-y-0.5 focus-visible:shadow-lg',
    secondary:
      'bg-white text-black border-black/20 font-medium hover:bg-black hover:text-white hover:shadow-md hover:-translate-y-0.5',
    soft:
      'bg-neutral-100 text-black border-neutral-200 hover:bg-neutral-200 hover:shadow-sm',
    destructive:
      'bg-red-600 text-white border-red-600 hover:bg-red-700 hover:shadow-md hover:-translate-y-0.5 focus-visible:shadow-lg',
  }
  const width = fullWidth ? 'w-full' : ''
  const sizeClasses = sizes[size] || sizes.md
  const classes = `${base} ${sizeClasses} ${variants[variant] || variants.primary} ${width} ${className}`.trim()

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault()
            e.stopPropagation()
            return
          }
          if (onClick) onClick(e)
        }}
        {...props}
      >
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  fullWidth: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'soft', 'destructive']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
}
