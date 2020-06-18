import { Layout } from '@containers';
import { Highlight, Button, Header, Image, TextBlock } from '@components';
import { Screens, Illustrations } from '@assets';
import { EventType, SignupOrigins } from '@trality/web-tracking';

export default () => {
    return (
        <Layout.Page title="creator-rule-editor">
            <Layout.Section fullHeight noPadding id="rule-editor-description">
                <Layout.Center>
                    <Layout.TwoColumn columnWidth={40} reverted>
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
                                    <Button
                                        to="https://auth.beta.trality.com/#/signup"
                                        blank
                                        event={{
                                            type: EventType.SignupInitiated,
                                            attributes: { signupOrigin: SignupOrigins.HeaderCta }
                                        }}
                                    >
                                        Start building for free!
                                    </Button>
                                </div>
                            </Layout.CenterVertical>
                        </Layout.OneColumn>
                        <Layout.OneColumn collapseMobile>
                            <Layout.CenterAllDirections>
                                <Image image={Screens.V2MacRule} />
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="detail" collapseMobile>
                <Layout.Center>
                    <Layout.TwoColumn collapseMobile>
                        <Layout.OneColumn collapseMobile>
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
                        <Layout.OneColumn collapseMobile>
                            <Layout.CenterAllDirections>
                                <Image image={Screens.V2RuleUIElements} />
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="learn" collapseMobile>
                <Layout.Center>
                    <Layout.TwoColumn reverted collapseMobile>
                        <Layout.OneColumn collapseMobile>
                            <Layout.CenterVertical>
                                <TextBlock>
                                    <Header title="Evolve from rules to code.">
                                        <p>Step up your algorithmic trading game using our different Creator Tools.</p>
                                        <ul>
                                            <li>Transform your rule-based bots into Python code automatically</li>
                                            <li>Enjoy video tutorials to learn more about algorithmic trading</li>
                                            <li>Make use of our detailed documentation</li>
                                        </ul>
                                    </Header>
                                </TextBlock>
                            </Layout.CenterVertical>
                        </Layout.OneColumn>
                        <Layout.OneColumn collapseMobile>
                            <Layout.CenterAllDirections>
                                <Image image={Illustrations.EvolveComponent} scale={1.4} />
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};
