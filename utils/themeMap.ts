// utils/themeMap.ts

export const themeLayouts: Record<string, () => Promise<any>> = {
    theme1: () => import('~/themes/theme1/layouts/mainLayout.vue'),
    theme2: () => import('~/themes/theme2/layouts/mainLayout.vue'),
};

// ✅ Now each theme maps to its own pages by route path
export const themePages: Record<string, Record<string, () => Promise<any>>> = {
    theme1: {
        '/': () => import('~/themes/theme1/pages/index.vue'),
        '/abouts': () => import('~/themes/theme1/pages/about.vue'),
        '/contact': () => import('~/themes/theme1/components/categories.vue'),
    },
    theme2: {
        '/': () => import('~/themes/theme2/pages/index.vue'),
        '/contact': () => import('~/themes/theme2/pages/contact.vue'),
    },
};
