import { useEffect } from 'react';

export function useOnClickOutside<T extends HTMLDivElement>(ref: React.RefObject<T>, handler: () => void) {
    useEffect(() => {
        const listener = (event: any) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler();
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]); // ... passing it into this hook. // ... but to optimize you can wrap handler in useCallback before ... // ... callback/cleanup to run every render. It's not a big deal ... // ... function on every render that will cause this effect ... // It's worth noting that because passed in handler is a new ... // Add ref and handler to effect dependencies
}
