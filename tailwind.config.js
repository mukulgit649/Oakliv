/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Oakliv Premium Brand Colors - Client Requested Palette
        cork: {
          50: '#FAFAFA', // Light Off-White
          100: '#F8F7F3', // Off-White
          200: '#FFDEA6', // Pale Gold/Cream
          300: '#AE7747', // Medium Brown
          400: '#A25D21', // Dark Brown
          500: '#A25D21', // Primary - Dark Brown
          600: '#8B4F1C',
          700: '#744118',
          800: '#5D3314',
          900: '#462510', // Darkest Brown
        },
        gold: {
          50: '#FFDEA6', // Pale Gold/Cream
          100: '#FFE5B8',
          200: '#FFECCA',
          300: '#FFF2DC',
          400: '#FFF9EE',
          500: '#FFDEA6', // Accent - Pale Gold
          600: '#E6C895',
          700: '#CCB284',
          800: '#B39C73',
          900: '#998662',
        },
        eco: {
          50: '#f0f9f4',
          100: '#dcf2e4',
          200: '#bce5cd',
          300: '#8dd1a8',
          400: '#56b37c',
          500: '#2E7D32', // Success/Highlight - Sustainability Green
          600: '#256f29',
          700: '#1d5c20',
          800: '#154a18',
          900: '#0d3810',
        },
        cream: {
          50: '#FAFAFA', // Light Off-White
          100: '#F8F7F3', // Off-White
          200: '#FFDEA6', // Pale Gold/Cream
          300: '#AE7747', // Medium Brown
          400: '#A25D21', // Dark Brown
          500: '#A25D21',
          600: '#8B4F1C',
          700: '#744118',
          800: '#5D3314',
          900: '#462510',
        },
        luxury: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#1C1C1C', // Background Dark - Luxury Black
        },
        premium: {
          black: '#1C1C1C',
          white: '#FAF9F6',
          gray: '#6d6d6d',
          'light-gray': '#f5f3f0',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'display': ['Cormorant Garamond', 'serif'],
        'elegant': ['EB Garamond', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-premium': 'float-premium 6s ease-in-out infinite',
        'pulse-premium': 'pulse-premium 3s ease-in-out infinite',
        'glow-premium': 'glow-premium 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
        'bounce-premium': 'bounce-premium 2s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-premium': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(-5px) rotate(-1deg)' },
        },
        'pulse-premium': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
        'glow-premium': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 215, 0, 0.6)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'bounce-premium': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'oak-pattern': "url('/patterns/oak-pattern.svg')",
        'cork-texture': "url('/textures/cork-texture.jpg')",
        'premium-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'premium-conic': 'conic-gradient(from 0deg at 50% 50%, var(--tw-gradient-stops))',
        'luxury-gradient': 'linear-gradient(135deg, rgba(250, 249, 246, 0.9) 0%, rgba(255, 215, 0, 0.1) 50%, rgba(78, 52, 46, 0.05) 100%)',
        'cork-gradient': 'linear-gradient(135deg, rgba(78, 52, 46, 0.1) 0%, rgba(255, 215, 0, 0.05) 100%)',
        'gold-gradient': 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(78, 52, 46, 0.05) 100%)',
      },
      boxShadow: {
        'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'luxury': '0 35px 60px -12px rgba(0, 0, 0, 0.3)',
        'soft': '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
        'ultra': '0 50px 100px -20px rgba(0, 0, 0, 0.4)',
        'gold': '0 20px 40px -12px rgba(255, 215, 0, 0.3)',
        'cork': '0 15px 35px -8px rgba(78, 52, 46, 0.25)',
        'eco': '0 12px 30px -8px rgba(46, 125, 50, 0.2)',
        'inner-premium': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'glow-gold': '0 0 30px rgba(255, 215, 0, 0.4)',
        'glow-cork': '0 0 30px rgba(78, 52, 46, 0.3)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
