import { Layout } from '@containers';
import { Highlight, Button, Header, Image, TextBlock, KnowMore } from '@components';
import { Screens } from '@assets';

export default () => {
    return (
        <Layout.Page title="creator-code-editor">
            <Layout.Section fullHeight noPadding id="description">
                <Layout.Center>
                    <Layout.TwoColumn>
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
                                    <Button>Start creating for free!</Button>
                                </div>
                            </Layout.CenterVertical>
                        </Layout.OneColumn>
                        <Layout.OneColumn>
                            <Layout.CenterAllDirections>
                                <Layout.CenterRight>
                                    <Image image={Screens.MacMockupV2} />
                                </Layout.CenterRight>
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="python">
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn>
                            <Layout.CenterAllDirections>
                                <Image image={Screens.CodeEditorV1} />
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                        <Layout.OneColumn>
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
                                <KnowMore>Visit our Documentation</KnowMore>
                            </Header>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="detail">
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn>
                            <Header title="We've got you covered.">
                                <p>Bring your most advanced trading ideas to life using our growing list of tools and features.</p>
                                <ul>
                                    <li>Edit in the browser with intelligent auto-complete</li>
                                    <li>Backtest directly in the browser</li>
                                    <li>Benefit from clear versioning and your backtest history</li>
                                    <li>Use in-browser debugging (coming soon!)</li>
                                    <li>Use automatic rebalancing (coming soon!)</li>
                                </ul>
                            </Header>
                        </Layout.OneColumn>
                        <Layout.OneColumn>
                            <Layout.CenterAllDirections>
                                <Layout.CenterRight>
                                    <Image image={Screens.CodeEditorH1} />
                                </Layout.CenterRight>
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};
