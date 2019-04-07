import * as React from 'react';

export interface DarkProp {
    dark: boolean;
}

export interface Darkmode extends DarkProp {
    setDark: (dark: boolean) => void;
}

const context = React.createContext<Darkmode>(null as any);
export const Provider = context.Provider;

export const DarkProvider: React.FunctionComponent<{}> = (props) => {
    const [dark, setDark] = React.useState(false);
    return <Provider value={{ dark, setDark }}>{props.children}</Provider>;
};

export const useDark = () => {
    return React.useContext(context);
};
