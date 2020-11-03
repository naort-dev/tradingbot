import { Layout } from '@containers';
import { Header, Button } from '@components';
import * as HeroBackground from '../assets/images/misc/banner.jpg';
import * as MobileHeroBackground from '../assets/images/misc/banner-mobile.jpg';
import * as Calendar from '../assets/images/icons/calendar.svg';
import * as Trophy1 from '../assets/images/icons/trophy-1.png';
import * as Trophy2 from '../assets/images/icons/trophy-2.png';
import React from 'react';
import styled from 'styled-components';
import { ConstUrl } from '@constants';
import CompetitionBoxes from 'components/competitionboxes';
import CompetitionTimeline from 'components/competitiontimeline';
import FractionLayout from 'components/fractionlayout';

const Competition = () => {
    return (
        <Layout.Page title="Competition">
            <FirstSection id="hero">
                <Layout.Center mobileFullWidth={true}>
                    <HeroSection>
                        <Headline>
                            Trality Trading <strong>Competition</strong>
                        </Headline>
                        <HeroText>
                            <CalendarIcon src={Calendar} />
                            Nov 4, 2020 - Jan 14, 2021
                        </HeroText>
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
                        <p>
                            <strong>Create a winning trading bot using the Trality Bot Creator tools and get your hands on a big cash prize!</strong>
                        </p>
                        <p>
                            You have until the end of November to create and submit a bot after which it will run in a simulated environment for 45
                            days. At the end of the simulation period, the top three ranked participants according to our risk-adjusted return metric,
                            namely RoMaD (Return Over Maximum Drawdown) will receive a cash prize. This cash price is related to the performance of
                            the winning bot, but you can find all the fine details in the following paragraphs. Participating Trading Bots can be
                            created with the Python-based <a href="/creator/code-editor">Trality Code Editor</a> or the intuitive drag-and-drop{' '}
                            <a href="/creator/rule-builder">Trality Rule Builder</a>{' '}
                        </p>
                        <Layout.Grid.Container>
                            <VideoRow>
                                <TwoColGridItem>
                                    <IframeWrapper>
                                        <iframe
                                            width="560"
                                            height="349"
                                            src="https://www.youtube.com/embed/u0-IZknoCmE?modestbranding=1"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </IframeWrapper>
                                </TwoColGridItem>
                                <TwoColGridItem>
                                    <IframeWrapper>
                                        <iframe
                                            width="560"
                                            height="349"
                                            src="https://www.youtube.com/embed/MSenmNzuRAI?modestbranding=1"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
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
                        <p>We make it very easy for users both new and existing to take part in this exciting competition. You simply have to:</p>
                        <NonDiscList>
                            <li>
                                <strong>
                                    Step 1.{' '}
                                    <a target="_blank" href={ConstUrl.Signup}>
                                        Register
                                    </a>
                                </strong>{' '}
                                for an account if you haven’t already (it takes just four clicks)
                            </li>
                            <li>
                                <strong>
                                    Step 2.{' '}
                                    <a target="_blank" href={ConstUrl.Signup}>
                                        Create a bot
                                    </a>
                                </strong>{' '}
                                using our powerful bot-creation tools
                            </li>
                            <li>
                                <strong>
                                    Step 3.{' '}
                                    <a target="_blank" href={ConstUrl.Signup}>
                                        Submit the bot
                                    </a>
                                </strong>{' '}
                                in the Competition module
                            </li>
                        </NonDiscList>
                    </ExtendedHeader>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="creativity-pays">
                <Layout.Center>
                    <ExtendedHeader center title="Creativity pays">
                        <p>
                            We recently launched our <a href="https://blog.trality.com/introducing-the-trading-engine-2-0/">Trading Engine 2.0</a>{' '}
                            where flexibility took center stage. In that, we provided our creators with the tools they need to build the most advanced
                            trading bots they can imagine. Trality is for those who want the most freedom when developing bots with cutting-edge
                            technology.
                        </p>
                        <p>
                            Our goal with this competition is to expand our community of enthusiastic developers and tech-savvy people in the industry
                            therefore we welcome all kinds of traders to take part.
                        </p>
                        <p>It’s time to get creative and win!</p>
                    </ExtendedHeader>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="prizes">
                <Layout.Center>
                    <ExtendedHeader center title="Winning and prizes">
                        <p>
                            At the end of the Competition Period, the top three participants according to RoMaD (Return Over Maximum Drawdown) will
                            receive a cash prize.
                        </p>
                        <p>The winning metrics are calculated as follows:</p>
                        <Formula>
                            <p>
                                <i>RoMaD</i> = {' '}
                                <FractionLayout up={'TotalReturn'} down={'1 + MDD'} />
                            </p>
                            <p>where</p>
                            <p>
                                <i>TotalReturn</i> ={' '}
                                <FractionLayout
                                    up={
                                        <>
                                            X<sub>t</sub>
                                        </>
                                    }
                                    down={
                                        <>
                                            X<sub>0</sub>
                                        </>
                                    }
                                />{' '}
                                - 1
                            </p>
                            <p>
                                X<sub>t</sub> is the portfolio value in quoted currency at timestamp t, X<sub>0</sub> is the start capital at the
                                beginning of the Simulation Period (20,000 USDT). MDD is the maximum drawdown in percent. For details see the full
                                Rules <a href="/competition-terms">here</a>.
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
                            This cash prize is related to the performance of their trading bot and is made up of a minimum absolute reward and a
                            variable performance-based reward:
                        </p>
                        <Table>
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>1st place</strong>
                                    </td>
                                    <td>EUR 20000 * min(max(Total Return,5%),15%)</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>2nd place</strong>
                                    </td>
                                    <td>EUR 20000 * min(max(Total Return,2.5%),10%)</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>3rd place</strong>
                                    </td>
                                    <td>EUR 20000 * min(max(Total Return,1.5%),5%)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <InfoTd>
                                        <i>Total Return</i> ={' '}
                                        <FractionLayout
                                            up={
                                                <>
                                                    X<sub>t</sub>
                                                </>
                                            }
                                            down={
                                                <>
                                                    X<sub>0</sub>
                                                </>
                                            }
                                        />{' '}
                                        - 1<p>as described above</p>
                                    </InfoTd>
                                </tr>
                            </tbody>
                        </Table>
                        <p>
                            Following this prize model, the best-ranked bot creator will receive a payout of between €1000 and €3000. Second place
                            will get €500 to €2000 and third place will get €300 to €1000.
                        </p>
                    </ExtendedHeader>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="competition">
                <Layout.Center>
                    <ExtendedHeader center title="Competition timeline">
                        <p>
                            There are two main phases in the competition: the <strong>submission</strong> period and the <strong>simulation</strong>{' '}
                            period. The submission period is the time where you can create and submit your bot to and it will run from November 4th
                            until November 30th. The simulation period will run from December 1st until January 14th and during this period, the bots
                            run continuously on a virtual Binance exchange account. The bots submitted to this competition will NOT be trading with
                            real assets but instead, run in a simulated environment mirroring the real market. Winners will be selected based on RoMaD
                            (Return Over Maximum Drawdown) achieved over the course of the simulation period (1.12.2020 - 14.1.2021).
                        </p>
                        <CompetitionTimeline />
                    </ExtendedHeader>
                </Layout.Center>
            </Layout.Section>

            <Layout.Section id="rules">
                <Layout.Center>
                    <ExtendedHeader center title="Criteria and Eligibility">
                        <p>
                            In order to be eligible for participation in the Competition, all trading bots submitted are required to meet a particular
                            set of criteria:
                        </p>
                        <List>
                            <li>Your bot has USDT as quoted currency.</li>
                            <li>Your bot trades with 1 or more of the following coins as base currency: BTC, ETH, XRP, LTC and EOS.</li>
                            <li>Your bot is created either by using the Trality Code Editor or the Trality Rule Builder.</li>
                        </List>
                        <InBetweenLists>To be eligible to take part in the competition, participants must also meet these criteria:</InBetweenLists>
                        <List>
                            <li>
                                Participants must have a registered Trality account. If you don’t have an account yet, you can sign up{' '}
                                <a href={ConstUrl.Signup}>here</a>. Trality accounts are for free at the moment and you will never be charged for our
                                services without additional consent!
                            </li>
                            <li>
                                Participants must be at least 18 years old or older at the time of entry. Age may be verified prior to prize
                                distribution.
                            </li>
                            <li>Participants may be from any country or region where their entry is not prohibited or restricted by law.</li>
                            <li>There is no fee for entry and no purchase is necessary.</li>
                        </List>
                        <p>
                            Read the complete rules for the competition <a href="/competition-terms">here</a>.
                        </p>
                    </ExtendedHeader>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="contact">
                <Layout.Center>
                    <ExtendedHeader center title="Contact">
                        <p>
                            If you have any questions about the competition, you can contact us at competition<strong>[at]</strong>trality.com. If you
                            have any other questions about the platform, our API or just want to give us some feedback then please join our{' '}
                            <a target="_blank" href="https://t.me/trality">
                                Telegram channel
                            </a>
                            .
                        </p>
                    </ExtendedHeader>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};

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
        margin-top: 0px;
        margin-bottom: 22px;
        &:last-child {
            margin-bottom: 0px;
        }
        @media only screen and (min-width: 750px) {
            margin-bottom: 25px;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            &:last-child {
                margin-bottom: 0px;
            }
        }
    }
`;

const InfoTd = styled.td`
    & > p {
        margin: 0;
    }
`;

const InBetweenLists = styled.p`
    margin-top: 22px !important;
    @media only screen and (min-width: 750px) {
        margin-top: 25px !important;
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
    display: flex;
    justify-content: center;
    max-width: 450px;
    margin: 0 auto;
    margin-bottom: 22px;
    @media only screen and (min-width: 750px) {
        margin-bottom: 25px;
    }
`;

const CenteredParagraph = styled.p`
    text-align: center;
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
        margin-left: 30px;
        white-space: nowrap;
    }
    text-align: center;
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
    display: inline-block;
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
    margin-left: 0px;
`;

const PrizeText = styled.div<{ color: 'primary' | 'secondary' }>`
    color: ${(props) => (props.color === 'primary' ? props.theme.bluePrimary : props.theme.purple)};
    font-weight: bold;
    font-size: 7.5px;
    margin-bottom: 15px;
    text-transform: uppercase;
    @media only screen and (min-width: 768px) {
        font-size: 13px;
    }
`;

const Formula = styled.div`
    border: 2px solid ${(props) => props.theme.bluePrimary};
    max-width: 80%;
    border-radius: 10px;
    padding: 0 20px;

    text-align: left;
    margin: 0 auto;
    margin-bottom: 22px;
    @media only screen and (min-width: 768px) {
        margin-top: 40px;
        max-width: 650px;
        margin-bottom: 50px;
        margin-bottom: 25px;
    }
`;

const PrizeMoney = styled.div<{ color: 'primary' | 'secondary' }>`
    color: ${(props) => (props.color === 'primary' ? props.theme.bluePrimary : props.theme.purple)};
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
        font-size: 30px;
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
    color: ${(props) => props.theme.onDark};
    @media only screen and (min-width: 768px) {
        margin-bottom: 51px;
        font-size: 20px;
    }
`;

const Headline = styled.h1`
    color: white;
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
    padding-bottom: 0px;
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

export default Competition;
