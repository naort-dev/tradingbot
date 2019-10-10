import React from 'react';
import { ThemeProvider as Tp } from 'styled-components';
import { useDark } from 'hooks/dark';
import { darkTheme, lightTheme } from 'theme';

export const ThemeProvider: React.FC = ({ children }) => {
    const { dark } = useDark();
    return <Tp theme={dark ? darkTheme : lightTheme}>{children as any}</Tp>;
};
