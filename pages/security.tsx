import * as React from 'react';
import styled from 'styled-components';
import { Layout } from '@containers';
import { Header } from '@components';

import { MetaTags, Page } from '../util/metaTags';

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

const SecurityPage = styled.div`
    & > h2 {
        margin-top: 60px;
    }
    & > h3 {
        font-weight: bold;
    }
`;

const Privacy = () => {
    return (
        <Layout.Page title="privacy">
            <MetaTags page={Page.Security} />
            <Layout.Section fullHeight noPadding id="policy">
                <Layout.Center>
                    <SecurityPage>
                        <h1>Security matters.</h1>
                        <p>That’s why we take every step possible to ensure the security of all our systems and users.</p>
                        <p>
                            Users funds are not held on your account and will always lie safely on the chosen exchange. Trality is unable to touch
                            your funds directly without your explicit command and will only ever use official exchange APIs to execute orders on your
                            behalf. On top of that, everything on Trality runs on a cloud-based system so you can be sure your bots are always up -
                            we’ve also taken extra measures to ensure that our users are well-protected from all potential web attacks.
                        </p>
                        <p>
                            Most importantly, we are taking steps to ensure that all your information and algorithms are end-to-end encrypted
                            throughout the whole bot-creation and deployment process. This means that no one—not even Trality itself—can see your
                            strategies.
                        </p>
                        <h2>Sandboxed user strategies</h2>
                        <p>
                            Users’ strategies and algorithms are completely sandboxed and their creation is browser-based. What this means is that no
                            one apart from yourself can see which ideas you are coming up with while you are developing and testing. In the near
                            future full end-to-end encryption will render your IP completely your's and your's alone. This will be an essential part
                            of us maximizing privacy and information security on the platform. It’s also a vital part of our mission to ultimately
                            attract the smartest and highest-performing bot creators together on this platform .
                        </p>
                        <h2>Cloud-based ecosystem</h2>
                        <p>
                            Thanks to the fact that everything is cloud-based, you can rest easy knowing that your bot will be running 24/7 and never
                            miss a trade - no need to set up or maintain your own trading servers or organise security measures for those servers - we
                            do all the legwork for you.
                        </p>
                        <h2>Advanced firewall protection</h2>
                        <p>
                            Thanks to our web service provider, our users can rest easy knowing that we have a firewall that protects all our systems
                            against web exploits that may affect uptime, security, or consumes excessive resources such as in a DDOS attack. We have
                            been lucky enough to put these systems to the test and we can safely say that they are running well but we constantly
                            execute battle tests to augment security.
                        </p>
                        <h2>What can you do to augment your security online?</h2>
                        <p>
                            While we take every step to protect our users and systems, there are a few things that you as a user can do to help secure
                            yourself even more. Let’s go through some of the basics.
                        </p>
                        <h3>Activate multi-factor authentication</h3>
                        <p>
                            Multi-factor authentication (MFA) is the best and quickest way to add another layer of security to your account by
                            validating the user’s identity through two or more steps. For services like Trality, the first step is to input your
                            password. The second step can be an additional one-time code which gets sent to your phone, email or another device. We
                            highly recommend enabling MFA on not only your Trality account but on any services online. Some of the most popular
                            solutions are Google Authenticator or Authy.
                        </p>
                        <h3>Utilise a strong password.</h3>
                        <p>
                            You might think that this goes without saying but when you realize that many people{' '}
                            <a href="https://nordpass.com/most-common-passwords-list/" target="_blank">
                                are still using ‘123456’
                            </a>{' '}
                            and that those passwords are breached all the time - you begin to understand the value of a long, strong password. Use
                            caps lock, use numbers, symbols and anything to make your password even more uncrackable.
                        </p>
                        <h3>Be wary (only deal with apps and people from trusted sources)</h3>
                        <p>
                            In the tech industry, we know that when tech is compromised, the fault usually lies with the user. Even with things like
                            multi-factor authentication, you must still be cautious online and develop a sensible intuition when it comes to products
                            and services. You can not rely on technology to protect you from all threats. This applies everywhere online but more than
                            ever when it comes to cryptocurrency trading. Small steps like avoiding public wifi or simply doing nothing online that
                            you wouldn’t do in the real world can make all the difference. This guidance extends to our social media and
                            communications channels too. If you’re engaging in our Telegram groups, for example, don’t talk to strangers unless
                            they're admins of the group and YOU initiate contact.
                        </p>
                        <h3>Don’t just share/copy code</h3>
                        <p>
                            Please don’t simply copy and paste code snippets which someone else has given to you and don’t trust other people blindly.
                            You never know when someone might be trying to trick you into using a harmful algorithm.
                        </p>
                        <h3>Keep your software up to date</h3>
                        <p>
                            This is a tip that most people don’t think about. - even those who are more familiar with technology security. When your
                            applications keep popping up with those update reminders, you should probably pay attention to them. Bad actors and
                            malware usually take advantage of weak points in old versions of your apps. Companies don’t roll out updates for no reason
                            and often they are filing those vulnerabilities.
                        </p>
                        <h3>Be sure that you log in at the right address</h3>
                        <p>
                            Before logging into Trality (or any account), it’s good practice to double-check the URL. Always take a look at the
                            address bar and ensure the small lock icon is present. This icon means that the website you are on is the genuine,
                            SSL-encrypted website. To make sure you always come back to that page - simply bookmark it for ease of access!
                        </p>
                        <h3>Be wary of suspicious emails and never share your password with anyone</h3>
                        <p>
                            Do not share your password with anyone at any time. No one at Trality will never ask for it. This is also the case for any
                            legitimate business. If you get an email or a message somewhere on social media which asks for your current password, you
                            should be very careful as it is almost certainly a phishing attempt.
                        </p>
                        <h3>Don’t leave your precious devices unattended!</h3>
                        <p>
                            Always be cautious when using Trality from a public network. Be extra cautious when working with your devices in open,
                            public places.
                        </p>
                    </SecurityPage>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};

export default Privacy;
