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
        mixpanel.track(`openedJobsiOS`);
    }, []);

    React.useEffect(() => {
        setDark(false);
    }, [dark]);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            mixpanel.pageview('jobs_iOS');
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
                        <span>Senior/Junior iOS Developer (Part-/Full-time)</span>
                    </Breadcrumb>
                    <Header>Senior/Junior iOS Developer (Part-/Full-time)</Header>
                    <Description>
                        We’re looking for a talented iOS engineer, who is willing to join the Trality team on a short-term contract (3-4 months with a
                        possibility of extension) in order to develop the platform’s iOS app.
                    </Description>
                    <SubHeader>What you will do everyday</SubHeader>
                    <Description>
                        <ul>
                            <li>Build an iOS app for the Trality platform from scratch using React Native or Swift and the newest iOS APIs</li>

                            <li>
                                Collaborate with product managers, designers, and software engineers to ensure our design vision is maintained, final
                                markup is standards compliant, and UI deliverables are completed on time
                            </li>
                            <li>Work with the real time feedback from our users (external and internal) to make the products better</li>
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
                            <li>You have at least 3 years of experience in iOS development</li>
                            <li>
                                You have worked with React Native (or ReactJS) or, alternatively, Swift (or Objective-C) and you know your way around Git, moreover, experience with e.g. GraphQL
                                is a plus
                            </li>
                            <li>In-depth knowledge of modular, reusable and intelligent API design is also nice to have</li>
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
                            <li>A short-term contract length of 3-4 months, with the possibility of extension at the end of the employment</li>
                            <li>
                                An extremely flexible working environment with a lot of creative freedom in the further development of our startup
                            </li>
                            <li>A competitive remuneration based on your qualification, education and experience</li>
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
