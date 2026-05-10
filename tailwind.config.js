/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
        display: ['"Archivo"', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.8rem, 7vw, 5.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'hero-sm': ['clamp(1.9rem, 5vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
      },
      backgroundColor: {
        body: 'var(--bg-primary)',
        cardPrimary: 'var(--card-primary)',
        elevated: 'var(--bg-elevated)',
      },
      colors: {
        highlight: 'var(--text-highlight)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        info: 'var(--text-info)',
      },
      borderColor: {
        highlight: 'var(--accent)',
      },
      boxShadow: {
        'accent-sm': '0 0 20px -4px var(--accent-glow)',
        'accent-md': '0 0 36px -8px var(--accent-glow)',
        'accent-lg': '0 0 60px -16px var(--accent-glow)',
        'card': '0 24px 48px -20px rgba(0,0,0,0.6)',
        'card-hover': '0 32px 64px -24px rgba(0,0,0,0.8)',
      },
      keyframes: {
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(12px, -16px) scale(1.04)' },
          '66%': { transform: 'translate(-10px, 12px) scale(0.96)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        /** Dual project images: seamless L→R loop (track is 400% wide, move -50% of self) */
        'dual-image-marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.55s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.45s ease-out both',
        'slide-up': 'slide-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        float: 'float 22s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'dual-image-marquee': 'dual-image-marquee 16s linear infinite',
      },
    },
  },
  plugins: [],
}
