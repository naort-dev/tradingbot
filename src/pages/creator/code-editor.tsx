import { Layout } from '@containers';
import { Page, MetaTags } from '../../../util/metaTags';
import React from 'react';
import { Features } from 'components/features';
import { StartTradingNow } from 'components/starttradingnow';
import { FAQs } from 'components/FAQs';
import {
    MainContainer,
    Padding,
    PaddingSizes,
    GreyBackground,
    Button,
    Row,
    Cell,
    Headline,
    Highlight,
    Text,
    Assets,
    TextLink,
} from '@trality/web-ui-components';
import { LazyImage } from 'components/lazyImage';
import { WatchVideo } from 'components/WatchVideo';
import { useLink } from '@hooks';

const CodeEditor = () => {
    const followLink = useLink('login');
    return (
        <Layout.Page title="creator-code-editor">
            <MetaTags page={Page.CodeEditor} />
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
                                <Headline headlineType="Headline1">
                                    Create trading bots with <Highlight>Code</Highlight>
                                </Headline>
                                <Padding
                                    size={{
                                        top: PaddingSizes.ThirtyTwo,
                                        bottom: PaddingSizes.FiftySix,
                                        right: PaddingSizes.Four,
                                    }}
                                    mobileSize={{
                                        top: PaddingSizes.Sixteen,
                                        bottom: PaddingSizes.TwentyFour,
                                    }}
                                >
                                    <Text bodyType="Body1">
                                        We believe that coding a trading bot is pretty cool. That's why we crafted the cloud-based Trality Code
                                        Editor: the most advanced of its kind that leaves nothing to be desired.
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
                                                    Start coding for free!
                                                </Button>
                                            </Row>
                                        </Padding>
                                    </Cell>
                                    <Cell size={5} mobileSize={12} align="left" alignMobile="center">
                                        <Padding
                                            size={{
                                                bottom: PaddingSizes.SixtyEight,
                                                left: PaddingSizes.Four,
                                            }}
                                        >
                                            <WatchVideo srcYtb="https://www.youtube.com/embed/RbowQQgNppA" />
                                        </Padding>
                                    </Cell>
                                </Row>
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
                                <LazyImage src={Assets.CodeEditorIllustration} />
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
                            <Headline headlineType="Headline2">Coding in Python</Headline>
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
                                <Text bodyType="Body2">Use the language and libraries you are already familiar with.</Text>
                            </Padding>
                            <ul>
                                <li>Use Python to code your algorithms</li>
                                <li>Access financial data with our easy-to-use API</li>
                                <li>Access a full range of TA indicators</li>
                                <li>Use numpy and other libraries (more to come!)</li>
                            </ul>
                            <Padding
                                size={{
                                    top: PaddingSizes.ThirtyTwo,
                                }}
                                mobileSize={{
                                    top: PaddingSizes.Sixteen,
                                }}
                            >
                                <TextLink href="https://docs.trality.com" withArrow target="_blank">
                                    View our documentation
                                </TextLink>
                            </Padding>
                        </Cell>
                        <Cell size={6} mobileSize={12}>
                            <LazyImage src={Assets.CEPage} />
                        </Cell>
                    </Row>
                </MainContainer>
            </Padding>
            <MainContainer>
                <Row>
                    <Cell size={6} mobileSize={12} align="right" alignMobile="right">
                        <LazyImage src={Assets.BacktestingFeature} />
                    </Cell>
                    <Cell size={6} mobileSize={12} alignVertical="middle">
                        <Headline headlineType="Headline2">We've got you covered</Headline>
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
                            <Text bodyType="Body2">Bring your most advanced trading ideas to life using our growing list of tools and features.</Text>
                        </Padding>
                        <ul>
                            <li>Edit in the browser with intelligent auto-complete</li>
                            <li>Backtest directly in the browser</li>
                            <li>Benefit from clear versioning and your backtest history</li>
                            <li>Use in-browser debugging</li>
                            <li>Use automatic rebalancing (coming soon!)</li>
                        </ul>
                    </Cell>
                </Row>
            </MainContainer>
            <Features />
            <StartTradingNow />
            <FAQs />
        </Layout.Page>
    );
};

export default CodeEditor;
