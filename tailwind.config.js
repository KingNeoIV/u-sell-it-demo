/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        // Mobile portrait (default)
        phone: '0px',

        // Mobile landscape
        'phone-landscape': {
          raw: '(max-width: 900px) and (max-height: 500px) and (orientation: landscape)'
        },

        // Large phones / phablets
        phablet: '640px',

        // Tablets portrait
        tablet: '768px',

        // Tablets landscape
        'tablet-landscape': {
          raw: '(min-width: 768px) and (max-width: 1200px) and (orientation: landscape)'
        },

        // Small laptops
        laptop: '1024px',

        // Desktops
        desktop: '1280px',

        // Large screens
        wide: '1536px',
      },
    },
  },
  plugins: [],
}
