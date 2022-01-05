import { Layout, SocialLinks } from '@containers';
import {
    Assets,
    BlueBackground,
    Cell,
    Headline,
    HideMobile,
    MainContainer,
    Padding,
    PaddingSizes,
    Row,
    SubHeadline,
    Surface,
    Text,
    TextLink,
} from '@trality/web-ui-components';
import { LazyImage } from 'components/lazyImage';
import React from 'react';
import { MetaTags, Page } from '../../util/metaTags';

const Press = () => {
    return (
        <Layout.Page title="press">
            <MetaTags page={Page.Press} />
            <MainContainer>
                <Padding
                    size={{ top: PaddingSizes.SixtyFour, left: PaddingSizes.Zero, right: PaddingSizes.Zero }}
                    mobileSize={{ top: PaddingSizes.SixtyFour, left: PaddingSizes.Zero, right: PaddingSizes.Zero }}
                >
                    <Row>
                        <Cell size={8} mobileSize={12}>
                            <Padding
                                size={{
                                    bottom: PaddingSizes.TwentyFour,
                                }}
                                mobileSize={{
                                    bottom: PaddingSizes.TwentyFour,
                                }}
                            >
                                <Headline headlineType="Headline2">Press Kit</Headline>
                            </Padding>
                            <Padding
                                size={{
                                    bottom: PaddingSizes.TwentyFour,
                                }}
                                mobileSize={{
                                    bottom: PaddingSizes.TwentyFour,
                                }}
                            >
                                <Text bodyType="Body1">
                                    Trality brings the power and potential of complex automated trading to the world of the everyday investor so they,
                                    and not just the richest traders, can also benefit from this revolutionary technology. Here, you will find our
                                    latest press releases with related materials such as company statistics, logos and an image library.
                                </Text>
                            </Padding>
                            <Text bodyType="Body1">For media inquiries, please send an email to our Communications Lead.</Text>
                        </Cell>
                    </Row>
                </Padding>
                <HideMobile>
                    <Padding
                        size={{ top: PaddingSizes.ThirtySix, bottom: PaddingSizes.SixtyFour, left: PaddingSizes.Zero, right: PaddingSizes.Zero }}
                        mobileSize={{
                            top: PaddingSizes.ThirtySix,
                            bottom: PaddingSizes.SixtyFour,
                            left: PaddingSizes.Zero,
                            right: PaddingSizes.Zero,
                        }}
                    >
                        <Row>
                            <Cell size={6} mobileSize={12} alignVertical="middle">
                                <Padding
                                    size={{
                                        right: PaddingSizes.FiftyTwo,
                                    }}
                                    mobileSize={{
                                        top: PaddingSizes.SixtyFour,
                                        bottom: PaddingSizes.SixtyFour,
                                    }}
                                >
                                    <Text bodyType="Body1" darker>
                                        Contact
                                    </Text>
                                </Padding>
                            </Cell>
                            <Cell size={6} mobileSize={12}>
                                <Padding
                                    size={{
                                        right: PaddingSizes.FiftyTwo,
                                    }}
                                    mobileSize={{
                                        top: PaddingSizes.SixtyFour,
                                        bottom: PaddingSizes.SixtyFour,
                                    }}
                                >
                                    <Text bodyType="Body1" darker>
                                        Get in touch
                                    </Text>
                                </Padding>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell size={6} mobileSize={12} alignVertical="middle">
                                <Padding
                                    size={{
                                        right: PaddingSizes.FiftyTwo,
                                    }}
                                    mobileSize={{
                                        top: PaddingSizes.SixtyFour,
                                        bottom: PaddingSizes.SixtyFour,
                                    }}
                                >
                                    <Text bodyType="Body1">
                                        <TextLink href="mailto:pr@trality.com" intext>
                                            pr@trality.com
                                        </TextLink>
                                    </Text>
                                </Padding>
                            </Cell>
                            <Cell size={6} mobileSize={12}>
                                <Padding
                                    size={{
                                        right: PaddingSizes.FiftyTwo,
                                    }}
                                    mobileSize={{
                                        top: PaddingSizes.SixtyFour,
                                        bottom: PaddingSizes.SixtyFour,
                                    }}
                                >
                                    <Text bodyType="Body1">
                                        <Row>
                                            {SocialLinks.map((item) => {
                                                return (
                                                    <Cell size={1} mobileSize={2}>
                                                        <a href={item.link} target="_blank">
                                                            <img src={item.logo} />
                                                        </a>
                                                    </Cell>
                                                );
                                            })}
                                        </Row>
                                    </Text>
                                </Padding>
                            </Cell>
                        </Row>
                    </Padding>
                </HideMobile>
                <Padding
                    size={{ top: PaddingSizes.SixtyFour, bottom: PaddingSizes.SixtyFour, left: PaddingSizes.Zero, right: PaddingSizes.Zero }}
                    mobileSize={{ top: PaddingSizes.SixtyFour, bottom: PaddingSizes.SixtyFour, left: PaddingSizes.Zero, right: PaddingSizes.Zero }}
                >
                    <Row>
                        <Cell size={6} mobileSize={12} alignVertical="middle">
                            <Padding
                                size={{
                                    right: PaddingSizes.FiftyTwo,
                                }}
                                mobileSize={{
                                    top: PaddingSizes.SixtyFour,
                                    bottom: PaddingSizes.SixtyFour,
                                }}
                            >
                                <Headline headlineType="Headline2">About Trality</Headline>
                                <Padding
                                    size={{
                                        top: PaddingSizes.Sixteen,
                                    }}
                                    mobileSize={{
                                        top: PaddingSizes.SixtyFour,
                                    }}
                                >
                                    <Text bodyType="Body1">
                                        Founded in 2018 by Moritz Putzhammer and Christopher Helf in response to the volatile and mostly unpredictable
                                        cryptocurrency market—Trality exists to bring automated, algorithmic trading to all who need it.
                                    </Text>
                                </Padding>
                                <Padding
                                    size={{
                                        top: PaddingSizes.Sixteen,
                                    }}
                                    mobileSize={{
                                        top: PaddingSizes.SixtyFour,
                                    }}
                                >
                                    <Text bodyType="Body1">
                                        While most investors are losing out due to emotional trading or poor timing, the upper echelons of the
                                        financial world are raking in the profit thanks to advanced, automated systems. We are changing that by giving
                                        everyone the state-of-the-art tools they need to automate their own strategies with multiple fair and flexible
                                        packages for different levels of users.
                                    </Text>
                                </Padding>
                            </Padding>
                        </Cell>
                        <Cell size={6} mobileSize={12}>
                            <Padding
                                size={{
                                    left: PaddingSizes.TwentyFour,
                                }}
                            >
                                <LazyImage src={Assets.TeamPicture} />
                            </Padding>
                        </Cell>
                    </Row>
                </Padding>
            </MainContainer>
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
            <MainContainer>
                <Padding
                    size={{ top: PaddingSizes.ThirtySix, bottom: PaddingSizes.ThirtySix, left: PaddingSizes.Zero, right: PaddingSizes.Zero }}
                    mobileSize={{ top: PaddingSizes.ThirtySix, bottom: PaddingSizes.ThirtySix, left: PaddingSizes.Zero, right: PaddingSizes.Zero }}
                >
                    <Row>
                        <Cell size={12} mobileSize={12}>
                            <Padding
                                size={{
                                    bottom: PaddingSizes.TwentyFour,
                                }}
                                mobileSize={{
                                    bottom: PaddingSizes.TwentyFour,
                                }}
                            >
                                <Headline headlineType="Headline2">Brand Assets</Headline>
                            </Padding>
                        </Cell>
                    </Row>
                </Padding>
                <Row>
                    <Cell size={4} mobileSize={12}>
                        <Padding
                            size={{
                                bottom: PaddingSizes.TwentyFour,
                            }}
                            mobileSize={{
                                bottom: PaddingSizes.TwentyFour,
                            }}
                        >
                            <Surface>
                                <Padding
                                    size={{
                                        bottom: PaddingSizes.TwentyFour,
                                        top: PaddingSizes.TwentyFour,
                                        left: PaddingSizes.TwentyFour,
                                        right: PaddingSizes.TwentyFour,
                                    }}
                                    mobileSize={{
                                        bottom: PaddingSizes.TwentyFour,
                                        top: PaddingSizes.TwentyFour,
                                        left: PaddingSizes.TwentyFour,
                                        right: PaddingSizes.TwentyFour,
                                    }}
                                >
                                    <Row>
                                        <Cell size={4} mobileSize={12}>
                                            <LazyImage src={Assets.TralitySmallLogomark} />
                                        </Cell>
                                    </Row>
                                    <Padding
                                        size={{
                                            bottom: PaddingSizes.TwentyFour,
                                            top: PaddingSizes.Sixteen,
                                        }}
                                        mobileSize={{
                                            bottom: PaddingSizes.TwentyFour,
                                            top: PaddingSizes.Sixteen,
                                        }}
                                    >
                                        <Row>
                                            <Cell size={12} mobileSize={12}>
                                                <SubHeadline subheadlineType="SubHeadline2">Trality Logos</SubHeadline>
                                            </Cell>
                                        </Row>
                                    </Padding>
                                    <Padding
                                        size={{
                                            bottom: PaddingSizes.ThirtyTwo,
                                        }}
                                        mobileSize={{
                                            bottom: PaddingSizes.ThirtyTwo,
                                        }}
                                    >
                                        <Row>
                                            <Cell size={12} mobileSize={12}>
                                                <Text bodyType="Body3">All Trality logo variations in different formats & alignments.</Text>
                                            </Cell>
                                        </Row>
                                    </Padding>
                                    <TextLink href="/Trality-Logos.zip">
                                        Download logos <img src={Assets.DownloadArrow} />
                                    </TextLink>
                                </Padding>
                            </Surface>
                        </Padding>
                    </Cell>
                    <Cell size={4} mobileSize={12}>
                        <Padding
                            size={{
                                bottom: PaddingSizes.TwentyFour,
                            }}
                            mobileSize={{
                                bottom: PaddingSizes.TwentyFour,
                            }}
                        >
                            <Surface>
                                <Padding
                                    size={{
                                        bottom: PaddingSizes.TwentyFour,
                                        top: PaddingSizes.TwentyFour,
                                        left: PaddingSizes.TwentyFour,
                                        right: PaddingSizes.TwentyFour,
                                    }}
                                    mobileSize={{
                                        bottom: PaddingSizes.TwentyFour,
                                        top: PaddingSizes.TwentyFour,
                                        left: PaddingSizes.TwentyFour,
                                        right: PaddingSizes.TwentyFour,
                                    }}
                                >
                                    <Row>
                                        <Cell size={4} mobileSize={12}>
                                            <LazyImage src={Assets.BotHeadPress} />
                                        </Cell>
                                    </Row>
                                    <Padding
                                        size={{
                                            bottom: PaddingSizes.TwentyFour,
                                            top: PaddingSizes.Sixteen,
                                        }}
                                        mobileSize={{
                                            bottom: PaddingSizes.TwentyFour,
                                            top: PaddingSizes.Sixteen,
                                        }}
                                    >
                                        <Row>
                                            <Cell size={12} mobileSize={12}>
                                                <SubHeadline subheadlineType="SubHeadline2">Product Images</SubHeadline>
                                            </Cell>
                                        </Row>
                                    </Padding>
                                    <Padding
                                        size={{
                                            bottom: PaddingSizes.ThirtyTwo,
                                        }}
                                        mobileSize={{
                                            bottom: PaddingSizes.ThirtyTwo,
                                        }}
                                    >
                                        <Row>
                                            <Cell size={12} mobileSize={12}>
                                                <Text bodyType="Body3">A collection of images displaying our product & its unique features.</Text>
                                            </Cell>
                                        </Row>
                                    </Padding>
                                    <TextLink href="/Product-images.zip">
                                        Download images <img src={Assets.DownloadArrow} />
                                    </TextLink>
                                </Padding>
                            </Surface>
                        </Padding>
                    </Cell>
                    <Cell size={4} mobileSize={12}>
                        <Padding
                            size={{
                                bottom: PaddingSizes.TwentyFour,
                            }}
                            mobileSize={{
                                bottom: PaddingSizes.TwentyFour,
                            }}
                        >
                            <Surface>
                                <Padding
                                    size={{
                                        bottom: PaddingSizes.TwentyFour,
                                        top: PaddingSizes.TwentyFour,
                                        left: PaddingSizes.TwentyFour,
                                        right: PaddingSizes.TwentyFour,
                                    }}
                                    mobileSize={{
                                        bottom: PaddingSizes.TwentyFour,
                                        top: PaddingSizes.TwentyFour,
                                        left: PaddingSizes.TwentyFour,
                                        right: PaddingSizes.TwentyFour,
                                    }}
                                >
                                    <Row>
                                        <Cell size={4} mobileSize={12}>
                                            <LazyImage src={Assets.TeamMembersSmall} />
                                        </Cell>
                                    </Row>
                                    <Padding
                                        size={{
                                            bottom: PaddingSizes.TwentyFour,
                                            top: PaddingSizes.Sixteen,
                                        }}
                                        mobileSize={{
                                            bottom: PaddingSizes.TwentyFour,
                                            top: PaddingSizes.Sixteen,
                                        }}
                                    >
                                        <Row>
                                            <Cell size={12} mobileSize={12}>
                                                <SubHeadline subheadlineType="SubHeadline2">Founders & Team Images</SubHeadline>
                                            </Cell>
                                        </Row>
                                    </Padding>
                                    <Padding
                                        size={{
                                            bottom: PaddingSizes.ThirtyTwo,
                                        }}
                                        mobileSize={{
                                            bottom: PaddingSizes.ThirtyTwo,
                                        }}
                                    >
                                        <Row>
                                            <Cell size={12} mobileSize={12}>
                                                <Text bodyType="Body3">A collection of our entire team's & founders' profile images.</Text>
                                            </Cell>
                                        </Row>
                                    </Padding>
                                    <TextLink href="/Team-images.zip">
                                        Download images <img src={Assets.DownloadArrow} />
                                    </TextLink>
                                </Padding>
                            </Surface>
                        </Padding>
                    </Cell>
                </Row>
            </MainContainer>
            <MainContainer>
                <Padding
                    size={{ top: PaddingSizes.SixtyFour, bottom: PaddingSizes.ThirtySix, left: PaddingSizes.Zero, right: PaddingSizes.Zero }}
                    mobileSize={{ top: PaddingSizes.SixtyFour, bottom: PaddingSizes.ThirtySix, left: PaddingSizes.Zero, right: PaddingSizes.Zero }}
                >
                    <Row>
                        <Cell size={12} mobileSize={12}>
                            <Padding
                                size={{
                                    bottom: PaddingSizes.TwentyFour,
                                }}
                                mobileSize={{
                                    bottom: PaddingSizes.TwentyFour,
                                }}
                            >
                                <Headline headlineType="Headline2">Recent Press Releases</Headline>
                            </Padding>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell size={4} mobileSize={12}>
                            <TextLink href="https://www.trality.com/blog/ffg-release">
                                <Padding
                                    size={{}}
                                    mobileSize={{
                                        bottom: PaddingSizes.ThirtyTwo,
                                    }}
                                >
                                    <LazyImage src="/blog/content/images/2020/03/ffg-de.png" borders />
                                    <Padding
                                        size={{
                                            top: PaddingSizes.TwentyFour,
                                            bottom: PaddingSizes.Sixteen,
                                        }}
                                        mobileSize={{
                                            top: PaddingSizes.Sixteen,
                                            bottom: PaddingSizes.Sixteen,
                                        }}
                                    >
                                        <SubHeadline subheadlineType="SubHeadline1">Trality Secures FFG Grant</SubHeadline>
                                    </Padding>
                                </Padding>
                            </TextLink>
                        </Cell>
                        <Cell size={4} mobileSize={12}>
                            <TextLink href="/blog/fresh-capital-for-trality">
                                <Padding
                                    size={{}}
                                    mobileSize={{
                                        bottom: PaddingSizes.ThirtyTwo,
                                    }}
                                >
                                    <LazyImage src="/blog/content/images/2021/03/Trality_founders_horizontal-min.png" borders />
                                    <Padding
                                        size={{
                                            top: PaddingSizes.TwentyFour,
                                            bottom: PaddingSizes.Sixteen,
                                        }}
                                        mobileSize={{
                                            top: PaddingSizes.Sixteen,
                                            bottom: PaddingSizes.Sixteen,
                                        }}
                                    >
                                        <SubHeadline subheadlineType="SubHeadline1">
                                            1.5M Euro Fresh Capital for our Vision of Revolutionizing Private Trading with a Platform for Trading Bots
                                        </SubHeadline>
                                    </Padding>
                                </Padding>
                            </TextLink>
                        </Cell>
                    </Row>
                </Padding>
            </MainContainer>
        </Layout.Page>
    );
};

export default Press;
