import { getCookie, setCookie as set } from '../util/cookies';
import { useState, useEffect } from 'react';

export const useCookie = (key: string) => {
    const [cookie, setCookie] = useState(typeof document !== 'undefined' ? getCookie(key) : null);

    useEffect(() => {
        if (cookie) {
            set(key, cookie, 360);
        }
    }, [cookie]);

    return [cookie, setCookie] as [string | null, (v: string) => void];
};
