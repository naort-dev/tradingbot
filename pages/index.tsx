import React from 'react';
import { Layout } from '@containers';
import { HeaderText } from './home/header';
import { HeaderImage } from './home/headerimage';
import { HeaderCta } from './home/headercta';

import { HeaderIcon } from 'components/headericon';
import { Subscribe } from '@containers';
import { Button, KnowMore, LogoList } from '@components';
import { Screens, Illustrations, Logos } from '@assets';

import { Header } from '@components';

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
                                        <HeaderText />
                                        <HeaderCta />
                                    </Layout.TwoRows>
                                </div>
                            </Layout.CenterVertical>
                        </Layout.OneColumn>
                        <Layout.OneColumn>
                            <Layout.CenterAllDirections>
                                <Layout.CenterRight>
                                    <HeaderImage />
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
                            <HeaderIcon name="Decide" source={Illustrations.Leisure} />
                            <p>
                                Don’t know coding? The <b>Rule Builder</b> helps you develop bots without the need for a single line of code.
                            </p>
                            <KnowMore>Read more</KnowMore>
                        </Layout.ThreeColumn.Column>
                        <Layout.ThreeColumn.Column area="c">
                            <HeaderIcon name="Rent it out" source={Illustrations.Marketplace} />
                            <p>
                                <b>Rent your trading bot to followers</b> and generate a risk-free side income. Coming soon
                            </p>
                            <KnowMore>Read more</KnowMore>
                        </Layout.ThreeColumn.Column>
                    </Layout.ThreeColumn.Container>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section themeColor={'background'} fullHeight id="foobar">
                <Layout.Center>
                    <Header title="Do your thing" center expandHeight>
                        <Layout.Slider
                            items={[
                                {
                                    name: 'Code your own trading bots using our python API',
                                    source: Screens.Phone,
                                    icon: Illustrations.Follow,
                                },
                                {
                                    name: 'Build your bots using rules',
                                    source: Screens.Phone,
                                    icon: Illustrations.Profit,
                                },
                                {
                                    name: `Follow an expert's bot and profit`,
                                    source: Screens.Phone,
                                    icon: Illustrations.Create,
                                },
                            ]}
                        ></Layout.Slider>
                    </Header>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="features">
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn></Layout.OneColumn>
                        <Layout.OneColumn>
                            <Header title="The first trading platform that has it all">
                                <p>
                                    On the Trality Bot Marketplace, simply select a bot from an expert, which matches your objectives and follow it.
                                </p>
                                <ul>
                                    <li>Blazing-fast backtesting to test your algorithms.</li>
                                    <li>Blazing-fast backtesting to test your algorithms.</li>
                                    <li>Blazing-fast backtesting to test your algorithms.</li>
                                    <li>Blazing-fast backtesting to test your algorithms.</li>
                                    <li>Blazing-fast backtesting to test your algorithms.</li>
                                </ul>
                                <p>
                                    <Button>Read more</Button>
                                </p>
                            </Header>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="foobar">
                <Layout.Center>
                    <Layout.ThreeColumn.Container>
                        <Layout.ThreeColumn.Header>
                            <Layout.CenterAllDirections>
                                <h2>Some features you like</h2>
                            </Layout.CenterAllDirections>
                        </Layout.ThreeColumn.Header>
                        <Layout.ThreeColumn.Column area="a">
                            <HeaderIcon name="Secure" source={Illustrations.Security} />
                            <p>Your funds are with your exchange.</p>
                        </Layout.ThreeColumn.Column>
                        <Layout.ThreeColumn.Column area="b">
                            <HeaderIcon name="Cloud-based" source={Illustrations.Infrastructure} />
                            <p>Let your algorithms run reliably 24/7. No need to setup your own servers for trading any more!</p>
                        </Layout.ThreeColumn.Column>
                        <Layout.ThreeColumn.Column area="c">
                            <HeaderIcon name="Encrypted" source={Illustrations.Profit} />
                            <p>Coming soon: end-to-end encryption of your trading strategies.</p>
                        </Layout.ThreeColumn.Column>
                    </Layout.ThreeColumn.Container>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="mailinglist" noBgChange>
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
                        <Layout.OneColumn></Layout.OneColumn>
                        <Layout.OneColumn>
                            <Header title="Evolve your trading game!">
                                <p>
                                    The cherry on the cake with Trality: become more and more proficient with algorithmic trading while moving through
                                    the different tools of trading bots.
                                </p>
                                <ul>
                                    <li>
                                        Move closer to mastering the art of algorithm coding by working with automatically generated Python code from
                                        rule-based bots.
                                    </li>
                                    <li>Enjoy video tutorials to learn more about algorithmic trading.</li>
                                    <li>Make use of our detailed documentation.</li>
                                </ul>
                                <p>
                                    <Button>Read more</Button>
                                </p>
                            </Header>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section dark id="faq">
                <Layout.Center>
                    <Header title="FAQ">
                        <Layout.Collapsible title="Where do i need to deposit money/how do i start trading?">
                            All you need is an account on your favorite crypto exchange as well as API keys, which allow access to it. We currently
                            support Binance and more exchanges will follow. For more info on connecting exchanges and APIs, please visit our wiki.
                        </Layout.Collapsible>
                        <Layout.Collapsible title="How do you guarantee that the bots on the marketplace arent used for scamming people?">
                            We have a state-of-the-art screening process in place, which will ensure only trustworthy bots to be published on the Bot
                            Marketplace. This includes a set of risk/return criteria as well as extensive scenario testing of each bot.
                        </Layout.Collapsible>
                        <Layout.Collapsible title="How do you guarantee that my algorithm remains safe and unseen by others?">
                            All bots are completely sandboxed and run individually. Your followers will never directly touch your bot or the
                            underlying code/algorithm. Instead, Trality only mirrors signals and portfolio distributions depending on the
                            circumstances of the individual follower. Logging, debugging and other functionality is not available for followers.
                        </Layout.Collapsible>
                    </Header>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section dark id="trade-now">
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
