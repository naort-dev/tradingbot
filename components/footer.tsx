import * as React from 'react';
import { LayoutCentered, Button } from '../theme';
import styled from 'styled-components';
import * as logoWhite from '../assets/images/trality_logo_white.png';
import * as logo from '../assets/images/logo_black_blue.png';

import { scrollIt } from '../util/scrollit';
import { withRouter, WithRouterProps } from 'next/router';
import { useMixpanel } from '../hooks/mixpanel';
import Link from 'next/link';
import { useDark, DarkProp } from '../hooks/dark';

import * as twitter from '../assets/images/twitter.svg';

import * as aws from './footer/aws.png';
import * as awsWhite from './footer/aws_white.png';
import * as hk from './footer/hk.png';
import * as inits from './footer/inits.png';
import * as vba from './footer/vba.png';
import * as vbaWhite from './footer/vba_white.png';

const Wrap = styled.div<DarkProp>`
    margin-bottom: 15px;
    margin-top: 45px;
    width: 100%;
    @media (max-width: 768px) {
        font-size: 14px;
    }
    color: ${(props) => props.theme.onLight};
    ${(props) =>
        props.dark &&
        `
        color: ${props.theme.onDark};
    `}
`;

const Top = styled.div<DarkProp>`
    padding-top: 35px;
    padding-bottom: 35px;
    border-bottom: 1px solid white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & img {
        height: 25px;
    }
    ${(props) =>
        !props.dark &&
        `
        border-bottom: 1px solid #dedede;
    `}
`;

const Bottom = styled.div`
    padding-top: 35px;
    padding-bottom: 35px;
    display: flex;
    justify-content: space-between;
`;

const L = styled.div`
    text-align: left;
    @media (max-width: 768px) {
        width: 50%;
    }
`;

const R = styled.div`
    text-align: right;
    & > div {
        margin-left: 35px;
    }
    & > div > a:hover {
        cursor: pointer;
        color: ${(props) => props.theme.main};
    }
    margin-top: -4px;
    @media (max-width: 768px) {
        width: 50%;
    }
`;

const MButton = styled(Button)`
    margin-left: 10px;
    @media (max-width: 500px) {
        display: none;
    }
`;

const LinkContainer = styled.div<DarkProp>`
    > a {
        color: ${(props) => props.theme.onDark};
        text-decoration: none;
        &:hover {
            color: #fff;
        }
        ${(props) =>
            !props.dark &&
            `
            color: ${props.theme.onLight};
            &:hover {
                color: ${props.theme.main};
            }
        `}
    }
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: space-between;
    max-width: 500px;
    @media (max-width: 768px) {
        display: none;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const LogoHeader = styled.div<DarkProp>`
    margin: 30px 0;
    color: ${(props) => props.theme.onLight};
    ${(props) =>
        props.dark &&
        `
        color: ${props.theme.onDark};
    `}
`;

const Logo = styled.div`
    width: 15%;
    > img {
        display: block;
        width: 100%;
        height: auto;
    }
`;

const Component: React.FunctionComponent<WithRouterProps> = (props) => {
    let jobs = props.router ? props.router.route == '/jobs' : false;
    let main = props.router ? props.router.route == '/' : false;
    let mixpanel = useMixpanel();
    const onClickTwitter = React.useCallback(() => {
        mixpanel.track('clickedOnTwitterBottom');
        window.open('https://twitter.com/trality_bots', '_blank');
    }, []);
    const linkTo = React.useCallback((id: string) => {
        scrollIt(document.querySelector(id), 300, 'easeOutQuad', () => mixpanel.track(`clicked${id}`));
    }, []);
    const { dark } = useDark();

    return (
        <LayoutCentered>
            <Wrap dark={dark}>
                <Top dark={dark}>
                    <div>
                        <img src={dark ? logoWhite : logo} alt="Trality Logo" />
                    </div>
                    <LinkContainer dark={dark}>
                        <Link replace prefetch href="/follow">
                            <a>Follow bots</a>
                        </Link>
                        <Link replace prefetch href="/build">
                            <a>Create bots</a>
                        </Link>
                        <Link replace prefetch href="/jobs">
                            <a>Jobs</a>
                        </Link>
                        {main ? (
                            <Button onClick={() => linkTo('#head')}>Subscribe</Button>
                        ) : (
                            <Link replace prefetch href="/">
                                <Button>Subscribe</Button>
                            </Link>
                        )}
                    </LinkContainer>
                </Top>
                <LogoHeader dark={dark}>Proudly supported by</LogoHeader>
                <LogoContainer>
                    <Logo>
                        <img src={dark ? vbaWhite : vba} />
                    </Logo>
                    <Logo>
                        <img src={inits} />
                    </Logo>
                    <Logo>
                        <img src={hk} />
                    </Logo>
                    <Logo>
                        <img src={dark ? awsWhite : aws} />
                    </Logo>
                </LogoContainer>
                <Bottom>
                    <L>All rights reserved © Trality 2019</L>
                    <R>Made with 💙 by Trality</R>
                </Bottom>
            </Wrap>
        </LayoutCentered>
    );
};

export const Footer = withRouter(Component);
