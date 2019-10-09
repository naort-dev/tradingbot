import { Layout } from '@containers';
import { Highlight, Button, Header, Image, TextBlock, KnowMore } from '@components';
import { Screens, Illustrations } from '@assets';

export default () => {
    return (
        <Layout.Page title="creator-code-editor">
            <Layout.Section fullHeight noPadding id="description">
                <Layout.Center>
                    <Layout.TwoColumn columnWidth={40}>
                        <Layout.OneColumn>
                            <Layout.CenterVertical>
                                <div>
                                    <h1>
                                        I want to <Highlight>code</Highlight> bots.
                                    </h1>
                                    <TextBlock>
                                        We believe that coding a trading bot is pretty cool. That's why we crafted the cloud-based Trality Code
                                        Editor: the most advanced of its kind that leaves nothing to be desired.
                                    </TextBlock>
                                    <Button to="https://auth.beta.trality.com/#/signup" blank>
                                        Start creating for free!
                                    </Button>
                                </div>
                            </Layout.CenterVertical>
                        </Layout.OneColumn>
                        <Layout.OneColumn collapseMobile>
                            <Layout.CenterAllDirections>
                                <Image image={Screens.V2MacCode} />
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="python" collapseMobile>
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn collapseMobile>
                            <Layout.CenterAllDirections>
                                <Header title="Python FTW!">
                                    <TextBlock>
                                        <p>Use the language and libraries you are already familiar with.</p>
                                        <ul>
                                            <li>Use Python to code your algorithms</li>
                                            <li>Access financial data with our easy-to-use API</li>
                                            <li>Access a full range of TA indicators</li>
                                            <li>Use numpy and other libraries (more to come!)</li>
                                        </ul>
                                    </TextBlock>
                                    <KnowMore to="https://docs.trality.com" blank>
                                        Visit our Documentation
                                    </KnowMore>
                                </Header>
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                        <Layout.OneColumn collapseMobile>
                            <Layout.CenterAllDirections>
                                <Image image={Screens.V2CodeUI} />
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="detail" collapseMobile>
                <Layout.Center>
                    <Layout.TwoColumn collapseMobile>
                        <Layout.OneColumn collapseMobile>
                            <Layout.CenterAllDirections>
                                <Image image={Illustrations.DebugList} scale={2} mobileScale={1} />
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                        <Layout.OneColumn collapseMobile>
                            <Layout.CenterVertical>
                                <Header title="We've got you covered.">
                                    <TextBlock>
                                        <p>Bring your most advanced trading ideas to life using our growing list of tools and features.</p>
                                        <ul>
                                            <li>Edit in the browser with intelligent auto-complete</li>
                                            <li>Backtest directly in the browser</li>
                                            <li>Benefit from clear versioning and your backtest history</li>
                                            <li>Use in-browser debugging (coming soon!)</li>
                                            <li>Use automatic rebalancing (coming soon!)</li>
                                        </ul>
                                    </TextBlock>
                                </Header>
                            </Layout.CenterVertical>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};
