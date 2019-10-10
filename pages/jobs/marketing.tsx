import { Layout } from '@containers';
import { Header, Link, Breadcrumb } from '@components';

export default () => {
    return (
        <Layout.Page title="jobs-marketing">
            <Layout.Section fullHeight noPadding id="jobs-header">
                <Layout.Center direction="column">
                    <Breadcrumb
                        crumbs={[
                            {
                                title: 'Jobs',
                                link: '/jobs',
                            },
                            {
                                title: 'Manager Marketing & Communication (Part-time)',
                            },
                        ]}
                    />
                    <Header title="Manager Marketing & Communication (Part-time)">
                        <p>
                            We’re looking for talented marketing or PR students, who work on marketing (Social, SEO and Brand) as well as
                            communication and PR directly together with the CEO of Trality. If you would love to help us spread the word on our
                            startup and be responsible for driving awareness and user growth through creativity and data-driven marketing methods, you
                            are the perfect match for this position!
                        </p>
                        <h3>What you will do everyday</h3>
                        <>
                            <ul>
                                <li>Work on growth marketing and communications</li>

                                <li>Take control of Trality’s marketing channels and develop ideas to grow awareness and user base</li>
                                <li>Write Press Releases as well as marketing content, based on news, statistics and more</li>
                                <li>Liaise directly with journalists in Austria as well as globally</li>
                            </ul>
                        </>
                        <h3>What you bring to the table</h3>
                        <>
                            <ul>
                                <li>You have a strong passion for PR, marketing and content writing</li>
                                <li>You are a Business, Communications, IT, Media or PR student (or similar)</li>
                                <li>
                                    You have a very good command of English (spoken and written language) and are at least able to converse with your
                                    team in German
                                </li>
                                <li>You are interested in start-ups and entrepreneurship</li>
                                <li>You work independently and like to take the initiative</li>
                                <li>You don’t mind having a beer with us on Friday afternoons after work is done</li>
                            </ul>
                        </>
                        <h3>What you'll get/our offer</h3>
                        <>
                            <ul>
                                <li>
                                    10h part-time job with a possibility to work remotely or at a modern desk in the most livable city in the word –
                                    Vienna
                                </li>
                                <li>An extremely flexible working environment with a lot of creative freedom in further developing of our startup</li>
                                <li>A salary of 446,81€ (per month, paid 14 times), which equals Austrian “Geringfügigkeit”</li>
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
