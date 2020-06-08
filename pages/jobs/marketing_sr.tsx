import { Layout } from '@containers';
import { Header, Link, Breadcrumb } from '@components';

export default () => {
    return (
        <Layout.Page title="jobs-marketing_sr">
            <Layout.Section fullHeight noPadding id="jobs-header">
                <Layout.Center direction="column">
                    <Breadcrumb
                        crumbs={[
                            {
                                title: 'Jobs',
                                link: '/jobs',
                            },
                            {
                                title: 'Sr. Manager Growth Marketing & Communication (Full-time)',
                            },
                        ]}
                    />
                    <Header title="Sr. Manager Growth Marketing & Communication (Full-time)">
                        <p>
                            We’re looking for an experienced, creative and performance-oriented Sr. Manager to lead our growth marketing and
                            communications efforts. Being the one in charge of our online marketing (paid and organic) as well as communications/PR,
                            you will work together with the CEO of Trality as well as existing freelancers and possible jr. managers in order to fuel
                            our growth ambitions. If you have a strong background in online marketing and love to take on the challenge of spreading
                            the message about our startup, we would love to hear from you!
                        </p>
                        <h3>What you will do everyday</h3>
                        <>
                            <ul>
                                <li>Work on growth marketing and communications</li>

                                <li>
                                    Take control of Trality’s existing and future traction channels (mostly online) and develop ideas to grow
                                    awareness and user growth. These channels include but are not limited to: Community building, SEA/paid social,
                                    SEO/ASO, content marketing, targeting blogs/influencers, affiliate and referral programs, business development,
                                    direct marketing, offline events
                                </li>
                                <li>
                                    Track and analyze all traction channels and their effectiveness in order to constantly improve and expand our
                                    marketing measures
                                </li>
                                <li>Write press releases as well as marketing content such as blog articles, based on news, statistics and more</li>
                                <li>Liaise directly with journalists in Austria as well as globally</li>
                            </ul>
                        </>
                        <h3>What you bring to the table</h3>
                        <>
                            <ul>
                                <li>You have a strong passion for online marketing and communication in all its facets</li>
                                <li>
                                    You portrait 3+ years of relevant professional experience, with an emphasis on online marketing, possibly even in
                                    FinTech
                                </li>
                                <li>You can relate to our product and portrait an interest in FinTech, possibly even in trading or crypto</li>
                                <li>
                                    You have a very good command of English (spoken and written language) and are ideally able to converse with your
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
                                <li>38,5h full-time job, working in our brand new office in the most livable city in the word – Vienna</li>
                                <li>An extremely flexible working environment with a lot of creative freedom in further developing of our startup</li>
                                <li>The newest technical gear to bring out the best in you</li>
                                <li>
                                    A yearly learning allowance to pay for relevant trainings and certificates in order to help you grow with the
                                    company
                                </li>
                                <li>Team events throughout the year to foster the company spirit and make you feel right at home</li>
                                <li>Free snacks, geat coffee and mate to keep you fueled happy through the work day</li>
                                <li>The technical equipment you need to bring out the best in you</li>
                                <li>We will pay for all the relevant training or certificates to prepare you for bigger challenges and help you to grow
                                with the company</li>
                                <li>A possibility to negotiate an equity-based compensation</li>
                                <li>
                                    Austrian labor law requires us to state the minimum collective bargaining agreement salary for this role, which is
                                    3.048€ (per month, paid 14 times).{' '}
                                    <b>However, we are going to overpay you significantly based qualification, education and experience</b>
                                </li>
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
