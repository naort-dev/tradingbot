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
                    <HeroText><CalendarIcon src={Calendar} />Nov 4, 2020 - Jan 14, 2021</HeroText>
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
                    <p><strong>Create a winning trading bot using our state-of-the-art tools and get your hands on a big cash prize.</strong></p>
                    <p>You have until the end of November to create and submit a bot after which it will run in a simulated environment for 45 days. At the end of the simulation period, the top three ranked participants according to RoMaD (Return Over Maximum Drawdown) will receive a cash prize. This cash price is related to the performance of the winning bot which we will outline below. Trality will provide standard sets of price data (source: Binance) to help with your bot development, which can be done with our <a href="/creator/code-editor">Python Code Editor</a> or our intuitive drag-and-drop <a href="/creator/rule-builder">Rule Builder</a>.</p>
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
                    </ExtendedHeader>
            </Layout.Center>
        </BoxesSection>
        <Layout.Section id="how-to-participate">
            <Layout.Center>
                <ExtendedHeader center title="How to participate">
                    <p>
                        We make it very easy for users both new and existing to take part in this exciting competition. You simply have to:
                    </p>
                    <NonDiscList>
                        <li>
                            <strong>Step 1. <a target="_blank" href={ConstUrl.Signup}>Register</a></strong> for an account if you haven’t already (it takes just four clicks)
                        </li>
                        <li>
                            <strong>Step 2. <a target="_blank" href={ConstUrl.Signup}>Create a bot</a></strong> using our powerful bot-creation tools
                        </li>
                        <li>
                            <strong>Step 3. <a target="_blank" href={ConstUrl.Signup}>Submit the bot</a></strong> in the submission section
                        </li>
                    </NonDiscList>
                </ExtendedHeader>
            </Layout.Center>
        </Layout.Section>
        <Layout.Section id="creativity-pays">
            <Layout.Center>
                <ExtendedHeader center title="Creativity pays">
                    <p>
                        We recently launched our <a href="https://blog.trality.com/introducing-the-trading-engine-2-0/">Trading Engine 2.0</a> where flexibility took centre stage. In that, we provided our creators with the tools they need to build the most advanced bots possible. Trality is for those who want the most freedom when developing bots with cutting-edge technology. We attract the smartest bot creators by constantly working on innovative functionality and we stay ahead of the curve by improving our existing products and constantly introducing new services for our users.
                    </p>
                    <p>Our goal with this competition is to expand our community of enthusiastic developers and tech-savvy people in the industry therefore we welcome all kinds of traders to take part.</p>
                    <p>It’s time to get creative and win!</p>
                </ExtendedHeader>
            </Layout.Center>
        </Layout.Section>
        <Layout.Section id="prizes">
            <Layout.Center>
                <ExtendedHeader center title="Winning and prizes">
                    <p>
                        At the end of the Competition Period, the top three participants according to RoMaD (Return Over Maximum Drawdown) will receive a cash prize.
                    </p>
                    <p>
                        The winning metrics are calculated as follows:
                    </p>
                    <Formula>
                        <p>
                            TotalReturn / (1 + MaxDrawDown)
                        </p>
                        <p>
                            TotalReturn = X_t / X_0 -1, where X_i is the capital at time i
                        </p>
                        <p>
                            <strong>MaxDrawDown will be measured in absolute percent. </strong>
                        </p>
                    </Formula>
                    <CenteredParagraph>
                        <strong>There are THREE cash prizes up for 1st, 2nd and 3rd place respectively</strong>
                    </CenteredParagraph>
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
                    <p>
                        This cash prizes are related to the performance of their bot and will be calculated thusly:
                    </p>
                    <Table>
                        <tr>
                            <td><strong>1st place</strong></td>
                            <td>EUR 20000 * min(max(performance,5%),15%)</td>
                        </tr>
                        <tr>
                            <td><strong>2nd place</strong></td>
                            <td>EUR 20000 * min(max(performance,2.5%),10%)</td>
                        </tr>
                        <tr>
                            <td><strong>3rd place</strong></td>
                            <td>EUR 20000 * min(max(performance,1.5%),5%)</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <i>performance</i> = <table style={{display:"inline-table", fontSize:"65%", borderCollapse:"collapse", verticalAlign:"middle"}}><tbody><tr><td style={{padding:"0px", borderBottom: "solid 1px", width:"8px", textAlign:"center"}}>X<sub>1</sub></td></tr> <tr><td style={{padding:"0px", textAlign:"center"}}>X<sub>0</sub></td></tr></tbody></table> - 1  
                            </td>
                        </tr>
                    </Table>
                    <p>
                        Following this prize model, the best-ranked bot creator will receive a payout of between €1000 and €3000. Second place will get €500 to €2000 and third place will get €300 to €1000.
                    </p>
                </ExtendedHeader>
            </Layout.Center>
        </Layout.Section>
        <Layout.Section id="competition">
            <Layout.Center>
                <ExtendedHeader center title="Competition Timeline">
                    <p>
                        There are two main phases in the competition: the <strong>submission</strong> period and the <strong>live simulation</strong> period. The submission period is the time where you can create and submit your bot to and it will go from November 4th until November 30th. The live simulation period will run from December 1st until January 14th and during this period, the bots run continuously on a virtual account. The bots submitted to this competition will NOT be trading with real assets but instead, run in a simulated environment mirroring the real market. Winners will be selected based on RoMAd (Return Over Maximum Drawdown) for the whole simulation period (1.12.2020 - 14.1.2021).
                    </p>
                    <Timeline />
                </ExtendedHeader>
            </Layout.Center>
        </Layout.Section>
        
        <Layout.Section id="rules">
            <Layout.Center>
                <ExtendedHeader center title="Eligibility">
                    <List>
                        <li>To be eligible to take part in the competition, participants must have a registered Trality account. If you don’t have an account yet, you can sign up here. Trality accounts are for free at the moment and you will never be charged for our services without additional consent!</li>
                        <li>Participants must be at least 18 years old at the time of entry. Age may be verified before prize distribution.</li>
                        <li>Participants may be from any country or region where their entry is not prohibited or restricted by law.</li>
                        <li>There is no fee for entry and no purchase is necessary.</li>
                    </List>
                </ExtendedHeader>
            </Layout.Center>
        </Layout.Section>
        <Layout.Section id="rules">
            <Layout.Center>
                <ExtendedHeader center title="Rules">
                    <List>
                        <li>You must use the Traity Rule Editor or the Code Editor to create your bot</li>
                        <li>The bot submission deadline is <strong>November 30th at midnight CET</strong>.</li>
                        <li>Only <strong>one</strong> bot per entry</li>
                        <li>Your bot is allowed to trade in one or more of the following coins: <strong>BTC, ETH, XRP, LTC</strong> and <strong>EOS</strong>. The respective trading intervals for your bot can be chosen freely</li>
                        <li>Every bot will receive 20,000 $USDT as a starting balance</li>
                    </List>
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
            max-width: 800px;
            margin-left:auto;
            margin-right: auto;
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
    max-width:50px;
    margin:0 auto;
    margin-bottom: 22px;
    @media only screen and (min-width: 750px) {
        margin-bottom: 25px;
    }
`;

const CenteredParagraph = styled.p`
    text-align:center;
`;

const List = styled.ul`
    & > li {
        display: flex;
        & * {
            display: contents;
        }
    }
    @media only screen and (min-width: 750px) {
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
    }
`;

const NonDiscList = styled(List)`
    & > li:before {
        content: ' ';
    }
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

const Table = styled.table`
    margin-top: 25px;
    margin-bottom: 25px;
    @media only screen and (min-width: 768px) {
        max-width: 450px;
        margin: 25px auto;
    }
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

const Formula = styled.div`
    border: 2px solid #00b3d8;
    max-width: 80%;
    border-radius: 10px;
    padding: 0 20px;
    margin: 0 auto;
    margin-bottom: 22px;
    @media only screen and (min-width: 768px) {
        max-width: 800px;
        margin-bottom: 25px;
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
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
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