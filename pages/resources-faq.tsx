import { Layout } from '@containers';
import { Header } from '@components';

export default () => {
    return (
        <Layout.Page title="resources-faq">
            <Layout.Section fullHeight noPadding id="overview">
                <Layout.Center>
                    <Header title="Faqs"></Header>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="faq">
                <Layout.Center>
                    <Header title="FAQ">
                        <Layout.Collapsible title="Where do i need to deposit money/how do i start trading?">
                            All you need is an account on your favorite crypto exchange as well as API keys, which allow access to it. We currently
                            support Binance and more exchanges will follow. For more info on connecting exchanges and APIs, please visit our wiki.
                        </Layout.Collapsible>
                        <Layout.Collapsible title="How do you guarantee that the bots on the marketplace arent used for scamming people?">
                            We have a state-of-the-art screening process in place, which will ensure only trustworthy bots to be published on the Bot
                            Marketplace. This includes a set of risk/return criteria as well as extensive scenario testing of each bot.
                        </Layout.Collapsible>
                        <Layout.Collapsible title="How do you guarantee that my algorithm remains safe and unseen by others?">
                            All bots are completely sandboxed and run individually. Your followers will never directly touch your bot or the
                            underlying code/algorithm. Instead, Trality only mirrors signals and portfolio distributions depending on the
                            circumstances of the individual follower. Logging, debugging and other functionality is not available for followers.
                        </Layout.Collapsible>
                    </Header>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};
