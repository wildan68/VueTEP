/** @type {import('tailwindcss').Config} */
import { CSSVariables } from './src/enum/css-variables'

function withOpacity (variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}-rgb), ${opacityValue})`
    }
    return `var(${variableName})`
  }
}

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': withOpacity(CSSVariables.PRIMARY_COLOR),
        'success': withOpacity(CSSVariables.SUCCESS_COLOR),
        'danger': withOpacity(CSSVariables.DANGER_COLOR),
        'error': withOpacity(CSSVariables.ERROR_COLOR),
        'warning': withOpacity(CSSVariables.WARNING_COLOR),
        'info': withOpacity(CSSVariables.INFO_COLOR),
        'dark': withOpacity(CSSVariables.DARK_COLOR),
        'light': withOpacity(CSSVariables.LIGHT_COLOR),
        'background': withOpacity(CSSVariables.BACKGROUND_COLOR),
        'page-background': withOpacity(CSSVariables.BACKGROUND_PAGE_COLOR),
        'secondary': `var(${CSSVariables.SECONDARY_COLOR})`,
        'placeholder': `var(${CSSVariables.PLACEHOLDER_COLOR})`,
        'disabled': `var(${CSSVariables.DISABLED_COLOR})`,
      },
    },
  },
  plugins: [],
}

