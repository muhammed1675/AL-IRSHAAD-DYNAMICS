/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#0F7A5C",
          "green-dark": "#0B5C46",
          "green-light": "#12946E",
          gold: "#D4AF37",
          "gold-soft": "#E6C86A",
          navy: "#081C2D",
          "navy-light": "#0E2C45",
        },
        ink: "#1F2937",
        line: "#E5E7EB",
        mist: "#F8FAFC",
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: "0 4px 24px -8px rgba(8, 28, 45, 0.12)",
        "soft-lg": "0 20px 60px -20px rgba(8, 28, 45, 0.22)",
        gold: "0 12px 40px -12px rgba(212, 175, 55, 0.4)",
        green: "0 12px 30px -10px rgba(15, 122, 92, 0.4)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      maxWidth: {
        content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
