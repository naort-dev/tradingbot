import * as React from 'react';
import { Layout } from '@containers';
import styled from 'styled-components';
import { MetaTags, Page } from '../../util/metaTags';
import { BlogContainer, Padding, Text, Row, TextLink, Headline, PaddingSizes, SubHeadline, device } from '@trality/web-ui-components';

const SecurityContainer = styled.div`
    max-width: 680px;
    width: 100%;
    margin: 0 auto;
    @media ${device.tablet} {
        padding-left: 0px;
        padding-right: 0px;
    }
`;

const Guild = () => {
    return (
        <Layout.Page title="guild">
            <MetaTags page={Page.Guild} />
            <Layout.Section fullHeight noPadding id="policy">
                <SecurityContainer>
                    <Padding size={{ top: PaddingSizes.SixtyFour }} mobileSize={{ top: PaddingSizes.OneHundred }}>
                        <Headline headlineType="Headline2">The Trality Guild – Innovate. Collaborate. Generate.</Headline>
                    </Padding>
                    <Padding size={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}>
                        <Padding size={{ bottom: PaddingSizes.Sixteen }} mobileSize={{ bottom: PaddingSizes.Sixteen }}>
                            <Text bodyType="Body2">
                                At the beginning of 2022, Trality realized an important milestone in its pursuit of becoming the best platform for
                                algorithmic investing: the Trality Guild. It’s an invitation-only program designed exclusively for our very best Bot
                                Creators, one that confers a number of important advantages.
                            </Text>
                        </Padding>
                        <Text bodyType="Body2">
                            To put it simply: <b>You</b> love our platform and its innovative tools and <b>we</b> want to collaborate with you in a
                            more direct, more meaningful, and more profitable way.
                        </Text>
                    </Padding>

                    <Headline headlineType="Headline3">Why a Guild?</Headline>
                    <Padding size={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}>
                        <Padding size={{ bottom: PaddingSizes.Sixteen }} mobileSize={{ bottom: PaddingSizes.Sixteen }}>
                            <Text bodyType="Body2">
                                Clans, kinships, crews—despite their many names, guilds have been around for millenia and for good reason. Formed to
                                protect mutual interests and maintain standards, a guild is basically an association of people within a particular
                                industry or with similar interests.
                            </Text>
                        </Padding>
                        <Text bodyType="Body2">The power and potential of teamwork. Strength in numbers.</Text>
                    </Padding>

                    <Headline headlineType="Headline3">Join Trality’s Inner Circle</Headline>
                    <Padding size={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}>
                        <Padding size={{ bottom: PaddingSizes.Sixteen }} mobileSize={{ bottom: PaddingSizes.Sixteen }}>
                            <Text bodyType="Body2">
                                As a Trality Guild member, you’re not simply an anonymous face in a crowd, but part of Trality’s team. It’s a
                                relationship defined by a deep integration between you, the bot creator, and the Trality team itself. Our collective
                                goal will be to foster the bot-creating community by providing the best platform with the most innovative tools, ones
                                that will enable everyone to trade smarter, faster, and more profitably.
                            </Text>
                        </Padding>
                    </Padding>

                    <Headline headlineType="Headline3">Concentrate on What You Do best!</Headline>
                    <Padding size={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}>
                        <Padding size={{ bottom: PaddingSizes.Sixteen }} mobileSize={{ bottom: PaddingSizes.Sixteen }}>
                            <Text bodyType="Body2">
                                As a Trality Guild member, we want to give you the resources needed for you to create the best bots and a key part of
                                this involves financial compensation. As a Guild member, you will receive a fixed monthly income for as long as the
                                relationship remains a mutually beneficial one. Concentrate on developing market-beating bots that perform and we’ll
                                support you throughout the process. In the long-run, these bots will manage to sustain you directly through monthly
                                rental revenues generated on our upcoming Marketplace.
                            </Text>
                        </Padding>
                    </Padding>

                    <Headline headlineType="Headline3">How to Become a Guild Member?</Headline>
                    <Padding size={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}>
                        <Padding size={{ bottom: PaddingSizes.Sixteen }} mobileSize={{ bottom: PaddingSizes.Sixteen }}>
                            <Text bodyType="Body2">
                                There are no secret initiations or rituals, no unique oaths, handshakes, or coded signs. There’s only one real way to
                                receive an invite: Be the best. The Trality Guild will only be open to a very select number of participants. Our first
                                Guild members will be drawn from the Trading Competition, but there might be additional pathways to membership in the
                                future. The Trality Guild offers a great deal of support and advantages, but we’re also expecting a lot, too. In
                                addition to the performance of your bots, all Guild members should have profiles and interests that align with
                                Trality’s core values, particularly as they relate to our upcoming Marketplace.
                            </Text>
                        </Padding>
                        <Text bodyType="Body2">Reliability and a commitment to excellence are paramount.</Text>
                    </Padding>
                </SecurityContainer>
            </Layout.Section>
        </Layout.Page>
    );
};

export default Guild;
