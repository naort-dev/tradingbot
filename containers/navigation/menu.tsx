import React from 'react';
import styled from 'styled-components';
import { useOpen } from './hooks/useOpen';
import { LinkItem, ButtonItem, DropdownItem, ItemGroup, ContactItem } from './item';

import { useIsMobile } from '../../hooks/useIsMobile';
import { Navigation } from 'theme';
import { EventType, SignupOrigins } from '@trality/web-tracking';
import { ConstUrl } from '@constants';

interface OpenProps {
    open?: boolean;
}

const Container = styled.nav<OpenProps>`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
            top: ${Navigation.Height};
            height: calc(100vh - ${Navigation.Height});
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
                name="Creator tools"
                target="/"
                items={[
                    {
                        name: 'Code Editor',
                        target: '/creator/code-editor',
                    },
                    {
                        name: 'Rule Builder',
                        target: '/creator/rule-builder',
                    },
                    {
                        name: 'Features',
                        target: '/creator/features',
                    },
                ]}
            />
            <LinkItem name="Marketplace" target="/marketplace" />
            <LinkItem name="Pricing" target="/pricing" />
            <LinkItem name="Competition" target="/competition" />
            <DropdownItem
                name="Resources"
                target="/"
                items={[
                    {
                        name: 'FAQs',
                        target: '/resources/faq',
                    },
                    {
                        name: 'Documentation',
                        target: 'https://docs.trality.com',
                    },
                    {
                        name: 'Blog',
                        target: '/blog',
                    },
                    {
                        name: 'Jobs',
                        target: '/jobs',
                    },
                    {
                        name: 'Team',
                        target: '/team',
                    },
                ]}
            />
            <ItemGroup>
                <ButtonItem name="Login" target={ConstUrl.Login} hollow={!isMobile} />
                <ButtonItem
                    name="Signup"
                    target={ConstUrl.Signup}
                    event={{
                        type: EventType.SignupInitiated,
                        attributes: { signupOrigin: SignupOrigins.HeaderCta },
                    }}
                />
            </ItemGroup>
        </Container>
    );
};
