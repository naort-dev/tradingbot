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

export class Animator {
    private delay: number = 0;
    private duration: number = 0.3;
    private easing: string = 'ease-in-out';
    private translateX?: number;
    private translateY?: number;
    private translateXEnd?: number;
    private translateYEnd?: number;
    private scaleX?: number;
    private scaleY?: number;

    private constructor(readonly path: string, readonly startOpacity: number) {}
    public static Animate(path: string, startOpacity: number = 0) {
        return new Animator(path, startOpacity);
    }

    public Delay(d: number) {
        this.delay = d;
        return this;
    }

    public Duration(d: number) {
        this.duration = d;
        return this;
    }

    public ScaleX(v: number) {
        this.scaleX = v;
        return this;
    }

    public ScaleY(v: number) {
        this.scaleY = v;
        return this;
    }

    public TranslateX(v: number, end?: number) {
        this.translateX = v;
        this.translateXEnd = end;
        return this;
    }

    public TranslateY(v: number, end?: number) {
        this.translateY = v;
        this.translateYEnd = end;
        return this;
    }

    private Transform() {
        let transform = '';
        if (this.translateX) {
            transform += ` translateX(${this.translateX}px)`;
        }
        if (this.translateY) {
            transform += ` translateY(${this.translateY}px)`;
        }
        if (this.scaleX) {
            transform += ` scaleX(${this.scaleX})`;
        }
        if (this.scaleY) {
            transform += ` scaleY(${this.scaleY})`;
        }
        if (transform === '') {
            return 'none';
        } else {
            return transform;
        }
    }

    private TransformEnd() {
        let transform = '';
        if (this.translateXEnd) {
            transform += ` translateX(${this.translateXEnd}px)`;
        }
        if (this.translateYEnd) {
            transform += ` translateY(${this.translateYEnd}px)`;
        }
        if (transform === '') {
            return 'none';
        } else {
            return transform;
        }
    }

    public Render() {
        return (props: { seen?: boolean; delay: number }) => css`
            ${this.path} {
                opacity: ${this.startOpacity};
                transition-duration: ${this.duration}s;
                transition-delay: ${props.delay + this.delay}s;
                transition-property: all;
                transition-timing-function: ${this.easing};
                transform: ${this.Transform()};
            }
            ${props.seen &&
                `
                ${this.path} {
                    opacity: 1.0;
                    transform: ${this.TransformEnd()};
                }
            `}
        `;
    }
}
