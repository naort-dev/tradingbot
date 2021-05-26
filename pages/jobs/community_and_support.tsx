import { Layout } from '@containers';
import { Header, Link, Breadcrumb } from '@components';

const Community = () => {
    return (
        <Layout.Page title="jobs-community">
            <Layout.Section fullHeight noPadding id="jobs-header">
                <Layout.Center direction="column">
                    <Breadcrumb
                        crumbs={[
                            {
                                title: 'Jobs',
                                link: '/jobs',
                            },
                            {
                                title: 'Community & Support Specialist (Internship/Freelance/Part-time)',
                            },
                        ]}
                    />
                    <Header title="Community & Support Specialist (Internship/Freelance/Part-time)">
                        <p>
                            You are looking for the perfect student job, want to earn some freelancing side income or you're searching for the ideal
                            internship to expand your practical experience? We have a great position for you, offering you the perfect combination of
                            high flexibility and freedom with a stimulating and cool startup environment in one of Austria's fastest growing FinTechs!
                        </p>
                        <p>
                            At Trality, our vision is to become <i>the</i> platform for anyone to create and invest through automated trading bots!
                            That's why we're building the first marketplace for trading bots that is available for traders of all levels of
                            experience. We attract the best bot creators by offering the most advanced tools for bot creation and enable followers to
                            easily invest in bots created on the platform.
                        </p>
                        <p>
                            We're seeking an ambitious and self-motivated personality who is not afraid to come into close contact with our
                            rapidly-growing user base, communicating with our most vocal users, helping them with various problems and managing the
                            needs and challenges of our community. As a key member of the Trality team, you would be working closely with the CTO,
                            handling and dissiminating user requests and support queries, ultimately building the perfect bridge between our users and
                            our leadership and dev team.
                        </p>
                        <h3>What you will do everyday</h3>
                        <>
                            <ul>
                                <li>
                                    Be a strong Trality ambassador to our users. Represent our values and communicate clearly about our products and
                                    updates. Thereby grow user engagement in our forums, especially our Discord server
                                </li>
                                <li>Maintain close relationships with our users and ensure their happiness through constant communication</li>
                                <li>
                                    Solve challenges that arise, especially tier 1 and 2 support queries and redirect more complex tier 3 queries to
                                    our support desk{' '}
                                </li>
                            </ul>
                        </>
                        <h3>What you bring to the table</h3>
                        <>
                            <ul>
                                <li>You are an excellent, empathic communicator passionate about crypto, FinTech and tech more generally</li>
                                <li>
                                    You have completed or are currently studying in a technical discipline (University or HTL), including but not
                                    limited to: Computer Science, Data Science, Quantitative Finance, Mathemathics or Physics.
                                </li>
                                <li>You have a very good command of English (spoken and written language), ideally mother-tongue</li>
                                <li>You work independently and like to take the initiative</li>
                                <li>You are hands-on, want to be part of a start-up success story and thrive in a fast-paced environment</li>
                                <li>You don't mind having a beer or beverage of choice with us on Friday afternoons after work is done</li>
                            </ul>
                        </>
                        <h3>What you'll get/our offer</h3>
                        <>
                            <ul>
                                <li>
                                    A 10-20 hrs part-time job, working remotely or, alternatively in our lofty office in the most livable city in the
                                    word – Vienna
                                </li>
                                <li>The possibility of a freelance arrangement is available</li>
                                <li>
                                    A startup atmosphere and team events throughout the year to foster the company spirit and make you feel right at
                                    home
                                </li>
                                <li>Free snacks, great coffee and mate tea to keep you fueled and happy throughout the work day</li>
                                <li>
                                    A possibility of a full-time follow-on job once your studies are finsihed and you are ready to hit the real
                                    working world!
                                </li>
                            </ul>
                        </>
                        <h3>Sounds interesting?</h3>
                        <p>
                            To apply, drop us an email including a CV and a 1/2-page cover letter to <b>jobs [at] trality [dot] com</b>. We can't wait
                            to hear about your ambitions and experience to grow Trality with us!
                        </p>
                        <p>
                            Application deadline: <b>31.05.2020!</b> However, applications will be reviewed on a rolling basis.
                        </p>
                    </Header>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};

export default Community;
