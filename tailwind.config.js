/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
        extend: {
            backgroundColor: {
                body: 'var(--bg-primary)',
                cardPrimary: 'var(--card-primary)',
                btnHighlight: 'var(--btn-highlight)',
            },
            colors: {
                highlight: 'var(--text-highlight)',
                primary: 'var(--text-primary)',
                secondary: 'var(--text-secondary)',
                info: 'var(--text-info)',
            },
            borderColor: {
                highlight: 'var(--btn-highlight)',
            },
        },
    },
  plugins: [],
}

