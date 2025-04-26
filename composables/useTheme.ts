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
        const pageKey = getPageKey();
        const themePageMap = themePages[theme.value];
        const loader = themePageMap?.[pageKey];

        if (!loader) {
            console.warn(`Page not found for ${pageKey} in theme ${theme.value}`);
            throw createError({statusCode: 404, statusMessage: 'Page Not Found'});
        }

        return defineAsyncComponent(loader);
    };

    return {theme, loadLayout, loadPage};
};
