import { Layout } from '@containers';
import { Header, Button } from '@components';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import * as DummyPerson from '../assets/images/dummy-person.jpg';
import * as Chris from '../assets/images/people/chris.jpg';
import * as Alex from '../assets/images/people/alex.jpg';
import * as Moritz from '../assets/images/people/moritz.jpg';
import * as Linkedin from '../assets/images/logos/linkedin-square.svg';
import * as TralityTeam from '../assets/images/pngs/trality_team.png';

import { MetaTags, Page } from '../util/metaTags';

type PersonSocialLinks = {
    type: 'linkedin';
    link: string;
};

const CenterContent = styled.div`
    align-self: center;
    width: 50%;
    padding-right: 50px;
    @media (max-width: 768px) {
        width: 100%;
        padding-right: 0px;
        padding-bottom: 25px;
    }
    > h3 {
        font-weight: bold;
        text-align: left;
    }
`;

const TeamImage = styled.img`
    width: 100%;
`;

type Person = {
    name: string;
    title: string;
    photo: string | null;
    socialLinks: PersonSocialLinks[];
};

const pageData: Person[] = [
    {
        name: 'Moritz Putzhammer',
        title: 'Co-Founder & CEO',
        photo: Moritz,
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
        photo: Chris,
        socialLinks: [
            {
                type: 'linkedin',
                link: 'https://www.linkedin.com/in/christopher-helf',
            },
        ],
    },
    {
        name: 'Alexander Kahl',
        title: 'VP of Product',
        photo: Alex,
        socialLinks: [
            {
                type: 'linkedin',
                link: 'https://www.linkedin.com/in/alexander-kahl',
            },
        ],
    },
    {
        name: 'Carsten Schipke',
        title: 'VP of Architecture',
        photo: null,
        socialLinks: [
            {
                type: 'linkedin',
                link: 'https://www.linkedin.com/in/carstenschipke',
            },
        ],
    },
    {
        name: 'Ovidiu Popescu',
        title: 'Head of Growth Marketing',
        photo: null,
        socialLinks: [
            /* Don't have one. */
        ],
    },
    {
        name: 'Max Schneider',
        title: 'Sr. AI Engineer',
        photo: null,
        socialLinks: [
            {
                type: 'linkedin',
                link: 'https://www.linkedin.com/in/maximilianschneider',
            },
        ],
    },
    {
        name: 'Constantin Dißelkamp',
        title: 'Jr. AI Engineer',
        photo: null,
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
        photo: null,
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
        photo: null,
        socialLinks: [
            {
                type: 'linkedin',
                link: 'https://www.linkedin.com/in/jakub-strzadala-b9730526',
            },
        ],
    },
];

const People = React.memo(() => {
    var items: ReactNode[] = [];
    pageData.forEach((item, i) => {
        items.push(
            <GridItem key={`griditem-${i}-${item.name}`}>
                <PersonImg src={item.photo ?? DummyPerson} />
                <Name>{item.name}</Name>
                <Title>{item.title}</Title>
                <SocialLinks>
                    {item.socialLinks.map((socialLink, i) => {
                        return (
                            <SocialLink key={socialLink.link} href={socialLink.link}>
                                <SocialImg src={Linkedin} alt={item.name} />
                            </SocialLink>
                        );
                    })}
                </SocialLinks>
            </GridItem>,
        );
    });
    return <>{items}</>;
});

const Team = () => {
    return (
        <Layout.Page title="team">
            <MetaTags page={Page.About} />
            <Layout.Section id="headline" noPadding>
                <Layout.Center>
                    <ExtendedHeader title="Bot trading, for everyone.">
                        <p>
                            We see a future in which everything is automated by bots. When it comes to automated investing, there will be only one
                            place to go: Trality. Founded in 2018 by Moritz Putzhammer and Christopher Helf, we strive to be the go-to-place for
                            anyone wanting to experience the power and flexibility of trading bots.
                        </p>
                    </ExtendedHeader>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="tools-traders">
                <Layout.Center>
                    <CenterContent>
                        <h3>Advanced tools for advanced traders</h3>
                        <p>
                            We provide powerful and flexible tools for anyone who is interested to create, test and deploy their bots in one
                            cloud-based ecosystem.
                        </p>
                        <h3>Our vision</h3>
                        <p>
                            We will bring the power and potential of algorithmic trading to everyone who needs it. Regardless of whether or not they
                            are advanced traders—every, single person will be able to have bots automatically manage their investments across asset
                            classes and platforms. All in one place.
                        </p>
                    </CenterContent>
                    <div>
                        <TeamImage src={TralityTeam} />
                    </div>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="our-story" noPadding>
                <Layout.Center>
                    <ExtendedHeader title="Our Story">
                        <p>
                            Once upon a time, two guys met at a university. Together they sat as they pondered the financial world and asked one
                            another why trading bots are only accessible to big banks and institutions. They knew that 75% of private traders like you
                            and me were losing money when they tried to compete against machines that are better traders in every way. This discussion
                            turned into an idea, and that idea evolved into Trality's mission. Step by step, we will become the platform for everyone
                            to create and invest through automated trading bots - this is what drives us. We welcome traders of all experience levels
                            and attract the best bot creators by offering the most advanced tools for bot creation. Conversely, we will enable
                            followers to easily invest in bots created on the platform to the benefit of all parties.
                        </p>
                    </ExtendedHeader>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="our-experts" noPadding>
                <Layout.Center>
                    <ExtendedHeader title="Our Experts">
                        <p>
                            As part of our mission, we strictly only hire people from a range of backgrounds that have demonstrated prowess in the
                            field of financial services. Every single one of our team members is as enthusiastic as the next about revolutionising the
                            world of private investing.
                        </p>
                    </ExtendedHeader>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="people" noPadding>
                <Layout.Center>
                    <ExtendedHeader title="">
                        <Layout.Grid.Container>
                            <People />
                        </Layout.Grid.Container>
                    </ExtendedHeader>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="start-now" fullHeight={false} noPadding themeColor="main">
                <Layout.CenterLeft>
                    <CTA>
                        <h2>Want to be part of the team?</h2>
                        <Button dark to={`/jobs#positions`}>
                            Let us know and join us
                        </Button>
                    </CTA>
                </Layout.CenterLeft>
            </Layout.Section>
        </Layout.Page>
    );
};

export default Team;

const ExtendedHeader = styled(Header)`
    & > h3,
    h2 {
        text-align: left;
    }
    & > h5 {
        margin-bottom: 80px;
    }
`;

const SocialLinks = styled.div`
    margin-top: 20px;
`;

const SocialLink = styled.a`
    border: 2px solid ${(props) => props.theme.linkBlue};
    border-radius: 4px;
    display: inline-block;
    &:hover {
        > img {
            filter: brightness(0) invert(1);
        }
        background-color: ${(props) => props.theme.linkBlue};
        @media all and (-ms-high-contrast: none) {
            // IE 11 hack, since it's not supporting filter.
            background-color: white;
        }
    }
    &:visited {
        background-color: ${(props) => props.theme.linkBlue};
    }
`;

const SocialImg = styled.img`
    display: block;
    margin: 5px;
    max-width: 20px;
    max-height: 20px;
`;

const PersonImg = styled.img`
    height: 175px;
    width: 175px;
    border-radius: 50%;
    box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.2);
    border: 15px solid ${(props) => props.theme.lightBlue};
    margin-bottom: 30px;
`;

const Name = styled.div`
    font-size: 25px;
    color: ${(props) => props.theme.grayPrimary};
`;

const Title = styled.div`
    font-size: 15px;
    color: ${(props) => props.theme.onLight};
`;

const GridItem = styled.div`
    text-align: center;
    flex-grow: 0;
    flex-shrink: 0;
    margin-bottom: 50px;
    flex-basis: 100%;
    @media only screen and (min-width: 500px) {
        flex-basis: 50%;
        margin-bottom: 80px;
    }
    @media only screen and (min-width: 750px) {
        flex-basis: 33%;
    }
`;

const CTA = styled.div`
    color: #fff;
    text-align: center;
    width: 100%;
    > h2 {
        max-width: 90%;
        margin: 60px auto;
        color: #fff;
    }
    > h3 {
        color: #fff;
        margin-bottom: 25px;
    }
    > button {
        margin-bottom: 60px;
    }
`;
