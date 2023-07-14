/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'"],
  theme: {
    extend: {
      backgroundColor: {
        "base-component": "#151618",
      },
      colors: {
        "primary-blue": "#0177FB"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
};
