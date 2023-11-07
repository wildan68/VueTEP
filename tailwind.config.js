/** @type {import('tailwindcss').Config} */
import { CSSVariables } from './src/enum/css-variables'

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': `var(${CSSVariables.PRIMARY_COLOR})`,
        'success': `var(${CSSVariables.SUCCESS_COLOR})`,
        'danger': `var(${CSSVariables.DANGER_COLOR})`,
        'error': `var(${CSSVariables.ERROR_COLOR})`,
        'warning': `var(${CSSVariables.WARNING_COLOR})`,
        'info': `var(${CSSVariables.INFO_COLOR})`,
        'dark': `var(${CSSVariables.DARK_COLOR})`,
        'light': `var(${CSSVariables.LIGHT_COLOR})`,
        'background': `var(${CSSVariables.BACKGROUND_COLOR})`,
        'page-background': `var(${CSSVariables.BACKGROUND_PAGE_COLOR})`,
      },
    },
  },
  plugins: [],
}

