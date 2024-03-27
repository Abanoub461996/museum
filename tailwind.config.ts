/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      lobster: ["lobster", "sans-serif"],
      paintings: ["Paintings", "sans-serif"],
      truculenta:["Truculenta","sans-serif"]
    },
  },
  plugins: [],
};
