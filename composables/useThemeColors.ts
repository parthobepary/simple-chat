import {colors} from './colors';

export const useThemeColors = () => {
    const setThemeColors = (
        primaryBase: keyof typeof colors = 'red',
        secondaryBase: keyof typeof colors = 'blue'
    ) => {
        if (process.client) {
            const root = document.documentElement;

            const primary = colors[primaryBase];
            const secondary = colors[secondaryBase];

            if (!primary || !secondary) {
                console.error('Invalid color name!');
                return;
            }

            const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

            for (const shade of shades) {
                root.style.setProperty(`--primary-${shade}`, primary[shade as keyof typeof primary]);
                root.style.setProperty(`--secondary-${shade}`, secondary[shade as keyof typeof secondary]);
            }
        }
    };

    return {setThemeColors};
};
