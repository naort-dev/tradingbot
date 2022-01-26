import * as React from 'react';
import styled from 'styled-components';
import { Layout } from '@containers';
import { Header } from '@components';

import { MetaTags, Page } from '../../util/metaTags';
import { BlogContainer, Padding, Text, MainContainer, Row, TextLink, Headline, PaddingSizes, SubHeadline } from '@trality/web-ui-components';

const Container = styled.div`
    margin-bottom: 50px;
    justify-content: left;
    text-align: left;
    ul {
        text-align: left;
    }
    font-size: 15px;
    @media (max-width: 768px) {
        width: 100%;
        padding-right: 25px;
        padding-left: 25px;
        text-align: center;
        font-size: 13px;
    }
    & > span {
        color: #00b8e6 !important;
    }
    > p {
        display: block;
        margin-top: 15px;
    }
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Section = styled.div<{ center?: boolean }>`
    margin-top: 15px;
    text-align: justify;
    width: 100%;
    line-height: 170%;
    ${(props) =>
        props.center &&
        `
        text-align: center;
        margin-bottom: 40px;
    `}
`;

const Privacy = () => {
    return (
        <Layout.Page title="privacy">
            <MetaTags page={Page.Security} />
            <Layout.Section fullHeight noPadding id="policy">
                <BlogContainer>
                    <Padding size={{ top: PaddingSizes.NinetySix }} mobileSize={{ top: PaddingSizes.SeventySix }}>
                        <Headline headlineType="Headline2">
                            Security matters.
                        </Headline>
                    </Padding>
                    <Padding
                        size={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}
                    >
                        <Padding size={{ bottom: PaddingSizes.Sixteen }} mobileSize={{ bottom: PaddingSizes.Sixteen }}>
                            <Text bodyType="Body2">That’s why we take every step possible to ensure the security of all our systems and users.</Text>
                        </Padding>
                        <Text bodyType="Body2">
                            Users funds are not held on your account and will always lie safely on the chosen exchange. Trality is unable to touch
                            your funds directly and will only ever use official exchange APIs to execute orders on your behalf. On top of that,
                            everything on Trality runs on a cloud-based system so you can be sure your bots are always up - we’ve also taken extra
                            measures to ensure that our users are well-protected from all potential web attacks.
                        </Text>
                    </Padding>
                    <Headline headlineType="Headline3">Sandboxed user strategies</Headline>
                    <Padding
                        size={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}
                    >
                        <Text bodyType="Body2">
                            Users’ strategies and algorithms are completely sandboxed and their creation is browser-based. What this means is that no
                            one apart from yourself can see the ideas you are coming up with while you develop and test your bots. In the near future
                            full end-to-end encryption will render your IP completely your's and your's alone. This will be an essential part of us
                            maximizing privacy and information security on the platform. It’s also a vital part of our mission to ultimately attract
                            the smartest and highest-performing bot creators onto this platform.
                        </Text>
                    </Padding>
                    <Headline headlineType="Headline3">Cloud-based ecosystem</Headline>
                    <Padding
                        size={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}
                    >
                        <Text bodyType="Body2">
                            Thanks to the fact that everything is cloud-based, you can rest easy knowing that your bot will be running 24/7 and never
                            miss a trade - no need to set up or maintain your own trading servers or organise security measures for those servers - we
                            do all the legwork for you.
                        </Text>
                    </Padding>
                    <Headline headlineType="Headline3">Advanced firewall protection</Headline>
                    <Padding
                        size={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}
                    >
                        <Text bodyType="Body2">
                            Thanks to our web service provider, our users can rest easy knowing that we have a firewall that protects all our systems
                            against web exploits that may affect uptime, security, or consumes excessive resources such as in a DDOS attack. We have
                            been lucky enough to put these systems to the test and we can safely say that they are running well but we constantly
                            execute battle tests to augment security.
                        </Text>
                    </Padding>
                    <Headline headlineType="Headline3">What can you do to augment your security online?</Headline>
                    <Padding
                        size={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}
                    >
                        <Text bodyType="Body2">
                            While we take every step to protect our users and systems, there are a few things that you as a user can do to help secure
                            yourself even more. Let’s go through some of the basics.
                        </Text>
                    </Padding>
                    <SubHeadline subheadlineType="SubHeadline1">Be wary (never deal with apps and people from un-trusted sources)</SubHeadline>
                    <Padding
                        size={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}
                    >
                        <Text bodyType="Body2">
                            Unfortunately, even with the strongest technical protection possible, users have to play their part as well in order to
                            achieve collective security. You must always remain cautious and develop a sensible intuition when it comes to products
                            and services. This applies everywhere online but more than ever when it comes to cryptocurrency trading. Small steps like
                            avoiding public wifi or simply doing nothing online that you wouldn’t do in the real world can make all the difference.
                            This guidance extends to our social media and communications channels, too. If you’re engaging on our Discord server, for
                            example, don’t talk to strangers unless they're admins of the group and YOU initiate contact. For technical support, only
                            use our official support email: support@trality.com and never talk to any scammers on other platforms such as telegram!
                        </Text>
                    </Padding>
                    <SubHeadline subheadlineType="SubHeadline1">
                        When active in the Trality discussion discord chat, only trust official admins
                    </SubHeadline>
                    <Padding
                        size={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}
                    >
                        <Text bodyType="Body2">
                            Current list of Trality admins in Trality discord channel:
                            <ul>
                                <li>hello.moritz</li>
                                <li>peacer212</li>
                            </ul>
                        </Text>
                    </Padding>
                    <SubHeadline subheadlineType="SubHeadline1">Activate multi-factor authentication</SubHeadline>
                    <Padding
                        size={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}
                    >
                        <Text bodyType="Body2">
                            Multi-factor authentication (MFA) is the best and quickest way to add another layer of security to your account by
                            validating the user’s identity through two or more steps. For services like Trality, the first step is to input your
                            password. The second step can be an additional one-time code which gets sent to your phone, email or another device. We
                            highly recommend enabling MFA on not only your Trality account but on any services online. Some of the most popular
                            solutions are Google Authenticator or Authy.
                        </Text>
                    </Padding>
                    <SubHeadline subheadlineType="SubHeadline1">Utilise a strong password.</SubHeadline>
                    <Padding
                        size={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}
                    >
                        <Text bodyType="Body2">
                            You might think that this goes without saying but when you realize that many people{' '}
                            <TextLink intext href="https://nordpass.com/most-common-passwords-list/" target="_blank">
                                are still using ‘123456’
                            </TextLink>{' '}
                            and that those passwords are breached all the time - you begin to understand the value of a long, strong password. Use
                            caps lock, use numbers, symbols and anything to make your password even more uncrackable.
                        </Text>
                    </Padding>
                    <SubHeadline subheadlineType="SubHeadline1">Don’t just share/copy code</SubHeadline>
                    <Padding
                        size={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}
                    >
                        <Text bodyType="Body2">
                            Please don’t simply copy and paste code snippets which someone else has given to you and don’t trust other people blindly.
                            You never know when someone might be trying to trick you into using a harmful algorithm.
                        </Text>
                    </Padding>
                    <SubHeadline subheadlineType="SubHeadline1">Keep your software up to date</SubHeadline>
                    <Padding
                        size={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}
                    >
                        <Text bodyType="Body2">
                            This is a tip that most people don’t think about. - even those who are more familiar with technology security. When your
                            applications keep popping up with those update reminders, you should probably pay attention to them. Bad actors and
                            malware usually take advantage of weak points in old versions of your apps. Companies don’t roll out updates for no reason
                            and often they are filing those vulnerabilities.
                        </Text>
                    </Padding>
                    <SubHeadline subheadlineType="SubHeadline1">Be sure that you log in at the right address</SubHeadline>
                    <Padding
                        size={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}
                    >
                        <Text bodyType="Body2">
                            Before logging into Trality (or any account), it’s good practice to double-check the URL. Always take a look at the
                            address bar and ensure the small lock icon is present. This icon means that the website you are on is the genuine,
                            SSL-encrypted website. To make sure you always come back to that page - simply bookmark it for ease of access!
                        </Text>
                    </Padding>
                    <SubHeadline subheadlineType="SubHeadline1">Be wary of suspicious emails and never share your password with anyone</SubHeadline>
                    <Padding
                        size={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}
                    >
                        <Text bodyType="Body2">
                            Do not share your password with anyone at any time. No one at Trality will never ask for it. This is also the case for any
                            legitimate business. If you get an email or a message somewhere on social media which asks for your current password, you
                            should be very careful as it is almost certainly a phishing attempt. Neither should you EVER send cryptocurrency to a
                            foreign wallet!
                        </Text>
                    </Padding>
                    <SubHeadline subheadlineType="SubHeadline1">Don’t leave your precious devices unattended!</SubHeadline>
                    <Padding
                        size={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}
                    >
                        <Text bodyType="Body2">
                            Always be cautious when using Trality from a public network. Be extra cautious when working with your devices in open,
                            public places.
                        </Text>
                    </Padding>
                </BlogContainer>
            </Layout.Section>
        </Layout.Page>
    );
};

export default Privacy;
