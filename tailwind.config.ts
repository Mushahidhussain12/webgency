/** @type {import('tailwindcss').Config} */

const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

module.exports = {
  content: ['src/components/**/*.{ts,tsx}', 'app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        md: { max: '600px' },
      },
      colors: {
        primary: {
          DEFAULT: '#CCC2DC',
          light: '#000000',
          dark: '#CCC2DC',
        },
        'bg-1': {
          DEFAULT: '#141218',
          light: '#FAFAFA',
          dark: '#141218',
        },
        'bg-2': {
          DEFAULT: '#211F26',
          light: '#F1F5F9',
          dark: '#211F26',
        },
        'text-1': {
          DEFAULT: '#E6E0E9',
          light: '#0F172A',
          dark: '#E6E0E9',
        },
        'gray-1': {
          DEFAULT: '#303030',
          light: '#E2E8F0',
          dark: '#303030',
        },
        stroke: {
          DEFAULT: '#4A4458',
          light: '#CBD5E1',
          dark: '#4A4458',
        },
        // Additional theme-aware colors
        'surface': {
          light: '#FFFFFF',
          dark: '#1A1A1A',
        },
        'surface-secondary': {
          light: '#F8FAFC',
          dark: '#2A2A2A',
        },
        'border': {
          light: '#E2E8F0',
          dark: '#404040',
        },
        'accent': {
          light: '#000000',
          dark: '#8B5CF6',
        },
        // Hero section specific colors
        'hero-text': {
          light: '#000000',
          dark: '#E6E0E9',
        },
        'hero-bg': {
          light: 'rgba(255, 255, 255, 0.8)',
          dark: 'rgba(0, 0, 0, 0.5)',
        },
      },

      animation: {
        aurora: 'aurora 60s linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        aurora: {
          from: {
            backgroundPosition: '50% 50%, 50% 50%',
          },
          to: {
            backgroundPosition: '350% 50%, 350% 50%',
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors, require('tailwindcss-animate')],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ':root': newVars,
  });
}
