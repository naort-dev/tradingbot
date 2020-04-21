import { Layout } from '@containers';
import { Header, ImageContainer, HeaderIcon, KnowMore, TextBlock } from '@components';
import { ImagesMisc, Icons } from '@assets';

export default () => {
    return (
        <Layout.Page title="jobs">
            <Layout.Section fullHeight noPadding id="jobs-header">
                <Layout.Center>
                    <Layout.TwoColumn>
                        <Layout.OneColumn>
                            <Layout.CenterVertical>
                                <div>
                                    <h1>We're hiring!</h1>
                                    <TextBlock>
                                        Would you like to help us revolutionize crypto trading by enabling everyone to profit from algorithmic
                                        trading? We are a small but very diverse team and we would love to hear from you!
                                    </TextBlock>
                                </div>
                            </Layout.CenterVertical>
                        </Layout.OneColumn>
                        <Layout.OneColumn>
                            <Layout.CenterAllDirections>
                                <Layout.CenterRight>
                                    <ImageContainer>
                                        <img src={ImagesMisc.Jobs} />
                                    </ImageContainer>
                                </Layout.CenterRight>
                            </Layout.CenterAllDirections>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="why" fullHeight>
                <Layout.Center>
                    <Layout.ThreeColumn.Container>
                        <Layout.ThreeColumn.Header>
                            <Layout.CenterAllDirections>
                                <h2>Why join us</h2>
                            </Layout.CenterAllDirections>
                        </Layout.ThreeColumn.Header>
                        <Layout.ThreeColumn.Column area="a">
                            <HeaderIcon name="Small team, large responsibilty" source={Icons.Shield} />
                            <p>We are currently a team of only 6 and if you’re the right person for job, you’re basically in charge of it.</p>
                        </Layout.ThreeColumn.Column>
                        <Layout.ThreeColumn.Column area="b">
                            <HeaderIcon name="Competitive remuneration" source={Icons.Star} />
                            <p>We want the best for the job and pay accordingly! We are also open to negotiating equity-based compensation..</p>
                        </Layout.ThreeColumn.Column>
                        <Layout.ThreeColumn.Column area="c">
                            <HeaderIcon name="Flexibility" source={Icons.Person} />
                            <p>
                                We understand that people are different. Want to work remotely? Fine. Wanna join us in our offices? Perfect as well.
                            </p>
                        </Layout.ThreeColumn.Column>
                    </Layout.ThreeColumn.Container>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="positions">
                <Layout.Center>
                    <Header title="Open Positions">
                        <Layout.Grid.Container>
                            <Layout.Grid.Item>
                                <h4>Senior/Junior Backend Developer (Part-/Full-time)</h4>
                                <p>Build state-of-the-art systems that empower the complex trading-bots running on our platform!</p>
                                <KnowMore to="/jobs/backend">Interested</KnowMore>
                            </Layout.Grid.Item>
                            <Layout.Grid.Item>
                                <h4>Senior/Junior Frontend Developer (Part-/Full-time)</h4>
                                <p>Use cutting edge UI frameworks in order to raise the bar for state-of-the-art UI and UX!</p>
                                <KnowMore to="/jobs/frontend">Interested</KnowMore>
                            </Layout.Grid.Item>
                            <Layout.Grid.Item>
                                <h4>Senior/Junior Mobile Developer (Part-/Full-time)</h4>
                                <p>Join our team on a short-term contract to develop our mobile app from scratch!</p>
                                <KnowMore to="/jobs/mobile">Interested</KnowMore>
                            </Layout.Grid.Item>
                            <Layout.Grid.Item>
                                <h4>Junior AI-Engineer</h4>
                                <p>Work on state-of-the art ML projects at Trality.</p>
                                <KnowMore to="/jobs/ai">Interested</KnowMore>
                            </Layout.Grid.Item>
                            <Layout.Grid.Item>
                                <h4>Manager Marketing & Communication (Part-time)</h4>
                                <p>Spread the word on our startup and be responsible for driving awareness and user growth!</p>
                                <KnowMore to="/jobs/marketing">Interested</KnowMore>
                            </Layout.Grid.Item>
                        </Layout.Grid.Container>
                    </Header>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="your-role" noBgChange minimumPadding>
                <Layout.Banner backgroundColor={'bluePrimary'} color={'lightPrimary'}>
                    <Layout.Center direction="column">
                        <Header title="Your role not on the list?">
                            <h5>
                                We probably have a position for you if you are a great fit! Simply drop us an email including a CV and a 1-page cover
                                letter including a brief description of your desired role at trality to jobs [at] trality dot com
                            </h5>
                        </Header>
                    </Layout.Center>
                </Layout.Banner>
            </Layout.Section>
        </Layout.Page>
    );
};
