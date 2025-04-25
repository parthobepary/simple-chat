// theme-registry/pages.ts
export const themePages = {

    normal: {
        home: () => import('~/pages/normal/home.vue'),
        about: () => import ('~/pages/normal/about.vue'),
    },
    another: {
        home: () => import('~/pages/another/home.vue'),
        contact: () => import ('~/pages/another/contact.vue'),
    }
}
