import { Layout } from '@containers';
import { Highlight, Button, Header } from '@components';
import { Screens } from '@assets';

export default () => {
    return (
        <Layout.Page title="creator-code-editor" dark>
            <Layout.Section fullHeight noPadding id="description" dark>
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn>
                            <Layout.CenterVertical>
                                <div>
                                    <h1>
                                        I want to <Highlight>code</Highlight> bots.
                                    </h1>
                                    <h5>
                                        We believe that coding a trading bot is pretty cool. That's why we crafted the cloud-based Trality Algorithm
                                        Editor: the most advanced of its kind that leaves nothing to be desired.
                                    </h5>
                                    <p>
                                        <Button>Signup now</Button>
                                    </p>
                                </div>
                            </Layout.CenterVertical>
                        </Layout.OneColumn>
                        <Layout.OneColumn>
                            <Layout.CenterAllDirections>
                                <Layout.CenterRight></Layout.CenterRight>
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="python" fullHeight dark>
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn></Layout.OneColumn>
                        <Layout.OneColumn>
                            <Header title="Python FTW!">
                                <p>Use the language and libraries you are already familiar with.</p>
                                <ul>
                                    <li>Support of Python to code algorithms</li>
                                    <li>Easy-to-use API to access financial data</li>
                                    <li>Access to full range of indicators.</li>
                                    <li>Use numpy and other libraries (soon!).</li>
                                </ul>
                                <p>
                                    <Button hollow>Documentation</Button>
                                </p>
                            </Header>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="detail" fullHeight dark>
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn>
                            <Header title="Rely on the Trality Bot Code Editor.">
                                <p>Bring your most advanced trading ideas to life.</p>
                                <ul>
                                    <li>Direct in-browser editing and backtesting.</li>
                                    <li>Intelligent auto-complete.</li>
                                    <li>In-browser debugging (Coming soon!).</li>
                                </ul>
                                <p>
                                    <Button>Read more</Button>
                                </p>
                            </Header>
                        </Layout.OneColumn>
                        <Layout.OneColumn></Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section dark id="future" minimumPadding>
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
            </Layout.Section>
        </Layout.Page>
    );
};
