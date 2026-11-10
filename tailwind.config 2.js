/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f3f6fb",
          100: "#e2e9f4",
          200: "#c6d3e8",
          300: "#9db2d4",
          400: "#6f89b8",
          500: "#4d6a9c",
          600: "#3a5282",
          700: "#2d4169",
          800: "#1f2f52",
          900: "#14213f",
          950: "#0b1530",
        },
        ice: "#eef4fb",
      },
      fontFamily: {
        sans: ["Figtree", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
