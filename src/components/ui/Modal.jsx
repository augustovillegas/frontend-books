import PropTypes from 'prop-types'

export default function Modal({ open, onClose, children }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative bg-white rounded-lg shadow-lg max-w-full max-h-full p-0">
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-neutral-200 text-neutral-700 shadow"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div className="p-0 m-0 flex items-center justify-center max-w-[90vw] max-h-[80vh]">
          {children}
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}
