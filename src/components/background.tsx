import React from 'react';
import styled from 'styled-components';
import { Navigation } from '@theme';

const Container = styled.div`
    background-color: #fff;
    transition: 0.3s all;
`;

export const Background: React.FunctionComponent = (props) => {
    return <Container>{props.children}</Container>;
};
