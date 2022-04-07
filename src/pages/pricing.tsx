import { Layout, Pricing, Explanation } from '@containers';
import React, { useState, useCallback } from 'react';

import { EventType, SignupOrigins } from '@trality/web-tracking';
import { ConstUrl } from '@constants';

import { Page, MetaTags } from '../../util/metaTags';
import { LazyImage } from 'components/lazyImage';
import {
    Cell,
    Text,
    Headline,
    MainContainer,
    Row,
    CyanLightestBackground,
    Padding,
    PaddingSizes,
    FAQ,
    Surface,
    Assets,
    SubHeadline,
    Divider,
    Button,
    Tag,
    Slider,
} from '@trality/web-ui-components';
import { useLink } from '@hooks';

interface Plan {
    image: string;
    popular?: boolean;
    trial?: boolean;
    title: string;
    price: { [key: number]: string };
    volume: string;
    tickSize: string;
    liveBots: string;
    virtualBots: string;
    logRetention: string;
    backtests: string;
    origin: SignupOrigins;
    link: string;
}

const AllPlans: Plan[] = [
    {
        image: Assets.Plans.Pawn,
        popular: false,
        title: 'Pawn',
        price: {
            0: 'Free',
            1: 'Free',
        },
        volume: '€5,000',
        tickSize: '60m',
        liveBots: '1',
        virtualBots: '1',
        logRetention: '1 Week',
        backtests: 'Unlimited',
        origin: SignupOrigins.PricingPawn,
        link: 'pawn',
    },
    {
        image: Assets.Plans.Knight,
        popular: false,
        trial: false,
        title: 'Knight',
        price: {
            0: '€9.99',
            1: '€95',
        },
        volume: '€25,000',
        tickSize: '60m',
        liveBots: '2',
        virtualBots: '2',
        logRetention: '1 Month',
        backtests: 'Unlimited',
        origin: SignupOrigins.PricingRook,
        link: 'knight',
    },
    {
        image: Assets.Plans.Rook,
        popular: true,
        title: 'Rook',
        price: {
            0: '€39.99',
            1: '€383',
        },
        volume: '€250,000',
        tickSize: '5m',
        liveBots: '5',
        virtualBots: '5',
        logRetention: '6 Months',
        backtests: 'Unlimited',
        origin: SignupOrigins.PricingKnight,
        link: 'knight',
    },
    {
        image: Assets.Plans.Queen,
        popular: false,
        title: 'Queen',
        price: {
            0: '€59.99',
            1: '€575',
        },
        volume: 'Unlimited',
        tickSize: '1m',
        liveBots: '10',
        virtualBots: '10',
        logRetention: 'Unlimited',
        backtests: 'Unlimited',
        origin: SignupOrigins.PricingQueen,
        link: 'queen',
    },
];

const PricingFAQ = [
    {
        question: 'Trading Volume',
        answer: (
            <>
                Trading bots are a set of algorithms that control automated buying and selling of assets. Doing so they exploit price volatility,
                which is particularly high in crypto assets.
            </>
        ),
    },
    {
        question: 'Smallest Tick Interval',
        answer: (
            <>
                Each bot runs on one or multiple tick intervals. Your plan specifies the lowest possible tick interval you can select, upon which your
                bot should be executed. We currently support 1m, 5m, 15m, 30m, 1h, 6h, 12h and 1d tick intervals.
            </>
        ),
    },
    {
        question: 'Live Bots and Virtual Bots',
        answer: (
            <>
                Specifies the number of bots that can be started trading either real assets (live bots) or virtual money (virtual bots). Note that a
                single bot can run on multiple tick(!) sizes and have different strategies for multiple trading pairs.
            </>
        ),
    },
    {
        question: 'Log Retention',
        answer: (
            <>
                Bot logs are useful outputs for debugging on what actions your bot(s) took at specific points in time. We store the history of these
                logs for a certain period of time (or for an unlimited period of time in higher plans).
            </>
        ),
    },
    {
        question: 'Backtests',
        answer: (
            <>
                Our goal is to enable you to experiment and iterate on your strategies as much as possible in order to increase profitability. That's
                why we will always enable you to do as many backtests as you like, completely free of charge.
            </>
        ),
    },
];

const PricingComponent = () => {
    const [billingCycle, setBillingCycle] = useState('Monthly');

    const followLink = useLink('login');

    const onContact = useCallback(() => {
        const target = 'bWFpbHRvOmVudGVycHJpc2VAdHJhbGl0eS5jb20/c3ViamVjdD1FbnRlcnByaXNlIFBsYW4gRW5xdWlyeQ==';
        window.location.assign(atob(target));
    }, []);

    return (
        <Layout.Page title="pricing">
            <MetaTags page={Page.Pricing} />
            <MainContainer>
                <Padding
                    size={{
                        top: PaddingSizes.SixtyFour,
                        bottom: PaddingSizes.TwentyFour,
                    }}
                    mobileSize={{
                        top: PaddingSizes.OneHundred,
                        bottom: PaddingSizes.TwentyFour,
                    }}
                >
                    <Row center>
                        <Cell size={12} mobileSize={12} align="center">
                            <Headline headlineType="Headline2">Pricing</Headline>
                        </Cell>
                    </Row>
                </Padding>
                <Row center>
                    <Cell size={12} mobileSize={12} align="center">
                        <Text bodyType="Body2">Choose a plan that meets all your requirements.</Text>
                    </Cell>
                </Row>
                <Row center>
                    <Cell size={12} mobileSize={12} align="center">
                        <Text bodyType="Body2"> Annual plans help you save 20%</Text>
                    </Cell>
                </Row>

                <Row center>
                    <Cell size={3} mobileSize={7} align="center">
                        <Padding
                            size={{
                                top: PaddingSizes.FourtyFour,
                                bottom: PaddingSizes.FourtyFour,
                            }}
                            mobileSize={{
                                top: PaddingSizes.FourtyFour,
                                bottom: PaddingSizes.FourtyFour,
                            }}
                        >
                            <Slider
                                optionOne="Monthly"
                                optionTwo="Annually"
                                defaultValue={billingCycle}
                                onChange={(value) => setBillingCycle(value)}
                            />
                        </Padding>
                    </Cell>
                </Row>
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
                    <Row>
                        {AllPlans.map((item) => {
                            return (
                                <Cell size={3} mobileSize={12} alignVertical="middle">
                                    <Padding
                                        size={{
                                            left: PaddingSizes.Sixteen,
                                            right: PaddingSizes.Sixteen,
                                        }}
                                        mobileSize={{
                                            left: PaddingSizes.ThirtyTwo,
                                            right: PaddingSizes.ThirtyTwo,
                                            bottom: PaddingSizes.SixtyFour,
                                        }}
                                    >
                                        <Surface shadowType="dark-2">
                                            <Padding
                                                size={{
                                                    top: PaddingSizes.ThirtyTwo,
                                                    bottom: PaddingSizes.ThirtyTwo,
                                                    left: PaddingSizes.ThirtyTwo,
                                                    right: PaddingSizes.ThirtyTwo,
                                                }}
                                                mobileSize={{
                                                    top: PaddingSizes.ThirtyTwo,
                                                    bottom: PaddingSizes.ThirtyTwo,
                                                    left: PaddingSizes.ThirtyTwo,
                                                    right: PaddingSizes.ThirtyTwo,
                                                }}
                                            >
                                                <Row>
                                                    {item.popular && (
                                                        <Cell size={12} mobileSize={12} align="center">
                                                            <Tag>
                                                                <Text bodyType="Body2">Popular choice</Text>
                                                            </Tag>
                                                        </Cell>
                                                    )}
                                                    <Cell size={4} mobileSize={6}>
                                                        <img src={item.image} />
                                                    </Cell>
                                                    <Cell size={12} mobileSize={12}>
                                                        <Padding
                                                            size={{
                                                                top: PaddingSizes.TwentyFour,
                                                                bottom: PaddingSizes.Eight,
                                                            }}
                                                            mobileSize={{
                                                                top: PaddingSizes.Sixteen,
                                                                bottom: PaddingSizes.Eight,
                                                            }}
                                                        >
                                                            <Text lighter bodyType="Body1">
                                                                {item.title}
                                                            </Text>
                                                        </Padding>
                                                    </Cell>
                                                    <Cell size={12} mobileSize={12}>
                                                        <Headline headlineType="Headline2">
                                                            {item.price[billingCycle === 'Annually' ? 1 : 0]}
                                                        </Headline>
                                                    </Cell>
                                                    <Cell size={4} mobileSize={6}>
                                                        <Padding
                                                            size={{
                                                                top: PaddingSizes.Sixteen,
                                                                bottom: PaddingSizes.TwentyFour,
                                                            }}
                                                            mobileSize={{
                                                                top: PaddingSizes.Sixteen,
                                                                bottom: PaddingSizes.Eight,
                                                            }}
                                                        >
                                                            <Divider blue />
                                                        </Padding>
                                                    </Cell>
                                                    <Cell size={12} mobileSize={12}>
                                                        <Padding
                                                            size={{
                                                                bottom: PaddingSizes.TwentyFour,
                                                            }}
                                                            mobileSize={{
                                                                bottom: PaddingSizes.TwentyFour,
                                                            }}
                                                        >
                                                            <Row>
                                                                <Cell size={12} mobileSize={12}>
                                                                    <Padding
                                                                        size={{
                                                                            bottom: PaddingSizes.Eight,
                                                                        }}
                                                                        mobileSize={{
                                                                            bottom: PaddingSizes.Eight,
                                                                        }}
                                                                    >
                                                                        <Text lighter bodyType="Body2">
                                                                            Trading Volume
                                                                        </Text>
                                                                    </Padding>
                                                                </Cell>
                                                                <Cell size={12} mobileSize={12}>
                                                                    <Text darker bodyType="Body2">
                                                                        {item.volume}
                                                                    </Text>
                                                                </Cell>
                                                            </Row>
                                                        </Padding>
                                                    </Cell>
                                                    <Cell size={12} mobileSize={12}>
                                                        <Padding
                                                            size={{
                                                                bottom: PaddingSizes.TwentyFour,
                                                            }}
                                                            mobileSize={{
                                                                bottom: PaddingSizes.TwentyFour,
                                                            }}
                                                        >
                                                            <Row>
                                                                <Cell size={12} mobileSize={12}>
                                                                    <Padding
                                                                        size={{
                                                                            bottom: PaddingSizes.Eight,
                                                                        }}
                                                                        mobileSize={{
                                                                            bottom: PaddingSizes.Eight,
                                                                        }}
                                                                    >
                                                                        <Text lighter bodyType="Body2">
                                                                            Smallest Tick Interval
                                                                        </Text>
                                                                    </Padding>
                                                                </Cell>
                                                                <Cell size={12} mobileSize={12}>
                                                                    <Text darker bodyType="Body2">
                                                                        {item.tickSize}
                                                                    </Text>
                                                                </Cell>
                                                            </Row>
                                                        </Padding>
                                                    </Cell>
                                                    <Cell size={12} mobileSize={12}>
                                                        <Padding
                                                            size={{
                                                                bottom: PaddingSizes.TwentyFour,
                                                            }}
                                                            mobileSize={{
                                                                bottom: PaddingSizes.TwentyFour,
                                                            }}
                                                        >
                                                            <Row>
                                                                <Cell size={12} mobileSize={12}>
                                                                    <Padding
                                                                        size={{
                                                                            bottom: PaddingSizes.Eight,
                                                                        }}
                                                                        mobileSize={{
                                                                            bottom: PaddingSizes.Eight,
                                                                        }}
                                                                    >
                                                                        <Text lighter bodyType="Body2">
                                                                            Live Bots
                                                                        </Text>
                                                                    </Padding>
                                                                </Cell>
                                                                <Cell size={12} mobileSize={12}>
                                                                    <Text darker bodyType="Body2">
                                                                        {item.liveBots}
                                                                    </Text>
                                                                </Cell>
                                                            </Row>
                                                        </Padding>
                                                    </Cell>
                                                    <Cell size={12} mobileSize={12}>
                                                        <Padding
                                                            size={{
                                                                bottom: PaddingSizes.TwentyFour,
                                                            }}
                                                            mobileSize={{
                                                                bottom: PaddingSizes.Eight,
                                                            }}
                                                        >
                                                            <Row>
                                                                <Cell size={12} mobileSize={12}>
                                                                    <Padding
                                                                        size={{
                                                                            bottom: PaddingSizes.Eight,
                                                                        }}
                                                                        mobileSize={{
                                                                            bottom: PaddingSizes.Eight,
                                                                        }}
                                                                    >
                                                                        <Text lighter bodyType="Body2">
                                                                            Virtual Bots
                                                                        </Text>
                                                                    </Padding>
                                                                </Cell>
                                                                <Cell size={12} mobileSize={12}>
                                                                    <Text darker bodyType="Body2">
                                                                        {item.virtualBots}
                                                                    </Text>
                                                                </Cell>
                                                            </Row>
                                                        </Padding>
                                                    </Cell>
                                                    <Cell size={12} mobileSize={12}>
                                                        <Padding
                                                            size={{
                                                                bottom: PaddingSizes.TwentyFour,
                                                            }}
                                                            mobileSize={{
                                                                bottom: PaddingSizes.Eight,
                                                            }}
                                                        >
                                                            <Row>
                                                                <Cell size={12} mobileSize={12}>
                                                                    <Padding
                                                                        size={{
                                                                            bottom: PaddingSizes.Eight,
                                                                        }}
                                                                        mobileSize={{
                                                                            bottom: PaddingSizes.Eight,
                                                                        }}
                                                                    >
                                                                        <Text lighter bodyType="Body2">
                                                                            Log Retention
                                                                        </Text>
                                                                    </Padding>
                                                                </Cell>
                                                                <Cell size={12} mobileSize={12}>
                                                                    <Text darker bodyType="Body2">
                                                                        {item.logRetention}
                                                                    </Text>
                                                                </Cell>
                                                            </Row>
                                                        </Padding>
                                                    </Cell>
                                                    <Cell size={12} mobileSize={12}>
                                                        <Padding
                                                            size={{
                                                                bottom: PaddingSizes.TwentyFour,
                                                            }}
                                                            mobileSize={{
                                                                bottom: PaddingSizes.TwentyFour,
                                                            }}
                                                        >
                                                            <Row>
                                                                <Cell size={12} mobileSize={12}>
                                                                    <Padding
                                                                        size={{
                                                                            bottom: PaddingSizes.Eight,
                                                                        }}
                                                                        mobileSize={{
                                                                            bottom: PaddingSizes.Eight,
                                                                        }}
                                                                    >
                                                                        <Text lighter bodyType="Body2">
                                                                            Backtests
                                                                        </Text>
                                                                    </Padding>
                                                                </Cell>
                                                                <Cell size={12} mobileSize={12}>
                                                                    <Text darker bodyType="Body2">
                                                                        {item.backtests}
                                                                    </Text>
                                                                </Cell>
                                                            </Row>
                                                        </Padding>
                                                    </Cell>
                                                    <Cell size={12} mobileSize={12}>
                                                        <Button
                                                            onClick={() => followLink()}
                                                            fullWidth
                                                            variant={item.popular ? 'contained' : 'outlined'}
                                                        >
                                                            Get started
                                                        </Button>
                                                    </Cell>
                                                </Row>
                                            </Padding>
                                        </Surface>
                                    </Padding>
                                </Cell>
                            );
                        })}
                    </Row>
                </Padding>
            </MainContainer>
            <Padding
                size={{
                    top: PaddingSizes.SixtyFour,
                    bottom: PaddingSizes.SixtyFour,
                }}
                mobileSize={{
                    top: PaddingSizes.Sixteen,
                }}
            >
                <MainContainer>
                    <Row>
                        <Cell size={12} mobileSize={12} align="left">
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
                                <Headline headlineType="Headline2">Pricing FAQ</Headline>
                            </Padding>
                        </Cell>
                    </Row>
                    <Row>
                        {PricingFAQ.map((item) => {
                            return <FAQ question={item.question} answer={item.answer} />;
                        })}
                    </Row>
                </MainContainer>
            </Padding>

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
                        <Cell size={12} mobileSize={12} align="left">
                            <Surface shadowType="dark-2">
                                <MainContainer>
                                    <Row>
                                        <Cell size={2} mobileSize={12} alignVertical="middle">
                                            <Padding
                                                size={{
                                                    top: PaddingSizes.ThirtyTwo,
                                                    bottom: PaddingSizes.ThirtyTwo,
                                                    left: PaddingSizes.ThirtyTwo,
                                                }}
                                                mobileSize={{
                                                    top: PaddingSizes.ThirtyTwo,
                                                    bottom: PaddingSizes.ThirtyTwo,
                                                    left: PaddingSizes.ThirtyTwo,
                                                }}
                                            >
                                                <img src={Assets.Plans.Enterprise} />
                                            </Padding>
                                        </Cell>
                                        <Cell size={10} mobileSize={12}>
                                            <Padding
                                                size={{
                                                    top: PaddingSizes.ThirtyTwo,
                                                    bottom: PaddingSizes.ThirtyTwo,
                                                    right: PaddingSizes.ThirtyTwo,
                                                }}
                                                mobileSize={{
                                                    top: PaddingSizes.ThirtyTwo,
                                                    bottom: PaddingSizes.ThirtyTwo,
                                                    right: PaddingSizes.ThirtyTwo,
                                                    left: PaddingSizes.ThirtyTwo,
                                                }}
                                            >
                                                <SubHeadline subheadlineType="SubHeadline2">Enterprise</SubHeadline>
                                                <Padding
                                                    size={{
                                                        top: PaddingSizes.Sixteen,
                                                        bottom: PaddingSizes.ThirtyTwo,
                                                    }}
                                                    mobileSize={{
                                                        top: PaddingSizes.Sixteen,
                                                        bottom: PaddingSizes.ThirtyTwo,
                                                    }}
                                                >
                                                    <Text bodyType="Body2">
                                                        We are happy to build custom features based on your needs. Let us know your requirements and
                                                        we will help you implement them into your trade processes.
                                                    </Text>
                                                </Padding>
                                                <Button
                                                    onClick={() =>
                                                        window.location.assign(
                                                            atob(
                                                                'bWFpbHRvOmVudGVycHJpc2VAdHJhbGl0eS5jb20/c3ViamVjdD1FbnRlcnByaXNlIFBsYW4gRW5xdWlyeQ==',
                                                            ),
                                                        )
                                                    }
                                                >
                                                    Contact us
                                                </Button>
                                            </Padding>
                                        </Cell>
                                    </Row>
                                </MainContainer>
                            </Surface>
                        </Cell>
                    </Row>
                </MainContainer>
            </Padding>
            <CyanLightestBackground>
                <MainContainer>
                    <Row center>
                        <Cell size={5} mobileSize={10} align="center">
                            <Padding
                                size={{
                                    top: PaddingSizes.FiftySix,
                                    bottom: PaddingSizes.TwentyFour,
                                }}
                                mobileSize={{
                                    bottom: PaddingSizes.TwentyFour,
                                }}
                            >
                                <Headline headlineType="Headline2">Get started now!</Headline>
                            </Padding>
                            <Padding
                                size={{
                                    bottom: PaddingSizes.ThirtyTwo,
                                }}
                                mobileSize={{
                                    bottom: PaddingSizes.TwentyFour,
                                }}
                            >
                                <Text bodyType="Body2">
                                    Become one of our many awesome traders that trust Trality. No credit card required for you to get started.
                                </Text>
                            </Padding>
                            <Padding
                                size={{
                                    bottom: PaddingSizes.FiftySix,
                                }}
                                mobileSize={{
                                    bottom: PaddingSizes.TwentyFour,
                                }}
                            >
                                <Button onClick={() => followLink()}>Sign up now!</Button>
                            </Padding>
                        </Cell>
                    </Row>
                </MainContainer>
            </CyanLightestBackground>
        </Layout.Page>
    );
};

export default PricingComponent;
