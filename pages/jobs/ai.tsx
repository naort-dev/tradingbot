import { Layout } from '@containers';
import { Header, Link, Breadcrumb } from '@components';

export default () => {
    return (
        <Layout.Page title="jobs-ai">
            <Layout.Section fullHeight noPadding id="jobs-header">
                <Layout.Center direction="column">
                    <Breadcrumb
                        crumbs={[
                            {
                                title: 'Jobs',
                                link: '/jobs',
                            },
                            {
                                title: 'Junior AI-Engineer (Full-time)',
                            },
                        ]}
                    />
                    <Header title="Junior AI-Engineer (Full-time)">
                        <p>
                            We’re looking for talented data scientists who would like to work on building a state-of-the art machine learning (ML)
                            project from the ground up together with an experienced team at Trality. If deep diving through massive amounts of data as
                            well as designing and evaluating ML models is your thing, you'll fit right into our team!
                        </p>
                        <h3>What you will do everyday</h3>
                        <>
                            <ul>
                                <li>
                                    Design, implement and evaluate ML-models to predict large amounts of historical financial data using Python and
                                    Tensorflow or PyTorch.
                                </li>
                                <li>
                                    Research and implement a generic supervised learning training and evaluation pipeline to improve and measure
                                    prediction accuracy of existing and newly designed ML-models
                                </li>
                                <li>Implement prototypical reinforcement learning agents to complete autonomous trading tasks</li>
                                <li>
                                    Build a data processing pipeline for retreival, cleaning and augmentation that can be used in an offline-fashion
                                    for trainings that's highly generic and reusable and can be run on AWS/GCP
                                </li>
                                <li>Work together with our engineers to conceptionally design and implement the production inference pipeline</li>
                                <li>
                                    Investigate production/performance issues and scalability bottlenecks in your models in order to improve
                                    production inference
                                </li>
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
                                <li>Writing python code is a piece of cake for you, and you feel comfortable using Numpy, Pandas, Scipy etc.</li>
                                <li>You've worked on a Machine Learning project before and know your way around Tensorflow or Pytorch</li>
                                <li>
                                    You know your way around a console and are not afraid to setup cloud-based infrastructure for e.g. parallelized
                                    ML-model training on AWS/GCP
                                </li>
                                <li>You hold at least a bachelor's degree in computer science or equivalent</li>
                                <li>You can talk to your team (conversational proof) in English</li>
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
                                We will pay for all the relevant training or certificates to prepare you for bigger challenges and help you to grow
                                with the company.
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
                        <p>
                            Application deadline: <b>17.6.2020</b> but applications will be evaluated on a rolling basis!
                        </p>
                    </Header>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};
