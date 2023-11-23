/** @type {import('tailwindcss').Config} */
import { CSSVariables } from './src/enum/css-variables'

function withOpacity (variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(${variableName}, ${opacityValue})`
    }
    return `rgb(${variableName})`
  }
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': withOpacity(`var(${CSSVariables.PRIMARY_COLOR}-rgb)`),
        'success': withOpacity(`var(${CSSVariables.SUCCESS_COLOR}-rgb)`),
        'danger': withOpacity(`var(${CSSVariables.DANGER_COLOR}-rgb)`),
        'error': withOpacity(`var(${CSSVariables.ERROR_COLOR}-rgb)`),
        'warning': withOpacity(`var(${CSSVariables.WARNING_COLOR}-rgb)`),
        'info': withOpacity(`var(${CSSVariables.INFO_COLOR}-rgb)`),
        'dark': withOpacity(`var(${CSSVariables.DARK_COLOR}-rgb)`),
        'light': withOpacity(`var(${CSSVariables.LIGHT_COLOR}-rgb)`),
        'background': withOpacity(`var(${CSSVariables.BACKGROUND_COLOR}-rgb)`),
        'page-background': withOpacity(`var(${CSSVariables.BACKGROUND_PAGE_COLOR}-rgb)`),
      },
    },
  },
  plugins: [],
}

