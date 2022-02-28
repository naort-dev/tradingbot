import * as React from 'react';
import styled from 'styled-components';
import { Layout } from '@containers';
import { Header } from 'components';
import FractionLayout from 'components/fractionlayout';
import { ConstUrl } from '@constants';
import { MetaTags, Page } from '../../util/metaTags';
import { Cell, Headline, MainContainer, Padding, PaddingSizes, Row, SubHeadline, Text, TextLink } from '@trality/web-ui-components';

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

    ol,ul {
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
    ul {
        li:before {
            content: '-';
            padding-left: 2.4em;
            padding-right: 0px;
        }
    }
`;

const Table = styled.table`
    margin-top: 25px;
    margin-bottom: 25px;
    @media only screen and (min-width: 768px) {
        max-width: 450px;
        margin: 25px 0;
    }
    & p {
        margin: 0;
    }
`;

const Terms = () => {
    return (
        <Layout.Page title="terms">
            <MetaTags page={Page.CompetitionTerms} />
            <MainContainer>
                <Row>
                    <Cell size={12} mobileSize={12}>
                        <Padding size={{ top: PaddingSizes.SixtyFour }} mobileSize={{ top: PaddingSizes.OneHundred }}>
                            <Headline headlineType="Headline2">Trality Trading Competition Terms & Conditions</Headline>
                        </Padding>
                        <Padding size={{ top: PaddingSizes.TwentyFour }}>
                            <SubHeadline subheadlineType="SubHeadline1">Overview</SubHeadline>
                        </Padding>
                        <Padding size={{ top: PaddingSizes.TwentyFour }}>
                            <Text bodyType="Body2">
                                Bot submissions for The Trality Trading Competition will be open from March 1st 2022 and close on March 31st 2022,
                                while the Competition itself will run from April 1st 2022 until May 15th 2022. There are 3 Prizes up for grabs, as
                                well as a free one-year Trality “Queen” plan for the top 10 positions. Both current and new Trality users are invited
                                to participate by submitting their Trading Bots, which are to be created on the Trality platform. You can find all the
                                fine details in the following paragraphs:
                            </Text>
                        </Padding>
                        <Padding size={{ top: PaddingSizes.TwentyFour }}>
                            <SubHeadline subheadlineType="SubHeadline1">Eligibility Criteria</SubHeadline>
                        </Padding>
                        <Padding size={{ top: PaddingSizes.TwentyFour }}>
                            <ol>
                                <li>
                                    <Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                        <Text bodyType="Body2">
                                            To be eligible to take part in the competition, participants must have a registered Trality account. If
                                            you don’t have an account yet, you can sign up <TextLink intext href={ConstUrl.Signup} target="_blank">here</TextLink>. You are allowed to use Trality’s free tier for the
                                            competition and you will never be charged for our services without additional consent!
                                        </Text>
                                    </Padding>
                                </li>
                                <li>
                                    <Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                        <Text bodyType="Body2">
                                            Participants must be at least 18 years old or older at the time of entry. You may be required to verify
                                            your age and complete a KYC process before prize distribution.
                                        </Text>
                                    </Padding>
                                </li>
                                <li>
                                    <Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                        <Text bodyType="Body2">
                                            Participants may be from any country or region where their entry is not prohibited or restricted by law.
                                        </Text>
                                    </Padding>
                                </li>
                                <li>
                                    <Text bodyType="Body2">There is no fee for entry and no purchase necessary.</Text>
                                </li>
                            </ol>
                        </Padding>
                        <Padding size={{ top: PaddingSizes.TwentyFour }}>
                            <SubHeadline subheadlineType="SubHeadline1">Bot Criteria</SubHeadline>
                        </Padding>
                        <Padding size={{ top: PaddingSizes.TwentyFour }}>
                            <Text bodyType="Body2">
                                In order to be eligible for participation in the Competition, all Trading Bots submitted are required to meet a                                    particular set of criteria:
                                </Text>
                            </Padding>
                            <Padding size={{ top: PaddingSizes.TwentyFour }}>
                                <ul>
                                    <li>
                                        <Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                            <Text bodyType="Body2">Your bot has USDT as quoted currency.</Text>
                                        </Padding>
                                    </li>
                                    <li>
                                        <Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                            <Text bodyType="Body2">Your bot trades with 1 or more of the following coins as base currency: <i>Table 1: asset universe for the competition. Coins with relative 30d trading volume on Binance >1%, excluding meme coins and stable coins.</i></Text>
                                        </Padding>
                                    </li><Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                    <table>
                                        <tr><td>BTC</td></tr>                                        
                                        <tr><td>ETH</td></tr>
                                        <tr><td>FTM</td></tr>
                                        <tr><td>LUNA</td></tr>
                                        <tr><td>BNB</td></tr>
                                        <tr><td>SOL</td></tr>
                                        <tr><td>ADA</td></tr>
                                        <tr><td>SAND</td></tr>
                                        <tr><td>GALA</td></tr>
                                        <tr><td>ATOM</td></tr>
                                        <tr><td>NEAR</td></tr>
                                        <tr><td>XRP</td></tr>
                                        <tr><td>DOT</td></tr>
                                        <tr><td>MATIC</td></tr>
                                        <tr><td>LINK</td></tr>
                                        <tr><td>AVAX</td></tr>
                                    </table></Padding>
                                    <li>
                                        <Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                            <Text bodyType="Body2">Your bot is created to run on a virtual Binance exchange account (see “Duration and Trading” section below).</Text>
                                        </Padding>
                                    </li>
                                    <li>
                                        <Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                            <Text bodyType="Body2">Your bot is created either by using the Trality Code Editor or the Trality Rule Builder.</Text>
                                        </Padding>
                                    </li>
                                </ul>
                            </Padding>
                            <Padding size={{ top: PaddingSizes.TwentyFour }}>
                                <SubHeadline subheadlineType="SubHeadline1">Submission Criteria</SubHeadline>
                            </Padding>
                            <Padding size={{ top: PaddingSizes.TwentyFour }}>
                                <ol>
                                    <li>
                                        <Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                            <Text bodyType="Body2">
                                                Submission Deadline to the Competition is March 31st, 2022, 23:59 UTC.
                                            </Text>
                                        </Padding>
                                    </li>
                                    <li>
                                        <Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                            <Text bodyType="Body2">
                                                To submit an entry to the Competition, you must create a Trading Bot on Trality adhering to the above-mentioned Criteria, using either the Trality Code Editor or Trality Rule Builder. After the bot creation, you must click on “Submit Bot” in the “Competition” menu of Trality and choose said bot.
                                            </Text>
                                        </Padding>
                                    </li>
                                    <li>
                                        <Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                            <Text bodyType="Body2">
                                                A continuously updated ranking of all submitted Trading Bots is displayed after the Submission Deadline on the leaderboard in the Competition menu.
                                            </Text>
                                        </Padding>
                                    </li>
                                    <li>
                                        <Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                            <Text bodyType="Body2">
                                                Any submitted Trading Bot will run in the Competition until the end of the Simulation Period, unless disqualified or manually withdrawn.                                        
                                            </Text>
                                        </Padding>
                                    </li>
                                    <li>
                                        <Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                            <Text bodyType="Body2">
                                                Each Participant may submit 1 Trading Bot to the Competition.
                                            </Text>
                                        </Padding>
                                    </li>
                                    <li>
                                        <Text bodyType="Body2">Participant's entry must not violate or infringe on any applicable law or regulation or third-party rights, especially but not limited to any intellectual property rights.</Text>
                                    </li>
                                </ol>
                            </Padding>
                            <Padding size={{ top: PaddingSizes.TwentyFour }}>
                                <SubHeadline subheadlineType="SubHeadline1">Duration and Trading</SubHeadline>
                            </Padding>
                            <Padding size={{ top: PaddingSizes.TwentyFour }}>
                            <Text bodyType="Body2">
                                The Simulation Period starts directly after the Submission Deadline, i.e., on April 1st, 2022, 00:00 UTC and runs until May 15th, 2022, 23:59 UTC. During this period, the Trading Bots run continuously on a virtual Binance exchange account, which will be automatically assigned. This means that the bots submitted to this Competition will NOT be trading with real assets, but instead run in a simulated environment, mirroring the real market on Binance using 0.10% fees for all trades (both maker and taker). At the beginning of the Simulation Period, each Trading Bot will be automatically assigned to such a virtual account and will henceforth trade with a virtual starting balance of 20,000 USDT.
                            </Text>
                            </Padding>
                            <Padding size={{ top: PaddingSizes.TwentyFour }}>
                                <SubHeadline subheadlineType="SubHeadline1">Scoring and Ranking</SubHeadline>
                            </Padding>
                            <Padding size={{ top: PaddingSizes.TwentyFour }}>
                            <Text bodyType="Body2">
                                Competition entries that meet all the Criteria outlined above (as well as Rules and Conditions outlined below) are ranked continuously following the beginning of the Simulation Period until its end. While only the ranking at the end of the Simulation Period counts for the final result, this continuous ranking is meant as an indication for participants on where they stand.
                            </Text>
                        </Padding>
                        <Padding size={{ top: PaddingSizes.TwentyFour }}>
                            <Text bodyType="Body2">
                               <i>Competition Metric = (PnL - MaxDD) x InactivityPenalty</i>
                            </Text>
                        </Padding>
                        <Padding size={{ top: PaddingSizes.TwentyFour }}>
                            <Text bodyType="Body2">
                                where
                            </Text>
                        </Padding>
                        <Padding size={{ top: PaddingSizes.TwentyFour }}>
                            <Text bodyType="Body2">
                                <i>InactivityPenalty = min(1.0, 
                                    <FractionLayout up={<> NumTrades</>} down={<>(1+TradingDays*0.16)</>} />)</i>
                            </Text>
                        </Padding>
                        <Padding size={{ top: PaddingSizes.TwentyFour }}>
                            <Text bodyType="Body2">
                            <strong>PnL</strong>: Total PnL of strategy using the starting balance and end balances                            </Text>
                        </Padding>
                        <Padding size={{ top: PaddingSizes.TwentyFour }}>
                            <Text bodyType="Body2">
                                    <strong>MaxDD</strong>: Maximum drawdown of the strategy over the trading period
                            </Text>
                        </Padding>
                        <Padding size={{ top: PaddingSizes.TwentyFour }}>
                            <Text bodyType="Body2">
                                    <strong>NumTrades</strong>: The number of trades executed by the strategy over its running time
                            </Text>
                        </Padding>
                        <Padding size={{ top: PaddingSizes.TwentyFour }}>
                            <Text bodyType="Body2">
                                    <strong>TradingDays</strong>: The number of trading days the strategy was run
                            </Text>
                        </Padding>
                        <Padding size={{ top: PaddingSizes.TwentyFour }}>
                            <Text bodyType="Body2">
                                The main performance indicator is based on total profit with a penalty for max drawdown. In addition, a penalty will be applied to the risk adjusted return for bots that are deemed "inactive". For the bot to be "active", the minimum expected number of trades is once per week. The penalty will only be applied if a bot has less trades that this threshold. All "active" bots are treated equally and will be compared using PnL - DD as the risk adjusted return metric. The InactivityPenalty will only be applied to bots where (PnL - MaxDD) is greater than 0.
                            </Text>
                        </Padding>
                        <Padding size={{ top: PaddingSizes.TwentyFour }}>
                                <SubHeadline subheadlineType="SubHeadline1">Prizes</SubHeadline>
                            </Padding>
                            <Padding size={{ top: PaddingSizes.TwentyFour }}>
                            <Text bodyType="Body2">
                                At the end of the Simulation Period, the top 10 ranked participants according to their Trading Bot’s Competition Metric will receive a Prize. This Prize is related to the performance of their Trading Bot and is made up of the following rewards:
                            </Text>
                            </Padding>

                            <Padding size={{ top: PaddingSizes.TwentyFour }}>
                                <table>
                                    <tr>
                                        <td><Text bodyType="Body2"><strong>Place</strong></Text></td>
                                        <td><Text bodyType="Body2"><strong>Price</strong></Text></td>
                                    </tr>
                                    <tr>
                                        <td><Text bodyType="Body2">1st <strong>place</strong></Text></td>
                                        <td><Text bodyType="Body2">USDT 5000 + free one-year “Queen” plan</Text></td>
                                    </tr>
                                    <tr>
                                        <td><Text bodyType="Body2">2nd <strong>place</strong></Text></td>
                                        <td><Text bodyType="Body2">USDT 3000 + free one-year “Queen” plan</Text></td>
                                    </tr>
                                    <tr>
                                        <td><Text bodyType="Body2">3rd <strong>place</strong></Text></td>
                                        <td><Text bodyType="Body2">USDT 2000 + free one-year “Queen” plan</Text></td>
                                    </tr>
                                    <tr>
                                        <td><Text bodyType="Body2">4th - 10th</Text></td>
                                        <td><Text bodyType="Body2">free one-year “Queen” plan</Text></td>
                                    </tr>
                                </table>
                            </Padding>
                            <Padding size={{ top: PaddingSizes.TwentyFour }}>
                            <Text bodyType="Body2">
                                In the event of a tie in any of the rankings, the order is decided based on the bot with the higher PnL. In the event that multiple bots competing for the top 10 also have the same PNL, that Prize, as well as the next n Prizes, will be split evenly among the tied participants, where n is the number of participants that tied for that rank. In the event that there are fewer than n Prizes available, then the remaining Prizes will be split evenly among the remaining winners. The score of each winner will be public during the Simulation Period. <strong>No one, including Trality, will see the winners’ algorithms.</strong>
                            </Text>
                            </Padding>
                            <Padding size={{ top: PaddingSizes.TwentyFour }}>
                            <Text bodyType="Body2">
                                Trality will email winners in order to pay out Prizes. Prizes are exclusively paid out via crypto transfer under the condition that the winner replies to the notification email by explicitly stating his/her acceptance of the Prize within 60 days and informing Trality about his/her full name and address as well as his/her crypto wallet address. The Prize will be paid out in a stable coin, and both the stable coin and network are chosen solely at the discretion of Trality.
                            </Text>
                            </Padding>
                            <Padding size={{ top: PaddingSizes.TwentyFour }}>
                            <Text bodyType="Body2">
                                Prior to the prize distribution, we may ask you to complete a KYC process to verify your identity. Participants who fail to share this information with Trality are not eligible for their Prize. All costs and fees associated with the Prize transfer, including network fees, are exclusively to be covered by the participant. If a crypto transfer to the participant is not possible due to regulatory, technical or other reasons, Trality cannot be held accountable for the Prize.
                            </Text>
                            </Padding>
                             <Padding size={{ top: PaddingSizes.TwentyFour }}>
                                <SubHeadline subheadlineType="SubHeadline1">Trality Guild</SubHeadline>
                            </Padding>
                            <Padding size={{ top: PaddingSizes.TwentyFour }}>
                            <Text bodyType="Body2">
                                Trality is also inducting outstanding bot creators into the Trality Guild. This program is specifically designed for all the high-potentials on our platform with whom we would love to engage in a long-term relationship. This relationship takes on the form of deep integration between the Creators and the Trality team in order to foster the bot-creating community and, ultimately, help the creators develop better bots. Moreover, creators are compensated with a fixed monthly remuneration for as long as the relationship remains mutually beneficial.
                            </Text>
                            </Padding>
                            <Padding size={{ top: PaddingSizes.TwentyFour }}>
                            <Text bodyType="Body2">
                                The guild will be open only to a very select number of participants and membership will be offered as a bonus to this competition. Please note, that induction into the Guild will not be directly related solely to the bot’s performance during the submission or subsequent live-trading period. Additional factors such as fit with the overall Trality Marketplace strategy, personal reliability of the creator, and willingness to maintain and improve a bot will also play a role. For more info, please visit: <TextLink intext href="https://trality.com/guild" target="_blank">https://trality.com/guild</TextLink>
                            </Text>
                            </Padding>
                            <Padding size={{ top: PaddingSizes.TwentyFour }}>
                                <SubHeadline subheadlineType="SubHeadline1">Bot Marketplace</SubHeadline>
                            </Padding>
                            <Padding size={{ top: PaddingSizes.TwentyFour }}>
                            <Text bodyType="Body2">
                                Trality may have participating Trading Bots continue running in virtual trading mode on their platform beyond the end of the Simulation Period in order to promote its platform and possible bot performance to be achieved on it. Alternatively, Trality may also chose to “sponsor” a submitted bot and have it run on a Trality-funded Binance account with real money in order to assess the bot’s performance with real assets. Moreover, Trality reserves the right to promote participating Trading Bots on their forthcoming Bot Marketplace, where the bots may be marketed to potential followers for copy trading. <strong>As always, the algorithm and all respective intellectual property rights will always remain with the Bot’s creator and no one—neither Trality nor any potential Bot Marketplace customers—will be able to see the underlying Algorithm if any Trading Bot!</strong> Should a Trading Bot be marketed on the Bot Marketplace, its creator will be compensated for possible copy-trading (additional terms of service may apply).
                            </Text>
                            </Padding>
                            <Padding size={{ top: PaddingSizes.TwentyFour }}>
                                <SubHeadline subheadlineType="SubHeadline1">Other Rules</SubHeadline>
                            </Padding>
                            
                            <Padding size={{ top: PaddingSizes.TwentyFour }}>
                                <ol>
                                    <li>
                                        <Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                            <Text bodyType="Body2">
                                                Trading Bots submitted to the Competition must place all of their orders with the order functions as described in the <TextLink href="https://docs.trality.com/trality-code-editor/api-documentation/order/creation" target="_blank" intext>Trality Docs</TextLink>.
                                            </Text>
                                        </Padding>
                                    </li>
                                    <li>
                                        <Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                            <Text bodyType="Body2">
                                                Trading Bots submitted to the Competition will be run with a fee structure on virtual accounts for Binance (0.10% Maker/Taker virtual fee).
                                            </Text>
                                        </Padding>
                                    </li>
                                    <li>
                                        <Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                            <Text bodyType="Body2">
                                               Trading bots submitted to the Competition will be run using the default 0 basis point fixed slippage model. Prices from submitted orders will always be taken from the best bid/ask price from Binance’s order book.
                                            </Text>
                                        </Padding>
                                    </li>
                                    <li>
                                        <Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                            <Text bodyType="Body2">
                                                Trading bots submitted to the Competition must use the official Trality API as documented <TextLink href="https://docs.trality.com/trality-code-editor/api-documentation" intext target="_blank">here</TextLink> and must exclusively use data fetched via the Trality <TextLink href="https://docs.trality.com/trality-code-editor/api-documentation/overview-2/object" target="_blank" intext>Data Object</TextLink>. Using a custom data source is not possible.                                   
                                            </Text>
                                        </Padding>
                                    </li>
                                    <li>
                                        <Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                            <Text bodyType="Body2">
                                                Each Participant may have only one Trality account. If the Participant submits entries from more than one account, all entries may be disqualified.
                                            </Text>
                                        </Padding>
                                    </li>
                                     <li>
                                        <Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                            <Text bodyType="Body2">
                                                Collaboration on a Trading Bot is permitted, but Trality will not manage the collaboration or Prize division. The Competition submission is made by, and is the responsibility of, the registered account holder of the account submitting the Trading Bot. You must have all necessary rights to submit your Trading Bot to the Competition.
                                            </Text>
                                        </Padding>
                                    </li>
                                    <li>
                                        <Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                            <Text bodyType="Body2">
                                                Competition scores and rankings will change as we make improvements and changes to our trading engine. While we will do our best to minimize impact, you should expect platform adjustments to cause Competition leaderboard changes.
                                            </Text>
                                        </Padding>
                                    </li>
                                    <li>
                                        <Text bodyType="Body2">Trality expressly points out that no liability is assumed for the processing of Trading Bots. This applies in particular to possible impacts on the ranking of participants, possible bot downtime, cancellation or non-filling of orders, crashing of bots caused by interruptions, or other system failures as well as third parties (e.g., server downtime, internet outage, non-availability of APIs, programming and/or system errors on the part of the exchange for crypto assets).</Text>
                                    </li>
                                </ol>
                            </Padding>
                            <Padding size={{ top: PaddingSizes.TwentyFour }}>
                                <SubHeadline subheadlineType="SubHeadline1">General Conditions</SubHeadline>
                            </Padding>
                            <Padding size={{ top: PaddingSizes.TwentyFour }}>
                                <ol>
                                    <li>
                                        <Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                            <Text bodyType="Body2">
                                                Prizes are non-transferable to other Trality members or to other accounts.
                                            </Text>
                                        </Padding>
                                    </li>
                                    <li>
                                        <Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                            <Text bodyType="Body2">
                                                Trality reserves the right at its sole discretion to alter, amend, modify, suspend or terminate this Competition, or any aspect of it, including but not limited to changing the Prize frequency, Prize amount, criteria, scoring rules, or backtesting parameters, at any time and without prior notice. In such an event, Trality will make reasonable efforts to notify all Participants by email.
                                            </Text>
                                        </Padding>
                                    </li>
                                    <li>
                                        <Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                            <Text bodyType="Body2">
                                               Trality will make all reasonable efforts to support the acceptance of entries and the execution of virtual Trading Bots. Entries may not be successfully processed or executed because of errors or failures. Those errors or failures may be caused by Trality, the Participant, third parties, or a combination of parties. Trality will not be liable or otherwise responsible for any entry that cannot be processed or executed, regardless of the cause of the problem.
                                            </Text>
                                        </Padding>
                                    </li>
                                    <li>
                                        <Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                            <Text bodyType="Body2">
                                                Trality will have complete discretion over interpretation of the Competition Rules, administration of the Competition and selection of the Winners. Trality’s decisions regarding the administration of the Competition, interpretation of the Competition Rules, and the selection of the Winners will be binding and final.
                                            </Text>
                                        </Padding>
                                    </li>
                                    <li>
                                        <Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                            <Text bodyType="Body2">
                                                Participant agrees and gives his/her express consent for Trality to use or publish without additional compensation in any medium (including, without limitation, in print, via television, via the internet, via email and or/other electronic form) and/or share with its agents, business partners and successors during and after the Competition, information for publicity purposes including photographs, videotape or digital recordings that Trality takes of Participant, Participant's Trality username, public written statements, and Trading Bot performance for all or part of the Competition, without compensation. Participant hereby waives any rights, claims or interests that Participant may have to control the use of any or all of the publicity material in whatever medium used.
                                            </Text>
                                        </Padding>
                                    </li>
                                     <li>
                                        <Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                            <Text bodyType="Body2">
                                                All current employees, interns, and contractors of Trality,  their immediate family members, and their household members are allowed to participate in the Competition.
                                            </Text>
                                        </Padding>
                                    </li>
                                    <li>
                                        <Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                            <Text bodyType="Body2">
                                                This Competition is void where prohibited by law.
                                            </Text>
                                        </Padding>
                                    </li>
                                    <li>
                                        <Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                            <Text bodyType="Body2">
                                                If any provision(s) of these Competition Rules is held to be invalid or unenforceable, all remaining provisions hereof will remain in full force and effect.
                                            </Text>
                                        </Padding>
                                    </li>
                                    <li>
                                        <Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                            <Text bodyType="Body2">
                                                Competition Winners are solely responsible for the payment of any and all taxes, including but not limited to federal, state and local taxes that may apply on their Prize. Trality shall have the right, but not the obligation, to make any deductions and withholdings that Trality deems necessary or desirable under applicable federal and local tax laws, rules, regulations, codes or ordinances.
                                            </Text>
                                        </Padding>
                                    </li>
                                    <li>
                                        <Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                            <Text bodyType="Body2">
                                                Trality is not responsible for the actions of Participants in connection with the Competition, including Participants’ attempts to circumvent the Competition Rules or otherwise interfere with the administration, security, fairness, integrity or proper conduct of the Competition. Persons found tampering with or abusing any aspect of this Competition, or whom Trality believes to be causing or attempting to cause malfunction, error, disruption or damage will be disqualified. Additionally, any attempt to cheat the Competition, as determined at the sole discretion of Trality, may result in immediate disqualification of the Participant, as well as other possible consequences, including temporary or permanent disqualification from the Competition. Trality reserves the right, at its sole and absolute discretion, to disqualify any individual who is found to be, or suspected of, acting in violation of these Competition Rules, or to be acting in an unsportsmanlike, obscene, immoral or disruptive manner, or with the intent to annoy, abuse, threaten or harass any other person.
                                            </Text>
                                        </Padding>
                                    </li>
                                    <li>
                                        <Text bodyType="Body2">These Competition Rules shall be governed by and subject to the Trality <TextLink href="https://www.trality.com/terms" intext target="_blank">Terms</TextLink> of Use as well as <TextLink href="https://www.trality.com/privacy" intext target="_blank">Privacy Statement</TextLink> including the jurisdictional and dispute processes specified therein. The Terms of Use shall prevail the Competition Rules.</Text>
                                    </li>
                                </ol>
                            </Padding>
                            <Padding size={{ top: PaddingSizes.TwentyFour }}>
                                <SubHeadline subheadlineType="SubHeadline1">Binding Agreement</SubHeadline>
                            </Padding>
                            <Padding size={{ top: PaddingSizes.TwentyFour }}>
                            <Text bodyType="Body2">
                                Participant agrees that by participating in the Competition the Participant will be bound by these Competition Rules (which may be amended or varied at any time by Trality with or without notice) as well as the terms and conditions that apply to Participant's use of the Trality website.
                            </Text>
                            </Padding>
                            <Padding size={{ top: PaddingSizes.TwentyFour }}>
                                <SubHeadline subheadlineType="SubHeadline1">Liability</SubHeadline>
                            </Padding>
                            <Padding size={{ top: PaddingSizes.TwentyFour }}>
                                <ol>
                                    <li>
                                        <Padding size={{ bottom: PaddingSizes.Sixteen }}>
                                            <Text bodyType="Body2">
                                                To the maximum extent permitted by law, Participant agrees to release, discharge and hold harmless Trality and each of its parents, subsidiaries, affiliates, Prize providers/suppliers, agents, representatives, retailers, and advertising and promotion agencies, and each of their respective directors, officers, employees, agents, successors and assigns (collectively, the "Released Parties"), from any and all liability, claims, losses, injuries, demands, damages, actions, and/or causes of actions whether direct or indirect, which may be due to or arise out of or in connection with the participation in the Competition or any portion thereof, or the awarding, acceptance, receipt, use or misuse or possession of the Prizes or while preparing for or participating in any Competition-related activity (including, without limitation, liability for any property loss, damage, personal injury or death, violation of rights of publicity or privacy, or claims of defamation or portrayal in a false light; or based on any claim of infringement of intellectual property). Participants agree that the Released Parties shall have no responsibility or liability for discontinued Prizes; human error; incorrect or inaccurate transcription of information; any technical malfunctions of the telephone network, computer equipment or systems, software, or Internet service provider utilized by Trality; interruption or inability to access the Competition website or any online service via the Internet due to hardware or software compatibility problems; any damage to participant’s (or any third person’s) computer and/or its contents related to or resulting from any part of the Competition; any lost/delayed data transmissions, omissions, interruptions, defects; and/or any other errors or malfunctions, even if caused by the negligence of the Released Parties. Each participant further agrees to indemnify and hold harmless Released Parties from and against any and all liability resulting or arising from the Competition and to release all rights to bring any claim, action or proceeding against Released Parties and hereby acknowledges that Released Parties have neither made nor are in any manner responsible or liable for any warranty, representation or guarantee, express or implied, in fact or in law, relative to a Prize, including express warranties provided exclusively by a Prize supplier that may be sent along with a Prize. The releases hereunder are intended to apply to all claims not known or suspected to exist with the intent of waiving the effect of laws requiring the intent to release future unknown claims.
                                            </Text>
                                        </Padding>
                                    </li>
                                    <li>
                                        <Text bodyType="Body2">Participant agrees that: (1) any and all disputes, claims and causes of action arising out of or connected with the Competition, or any Prize awarded, will be resolved individually, without resort to any form of class action; (2) any and all claims, judgments and awards will be limited to actual third-party, out-of-pocket costs incurred, (if any), not to exceed two hundred fifty dollars ($250.00), but in no event will attorneys’ fees be awarded or recoverable; (3) under no circumstances will any participant be permitted to obtain any award for, and participant hereby knowingly and expressly waives all rights to seek, punitive, incidental, consequential or special damages, lost profits and/or any other damages, other than actual out-of-pocket expenses not to exceed two hundred fifty dollars ($250.00), and/or any rights to have damages multiplied or otherwise increased; and (4) participant’s remedies are limited to a claim for money damages (if any) and participant irrevocably waives any right to seek injunctive or equitable relief. some jurisdictions do not allow the limitations or exclusion of liability for incidental or consequential damages, so the above may not apply to the participant.</Text>
                                    </li>
                                </ol>
                            </Padding>
                    </Cell>
                </Row>
            </MainContainer>
        </Layout.Page>
    );
};

export default Terms;
