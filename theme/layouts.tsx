import * as React from 'react';
import styled from 'styled-components';

export const Container = styled.div<{ dark?: boolean }>`
    display: flex;
    width: 80vw;
    max-width: 1100px;
    @media (max-width: 768px) {
        display: block;
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
    }
`;

const Left = styled.div<{ justify?: string; hide?: boolean }>`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.justify ? props.justify : 'center')};
    position: relative;
    @media (max-width: 768px) {
        width: 100%;
        min-height: 80vh;
        justify-content: center;
        align-items: center;
        ${(props) => props.hide && 'display: none;'}
    }
`;

const Right = styled(Left)``;

const Center = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const LayoutContainer = styled(Container)<{ content: 'left' | 'right' }>`
    @media (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: ${(props) => (props.content == 'right' ? 'column-reverse' : 'column')};
    }
`;

export interface LayoutProps {
    dark?: boolean;
}

export interface LayoutDividedProps extends LayoutProps {
    content: 'right' | 'left';
    ljustify?: string;
    hideLeft?: boolean;
    rjustify?: string;
    hideRight?: boolean;
    left: React.ReactNode;
    right: React.ReactNode;
}

export const LayoutDivided: React.FunctionComponent<LayoutDividedProps> = (props) => {
    return (
        <LayoutContainer dark={props.dark} content={props.content}>
            <Left justify={props.ljustify} hide={props.hideLeft}>
                {props.left}
            </Left>
            <Right justify={props.rjustify} hide={props.hideRight}>
                {props.right}
            </Right>
        </LayoutContainer>
    );
};

export const LayoutCentered: React.FunctionComponent<LayoutProps> = (props) => {
    return (
        <Container dark={props.dark}>
            <Center>{props.children}</Center>
        </Container>
    );
};

export const LayoutTop: React.FunctionComponent<LayoutProps> = (props) => {
    return (
        <Container dark={props.dark}>
            <Center>{props.children}</Center>
        </Container>
    );
};
