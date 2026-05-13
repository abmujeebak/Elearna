/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#ffb606',
        heading: '#0f252a',
        paragraph: '#7b7c7d',
        lightBlue: '#eff6f8',
        lightYellow: '#f1f1e9',
      },
      fontFamily: {
        body: ['Outfit', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        card: '0 20px 60px rgba(15, 37, 42, 0.12)',
      },
    },
  },
  plugins: [],
}
