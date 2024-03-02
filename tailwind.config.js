/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage : {
            'banner-section': "url('images/bgbanner.png')"
        }
      },
    },
    plugins: [],
  }