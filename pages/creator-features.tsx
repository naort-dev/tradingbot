import { Layout } from '@containers';
import { Highlight, Button, Header, Image, TextBlock, KnowMore } from '@components';
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
                                        <Highlight>Upgrade</Highlight> your trading.
                                    </h1>
                                    <TextBlock>
                                        To trade profitably, you need every help you can get. At Trality, we provide you with the tools you need to
                                        succeed - from bot creation to trade execution.
                                    </TextBlock>
                                    <Button>Try Trality for free!</Button>
                                </div>
                            </Layout.CenterVertical>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="backtesting">
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn>
                            <Header title="Blazing-fast backtesting.">
                                <TextBlock>
                                    <p>
                                        Backtesting is at the heart of every bot creation iteration. That's why we made it as fast as possible and
                                        provide debugging features you'll find nowhere else.
                                    </p>
                                    <ul>
                                        <li>Improve your algorithms with in-browser backtesting</li>
                                        <li>Chose individual time frames or automated scenario tests</li>
                                        <li>Use breakpoints or events when debugging (coming soon!)</li>
                                        <li>Optimize strategy parameters automatically (coming soon!)</li>
                                    </ul>
                                </TextBlock>
                                <KnowMore>Read more</KnowMore>
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
            <Layout.Section id="live-trading">
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
                                    Trading bots should not miss a single trade and need to run 24/7. Our infrastructure is built for fast and
                                    reliable execution of your strategies.
                                </p>
                                <ul>
                                    <li>Rely on our infrastructure located in multiple regions - close to your favourite crypto exchange.</li>
                                    <li>No more maintenance and setup of your own servers</li>
                                    <li>Direct and reliable access to tickers, orderbooks and more</li>
                                    <li>Access your bots on web and mobile</li>
                                </ul>
                            </Header>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="safety">
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn>
                            <Header title="Complete safety of funds.">
                                <p>Your funds' safety lie at the heart of our business and we will do anything to protect them.</p>
                                <ul>
                                    <li>Trality never touches your funds directly, bots merely send trading signals to your trusted exchange</li>
                                    <li>Withdrawal-enabled API keys will always be rejected</li>
                                    <li>All bots and algorithms are completely sandboxed and are stored encrypted</li>
                                </ul>
                            </Header>
                        </Layout.OneColumn>
                        <Layout.OneColumn>
                            <Layout.CenterAllDirections>
                                <Image image={Illustrations.Security} scale={2} />
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};
