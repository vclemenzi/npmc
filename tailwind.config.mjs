/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        "background": "#101010",
        "surface": "#151617"
      }
    },
    fontFamily: {
      'code': ["monospace", "Source Code Pro"]
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}
