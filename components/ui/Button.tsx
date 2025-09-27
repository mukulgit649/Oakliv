'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

type BaseProps = {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  className?: string
}

type ButtonProps = BaseProps & {
  href?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-cork-600 hover:bg-cork-700 text-white shadow-lg hover:shadow-xl',
  secondary: 'bg-white/90 text-cork-800 border border-white/20 hover:bg-white',
  ghost: 'bg-transparent text-cork-700 hover:bg-cork-50 border border-cork-200'
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-md',
  md: 'px-6 py-3 text-base rounded-lg',
  lg: 'px-8 py-4 text-base rounded-lg'
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  href,
  type = 'button',
  onClick
}: ButtonProps) => {
  const base = `${variantClasses[variant]} ${sizeClasses[size]} font-semibold transition-all duration-300 flex items-center justify-center ${fullWidth ? 'w-full' : ''}`.trim()
  const classes = `${base} ${className}`.trim()

  const content = (
    <motion.span
      className="flex items-center"
      whileHover={{ y: -0.5 }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.span>
  )

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick as any}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {content}
    </button>
  )
}


