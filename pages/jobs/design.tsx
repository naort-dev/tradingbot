import { Layout } from '@containers';
import { Header, Link, Breadcrumb } from '@components';
import { MetaTags, Page } from '../../util/metaTags';

const Design = () => {
    return (
        <Layout.Page title="jobs-design">
            <MetaTags page={Page.JobDesign} />
            <Layout.Section fullHeight noPadding id="jobs-header">
                <Layout.Center direction="column">
                    <Breadcrumb
                        crumbs={[
                            {
                                title: 'Jobs',
                                link: '/jobs',
                            },
                            {
                                title: 'Freelance Digital/Graphic Designer (Remote)',
                            },
                        ]}
                    />
                    <Header title="Freelance Digital/Graphic Designer (Remote)">
                        <p>
                            We, at Trality, are looking for a mid-level freelance designer to join our team of professionals, remotely, for 20 hours
                            per week (May be increased to 30 hours per week or more as per the workload and the designer's availability). As this is a
                            remote job, the designer is free to work from his/her desired location for the weekly duration mentioned above.
                        </p>
                        <h3>What you will do everyday</h3>
                        <>
                            <ul>
                                <li>
                                    Create visual assets by following our brand guidelines helping to enhance and maintain Trality's brand identity
                                    across social and web
                                </li>
                                <li>
                                    Create graphics and other visuals for Trality's marketing collateral such as - blog post banners, social media
                                    creatives, paid ads: static & carousel ads, etc.
                                </li>
                                <li>Design desktop & mobile-optimized landing pages for our product and its various modules</li>
                                <li>
                                    Create, edit, and work on 2d animations and promo videos for Trality's ads and social media creatives (Facebook,
                                    YouTube, Instagram, etc.)
                                </li>
                                <li>
                                    Work closely on the briefs provided by our design team and collaborate with stakeholders and other team members,
                                    wherever necessary
                                </li>
                                <li>Take ownership of your work and exemplify a strong sense of self-responsibility</li>
                            </ul>
                        </>
                        <h3>What you bring to the table</h3>
                        <>
                            <ul>
                                <li>
                                    2-3 years of professional visual design experience working as a freelancer or an in-house designer for a firm or
                                    an agency
                                </li>
                                <li>
                                    Strong sense of visual design thinking aimed at storytelling and problem-solving, paired with a keen eye for
                                    design details, standards, and finesse
                                </li>
                                <li>A firm grasp on designing creative design concepts while sticking to Brand Guidelines</li>
                                <li>A decent-to-good enough understanding of User Interface Design (UI Design for Mobile & Web)</li>
                                <li>
                                    Proficiency in: Adobe Creative Suite - Illustrator, Photoshop, After Effects, Premiere Pro for visual and motion
                                    design. Adobe XD/Figma/Sketch & Zeplin for UI Design
                                </li>
                                <li>Excellent written, verbal (English) and interpersonal communication skills</li>
                                <li>
                                    Experience collaborating closely with design leads, development teams, product people, and other business
                                    stakeholders
                                </li>
                            </ul>
                        </>
                        <h3>Nice-to-haves (not mandatory)</h3>
                        <>
                            <ul>
                                <li>A good understanding of User Experience Design (UX Design & Research)</li>
                                <li>Advance motion design experience</li>
                                <li>Familiarity with crypto and/or fintech domains</li>
                            </ul>
                        </>
                        
                        <h3>Sounds interesting?</h3>
                        <p>
                            If you're someone that checks all the boxes & requirements mentioned above, feel free to apply and reach out to us with your latest design portfolio PDFs/URLs or your personal website links to{' '}
                            <b>jobs [at] trality [dot] com</b>. We can’t wait to hear about your ambitions and experience to grow Trality with us!
                        </p>
                        <p>
                            Application deadline: <b>03.03.2021!</b> However, applications will be reviewed on a rolling basis.
                        </p>
                    </Header>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};

export default Design;
