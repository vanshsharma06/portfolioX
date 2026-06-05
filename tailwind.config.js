/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#070707',
        graphite: '#111312',
        smoke: '#aeb7b4',
        mint: '#45f0b5',
        aqua: '#4dd8ff',
        amber: '#f8b84e',
        coral: '#ff7a68'
      },
      boxShadow: {
        glow: '0 0 34px rgba(69, 240, 181, 0.18)',
        card: '0 22px 80px rgba(0, 0, 0, 0.35)'
      },
      backgroundImage: {
        'premium-line':
          'linear-gradient(135deg, rgba(69, 240, 181, 0.16), rgba(77, 216, 255, 0.12), rgba(248, 184, 78, 0.14))',
        'accent-text':
          'linear-gradient(90deg, #45f0b5 0%, #4dd8ff 42%, #f8b84e 100%)'
      },
      fontFamily: {
        display: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Arial',
          'sans-serif'
        ],
        body: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Arial',
          'sans-serif'
        ]
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-220% center' },
          '100%': { backgroundPosition: '220% center' }
        }
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        shimmer: 'shimmer 4s linear infinite'
      }
    }
  },
  plugins: []
};
