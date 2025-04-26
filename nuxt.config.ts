// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    experimental: {appManifest: false},
    ssr: true,
    routeRules: {
        '/home': {redirect: '/'},
    },
    modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@pinia/nuxt'],
    css: ['~/assets/css/tailwind.css', '~/assets/css/main.css'],
    nitro: {
        prerender: {
            routes: [
                '/products/1',
            ]
        }
    },
    compatibilityDate: '2025-01-18',
})