module.exports = {
 purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    media: false, // or 'media' or 'class'
    theme: {
      extend: {
        animation: {
        'bounce_once': 'bounce 2s linear 1.5',
        'bounce_page': 'bounce 2s linear 0.5',
      }
      },
      screens: {
       'sm': '600px',
      // => @media (min-width: 576px) { ... }

      'md': '900px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    },
    variants: {
      extend: {},
    },
    plugins: [],
}
