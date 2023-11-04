/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--el-color-primary)',
        'success': 'var(--el-color-success)',
        'danger': 'var(--el-color-danger)',
        'error': 'var(--el-color-error)',
        'warning': 'var(--el-color-warning)',
        'info': 'var(--el-color-info)',
        'dark': 'var(--el-color-dark)',
        'light': 'var(--el-color-light)',
        'background': 'var(--el-color-background)',
      },
    },
  },
  plugins: [],
}

