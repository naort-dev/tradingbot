import React from 'react';
import styled from 'styled-components';
import { Layout } from '@containers';
import { useOpen } from './hooks/useOpen';
import { Navigation, Paddings } from 'theme';

interface Props {
    dark?: boolean;
    open?: boolean;
}

const Top = styled.nav<Props>`
    height: 113px;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    z-index: 1002;
    @media (max-width: 768px) {
        border-bottom: solid 1px #e9ecef;
        position: fixed;
        left: 0;
        top: 0;
        background-color: ${(props) => props.theme.background};
        height: ${Navigation.Height};
        ${(props) =>
            props.open &&
            `
        background-color: #181927;
        transition: background-color 0.3s;
        border-bottom: solid 1px #32364c;
    `};
        ${(props) =>
            props.dark &&
            `
        background-color: #181927;
        border-bottom: solid 1px #32364c;
    `};
    }
    ${(props) =>
        props.dark &&
        `
    background-color: #181927;
    border-bottom: solid 1px #32364c;
`};
`;

const Wrapper = styled((props) => <Layout.Center {...props} />)`
    display: flex;
    z-index: 1;
    @media (max-width: 768px) {
        width: 100%;
        padding-left: ${Paddings.Large};
        padding-right: ${Paddings.Large};
        justify-content: space-between;
        display: flex;
    }
`;

export const NavigationContainer: React.FC = ({ children }) => {
    const { open } = useOpen();

    return (
        <Top open={open}>
            <Wrapper open={open}>{children}</Wrapper>
        </Top>
    );
};