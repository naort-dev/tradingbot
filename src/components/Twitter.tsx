import { MainContainer, PaddingSizes, Padding, Row, Cell, Surface, Text, Assets, Headline } from '@trality/web-ui-components';
import React from 'react';
import styled from '@emotion/styled'
import { LazyImage } from './lazyImage';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

const Tweets = [
    {
        text: 'Restarted my @trality_bots Trading Bot🤖 on @binance again for the 3rd time last night after 2nd optimisation using simple trading rules, not plunging it into a falling market this time 😏 & very nice 7% gain in its first 18 hours📈✅👍🏼! CAN’T speak highly enough of #Trality🔥🙏🏼',
        user: '@SirJames005',
    },
    {
        text: "J'ai une préférence pour @trality_bots, réellement fantastique.",
        user: '@DervicheValseur',
    },
    {
        text: 'When I see the efficiency of your app, I don’t even understand why some people keep trading manually. It’s like “An excavator? Nah man, I trust my bare hands more”.',
        user: '@DervicheValseur',
    },
    {
        text: '@trality_bots Hello! I love your platform, do you have any article on signal driven exits?',
        user: '@GaelGendre',
    },
    {
        text: 'German Blockchain Award-2020 winners are @myecustoms @_Finexity_ @trality_bots congratulations #NFT #2021forBlockchain #Blockchain #DEFI #Buidl #Bitcoin  #supplchain #AI @CoinDesk @Beincrypto_DE',
        user: '@blockrocketlabs',
    },
    {
        text: 'Started using @trality_bots last week and so far really impressed, super easy to set up and helpful community on Discord!',
        user: '@timber_cherise',
    },
];

const TwitterSwiper = styled(Swiper)`
    padding: ${PaddingSizes.TwentyFour}px;
    &::before,
    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        width: 20px;
        height: 100%;
        background: linear-gradient(to right, #fff 0%, transparent 100%);
        z-index: 2;
    }
    &::before {
        left: 0;
    }
    &::after {
        right: 0;
        transform: scale(-1);
    }
`;

export const Twitter = () => {
    return (
        <Padding
            size={{
                top: PaddingSizes.SixtyFour,
                bottom: PaddingSizes.SixtyFour,
            }}
            mobileSize={{
                top: PaddingSizes.FiftySix,
                bottom: PaddingSizes.FiftySix,
            }}
        >
            <MainContainer>
                <Row>
                    <Cell size={12} mobileSize={12}>
                        <Padding
                            size={{
                                bottom: PaddingSizes.SixtyFour,
                            }}
                            mobileSize={{
                                bottom: PaddingSizes.FiftySix,
                            }}
                        >
                            <Headline headlineType="Headline2">Join the list of our happy users!</Headline>
                        </Padding>
                    </Cell>
                </Row>
            </MainContainer>
            <MainContainer>
                <TwitterSwiper
                    spaceBetween={40}
                    autoplay={{
                        delay: 3000
                    }}
                    modules={[Autoplay]}
                    breakpoints={{
                        768: {
                            slidesPerView: 4
                        },
                    }}
                >
                    {Tweets.map((item) => (
                        <SwiperSlide>
                            <Surface>
                                <Padding
                                    size={{
                                        top: PaddingSizes.TwentyEight,
                                        bottom: PaddingSizes.TwentyFour,
                                        left: PaddingSizes.TwentyFour,
                                        right: PaddingSizes.TwentyFour,
                                    }}
                                    mobileSize={{
                                        top: PaddingSizes.TwentyEight,
                                        bottom: PaddingSizes.TwentyFour,
                                        left: PaddingSizes.TwentyFour,
                                        right: PaddingSizes.TwentyFour,
                                    }}
                                >
                                    <Row>
                                        <Cell size={4} mobileSize={12}>
                                            <LazyImage src={Assets.BlueTwitter} />
                                        </Cell>
                                    </Row>
                                    <Padding
                                        size={{
                                            top: PaddingSizes.TwentyEight,
                                            bottom: PaddingSizes.Sixteen,
                                            left: PaddingSizes.Zero,
                                            right: PaddingSizes.Zero,
                                        }}
                                        mobileSize={{
                                            top: PaddingSizes.TwentyEight,
                                            bottom: PaddingSizes.Sixteen,
                                            left: PaddingSizes.Zero,
                                            right: PaddingSizes.Zero,
                                        }}
                                    >
                                        <Text bodyType="Body2">{item.text}</Text>
                                    </Padding>
                                    <Text bodyType="Body2" lighter>
                                        {item.user}
                                    </Text>
                                </Padding>
                            </Surface>
                        </SwiperSlide>
                    ))}
                </TwitterSwiper>
            </MainContainer>
        </Padding>
    );
};
