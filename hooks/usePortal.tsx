import React, { useRef, useContext, useEffect } from 'react';
import { createContext } from 'react';

interface PortalCtx {
    portalRef: React.RefObject<HTMLDivElement>;
}

export const PortalCtx = createContext<PortalCtx>(null as any);

export const PortalProvider: React.FC = ({ children }) => {
    const portalRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <PortalCtx.Provider value={{ portalRef }}>{children}</PortalCtx.Provider>
            <div ref={portalRef} />
        </>
    );
};

export const usePortal = () => {
    const { portalRef } = useContext(PortalCtx);

    const portal = useRef(document.createElement('div'));

    useEffect(() => {
        if (!portal.current) {
            portal.current = document.createElement('div');
        }
    }, []);

    useEffect(() => {
        if (!(portal.current instanceof HTMLElement) || !portalRef.current) {
            return;
        }

        const node = portal.current;
        portalRef.current.appendChild(portal.current);

        return () => {
            portalRef.current && portalRef.current.removeChild(node);
        };
    }, []);

    return portal;
};
