/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
    './app/error.vue',
  ],
  theme: {
    extend: {
      colors: {
        'page-bg': '#F7F9FC',
        'card-bg': '#FFFFFF',
        'card-border': '#E3E8F0',
        'accent': '#2563EB',
        'accent-hover': '#1D4ED8',
        'accent-tint': '#DBEAFE',
        'heading': '#0F172A',
        'body': '#475569',
        'muted': '#94A3B8',
        'divider': '#E2E8F0',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        'heading': ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 8px rgba(16, 42, 90, 0.06)',
        'card-hover': '0 6px 20px rgba(16, 42, 90, 0.10)',
      },
      borderRadius: {
        'card': '12px',
      },
    },
  },
  plugins: [],
}
