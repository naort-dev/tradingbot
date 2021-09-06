import { Cell, GreyBackground, MainContainer, Padding, PaddingSizes, Row, Text, TextLink } from '@trality/web-ui-components';
import * as React from 'react';
import { LazyImage } from './lazyImage';

import * as BK from '../../containers/media/der-brutkasten.png';
import * as CT from '../../containers/media/cointelegraph.png';
import * as ICOM from '../../containers/media/investing-com.png';
import * as TT from '../../containers/media/trending-topics.png';

const AsSeen = [
    { link: 'https://de.cointelegraph.com/news/wiener-startup-trality-entwickelt-marktplatz-fur-krypto-trading-bots', image: CT },
    {
        link: 'https://de.investing.com/news/cryptocurrency-news/wiener-startup-trality-entwickelt-marktplatz-fur-kryptotradingbots-1976427',
        image: ICOM,
    },

    { link: 'https://www.trendingtopics.at/trality-wiener-startup-baut-einen-app-store-fuer-krypto-bots/', image: TT },
    { link: 'https://brutkasten.com/trality-wiener-fintech-erhalt-15-millionen-euro-kapital-durch-investment-forderung/', image: BK },
];

export const FeaturedIn = () => {
    return (
        <Padding
            size={{ top: PaddingSizes.SixtyFour, bottom: PaddingSizes.SixtyFour, left: PaddingSizes.Zero, right: PaddingSizes.Zero }}
            mobileSize={{ top: PaddingSizes.FiftySix, bottom: PaddingSizes.FiftySix, left: PaddingSizes.Zero, right: PaddingSizes.Zero }}
        >
            <GreyBackground>
                <MainContainer>
                    <Padding
                        size={{ top: PaddingSizes.Fourty, bottom: PaddingSizes.Fourty, left: PaddingSizes.Zero, right: PaddingSizes.Zero }}
                        mobileSize={{
                            top: PaddingSizes.SixtyFour,
                            bottom: PaddingSizes.SixtyFour,
                            left: PaddingSizes.Zero,
                            right: PaddingSizes.Zero,
                        }}
                    >
                        <Row>
                            <Cell size={3} mobileSize={12} alignVertical="middle">
                                <Padding
                                    size={{
                                        left: PaddingSizes.ThirtySix,
                                        right: PaddingSizes.ThirtySix,
                                    }}
                                    mobileSize={{
                                        left: PaddingSizes.Sixteen,
                                        right: PaddingSizes.Sixteen,
                                    }}
                                >
                                    <Text bodyType="Body2">Featured in</Text>
                                </Padding>
                            </Cell>
                            <Cell size={9} mobileSize={12}>
                                <Row>
                                    {AsSeen.map((item) => {
                                        return (
                                            <Cell size={3} mobileSize={6} alignVertical="middle">
                                                <Padding
                                                    size={{
                                                        left: PaddingSizes.ThirtySix,
                                                        right: PaddingSizes.ThirtySix,
                                                    }}
                                                    mobileSize={{
                                                        left: PaddingSizes.Sixteen,
                                                        right: PaddingSizes.Sixteen,
                                                    }}
                                                >
                                                    <TextLink href={item.link}>
                                                        <LazyImage src={item.image} />
                                                    </TextLink>
                                                </Padding>
                                            </Cell>
                                        );
                                    })}
                                </Row>
                            </Cell>
                        </Row>
                    </Padding>
                </MainContainer>
            </GreyBackground>
        </Padding>
    );
};
