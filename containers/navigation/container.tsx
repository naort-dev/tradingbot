import React from 'react';
import styled from 'styled-components';
import { Layout } from '@containers';
import { useOpen } from './hooks/useOpen';
import { Navigation } from '@theme';
import { MainContainer } from '@trality/web-ui-components';

interface Props {
    dark?: boolean;
    open?: boolean;
}

const Top = styled.nav<Props>`
    width: 100%;
    z-index: 1002;
    @media (max-width: 768px) {
        border-bottom: solid 1px #e9ecef;
        position: fixed;
        left: 0;
        top: 0;
        background-color: #fff;
        height: ${Navigation.Height};
        
`;

export const NavigationContainer: React.FC = ({ children }) => {
    const { open } = useOpen();

    return (
        <Top open={open}>
            <MainContainer>{children}</MainContainer>
        </Top>
    );
};
