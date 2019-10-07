import React from 'react';
import { Layout } from '@containers';
import { HeaderCta } from './home/headercta';

import { HeaderIcon } from 'components/headericon';
import { Subscribe } from '@containers';
import { Header, KnowMore, LogoList, WordAnimation, Highlight, Cursor, Image, TextBlock } from '@components';
import { Screens, Illustrations, Logos, Videos } from '@assets';

const HeaderWords = ['algorithmic', 'automated', 'python-based', 'rule-based', 'bot', 'professional', 'awesome'];

export default () => {
    return (
        <Layout.Page title="home">
            <Layout.Section fullHeight noPadding id="home-description">
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn>
                            <Layout.CenterVertical>
                                <div>
                                    <Layout.TwoRows>
                                        <h1>
                                            Start
                                            <br />
                                            <Highlight>
                                                <WordAnimation words={HeaderWords} />
                                            </Highlight>
                                            <Cursor />
                                            <br />
                                            crypto trading.
                                        </h1>
                                        <HeaderCta />
                                    </Layout.TwoRows>
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
            <Layout.Section id="weve-got-you-covered">
                <Layout.Center>
                    <Layout.ThreeColumn.Container>
                        <Layout.ThreeColumn.Header>
                            <Layout.CenterAllDirections>
                                <h2>Ways to create your trading bot.</h2>
                            </Layout.CenterAllDirections>
                        </Layout.ThreeColumn.Header>
                        <Layout.ThreeColumn.Column area="a">
                            <HeaderIcon name="Code" source={Illustrations.CreateComponent} />
                            <p>Make the most of your Python skills and rely on our cloud-based Code Editor for bots.</p>
                            <KnowMore>Read more</KnowMore>
                        </Layout.ThreeColumn.Column>
                        <Layout.ThreeColumn.Column area="b">
                            <HeaderIcon name="Build" source={Illustrations.LeisureComponent} />
                            <p>Master our Rule Builder and develop bots without the need for a single line of code.</p>
                            <KnowMore>Read more</KnowMore>
                        </Layout.ThreeColumn.Column>
                        <Layout.ThreeColumn.Column area="c">
                            <HeaderIcon name="Optimize" source={Illustrations.RulesComponent} />
                            <p>Perfect your bot with backtesting and practice trading including detailed charts and metrics.</p>
                            <KnowMore>Read more</KnowMore>
                        </Layout.ThreeColumn.Column>
                    </Layout.ThreeColumn.Container>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section themeColor={'background'} fullHeight id="foobar">
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
                                    source: Screens.Backtesting,
                                    icon: Illustrations.Infrastructure,
                                },
                            ]}
                        ></Layout.Slider>
                    </Header>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="features">
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn>
                            <Layout.CenterVertical>
                                <Header title="Connecting traders.">
                                    <TextBlock>
                                        <p>
                                            Whether you create trading bots or you prefer to let others do the hard work for you: the Trality Bot
                                            Marketplace is where Creators and Followers come together to profit from each other.
                                        </p>
                                        <ul>
                                            <li>Creators publish their best bots onto the marketplace</li>
                                            <li>Followers select a bot which matches their objectives</li>
                                            <li>Followers reward Creators with a monthly rent for their efforts</li>
                                            <li>Algorithms will always remain visible only to the Creator</li>
                                        </ul>
                                    </TextBlock>
                                    <KnowMore>Read more</KnowMore>
                                </Header>
                            </Layout.CenterVertical>
                        </Layout.OneColumn>
                        <Layout.OneColumn>
                            <Layout.CenterAllDirections>
                                <Image image={Screens.V2PhoneFrontalA} alt="Trality Phone Screenshot" />
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
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
                            <HeaderIcon name="Secure" source={Illustrations.Security} />
                            <p>Your funds lie safely on your exchange. Trality will never touch them directly and only use official exchange APIs.</p>
                        </Layout.ThreeColumn.Column>
                        <Layout.ThreeColumn.Column area="b">
                            <HeaderIcon name="Cloud-based" source={Illustrations.Infrastructure} />
                            <p>
                                Your algorithms run reliably 24/7 and never miss a trade. Trality eliminates the need to setup your own trading
                                servers!
                            </p>
                        </Layout.ThreeColumn.Column>
                        <Layout.ThreeColumn.Column area="c">
                            <HeaderIcon name="Encrypted" source={Illustrations.Encrypted} />
                            <p>
                                Your trading strategies are end-to-end encrypted. We can't see your strategies as they are in-browser encrypted
                                (coming soon!).
                            </p>
                        </Layout.ThreeColumn.Column>
                    </Layout.ThreeColumn.Container>
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
            <Layout.Section id="evolve" fullHeight>
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn>
                            <Layout.CenterAllDirections>
                                <Image image={Illustrations.Learning} scale={2} />
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                        <Layout.OneColumn>
                            <Layout.CenterVertical>
                                <Header title="Evolve your algorithmic trading game!">
                                    <TextBlock>
                                        <p>
                                            The cherry on the cake with Trality: become more and more proficient with algorithmic trading using our
                                            different Creator Tools.
                                        </p>
                                        <ul>
                                            <li>
                                                Move closer to mastering the art of coding algorithms by working with automatically generated Python
                                                code from rule-based bots.
                                            </li>
                                            <li>Enjoy video tutorials to learn more about algorithmic trading.</li>
                                            <li>Make use of our detailed documentation.</li>
                                        </ul>
                                    </TextBlock>
                                </Header>
                            </Layout.CenterVertical>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="trade-now" minimumPadding>
                <Layout.Banner backgroundColor={'backgroundLight'} color={'onLight'}>
                    <Layout.Center direction="column">
                        <Header title="Start trading now!">
                            <p>Trade on a continousy growing number of exchanges. </p>
                            <LogoList
                                logos={[
                                    {
                                        title: 'Binance',
                                        light: Logos.Binance,
                                    },
                                ]}
                            />
                        </Header>
                    </Layout.Center>
                </Layout.Banner>
            </Layout.Section>
        </Layout.Page>
    );
};
