/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', /* subtle-beige */
        input: 'var(--color-input)', /* white */
        ring: 'var(--color-ring)', /* warm-terracotta */
        background: 'var(--color-background)', /* warm-white */
        foreground: 'var(--color-foreground)', /* warm-charcoal */
        primary: {
          DEFAULT: 'var(--color-primary)', /* warm-terracotta */
          foreground: 'var(--color-primary-foreground)' /* white */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* sage-green */
          foreground: 'var(--color-secondary-foreground)' /* white */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* clear-red */
          foreground: 'var(--color-destructive-foreground)' /* white */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* subtle-beige */
          foreground: 'var(--color-muted-foreground)' /* medium-gray */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* coral */
          foreground: 'var(--color-accent-foreground)' /* warm-charcoal */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* white */
          foreground: 'var(--color-popover-foreground)' /* warm-charcoal */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* subtle-beige */
          foreground: 'var(--color-card-foreground)' /* warm-charcoal */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* muted-teal */
          foreground: 'var(--color-success-foreground)' /* white */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* warm-orange */
          foreground: 'var(--color-warning-foreground)' /* white */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* clear-red */
          foreground: 'var(--color-error-foreground)' /* white */
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        accent: ['Caveat', 'cursive']
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
        '6xl': ['3.75rem', { lineHeight: '1' }]
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      borderRadius: {
        'organic': '40px 60px 80px 20px',
        'lg': '12px',
        'md': '8px',
        'sm': '4px'
      },
      boxShadow: {
        'warm': '0 4px 20px rgba(212, 112, 74, 0.1)',
        'warm-lg': '0 8px 30px rgba(212, 112, 74, 0.15)',
        'warm-xl': '0 12px 40px rgba(212, 112, 74, 0.2)'
      },
      animation: {
        'pulse-warm': 'pulse-warm 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slide-up 0.8s ease-out',
        'fade-in': 'fade-in 0.5s ease-out'
      },
      keyframes: {
        'pulse-warm': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      transitionTimingFunction: {
        'warm': 'cubic-bezier(0.4, 0, 0.2, 1)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animate')
  ],
}