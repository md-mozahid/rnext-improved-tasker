export default function Button({ children, type, className, ...rest }) {
  return (
    <>
      <button
        className={`rounded-md px-3.5 py-2.5 text-sm text-white font-semibold transition-all ${className}`}
        type={type === 'submit' ? 'submit' : 'button'}
        {...rest}>
        {children}
      </button>
    </>
  )
}
