/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D32F2F",
        secondary: "#FF8A80",
      },
    },
  },
  plugins: [require("daisyui")],
};
