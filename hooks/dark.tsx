import * as React from 'react';

export interface DarkProp {
    dark: boolean;
}

export interface Darkmode extends DarkProp {
    setDark: (dark: boolean) => void;
}

const context = React.createContext<Darkmode>({ dark: true, setDark: (v: boolean) => {} } as any);
export const Provider = context.Provider;

export const useDark = () => {
    return React.useContext(context);
};

export const DarkProvider: React.FC = ({ children }) => {
    const parent = useDark();
    const [dark, setDark] = React.useState(false);

    const provider = {
        dark: parent === null ? dark : !parent.dark,
        setDark: parent === null ? setDark : (nextValue: boolean) => parent.setDark(!nextValue),
    };

    return <Provider value={provider}>{children}</Provider>;
};
