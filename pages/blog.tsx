import * as React from 'react';
import styled from 'styled-components';
import { LayoutTop, Page } from '../theme';
import Link from 'next/link';
import * as arrow from '../assets/images/arrow-down.svg';
import { useMixpanel } from '../hooks/mixpanel';
import { useDark } from '../hooks/dark';
import Head from 'next/head';

const Header = styled.h1`
    font-weight: normal;
    font-size: 42px;
    text-align: left;
    @media (max-width: 768px) {
        text-align: center;
    }
`;
const Subheader = styled.h2`
    font-weight: normal;
    font-size: 15px;
    text-align: left;
    margin-bottom: 10px;
    margin-top: 30px;
    @media (max-width: 768px) {
        text-align: center;
    }
`;

const Container = styled.div`
    margin-bottom: 50px;
    justify-content: left;
    text-align: left;
    ul {
        text-align: left;
    }
    font-size: 13px;
    @media (max-width: 768px) {
        width: 100%;
        padding-right: 25px;
        padding-left: 25px;
        text-align: center;
        font-size: 13px;
    }
    & > span {
        color: #00b3d8 !important;
    }
    > p {
        display: block;
        margin-top: 15px;
    }
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Section = styled.div<{ center?: boolean }>`
    margin-top: 15px;
    text-align: justify;

    line-height: 170%;
    width: 100%;
    ${(props) =>
        props.center &&
        `
        text-align: center;
        margin-bottom: 40px;
    `}

    ol {
        counter-reset: item;
        margin-top: 25px;
        li {
            display: block;
            margin: 15px 0;
            font-size: 13px;
        }
        li:before {
            margin-right: 10px;
            content: counters(item, '.') ' ';
            counter-increment: item;
        }
    }
`;

const Component: React.FunctionComponent<{}> = () => {
    const mixpanel = useMixpanel();
    let { dark, setDark } = useDark();
    React.useCallback(() => {
        mixpanel.track(`blog`);
    }, []);

    React.useEffect(() => {
        setDark(false);
    }, [dark]);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            mixpanel.pageview('blog');
        }
    }, []);

    return (
        <Page>
            <Head>
                <script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>
            </Head>
            <LayoutTop>
                <div>
                    <Header>Blog</Header>

                    <Section>
                        <Subheader>September 5, 2019 (via newsletter)</Subheader>
                        <blockquote class="embedly-card" data-card-controls="0">
                            <h4>
                                <a href="https://medium.com/trality/trality-updates-4-live-trading-84560d88b6f5?source=collection_home---6------0-----------------------">
                                    Trality updates #4: Live trading!
                                </a>
                            </h4>
                            <p>
                                On this warm and sunny late-summer day we are very happy to anounce another milestone release of our Beta with you.
                                Today, we launched the possibility to live-trade with bots on Trality. Creators can now let their bots trade on their
                                Binance account, 24/7, cloud-based, for free!
                            </p>
                        </blockquote>
                    </Section>

                    <Section>
                        <Subheader>August 11, 2019 (via newsletter)</Subheader>
                        <blockquote class="embedly-card" data-card-controls="0">
                            <h4>
                                <a href="https://medium.com/trality/trality-updates-3-beta-going-great-and-live-trading-coming-soon-2fe828be30e8?source=collection_home---6------0-----------------------">
                                    Trality updates #3: Beta going great and live trading coming soon!
                                </a>
                            </h4>
                            <p>
                                A warm welcome to the Trality updates - coming to you now on a regular first-week-of-the-month-basis! Today, we
                                briefly want to share with you: a) our gratitude and b) the progress that has been made during the first two weeks of
                                our Beta. Enjoy!
                            </p>
                        </blockquote>
                    </Section>
                    <Section>
                        <Subheader>Juli 24, 2019 (via newsletter)</Subheader>
                        <blockquote class="embedly-card" data-card-controls="0">
                            <h4>
                                <a href="https://medium.com/trality/trality-updates-2-bot-creator-beta-is-now-online-e51e68487ac0?source=collection_home---6------0-----------------------">
                                    Trality updates #2: Bot Creator Beta is now online!
                                </a>
                            </h4>
                            <p>
                                Yes, it's been a while since you heard from us, but we've been busy building an awesome product. So today, we can
                                finally announce the launch of the Trality Bot Creator Beta ­- a version with the key tools you need to code and
                                deploy high-performing trading bots.
                            </p>
                        </blockquote>
                    </Section>
                    <Section>
                        <Subheader>April 23, 2019 (via newsletter)</Subheader>
                        <blockquote class="embedly-card" data-card-controls="0">
                            <h4>
                                <a href="https://medium.com/trality/trality-updates-1-slowly-but-surely-5d0d76470094?source=collection_home---6------0-----------------------">
                                    Trality updates #1: slowly but surely!
                                </a>
                            </h4>
                            <p>
                                It's spring and our list of followers is steadily growing. This can only mean one thing: it's time to kick off this
                                mailing list! Welcome to the first ever Trality updates - your one-stop shop for everything we've been up to lately.
                                Hope you enjoy!
                            </p>
                        </blockquote>
                    </Section>
                    <Section>
                        <Subheader>April 18, 2019</Subheader>
                        <blockquote class="embedly-card" data-card-controls="0">
                            <h4>
                                <a href="https://medium.com/trality/we-got-big-plans-7c7bba227fbd?source=collection_home---6------1-----------------------">
                                    We got Big Plans
                                </a>
                            </h4>
                            <p>
                                A first view on the product development roadmap of Trality. Ok, here it comes: Trality's first ever Medium story. I
                                want to kick things off on this channel by giving you an "exclusive" glimpse at the roadmap we have set out for
                                developing Trality over the coming months.
                            </p>
                        </blockquote>
                    </Section>
                </div>
            </LayoutTop>
        </Page>
    );
};

export default Component;
