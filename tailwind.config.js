/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#666666",
        secundary:"#989898",
        appWhite: {
          100: "#ffffff",
          200: "#fafafa",
          300: "#f2f2f2",
          400: "#e6e6e6",
          500: "#d9d9d9",
          600: "#bfbfbf",
          700: "#989898",
          800: "#666666",
          900: "#333333"
        },
        appBlue: {
          100: "#d6f2f9",
          200: "#ace6f3",
          300: "#83d9ec",
          400: "#59cde6",
          500: "#30c0e0",
          600: "#269ab3",
          700: "#1d7386",
          800: "#134d5a",
          900: "#0a262d"
        },
        appRed: {
          100: "#fbdcdc",
          200: "#f7b9b9",
          300: "#f39696",
          400: "#ef7373",
          500: "#eb5050",
          600: "#bc4040",
          700: "#8d3030",
          800: "#5e2020",
          900: "#2f1010"
        },
      }
    },
  },
  plugins: [],
}

