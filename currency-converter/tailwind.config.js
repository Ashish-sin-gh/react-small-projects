/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url(https://images.pexels.com/photos/16886243/pexels-photo-16886243/free-photo-of-banknotes-of-different-denominations-cash-dolors.jpeg?auto=compress&cs=tinysrgb&w=600)"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
    },
  },
  plugins: [],
}
}
