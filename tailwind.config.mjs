/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        "background": "#0d0f14",
        "surface": "#1b1e24"
      }
    },
    fontFamily: {
      'code': ["monospace", "JetBrains Mono"]
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}
