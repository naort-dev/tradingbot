import { Layout } from '@containers';
import { Header } from '@components';

export default () => {
    return (
        <Layout.Page title="pricing">
            <Layout.Section fullHeight noPadding id="pricing-overview">
                <Layout.Center>
                    <Header title="Coming soon!"></Header>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
    /*
    return (
        <Layout.Page title="pricing">
            <Layout.Section fullHeight noPadding id="pricing-overview">
                <Layout.Center>
                    <Header title="Pricing">
                        <Pricing.Container>
                            <Pricing.Item id="beginner">
                                <Pricing.Header>Beginner</Pricing.Header>
                                <Pricing.Description title="Max. portfolio size">2 000 €</Pricing.Description>
                                <Pricing.Description title="Exp. relative size of segment">30%</Pricing.Description>
                                <Pricing.Description title="Max. portfolio size">2 000 €</Pricing.Description>
                                <Button>Choose</Button>
                            </Pricing.Item>
                            <Pricing.Item id="foobar">
                                <Pricing.Header>Beginner</Pricing.Header>
                                <Pricing.Description title="Max. portfolio size">2 000 €</Pricing.Description>
                                <Pricing.Description title="Exp. relative size of segment">30%</Pricing.Description>
                                <Pricing.Description title="Max. portfolio size">2 000 €</Pricing.Description>
                                <Button>Choose</Button>
                            </Pricing.Item>
                            <Pricing.Item id="foobar">
                                <Pricing.Header>Beginner</Pricing.Header>
                                <Pricing.Description title="Max. portfolio size">2 000 €</Pricing.Description>
                                <Pricing.Description title="Exp. relative size of segment">30%</Pricing.Description>
                                <Pricing.Description title="Max. portfolio size">2 000 €</Pricing.Description>
                                <Button>Choose</Button>
                            </Pricing.Item>
                        </Pricing.Container>
                    </Header>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="mailinglist" noBgChange minimumPadding>
                <Layout.Banner backgroundColor={'bluePrimary'} color={'lightPrimary'}>
                    <Layout.Center direction="column">
                        <Header title="Start creating now!">
                            <h5>Waiting for cool Trality updates? Join our monthly mailing list and stay up to date 💙</h5>
                        </Header>
                        <Button dark>Signup</Button>
                    </Layout.Center>
                </Layout.Banner>
            </Layout.Section>
        </Layout.Page>
    );*/
};
