import React from 'react';
import { Layout, AsSeenIn } from '@containers';
import { MetaTags, Page } from '../../util/metaTags';
import {
    Assets,
    Button,
    Cell,
    Headline,
    MainContainer,
    Padding,
    PaddingSizes,
    Row,
    SubHeadline,
    Text,
    Highlight,
    CyanLightestBackground,
    BlueBackground,
    TextLink,
    HideMobile,
    WordAnimation,
    device,
} from '@trality/web-ui-components';
import { LazyImage } from 'components/lazyImage';
import { FeaturedIn } from 'components/featuredin';
import { Features } from 'components/features';
import { StartTradingNow } from 'components/starttradingnow';
import { VideosContainer } from 'components/videos';
import { FAQs } from 'components/FAQs';
import { Blog } from 'components/blog';
import { WatchVideo } from 'components/WatchVideo';
import { Twitter } from 'components/Twitter';
import { useLink } from '@hooks';
import styled from '@emotion/styled';

const FirstScreenButtonsContainer = styled(Cell)`
    display: flex;
    justify-content: center;
    padding-bottom: ${PaddingSizes.SixtyEight}px;
    @media ${device.tablet} {
        flex-direction: column;
    }
    > button {
        width: 180px;
        &:first-child {
            margin-right: ${PaddingSizes.Sixteen}px;
        }
        @media ${device.tablet} {
            width: 100%;
            &:first-child {
                margin-right: 0;
                margin-bottom: ${PaddingSizes.Sixteen}px;
            }
        }
    }
`;

const Index = () => {
    const followLink = useLink('signup');
    return (
        <Layout.Page title="home">
            <MetaTags page={Page.HP} />
            <MainContainer>
                <Row center>
                    <Cell size={6} mobileSize={12} align="center" alignMobile="left">
                        <Padding
                            size={{ top: PaddingSizes.SixtyFour }}
                            mobileSize={{
                                top: PaddingSizes.OneHundred,
                            }}
                        >
                            <Headline headlineType="Headline1">
                                <Highlight>
                                    <WordAnimation words={['Trade with', 'Create', 'Code', 'Backtest']}>|</WordAnimation>
                                </Highlight>
                                <br />
                                trading bots like a professional
                            </Headline>
                        </Padding>
                        <Padding
                            size={{ top: PaddingSizes.ThirtyTwo, bottom: PaddingSizes.FiftySix }}
                            mobileSize={{
                                top: PaddingSizes.TwentyFour,
                                bottom: PaddingSizes.TwentyFour,
                            }}
                        >
                            <Text bodyType="Body1">
                                Trality is a platform for anybody who wants to profit from algorithmic trading without giving up their day job. At
                                least not right away 😉
                            </Text>
                        </Padding>
                        <Row>
                            <FirstScreenButtonsContainer size={12} mobileSize={12} align="center">
                                <Button fullWidth onClick={() => followLink()}>
                                    Try it for free!
                                </Button>
                                <WatchVideo srcYtb="https://www.youtube.com/embed/DjBYXT0H004" />
                            </FirstScreenButtonsContainer>
                        </Row>
                    </Cell>
                </Row>
            </MainContainer>
            <CyanLightestBackground nonFullCover>
                <MainContainer>
                    <Row center>
                        <Cell size={10} mobileSize={12}>
                            <Padding
                                size={{
                                    bottom: PaddingSizes.SixtyFour,
                                    left: PaddingSizes.Four,
                                }}
                            >
                                <LazyImage src={Assets.HomepageImage} />
                            </Padding>
                        </Cell>
                    </Row>
                </MainContainer>
            </CyanLightestBackground>
            <MainContainer>
                <Row>
                    <Cell size={12} mobileSize={12} align="center">
                        <Padding
                            size={{ top: PaddingSizes.SixtyFour, bottom: PaddingSizes.SixtyFour }}
                            mobileSize={{
                                top: PaddingSizes.FiftySix,
                                bottom: PaddingSizes.FourtyFour,
                            }}
                        >
                            <Headline headlineType="Headline2">Trality is for you if you're...</Headline>
                        </Padding>
                    </Cell>
                </Row>
            </MainContainer>
            <Padding
                size={{ bottom: PaddingSizes.SixtyFour }}
                mobileSize={{
                    top: PaddingSizes.Twenty,
                    bottom: PaddingSizes.Fourty,
                }}
            >
                <MainContainer>
                    <Row>
                        <Cell size={4} mobileSize={12} align="center">
                            <Padding
                                mobileSize={{
                                    top: PaddingSizes.Twenty,
                                    bottom: PaddingSizes.Fourty,
                                }}
                            >
                                <Row center>
                                    <Cell size={6} mobileSize={6}>
                                        <LazyImage src={Assets.PythonGuru} />
                                    </Cell>
                                </Row>
                                <Row center>
                                    <Cell size={11} mobileSize={10}>
                                        <Padding
                                            size={{
                                                top: PaddingSizes.ThirtyTwo,
                                                bottom: PaddingSizes.Sixteen,
                                            }}
                                            mobileSize={{
                                                top: PaddingSizes.Twenty,
                                                bottom: PaddingSizes.Fourty,
                                            }}
                                        >
                                            <SubHeadline subheadlineType="SubHeadline2">A Python Guru</SubHeadline>
                                        </Padding>
                                    </Cell>
                                </Row>
                                <Row center>
                                    <Cell size={11} mobileSize={10}>
                                        <Text bodyType="Body2">
                                            wanting to make the most of your quantitative skills by coding sophisticated trading algorithms in order
                                            to boost returns.
                                        </Text>
                                    </Cell>
                                </Row>
                            </Padding>
                        </Cell>
                        <Cell size={4} mobileSize={12} align="center">
                            <Padding
                                mobileSize={{
                                    top: PaddingSizes.Twenty,
                                    bottom: PaddingSizes.Fourty,
                                }}
                            >
                                <Row center>
                                    <Cell size={6} mobileSize={6}>
                                        <LazyImage src={Assets.CasualTrader} />
                                    </Cell>
                                </Row>
                                <Row center>
                                    <Cell size={11} mobileSize={10}>
                                        <Padding
                                            size={{
                                                top: PaddingSizes.ThirtyTwo,
                                                bottom: PaddingSizes.Sixteen,
                                            }}
                                            mobileSize={{
                                                top: PaddingSizes.Twenty,
                                                bottom: PaddingSizes.Fourty,
                                            }}
                                        >
                                            <SubHeadline subheadlineType="SubHeadline2">A Casual Trader</SubHeadline>
                                        </Padding>
                                    </Cell>
                                </Row>
                                <Row center>
                                    <Cell size={11} mobileSize={10}>
                                        <Text bodyType="Body2">
                                            looking for an entry into automated trading, hoping to increase returns while spending less time on manual
                                            trades.
                                        </Text>
                                    </Cell>
                                </Row>
                            </Padding>
                        </Cell>
                        <Cell size={4} mobileSize={12} align="center">
                            <Padding
                                mobileSize={{
                                    top: PaddingSizes.Twenty,
                                    bottom: PaddingSizes.Fourty,
                                }}
                            >
                                <Row center>
                                    <Cell size={6} mobileSize={6}>
                                        <LazyImage src={Assets.Anyone} />
                                    </Cell>
                                </Row>
                                <Row center>
                                    <Cell size={11} mobileSize={10}>
                                        <Padding
                                            size={{
                                                top: PaddingSizes.ThirtyTwo,
                                                bottom: PaddingSizes.Sixteen,
                                            }}
                                            mobileSize={{
                                                top: PaddingSizes.Twenty,
                                                bottom: PaddingSizes.Fourty,
                                            }}
                                        >
                                            <SubHeadline subheadlineType="SubHeadline2">Anyone in between</SubHeadline>
                                        </Padding>
                                    </Cell>
                                </Row>
                                <Row center>
                                    <Cell size={11} mobileSize={10}>
                                        <Text bodyType="Body2">
                                            eager to try out something new, improve existing skills or simply test out a trading idea.
                                        </Text>
                                    </Cell>
                                </Row>
                            </Padding>
                        </Cell>
                    </Row>
                </MainContainer>
            </Padding>
            <FeaturedIn />
            <MainContainer>
                <Row>
                    <Cell size={12} mobileSize={12} align="center">
                        <Padding
                            size={{
                                top: PaddingSizes.NinetySix,
                                bottom: PaddingSizes.EightyEight,
                            }}
                            mobileSize={{
                                top: PaddingSizes.FiftySix,
                                bottom: PaddingSizes.FiftySix,
                            }}
                        >
                            <Headline headlineType="Headline2">Ways to create your trading bot.</Headline>
                        </Padding>
                    </Cell>
                </Row>
            </MainContainer>
            <MainContainer>
                <Row>
                    <Cell size={6} mobileSize={12} align="center">
                        <Padding
                            size={{
                                bottom: PaddingSizes.NinetySix,
                                left: PaddingSizes.SixtyEight,
                                right: PaddingSizes.SixtyEight,
                            }}
                            mobileSize={{
                                bottom: PaddingSizes.Fourty,
                            }}
                        >
                            <Row center>
                                <Cell size={3} mobileSize={10}>
                                    <LazyImage src={Assets.CodeBuilder} />
                                </Cell>
                            </Row>
                            <Padding
                                size={{
                                    top: PaddingSizes.ThirtyTwo,
                                    bottom: PaddingSizes.Sixteen,
                                    left: PaddingSizes.SixtyEight,
                                    right: PaddingSizes.SixtyEight,
                                }}
                                mobileSize={{
                                    bottom: PaddingSizes.Fourty,
                                }}
                            >
                                <SubHeadline subheadlineType="SubHeadline2">The Code Editor</SubHeadline>
                            </Padding>
                            <Text bodyType="Body2">
                                Leverage your Python skills and code sophisticated bots in the world’s first browser-based Python Code Editor. Harness
                                an ever growing array of packages, a debugger and a full range of ML modules to backtest and live-trade like a pro.”
                            </Text>
                            <Padding
                                size={{
                                    top: PaddingSizes.Fourty,
                                    bottom: PaddingSizes.TwentyFour,
                                }}
                                mobileSize={{
                                    top: PaddingSizes.ThirtyTwo,
                                }}
                            >
                                <TextLink href="/creator/code-editor" withArrow bold>
                                    Learn more
                                </TextLink>
                            </Padding>
                        </Padding>
                    </Cell>
                    <Cell size={6} mobileSize={12} align="center">
                        <Padding
                            size={{
                                left: PaddingSizes.SixtyEight,
                                right: PaddingSizes.SixtyEight,
                            }}
                            mobileSize={{
                                top: PaddingSizes.ThirtyTwo,
                                bottom: PaddingSizes.Fourty,
                            }}
                        >
                            <Row center>
                                <Cell size={3} mobileSize={10}>
                                    <LazyImage src={Assets.RuleBuilder} />
                                </Cell>
                            </Row>
                            <Padding
                                size={{
                                    top: PaddingSizes.ThirtyTwo,
                                    bottom: PaddingSizes.Sixteen,
                                    left: PaddingSizes.SixtyEight,
                                    right: PaddingSizes.SixtyEight,
                                }}
                                mobileSize={{
                                    bottom: PaddingSizes.Fourty,
                                }}
                            >
                                <SubHeadline subheadlineType="SubHeadline2">The Rule Builder</SubHeadline>{' '}
                            </Padding>
                            <Text bodyType="Body2">
                                Benefit from automated trading without writing a single line of code. With Trality’s intuitive Rule Builder rely on
                                pre-defined trading strategies, select from over 100 technical indicators and use boolean logic to arrange strategy
                                parts.
                            </Text>
                            <Padding
                                size={{
                                    top: PaddingSizes.Fourty,
                                    bottom: PaddingSizes.TwentyFour,
                                }}
                                mobileSize={{
                                    top: PaddingSizes.ThirtyTwo,
                                }}
                            >
                                <TextLink href="/creator/rule-builder" withArrow bold>
                                    Learn more
                                </TextLink>
                            </Padding>
                        </Padding>
                    </Cell>
                </Row>
            </MainContainer>
            <HideMobile>
                <VideosContainer />
            </HideMobile>
            <Padding size={{ top: PaddingSizes.SixtyFour, bottom: PaddingSizes.SixtyFour }}>
                <BlueBackground>
                    <MainContainer>
                        <Padding
                            size={{ top: PaddingSizes.FiftySix, bottom: PaddingSizes.FiftySix }}
                            mobileSize={{
                                bottom: PaddingSizes.Twenty,
                            }}
                        >
                            <Row>
                                <Cell size={4} mobileSize={12} align="center">
                                    <Padding
                                        mobileSize={{
                                            top: PaddingSizes.Fourty,
                                            bottom: PaddingSizes.Twenty,
                                        }}
                                    >
                                        <Headline headlineType="Headline3">10M+</Headline>
                                        <Text bodyType="Body2">Daily trading volume</Text>
                                    </Padding>
                                </Cell>
                                <Cell size={4} mobileSize={12} align="center">
                                    <Padding
                                        mobileSize={{
                                            top: PaddingSizes.Fourty,
                                            bottom: PaddingSizes.Twenty,
                                        }}
                                    >
                                        <Headline headlineType="Headline3">80K+</Headline>
                                        <Text bodyType="Body2">Verified users</Text>
                                    </Padding>
                                </Cell>
                                <Cell size={4} mobileSize={12} align="center">
                                    <Padding
                                        mobileSize={{
                                            top: PaddingSizes.Fourty,
                                            bottom: PaddingSizes.Twenty,
                                        }}
                                    >
                                        <Headline headlineType="Headline3">100M+</Headline>
                                        <Text bodyType="Body2">Connected AUM</Text>
                                    </Padding>
                                </Cell>
                            </Row>
                        </Padding>
                    </MainContainer>
                </BlueBackground>
            </Padding>
            <Features />
            <StartTradingNow />
            <Padding
                size={{ top: PaddingSizes.SixtyFour, bottom: PaddingSizes.SixtyFour }}
                mobileSize={{
                    top: PaddingSizes.SixtyFour,
                }}
            >
                <MainContainer>
                    <Row>
                        <Cell size={6} mobileSize={12} alignVertical="middle">
                            <Padding
                                size={{ right: PaddingSizes.OneHundred }}
                                mobileSize={{
                                    bottom: PaddingSizes.ThirtyTwo,
                                }}
                            >
                                <Headline headlineType="Headline2">The Marketplace (Coming Soon)</Headline>

                                <Padding
                                    size={{
                                        top: PaddingSizes.TwentyFour,
                                        bottom: PaddingSizes.FourtyEight,
                                    }}
                                    mobileSize={{
                                        top: PaddingSizes.TwentyFour,
                                        bottom: PaddingSizes.ThirtyTwo,
                                    }}
                                >
                                    <Text bodyType="Body2">
                                        Once you’ve built a profitable bot, you can earn even more by introducing it to The Marketplace, Trality’s
                                        curated space where developers can rent their bespoke bots to crypto enthusiasts. As creators, you maintain
                                        full control over your bot and its underlying algorithm.
                                    </Text>
                                </Padding>
                                <TextLink href="/marketplace" withArrow bold>
                                    Learn more
                                </TextLink>
                            </Padding>
                        </Cell>
                        <Cell size={6} mobileSize={12} align="center">
                            <LazyImage src={Assets.MarketplacePromo} />
                        </Cell>
                    </Row>
                </MainContainer>
            </Padding>
            <Twitter />
            <FAQs />
            <Blog />
        </Layout.Page>
    );
};

export default Index;
