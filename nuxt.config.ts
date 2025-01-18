// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  experimental: { appManifest: false },
  ssr: false,
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@pinia/nuxt'],
  css: ['~/assets/css/tailwind.css'],
  compatibilityDate: '2025-01-18',
})