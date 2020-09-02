import { Layout } from '@containers';
import { Header, Link, Breadcrumb } from '@components';

export default () => {
    return (
        <Layout.Page title="jobs-frontend">
            <Layout.Section fullHeight noPadding id="jobs-header">
                <Layout.Center direction="column">
                    <Breadcrumb
                        crumbs={[
                            {
                                title: 'Jobs',
                                link: '/jobs',
                            },
                            {
                                title: 'Senior Frontend Developer (Full-time)',
                            },
                        ]}
                    />
                    <Header title="Senior Frontend Developer (Full-time)">
                        <p>
                            We’re looking for talented frontend engineers with a solid programming background who love to use React in order to raise
                            the bar for state-of-the-art UI and UX. If you are able to think modularly, want to create beautiful trading bot modules,
                            and are able to work on a sophisticated and challenging web platform, you've come to the right place.
                        </p>
                        <h3>What you will do everyday</h3>
                        <>
                            <ul>
                                <li>Use Typescript and React to implement new frontend functionality for our Webapp</li>
                                <li>Investigate production issues pertaining to UI (Sentry) to determine root causes and implement solutions</li>
                                <li>
                                    Improve Typescript-based backend code on your own should the need arise and work toghether with our engineers to
                                    communicate interface requirements
                                </li>
                                <li>
                                    Collaborate with product managers, designers, and software engineers to ensure our design vision is maintained,
                                    final markup is standards compliant, and UI deliverables are completed on time
                                </li>
                                <li>Work with the real time feedback from our users (external and internal) to make our products better</li>
                                <li>Enthuse the Trality team with your ideas and suggestions for solutions, libraries and technologies</li>
                                <li>
                                    Take responsibility not just for your own code, but for the entire product, always refine what’s under the hood of
                                    our platform
                                </li>
                            </ul>
                        </>
                        <h3>What you bring to the table</h3>
                        <>
                            <ul>
                                <li>You have at least 3 years of experience in web development with Typescript and are always happy to learn</li>
                                <li>
                                    You know your way around modern web development stacks (React (Hooks), Webpack, Babel, etc.) and have experience
                                    using GraphQL and the tools around it
                                </li>
                                <li>
                                    You have worked with real time web applications and event driven architectures like Node.js and are not frightened
                                    to investigate issues together with backend engineers
                                </li>
                                <li>You've worked on AWS before and feel comfortable managing Cloudfront deployments using Code (CDK, Terraform)</li>
                                <li>In-depth knowledge of modular, reusable and intelligent API design is a plus</li>
                                <li>
                                    Experience with Webassembly is a <b>big</b> plus
                                </li>
                                <li>You can talk to your team (conversational proof) in English</li>
                                <li>You work independently and like to take the initiative</li>
                                <li>
                                    You have experience with cross-functional teams and managing relationships with business or operations
                                    stakeholders
                                </li>
                                <li>You don’t mind having a beer with us on Friday afternoons after work is done</li>
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
                                <li>The possibility to take the lead role in our frontend team and to become a team leader</li>
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
                                    Austrian labor law requires us to state the minimum salary for this role, which is 3200€ (per month, paid 14
                                    times). <u>However, we are willing to overpay you significantly based qualification, education and experience</u>
                                </li>
                            </ul>
                        </>
                        <h3>Sounds interesting?</h3>
                        <p>
                            To apply, drop us an email including a CV and a 1-page cover letter to <b>jobs [at] trality [dot] com</b>. We can’t wait
                            to hear about your ambitions and experience to grow Trality with us!
                        </p>
                        <p>
                            Application deadline: <b>06.09.2020!</b> However, applications will be reviewed on a rolling basis.
                        </p>
                    </Header>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};
