import { createContext, useContext } from 'react';

interface SectionCtx {
    entered: boolean;
    seen: boolean;
}

export const SectionCtx = createContext<SectionCtx>({ entered: false, seen: false });

export const useSection = () => {
    return useContext(SectionCtx);
};
