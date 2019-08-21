import * as React from 'react';
import styled from 'styled-components';
import { LayoutTop, Page } from '../theme';
import Link from 'next/link';
import * as arrow from '../assets/images/arrow-down.svg';
import { useMixpanel } from '../hooks/mixpanel';
import { useDark } from '../hooks/dark';

const Header = styled.h1`
    font-weight: normal;
    font-size: 42px;
    text-align: left;
    margin-bottom: 100px;
    margin-top: 100px;
    @media (max-width: 768px) {
        text-align: center;
        margin-top: 100px;
        margin-bottom: 80px;
    }
`;

const SubHeader = styled.h5`
    font-size: 34px;
    color: #00b3d8 !important;
    font-weight: normal;
    margin-bottom: 25px;
`;

const Description = styled.div`
    margin-bottom: 50px;
    @media (max-width: 768px) {
        width: 100%;
        padding-right: 25px;
        padding-left: 25px;
        text-align: left;
        font-size: 14px;
    }
    & > span {
        color: #00b3d8 !important;
    }
    display: flex;
    justify-content: left;
    ul {
        text-align: left;
    }
`;

const Breadcrumb = styled.div`
    margin-top: 100px;
    & > span {
        margin-right: 15px;
        color: #00b3d8;
        & > img {
            transform: rotate(-90deg);
            margin-left: 10px;
        }
        & > a:visited {
            color: #00b3d8;
        }
    }
`;

const Component: React.FunctionComponent<{}> = () => {
    const mixpanel = useMixpanel();
    let { dark, setDark } = useDark();
    React.useCallback(() => {
        mixpanel.track(`openedJobsBackend`);
    }, []);

    React.useEffect(() => {
        setDark(false);
    }, [dark]);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            mixpanel.pageview('jobs_backend');
        }
    }, []);

    return (
        <Page>
            <LayoutTop>
                <div>
                    <Breadcrumb>
                        <span>
                            <Link href="/jobs">
                                <a>Jobs</a>
                            </Link>
                            <img src={arrow} />
                        </span>
                        <span>Senior/Junior Backend Developer (Part-/Full-time)</span>
                    </Breadcrumb>
                    <Header>Senior/Junior Backend Developer (Part-/Full-time)</Header>
                    <Description>
                        We’re looking for talented backend engineers who build state-of-the-art systems that empower the complex trading-bots running
                        on our platform. If building fast, scalable systems based on Kubernetes, and deep diving through frameworks to figure out how
                        they work is your thing, you’ll be welcomed with open arms at Trality. Interest or experience in machine-learning or
                        data-analysis will be valued deeply as well.
                    </Description>
                    <SubHeader>What you will do everyday</SubHeader>
                    <Description>
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
                    </Description>
                    <SubHeader>What you bring to the table</SubHeader>
                    <Description>
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
                    </Description>
                    <SubHeader>What you'll get/our offer</SubHeader>
                    <Description>
                        <ul>
                            <li>
                                38,5h full-time or 20h part-time job with a possibility to work remotely or at a modern desk in the most livable city
                                in the word – Vienna
                            </li>
                            <li>
                                An extremely flexible working environment with a lot of creative freedom in the further development of our startup
                            </li>
                            <li>A possibility to negotiate an equity-based compensation</li>
                            <li>
                                Austrian labor law requires us to state the minimum salary for this role (on a junior level), which is 2.461€ (per
                                month, paid 14 times).{' '}
                                <u>However, we are willing to overpay you significantly based qualification, education and experience</u>
                            </li>
                        </ul>
                    </Description>
                    <SubHeader>Sounds interesting?</SubHeader>
                    <Description>
                        To apply, drop us an email including a CV and a 1-page cover letter to<span> jobs [at] trality [dot] com</span>
                    </Description>
                </div>
            </LayoutTop>
        </Page>
    );
};

export default Component;
