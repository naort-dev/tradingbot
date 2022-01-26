import { Layout } from '@containers';
import { Header, ImageContainer, HeaderIcon, KnowMore, TextBlock, Button } from 'components';
import { ImagesMisc, Icons } from '@assets';

import { MetaTags, Page } from '../../util/metaTags';
import { LazyImage } from 'components/lazyImage';
import {
    MainContainer,
    Row,
    Cell,
    Headline,
    Padding,
    Assets,
    PaddingSizes,
    Text,
    TextLink,
    BlueBackground,
    CyanLightestBackground,
    SubHeadline,
} from '@trality/web-ui-components';
import React from 'react';
import { FeaturedIn } from 'components/featuredin';
import { JobsContainer } from 'components/jobs';

const Jobs = () => {
    return (
        <Layout.Page title="jobs">
            <MetaTags page={Page.Jobs} />
            <Padding
                size={{
                    top: PaddingSizes.NinetySix,
                    bottom: PaddingSizes.SixtyFour,
                    left: PaddingSizes.Zero,
                    right: PaddingSizes.Zero,
                }}
                mobileSize={{
                    top: PaddingSizes.OneHundred,
                    bottom: PaddingSizes.FiftySix,
                    left: PaddingSizes.Zero,
                    right: PaddingSizes.Zero,
                }}
            >
                <MainContainer>
                    <Row>
                        <Cell size={6} mobileSize={12} alignVertical="middle">
                            <Headline headlineType="Headline2">We're hiring!</Headline>
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
                                <Text bodyType="Body3">
                                    Would you like to help us revolutionize investing by bringing the power and potential of trading bots to everyone
                                    who needs it? We're a small but very diverse team and we would love to hear from you!
                                </Text>
                                <Padding
                                    size={{
                                        top: PaddingSizes.ThirtyTwo,
                                    }}
                                    mobileSize={{
                                        top: PaddingSizes.Sixteen,
                                    }}
                                >
                                    <TextLink href="#jobs" withArrow>
                                        View open positions
                                    </TextLink>
                                </Padding>
                            </Padding>
                        </Cell>
                        <Cell size={6} mobileSize={12}>
                            <LazyImage src={Assets.CareersHero} />
                        </Cell>
                    </Row>
                </MainContainer>
            </Padding>
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
                            <Padding
                                size={{
                                    bottom: PaddingSizes.SixtyFour,
                                }}
                                mobileSize={{
                                    bottom: PaddingSizes.SixtyFour,
                                }}
                            >
                                <Headline headlineType="Headline2">Why join us?</Headline>
                            </Padding>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell size={1} mobileSize={0} />
                        <Cell size={10} mobileSize={12} align="center">
                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/hOXwl2DVofI"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
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
                                        left: PaddingSizes.Fourty,
                                        right: PaddingSizes.Fourty,
                                    }}
                                    mobileSize={{
                                        top: PaddingSizes.Twenty,
                                    }}
                                >
                                    <Row center>
                                        <Cell size={4} mobileSize={2}>
                                            <LazyImage src={Assets.Team} />
                                        </Cell>
                                    </Row>
                                    <Padding
                                        size={{
                                            top: PaddingSizes.ThirtyTwo,
                                            bottom: PaddingSizes.Sixteen,
                                        }}
                                        mobileSize={{
                                            top: PaddingSizes.ThirtyTwo,
                                            bottom: PaddingSizes.Sixteen,
                                        }}
                                    >
                                        <SubHeadline subheadlineType="SubHeadline2">Small team, large responsibilty</SubHeadline>
                                    </Padding>
                                    <Text bodyType="Body4">
                                        We're a team of only 9, doubling until the end of the year. If you’re the right person for the job, you’re in
                                        charge of it!
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
                                            <LazyImage src={Assets.Renumeration} />
                                        </Cell>
                                    </Row>
                                    <Padding
                                        size={{
                                            top: PaddingSizes.ThirtyTwo,
                                            bottom: PaddingSizes.Sixteen,
                                            left: PaddingSizes.Zero,
                                            right: PaddingSizes.Zero,
                                        }}
                                        mobileSize={{
                                            top: PaddingSizes.ThirtyTwo,
                                            bottom: PaddingSizes.Sixteen,
                                            left: PaddingSizes.Zero,
                                            right: PaddingSizes.Zero,
                                        }}
                                    >
                                        <SubHeadline subheadlineType="SubHeadline2">Competitive remuneration</SubHeadline>
                                    </Padding>
                                    <Text bodyType="Body4">
                                        We want the best for the job and pay accordingly! We're also open to negotiating equity-based compensation.
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
                                            <LazyImage src={Assets.Flexibility} />
                                        </Cell>
                                    </Row>
                                    <Padding
                                        size={{
                                            top: PaddingSizes.ThirtyTwo,
                                            bottom: PaddingSizes.Sixteen,
                                        }}
                                        mobileSize={{
                                            top: PaddingSizes.ThirtyTwo,
                                            bottom: PaddingSizes.Sixteen,
                                        }}
                                    >
                                        <SubHeadline subheadlineType="SubHeadline2">Hybrid working model</SubHeadline>
                                    </Padding>
                                    <Text bodyType="Body4">
                                        We understand that people are different. Wanna work remotely? Fine. Wanna join us in our offices? Perfect as
                                        well.
                                    </Text>
                                </Padding>
                            </Cell>
                        </Row>
                    </Padding>
                </MainContainer>
            </Padding>
            <div id="jobs">
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
                                <Headline headlineType="Headline2">Open positions</Headline>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell size={12} mobileSize={12} align="left">
                                <Padding
                                    size={{
                                        top: PaddingSizes.TwentyFour,
                                        bottom: PaddingSizes.SixtyFour,
                                    }}
                                    mobileSize={{
                                        top: PaddingSizes.Sixteen,
                                        bottom: PaddingSizes.Sixteen,
                                    }}
                                >
                                    <Text bodyType="Body2">We, at Trality, are currently looking for...</Text>
                                </Padding>
                            </Cell>
                        </Row>
                        <JobsContainer />
                    </MainContainer>
                </Padding>
            </div>
            <CyanLightestBackground>
                <MainContainer>
                    <Row center>
                        <Cell size={6} mobileSize={10} align="center">
                            <Padding
                                size={{
                                    top: PaddingSizes.FiftySix,
                                    bottom: PaddingSizes.TwentyFour,
                                }}
                                mobileSize={{
                                    bottom: PaddingSizes.TwentyFour,
                                }}
                            >
                                <Headline headlineType="Headline2">Is your role not on the list?</Headline>
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
                                    We probably have a position for you if you are a great fit! Simply drop us an email including a CV and a 1-page
                                    cover letter including a brief description of your desired role.
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
                                <Button onClick={() => window.location.assign(atob('bWFpbHRvOmpvYnNAdHJhbGl0eS5jb20/c3ViamVjdD1Kb2IgRW5xdWlyeQ=='))}>
                                    Drop us an email!
                                </Button>
                            </Padding>
                        </Cell>
                    </Row>
                </MainContainer>
            </CyanLightestBackground>
            <FeaturedIn />
        </Layout.Page>
    );
};

export default Jobs;
