import React from 'react';
import { Layout, AsSeenIn } from '@containers';
import styled from 'styled-components';

import { HeaderIcon } from 'components/headericon';
import { Subscribe } from '@containers';
import { Header, KnowMore, LogoList, WordAnimation, Highlight, Cursor, Image, TextBlock, Button } from '@components';
import { Screens, Illustrations, Logos, Videos, Icons } from '@assets';
import { EventType, SignupOrigins } from '@trality/web-tracking';
import { ConstUrl } from '@constants';

const HeaderWords = ['Create', 'Code', 'Build', 'Backtest', 'Trade with'];

export default () => {
    return (
        <Layout.Page title="home">
            <Layout.Section fullHeight noPadding id="home-description">
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn>
                            <Layout.CenterVertical>
                                <div>
                                    <h1>
                                        <Highlight>
                                            <WordAnimation words={HeaderWords} />
                                        </Highlight>
                                        <Cursor />
                                        <br />
                                        trading bots
                                        <br />
                                        like a professional
                                    </h1>
                                    <TextBlock>
                                        Trality is a platform for anybody who wants to profit from algorithmic crypto trading without giving up the
                                        day job. At least not right away 😉 ️
                                    </TextBlock>
                                    <Button
                                        to={ConstUrl.Signup}
                                        event={{
                                            type: EventType.SignupInitiated,
                                            attributes: { signupOrigin: SignupOrigins.Footer },
                                        }}
                                    >
                                        Try it for free!
                                    </Button>
                                    <div>
                                        <Layout.CenterLeft marginTop={15}>
                                            <Image image={Icons.ActionCall} marginLeft={75} />
                                        </Layout.CenterLeft>
                                    </div>
                                </div>
                            </Layout.CenterVertical>
                        </Layout.OneColumn>
                        <Layout.OneColumn>
                            <Layout.CenterAllDirections>
                                <Image image={Screens.V2PhoneRotDb} alt="Trality Phone Screenshot" scale={0.9} />
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="as-seen-in" themeColor="lightGray" marginTop={20} minimumPadding>
                <Layout.Center>
                    <AsSeenIn />
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="for-everybody">
                <Layout.Center>
                    <Layout.ThreeColumn.Container>
                        <Layout.ThreeColumn.Header>
                            <Layout.CenterAllDirections>
                                <h2>Trality is for you if you are...</h2>
                            </Layout.CenterAllDirections>
                        </Layout.ThreeColumn.Header>
                        <Layout.ThreeColumn.Column area="a">
                            <HeaderIcon name="a Python guru" source={Illustrations.BotThreeDotComponent} scale={2} />
                            <p>
                                ...wanting to make the most of your quantitative skills and code sophisticated trading algorithms in order to boost
                                returns.
                            </p>
                        </Layout.ThreeColumn.Column>
                        <Layout.ThreeColumn.Column area="b">
                            <HeaderIcon name="a casual trader" source={Illustrations.BotOneDotComponent} scale={2} />
                            <p>
                                ...looking for an entry into automated trading, hoping to increase returns while spending less time on manual trades.
                            </p>
                        </Layout.ThreeColumn.Column>
                        <Layout.ThreeColumn.Column area="c">
                            <HeaderIcon name="anyone in between" source={Illustrations.BotTwoDotComponent} scale={2} />
                            <p>...eager to try out something new, improve existing skills or simply test out a trading idea in your head.</p>
                        </Layout.ThreeColumn.Column>
                    </Layout.ThreeColumn.Container>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="weve-got-you-covered">
                <Layout.Center>
                    <Layout.OneColumn>
                        <Layout.CenterHorizontal>
                            <h2>Ways to create your trading bot:</h2>
                        </Layout.CenterHorizontal>
                        <Layout.TwoColumn border>
                            <Layout.OneColumn collapseMobile>
                                <Layout.CenterHorizontal>
                                    <Layout.Features.TypeA header="Create using code" icon={Illustrations.CreateComponent}>
                                        <div>
                                            Make best use of your Python skills and code sophisticated bots. Perfect them with backtesting and
                                            practice trading. When you’re satisfied, deploy on our cloud and hit the market with live-trading!
                                        </div>
                                        <KnowMore to="/creator/code-editor">Read more</KnowMore>
                                    </Layout.Features.TypeA>
                                </Layout.CenterHorizontal>
                            </Layout.OneColumn>
                            <Layout.OneColumn collapseMobile>
                                <Layout.CenterHorizontal>
                                    <Layout.Features.TypeA header="Create using rules" icon={Illustrations.LeisureComponent}>
                                        <div>
                                            Build bots without a single line of code. Adjust and tweak them with the help of backtesting and practice
                                            trading. Deploy your bot in the cloud and watch your rules work their magic with 24/7 live-trading!
                                        </div>
                                        <KnowMore to="/creator/rule-builder">Read more</KnowMore>
                                    </Layout.Features.TypeA>
                                </Layout.CenterHorizontal>
                            </Layout.OneColumn>
                        </Layout.TwoColumn>
                    </Layout.OneColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section themeColor={'background'} fullHeight id="creator-tools">
                <Layout.Center>
                    <Header title="Fall in love with our Creator tools." center expandHeight>
                        <Layout.Slider
                            items={[
                                {
                                    name: 'Powerful Python API to code algorithms',
                                    source: Videos.CodeV1,
                                    icon: Illustrations.Create,
                                    timeout: 11000,
                                },
                                {
                                    name: 'Flexible Rule Builder to build logic',
                                    source: Videos.RuleV1,
                                    icon: Illustrations.Leisure,
                                    timeout: 10000,
                                },
                                {
                                    name: `Fast Backtester to optimize bots`,
                                    source: Videos.BacktestV1,
                                    icon: Illustrations.Infrastructure,
                                    timeout: 13000,
                                },
                            ]}
                        ></Layout.Slider>
                    </Header>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="safety">
                <Layout.Center>
                    <Layout.ThreeColumn.Container>
                        <Layout.ThreeColumn.Header>
                            <Layout.CenterAllDirections>
                                <h2>Your funds and algorithms are safe.</h2>
                            </Layout.CenterAllDirections>
                        </Layout.ThreeColumn.Header>
                        <Layout.ThreeColumn.Column area="a">
                            <HeaderIcon name="Secure" source={Illustrations.SecurityComponent} />
                            <p>Your funds lie safely on your exchange. Trality will never touch them directly and only use official exchange APIs.</p>
                        </Layout.ThreeColumn.Column>
                        <Layout.ThreeColumn.Column area="b">
                            <HeaderIcon name="Cloud-based" source={Illustrations.InfrastructureComponent} />
                            <p>
                                Your algorithms run reliably 24/7 and never miss a trade. Trality eliminates the need to setup your own trading
                                servers!
                            </p>
                        </Layout.ThreeColumn.Column>
                        <Layout.ThreeColumn.Column area="c">
                            <HeaderIcon name="Encrypted" source={Illustrations.EncryptedComponent} />
                            <p>
                                Your trading strategies are end-to-end encrypted. We can't see your strategies as they are in-browser encrypted
                                (coming soon!).
                            </p>
                        </Layout.ThreeColumn.Column>
                    </Layout.ThreeColumn.Container>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="trade-now" minimumPadding>
                <Layout.Banner backgroundColor={'backgroundLight'} color={'onLight'}>
                    <Layout.Center direction="column">
                        <h2>Start trading now!</h2>
                        <LogoList
                            logos={[
                                {
                                    title: 'Binance',
                                    light: Logos.Binance,
                                },
                                {
                                    title: 'Bitpanda',
                                    light: Logos.Bitpanda,
                                },
                                {
                                    title: 'Coinbase Pro',
                                    light: Logos.Coinbase,
                                },
                                {
                                    title: 'Kraken',
                                    light: Logos.Kraken,
                                },
                            ]}
                        />
                        <TextBlock>
                            <Layout.CenterLeft>Trade on a continuously growing number of exchanges.</Layout.CenterLeft>
                        </TextBlock>
                        <Layout.CenterLeft>
                            <Button
                                to={ConstUrl.Signup}
                                event={{
                                    type: EventType.SignupInitiated,
                                    attributes: { signupOrigin: SignupOrigins.Footer },
                                }}
                            >
                                Try it for free!
                            </Button>
                        </Layout.CenterLeft>
                    </Layout.Center>
                </Layout.Banner>
            </Layout.Section>
            <Layout.Section id="features">
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn>
                            <Layout.CenterVertical>
                                <Header title="Coming soon: Connecting traders.">
                                    <TextBlock>
                                        Once you've built a profitable bot, others will want to copy its moves - and they'll happily pay for the
                                        privilege! We're building a marketplace where you'll be able to publish your best bots and get paid rent by
                                        anyone wanting to piggyback. Your bot's algorithmic secret sauce, of course, will be for your eyes only!
                                    </TextBlock>
                                    <KnowMore to="/marketplace">Read more</KnowMore>
                                </Header>
                            </Layout.CenterVertical>
                        </Layout.OneColumn>
                        <Layout.OneColumn>
                            <Layout.CenterAllDirections>
                                <Image image={Screens.V2PhoneFrontalA} alt="Trality Phone Screenshot" scale={0.8} />
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="mailinglist" noBgChange minimumPadding>
                <Layout.Banner backgroundColor={'bluePrimary'} color={'lightPrimary'}>
                    <Layout.Center direction="column">
                        <Header title="Stay connected!">
                            <h5>Waiting for cool Trality updates? Join our monthly mailing list and stay up to date 💙</h5>
                        </Header>
                        <Subscribe />
                    </Layout.Center>
                </Layout.Banner>
            </Layout.Section>
        </Layout.Page>
    );
};
