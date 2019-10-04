import { keyframes, Keyframes, css } from 'styled-components';

export const opacity = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const scaling = keyframes`
    0% {
        transform: scaleX(0.0);
    }
    100% {
        transform: scaleX(1.0);
    }
`;

export const translationFromLeft = keyframes`
    0% {
        transform: translateX(-25px);
    }
    100% {
        transform: translateX(0);
    }
`;

export const translationFromRight = keyframes`
    0% {
        transform: translateX(25px);
    }
    100% {
        transform: translateX(0);
    }
`;

export const combine = (...keyframes: Keyframes[]) => {
    return css`
        ${keyframes.join(',')}
    `;
};
