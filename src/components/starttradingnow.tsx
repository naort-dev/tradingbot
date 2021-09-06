import { Button } from 'components';
import { Padding, PaddingSizes, MainContainer, Row, Text, Cell, Headline, Assets, HideMobile, HideDesktop } from '@trality/web-ui-components';
import { useLink } from '@hooks';
import React from 'react';
import { LazyImage } from './lazyImage';

export const StartTradingNow = () => {
    const followLink = useLink('login');
    return (
        <Padding size={{ top: PaddingSizes.NinetySix, bottom: PaddingSizes.NinetySix }}>
            <MainContainer>
                <Row>
                    <Cell size={6} mobileSize={12} alignVertical="middle" alignMobile="center">
                        <Padding
                            mobileSize={{
                                top: PaddingSizes.SixtyFour,
                                bottom: PaddingSizes.Twenty,
                            }}
                        >
                            <Headline headlineType="Headline5">Start trading now.</Headline>
                        </Padding>
                        <Padding
                            size={{
                                top: PaddingSizes.TwentyFour,
                                bottom: PaddingSizes.FiftySix,
                            }}
                            mobileSize={{
                                top: PaddingSizes.Twenty,
                                bottom: PaddingSizes.Twenty,
                            }}
                        >
                            <Text bodyType="Body2">Choose from our constantly expanding list of some of the world’s most trusted exchanges.</Text>
                        </Padding>
                        <HideMobile>
                            <Button onClick={() => followLink()}>Try it for free!</Button>
                        </HideMobile>
                    </Cell>
                    <Cell size={6} mobileSize={12}>
                        <Row>
                            <Cell size={6} mobileSize={6} align="right">
                                <Padding
                                    size={{
                                        bottom: PaddingSizes.Fourty,
                                    }}
                                    mobileSize={{
                                        top: PaddingSizes.Twenty,
                                        bottom: PaddingSizes.Twenty,
                                    }}
                                >
                                    <LazyImage src={Assets.Exchanges.Binance} />
                                </Padding>
                            </Cell>
                            <Cell size={6} mobileSize={6} align="right">
                                <Padding
                                    size={{
                                        bottom: PaddingSizes.Fourty,
                                    }}
                                    mobileSize={{
                                        top: PaddingSizes.Twenty,
                                        bottom: PaddingSizes.Twenty,
                                    }}
                                >
                                    <LazyImage src={Assets.Exchanges.Bitpanda} />
                                </Padding>
                            </Cell>
                            <Cell size={6} mobileSize={6} align="right">
                                <LazyImage src={Assets.Exchanges.Kraken} />
                            </Cell>
                            <Cell size={6} mobileSize={6} align="right">
                                <LazyImage src={Assets.Exchanges.Coinbase} />
                            </Cell>
                        </Row>
                    </Cell>
                </Row>
                <Row>
                    <Cell size={0} mobileSize={12} align="center">
                        <HideDesktop>
                            <Padding
                                size={{
                                    bottom: PaddingSizes.Fourty,
                                }}
                                mobileSize={{
                                    top: PaddingSizes.Twenty,
                                    bottom: PaddingSizes.Twenty,
                                }}
                            >
                                <Button onClick={() => followLink()}>Try it for free!</Button>
                            </Padding>
                        </HideDesktop>
                    </Cell>
                </Row>
            </MainContainer>
        </Padding>
    );
};
