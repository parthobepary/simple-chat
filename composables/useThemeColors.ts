export const useThemeColors = () => {
    const setThemeColors = (primary: string, secondary: string) => {
        console.log(`Setting theme colors: Primary - ${primary}, Secondary - ${secondary}`);
        if (process.client) {
            document.documentElement.style.setProperty('--primary-color', primary)
            document.documentElement.style.setProperty('--secondary-color', secondary)
        }
    };

    return {setThemeColors};
};
