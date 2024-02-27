/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    typography: require('./typography'),
    extend: {
      colors: {
        gray: {
          25: '#FCFCFD', // FCFCFD
          50: '#F9FAFB', // F9FAFB
          100: '#F6F3F4', // F3F4F6
          200: '#EBE6E5', // EBE6E5
          300: '#D1D6DB', // D1D5DB
          400: '#9CA5AF', // 9CA3AF
          500: '#6B7980', // 6B7280
          700: '#373E51', // 374151
          800: '#371F1F', // 1F2A37
          900: '#281211', // 111928
        },
        primary: {
          25: '#FFF5F5', // #F5F8FF}
          50: '#FFEBEB', // EBF5FF }
          100: '#FEE1E1', // E1EFFE}
          200: '#FDC3C3', // C3DDFD}
          300: '#FEA4A4', // A4CAFE }
          400: '#FF5252', // 528BFF}
          500: '#FF2945', // 2970FF}
          600: '#f85757', // 1C64F2}
          700: '#DB301A', // 1A56DB}
        },
        blue: {
          500: '#E1EFFE',
        },
        green: {
          50: '#F3FAF7',
          100: '#DEF7EC',
          800: '#03543F',

        },
        yellow: {
          100: '#FDF6B2',
          800: '#723B13',
        },
        purple: {
          50: '#F6F5FF',
          200: '#DCD7FE',
        },
        indigo: {
          25: '#F5F8FF',
          50: '#EEF4FF',
          100: '#E0EAFF',
          300: '#A4BCFD',
          400: '#8098F9',
          600: '#444CE7',
          800: '#2D31A6',
        },
        red: {
          150: '#f85757',
          100: '#F77575',
          500: '#FFECE8',
        },
      },
      screens: {
        mobile: '100px',
        // => @media (min-width: 100px) { ... }
        tablet: '640px', // 391
        // => @media (min-width: 600px) { ... }
        pc: '769px',
        // => @media (min-width: 769px) { ... }
      },
      boxShadow: {
        'xs': '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        'sm': '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)',
        'md': '0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10)',
        'lg': '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        'xl': '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
        '2xl': '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
        '3xl': '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
