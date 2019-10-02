export const darkTheme = {
    font: '#646580',
    main: '#00b3d8',
    fontHeader: '#fff',
    bluePrimary: '#00b3d8',
    darkPrimary: '#0c1014',
    lightPrimary: '#fff',
    onLight: '#646482',
    onDark: '#a5a5b0',
    background: '#181927',
    errorRed: '#ec4040',
};

export const lightTheme = {
    font: '#646580',
    main: '#00b3d8',
    fontHeader: '#0c1014',
    bluePrimary: '#00b3d8',
    darkPrimary: '#0c1014',
    lightPrimary: '#fff',
    onLight: '#646482',
    onDark: '#a5a5b0',
    background: '#fff',
    errorRed: '#ec4040',
};

export type ThemeType = typeof darkTheme;
export type ThemeColors = keyof typeof darkTheme;
