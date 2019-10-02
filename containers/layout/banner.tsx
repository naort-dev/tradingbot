import React from 'react';
import styled from 'styled-components';
import { ThemeColors } from 'theme';

interface BannerProps {
    color?: ThemeColors | 'transparent';
    backgroundColor?: ThemeColors | 'transparent';
}

const BannerContainer = styled.div<BannerProps>`
    ${(props) =>
        props.color &&
        `
        color: ${props.theme[props.color]};
        h1, h2, h3, h4, h5, h6 {
            color: ${props.theme[props.color]};
        }
    `}
    ${(props) =>
        props.backgroundColor &&
        `
        background-color: ${props.theme[props.backgroundColor]};
    `}
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 70px 0px;
`;

export const Banner: React.FC<BannerProps> = ({ children, ...props }) => {
    return <BannerContainer {...props}>{children}</BannerContainer>;
};
