// tailwind.config.js
const colors = require('./src/styles/generated/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        primary: {
          lightest: 'var(--color-primary-lightest)',
          lighter: 'var(--color-primary-lighter)',
          light: 'var(--color-primary-light)',
          DEFAULT: 'var(--color-primary-base)',
          dark: 'var(--color-primary-dark)',
          darker: 'var(--color-primary-darker)',
          darkest: 'var(--color-primary-darkest)',
          contrast: 'var(--color-primary-contrast)',
        },
        secondary: {
          lightest: 'var(--color-secondary-lightest)',
          lighter: 'var(--color-secondary-lighter)',
          light: 'var(--color-secondary-light)',
          DEFAULT: 'var(--color-secondary-base)',
          dark: 'var(--color-secondary-dark)',
          darker: 'var(--color-secondary-darker)',
          darkest: 'var(--color-secondary-darkest)',
          contrast: 'var(--color-secondary-contrast)',
        },
        tertiary: {
          lightest: 'var(--color-tertiary-lightest)',
          lighter: 'var(--color-tertiary-lighter)',
          light: 'var(--color-tertiary-light)',
          DEFAULT: 'var(--color-tertiary-base)',
          dark: 'var(--color-tertiary-dark)',
          darker: 'var(--color-tertiary-darker)',
          darkest: 'var(--color-tertiary-darkest)',
          contrast: 'var(--color-tertiary-contrast)',
        },
        
        // UI colors
        bg: {
          app: 'var(--color-background-app)',
          card: 'var(--color-background-card)',
          subtle: 'var(--color-background-subtle)',
        },
        surface: {
          DEFAULT: 'var(--color-surface-default)',
          raised: 'var(--color-surface-raised)',
          overlay: 'var(--color-surface-overlay)',
          sunken: 'var(--color-surface-sunken)',
        },
        border: {
          subtle: 'var(--color-border-subtle)',
          DEFAULT: 'var(--color-border-default)',
          strong: 'var(--color-border-strong)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
          disabled: 'var(--color-text-disabled)',
          inverse: 'var(--color-text-inverse)',
        },
        
        // Semantic colors
        success: {
          lightest: 'var(--color-success-lightest)',
          lighter: 'var(--color-success-lighter)',
          light: 'var(--color-success-light)',
          DEFAULT: 'var(--color-success-base)',
          dark: 'var(--color-success-dark)',
          darker: 'var(--color-success-darker)',
          contrast: 'var(--color-success-contrast)',
        },
        info: {
          lightest: 'var(--color-info-lightest)',
          lighter: 'var(--color-info-lighter)',
          light: 'var(--color-info-light)',
          DEFAULT: 'var(--color-info-base)',
          dark: 'var(--color-info-dark)',
          darker: 'var(--color-info-darker)',
          contrast: 'var(--color-info-contrast)',
        },
        warning: {
          lightest: 'var(--color-warning-lightest)',
          lighter: 'var(--color-warning-lighter)',
          light: 'var(--color-warning-light)',
          DEFAULT: 'var(--color-warning-base)',
          dark: 'var(--color-warning-dark)',
          darker: 'var(--color-warning-darker)',
          contrast: 'var(--color-warning-contrast)',
        },
        error: {
          lightest: 'var(--color-error-lightest)',
          lighter: 'var(--color-error-lighter)',
          light: 'var(--color-error-light)',
          DEFAULT: 'var(--color-error-base)',
          dark: 'var(--color-error-dark)',
          darker: 'var(--color-error-darker)',
          contrast: 'var(--color-error-contrast)',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Enable class-based dark mode
}