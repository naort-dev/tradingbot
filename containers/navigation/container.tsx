import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Layout } from '@containers';
import { useOpen } from './hooks/useOpen';
import { Navigation } from '@theme';
import { MainContainer } from '@trality/web-ui-components';

interface Props {
    isOnTop?: boolean;
    dark?: boolean;
    open?: boolean;
}

const Top = styled.nav<Props>`
    width: 100%;
    z-index: 1002;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #fff;
    ${(props) => !props.isOnTop && 'box-shadow: 0px 8px 24px #0C0C0C14'};
    transition: .25s;
    @media (max-width: 768px) {
        border-bottom: solid 1px #e9ecef;
        height: ${Navigation.Height};
        box-shadow: none;
    }
`;

const Placeholder = styled.div`
    margin-bottom: 92px;
`;

export const NavigationContainer: React.FC = ({ children }) => {
    const { open } = useOpen();
    const [ onTop, setOnTop ] = useState(true);
    
    const watchScroll = (e: Event) => {
        const pagePosotion = document.documentElement.scrollTop || document.body.scrollTop;
        setOnTop(pagePosotion === 0);
    };

    useEffect(() => {
        document.addEventListener("scroll", watchScroll);
        
        return () => {
            document.removeEventListener("scroll", watchScroll);
        };
    }, []);

    return (
        <>
            <Placeholder />
            <Top open={open} isOnTop={onTop}>
                <MainContainer>{children}</MainContainer>
            </Top>
        </>
    );
};
