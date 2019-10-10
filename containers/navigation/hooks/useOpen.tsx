import { createContext, useContext } from 'react';
import { useMedia } from 'use-media';
interface Ctx {
    open?: boolean;
    setOpen: (open: boolean) => void;
}

export const OpenCtx = createContext<Ctx>(null as any);

export const useOpen = () => {
    return useContext(OpenCtx);
};
