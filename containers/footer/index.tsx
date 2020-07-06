import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { useDark } from 'hooks/dark';
import { Margins, Paddings } from 'theme';

import { Logos } from '@assets';
import { Layout } from '@containers';
import { Button, LogoList, ExternalLink } from '@components';
import { EventType, SignupOrigins } from '@trality/web-tracking';
import { ConstUrl } from '@constants';

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
    align-items: center;
`;

const L = styled.div`
    text-align: left;
    @media (max-width: 768px) {
        width: 50%;
    }
    display: flex;
    align-items: center;
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

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    display: inline-block;
    > a > img {
        max-height: 25px;
        margin-left: 10px;
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
    color: ${(props) => props.theme.onDark};
`;

export const Footer: React.FunctionComponent = () => {
    const { dark } = useDark();

    return (
        <Layout.Center>
            <Wrap>
                <Top>
                    <div>
                        <img src={dark ? Logos.TralityWhiteWhite : Logos.TralityBlackBlue} alt="Trality Logo" />
                    </div>
                    <LinkContainer>
                        <ExternalLink href="https://blog.trality.com">{'Blog'}</ExternalLink>
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
                        <a>
                            <Button
                                to={ConstUrl.Signup}
                                event={{
                                    type: EventType.SignupInitiated,
                                    attributes: { signupOrigin: SignupOrigins.Footer },
                                }}
                            >
                                Join now
                            </Button>
                        </a>
                    </LinkContainer>
                </Top>
                <LogoHeader>Proudly supported by</LogoHeader>
                <LogoList
                    logos={[
                        {
                            title: 'AWS Activate',
                            light: Logos.Aws,
                            dark: Logos.AwsWhite,
                        },
                        {
                            title: 'Blockrocket',
                            light: Logos.BlockRocketBlack,
                            dark: Logos.BlockRocketWhite,
                        },
                        {
                            title: 'FFG',
                            light: Logos.FFGBlack,
                            dark: Logos.FFGWhite,
                        },
                        {
                            title: 'Herbst Kinsky Incubator',
                            light: Logos.Hk,
                        },
                        {
                            title: 'Inits Incubator',
                            light: Logos.Inits,
                        },
                        {
                            title: 'Vienna Business Agency',
                            light: Logos.Vba,
                            dark: Logos.VbaWhite,
                        },
                    ]}
                />
                <Bottom>
                    <L>
                        All rights reserved © Trality 2020
                        <LogoContainer>
                            <a href="https://t.me/trality" target="_blank">
                                <img src={Logos.Telegram} />
                            </a>
                            <a href="https://twitter.com/trality_bots" target="_blank">
                                <img src={Logos.Twitter} />
                            </a>
                        </LogoContainer>
                    </L>
                    <R>Made with 💙 by Trality</R>
                </Bottom>
            </Wrap>
        </Layout.Center>
    );
};
