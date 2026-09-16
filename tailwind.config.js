/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0C0C0C",
        accent: "#D7E2EA",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        heading: ["'Syne'", "'Plus Jakarta Sans'", "sans-serif"],
        syne: ["'Syne'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        kanit: ["'Plus Jakarta Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
