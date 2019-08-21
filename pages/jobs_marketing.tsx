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
        mixpanel.track(`openedJobsMarketing`);
    }, []);

    React.useEffect(() => {
        setDark(false);
    }, [dark]);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            mixpanel.pageview('jobs_marketing');
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
                        <span>Manager Marketing & Communication (Part-time)</span>
                    </Breadcrumb>
                    <Header>Manager Marketing & Communication (Part-time)</Header>
                    <Description>
                        We’re looking for talented marketing or PR students, who work on marketing (Social, SEO and Brand) as well as communication
                        and PR directly together with the CEO of Trality. If you would love to help us spread the word on our startup and be
                        responsible for driving awareness and user growth through creativity and data-driven marketing methods, you are the perfect
                        match for this position!
                    </Description>
                    <SubHeader>What you will do everyday</SubHeader>
                    <Description>
                        <ul>
                            <li>Work on growth marketing and communications</li>

                            <li>Take control of Trality’s marketing channels and develop ideas to grow awareness and user base</li>
                            <li>Write Press Releases as well as marketing content, based on news, statistics and more</li>
                            <li>Liaise directly with journalists in Austria as well as globally</li>
                        </ul>
                    </Description>
                    <SubHeader>What you bring to the table</SubHeader>
                    <Description>
                        <ul>
                            <li>You have a strong passion for PR, marketing and content writing</li>
                            <li>You are a Business, Communications, IT, Media or PR student (or similar)</li>
                            <li>
                                You have a very good command of English (spoken and written language) and are at least able to converse with your team
                                in German
                            </li>
                            <li>You are interested in start-ups and entrepreneurship</li>
                            <li>You work independently and like to take the initiative</li>
                            <li>You don’t mind having a beer with us on Friday afternoons after work is done</li>
                        </ul>
                    </Description>
                    <SubHeader>What you'll get/our offer</SubHeader>
                    <Description>
                        <ul>
                            <li>
                                10h part-time job with a possibility to work remotely or at a modern desk in the most livable city in the word –
                                Vienna
                            </li>
                            <li>An extremely flexible working environment with a lot of creative freedom in further developing of our startup</li>
                            <li>A salary of 446,81€ (per month, paid 14 times), which equals Austrian “Geringfügigkeit”</li>
                            <li>A flexible employment length, but minimum 4 months</li>
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
