import { useEffect, useRef, useState } from 'react';

export function useInterval(callback: () => void | number, parentDelay: number = 500) {
    const savedCallback = useRef<() => void | number>();
    const [delay, setDelay] = useState(parentDelay);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            const next = savedCallback.current ? savedCallback.current() : undefined;
            if (next) {
                setDelay(next);
            }
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}
