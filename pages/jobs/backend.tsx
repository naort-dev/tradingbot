import { Layout } from '@containers';
import { Header, Link, Breadcrumb } from '@components';

export default () => {
    return (
        <Layout.Page title="jobs-backend">
            <Layout.Section fullHeight noPadding id="jobs-header">
                <Layout.Center direction="column">
                    <Breadcrumb
                        crumbs={[
                            {
                                title: 'Jobs',
                                link: '/jobs',
                            },
                            {
                                title: 'Backend Developer (Full-time)',
                            },
                        ]}
                    />
                    <Header title="Backend Developer (Full-time)">
                        <p>
                            We’re looking for talented backend engineers who build state-of-the-art systems that empower the complex trading-bots
                            running on our platform. If building fast, scalable systems based on Kubernetes, and deep diving through frameworks to
                            figure out how they work is your thing, you’ll be welcomed with open arms at Trality. Interest or experience in
                            machine-learning or data-analysis will be valued deeply as well.
                        </p>
                        <h3>What you will do everyday</h3>
                        <ul>
                            <li>
                                Design and build well-designed, efficient, scalable systems that will soon be used by millions of people across the
                                globe
                            </li>
                            <li>
                                Be proactive in finding ways to improve the performance, architecture, and development processes for a
                                high-performance computation system
                            </li>
                            <li>
                                Investigate production/performance issues and scalability bottlenecks to determine root cause and implement solutions
                            </li>
                            <li>
                                Investigate performance issues/scalability bottlenecks, existing queries and/or write new queries with performance
                                optimization in mind
                            </li>
                            <li>
                                Be responsible for developing predictive systems, creating efficient algorithms, and improving data quality using
                                continuous testing
                            </li>
                            <li>Enthuse the Trality team with your ideas and suggestions for solutions, libraries and technologies</li>
                            <li>
                                Take responsibility not just for your own code, but for the entire product, always refine what’s under the hood of our
                                platform
                            </li>
                        </ul>
                        <h3>What you bring to the table</h3>
                        <ul>
                            <li>You have at least 3 years of experience with significant consumer-facing websites or services</li>
                            <li>You have worked closely with and monitored Kubernetes clusters to develop complex microservices-architectures</li>
                            <li>
                                You bring along full-cycle code development experience (oneof Typescript, Go, Python) including debugging and
                                performance analysis
                            </li>
                            <li>
                                Working with AWS, Elasticsearch, MongoDB and/or Redis caches as well as analyzing the efficiency and performance of
                                databases is right along your alley
                            </li>
                            <li>You have worked with real time web applications and event driven architectures like Nodejs </li>
                            <li>In-depth knowledge of modular, reusable and intelligent API design is a plus</li>
                            <li>You can talk to your team (conversational proof) in English</li>
                            <li>You work independently and like to take the initiative</li>
                            <li>
                                You have an ability to balance business needs, a sense of urgency, and to ship high quality and pragmatic solutions
                            </li>
                            <li>
                                You have experience with cross-functional teams and managing relationships with business or operations stakeholders
                            </li>
                            <li>You don’t mind having a beer with us on Friday afternoons after work is done</li>
                        </ul>
                        <h3>What you'll get/our offer</h3>
                        <>
                            <ul>
                                <li>
                                    38,5h full-time job with a possibility to work a modern desk in the most livable city in the word – Vienna - in
                                    our brand new office
                                </li>
                                <li>
                                    An extremely flexible working environment with a lot of creative freedom in the further development of our startup
                                </li>
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
                                <li>A possibility to negotiate an equity-based compensation</li>
                                <li>
                                    Austrian labor law requires us to state the minimum salary for this role, which is 3600€ (per month, paid 14
                                    times). <u>However, we are willing to overpay you significantly based qualification, education and experience</u>
                                </li>
                            </ul>
                        </>
                        <h3>Sounds interesting?</h3>
                        <p>
                            To apply, drop us an email including a CV and a 1-page cover letter to <b>jobs [at] trality [dot] com</b>. We can’t wait
                            to hear about your ambitions and experience to grow Trality with us!
                        </p>
                        
                    </Header>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};
