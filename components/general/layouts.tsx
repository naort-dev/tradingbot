import { Container } from './container';
import styled from 'styled-components';

export interface LayoutDividedProps {
    imageIn: 'left' | 'right';
}

export const ThreeColumnLayout = styled(Container)`
    > div {
        width: 33%;
    }
`;

export const LayoutDivided = styled(Container)<LayoutDividedProps>`
    align-items: center;
    > div {
        width: 50%;
        position: relative;
        display: flex;
        min-height: 70vh;
        align-items: center;
        > img:first-child {
            max-height: 80vh;
            margin-top: 20px;
        }
    }
    > div:first-child {
        > img:first-child {
            position: absolute;
            right: 10%;
            @media (max-width: 768px) {
                margin-right: -20px;
                max-height: 60vh;
            }
        }
    }
    > div:last-child {
        > img:first-child {
            position: relative;
            left: 20px;
            @media (max-width: 768px) {
                max-height: 60vh;
            }
        }
    }
    @media (max-width: 768px) {
        > div {
            width: 100%;
            min-height: 70vh;
            justify-content: center;
            align-items: center;
            padding: 0 40px;
        }
    }
    ${(props) =>
        props.imageIn == 'left' &&
        `
    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
    `}
`;

export const LayoutSingle = styled(Container)``;
