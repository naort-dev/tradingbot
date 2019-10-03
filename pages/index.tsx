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
                                <h2>Trality Creator Tools</h2>
                            </Layout.CenterAllDirections>
                        </Layout.ThreeColumn.Header>
                        <Layout.ThreeColumn.Column area="a">
                            <HeaderIcon name="Code" source={Illustrations.Create} />
                            <p>Make the most of your Python skills and rely on our cloud-based Code Editor for bots.</p>
                            <KnowMore>Read more</KnowMore>
                        </Layout.ThreeColumn.Column>
                        <Layout.ThreeColumn.Column area="b">
                            <HeaderIcon name="Build" source={Illustrations.Leisure} />
                            <p>Master our Rule Builder and develop bots without the need for a single line of code.</p>
                            <KnowMore>Read more</KnowMore>
                        </Layout.ThreeColumn.Column>
                        <Layout.ThreeColumn.Column area="c">
                            <HeaderIcon name="Optimize" source={Illustrations.Marketplace} />
                            <p>Perfect your bot with backtesting and practice trading including detailed charts and metrics.</p>
                            <KnowMore>Read more</KnowMore>
                        </Layout.ThreeColumn.Column>
                    </Layout.ThreeColumn.Container>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section themeColor={'background'} fullHeight id="foobar">
                <Layout.Center>
                    <Header title="Flexible features that will convince you:" center expandHeight>
                        <Layout.Slider
                            items={[
                                {
                                    name: 'powerful Python API to code algorithms',
                                    source: Screens.RuleBuilder,
                                    icon: Illustrations.Create,
                                },
                                {
                                    name: 'flexible Rule Builder to build logic',
                                    source: Screens.RuleBuilder,
                                    icon: Illustrations.Leisure,
                                },
                                {
                                    name: `strong Backtester to optimize bots`,
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
                            <Header title="Trality Bot Marketplace">
                                <TextBlock>
                                    <p>
                                        Whether you create trading bots or you prefer to let others do the hard work for you: here is where Creators
                                        and Followers come together to profit from each other.
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
                                <h2>Enjoy complete safety of your funds and algorithms</h2>
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
                                Your trading strategies are end-to-end encrypted. Trality cannot see your strategies as they are encrypted in your
                                browser (coming soon!).
                            </p>
                        </Layout.ThreeColumn.Column>
                    </Layout.ThreeColumn.Container>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="mailinglist" noBgChange minimumPadding>
                <Layout.Banner backgroundColor={'bluePrimary'} color={'lightPrimary'}>
                    <Layout.Center direction="column">
                        <Header title="Stay connected">
                            <h5>Waiting for cool Trality updates? Join our monthly mailing list and stay up to date 💙</h5>
                        </Header>
                        <Subscribe />
                    </Layout.Center>
                </Layout.Banner>
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
