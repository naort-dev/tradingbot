import { Layout } from '@containers';
import { Header, Button } from '@components';
import React, { ReactNode } from 'react';

import { MetaTags, Page } from '../util/metaTags';
import {
    Assets,
    Cell,
    CyanLightestBackground,
    Headline,
    MainContainer,
    Padding,
    PaddingSizes,
    Row,
    SubHeadline,
    Surface,
    Text,
    TextLink,
} from '@trality/web-ui-components';
import { FeaturedIn } from 'components/featuredin';
import { LazyImage } from 'components/lazyImage';

type PersonSocialLinks = {
    type: 'linkedin';
    link: string;
};

type Person = {
    name: string;
    title: string;
    photo: string | null;
    bio: string;
    socialLinks: PersonSocialLinks[];
};

const pageData: Person[] = [
    {
        name: 'Moritz Putzhammer',
        title: 'Co-Founder & CEO',
        bio: 'Completed project management and finance positions in six different countries while obtaining his PhD.',
        photo: Assets.TeamPhotos.Moritz,
        socialLinks: [
            {
                type: 'linkedin',
                link: 'https://www.linkedin.com/in/putzhammer',
            },
        ],
    },
    {
        name: 'Christopher Helf',
        title: 'Co-Founder & CTO',
        bio: 'Built machine learning algorithms with <10ms latency on mobile outperforming state-of-the-art alternatives.',
        photo: Assets.TeamPhotos.Christopher,
        socialLinks: [
            {
                type: 'linkedin',
                link: 'https://www.linkedin.com/in/christopher-helf',
            },
        ],
    },
    {
        name: 'Andrea Salcedo',
        title: 'Sr. Software Engineer',
        bio: 'Andrea has worked as a backend engineer for over five years, focusing on API design, microservices, load testing and scalability.',
        photo: Assets.TeamPhotos.Andrea,
        socialLinks: [
            {
                type: 'linkedin',
                link: 'https://www.linkedin.com/in/acsalcedo',
            },
        ],
    },
    {
        name: 'Ovidiu Popescu',
        title: 'Head of Growth Marketing',
        bio: 'Scaled an FX broker from 0 to 20k paying users over five years as Head of Marketing.',
        photo: Assets.TeamPhotos.Ovi,
        socialLinks: [
            /* Don't have one. */
        ],
    },
    {
        name: 'Constantin Dißelkamp',
        title: 'ML Engineer',
        bio: 'M.Sc Theoretical Physics RWTH Aachen. Built ML strategies for crypto derivative platforms.',
        photo: Assets.TeamPhotos.Constantin,
        socialLinks: [
            {
                type: 'linkedin',
                link: 'https://www.linkedin.com/in/constantin-dißelkamp-7105b81a2',
            },
        ],
    },
    {
        name: 'Tamas Hodobay',
        title: 'Sr. Backend Engineer',
        bio: 'Spent years developing high traffic E-commerce websites, former blockchain developer at Lisk.io. True believer in cryptocurrencies and DeFi.',

        photo: null,
        socialLinks: [
            {
                type: 'linkedin',
                link: 'https://www.linkedin.com/in/hodobay/',
            },
        ],
    },
    {
        name: 'Declan Igoe',
        title: 'Copywriter & Content Specialist',
        bio: "Trality's Wordsmith. Declan was Content Specialist and Social Media Manager at Bitpanda where he helped shape the overall content strategy.",

        photo: Assets.TeamPhotos.Declan,
        socialLinks: [
            {
                type: 'linkedin',
                link: 'https://www.linkedin.com/in/digoe',
            },
        ],
    },
    {
        name: 'Jakub Strzadala',
        title: 'Sr. Frontend Engineer',
        bio: "Spent years working a vast variety of online projects. It's fast delivery to anybody on the planet.",

        photo: Assets.TeamPhotos.Jakub,
        socialLinks: [
            {
                type: 'linkedin',
                link: 'https://www.linkedin.com/in/jakub-strzadala-b9730526',
            },
        ],
    },
    {
        name: 'Davide Scassola',
        title: 'Jr AI Engineer',
        bio: 'M.Sc Data Science & Scientific Computing at University of Trieste, SISSA.',

        photo: Assets.TeamPhotos.Davide,
        socialLinks: [
            {
                type: 'linkedin',
                link: 'https://www.linkedin.com/in/davide-scassola/',
            },
        ],
    },
];

const Team = () => {
    return (
        <Layout.Page title="team">
            <MetaTags page={Page.About} />
            <MainContainer>
                <Padding
                    size={{ top: PaddingSizes.SixtyFour, bottom: PaddingSizes.SixtyFour, left: PaddingSizes.Zero, right: PaddingSizes.Zero }}
                    mobileSize={{ top: PaddingSizes.SixtyFour, bottom: PaddingSizes.SixtyFour, left: PaddingSizes.Zero, right: PaddingSizes.Zero }}
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
                                <Headline headlineType="Headline5">Automated investing, for everyone!</Headline>
                            </Padding>
                            <Text bodyType="Body2">
                                At Trality, we see a future in which everything is automated by bots and when it comes to automated investing, there
                                will be only one place to go: Trality. Founded in 2019 by Moritz Putzhammer and Christopher Helf, we strive to be the
                                go-to-place for anyone wanting to experience the power and potential of trading bots and we will bring that to
                                everyone who needs it — advanced users or beginners.
                            </Text>
                        </Cell>
                    </Row>
                </Padding>
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
                                <SubHeadline subheadlineType="SubHeadline2">Our vision</SubHeadline>
                                <Padding
                                    size={{
                                        top: PaddingSizes.Sixteen,
                                        bottom: PaddingSizes.SixtyFour,
                                    }}
                                    mobileSize={{
                                        top: PaddingSizes.SixtyFour,
                                        bottom: PaddingSizes.SixtyFour,
                                        left: PaddingSizes.Zero,
                                        right: PaddingSizes.Zero,
                                    }}
                                >
                                    <Text bodyType="Body2">
                                        We will bring the power and potential of algorithmic trading to everyone who needs it. Regardless of whether
                                        they are advanced traders or beginners, every single person will be able to have bots automatically manage
                                        their investments — across asset classes and platforms. All in one place.
                                    </Text>
                                </Padding>

                                <SubHeadline subheadlineType="SubHeadline2">Our mission</SubHeadline>
                                <Padding
                                    size={{
                                        top: PaddingSizes.Sixteen,
                                    }}
                                    mobileSize={{
                                        top: PaddingSizes.FiftySix,
                                        bottom: PaddingSizes.FiftySix,
                                    }}
                                >
                                    <Text bodyType="Body2">
                                        Trality is the platform for anyone to create and invest through automated trading bots. While professional
                                        traders successfully use automated trading, over 80% of private traders lose money due to emotional bias and
                                        lack of automation. That's why we build the first marketplace for trading bots that is available for traders
                                        of all levels of experience. With just a few taps from their mobile app, we enable followers to easily invest
                                        in bots created on the platform. To attract the best bot creators, we offer the most advanced tools for bot
                                        creation in private trading as well as the option to participate in revenue generated from their
                                        follower-base.
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
                <Padding
                    size={{ top: PaddingSizes.SixtyFour, bottom: PaddingSizes.SixtyFour }}
                    mobileSize={{ top: PaddingSizes.FiftySix, bottom: PaddingSizes.FiftySix }}
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
                                <Headline headlineType="Headline5">Our story</Headline>
                            </Padding>
                            <Text bodyType="Body2">
                                Once upon a time, two guys met at a university. Together they sat as they pondered the financial world and asked one
                                another why algorithmic trading is only accessible to big banks and hedge funds. They knew that over 80% of private
                                traders like you and me were losing money when they tried to compete against machines that are better traders in every
                                way. This discussion turned into an idea, and that idea evolved into Trality's vision. Step by step, we strive to
                                become the platform for everyone to create and invest through automated trading bots - this is what drives us. We
                                welcome traders of all experience levels and attract the best bot creators by offering the most advanced tools for bot
                                creation. Conversely, we will enable followers to easily invest in bots created on the platform to the benefit of all
                                parties.
                            </Text>
                        </Cell>
                    </Row>
                </Padding>
            </MainContainer>
            <FeaturedIn />
            <Padding
                size={{ top: PaddingSizes.SixtyFour, bottom: PaddingSizes.SixtyFour }}
                mobileSize={{ top: PaddingSizes.SixtyFour, bottom: PaddingSizes.SixtyFour }}
            >
                <MainContainer>
                    <Row>
                        <Cell size={12} mobileSize={12}>
                            <Padding
                                size={{
                                    bottom: PaddingSizes.TwentyFour,
                                }}
                                mobileSize={{
                                    bottom: PaddingSizes.FiftySix,
                                }}
                            >
                                <Headline headlineType="Headline5">Our experts</Headline>
                            </Padding>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell size={8} mobileSize={12}>
                            <Padding
                                size={{
                                    bottom: PaddingSizes.TwentyFour,
                                }}
                                mobileSize={{
                                    bottom: PaddingSizes.FiftySix,
                                }}
                            >
                                <Text bodyType="Body2">
                                    As part of our mission, we strictly only hire people from a range of backgrounds that have demonstrated prowess in
                                    the field of financial services. Every single one of our team members is as enthusiastic as the next about
                                    revolutionizing the world of private investing.
                                </Text>
                            </Padding>
                        </Cell>
                    </Row>
                    <Row>
                        {pageData.map((person) => {
                            return (
                                <Cell size={4} mobileSize={12}>
                                    <Padding
                                        size={{
                                            top: PaddingSizes.NinetySix,
                                        }}
                                        mobileSize={{
                                            top: PaddingSizes.TwentyFour,
                                        }}
                                    >
                                        <Row>
                                            <Cell size={4} mobileSize={4}>
                                                <Surface rounded>
                                                    <LazyImage
                                                        style={{
                                                            borderRadius: '1000px',
                                                        }}
                                                        src={person.photo ?? Assets.TeamPhotos.Unknown}
                                                    />
                                                </Surface>
                                            </Cell>
                                        </Row>
                                        <Padding
                                            size={{
                                                top: PaddingSizes.TwentyFour,
                                                bottom: PaddingSizes.Eight,
                                            }}
                                            mobileSize={{
                                                top: PaddingSizes.TwentyFour,
                                                bottom: PaddingSizes.Eight,
                                            }}
                                        >
                                            <SubHeadline subheadlineType="SubHeadline2">{person.name}</SubHeadline>
                                        </Padding>
                                        <Text bodyType="Body2">{person.title}</Text>
                                        <Padding
                                            size={{
                                                top: PaddingSizes.Sixteen,
                                            }}
                                            mobileSize={{
                                                top: PaddingSizes.Sixteen,
                                            }}
                                        >
                                            <Text bodyType="Body3">{person.bio}</Text>
                                        </Padding>
                                        <Padding
                                            size={{
                                                top: PaddingSizes.TwentyFour,
                                                bottom: PaddingSizes.SixtyFour,
                                            }}
                                            mobileSize={{
                                                bottom: PaddingSizes.TwentyFour,
                                            }}
                                        >
                                            {person.socialLinks[0] && (
                                                <TextLink href={person.socialLinks[0].link} withArrow>
                                                    Connect on Linkedin
                                                </TextLink>
                                            )}
                                        </Padding>
                                    </Padding>
                                </Cell>
                            );
                        })}
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
                                <Headline headlineType="Headline5">Want to join the team?</Headline>
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
                                    Would you like to help us revolutionize trading by enabling everyone to profit from algorithmic trading? We are a
                                    small but very diverse team and we would love to hear from you!
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
                                <Button onClick={() => (window.location.href = '/jobs')}>Check our openings!</Button>
                            </Padding>
                        </Cell>
                    </Row>
                </MainContainer>
            </CyanLightestBackground>
        </Layout.Page>
    );
};

export default Team;
