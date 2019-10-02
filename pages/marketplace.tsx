import { Layout } from '@containers';
import { Header, HeaderIcon, KnowMore, Highlight, WordAnimation, Button, Cursor } from '@components';
import { Illustrations } from '@assets';

export default () => {
    return (
        <Layout.Page title="marketplace">
            <Layout.Section fullHeight noPadding id="marketplace-description">
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn>
                            <Layout.CenterVertical>
                                <div>
                                    <h1>
                                        Where{' '}
                                        <Highlight>
                                            <WordAnimation words={['creators', 'followers']} />
                                        </Highlight>
                                        <Cursor />
                                        <br />
                                        meet.
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
            <Layout.Section id="concept">
                <Layout.Center>
                    <Layout.ThreeColumn.Container>
                        <Layout.ThreeColumn.Header>
                            <Layout.CenterAllDirections>
                                <h2>This is a marketplace header</h2>
                            </Layout.CenterAllDirections>
                        </Layout.ThreeColumn.Header>
                        <Layout.ThreeColumn.Column area="a">
                            <HeaderIcon name="Follow bots" source={Illustrations.Follow} />
                            <p>
                                With the Trality Bot Marketplace, you can start trading like a Wall Street Pro: follow the best-rated expert bots and
                                mirror its trades. No need for expert skills.{' '}
                            </p>
                            <KnowMore>Read more</KnowMore>
                        </Layout.ThreeColumn.Column>
                        <Layout.ThreeColumn.Column area="b">
                            <HeaderIcon name="Create bots" source={Illustrations.Create} />
                            <p>
                                Trality gives you the most advanced tools to create trading bots. And more! Start building a follower base and
                                generate a risk-free side income.{' '}
                            </p>
                            <KnowMore>Read more</KnowMore>
                        </Layout.ThreeColumn.Column>
                        <Layout.ThreeColumn.Column area="c">
                            <HeaderIcon name="Profit from each other" source={Illustrations.Profit} />
                            <p>
                                On Trality, leisure and expert traders can profit from bots individually but, more importantly, also from each other.{' '}
                            </p>
                            <KnowMore>Read more</KnowMore>
                        </Layout.ThreeColumn.Column>
                    </Layout.ThreeColumn.Container>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="creators" fullHeight>
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn></Layout.OneColumn>
                        <Layout.OneColumn>
                            <Header title="Build a follower base and generate income.">
                                <p>
                                    Once you've got your strategy figured out, you can publish your bot on the Trality Bot Marketplace. For every
                                    follower you are rewarded a monthly rent for your effort. The best part: your algorithm will never be revealed to
                                    anyone.
                                </p>
                            </Header>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="followers" fullHeight>
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn>
                            <Header title="Follow bots.">
                                <p>
                                    Once you've got your strategy figured out, you can publish your bot on the Trality Bot Marketplace. For every
                                    follower you are rewarded a monthly rent for your effort. The best part: your algorithm will never be revealed to
                                    anyone.
                                </p>
                            </Header>
                        </Layout.OneColumn>
                        <Layout.OneColumn></Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};
