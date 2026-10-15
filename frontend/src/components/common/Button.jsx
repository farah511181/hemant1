﻿import { Link } from 'react-router-dom'

export default function Button({
  children,
  to,
  href,
  variant = 'outline-light',
  className = '',
  onClick,
  type = 'button',
}) {
const base =
    'inline-flex items-center justify-center gap-3 font-sans text-[11px] uppercase tracking-[0.3em] transition-all duration-500'

const variants = {
    'outline-light':
      'border border-ivory/60 text-ivory px-6 py-3 hover:border-ivory hover:bg-ivory hover:text-espresso',
    'outline-dark':
      'border border-taupe/50 text-espresso px-6 py-3 hover:border-mocha hover:bg-mocha hover:text-ivory',
    solid: 'bg-mocha text-ivory px-6 py-3 hover:bg-walnut',
    'solid-light': 'bg-ivory text-espresso px-6 py-3 hover:bg-nude',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
