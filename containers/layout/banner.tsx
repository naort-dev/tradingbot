import React from 'react';
import styled from 'styled-components';
import { ThemeColors, Paddings } from 'theme';
import { PatternType, Patterns } from '@assets';

interface BannerProps {
    pattern?: PatternType;
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
    ${(props) =>
        props.pattern &&
        `
        background: url(${Patterns[props.pattern]});
    `}
    width: 100%;
    display: flex;
    justify-content: center;
    padding: ${Paddings.VeryLarge} 0px;
`;

export const Banner: React.FC<BannerProps> = ({ children, ...props }) => {
    return <BannerContainer {...props}>{children}</BannerContainer>;
};
