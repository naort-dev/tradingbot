import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: ${(props) => props.theme.background};
    transition: 0.3s all;
`;

export const Background: React.FunctionComponent = (props) => {
    return <Container>{props.children}</Container>;
};
