import { Layout } from '@containers';
import { Header } from '@components';

export default () => {
    return (
        <Layout.Page title="resources-faq">
            <Layout.Section id="faq">
                <Layout.Center>
                    <Header title="FAQ">
                        <Layout.Collapsible title="What are trading bots anyways?">
                            Trading bots are a set of algorithms that control automated buying and selling of assets. Doing so they exploit price
                            volatility, which is particularly high in crypto assets.
                        </Layout.Collapsible>

                        <Layout.Collapsible title="Where do I need to deposit my crypto assets to start trading?">
                            All you need to do is deposit funds on your favorite crypto exchange and connect Trality via its official API. For more
                            info on the first steps, please visit our documentation.{' '}
                        </Layout.Collapsible>

                        <Layout.Collapsible title="Which exchanges do you support?">
                            We currently support Binance and more exchanges will follow.
                        </Layout.Collapsible>

                        <Layout.Collapsible title="How do you compare yourselves to competitors such as Crypto-hopper or 3-Commas?">
                            These and other solutions offer overly-simplified rule-based bot solutions, which provide the user only with a fraction of
                            the possibilities that algorithmic trading offers.
                        </Layout.Collapsible>

                        <Layout.Collapsible title="How do you guarantee that the bots on the marketplace aren’t used for scamming people?">
                            We have a state-of-the-art screening process in place, which will ensure only trustworthy bots to be published on the Bot
                            Marketplace. This includes a set of risk/return criteria as well as extensive scenario testing of each bot.
                        </Layout.Collapsible>

                        <Layout.Collapsible title="How do you guarantee that my algorithm remains safe and unseen by others?">
                            All bots are completely sandboxed and run individually. Your followers will never directly touch your bot or the
                            underlying code/algorithm. Instead, Trality only mirrors signals and portfolio distributions depending on the
                            circumstances of the individual follower. Logging, debugging and other functionality is not available for followers.{' '}
                        </Layout.Collapsible>
                    </Header>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};
