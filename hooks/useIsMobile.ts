import useMedia from 'use-media';

export const useIsMobile = () => {
    return useMedia({ maxWidth: 768 });
};
