import { Layout, Subscribe } from '@containers';
import { Header, HeaderIcon, Highlight, TextBlock, Image } from '@components';
import { Illustrations, Screens } from '@assets';

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
                                        Where <Highlight>Creators</Highlight> and <Highlight>Followers</Highlight> meet.
                                    </h1>
                                    <TextBlock>
                                        Profit from algorithmic trading by either publishing a bot to the Trality Bot Marketplace or follow bots by
                                        Creators.
                                    </TextBlock>
                                    <p>Let us notify you when our Marketplace is ready!</p>
                                    <Subscribe />
                                </div>
                            </Layout.CenterVertical>
                        </Layout.OneColumn>
                        <Layout.OneColumn>
                            <Layout.CenterAllDirections>
                                <Image image={Screens.V2PhoneRotMp} scale={0.9} />
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
                                <h2>It's simple.</h2>
                            </Layout.CenterAllDirections>
                        </Layout.ThreeColumn.Header>
                        <Layout.ThreeColumn.Column area="a">
                            <HeaderIcon name="Rent out bots" source={Illustrations.Create} />
                            <p>
                                After you have created an awesome trading bot you can start building a follower base and generate a risk-free side
                                income.
                            </p>
                        </Layout.ThreeColumn.Column>
                        <Layout.ThreeColumn.Column area="b">
                            <HeaderIcon name="Follow bots" source={Illustrations.Follow} />
                            <p>
                                Our Bot Marketplace gives you the option to follow the best-rated Creator bots and mirror its trades. No need for
                                expert skills.
                            </p>
                        </Layout.ThreeColumn.Column>
                        <Layout.ThreeColumn.Column area="c">
                            <HeaderIcon name="Profit from each other" source={Illustrations.Profit} />
                            <p>On Trality, Creators and Followers can profit from bots individually but, more importantly, also from each other.</p>
                        </Layout.ThreeColumn.Column>
                    </Layout.ThreeColumn.Container>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="creators" collapseMobile>
                <Layout.Center>
                    <Layout.TwoColumn collapseMobile reverted>
                        <Layout.OneColumn collapseMobile>
                            <Layout.CenterAllDirections>
                                <Image image={Illustrations.Create} scale={2} mobileScale={1} />
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                        <Layout.OneColumn collapseMobile>
                            <Layout.CenterVertical>
                                <Header title="Creators build a follower base and generate income.">
                                    <TextBlock>
                                        <p>
                                            Publish your bot on the Trality Bot Marketplace. For every follower you are rewarded a monthly rent for
                                            your effort.
                                        </p>
                                        <ul>
                                            <li>Generate income without the need for large initial funds - only your trading idea counts</li>
                                            <li>Stay in touch with your followers and improve your bot together</li>
                                            <li>Your algorithm will never be revealed to anyone.</li>
                                        </ul>
                                    </TextBlock>
                                </Header>
                            </Layout.CenterVertical>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="followers" collapseMobile>
                <Layout.Center>
                    <Layout.TwoColumn collapseMobile>
                        <Layout.OneColumn collapseMobile>
                            <Layout.CenterAllDirections>
                                <Image image={Illustrations.Follow} scale={2} mobileScale={1} />
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                        <Layout.OneColumn collapseMobile>
                            <Layout.CenterVertical>
                                <Header title="Followers profit from a quality-screened Creator bot.">
                                    <TextBlock>
                                        <p>
                                            Using Trality is not a black box. Choose from well-documented expert bots and follow the one which matches
                                            your objectives.
                                        </p>
                                        <ul>
                                            <li>Connect to your favorite crypto exchange</li>
                                            <li>The bot automatically starts trading for you</li>
                                            <li>Receive updates to your bot from Creators</li>
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
