import { Layout } from '@containers';
import { Header, Link, Breadcrumb } from '@components';

export default () => {
    return (
        <Layout.Page title="jobs-mobile">
            <Layout.Section fullHeight noPadding id="jobs-header">
                <Layout.Center direction="column">
                    <Breadcrumb
                        crumbs={[
                            {
                                title: 'Jobs',
                                link: '/jobs',
                            },
                            {
                                title: 'Senior/Junior Mobile Developer (Part-/Full-time)',
                            },
                        ]}
                    />
                    <Header title="Senior/Junior Mobile Developer (Part-/Full-time)">
                        <p>
                            We’re looking for a talented mobile engineer, who is willing to join the Trality team on a short-term contract (3-4 months
                            with a possibility of extension) in order to develop the platform’s mobile app.
                        </p>
                        <h3>What you will do everyday</h3>
                        <>
                            <ul>
                                <li>Build a mobile app for the Trality platform from scratch using React Native</li>

                                <li>
                                    Collaborate with product managers, designers, and software engineers to ensure our design vision is maintained,
                                    final markup is standards compliant, and UI deliverables are completed on time
                                </li>
                                <li>Work with the real time feedback from our users (external and internal) to make the products better</li>
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
                                <li>You have at least 3 years of experience in mobile development</li>
                                <li>
                                    You have worked with React Native (and/or ReactJS) and you know your way around Git, moreover, experience with
                                    e.g. GraphQL is a plus
                                </li>
                                <li>In-depth knowledge of modular, reusable and intelligent API design is also nice to have</li>
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
                                    38,5h full-time or 20h part-time job with a possibility to work remotely or at a modern desk in the most livable
                                    city in the word – Vienna
                                </li>
                                <li>A short-term contract length of 3-4 months, with the possibility of extension at the end of the employment</li>
                                <li>
                                    An extremely flexible working environment with a lot of creative freedom in the further development of our startup
                                </li>
                                <li>A competitive remuneration based on your qualification, education and experience</li>
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
