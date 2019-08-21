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
    justify-content: left;
    ul {
        text-align: left;
    }
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
        mixpanel.track(`openedJobsAlgorithms`);
    }, []);

    React.useEffect(() => {
        setDark(false);
    }, [dark]);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            mixpanel.pageview('jobs_algorithms');
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
                        <span>Manager Algorithmic Trading Strategies (Part-time)</span>
                    </Breadcrumb>
                    <Header>Manager Algorithmic Trading Strategies (Part-time)</Header>
                    <Description>
                        We’re looking for talented quants, who manage the most complex algorithms in order to constantly improve the performance of our trading bots. This role is responsible for the development, maintenance and constant improvement of the trading bots that are being offered as predefined solutions to users on our platform. If you love to dive deep into large time series of crypto assets and apply state-of-the-art technical analysis in order to boost trading returns, you will fit right in at Trality.
                    </Description>
                    <SubHeader>What you will do everyday</SubHeader>
                    <Description>
                        <ul>
                            <li>Explore large datasets of currency prices, analyze underlying patterns and develop scenarios</li>

                            <li>Code trade signals and algorithms in Trality’s python-based bot creation module</li>
                            <li>
                                Manage existing algorithms and improve profitability through quantitative modeling
                            </li>
                            <li>Work with the real time feedback from our users (external and internal) to make our trading bots better</li>
                            <li>Enthuse the Trality team with your ideas and suggestions for solutions, libraries and technologies</li>

                        </ul>
                    </Description>
                    <SubHeader>What you bring to the table</SubHeader>
                    <Description>
                        <ul>
                            <li>
                                You have a deep understanding of advanced mathematics: calculus, stochastics, linear algebra, statistics and optimization. Experience with machine learning is a plus
                            </li>
                            <li>You have experience analyzing datasets or developing automation tools in Python and/or C++</li>
                            <li>
                                You have an ability to quantify your insights using probability and statistics – quickly and accurately under pressure
                            </li>
                            <li>You have at least 1 year of experience in the finance sector, ideally in quantitative trading</li>
                            <li>You hold a bachelor’s degree in Quantitative Finance, Financial Mathematics, Statistics, Computer Science, Mathematics, Physics OR equivalent work experience</li>
                            <li>You can talk to your team (conversational proof) in English</li>
                            <li>You work independently and like to take the initiative</li>
                            <li>You don’t mind having a beer with us on Friday afternoons after work is done</li>

                        </ul>
                    </Description>
                    <SubHeader>What you'll get/our offer</SubHeader>
                    <Description>
                        <ul>
                            <li>
                              20h part-time job with a possibility to work remotely or at a modern desk
                            </li>
                            <li>
                            A full-time position will become available after a period of 4-6 months
                            </li>
                            <li>
                                An extremely flexible working environment with a lot of creative freedom in further developing of our startup
                            </li>
                            <li>A salary of 1000€ (per month, paid 14 times), with the possibility to negotiate overpayment based on qualification, education and experience</li>
                            <li>
                                A flexible employment length, but minimum 4 months
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
