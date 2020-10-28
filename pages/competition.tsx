import { Layout } from '@containers';
import { Header, Button } from '@components';
import * as HeroBackground from '../assets/images/misc/banner.jpg';
import * as Calendar from '../assets/images/icons/calendar.svg';
import React from 'react';
import styled from 'styled-components';
import { ConstUrl } from '@constants';
import CompetitionBoxes from 'components/competitionboxes';

const Competition = () => {
    return <Layout.Page title="Competition">
        <Layout.Section>
            <Layout.Center>
                <HeroSection>
                    <Headline>Trality Trading <strong>Competition</strong></Headline>
                    <HeroText><CalendarIcon src={Calendar} />Nov 1, 2020 - Nov 30, 2020</HeroText>
                    <HeroButton to={ConstUrl.Signup}>Register Now</HeroButton>
                </HeroSection>
            </Layout.Center>
        </Layout.Section>
        <Layout.Section>
            <Layout.Center>
                <CompetitionBoxes />
            </Layout.Center>
        </Layout.Section>
        <Layout.Section>
            <Layout.Center>
                <ExtendedHeader center title="Overview">
                    <p>Welcome to the Trality Algo <strong>Trading Challenge 2020/21.</strong></p>
                    <p>Create a next-gen trading bot using our state-of-the-art tools and submit it to Trality before the deadline.</p>
                    <p>Trality will provide standard sets of price data (source: Binance) to help with your bot development, which can be done in either Python or our easy to use drag-and-drop Rule Builder interface.</p>
                    <div>Videos</div>
                    <p>Our main goal is to expand the community of enthusiastic developers and tech-savvy people around crypto trading, therefore we welcome any type of traders to take part in this competition.</p>
                    <p>Your trading system will remain confidential and remains your intellectual property (see terms and conditions*).</p>
                </ExtendedHeader>
            </Layout.Center>
        </Layout.Section>
        <Layout.Section>
            <Layout.Center>
                <ExtendedHeader center title="Prizes">

                </ExtendedHeader>
            </Layout.Center>
        </Layout.Section>
        <Layout.Section>
            <Layout.Center>
                <ExtendedHeader center title="Competition Timeline">

                </ExtendedHeader>
            </Layout.Center>
        </Layout.Section>
        <Layout.Section>
            <Layout.Center>
                <ExtendedHeader center title="Rules">
                    <ul>
                        <li>Participants must be at least 18 years old or older at the time of entry. Age may be verified prior to prize distribution.</li>
                        <li>Participants may be from any country or region where their entry is not prohibited or restricted by law.</li>
                        <li>Each Participant may have only one Trality account. !?</li>
                        <li>Once the competition starts, the leadership board will be updated every hour. !?</li>
                        <li>Awards will be distributed within 5 days after the competition ends. !?</li>
                    </ul>
                </ExtendedHeader>
            </Layout.Center>
        </Layout.Section>
        <Layout.Section>
            <Layout.Center>
                <ExtendedHeader center title="Format">
                <Layout.Grid.Container>
                        <FormatGridItem>
                            <p><strong>Winning Metric</strong> PnL(All-Time)</p>
                            <p><strong>Initial Portfolio</strong> 100,000 USDT</p>
                            <p><strong>Team Size</strong> 3 people, 1 submission per team</p>
                        </FormatGridItem>
                        <FormatGridItem>
                            <p><strong>Trading Fees</strong> 0.1%</p>
                            <p><strong>Slippage</strong> None</p>
                            <p><strong>Packages</strong> Numpy only</p>
                        </FormatGridItem>
                    </Layout.Grid.Container>
                </ExtendedHeader>
            </Layout.Center>
        </Layout.Section>
        <Layout.Section>
            <Layout.Center>
                <ExtendedHeader center title="Suggestions">

                </ExtendedHeader>
            </Layout.Center>
        </Layout.Section>
        <Layout.Section>
            <Layout.Center>
                <ExtendedHeader center title="Contact">
                    <p>If you have any specific questions regarding the competition, please don't hestitate to get in touch with us on Telegram > <a target="_blank" href="https://t.me/trality">https://t.me/trality</a></p>
                </ExtendedHeader>
            </Layout.Center>
        </Layout.Section>
    </Layout.Page>
};

export default Competition;

const ExtendedHeader = styled(Header)`
    & > h2 {
        margin-bottom: 43px;
        @media only screen and (min-width: 750px) {
            margin-bottom: 69px;
        }
    }
`;

const CalendarIcon = styled.img`
    height: 16px;
    margin-right: 12px;
`;

const FormatGridItem = styled.div`
    text-align: left;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 100%;
    @media only screen and (min-width: 750px) {
        flex-basis: 50%;
    }
`;

const HeroButton = styled(Button)`
    width: 200px;
    margin-bottom: 65px;
`;

const HeroText = styled.p`
    margin-bottom: 51px;
    font-size: 20px;
    color: #a5a5b0;
`;

const Headline = styled.h1`
    color:white;
    max-width: 50%;
    margin-bottom: 34px;
    margin-top: 85px;
    font-size: 43px;
    text-transform: uppercase;
`;

const HeroSection = styled.div`
    background-image: url(${HeroBackground});
    width: 100%;
    min-height: 100px;
    padding-left: 55px;
    background-size: cover;
`;