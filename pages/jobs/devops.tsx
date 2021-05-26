import { Layout } from '@containers';
import { Header, Link, Breadcrumb } from '@components';
import { MetaTags, Page } from '../../util/metaTags';

const Devops = () => {
    return (
        <Layout.Page title="jobs-devops">
            <MetaTags page={Page.JobDevops} />
            <Layout.Section fullHeight noPadding id="jobs-header">
                <Layout.Center direction="column">
                    <Breadcrumb
                        crumbs={[
                            {
                                title: 'Jobs',
                                link: '/jobs',
                            },
                            {
                                title: 'DevOps Engineer (Full-time)',
                            },
                        ]}
                    />
                    <Header title="DevOps Engineer (Full-time)">
                        <p>
                            We’re looking for talented DevOps engineers who implement our continuous integration in order to ensure stable and
                            reliable releases on our platform and thereby ultimately empowering the complex trading-bots that run on it. If developing
                            and maintaining a highly scalable container-based microservice infrastructure and improving the availability and
                            resilience of our trading services is your thing, you’ll be welcomed with open arms at Trality. Your motivation and
                            experience in building, improving and maintaining a scalable infrastructure required by our bots will be valued deeply as
                            well.
                        </p>
                        <h3>What you will do everyday</h3>
                        <ul>
                            <li>Development of our tools and improving systems and server setups to guarantee stability and security</li>
                            <li>
                                Provide the infrastructure needed to maintain multiple integration environments, ensuring each environment is
                                consistently set up, configured, and available
                            </li>

                            <li>Monitoring and upgrading our systems and server setups to guarantee stability and security</li>
                            <li>Trace complex build problems, release issues, and environmental issues</li>
                            <li>Implementing all of your infrastructure changes using Infrastructure-As-Code</li>
                            <li>
                                Deep dive and analyze database logs and configurations, always keeping an eye on potential improvements regarding
                                security and speed
                            </li>
                            <li>Enthuse the Trality team with your ideas and suggestions for solutions, libraries and technologies</li>
                            <li>
                                Take responsibility not just for your own code, but for the entire product, always refine what’s under the hood of our
                                platform
                            </li>
                        </ul>
                        <h3>What you bring to the table</h3>
                        <ul>
                            <li>
                                You have at least 3 (5 preferred) years of experience with containerization orchestration technologies, i.e. Docker
                                and Kubernetes.
                            </li>
                            <li>You portrait excellent knowledge of AWS</li>
                            <li>You have working experience with a wide range of databases, optimally including MongoDb, Postgres and Redis</li>
                            <li>You know your way around popular message brokers, such as Kafka (preferred) and RabbitMq</li>
                            <li>You have experience using infrastructure as code to setup and maintain configurations (Terraform preferred)</li>

                            <li>You have great ability to troubleshoot complex technical problems.</li>
                            <li>You can talk to your team (conversational proof) in English</li>
                            <li>
                                You work independently and like to take the initiative, you have experience with agile software development methods
                            </li>
                            <li>
                                You have an ability to balance business needs, a sense of urgency, and to ship high quality and pragmatic solutions
                            </li>
                            <li>
                                You have experience with cross-functional teams and managing relationships with business or operations stakeholders
                            </li>
                            <li>You don’t mind having a beer with us on Friday afternoons after work is done</li>
                        </ul>

                        <h3>Nice-to-haves (not mandatory)</h3>
                        <>
                            <ul>
                                <li>Previous working experience with continuous integration/delivery pipelines</li>
                                <li>Familiarity with crypto and/or fintech domains</li>
                            </ul>
                        </>

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
                            </ul>
                        </>
                        <h3>Sounds interesting?</h3>
                        <p>
                            To apply, drop us an email including a CV and a message stating your motivation to work with us to{' '}
                            <b>jobs [at] trality [dot] com</b>. We can’t wait to hear about your ambitions and experience to grow Trality with us!
                        </p>
                        <p>
                            Application deadline: <b>15.06.2020!</b> However, applications will be reviewed on a rolling basis.
                        </p>
                    </Header>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};

export default Devops;
