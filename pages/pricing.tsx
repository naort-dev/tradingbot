import { Layout, Pricing } from '@containers';
import { Header, Button } from '@components';

export default () => {
    return (
        <Layout.Page title="pricing">
            <Layout.Section fullHeight noPadding id="pricing-overview">
                <Layout.Center>
                    <Header title="Pricing">
                        <Pricing.Container>
                            <Pricing.Item>
                                <Pricing.Header>Beginner</Pricing.Header>
                                <Pricing.Description title="Max. portfolio size">2 000 €</Pricing.Description>
                                <Pricing.Description title="Exp. relative size of segment">30%</Pricing.Description>
                                <Pricing.Description title="Max. portfolio size">2 000 €</Pricing.Description>
                                <Button>Choose</Button>
                            </Pricing.Item>
                            <Pricing.Item>
                                <Pricing.Header>Beginner</Pricing.Header>
                                <Pricing.Description title="Max. portfolio size">2 000 €</Pricing.Description>
                                <Pricing.Description title="Exp. relative size of segment">30%</Pricing.Description>
                                <Pricing.Description title="Max. portfolio size">2 000 €</Pricing.Description>
                                <Button>Choose</Button>
                            </Pricing.Item>
                            <Pricing.Item>
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
        </Layout.Page>
    );
};
