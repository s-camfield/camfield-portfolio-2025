/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Add custom animation definitions
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee2': 'marquee2 30s linear infinite',
        'scrollPortfolio': 'scrollPortfolio 15s linear infinite',
      },
      // Define keyframes to match your CSS
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        scrollPortfolio: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      // Add custom colors for your brand
      colors: {
        'primary': '#2FBBAB',
        'primary-dark': '#1e9d90',
        'secondary': '#4EBD94',
        'accent': '#C3CC99',
      },
      // Add custom fonts - now including Lato
      fontFamily: {
        'dancing-script': ['var(--font-dancing-script)', 'cursive'],
        'lato': ['var(--font-lato)', 'sans-serif'],
      },
      // Add custom box shadows
      boxShadow: {
        'hero': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
        'text': '0 2px 4px rgba(0, 0, 0, 0.3)',
      },
      // Add text shadow utility
      textShadow: {
        'default': '0 2px 4px rgba(0, 0, 0, 0.3)',
        'lg': '0 4px 8px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    // Add a plugin for text shadow
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
