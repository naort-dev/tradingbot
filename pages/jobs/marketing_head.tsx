import { Layout } from '@containers';
import { Header, Link, Breadcrumb } from '@components';

export default () => {
    return (
        <Layout.Page title="jobs-marketing_head">
            <Layout.Section fullHeight noPadding id="jobs-header">
                <Layout.Center direction="column">
                    <Breadcrumb
                        crumbs={[
                            {
                                title: 'Jobs',
                                link: '/jobs',
                            },
                            {
                                title: 'Head of Growth Marketing (Full-time)',
                            },
                        ]}
                    />
                    <Header title="Head of Growth Marketing (Full-time)">
                        <p>
                            <i><b>
                                Once upon a time, two guys met and wondered why trading bots are only accessible to big banks & hedge funds and why
                                75% of private traders lose money when they actively trade and compete against machines that are better at everything
                                they do. This wonder led once to an idea which led to a vision, which led to the foundation of Trality, which led to a
                                current team of 6, to a successful Beta phase with over 1000 users and in the end all this will hopefully lead to you!
                                You are the missing link that fuels our growth ambitions of 100x over the next 2 years!
                                </b></i>
                        </p>
                        <p>
                            We’re looking for a Head of Growth Marketing with a track record of driving growth in a fast-paced B2C startup. Being in
                            charge of our online marketing (paid and organic) as well as our communications strategy, you will be able to build your
                            own team of Jr. Marketing Managers and freelancers in order to assist you in fuelling our growth ambitions.
                        </p>
                        <h3>Are you getting excited when reading this?</h3>
                        <>
                            <ul>
                                <li>
                                    Mapping out our growth and communications strategy and lead its implementation in order to build brand awareness
                                    and user acquisition
                                </li>

                                <li>
                                    Managing and further developing our traction channels (mostly online) and identifying new opportunities for
                                    organic and paid growth. Channels include but are not limited to: paid search and paid social, SEO and ASO,
                                    content marketing, blog/influencer marketing, affiliate and referral programs, direct marketing and offline events
                                </li>
                                <li>
                                    Tracking and analyzing all traction channels and their effectiveness in order to constantly improve our marketing
                                    measures and report key KPIs to the CEO
                                </li>
                                <li>Owning our strategic content planning, our PR strategy and our active community management</li>
                            </ul>
                        </>
                        <h3>Do you have what it takes?</h3>
                        <>
                            <ul>
                                <li>You have a strong passion for online marketing and communication in all its facets</li>
                                <li>You can relate to our product and portrait an interest in FinTech, possibly even in trading or crypto</li>
                                <li>You have 6+ years of B2C performance marketing experience in a fast-growth company, ideally even in FinTech</li>
                                <li>You have a profound understanding of different online media platforms and ad tech</li>
                                <li>
                                    You are a data-driven personality with the ability to analyze data and pursue a performance-driven marketing
                                    strategy
                                </li>
                                <li>You are creative and understand how to communicate effectively with the different users of our marketplace</li>
                                <li>
                                    You have a very good command of English (spoken and written language) and are ideally able to converse with your
                                    team in German
                                </li>
                                <li>You are hands-on, want to be part of a start-up success story and thrive in a fast-paced environment</li>
                                <li>You work independently, like to take the initiative and have a leadership personality</li>
                                <li>You don’t mind having a beer with us on Friday afternoons after work is done</li>
                            </ul>
                        </>
                        <h3>Do you want this?</h3>
                        <>
                            <ul>
                                <li>38,5h full-time job, working in our lofty office in the most livable city in the word – Vienna</li>
                                <li>An extremely flexible working environment with a lot of creative freedom in further developing of our startup</li>
                                <li>The newest technical gear to bring out the best in you</li>
                                <li>
                                    A yearly learning allowance to pay for relevant trainings and certificates in order to help you grow with the
                                    company
                                </li>
                                <li>
                                    A startup atmosphere and team events throughout the year to foster the company spirit and make you feel right at
                                    home
                                </li>
                                <li>Free snacks, great coffee and mate tea to keep you fueled and happy throughout the work day</li>
                                <li>
                                    A minimum salary of 3.600€ (per month, paid 14 times), with a possibility to negotiate an overpay based on your
                                    qualification as well as a significant performance-based compensation!
                                </li>
                                <li>
                                    A possibility to negotiate an equity-based compensation, the worth of which in a few years is not only the
                                    billion-dollar question, it depends on you!
                                </li>
                            </ul>
                        </>
                        <h3>Sounds interesting?</h3>
                        <p>
                            To apply, drop us an email including a CV and a 1-page cover letter to <b>jobs [at] trality [dot] com</b>. We can’t wait
                            to hear about your ambitions and experience to grow Trality with us!
                        </p>
                        <p>
                            Application deadline: <b>12.7.2020!</b> However, applications will be reviewed on a rolling basis.
                        </p>
                    </Header>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};
