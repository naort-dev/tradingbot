import { Layout } from '@containers';
import { Header, Button } from '@components';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import * as DummyPerson from '../assets/images/dummy-person.jpg';
import * as Chris from '../assets/images/people/chris.jpg';
import * as Alex from '../assets/images/people/alex.jpg';
import * as Moritz from '../assets/images/people/moritz.jpg';
import * as Linkedin from '../assets/images/logos/linkedin-square.svg';

import {MetaTags, Page} from '../util/metaTags';

type PersonSocialLinks = {
    type: 'linkedin';
    link: string;
}

type Person = {
    name: string;
    title: string;
    photo: string | null;
    socialLinks: PersonSocialLinks[];
}

const pageData: Person[] = [
    {
        name: 'Moritz Putzhammer',
        title: "Co-Founder & CEO",
        photo: Moritz,
        socialLinks: [{
            type: 'linkedin',
            link: 'https://www.linkedin.com/in/putzhammer'
        }]
    },
    {
        name: 'Christopher Helf',
        title: "Co-Founder & CTO",
        photo: Chris,
        socialLinks: [{
            type: 'linkedin',
            link: 'https://www.linkedin.com/in/christopher-helf'
        }]
    },
    {
        name: 'Alexander Kahl',
        title: "VP of Product",
        photo: Alex,
        socialLinks: [{
            type: 'linkedin',
            link: 'https://www.linkedin.com/in/alexander-kahl'
        }]
    },
    {
        name: 'Carsten Schipke',
        title: "VP of Architecture",
        photo: null,
        socialLinks: [{
            type: 'linkedin',
            link: 'https://www.linkedin.com/in/carstenschipke'
        }]
    },
    {
        name: 'Ovidiu Popescu',
        title: "Head of Growth Marketing",
        photo: null,
        socialLinks: [/* Don't have one. */]
    },
    {
        name: 'Max Schneider',
        title: "Sr. AI Engineer",
        photo: null,
        socialLinks: [{
            type: 'linkedin',
            link: 'https://www.linkedin.com/in/maximilianschneider'
        }]
    },
    {
        name: 'Constantin Dißelkamp',
        title: "Jr. AI Engineer",
        photo: null,
        socialLinks: [{
            type: 'linkedin',
            link: 'https://www.linkedin.com/in/constantin-dißelkamp-7105b81a2'
        }]
    },
    {
        name: 'Tamas Hodobay',
        title: "Sr. Backend Engineer",
        photo: null,
        socialLinks: [{
            type: 'linkedin',
            link: 'https://www.linkedin.com/in/hodobay/'
        }]
    },
    {
        name: 'Declan Igoe',
        title: "Copywriter & Content Specialist",
        photo: null,
        socialLinks: [{
            type: 'linkedin',
            link: 'https://www.linkedin.com/in/digoe'
        }]
    },
    {
        name: 'Jakub Strzadala',
        title: "Sr. Frontend Engineer",
        photo: null,
        socialLinks: [{
            type: 'linkedin',
            link: 'https://www.linkedin.com/in/jakub-strzadala-b9730526'
        }]
    }
];

const People = React.memo(() => {
    var items: ReactNode[] = [];
    pageData.forEach((item, i) => {
        items.push(<GridItem key={`griditem-${i}-${item.name}`}>
            <PersonImg src={item.photo ?? DummyPerson} />
            <Name>{item.name}</Name>
            <Title>{item.title}</Title>
            <SocialLinks>{
                item.socialLinks.map((socialLink, i) => {
                    return <SocialLink key={socialLink.link} href={socialLink.link}>
                        <SocialImg src={Linkedin} />
                    </SocialLink>
                })}
            </SocialLinks>
            </GridItem>)
    });
    return <>{items}</>;
});

const Team = () => {
    return <Layout.Page title="team">
        <MetaTags page={Page.About} />
        <Layout.Section id="headline" noPadding>
            <Layout.Center>
                <ExtendedHeader center title="Meet the Trality Team!" subtitle="These people help you create successful bots. Nice to meet you!">
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
};

export default Team;

const ExtendedHeader = styled(Header)`
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
        @media all and (-ms-high-contrast:none) { // IE 11 hack, since it's not supporting filter. 
            background-color: white;
        }
    }
    &:visited {
        background-color: ${(props) => props.theme.linkBlue};;
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