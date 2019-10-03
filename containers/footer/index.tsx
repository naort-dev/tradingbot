import styled from 'styled-components';
import * as React from 'react';
import { useMixpanel } from 'hooks/mixpanel';
import { useDark } from 'hooks/dark';
import { scrollIt } from 'util/scrollit';
import { Logos } from '@assets';
import { Layout } from '@containers';
import Link from 'next/link';
import { Button, LogoList } from '@components';
import { Margins, Paddings } from 'theme';

const Wrap = styled.div`
    margin-bottom: ${Margins.Middle};
    margin-top: ${Margins.Middle};
    width: 100%;
    @media (max-width: 768px) {
        font-size: 14px;
    }
    color: ${(props) => props.theme.onDark};
`;

const Top = styled.div`
    padding: ${Paddings.Large} 0px;
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    & img {
        height: 25px;
    }
`;

const Bottom = styled.div`
    padding: ${Paddings.Large} 0px;
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

const LinkContainer = styled.div`
    > a {
        text-decoration: none;
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

const LogoHeader = styled.div`
    margin: ${Margins.Large} 0;
    color: ${(props) => props.theme.onLight};
`;

export const Footer: React.FunctionComponent = () => {
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
        <Layout.Center>
            <Wrap>
                <Top>
                    <div>
                        <img src={dark ? Logos.TralityWhiteWhite : Logos.TralityBlackBlue} alt="Trality Logo" />
                    </div>
                    <LinkContainer>
                        <Link href="/blog">
                            <a>Blog</a>
                        </Link>
                        <Link href="/jobs">
                            <a>Jobs</a>
                        </Link>
                        <Link href="/imprint">
                            <a>Imprint</a>
                        </Link>
                        <Link href="/privacy">
                            <a>Privacy</a>
                        </Link>
                        <Link href="/terms">
                            <a>Terms</a>
                        </Link>
                        <a href="https://auth.beta.trality.com/#/signup" target="_blank">
                            <Button>Join now</Button>
                        </a>
                    </LinkContainer>
                </Top>
                <LogoHeader>Proudly supported by</LogoHeader>
                <LogoList
                    logos={[
                        {
                            title: 'Vienna Business Agency',
                            light: Logos.VbaWhite,
                            dark: Logos.Vba,
                        },
                        {
                            title: 'Inits Incubator',
                            light: Logos.Inits,
                        },
                        {
                            title: 'Herbst Kinsky Incubator',
                            light: Logos.Hk,
                        },
                        {
                            title: 'AWS Activate',
                            light: Logos.AwsWhite,
                            dark: Logos.Aws,
                        },
                    ]}
                />
                <Bottom>
                    <L>All rights reserved © Trality 2019</L>
                    <R>Made with 💙 by Trality</R>
                </Bottom>
            </Wrap>
        </Layout.Center>
    );
};
