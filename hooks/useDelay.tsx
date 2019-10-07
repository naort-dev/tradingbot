import React from 'react';
import { createContext, useContext } from 'react';

const DelayCtx = createContext({
    delay: 0,
});

export const useDelay = () => {
    return useContext(DelayCtx);
};

export const DelayProvider: React.FC<{ delay: number }> = ({ delay, children }) => {
    const prev = useDelay();
    return <DelayCtx.Provider value={{ delay }}>{children}</DelayCtx.Provider>;
};

export const DelayRenderer: React.FC<{ multiplier?: number }> = ({ multiplier, children }) => {
    return (
        <>
            {React.Children.map(children, (Child, index) => {
                return <DelayProvider delay={(index - 1) * (multiplier || 1)}>{Child}</DelayProvider>;
            })}
        </>
    );
};
