export const useThemeStore = defineStore('themeStore', () => {
    interface ThemeData {
        pages: string[],
        primary_color: string,
        secondary_color: string,
    }

    const currentTheme = ref('normal')
    const themeData = ref<ThemeData | null>(null)
    const setTheme = async (themeName: string) => {
        const theme = await import('../theme/normal.json')
        currentTheme.value = theme.name
        themeData.value = {
            pages: theme.pages,
            primary_color: theme.primary_color,
            secondary_color: theme.secondary_color,
        }

        // Apply theme colors to the document
        document.documentElement.style.setProperty('--primary-color', themeData.value.primary_color)
        document.documentElement.style.setProperty('--secondary-color', themeData.value.secondary_color)
    }

    return {currentTheme, themeData, setTheme}
})