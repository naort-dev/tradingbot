import { Layout } from '@containers';
import { Highlight, Button, Header, Image } from '@components';
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
                                    <h5>
                                        We believe that coding a trading bot is pretty cool. That's why we crafted the cloud-based Trality Code
                                        Editor: the most advanced of its kind that leaves nothing to be desired.
                                    </h5>
                                    <p>
                                        <Button>Start creating for free!</Button> COMMENT: NEED A BUTTON COMPONENT HERE
                                    </p>
                                </div>
                            </Layout.CenterVertical>
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
            <Layout.Section id="python" fullHeight>
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn>
                            <Layout.CenterAllDirections>
                                <Image image={Screens.CodeEditorV1} />
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                        <Layout.OneColumn>
                            <Header title="Python FTW!">
                                <p>Use the language and libraries you are already familiar with.</p>
                                <ul>
                                    <li>Exploit the power of Python to code your algorithms</li>
                                    <li>Access financial data with our easy-to-use API</li>
                                    <li>Access a full range of TA indicators</li>
                                    <li>Use numpy and other libraries (more to come!)</li>
                                </ul>
                                <p>
                                    <Button hollow>Visit our Documentation</Button> COMMENT: THIS SHOULD NOT BE A BUTTON BUT A READ MORE
                                </p>
                            </Header>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="detail" fullHeight>
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn>
                            <Header title="Features!">
                                <p>Rely on them to bring your most advanced trading ideas to life.</p>
                                <ul>
                                    <li>Edit and backtest directly in the browser</li>
                                    <li>Make use of intelligent auto-complete</li>
                                    <li>Benefit from clear versioning</li>
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
/*            <Layout.Section dark id="future" minimumPadding>
                <Layout.Banner backgroundColor={'darkPrimary'} color={'onDark'}>
                    <Layout.Center direction="column">
                        <Header title="Have a look into the future of trading!">
                            <Layout.ThreeColumn.Container>
                                <Layout.ThreeColumn.Column area="a">
                                    <h4>Debugging</h4>
                                    <img src={Screens.Debugging} />
                                </Layout.ThreeColumn.Column>
                                <Layout.ThreeColumn.Column area="b">
                                    <h4>Optimization</h4>
                                    <img src={Screens.Debugging} />
                                </Layout.ThreeColumn.Column>
                                <Layout.ThreeColumn.Column area="c">
                                    <h4>Automatic Rebalancing</h4>
                                    <img src={Screens.Debugging} />
                                </Layout.ThreeColumn.Column>
                            </Layout.ThreeColumn.Container>
                        </Header>
                    </Layout.Center>
                </Layout.Banner>
            </Layout.Section>*/
        </Layout.Page>
    );
};
