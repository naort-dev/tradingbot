import { RefObject, useEffect, useRef, useState } from "react"

export const useIntersection = (target: RefObject<Element>) => {

    const [isVisible, setIsVisible] = useState(false);

    const callback: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) =>{
            if(entry.intersectionRatio > 0) {
                setIsVisible(true);
            }
        })
    }

    const observer = useRef(new IntersectionObserver(callback, { threshold: 0, rootMargin: '300px'}))
            
    useEffect(() =>{
        if(target.current) {
            observer.current.observe(target.current);
        }
        return () => observer.current.disconnect();
    }, [target])

    return isVisible;
}