import React from 'react';
import styled from 'styled-components';
import { Layout } from '@containers';
import { useOpen } from './hooks/useOpen';
import { Navigation } from 'theme';
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
        background-color: ${(props) => props.theme.background};
        height: ${Navigation.Height};
        
`;

const Wrapper = styled((props) => <Layout.Center {...props} />)`
    display: flex;
    z-index: 1;
    @media (max-width: 768px) {
        width: 100%;
        justify-content: space-between;
        display: flex;
    }
`;

export const NavigationContainer: React.FC = ({ children }) => {
    const { open } = useOpen();

    return (
        <Top open={open}>
            <MainContainer>
                <Wrapper open={open}>{children}</Wrapper>
            </MainContainer>
        </Top>
    );
};
