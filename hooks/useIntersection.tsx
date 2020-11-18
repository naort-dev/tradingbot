import { RefObject, useEffect, useRef, useState } from 'react';

export const useIntersection = (target: RefObject<Element>) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const callback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio > 0) {
                    setIsVisible(true);
                }
            });
        };
        if (target.current && !!window.IntersectionObserver) {
            const observer = new IntersectionObserver(callback, { threshold: 0, rootMargin: '300px' });
            observer.observe(target.current);
            return () => observer.disconnect();
        } else {
            setIsVisible(true);
        }
    }, [target]);

    return isVisible;
};
