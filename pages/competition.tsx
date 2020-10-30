import { Layout } from '@containers';
import { Header, Button, KnowMore } from '@components';
import * as HeroBackground from '../assets/images/misc/banner.jpg';
import * as MobileHeroBackground from '../assets/images/misc/banner-mobile.jpg';
import * as Calendar from '../assets/images/icons/calendar.svg';
import * as TickYes from '../assets/images/icons/tick-yes.svg';
import * as TickNo from '../assets/images/icons/tick-no.svg';
import * as Trophy1 from '../assets/images/icons/trophy-1.png';
import * as Trophy2 from '../assets/images/icons/trophy-2.png';
import * as TimelineImgMobile from '../assets/images/screens/competition-timeline-mobile.png';
import * as TimelineImg from '../assets/images/screens/competition-timeline.png';
import React from 'react';
import styled from 'styled-components';
import { ConstUrl } from '@constants';
import CompetitionBoxes from 'components/competitionboxes';

const Competition = () => {
    return <Layout.Page title="Competition">
        <FirstSection id="hero">
            <Layout.Center mobileFullWidth={true}>
                <HeroSection>
                    <Headline>Trality Trading <strong>Competition</strong></Headline>
                    <HeroText><CalendarIcon src={Calendar} />Nov 1, 2020 - Nov 30, 2020</HeroText>
                    <HeroButton to={ConstUrl.Signup}>Register Now</HeroButton>
                </HeroSection>
            </Layout.Center>
        </FirstSection>
        <SecondSection id="boxes">
            <Layout.Center>
                <CompetitionBoxes />
            </Layout.Center>
        </SecondSection>
        <BoxesSection id="overview">
            <Layout.Center>
                <ExtendedHeader center title="Overview">
                    <p>Welcome to the Trality Algo <strong>Trading Challenge 2020/21.</strong></p>
                    <p>Create a next-gen trading bot using our state-of-the-art tools and submit it to Trality before the deadline.</p>
                    <p>Trality will provide standard sets of price data (source: <a href="javascript:alert('Where should this link go to? :)')">Binance</a>) to help with your bot development, which can be done in either Python or our easy to use drag-and-drop <a href="javascript:alert('Where should this link go to? :)')">Rule Builder</a> interface.</p>
                    <Layout.Grid.Container>
                        <VideoRow>
                            <TwoColGridItem>
                                <IframeWrapper>
                                    <iframe width="560" height="349" src="https://www.youtube.com/embed/OPY3alCHv-8?modestbranding=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </IframeWrapper>
                            </TwoColGridItem>
                            <TwoColGridItem>
                                <IframeWrapper>
                                <iframe width="560" height="349" src="https://www.youtube.com/embed/OPY3alCHv-8?modestbranding=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </IframeWrapper>
                            </TwoColGridItem>
                        </VideoRow>
                    </Layout.Grid.Container>
                    <p>Our main goal is to expand the community of enthusiastic developers and tech-savvy people around crypto trading, therefore we welcome any type of traders to take part in this competition.</p>
                    <p>Your trading system will remain confidential and remains your intellectual property (see terms and conditions*).</p>
                </ExtendedHeader>
            </Layout.Center>
        </BoxesSection>
        <Layout.Section id="prizes">
            <Layout.Center>
                <ExtendedHeader center title="Prizes" subtitle="The 3 best trading bots get the following prizes:">
                    <PrizesCenterContainer>
                        <FirstPrizePiece>
                            <PrizeText color="secondary">
                                <Ranking>2</Ranking> nd
                            </PrizeText>
                            <Trophy src={Trophy2} />
                            <PrizeMoney color="secondary">
                                up to<PrizeMoneyValue>€2,000</PrizeMoneyValue>
                            </PrizeMoney>
                        </FirstPrizePiece>
                        <PrizePiece>
                            <PrizeText color="primary">
                                <Ranking>1</Ranking> st
                            </PrizeText>
                            <Trophy src={Trophy1} />
                            <PrizeMoney color="primary">
                                up to<PrizeMoneyValue>€3,000</PrizeMoneyValue>
                            </PrizeMoney>
                        </PrizePiece>
                        <PrizePiece>
                            <PrizeText color="secondary">
                                <Ranking>3</Ranking> rd
                            </PrizeText>
                            <Trophy src={Trophy2} />
                            <PrizeMoney color="secondary">
                                up to<PrizeMoneyValue>€1,000</PrizeMoneyValue>
                            </PrizeMoney>
                        </PrizePiece>
                    </PrizesCenterContainer>
                </ExtendedHeader>
            </Layout.Center>
        </Layout.Section>
        <Layout.Section id="competition">
            <Layout.Center>
                <ExtendedHeader center title="Competition Timeline">
                    <p>
                        There are two main phases in the competition: <strong>The submission period</strong> and <strong>the live simulation period</strong>. All submitted trading bots will be simulated for 2 months with live market data.
                    </p>
                    <p>
                        We are going to select winners who have the highest Equity value at the end of the live simulation period.
                    </p>
                    <Timeline />
                </ExtendedHeader>
            </Layout.Center>
        </Layout.Section>
        <Layout.Section id="format">
            <Layout.Center>
                <ExtendedHeader center title="Format">
                <Layout.Grid.Container>
                        <TwoColGridItem>
                            <p><strong>Winning Metric</strong> PnL(All-Time)</p>
                            <p><strong>Initial Portfolio</strong> 100,000 USDT</p>
                            <p><strong>Team Size</strong> 3 people, 1 submission per team</p>
                        </TwoColGridItem>
                        <TwoColGridItem>
                            <p><strong>Trading Fees</strong> 0.1%</p>
                            <p><strong>Slippage</strong> None</p>
                            <p><strong>Packages</strong> Numpy only</p>
                        </TwoColGridItem>
                    </Layout.Grid.Container>
                </ExtendedHeader>
            </Layout.Center>
        </Layout.Section>
        <Layout.Section id="suggestions">
            <Layout.Center>
                <ExtendedHeader center title="Suggestions">
                    <p>We encourage you to use our feature request board to make suggestions on what to build next (or report bugs :-)). </p>
                    <p>We would love to hear what you think!</p>
                    <KnowMore to="javascript:alert('What should this link be? :)');">Feature Request Board</KnowMore>
                    <Layout.Grid.Container>
                        <TwoColGridItem>
                            <p><TickImage src={TickYes} />All intervals</p>
                            <p><TickImage src={TickYes} />Recommended smaller than 1hr</p>
                            <p><TickImage src={TickYes} />All bot types</p>
                        </TwoColGridItem>
                        <TwoColGridItem>
                            <p><TickImage src={TickNo} />Trading illegal assets</p>
                            <p><TickImage src={TickNo} />More than 3 handlers</p>
                        </TwoColGridItem>
                    </Layout.Grid.Container>
                </ExtendedHeader>
            </Layout.Center>
        </Layout.Section>
        <Layout.Section id="rules">
            <Layout.Center>
                <ExtendedHeader center title="Rules">
                    <ul>
                        <li>You must use the Traity Rule Editor or the Code Editor to create your bot</li>
                        <li>The bot submission deadline is <strong>November 30th at midnight CET</strong>.</li>
                        <li>Only <strong>one</strong> bot per entry</li>
                        <li>Your bot is allowed to trade in one or more of the following coins: <strong>BTC, ETH, XRP, LTC</strong> and <strong>EOS</strong>. The respective trading intervals for your bot can be chosen freely</li>
                        <li>Every bot will receive 20,000 $USDT as a starting balance</li>
                    </ul>
                    <p>
                        Read the full rules and T&amp;Cs <a href="#">here</a>.
                    </p>
                </ExtendedHeader>
            </Layout.Center>
        </Layout.Section>
        <Layout.Section id="contact">
            <Layout.Center>
                <ExtendedHeader center title="Contact">
                    <p>If you have any questions about the competition, you can contact us at competition<strong>[at]</strong>trality.com. If you have any other questions about the platform, our API or just want to give us some feedback then please join our <a target="_blank" href="https://t.me/trality">Telegram channel</a>.</p>
                </ExtendedHeader>
            </Layout.Center>
        </Layout.Section>
    </Layout.Page>
};

export default Competition;

const ExtendedHeader = styled(Header)`
    & > h2 {
        margin-top: 0px;
        margin-bottom: 43px;
        @media only screen and (min-width: 750px) {
            margin-bottom: 65px;
        }
    }
    & > h5 {
        margin-bottom: 39px;
    }
    & > div > p {
        margin-top:0px;
        margin-bottom: 22px;
        &:last-child {
            margin-bottom: 0px;
        }
        @media only screen and (min-width: 750px) {
            margin-bottom: 25px;
            &:last-child {
                margin-bottom: 0px;
            }
        }
    }
`;

const FirstSection = styled(Layout.Section)`
    padding-bottom: 37px;
    @media only screen and (min-width: 768px) {
        padding-bottom: 42px;
    }
    @media only screen and (max-width: 768px) {
        margin-top: 35px !important;
    }
`;

const PrizesCenterContainer = styled(Layout.Center)`
    display:flex;
    justify-content: center;
    max-width:850px;
    margin:0 auto;
`;

const PrizePiece = styled.div`
    max-width: 33%;
    display: inline-block;
    @media only screen and (min-width: 768px) {
        max-width: 350px;
        margin-left: 100px;
    }
    text-align:center;
`;

const Ranking = styled.div`
    display:inline-block;
    font-size: 22px;
    position: relative;
    top: 10px;
    @media only screen and (min-width: 768px) {
        top: 15px;
        font-size: 40px;
    }
`;

const Trophy = styled.img`
    width: 100%;
`;

const FirstPrizePiece = styled(PrizePiece)`
    margin-left:0px;
`;

const PrizeText = styled.div<{ color: 'primary' | 'secondary'}>`
    color: ${(props) => props.color === 'primary' ? `#00b3d8` : `#9d9dbf;`}; 
    font-weight:bold;
    font-size: 7.5px;
    margin-bottom: 15px;
    text-transform: uppercase;
    @media only screen and (min-width: 768px) {
        font-size: 15px;
    }
`;

const Timeline = styled.div`
    background-image: url(${TimelineImgMobile}); 
    max-width: 100%;
    background-repeat: no-repeat;
    min-height: 505px;
    margin-top: 35px;
    background-position: center;
    @media only screen and (min-width: 768px) {
        background-image: url(${TimelineImg}); 
        margin-top: 78px;
        min-height: 140px;
    }
`;

const PrizeMoney = styled.div<{ color: 'primary' | 'secondary'}>`
    color: ${(props) => props.color === 'primary' ? `#00b3d8` : `#9d9dbf;`}; 
    font-size: 11px;
    @media only screen and (min-width: 768px) {
        font-size: 17px;
    }
`;

const PrizeMoneyValue = styled.div`
    font-size: 17.5px;
    display: inline-block;
    margin-left: 2px;
    @media only screen and (min-width: 768px) {
        font-size: 40px;
    }
`;

const VideoRow = styled.div`
    display: flex;
    max-width: 100%;
    flex-basis: 100%;
    flex-wrap: wrap;
    margin-top: 5px;
    margin-bottom: 9px;
    @media only screen and (min-width: 750px) {
        margin-top: 25px;
        margin-bottom: 50px;
    }
`;

const IframeWrapper = styled.div`
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
    margin-bottom: 21px;
    @media only screen and (min-width: 750px) {
        margin-bottom: 0px;
        margin-left: 20px;
        margin-right: 20px;
    }
    & iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;

const CalendarIcon = styled.img`
    height: 13px;
    margin-right: 12px;
    @media only screen and (min-width: 768px) {
        height: 16px;
    }
`;

const TickImage = styled.img`
    position: relative;
    top: 5px;
    margin-right: 10px;
`;

const TwoColGridItem = styled.div`
    text-align: left;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 100%;
    @media only screen and (min-width: 750px) {
        flex-basis: 50%;
    }
`;

const HeroButton = styled(Button)`
    margin-bottom: 18px;
    @media only screen and (min-width: 768px) {
        width: 200px;
        margin-bottom: 65px;
    }
`;

const HeroText = styled.p`
    margin-bottom: 18px;
    font-size: 14px;    
    color: #a5a5b0;
    @media only screen and (min-width: 768px) {
        margin-bottom: 51px;
        font-size: 20px;
    }
`;

const Headline = styled.h1`
    color:white;
    text-align: left;
    max-width: 85%;
    padding-top: 25px;
    margin-top: 0px;
    margin-bottom: 18px;
    font-size: 30px;
    text-transform: uppercase;
    @media only screen and (min-width: 768px) {
        max-width: 50%;
        margin-bottom: 34px;
        padding-top: 0px;
        font-size: 43px;
        margin-top: 85px;
    }
`;

const SecondSection = styled(Layout.Section)`
    margin-top: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
`;

const BoxesSection = styled(Layout.Section)`
    padding-top: 54px;
    @media only screen and (min-width: 768px) {
        padding-top: 92px;
    }
    padding-bottom:0px;
`;

const HeroSection = styled.div`
    background-image: url(${MobileHeroBackground});
    width: 100%;
    min-height: 100px;
    padding-left: 27px;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #191826;
    background-position: right;
    
    @media only screen and (min-width: 1130px) {
        background-image: url(${HeroBackground});
        background-size: contain;
        padding-left: 55px;
        & h1 {
            margin-top: 36px;
        }
    }
`;