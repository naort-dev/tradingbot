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
                                        Not a Coding guru? No problem! Simply start your journey to profitable algorithmic trading with the Trality
                                        Rule-based Bot Builder. It's clear user interface lets you develop the logic of your trading bot simply by
                                        dragging and dropping indicators and strategies.
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
            <Layout.Section id="detail" fullHeight>
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn>
                            <Header title="Master the Trality Bot Rule Builder.">
                                <p>Design trading bots with the help of a graphical user interface.</p>
                                <ul>
                                    <li>Build upon pre-defined trading strategies.</li>
                                    <li>Select from over 100 technical indicators.</li>
                                    <li>Use boolean logic to arrange strategy parts.</li>
                                </ul>
                                <p>
                                    <Button>Read more</Button>
                                </p>
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
                            <Header title="Learn to how to code.">
                                <p>Turn your rules into code automatically.</p>
                                <ul>
                                    <li>Build upon pre-defined trading strategies.</li>
                                    <li>Select from over 100 technical indicators.</li>
                                    <li>Use boolean logic to arrange strategy parts.</li>
                                </ul>
                                <p>
                                    <Button>Read more</Button>
                                </p>
                            </Header>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};
