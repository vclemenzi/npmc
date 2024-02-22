/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        "background": "#f5f4f9",
        "secondary": "#F49E4C",
        "primary": "#68D89B",
        "surface": "#1b1e24"
      }
    },
    fontFamily: {
      'code': ["monospace", "JetBrains Mono"]
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
