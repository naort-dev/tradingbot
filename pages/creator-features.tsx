import { Layout } from '@containers';
import { Highlight, Button, Header, Image } from '@components';
import { Screens, Illustrations } from '@assets';

export default () => {
    return (
        <Layout.Page title="creator-features">
            <Layout.Section fullHeight noPadding id="feature-description">
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn>
                            <Layout.CenterAllDirections>
                                <Image image={Screens.BacktestH1} />
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                        <Layout.OneColumn>
                            <Layout.CenterVertical>
                                <div>
                                    <h1>
                                        I want to <Highlight>upgrade</Highlight> my trading.
                                    </h1>
                                    <h5>
                                        To trade profitably, you need every help you can get. At Trality, we provide you with the tools to succeed.
                                    </h5>
                                    <p>
                                        <Button>Signup now</Button>
                                    </p>
                                </div>
                            </Layout.CenterVertical>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="backtesting" fullHeight>
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn>
                            <Header title="Blazing-fast backtesting.">
                                <p>
                                    Backtesting is at the heart of every trading algorithm iteration. That's why we made it as fast as possible and
                                    provide debugging features you'll find nowhere else.
                                </p>
                                <ul>
                                    <li>Interactive, blazing-fast backtesting</li>
                                    <li>Automated scenario tests or individual time frames</li>
                                    <li>Live debugging using breakpoints or events</li>
                                    <li>Parameter optimization</li>
                                </ul>
                                <p>
                                    <Button>Read more</Button>
                                </p>
                            </Header>
                        </Layout.OneColumn>
                        <Layout.OneColumn>
                            <Layout.CenterAllDirections>
                                <Image image={Screens.BacktestV1} />
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="live-trading" fullHeight>
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn>
                            <Layout.CenterAllDirections>
                                <Image image={Screens.BacktestV1} />
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                        <Layout.OneColumn>
                            <Header title="Cloud-based live-trading.">
                                <p>
                                    Backtesting is at the heart of every trading algorithm iteration. That's why we made it as fast as possible and
                                    provide debugging features you'll find nowhere else.
                                </p>
                                <ul>
                                    <li>Interactive, blazing-fast backtesting</li>
                                    <li>Automated scenario tests or individual time frames</li>
                                    <li>Live debugging using breakpoints or events</li>
                                    <li>Parameter optimization</li>
                                </ul>
                                <p>
                                    <Button>Read more</Button>
                                </p>
                            </Header>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="safety" fullHeight>
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn>
                            <Header title="Enjoy complete safety of your funds and algorithms.">
                                <p>
                                    Once you've got your strategy figured out, you can publish your bot on the Trality Bot Marketplace. For every
                                    follower you are rewarded a monthly rent for your effort. The best part: your algorithm will never be revealed to
                                    anyone.
                                </p>
                                <ul>
                                    <li>Trality never touches your funds directly, bots merely send trading signals to your trusted exchange</li>
                                    <li>Withdrawal-enabled API keys will always be rejected</li>
                                    <li>All bots and algorithms are completely sandboxed and are stored encrypted</li>
                                </ul>
                            </Header>
                        </Layout.OneColumn>
                        <Layout.OneColumn>
                            <Layout.CenterAllDirections>
                                <Image image={Illustrations.Security} />
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};
