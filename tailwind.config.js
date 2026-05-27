/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'phone-landscape': {
          'raw': '(max-width: 932px) and (max-height: 600px) and (orientation: landscape)'
        },
      },
    },
  },
  plugins: [],
}
