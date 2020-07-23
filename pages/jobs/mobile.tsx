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
                                title: 'Senior Mobile Developer (Full-time)',
                            },
                        ]}
                    />
                    <Header title="Senior Mobile Developer (Full-time)">
                        <p>We’re looking for a talented mobile engineer, who will take the lead in developing Trality’s mobile app (iOS+Swift).</p>
                        <h3>What you will do everyday</h3>
                        <>
                            <ul>
                                <li>Build a mobile app for the Trality platform from scratch using native iOS Swift and SwiftUI.</li>
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
                                <li>You have worked with Swift or Objective C before and published one or more apps to the Apple App Store. </li>
                                <li>You know your way around Git, experience with GraphQL is a plus</li>
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
                                    38,5h full-time job with a possibility to work remotely or at a modern desk in the most livable city in the word –
                                    Vienna
                                </li>
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
