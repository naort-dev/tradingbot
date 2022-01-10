import { Layout } from '@containers';
import { Header, Image, TextBlock } from 'components';
import { Screens, Illustrations } from '@assets';
import { EventType, SignupOrigins } from '@trality/web-tracking';
import { ConstUrl } from '@constants';
import { MetaTags, Page } from '../../../util/metaTags';
import React from 'react';
import { Features } from 'components/features';
import { StartTradingNow } from 'components/starttradingnow';
import {
    GreyBackground,
    MainContainer,
    Highlight,
    Row,
    Cell,
    Headline,
    Padding,
    PaddingSizes,
    Assets,
    Text,
    Button,
    TextLink,
} from '@trality/web-ui-components';
import { LazyImage } from 'components/lazyImage';
import { WatchVideo } from 'components/WatchVideo';
import { useLink } from '@hooks';

const RuleBuilder = () => {
    const followLink = useLink('login');
    return (
        <Layout.Page title="creator-rule-editor">
            <MetaTags page={Page.RuleBuilder} />
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
                                    top: PaddingSizes.OneHundred,
                                    bottom: PaddingSizes.TwentyFour,
                                }}
                            >
                                <Headline headlineType="Headline1">
                                    Build trading strategies without <Highlight>Code</Highlight>
                                </Headline>
                                <Padding
                                    size={{
                                        top: PaddingSizes.ThirtyTwo,
                                        bottom: PaddingSizes.FiftySix,
                                        right: PaddingSizes.Four,
                                    }}
                                    mobileSize={{
                                        top: PaddingSizes.TwentyFour,
                                        bottom: PaddingSizes.TwentyFour,
                                    }}
                                >
                                    <Text bodyType="Body1">
                                        Start your journey to profitable algorithmic trading with the Trality Rule Builder. Its graphical user
                                        interface lets you build your trading bot's logic by simply dragging and dropping indicators and strategies.
                                    </Text>
                                </Padding>
                                <Row>
                                    <Cell size={6} mobileSize={12} align="right" alignMobile="right">
                                        <Padding
                                            size={{
                                                right: PaddingSizes.Four,
                                            }}
                                            mobileSize={{
                                                bottom: PaddingSizes.Sixteen,
                                            }}
                                        >
                                            <Row>
                                                <Button fullWidth onClick={() => followLink()}>
                                                    Start building for free!
                                                </Button>
                                            </Row>
                                        </Padding>
                                    </Cell>
                                    <Cell size={5} mobileSize={12} align="left" alignMobile="center">
                                        <WatchVideo srcYtb="https://www.youtube.com/embed/4K7oPuWkM4c" />
                                    </Cell>
                                </Row>
                            </Padding>
                        </Cell>
                        <Cell size={7} mobileSize={12}>
                            <Padding
                                size={{
                                    top: PaddingSizes.Eighty,
                                }}
                                mobileSize={{
                                    top: PaddingSizes.Sixteen,
                                }}
                            >
                                <LazyImage src={Assets.RuleBuilderIllustration} />
                            </Padding>
                        </Cell>
                    </Row>
                </MainContainer>
            </GreyBackground>
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
                            <Headline headlineType="Headline2">Building bots in a few minutes</Headline>
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
                                    Using the Trality Rule Builder, you can turn your ideas into a profitable strategy and optimize it until you're
                                    satisfied.
                                </Text>
                            </Padding>
                            <ul>
                                <li>Build upon curated, pre-defined trading strategies</li>
                                <li>Select from over 100 technical indicators</li>
                                <li>Use boolean logic to arrange strategy parts</li>
                                <li>Backtest your strategy with historical data</li>
                            </ul>
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
                                <LazyImage src={Assets.RBPage} />
                            </Padding>
                        </Cell>
                    </Row>
                </MainContainer>
            </Padding>
            <MainContainer>
                <Row>
                    <Cell size={6} mobileSize={12} align="right" alignMobile="right">
                        <LazyImage src={Assets.HelpAndDocumentation} />
                    </Cell>
                    <Cell size={6} mobileSize={12} alignVertical="middle">
                        <Headline headlineType="Headline2">Evolve from rules to code</Headline>
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
                            <Text bodyType="Body2">Step up your algorithmic trading game using our different Creator Tools.</Text>
                        </Padding>
                        <ul>
                            <li>Transform your rule-based bots into Python code automatically</li>
                            <li>Enjoy video tutorials to learn more about algorithmic trading</li>
                            <li>Make use of our detailed documentation</li>
                        </ul>
                    </Cell>
                </Row>
            </MainContainer>
            <Features />
            <StartTradingNow />
        </Layout.Page>
    );
};

export default RuleBuilder;
