import * as React from 'react';
import { Button } from '../theme';
import styled from 'styled-components';
import { withRouter, WithRouterProps } from 'next/router';
import * as logo from '../assets/images/logo_black_blue.png';
import * as logoDark from '../assets/images/trality_logo_white.png';
import * as twitter from '../assets/images/twitter.svg';

import { Container } from '../theme';
import { scrollIt } from '../util/scrollit';
import Link from 'next/link';

import { useMixpanel } from '../hooks/mixpanel';

interface BaseStyleProps {
    open?: boolean;
    dark?: boolean;
}

const Logo = styled.img`
    height: 33px;
    @media (max-width: 768px) {
        height: 25px;
    }
`;

const Top = styled.div<BaseStyleProps>`
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
        background-color: white;
        height: 60px;
        ${(props) =>
            props.open &&
            `
            background-color: #181927;
            transition: background-color 0.3s;
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

const ItemContainer = styled.nav<BaseStyleProps>`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: 768px) {
        opacity: 0;
        width: 0;
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

const Item = styled.div<BaseStyleProps & { num: number }>`
    font-size: 15px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.53;
    letter-spacing: normal;
    margin-left: 58px;
    cursor: pointer;
    & > a {
        text-decoration: none;
        color: black;
        transition: 0.3s all;
    }
    &:hover {
        & > a {
            color: ${(props) => props.theme.main};
        }
    }
    @media (max-width: 1024px) {
        margin-left: 48px;
    }
    @media (max-width: 768px) {
        display: none;
        opacity: 0.0;
        margin-left: 0px;
        transition: 0.3s all;
        transition-delay: ${(props) => 0.3 + props.num * 0.1}s;
        ${(props) =>
            props.open &&
            `
            display: block;
            color: #fff;
            font-size: 28px;
            opacity: 1.0;
            margin-left: 28px;
            margin-bottom: 28px;
            &:first-child {
                margin-top: 100px;
            }
            & > a {
                color: white;
            }
        `}
`;

const NavContainer = styled(Container)`
    display: flex;
    z-index: 1;
    @media (max-width: 768px) {
        width: 100%;
        padding-left: 20px;
        paddingright: 20px;
        justify-content: space-between;
    }
`;

const MenuRight = styled.div<BaseStyleProps>`
    display: none;
    height: 25px;
    width: 25px;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    position: relative;
    @media (max-width: 768px) {
        display: flex;
    }
    & > div {
        background-color: #000;
    }
    ${(props) =>
        props.open &&
        `
        & > div {
            background-color: #fff;
        }
    `};
`;

const Twitter = styled.img`
    height: 20px;
`;

const MenuBar = styled.div<BaseStyleProps>`
    width: 20px;
    height: 2px;
    position: absolute;
    top: 5px;
    right: 0;
    transition: 0.3s all;
    ${(props) =>
        props.id == '1' &&
        `
        top: 5px;
        ${props.open &&
            `
            transform: rotate(-45deg);
            transform-origin: 100% 100%;
        `}
    `}
    ${(props) =>
        props.id == '2' &&
        `
        top: 12px;
        ${props.open &&
            `
            transform: rotate(45deg) translate(2px);
            transform-origin: 55% 22%;
        `}
    `}
    ${(props) =>
        props.id == '3' &&
        `
        top: 19px;
        width: 16px;
        ${props.open &&
            `
            opacity: 0.0;
        `}
    `}
`;

const ContactButton = styled(Button)<BaseStyleProps>`
    border: none;
    padding: 0;
    &:hover {
        border: none;
    }
    @media (max-width: 1024px) {
        display: none;
    }
    @media (max-width: 768px) {
        ${(props) =>
            props.open &&
            `
            display: block;
            margin-top: 15px;
        `}
`;

interface NavigationProps {
    dark: boolean;
}

const Component: React.FunctionComponent<NavigationProps & WithRouterProps> = (props) => {
    let [open, setOpen] = React.useState(false);
    let jobs = props.router ? props.router.route.indexOf('/jobs') !== -1 : false;
    let mixpanel = useMixpanel();

    const toggleMenu = React.useCallback(() => {
        mixpanel.track('toggleMenu');
        setOpen(!open);
    }, [open]);

    const onClickTwitter = React.useCallback(() => {
        mixpanel.track('clickedOnTwitterTop');
        window.open('https://twitter.com/trality_bots', '_blank');
    }, []);

    const linkTo = React.useCallback((id: string) => {
        setOpen(false);
        scrollIt(document.querySelector(id), 300, 'easeOutQuad', () => mixpanel.track(`clicked${id}`));
    }, []);

    return (
        <Top dark={props.dark} open={open}>
            <NavContainer>
                <Link prefetch replace href="/">
                    <a>
                        <Logo src={props.dark || open ? logoDark : logo} />
                    </a>
                </Link>
                <ItemContainer open={open}>
                    {jobs ? (
                        <>
                            <Item open={open} num={1}>
                                <Link replace prefetch href="/#follow">
                                    <a>follow bots</a>
                                </Link>
                            </Item>
                            <Item open={open} num={2}>
                                <Link replace prefetch href="/#build">
                                    <a>build bots</a>
                                </Link>
                            </Item>
                            <Item open={open} num={3}>
                                <Link replace prefetch href="/jobs">
                                    <a>jobs</a>
                                </Link>
                            </Item>
                        </>
                    ) : (
                        <>
                            <Item open={open} num={1}>
                                <a onClick={() => linkTo('#follow')}>follow bots</a>
                            </Item>
                            <Item open={open} num={2}>
                                <a onClick={() => linkTo('#build')}>build bots</a>
                            </Item>
                            <Item open={open} num={3}>
                                <Link replace prefetch href="/jobs">
                                    <a>jobs</a>
                                </Link>
                            </Item>
                        </>
                    )}
                    <Item open={open} num={3}>
                        <ContactButton type="button" hollow small open={open} onClick={onClickTwitter}>
                            <Twitter src={twitter} />
                        </ContactButton>
                    </Item>
                </ItemContainer>
                <MenuRight onClick={toggleMenu} open={open || props.dark}>
                    <MenuBar id="1" open={open} />
                    <MenuBar id="2" open={open} />
                    <MenuBar id="3" open={open} />
                </MenuRight>
            </NavContainer>
        </Top>
    );
};

export const Navigation = withRouter(Component);
