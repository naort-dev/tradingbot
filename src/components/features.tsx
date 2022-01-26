import { Assets, Cell, Headline, MainContainer, Padding, Text, PaddingSizes, Row, SubHeadline } from '@trality/web-ui-components';
import * as React from 'react';
import { LazyImage } from './lazyImage';

export const Features = () => {
    return (
        <Padding size={{ top: PaddingSizes.NinetySix, bottom: PaddingSizes.NinetySix }}>
            <MainContainer>
                <Row>
                    <Cell size={12} mobileSize={12} align="center">
                        <Padding
                            size={{
                                bottom: PaddingSizes.SixtyFour,
                            }}
                            mobileSize={{
                                top: PaddingSizes.SixtyFour,
                                bottom: PaddingSizes.SixtyFour,
                            }}
                        >
                            <Headline headlineType="Headline2">Your funds and algorithms are safe.</Headline>
                        </Padding>
                    </Cell>
                </Row>
                <Row>
                    <Cell size={4} mobileSize={12} align="center">
                        <Padding
                            size={{
                                left: PaddingSizes.ThirtyTwo,
                                right: PaddingSizes.ThirtyTwo,
                            }}
                            mobileSize={{
                                top: PaddingSizes.Twenty,
                                bottom: PaddingSizes.Fourty,
                            }}
                        >
                            <Row center>
                                <Cell size={5} mobileSize={4}>
                                    <LazyImage src={Assets.FundsSecurity} />
                                </Cell>
                            </Row>
                            <Padding
                                size={{
                                    top: PaddingSizes.ThirtyTwo,
                                    bottom: PaddingSizes.Sixteen,
                                }}
                            >
                                <SubHeadline subheadlineType="SubHeadline2">Secure</SubHeadline>
                            </Padding>
                            <Text bodyType="Body2">
                                Your funds remain safe on your exchange. Trality will never touch them directly and only use official exchange APIs.
                            </Text>
                        </Padding>
                    </Cell>
                    <Cell size={4} mobileSize={12} align="center">
                        <Padding
                            size={{
                                left: PaddingSizes.ThirtyTwo,
                                right: PaddingSizes.ThirtyTwo,
                            }}
                            mobileSize={{
                                top: PaddingSizes.Twenty,
                                bottom: PaddingSizes.Fourty,
                            }}
                        >
                            <Row center>
                                <Cell size={5} mobileSize={4}>
                                    <LazyImage src={Assets.CloudBased} />
                                </Cell>
                            </Row>
                            <Padding
                                size={{
                                    top: PaddingSizes.ThirtyTwo,
                                    bottom: PaddingSizes.Sixteen,
                                }}
                            >
                                <SubHeadline subheadlineType="SubHeadline2">Cloud-based</SubHeadline>
                            </Padding>
                            <Text bodyType="Body2">
                                Your algorithms run reliably 24/7 and never miss a trade. Trality eliminates the need to setup your own trading
                                servers!
                            </Text>
                        </Padding>
                    </Cell>
                    <Cell size={4} mobileSize={12} align="center">
                        <Padding
                            size={{
                                left: PaddingSizes.ThirtyTwo,
                                right: PaddingSizes.Fourty,
                            }}
                            mobileSize={{
                                top: PaddingSizes.Twenty,
                                bottom: PaddingSizes.Sixteen,
                            }}
                        >
                            <Row center>
                                <Cell size={5} mobileSize={4}>
                                    <LazyImage src={Assets.Encrypted} />
                                </Cell>
                            </Row>
                            <Padding
                                size={{
                                    top: PaddingSizes.ThirtyTwo,
                                    bottom: PaddingSizes.Sixteen,
                                }}
                            >
                                <SubHeadline subheadlineType="SubHeadline2">Encrypted</SubHeadline>
                            </Padding>
                            <Text bodyType="Body2">
                                Your trading strategies are end-to-end encrypted. In-browser encrypted means that even we can’t see them!
                            </Text>
                        </Padding>
                    </Cell>
                </Row>
            </MainContainer>
        </Padding>
    );
};
