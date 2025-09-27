'use client'

import { ReactNode } from 'react'

type CardVariant = 'elevated' | 'outlined' | 'soft'

type CardProps = {
  children: ReactNode
  variant?: CardVariant
  className?: string
  padded?: boolean
  interactive?: boolean
}

const variantClasses: Record<CardVariant, string> = {
  elevated: 'bg-white shadow-lg border border-cork-100',
  outlined: 'bg-white border border-cork-200',
  soft: 'bg-cream-50 border border-cork-100'
}

export const Card = ({
  children,
  variant = 'elevated',
  className = '',
  padded = true,
  interactive = true
}: CardProps) => {
  const padding = padded ? 'p-6' : ''
  const hover = interactive ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1' : ''
  const classes = `${variantClasses[variant]} rounded-2xl ${padding} ${hover} ${className}`.trim()

  return (
    <div className={classes}>
      {children}
    </div>
  )
}


