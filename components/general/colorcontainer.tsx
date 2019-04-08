import React from 'react';
import styled from 'styled-components';
import { useDark } from '../../hooks/dark';

const Container = styled.div<{ dark?: boolean }>`
    background-color: ${(props) => (props.dark ? '#181927' : 'transparent')};
    transition: 0.3s all;
`;

export const ColorContainer: React.FunctionComponent = (props) => {
    const { dark } = useDark();
    return <Container dark={dark}>{props.children}</Container>;
};
