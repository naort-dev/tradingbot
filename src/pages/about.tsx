import { Layout } from '@containers';
import { Header, Button } from '@components';
import React, { ReactNode } from 'react';

import { MetaTags, Page } from '../../util/metaTags';
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
        bio: 'Moritz is passionate about crypto, loves all things digital and is driven by data. Holds a Ph.D. in Business and displays broad professional experience in strategy, finance, project mgmt and research. Fluent in German, English, Spanish and Python.',
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
        bio: 'Christopher Helf is one of the co-founders of Trality and is the head of all technical developments that are undertaken to make Trality an awesome product. He has a great passion for computer science, and has previously worked on large-scale machine learning projects.',
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
        bio: 'Andrea has worked as a backend engineer for over five years, focusing on API design, microservices, load testing and scalability. She most recently worked at Runtastic before joining the Traliteam after wanting to expand into something new.',
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
        bio: 'Ovidiu is a growth marketing professional with over 8 years of hands-on expertise in customer acquisition/retention. He spent 5 years as Head of Marketing for the fintech company BDSwiss where he successfully developed and executed the growth strategy, acquiring 500,000+ users.',
        photo: Assets.TeamPhotos.Ovi,
        socialLinks: [
            /* Don't have one. */
        ],
    },
    {
        name: 'Constantin Dißelkamp',
        title: 'ML Engineer',
        bio: 'Constantine earned his Master of Science in Theoretical Physics at RWTH Aachen. Since then, he has worked on many different projects, namely building Machine Learning strategies for cryptocurrency derivative platforms.',
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
        bio: 'Tamas spent many years working on high-traffic ecommerce websites. Aside from that, he was also a blockchain developer at Lisk.io which is one of the most popular networks in the industry. He is a true believer in DeFi and blockchain technology.',

        photo: Assets.TeamPhotos.Tamas,
        socialLinks: [
            {
                type: 'linkedin',
                link: 'https://www.linkedin.com/in/hodobay/',
            },
        ],
    },
    {
        name: 'Declan Igoe',
        title: 'Communications Lead',
        bio: 'Declan is Trality’s communications expert and resident talkaholic. When it comes to words, Declan is in his comfort zone and has been lucky enough to work with brands like Domino’s Pizza and Guinness. He worked as Social Media Manager at the neobroker Bitpanda before joining Trality.',

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
        bio: 'Jakub is the face behind everything Trality users see. Anything from the webapp to the homepage to some internal systems go under his keen eye. He’s passionate about computer science and user security. Outside of work, he loves bouldering and the great outdoors.',

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
        bio: 'Davide is a Data Scientist who is responsible for the development of Trality’s Machine Learning platform. His passion for mathematics and probability and his knack for the art of software make him a valuable member of the research and development team.',

        photo: Assets.TeamPhotos.Davide,
        socialLinks: [
            {
                type: 'linkedin',
                link: 'https://www.linkedin.com/in/davide-scassola/',
            },
        ],
    },
    {
        name: 'Dominik De Zordo',
        title: 'Head of DevOps',
        bio: 'Dominik is a multi-faceted developer with a lot of experience leading and scaling technical teams. Before joining Trality as its DevOps lead, he worked at Bitpanda where his team grew from a handful to more than 100 people working across Europe.',
        photo: Assets.TeamPhotos.Dominik,
        socialLinks: [
            {
                type: 'linkedin',
                link: 'https://www.linkedin.com/in/dominik-de-zordo/',
            },
        ],
    },

    {
        name: 'Brian Haman',
        title: 'Content & Copy Specialist',
        bio: 'Some say that he’s terrified of pears and that there’s a village named after him in Tajikistan. All we know is that he’s a talented writer and editor whose words, which have appeared in the New York Times, Guardian, and elsewhere, will be driving Trality’s content and copy.',

        photo: Assets.TeamPhotos.Brian,
        socialLinks: [
            {
                type: 'linkedin',
                link: 'https://www.linkedin.com/in/brian-haman-661222176/',
            },
        ],
    },

    {
        name: 'Luca Poppi',
        title: 'Chief of Staff',
        bio: "Luca is Trality's Chief of Staff. He is responsible for amplifying CEO communication and driving strategic initiatives across the board to improve our processes and operations. He has held a range of operational and financial positions at VC funds and startups before joining Trality.",

        photo: Assets.TeamPhotos.Luca,
        socialLinks: [
            {
                type: 'linkedin',
                link: 'https://www.linkedin.com/in/luca-poppi/',
            },
        ],
    },

    {
        name: 'Jim Morrison',
        title: 'Senior Mobile Developer',
        bio: "Jim has been a software engineer for twenty years, mostly focusing on front end applications. He has worked in London, Zurich, Paris and Barcelona among other places. He is fluent in English and Catalan, and can understand a few other languages.",

        photo: Assets.TeamPhotos.Jim,
        socialLinks: [
            {
                type: 'linkedin',
                link: 'https://www.linkedin.com/in/jimmorrisoncoventry/',
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
                    mobileSize={{ top: PaddingSizes.OneHundred, bottom: PaddingSizes.SixtyFour, left: PaddingSizes.Zero, right: PaddingSizes.Zero }}
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
                                <Headline headlineType="Headline2">Automated investing, for everyone!</Headline>
                            </Padding>
                            <Text bodyType="Body2">
                                At Trality, we see a future in which everything is automated by bots and when it comes to automated investing, there
                                will be only one place to go: Trality. Founded in 2019 by Moritz Putzhammer and Christopher Helf in response to the
                                volatile and mostly unpredictable crypto market—Trality exists to bring automated, algorithmic trading to all who need
                                it. While most investors are losing out due to emotional trading or poor timing, the upper echelons of the financial
                                world are raking in the profit thanks to advanced, automated systems. We are changing that by giving everyone access
                                to state-of-the-art tools they need to either automate their own strategies or follow those on the platform who are
                                already doing so with multiple fair and flexible packages for different levels of users.
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
                                <Headline headlineType="Headline2">Our story</Headline>
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
                                <Headline headlineType="Headline2">Our experts</Headline>
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
                                <Headline headlineType="Headline2">Want to join the team?</Headline>
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
