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
                                        I want to <Highlight>upgrade</Highlight> my trading.
                                    </h1>
                                    <TextBlock>
                                        To trade profitably, you need every help you can get. At Trality, we provide you with the tools to succeed.
                                    </TextBlock>
                                    <Button>Upgrade your trading for free!</Button>
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
                            <Header title="Blazing-fast backtesting!">
                                <TextBlock>
                                    <p>
                                        Backtesting is at the heart of every bot creation iteration. That's why we made it as fast as possible and
                                        provide debugging features you'll find nowhere else.
                                    </p>
                                    <ul>
                                        <li>Improve your algorithms with in-browser backtesting</li>
                                        <li>Chose individual time frames or automated scenario tests</li>
                                        <li>Use breakpoints or events when debugging (coming soon!)</li>
                                        <li>Optimize strategy parameters using ML (coming soon!)</li>
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
            <Layout.Section id="live-trading" fullHeight>
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn>
                            <Layout.CenterAllDirections>
                                <Image image={Screens.BacktestV1} />
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                        <Layout.OneColumn>
                            <Header title="Cloud-based live-trading!">
                                <p>Trading bots should not miss a single trade and therefore need to run 24/7.</p>
                                <ul>
                                    <li>Rely on AWS-based cloud infrastructure</li>
                                    <li>Microservices...</li>
                                    <li>Access your bots on web and mobile</li>
                                </ul>
                            </Header>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="safety" fullHeight>
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn>
                            <Header title="Complete safety of funds!">
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
                                <Image image={Illustrations.Security} />
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};
