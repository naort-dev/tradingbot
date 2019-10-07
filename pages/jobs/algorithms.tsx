import { Layout } from '@containers';
import { Header, Link, Breadcrumb } from '@components';

export default () => {
    return (
        <Layout.Page title="jobs-algos">
            <Layout.Section fullHeight noPadding id="jobs-header">
                <Layout.Center direction="column">
                    <Breadcrumb
                        crumbs={[
                            {
                                title: 'Jobs',
                                link: '/jobs',
                            },
                            {
                                title: 'Manager Algorithmic Trading Strategies (Part-time)',
                            },
                        ]}
                    />
                    <Header title="Manager Algorithmic Trading Strategies (Part-time)">
                        <p>
                            We’re looking for talented quants, who manage the most complex algorithms in order to constantly improve the performance
                            of our trading bots. This role is responsible for the development, maintenance and constant improvement of the trading
                            bots that are being offered as predefined solutions to users on our platform. If you love to dive deep into large time
                            series of crypto assets and apply state-of-the-art technical analysis in order to boost trading returns, you will fit
                            right in at Trality.
                        </p>
                        <h3>What you will do everyday</h3>
                        <>
                            <ul>
                                <li>Explore large datasets of currency prices, analyze underlying patterns and develop scenarios</li>

                                <li>Code trade signals and algorithms in Trality’s python-based bot creation module</li>
                                <li>Manage existing algorithms and improve profitability through quantitative modeling</li>
                                <li>Work with the real time feedback from our users (external and internal) to make our trading bots better</li>
                                <li>Enthuse the Trality team with your ideas and suggestions for solutions, libraries and technologies</li>
                            </ul>
                        </>
                        <h3>What you bring to the table</h3>
                        <>
                            <ul>
                                <li>
                                    You have a deep understanding of advanced mathematics: calculus, stochastics, linear algebra, statistics and
                                    optimization. Experience with machine learning is a plus
                                </li>
                                <li>You have experience analyzing datasets or developing automation tools in Python and/or C++</li>
                                <li>
                                    You have an ability to quantify your insights using probability and statistics – quickly and accurately under
                                    pressure
                                </li>
                                <li>You have at least 1 year of experience in the finance sector, ideally in quantitative trading</li>
                                <li>
                                    You hold a bachelor’s degree in Quantitative Finance, Financial Mathematics, Statistics, Computer Science,
                                    Mathematics, Physics OR equivalent work experience
                                </li>
                                <li>You can talk to your team (conversational proof) in English</li>
                                <li>You work independently and like to take the initiative</li>
                                <li>You don’t mind having a beer with us on Friday afternoons after work is done</li>
                            </ul>
                        </>
                        <h3>What you'll get/our offer</h3>
                        <>
                            <ul>
                                <li>20h part-time job with a possibility to work remotely or at a modern desk</li>
                                <li>A full-time position will become available after a period of 4-6 months</li>
                                <li>An extremely flexible working environment with a lot of creative freedom in further developing of our startup</li>
                                <li>
                                    A salary of 1000€ (per month, paid 14 times), with the possibility to negotiate overpayment based on
                                    qualification, education and experience
                                </li>
                                <li>A flexible employment length, but minimum 4 months</li>
                            </ul>
                        </>
                        <h3>Sounds interesting?</h3>
                        <p>
                            To apply, drop us an email including a CV and a 1-page cover letter to <b>jobs [at] trality [dot] com</b>.
                        </p>
                    </Header>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};
