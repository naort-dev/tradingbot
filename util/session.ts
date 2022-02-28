const SESSION_STORAGE_BANNER_KEY = 'competition_banner_dismissed';

export const setSessionDismissed = () => {
    sessionStorage.setItem(SESSION_STORAGE_BANNER_KEY, 'true');
};

export const isDissmissed = () => {
    return sessionStorage.getItem(SESSION_STORAGE_BANNER_KEY);
};
