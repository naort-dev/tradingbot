import styled from 'styled-components';
import { Paddings } from '@theme';

export const Center = styled.div<{ direction?: 'column' | 'row'; mobileFullWidth?: boolean; className?: string }>`
    display: flex;
    @media (max-width: 980px) {
        width: 95vw;
    }
    @media (max-width: 768px) {
        display: block;
        width: 100%;
        padding: 0px ${(props) => (!props.mobileFullWidth ? Paddings.Large : '0px')};
    }
    ${(props) =>
        props.direction &&
        `
        flex-direction: ${props.direction};
    `}
`;

export const CenterVertical = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;

export const CenterHorizontal = styled.div<{ marginLeft?: number; marginTop?: number }>`
    display: flex;
    justify-content: center;
    width: 100%;
    ${(props) =>
        props.marginLeft &&
        `
        margin-left: ${props.marginLeft}px;
    `}
    ${(props) =>
        props.marginTop &&
        `
        margin-top: ${props.marginTop}px;
    `}
`;

export const CenterRight = styled(CenterHorizontal)`
    justify-content: flex-end;
    text-align: right;
    @media (max-width: 768px) {
        justify-content: center;
    }
`;

export const CenterLeft = styled(CenterHorizontal)`
    justify-content: flex-start;
    text-align: left;
    @media (max-width: 768px) {
        justify-content: center;
    }
`;

export const CenterAllDirections = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;
