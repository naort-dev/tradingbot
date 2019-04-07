import { Container } from './container';
import styled from 'styled-components';

export interface LayoutDividedProps {
    imageIn: 'left' | 'right';
}

export const LayoutDivided = styled(Container)<LayoutDividedProps>`
    align-items: center;
    > div {
        width: 50%;
        position: relative;
        display: flex;
        > img:first-child {
            max-height: 80vh;
            margin-top: 20px;
        }
    }
    > div:first-child {
        > img:first-child {
            position: relative;
            right: 50%;
        }
    }
    > div:last-child {
        > img:first-child {
            position: relative;
            left: 20px;
        }
    }
    @media (max-width: 768px) {
        > div {
            width: 100%;
            min-height: 80vh;
            justify-content: center;
            align-items: center;
            padding: 0 20px;
        }
    }
`;

export const LayoutSingle = styled(Container)``;
