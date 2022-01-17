import React from 'react';
import styled from 'styled-components';
import { useOpen } from './hooks/useOpen';

import { Navigation } from '../../theme';
import { PageTypes } from '../../containers/layout/page';
import { MainContainer, Padding, PaddingSizes, Row, Cell, Button, HideMobile, HideDesktop, Dropdown, NavLink } from '@trality/web-ui-components';
import { useLink } from '../../hooks/useLink';

interface OpenProps {
    open?: boolean;
}

interface Props {
    pageType: PageTypes;
    isMobile: boolean;
}

const Container = styled.nav<OpenProps>`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 768px) {
        opacity: 0;
        width: 0;
        background: white;
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
            width: 100%;
            transition: opacity 0.3s;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            & > * {
                width: 80% !important;
                left: 10%;
                position: relative;
            }
        `};
    }
`;

export const Menu: React.FunctionComponent<Props> = ({ pageType, isMobile }) => {
    const { open } = useOpen();

    const followLoginLink = useLink('login');

    const followSignupLink = useLink('signup');
    return (
        <Container open={open}>
            <MainContainer>
                <Row>
                    <Cell size={9} mobileSize={12} alignVertical="middle">
                        <Row>
                            <Dropdown
                                text="Features"
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
                                        name: 'Marketplace',
                                        target: '/marketplace',
                                    },
                                ]}
                            />
                            <Padding
                                size={{
                                    top: PaddingSizes.Twenty,
                                    bottom: PaddingSizes.Twenty,
                                    left: PaddingSizes.Sixteen,
                                    right: PaddingSizes.Sixteen,
                                }}
                                mobileSize={{
                                    top: PaddingSizes.Sixteen,
                                    bottom: PaddingSizes.Sixteen,
                                }}
                            >
                                <NavLink href="/pricing">Pricing</NavLink>
                            </Padding>
                            <HideMobile>
                                <Padding
                                    size={{
                                        top: PaddingSizes.Twenty,
                                        bottom: PaddingSizes.Twenty,
                                        left: PaddingSizes.Sixteen,
                                        right: PaddingSizes.Sixteen,
                                    }}
                                    mobileSize={{
                                        top: PaddingSizes.Sixteen,
                                        bottom: PaddingSizes.Sixteen,
                                    }}
                                >
                                    <NavLink href="/blog">Blog</NavLink>
                                </Padding>
                            </HideMobile>
                            <HideDesktop>
                                <Padding
                                    size={{
                                        top: PaddingSizes.Sixteen,
                                        bottom: PaddingSizes.Sixteen,
                                        left: PaddingSizes.Sixteen,
                                        right: PaddingSizes.Sixteen,
                                    }}
                                    mobileSize={{
                                        top: PaddingSizes.Sixteen,
                                        bottom: PaddingSizes.Sixteen,
                                    }}
                                >
                                    <NavLink href="/blog">Blog</NavLink>
                                </Padding>
                            </HideDesktop>

                            <Dropdown
                                text="Resources"
                                items={[
                                    {
                                        name: 'Documentation',
                                        target: 'https://docs.trality.com',
                                    },
                                    {
                                        name: 'Jobs',
                                        target: '/jobs',
                                    },
                                    {
                                        name: 'About us',
                                        target: '/about',
                                    },
                                    {
                                        name: 'Security',
                                        target: '/security',
                                    },
                                ]}
                            />
                        </Row>
                    </Cell>
                    <Cell size={3} mobileSize={12} alignVertical="middle">
                        <Row>
                            <Cell size={6} mobileSize={12} align="right" alignVertical="middle" alignMobile="left">
                                <Padding
                                    mobileSize={{
                                        top: PaddingSizes.Sixteen,
                                        bottom: PaddingSizes.Sixteen,
                                    }}
                                >
                                    <Button
                                        size={'medium'}
                                        fullWidth={isMobile}
                                        variant={isMobile ? 'outlined' : 'text'}
                                        onClick={() => followLoginLink()}
                                    >
                                        {' '}
                                        Login{' '}
                                    </Button>
                                </Padding>
                            </Cell>
                            <Cell size={6} mobileSize={12} alignVertical="middle">
                                <Button fullWidth={isMobile} size={'medium'} onClick={() => followSignupLink()}>
                                    Signup
                                </Button>
                            </Cell>
                        </Row>
                    </Cell>
                </Row>
            </MainContainer>
        </Container>
    );
};
