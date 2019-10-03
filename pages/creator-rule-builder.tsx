import { Layout } from '@containers';
import { Highlight, Button, Header, Image } from '@components';
import { Screens } from '@assets';

export default () => {
    return (
        <Layout.Page title="creator-rule-editor">
            <Layout.Section fullHeight noPadding id="rule-editor-description">
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn>
                            <Layout.CenterAllDirections>
                                <Layout.CenterRight>
                                    <Image image={Screens.RuleBuilderH1} />
                                </Layout.CenterRight>
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                        <Layout.OneColumn>
                            <Layout.CenterVertical>
                                <div>
                                    <h1>
                                        I want to <Highlight>build</Highlight> bots without code.
                                    </h1>
                                    <h5>
                                        Start your journey to profitable algorithmic trading with the our Rule Builder. Its graphical user interface
                                        lets you build your trading bot's logic by simply dragging and dropping indicators and strategies.
                                    </h5>
                                    <p>
                                        <Button>Start building for free!</Button> COMMENT: NEED A BUTTON COMPONENT HERE
                                    </p>
                                </div>
                            </Layout.CenterVertical>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="detail" fullHeight>
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn>
                            <Header title="Easy!">
                                <p>Design trading bots with the help of a graphical user interface.</p>
                                <ul>
                                    <li>Build upon pre-defined trading strategies</li>
                                    <li>Select from over 100 technical indicators</li>
                                    <li>Use boolean logic to arrange strategy parts</li>
                                    <li>Backtest your strategy with historical data</li>
                                </ul>
                            </Header>
                        </Layout.OneColumn>
                        <Layout.OneColumn>
                            <Layout.CenterAllDirections>
                                <Image image={Screens.RuleBuilderV1} />
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="learn" fullHeight>
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn>
                            <Layout.CenterAllDirections>
                                <Image image={Screens.RuleBuilderV1} />
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                        <Layout.OneColumn>
                            <Header title="Learn!">
                                <p>Turn your rules into code automatically. (coming soon!)</p>
                                <ul>
                                    <li>Transform built logics into Python code</li>
                                    <li>Evolve your trading game with new skills</li>
                                    <li>Improve your algorithms with additional possibilities</li>
                                </ul>
                            </Header>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};
