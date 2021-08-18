import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { useDark } from 'hooks/dark';
import { Margins, Paddings } from 'theme';

import { Logos } from '@assets';
import { Layout } from '@containers';
import { LogoList, ExternalLink } from '@components';
import { EventType, SignupOrigins } from '@trality/web-tracking';
import { ConstUrl } from '@constants';
import { LazyImage } from 'components/lazyImage';
import { PageTypes } from 'containers/layout/page';
import { Divider, Padding, Cell, MainContainer, Row, Button, Text, PaddingSizes, TextLink, Assets } from '@trality/web-ui-components';
import { useLink } from 'hooks/useLink';

interface Props {
    pageType: PageTypes;
}

const FooterLogos = [
    {
        title: 'Tokentus',
        light: Logos.TokentusBlack,
        dark: Logos.TokentusWhite,
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
];

const firstMenu = [
    { onClick: true, link: 'bWFpbHRvOmVudGVycHJpc2VAdHJhbGl0eS5jb20/c3ViamVjdD1FbnRlcnByaXNlIFBsYW4gRW5xdWlyeQ==', name: 'Contact us' },
    { link: '/about', name: 'About us' },
    { link: '/blog', name: 'Blog' },
    { link: '/jobs', name: 'Jobs' },
];

const secondMenu = [
    { link: '/imprint', name: 'Imprint' },
    { link: '/privacy', name: 'Privacy' },
    { link: '/terms', name: 'Terms' },
];

const SocialLinks = [
    { link: 'https://discord.com/invite/h5BPuKBQHv', logo: Assets.Discord },
    { link: 'https://twitter.com/trality_bots', logo: Assets.Twitter },
    { link: 'https://www.instagram.com/trality_bots/', logo: Assets.Instagram },
    { link: 'https://www.facebook.com/trality', logo: Assets.Facebook },
];

export const Footer: React.FunctionComponent<Props> = ({ pageType }) => {
    const followLink = useLink('signup');
    const onContact = React.useCallback(() => {
        const target = 'bWFpbHRvOmVudGVycHJpc2VAdHJhbGl0eS5jb20/c3ViamVjdD1FbnRlcnByaXNlIFBsYW4gRW5xdWlyeQ==';
        window.location.assign(atob(target));
    }, []);
    return (
        <MainContainer>
            <Divider />
            <Padding
                size={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}
                mobileSize={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}
            >
                <Row>
                    <Cell size={3} mobileSize={12}>
                        <MainContainer>
                            <Row>
                                <Cell size={8} mobileSize={6}>
                                    <LazyImage src={Logos.TralityMainLogo} alt="Trality Logo" />
                                </Cell>
                            </Row>
                            <Row>
                                <Cell size={12} mobileSize={12}>
                                    <Row>
                                        {SocialLinks.map((item) => {
                                            return (
                                                <Cell size={2} mobileSize={2}>
                                                    <a href={item.link} target="_blank">
                                                        <img src={item.logo} />
                                                    </a>
                                                </Cell>
                                            );
                                        })}
                                    </Row>
                                </Cell>
                            </Row>
                        </MainContainer>
                    </Cell>
                    <Cell size={6} mobileSize={12}>
                        <MainContainer>
                            <Row>
                                <Cell size={6} mobileSize={6}>
                                    {firstMenu.map((item) => {
                                        return (
                                            <Padding
                                                size={{
                                                    top: PaddingSizes.Sixteen,
                                                    bottom: PaddingSizes.Sixteen,
                                                }}
                                                mobileSize={{
                                                    top: PaddingSizes.Twelve,
                                                    bottom: PaddingSizes.Twelve,
                                                }}
                                            >
                                                <TextLink
                                                    href={item.onClick ? '#' : item.link}
                                                    onClick={
                                                        item.onClick
                                                            ? () => {
                                                                  window.location.assign(atob(item.link));
                                                              }
                                                            : undefined
                                                    }
                                                >
                                                    {item.name}
                                                </TextLink>
                                            </Padding>
                                        );
                                    })}
                                </Cell>
                                <Cell size={6} mobileSize={6}>
                                    {secondMenu.map((item) => {
                                        return (
                                            <Padding
                                                size={{
                                                    top: PaddingSizes.Sixteen,
                                                    bottom: PaddingSizes.Sixteen,
                                                }}
                                                mobileSize={{
                                                    top: PaddingSizes.Twelve,
                                                    bottom: PaddingSizes.Twelve,
                                                }}
                                            >
                                                <TextLink href={item.link}>{item.name}</TextLink>
                                            </Padding>
                                        );
                                    })}
                                </Cell>
                            </Row>
                        </MainContainer>
                    </Cell>
                    <Cell align="right" size={3} mobileSize={12} alignMobile="left">
                        <Button onClick={() => followLink()}>Join now!</Button>
                    </Cell>
                </Row>
            </Padding>
            <Divider />
            <Padding
                size={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}
                mobileSize={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}
            >
                <Row>
                    {FooterLogos.map((item) => {
                        return (
                            <Cell size={2} mobileSize={6} alignVertical="middle">
                                <LazyImage src={item.light} />
                            </Cell>
                        );
                    })}
                </Row>
            </Padding>
            <Padding
                size={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}
                mobileSize={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}
            >
                <Row>
                    <Cell size={6} mobileSize={12}>
                        <Text bodyType="Body4">All rights reserved © Trality 2021</Text>
                    </Cell>
                    <Cell size={6} align="right" mobileSize={12} alignMobile="left">
                        <Text bodyType="Body4">Made with 💙 by Trality</Text>
                    </Cell>
                </Row>
            </Padding>
        </MainContainer>
    );
};
