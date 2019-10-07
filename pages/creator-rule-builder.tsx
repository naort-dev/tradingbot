import { Layout } from '@containers';
import { Highlight, Button, Header, Image, TextBlock } from '@components';
import { Screens } from '@assets';

export default () => {
    return (
        <Layout.Page title="creator-rule-editor">
            <Layout.Section fullHeight noPadding id="rule-editor-description">
                <Layout.Center>
                    <Layout.TwoColumn width={55}>
                        <Layout.OneColumn>
                            <Layout.CenterAllDirections>
                                <Image image={Screens.V2MacRule} />
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                        <Layout.OneColumn>
                            <Layout.CenterVertical>
                                <div>
                                    <h1>
                                        I want to <Highlight>build</Highlight> bots graphically.
                                    </h1>
                                    <TextBlock>
                                        Start your journey to profitable algorithmic trading with the Trality Rule Builder. Its graphical user
                                        interface lets you build your trading bot's logic by simply dragging and dropping indicators and strategies.
                                    </TextBlock>
                                    <Button>Start building for free!</Button>
                                </div>
                            </Layout.CenterVertical>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="detail">
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn>
                            <Layout.CenterVertical>
                                <TextBlock>
                                    <Header title="Building bots in a few minutes.">
                                        <p>
                                            Using the Trality Rule Builder, you can turn your ideas into a profitable strategy and optimize it until
                                            you're satisfied.
                                        </p>
                                        <ul>
                                            <li>Build upon curated, pre-defined trading strategies</li>
                                            <li>Select from over 100 technical indicators</li>
                                            <li>Use boolean logic to arrange strategy parts</li>
                                            <li>Backtest your strategy with historical data</li>
                                        </ul>
                                    </Header>
                                </TextBlock>
                            </Layout.CenterVertical>
                        </Layout.OneColumn>
                        <Layout.OneColumn>
                            <Layout.CenterAllDirections>
                                <Image image={Screens.V2RuleUIElements} />
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="learn">
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn>
                            <Layout.CenterAllDirections>
                                <Image image={Screens.V2Evolve} />
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                        <Layout.OneColumn>
                            <Layout.CenterVertical>
                                <TextBlock>
                                    <Header title="Evolve from rules to code.">
                                        <p>Step up your game and turn your rule-based bots into code automatically. (coming soon!)</p>
                                        <ul>
                                            <li>Transform built logics into Python code</li>
                                            <li>Evolve your trading game with new skills</li>
                                            <li>Improve your algorithms by slowly adapting code to your needs</li>
                                        </ul>
                                    </Header>
                                </TextBlock>
                            </Layout.CenterVertical>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};
