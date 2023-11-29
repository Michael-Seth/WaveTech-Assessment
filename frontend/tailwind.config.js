/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EB5017",
        primaryLight: "#FFECE5",
        primaryGray: "#D0D5DD",
        lightGray: "#F9FAFB",
        darkGray: "#98A2B3",
        black: "#101928",
      },
    },
  },
  plugins: [],
};
