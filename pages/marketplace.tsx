import { Layout } from '@containers';
import { MetaTags, Page } from '../util/metaTags';
import React from 'react';
import { StartTradingNow } from 'components/starttradingnow';
import { FAQs } from 'components/FAQs';
import {
    Padding,
    Text,
    PaddingSizes,
    MainContainer,
    Row,
    Cell,
    Headline,
    Assets,
    SubHeadline,
    GreyBackground,
    Button,
    Highlight,
} from '@trality/web-ui-components';
import { LazyImage } from 'components/lazyImage';

const Marketplace = () => {
    return (
        <Layout.Page title="marketplace">
            <MetaTags page={Page.MarketPlace} />
            <GreyBackground>
                <MainContainer>
                    <Row>
                        <Cell size={5} mobileSize={12} alignVertical="middle">
                            <Padding
                                size={{
                                    top: PaddingSizes.Eighty,
                                    right: PaddingSizes.Four,
                                }}
                                mobileSize={{
                                    top: PaddingSizes.Eighty,
                                    bottom: PaddingSizes.TwentyFour,
                                }}
                            >
                                <Headline headlineType="Headline2">
                                    Where <Highlight>creators</Highlight> and followers meet
                                </Headline>
                                <Padding
                                    size={{
                                        top: PaddingSizes.ThirtyTwo,
                                        bottom: PaddingSizes.Fourty,
                                        right: PaddingSizes.Four,
                                    }}
                                    mobileSize={{
                                        top: PaddingSizes.Sixteen,
                                        bottom: PaddingSizes.TwentyFour,
                                    }}
                                >
                                    <Text bodyType="Body2">
                                        Profit from algorithmic trading by either publishing a bot to the Trality Bot Marketplace or follow bots by
                                        Creators.
                                    </Text>
                                </Padding>
                            </Padding>
                        </Cell>
                        <Cell size={6} mobileSize={12}>
                            <Padding
                                size={{
                                    top: PaddingSizes.Eighty,
                                }}
                                mobileSize={{
                                    top: PaddingSizes.Sixteen,
                                }}
                            >
                                <LazyImage src={Assets.MarketplaceHero} />
                            </Padding>
                        </Cell>
                    </Row>
                </MainContainer>
            </GreyBackground>
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
                    <Row center>
                        <Cell size={12} mobileSize={12} align="center">
                            <Headline headlineType="Headline5">It's simple</Headline>
                        </Cell>
                    </Row>
                    <Padding
                        size={{
                            top: PaddingSizes.TwentyFour,
                            bottom: PaddingSizes.TwentyFour,
                        }}
                        mobileSize={{
                            top: PaddingSizes.TwentyFour,
                            bottom: PaddingSizes.TwentyFour,
                        }}
                    >
                        <Row>
                            <Cell size={4} mobileSize={12} align="center">
                                <Padding
                                    size={{
                                        left: PaddingSizes.FiftyTwo,
                                        right: PaddingSizes.FiftyTwo,
                                    }}
                                    mobileSize={{
                                        top: PaddingSizes.Twenty,
                                    }}
                                >
                                    <Row center>
                                        <Cell size={4} mobileSize={2}>
                                            <LazyImage src={Assets.RentBot} />
                                        </Cell>
                                    </Row>
                                    <Padding
                                        size={{
                                            top: PaddingSizes.ThirtyTwo,
                                            bottom: PaddingSizes.Sixteen,
                                        }}
                                        mobileSize={{
                                            bottom: PaddingSizes.Fourty,
                                        }}
                                    >
                                        <SubHeadline subheadlineType="SubHeadline2">Rent out bots</SubHeadline>
                                    </Padding>
                                    <Text bodyType="Body2">
                                        After you have created an awesome trading bot you can start building a follower base and generate a risk-free
                                        side income.
                                    </Text>
                                </Padding>
                            </Cell>
                            <Cell size={4} mobileSize={12} align="center">
                                <Padding
                                    size={{
                                        left: PaddingSizes.FiftyTwo,
                                        right: PaddingSizes.FiftyTwo,
                                    }}
                                    mobileSize={{
                                        top: PaddingSizes.Twenty,
                                    }}
                                >
                                    <Row center>
                                        <Cell size={4} mobileSize={2}>
                                            <LazyImage src={Assets.Follow} />
                                        </Cell>
                                    </Row>
                                    <Padding
                                        size={{
                                            top: PaddingSizes.ThirtyTwo,
                                            bottom: PaddingSizes.Sixteen,
                                        }}
                                        mobileSize={{
                                            bottom: PaddingSizes.Fourty,
                                        }}
                                    >
                                        <SubHeadline subheadlineType="SubHeadline2">Follow bots</SubHeadline>
                                    </Padding>
                                    <Text bodyType="Body2">
                                        Our Bot Marketplace gives you the option to follow the best-rated Creator bots and mirror its trades. No need
                                        for expert skills.
                                    </Text>
                                </Padding>
                            </Cell>
                            <Cell size={4} mobileSize={12} align="center">
                                <Padding
                                    size={{
                                        left: PaddingSizes.FiftyTwo,
                                        right: PaddingSizes.FiftyTwo,
                                    }}
                                    mobileSize={{
                                        top: PaddingSizes.Twenty,
                                    }}
                                >
                                    <Row center>
                                        <Cell size={4} mobileSize={2}>
                                            <LazyImage src={Assets.Profit} />
                                        </Cell>
                                    </Row>
                                    <Padding
                                        size={{
                                            top: PaddingSizes.ThirtyTwo,
                                            bottom: PaddingSizes.Sixteen,
                                        }}
                                        mobileSize={{
                                            bottom: PaddingSizes.Fourty,
                                        }}
                                    >
                                        <SubHeadline subheadlineType="SubHeadline2">Profit from each other</SubHeadline>
                                    </Padding>
                                    <Text bodyType="Body3">
                                        On Trality, Creators and Followers can profit from bots individually but, more importantly, also from each
                                        other.
                                    </Text>
                                </Padding>
                            </Cell>
                        </Row>
                    </Padding>
                </MainContainer>
            </Padding>
            <Padding
                size={{
                    top: PaddingSizes.NinetySix,
                    bottom: PaddingSizes.NinetySix,
                }}
                mobileSize={{
                    top: PaddingSizes.TwentyFour,
                    bottom: PaddingSizes.TwentyFour,
                }}
            >
                <MainContainer>
                    <Row>
                        <Cell size={6} mobileSize={12} alignVertical="middle">
                            <Headline headlineType="Headline5">Creators build a follower base and generate income.</Headline>
                            <Padding
                                size={{
                                    top: PaddingSizes.TwentyFour,
                                    bottom: PaddingSizes.TwentyFour,
                                }}
                                mobileSize={{
                                    top: PaddingSizes.TwentyFour,
                                    bottom: PaddingSizes.TwentyFour,
                                }}
                            >
                                <Text bodyType="Body2">
                                    Publish your bot on the Trality Bot Marketplace. For every follower you are rewarded a monthly rent for your
                                    effort.
                                </Text>
                            </Padding>
                            <ul>
                                <li>Generate income without the need for large initial funds - only your trading idea counts</li>
                                <li>Stay in touch with your followers and improve your bot together</li>
                                <li>Your algorithm will never be revealed to anyone</li>
                            </ul>
                        </Cell>
                        <Cell size={6} mobileSize={12}>
                            <LazyImage src={Assets.MarketplaceFeature1} />
                        </Cell>
                    </Row>
                </MainContainer>
            </Padding>
            <MainContainer>
                <Row>
                    <Cell size={6} mobileSize={12} align="right" alignMobile="right">
                        <LazyImage src={Assets.MarketplaceFeature2} />
                    </Cell>
                    <Cell size={6} mobileSize={12} alignVertical="middle">
                        <Headline headlineType="Headline5">Followers profit from a quality-screened Creator bot.</Headline>
                        <Padding
                            size={{
                                top: PaddingSizes.TwentyFour,
                                bottom: PaddingSizes.TwentyFour,
                            }}
                            mobileSize={{
                                top: PaddingSizes.TwentyFour,
                                bottom: PaddingSizes.TwentyFour,
                            }}
                        >
                            <Text bodyType="Body2">
                                Using Trality is not a black box. Choose from well-documented expert bots and follow the one which matches your
                                objectives.
                            </Text>
                        </Padding>
                        <ul>
                            <li>Connect to your favorite crypto exchange</li>
                            <li>The bot automatically starts trading for you</li>
                            <li>Receive updates to your bot from Creators</li>
                        </ul>
                    </Cell>
                </Row>
            </MainContainer>
            <StartTradingNow />
            <FAQs />
        </Layout.Page>
    );
};

export default Marketplace;
