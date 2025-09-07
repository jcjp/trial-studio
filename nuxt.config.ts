import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxthub/core',
    '@nuxt/ui'
  ],
  css: [
    '~/assets/css/main.css'
  ],
  content: {
    preview: {
      dev: true,
      api: 'https://api.nuxt.studio',
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
      tsconfigPaths(),
    ]
  }
})
