/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Poppins', 'Inter']
      },
      colors: {
        primary: {
          50: '#f5fbff',
          500: '#0ea5e9'
        }
      }
    },
  },
  plugins: [],
}

