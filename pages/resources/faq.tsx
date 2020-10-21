import { Layout } from '@containers';
import { Header, Link } from '@components';

const Faq = () => {
    return (
        <Layout.Page title="resources-faq">
            <Layout.Section id="faq">
                <Layout.Center>
                    <Header title="FAQ">
                        <Layout.Collapsible title="What are trading bots?">
                            Trading bots are a set of algorithms that control automated buying and selling of assets. Doing so they exploit price
                            volatility, which is particularly high in crypto assets.
                        </Layout.Collapsible>

                        <Layout.Collapsible title="Where do I need to deposit my crypto assets to start trading?">
                            All you need to do is deposit funds on your favorite crypto exchange and connect Trality via its official API. For more
                            info on the first steps, please visit our{' '}
                            <a href="https://docs.trality.com/general/getting-started" target="_blank">
                                documentation
                            </a>
                            .
                        </Layout.Collapsible>

                        <Layout.Collapsible title="Which exchanges do you support?">
                            We currently support Binance and more exchanges will follow.
                        </Layout.Collapsible>

                        <Layout.Collapsible title="How do I start creating a trading bot?">
                            At Trality, you currently have two options to create trading bots:
                            <ul>
                                <li>Your create bots using code using our Trality Code Editor</li>
                                <li>Your build bots using rules using our Trality Rule Builder</li>
                            </ul>
                            The best starting point to dig into our tools is always our{' '}
                            <a href="https://docs.trality.com" target="_blank">
                                documentation
                            </a>
                            . Whether you use code or not, you can start creating or building your bots directly in the browser with no additional
                            software you need to download.
                        </Layout.Collapsible>

                        <Layout.Collapsible title="What coding language do you support?">
                            We currently support Python and are working to support even more languages in the future.
                        </Layout.Collapsible>

                        <Layout.Collapsible title="Where do trading bots run?">
                            You have no need to setup your own servers for using your trading bots. All your bots can be run safely and reliably on
                            Trality infrastructure, and can be monitored by you day and night.
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

                        <Layout.Collapsible title="How much does it cost?">
                            We offer a free plan for you to create and backtest your strategies. Once you're satisfied with your strategy and want to
                            trade with real money, you can select one of our plans starting at 9,99€. See our{' '}
                            <Link href="/pricing">pricing page</Link> for more information.
                        </Layout.Collapsible>
                    </Header>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};

export default Faq;
