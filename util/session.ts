const SESSION_STORAGE_BANNER_KEY = 'competition_banner_dismissed';

export const setSessionDismissed = () => {
    sessionStorage.setItem(SESSION_STORAGE_BANNER_KEY, 'true');
};

export const isDissmissed = () => {
    if (typeof window === 'undefined') {
        return true; // SSR always on
    }
    return sessionStorage.getItem(SESSION_STORAGE_BANNER_KEY);
};
