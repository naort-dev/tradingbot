import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: ${(props) => props.theme.background};
    transition: 0.3s all;
    @media (max-width: 768px) {
        > section:nth-child(2) {
            margin-top: 60px;
        }
    }
`;

export const Background: React.FunctionComponent = (props) => {
    return <Container>{props.children}</Container>;
};
