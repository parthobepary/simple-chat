import {themePages} from '~/theme-registry/pages'
import {useThemeStore} from '~/stores/themeStore'

export function useThemePageComponent(pageName: string) {
    const themeStore = useThemeStore();
    const theme = themeStore.currentTheme;

    const pageComponent = themePages[theme]?.[pageName] || null

    if (!pageComponent) {
        return ;
    }

    return defineAsyncComponent(pageComponent)
}
