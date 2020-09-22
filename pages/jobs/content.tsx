import { Layout } from '@containers';
import { Header, Link, Breadcrumb } from '@components';

export default () => {
    return (
        <Layout.Page title="jobs-content">
            <Layout.Section fullHeight noPadding id="jobs-header">
                <Layout.Center direction="column">
                    <Breadcrumb
                        crumbs={[
                            {
                                title: 'Jobs',
                                link: '/jobs',
                            },
                            {
                                title: 'Copywriter & Content Specialist (Freelance/Full-time)',
                            },
                        ]}
                    />
                    <Header title="Copywriter & Content Specialist (Freelance/Full-time)">
                        <p>
                            Are you a true wordsmith who can write content for both users and search engines? Someone who can boil down and
                            communicate a complicated idea, simply and effectively? Can you effortlessly write everything from website copy to blogs,
                            email newsletters, sales letters, and social media updates? <b>If the answers to these questions is YES, then we have an exciting opportunity for you!</b>
                        </p>
                        <p>
                            At Trality, our vision is to become <i>the</i> platform for anyone to create and invest through automated trading bots!
                            That's why we build the first marketplace for trading bots that is available for traders of all levels of experience. We
                            attract the best bot creators by offering the most advanced tools for bot creation and enable followers to easily invest
                            in bots created on the platform.
                        </p>
                        <p>
                            We’re seeking a creative, ambitious, self-motivated personality who can balance strategic thinking with written
                            execution. As a key member of Trality’s marketing team, you will create engaging content that increases brand awareness
                            and attracts new business. Your work will have a direct impact on positioning Trality as a thought leader in the crypto
                            world.
                        </p>
                        <h3>Are you getting excited when reading this?</h3>
                        <>
                            <ul>
                                <li>
                                    Driving our go-to-market strategy (mainly online) and launch of new product features by writing creative and
                                    impactful copy. Marketing channels include but are not limited to: paid search and paid social, SEO and ASO,
                                    blogging, influencer outreach and offline events
                                </li>

                                <li>Managing the content calendar (blogs, customer stories, case studies, etc.) to support marketing and PR needs</li>
                                <li>Writing and managing content on our website, ensuring it follows style and UX guidelines</li>
                                <li>Optimizing content performance with guidance from our marketing team</li>
                                <li>Conducting in-depth research on industry-related topics in order to develop original content</li>
                                <li>
                                    Ensure proper content architecture on our blog and that the content aligns with search behavior and SEO best
                                    practices
                                </li>
                                <li>Conduct detailed content audits and make content strategy recommendations</li>
                            </ul>
                        </>
                        <h3>Do you have what it takes?</h3>
                        <>
                            <ul>
                                <li>
                                    3+ years of experience creating compelling and engaging content, preferably in the tech, finance, or crypto space
                                </li>
                                <li>
                                    You have a very good command of English (spoken and written language), ideally mother-tongue
                                </li>
                                <li>Ability to write in a range of voices and styles for a variety of diverse audiences</li>
                                <li>You work independently and like to take the initiative</li>
                                <li>You are hands-on, want to be part of a start-up success story and thrive in a fast-paced environment</li>
                                <li>You don’t mind having a beer with us on Friday afternoons after work is done</li>
                            </ul>
                        </>
                        <h3>Do you have even more (plus, but not necessary):</h3>
                        <>
                            <ul>
                                <li> In-depth knowledge of the crypto industry trends is a BIG plus </li>
                                <li> Bachelor's degree in language, literature or marketing </li>
                                <li> A portfolio of published articles </li>
                                <li> Experience managing an editorial calendar </li>
                                <li> Intermediate to advanced SEO knowledge </li>
                            </ul>
                        </>
                        <h3>Do you want this?</h3>
                        <>
                            <ul>
                                <li>38,5h full-time job, working in our lofty office in the most livable city in the word – Vienna</li>
                                <li>For exceptional candidates the possibility of a freelance arrangement will be considered</li>
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
                            Application deadline: <b>27.09.2020!</b> However, applications will be reviewed on a rolling basis.
                        </p>
                    </Header>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};
