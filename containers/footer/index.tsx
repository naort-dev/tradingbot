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
import { Events, SignupAttribute, SignupOrigins } from '@constants';

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
                        <Link href="https://blog.trality.com">
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
                        <a>
                            <Button
                                to="https://auth.beta.trality.com/#/signup"
                                event={Events.Signup}
                                attributes={SignupAttribute(SignupOrigins.Footer)}
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
                    <L>All rights reserved © Trality 2020</L>
                    <R>Made with 💙 by Trality</R>
                </Bottom>
            </Wrap>
        </Layout.Center>
    );
};
