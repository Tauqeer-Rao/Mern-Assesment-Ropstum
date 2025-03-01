/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "150px",
        xs: "250px"
      },

      fontFamily: {
        cabinet_grostek: ["Cabinet Grotesk", "sans-serif"],
        frank_luhi: ["Frank Ruhl Libre", "sans-serif"]
      },
    },
  },
  plugins: [],
}

