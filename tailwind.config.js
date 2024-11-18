/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#60b3d1",
        primary: "",
        header: "#121212",
        navbar: "#60b3d1",
      },
      fontFamily: {
        sans: ["Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
