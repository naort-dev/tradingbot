import { useEffect, useRef, useState } from 'react';

export function useHover<T extends HTMLElement>(r?: React.RefObject<T>, visible?: boolean) {
    const [value, setValue] = useState(false);

    const ref = r ? r : useRef<T>();

    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => !visible && setValue(false);

    useEffect(() => {
        setValue(Boolean(visible));
    }, [visible]);

    useEffect(() => {
        const node = ref.current;
        if (node) {
            node.addEventListener('mouseover', handleMouseOver);
            node.addEventListener('mouseleave', handleMouseOut);
            return () => {
                node.removeEventListener('mouseover', handleMouseOver);
                node.removeEventListener('mouseleave', handleMouseOut);
            };
        } else {
            return undefined;
        }
    }, [ref.current]); // Recall only if ref changes

    return [ref, value] as [React.RefObject<T>, boolean];
}
