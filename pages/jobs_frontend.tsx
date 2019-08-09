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
    display: flex;
    justify-content: center;
    ul {
        text-align: left;
    }
    @media (max-width: 768px) {
        width: 100%;
        padding-right: 25px;
        padding-left: 25px;
        text-align: center;
        font-size: 14px;
    }
    & > span {
        color: #00b3d8 !important;
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
        mixpanel.track(`openedJobsFrontend`);
    }, []);

    React.useEffect(() => {
        setDark(false);
    }, [dark]);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            mixpanel.pageview('jobs_frontend');
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
                        <span>Senior/Junior Frontend Developer</span>
                    </Breadcrumb>
                    <Header>Senior/Junior Frontend Developer (Part-/Full-time)</Header>
                    <Description>
                        We’re looking for talented frontend engineers, who not only have a solid programming background, but also a love for the use
                        of cutting edge UI frameworks (mostly React) in order to raise the bar for state-of-the-art UI and UX. If you are able to
                        think modularly, want to create beautiful trading bot modules, and are able to work on a sophisticated and challenging web
                        platform, you've come to the right place.
                    </Description>
                    <SubHeader>What you will do everyday</SubHeader>
                    <Description>
                        <ul>
                            <li>
                                Design and build well-designed, efficient, scalable systems that will soon be used by millions of people across the
                                globe
                            </li>
                            <li>Investigate production issues pertaining to UI to determine root cause and implement solutions</li>
                            <li>
                                Collaborate with product managers, designers, and software engineers to ensure our design vision is maintained, final
                                markup is standards compliant, and UI deliverables are completed on time
                            </li>
                            <li>Work with the real time feedback from our users (external and internal) to make the products better</li>
                            <li>Enthuse the trality team with your ideas and suggestions for solutions, libraries and technologies</li>
                            <li>
                                Take responsibility not just for your own code, but for the entire product, always refine what’s under the hood of our
                                platform
                            </li>
                        </ul>
                    </Description>
                    <SubHeader>What you bring to the table</SubHeader>
                    <Description>
                        <ul>
                            <li>You have at least 3 years of experience in web development (Typescript preferred) and are always happy to learn</li>
                            <li>Modern web development stacks (React (Hooks), Webpack, Babel, etc.) interest you and you know your way around Git</li>
                            <li>
                                You have worked with real time web applications and event driven architectures like Node.js and are not frightened to
                                investigate issues together with backend engineers
                            </li>
                            <li>In-depth knowledge of modular, reusable and intelligent API design is a plus</li>
                            <li>You've heard about Graphql and would be interested in using it</li>
                            <li>
                                Experience with Webassembly is a <b>big</b> plus
                            </li>
                            <li>You can talk to your team (conversational proof) in English</li>
                            <li>You work independently and like to take the initiative</li>
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
                        To apply, drop us an email including a CV and a 1-page cover letter to <span>jobs [at] trality dot com</span>
                    </Description>
                </div>
            </LayoutTop>
        </Page>
    );
};

export default Component;
