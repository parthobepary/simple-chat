import {useRoute} from 'vue-router';
import {themeLayouts, themePages} from '~/utils/themeMap';

export const useTheme = () => {
    const route = useRoute();
    const theme = computed(() => (route.query.theme as string) || 'theme2');

    const getPageKey = () => {
        return route.path;
    };

    const loadLayout = () => {
        return defineAsyncComponent(themeLayouts[theme.value]);
    };

    const loadPage = () => {
        const pageKey = getPageKey(); // Example: /product/2
        const themePageMap = themePages[theme.value];

        if (!themePageMap) {
            console.warn(`Theme ${theme.value} not found.`);
            throw createError({statusCode: 404, statusMessage: 'Theme Not Found'});
        }

        // Try exact match first
        let loader = themePageMap[pageKey];

        // If not exact, try dynamic match
        if (!loader) {
            for (const routePattern in themePageMap) {
                // Convert pattern 'product/:id' to regex
                const regexPattern = '^' + routePattern.replace(/:[^/]+/g, '[^/]+') + '$';
                const regex = new RegExp(regexPattern);

                // Remove leading slash if needed
                const normalizedPath = pageKey.startsWith('/') ? pageKey.slice(1) : pageKey;

                if (regex.test(normalizedPath)) {
                    loader = themePageMap[routePattern];
                    break;
                }
            }
        }

        if (!loader) {
            console.warn(`Page not found for ${pageKey} in theme ${theme.value}`);
            throw createError({statusCode: 404, statusMessage: 'Page Not Found'});
        }

        return defineAsyncComponent(loader);
    };


    return {theme, loadLayout, loadPage};
};
