import React from 'react';
import styled from 'styled-components';
import { useOpen } from './hooks/useOpen';
import { LinkItem, ButtonItem, DropdownItem, ItemGroup, ContactItem } from './item';

import * as twitter from '../../assets/images/twitter.svg';
import * as medium from '../../assets/images/medium.svg';
import * as telegram from '../../assets/images/telegram_trality.png';
import { useIsMobile } from 'hooks/useIsMobile';

interface OpenProps {
    open?: boolean;
}

const Container = styled.nav<OpenProps>`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    > div {
        margin-right: 15px;
    }
    > div:last-child {
        margin-right: 0px;
        margin-left: 58px;
    }
    @media (max-width: 768px) {
        opacity: 0;
        width: 0;
        > div:first-child {
            margin-top: 50px;
        }
        > div:last-child {
            margin-right: 0px;
            margin-left: 0px;
        }
        ${(props) =>
            props.open &&
            `
            opacity: 1.0;
            position: fixed;
            top: 60px;
            height: calc(100vh - 60px);
            left: 0;
            background-color: #181927;
            width: 100%;
            transition: opacity 0.3s;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
        `};
    }
`;

export const Menu = () => {
    const { open } = useOpen();
    const isMobile = useIsMobile();
    return (
        <Container open={open}>
            <DropdownItem
                name="Product"
                target="/"
                items={[
                    {
                        name: 'Code Editor',
                        target: '/product-code',
                    },
                    {
                        name: 'Rule Editor',
                        target: '/product-rule',
                    },
                    {
                        name: 'Marketplace',
                        target: '/product-mp',
                    },
                    {
                        name: `What's new`,
                        target: '/product-new',
                    },
                ]}
            />
            <LinkItem name="Pricing" target="/" />
            <DropdownItem
                name="Resources"
                target="/"
                items={[
                    {
                        name: 'Documentation',
                        target: '/product-code',
                    },
                    {
                        name: 'Blog',
                        target: '/product-rule',
                    },
                    {
                        name: 'Feature Requests',
                        target: '/product-mp',
                    },
                ]}
            />
            <ItemGroup>
                <ButtonItem name="Login" target="https://auth.beta.trality.com/#/login" />
                <ButtonItem name="Signup" target="https://auth.beta.trality.com/#/signup" dark={!isMobile} />
            </ItemGroup>
            <ItemGroup>
                <ContactItem name="Telegram" source={telegram} target="/" />
                <ContactItem name="Twitter" source={twitter} target="/" />
                <ContactItem name="Medium" source={medium} target="/" />
            </ItemGroup>
        </Container>
    );
};
