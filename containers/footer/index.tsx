import * as React from 'react';
import styled from '@emotion/styled';
import { useLocation } from '@reach/router';
import { Logos } from '@assets';
import { GDPR, Layout } from '@containers';
import { LogoList, ExternalLink } from '@components';
import { EventType, SignupOrigins } from '@trality/web-tracking';
import { ConstUrl } from '@constants';
import { LazyImage } from 'components/lazyImage';
import { PageTypes } from '../../containers/layout/page';
import { Divider, Padding, Cell, MainContainer, Row, Button, Text, PaddingSizes, TextLink, Assets, SvgIcon } from '@trality/web-ui-components';
import { useLink } from '../../hooks/useLink';

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
        title: 'FFG',
        light: Logos.FFGBlack,
        dark: Logos.FFGWhite,
    },
    {
        title: 'Inits Incubator',
        light: Logos.Inits,
    },
    {
        title: 'Blockrocket',
        light: Logos.BlockRocketBlack,
        dark: Logos.BlockRocketWhite,
    },
    {
        title: 'Herbst Kinsky Incubator',
        light: Logos.Hk,
    },
    {
        title: 'Vienna Business Agency',
        light: Logos.Vba,
        dark: Logos.VbaWhite,
    },
];

const firstMenu = [

    { link: '/about', name: 'About us' },
    { link: '/blog', name: 'Blog' },
    { link: '/jobs', name: 'Jobs' },
];

const secondMenu = [
    { link: '/press', name: 'Press' },
    { link: '/imprint', name: 'Imprint' },
    { link: '/privacy', name: 'Privacy' },
    { link: '/terms', name: 'Terms' },
];

export const SocialLinks = [
    { link: 'https://discord.gg/trality', icon: 'ic-social-discord' },
    { link: 'https://twitter.com/trality_bots', icon: 'ic-social-twitter' },
    { link: 'https://www.instagram.com/trality_bots/', icon: 'ic-social-instagram' },
    { link: 'https://www.facebook.com/trality', icon: 'ic-social-facebook' },
];

const SocialIcon = styled(SvgIcon)`
    fill: #353535;
    &:hover {
        fill: #00b8e6;
    }
`;

export const Footer: React.FunctionComponent<Props> = ({ pageType }) => {
    const followLink = useLink('signup');
    const location = useLocation();
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
                                    <Padding size={{ bottom: PaddingSizes.ThirtySix }}>
                                        <LazyImage src={Assets.TralityLogo} alt="Trality Logo" />
                                    </Padding>
                                </Cell>
                            </Row>
                            <Row>
                                <Cell size={12} mobileSize={12}>
                                    <Row>
                                        {SocialLinks.map((item) => {
                                            return (
                                                <Cell size={2} mobileSize={2}>
                                                    <TextLink href={item.link} target="_blank">
                                                        <SocialIcon name={item.icon} width="24" height="24" viewBox="0 0 24 24" />
                                                    </TextLink>
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
                                                    top: PaddingSizes.Eight,
                                                    bottom: PaddingSizes.Eight,
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
                                                    <Text bodyType="Body2">{item.name}</Text>
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
                                                    top: PaddingSizes.Eight,
                                                    bottom: PaddingSizes.Eight,
                                                }}
                                                mobileSize={{
                                                    top: PaddingSizes.Twelve,
                                                    bottom: PaddingSizes.Twelve,
                                                }}
                                            >
                                                <TextLink href={item.link}>
                                                    <Text bodyType="Body2">{item.name}</Text>
                                                </TextLink>
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
                    <Cell size={12} mobileSize={12}>
                        <Text bodyType="Body2">Proudly supported by</Text>
                    </Cell>
                </Row>
            </Padding>
            <Row>
                {FooterLogos.map((item) => {
                    return (
                        <Cell size={2} mobileSize={6} alignVertical="middle">
                            <LazyImage src={item.light} maxWidth={164} />
                        </Cell>
                    );
                })}
            </Row>
            {/blog/g.test(location.pathname) && (
                <Row>
                    <Cell size={12} align="center" alignMobile="center" mobileSize={12}>
                        <Cell size={1} mobileSize={3} align="center" style={{ margin: '0 auto' }}>
                            <a href="https://sourceforge.net/software/product/Trality/">
                                <LazyImage src={'https://b.sf-syn.com/badge_img/3322874/light-partner?&variant_id=sf&r=https://www.trality.com/'} />
                            </a>
                        </Cell>
                    </Cell>
                </Row>
            )}
            <Padding
                size={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}
                mobileSize={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}
            >
                <Row>
                    <Cell size={6} mobileSize={12}>
                        <Text bodyType="Caption" lighter>
                            All rights reserved © Trality {new Date().getFullYear()}
                        </Text>
                    </Cell>
                    <Cell size={6} align="right" mobileSize={12} alignMobile="left">
                        <Text bodyType="Caption">Made with 💙 by Trality</Text>
                    </Cell>
                </Row>
            </Padding>

            <GDPR />
        </MainContainer>
    );
};
