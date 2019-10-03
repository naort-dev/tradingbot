import React from 'react';
import { Layout } from '@containers';
import { HeaderCta } from './home/headercta';

import { HeaderIcon } from 'components/headericon';
import { Subscribe } from '@containers';
import { Header, Button, KnowMore, LogoList, WordAnimation, Highlight, Cursor, Image, TextBlock } from '@components';
import { Screens, Illustrations, Logos } from '@assets';

const HeaderWords = ['algorithmic', 'automated', 'python-based', 'rule-based', 'bot', 'easy', 'professional', 'one-click'];

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
                                            #Enter <br />
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
                                <Layout.CenterRight>
                                    <Image image={Screens.Imac} alt="Trality Phone Screenshot" />
                                </Layout.CenterRight>
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
                                <h2>Flexible Creator Tools</h2>
                            </Layout.CenterAllDirections>
                        </Layout.ThreeColumn.Header>
                        <Layout.ThreeColumn.Column area="a">
                            <HeaderIcon name="Code" source={Illustrations.Create} />
                            <p>
                                Live up to your skills and use our <b>development environment for coding</b> your algorithms in python.
                            </p>
                            <KnowMore>Read more</KnowMore>
                        </Layout.ThreeColumn.Column>
                        <Layout.ThreeColumn.Column area="b">
                            <HeaderIcon name="Make rules" source={Illustrations.Leisure} />
                            <p>
                                Don’t know coding? The <b>Rule Builder</b> helps you develop bots without the need for a single line of code.
                            </p>
                            <KnowMore>Read more</KnowMore>
                        </Layout.ThreeColumn.Column>
                        <Layout.ThreeColumn.Column area="c">
                            <HeaderIcon name="Optimize" source={Illustrations.Marketplace} />
                            <p>
                                Backtest your bot or start it on virtual accounts with <b>detailed charts and metrics</b> - until you're satisfied.
                                For free forever.
                            </p>
                            <KnowMore>Read more</KnowMore>
                        </Layout.ThreeColumn.Column>
                    </Layout.ThreeColumn.Container>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section themeColor={'background'} fullHeight id="foobar">
                <Layout.Center>
                    <Header title="Creating trading bots has never been easier" center expandHeight>
                        <Layout.Slider
                            items={[
                                {
                                    name: 'Code your own trading bots using our python API',
                                    source: Screens.RuleBuilder,
                                    icon: Illustrations.Create,
                                },
                                {
                                    name: 'Build your bots using rules',
                                    source: Screens.RuleBuilder,
                                    icon: Illustrations.Leisure,
                                },
                                {
                                    name: `Backtest and optimize`,
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
                            <Header title="Creators and Followers">
                                <TextBlock>
                                    <p>
                                        Whether you build bots or you just want to let others do the hard work for you: on the{' '}
                                        <b>Trality Bot Marktplace</b>, creators and followers come together to profit from each other.
                                    </p>
                                    <ul>
                                        <li>⚡Select a bot from an expert, which matches your objectives and follow it.</li>
                                        <li>📈Monitor your bot using our mobile app.</li>
                                        <li>
                                            {' '}
                                            🛒Publish your bot to our Trality Bot Marketplace and build a follower base to generate a risk free
                                            side-income.
                                        </li>
                                    </ul>
                                </TextBlock>
                                <p>
                                    <Button>Read more</Button>
                                </p>
                            </Header>
                        </Layout.OneColumn>
                        <Layout.OneColumn>
                            <Layout.CenterRight>
                                <Image image={Screens.Phone} />
                            </Layout.CenterRight>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="foobar">
                <Layout.Center>
                    <Layout.ThreeColumn.Container>
                        <Layout.ThreeColumn.Header>
                            <Layout.CenterAllDirections>
                                <h2>Your algorithms belong to you</h2>
                            </Layout.CenterAllDirections>
                        </Layout.ThreeColumn.Header>
                        <Layout.ThreeColumn.Column area="a">
                            <HeaderIcon name="Secure" source={Illustrations.Security} />
                            <p>Your funds are with your exchange - we will never touch them directly.</p>
                        </Layout.ThreeColumn.Column>
                        <Layout.ThreeColumn.Column area="b">
                            <HeaderIcon name="Cloud-based" source={Illustrations.Infrastructure} />
                            <p>
                                Let your algorithms run reliably 24/7 and never miss a trade. No need to setup your own servers for trading any more!
                            </p>
                        </Layout.ThreeColumn.Column>
                        <Layout.ThreeColumn.Column area="c">
                            <HeaderIcon name="Encrypted" source={Illustrations.Encrypted} />
                            <p>
                                Coming soon: end-to-end encryption of your trading strategies. Trality cannot see your strategies as they are
                                encrypted directly in your browser.
                            </p>
                        </Layout.ThreeColumn.Column>
                    </Layout.ThreeColumn.Container>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="mailinglist" noBgChange minimumPadding>
                <Layout.Banner backgroundColor={'bluePrimary'} color={'lightPrimary'}>
                    <Layout.Center direction="column">
                        <Header title="Mailing list">
                            <h5>Waiting for cool Trality updates? Join our monthly mailing list and stay up to date 💙</h5>
                        </Header>
                        <Subscribe />
                    </Layout.Center>
                </Layout.Banner>
            </Layout.Section>
            <Layout.Section id="evolve" fullHeight dark>
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn>
                            <Layout.CenterAllDirections>
                                <Image image={Screens.EvolveH1} />
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                        <Layout.OneColumn>
                            <Header title="Evolve your trading game!">
                                <TextBlock>
                                    <p>
                                        The cherry on the cake with Trality: become more and more proficient with algorithmic trading while moving
                                        through the different tools of trading bots.
                                    </p>
                                    <ul>
                                        <li>
                                            Move closer to mastering the art of algorithm coding by working with automatically generated Python code
                                            from rule-based bots.
                                        </li>
                                        <li>Enjoy video tutorials to learn more about algorithmic trading.</li>
                                        <li>Make use of our detailed documentation.</li>
                                    </ul>
                                </TextBlock>
                                <p>
                                    <Button>Read more</Button>
                                </p>
                            </Header>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section dark id="trade-now" minimumPadding>
                <Layout.Banner backgroundColor={'darkPrimary'} color={'onDark'}>
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
                        <Button>Signup</Button>
                    </Layout.Center>
                </Layout.Banner>
            </Layout.Section>
        </Layout.Page>
    );
};
