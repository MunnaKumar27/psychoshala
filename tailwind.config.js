/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B7355',
          50: '#F5F2EE',
          100: '#EBE3D7',
          200: '#D7C7AF',
          300: '#C3AB87',
          400: '#AF8F5F',
          500: '#8B7355',
          600: '#6B5A45',
          700: '#4B4135',
          800: '#2B2825',
          900: '#1B1915'
        },
        secondary: {
          DEFAULT: '#D4C4B5',
          50: '#FAF8F6',
          100: '#F2EDE7',
          200: '#E8DDD0',
          300: '#DECDB9',
          400: '#D4C4B5',
          500: '#C4B0A0',
          600: '#B09C8B',
          700: '#9C8876',
          800: '#887461',
          900: '#74604C'
        },
        accent: {
          DEFAULT: '#C9A86C',
          50: '#F8F4ED',
          100: '#F1E9DB',
          200: '#E3D3B7',
          300: '#D5BD93',
          400: '#C9A86C',
          500: '#B89756',
          600: '#A08641',
          700: '#88752C',
          800: '#706417',
          900: '#585302'
        },
        cream: '#F5F0E8',
        light: '#FAF8F5',
        sage: '#9CAF88',
        'dusty-rose': '#D4A5A5'
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 0.8s ease-out forwards',
        'slideInLeft': 'slideInLeft 0.8s ease-out forwards',
        'slideInRight': 'slideInRight 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        }
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(139, 115, 85, 0.1), 0 2px 4px -1px rgba(139, 115, 85, 0.06)',
        'medium': '0 10px 15px -3px rgba(139, 115, 85, 0.1), 0 4px 6px -2px rgba(139, 115, 85, 0.05)',
        'large': '0 25px 50px -12px rgba(139, 115, 85, 0.25)',
      }
    },
  },
  plugins: [],
}