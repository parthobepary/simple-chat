export const useThemeStore = defineStore('themeStore', () => {

    const currentTheme = ref('theme1') // Default theme

    const themes: Record<string, () => Promise<any>> = {
        theme1: () => import('../json/theme2.json'),
        theme2: () => import('../json/theme2.json'),
        // Add more themes here
    }

    const setTheme = async (name: string) => {
        console.log('Setting theme:', name)
        const themeLoader = themes[name]
        if (!themeLoader) {
            console.error('Theme not found:', name)
            return
        }

        const theme = await themeLoader()

        // Apply theme colors to the document
        if (process.client) {
            console.log('Applying theme:', theme.default)
            document.documentElement.style.setProperty('--primary-color', theme.default.primary_color)
            document.documentElement.style.setProperty('--secondary-color', theme.default.secondary_color)
        }
    }

    return {currentTheme, setTheme}
})
