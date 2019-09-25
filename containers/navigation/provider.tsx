import React, { useEffect } from 'react';
import { OpenCtx } from './hooks/useOpen';
import useMedia from 'use-media';

export const NavigationProvider: React.FC = ({ children }) => {
    const [open, setOpen] = React.useState(true);
    const isMobile = useMedia({ maxWidth: 768 });

    useEffect(() => {
        if (open && !isMobile) {
            setOpen(false);
        }
    }, [open, isMobile]);

    return <OpenCtx.Provider value={{ open, setOpen }}>{children}</OpenCtx.Provider>;
};
