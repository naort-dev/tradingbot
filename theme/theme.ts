export const darkTheme = {
    font: '#fff',
    main: '#00b3d8',
    fontHeader: '#fff',
    bluePrimary: '#00b3d8',
    darkPrimary: '#0c1014',
    lightPrimary: '#fff',
    onLight: '#646482',
    onDark: '#a5a5b0',
    background: '#181927',
    oppositeBackground: '#fff',
    errorRed: '#ec4040',
    borderColor: '#fff',
    backgroundLight: '#a5a5b029',
    shadowColor: 'rgba(2, 179, 216, 0.09);',
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
    oppositeBackground: '#181927',
    errorRed: '#ec4040',
    borderColor: '#c4c4e2',
    backgroundLight: '#a5a5b029',
    shadowColor: 'rgba(13, 21, 67, 0.1)',
};

export type ThemeType = typeof darkTheme;
export type ThemeColors = keyof typeof darkTheme;
