import React from 'react';
import styled from 'styled-components';

interface Props {
    title: string;
    subtitle?: string;
    expandHeight?: boolean;
    large?: boolean;
    center?: boolean;
}

const Container = styled.div<{ center?: boolean }>`
    width: 100%;
    ${(props) =>
        props.center &&
        `
        > h2, h4, h5 {
            text-align: center;
        }
    `}
`;

const Content = styled.div<{ expandHeight?: boolean }>`
    ${(props) =>
        props.expandHeight &&
        `
   height: 100%;
`}
`;

export const Header: React.FC<Props> = ({ children, title, subtitle, ...props }) => {
    return (
        <Container {...props}>
            <h2>{title}</h2>
            {subtitle && <h5>{subtitle}</h5>}
            <Content {...props}>{children}</Content>
        </Container>
    );
};
