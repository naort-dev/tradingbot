import * as React from 'react';
import styled from 'styled-components';
import { Layout } from '@containers';
import { Header } from '@components';
import FractionLayout from 'components/fractionlayout';
import { ConstUrl } from '@constants';
import { MetaTags, Page } from '../util/metaTags';

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
            <Layout.Section fullHeight noPadding id="overview">
                <Layout.Center>
                    <Header title="Trality Trading Competition Terms &amp; Conditions">
                        <Section>
                            <b>Overview</b>
                            <p>
                                The Trality Trading Competition will run from November 4th 2020 until January 21st 2021. There are 3 cash Prizes up
                                for grabs and both current and new Trality users are invited to participate by submitting their Trading Bots, which
                                they have previously created on the Trality platform. Scoring will be based on a risk adjusted return metric, namely{' '}
                                <strong>Return over Maximum Drawdown (RoMaD)</strong>, but you can find all the fine details in the following
                                paragraphs:
                            </p>
                        </Section>
                        <Section>
                            <b>Eligibility</b>
                            <ol>
                                <li>
                                    To be eligible to take part in the competition, participants must have a registered Trality account. If you don’t
                                    have an account yet, you can sign up <a href={ConstUrl.Signup}>here</a>. Trality accounts are for free at the
                                    moment and you will never be charged for our services without additional consent!
                                </li>
                                <li>
                                    Participants must be at least 18 years old or older at the time of entry. Age may be verified prior to Prize
                                    distribution.
                                </li>
                                <li>Participants may be from any country or region where their entry is not prohibited or restricted by law.</li>
                                <li>There is no fee for entry and no purchase is necessary.</li>
                            </ol>
                        </Section>
                        <Section>
                            <b>Criteria</b>
                            <p>
                                In order to be eligible for participation in the Competition, all Trading Bots submitted are also required to meet a
                                particular set of criteria:
                            </p>
                            <ul>
                                <li>Your bot has USDT as quoted currency.</li>
                                <li>Your bot trades with 1 or more of the following coins as base currency: BTC, ETH, XRP, LTC and EOS.</li>
                                <li>Your bot runs on a Binance virtual account (see Duration and Trading).</li>
                                <li>Your bot is created either by using the Trality Code Editor or the Trality Rule Builder.</li>
                            </ul>
                        </Section>
                        <Section>
                            <b>Submission</b>
                            <ol>
                                <li>Submission Deadline to the Competition is December 7, 2020 24:00 UTC.</li>
                                <li>
                                    To submit an entry to the Competition, you must create a Trading Bot on Trality adhering to the above mentioned
                                    Criteria, using either the Trality Code Editor or Trality Rule Builder. After the bot creation, you must click on
                                    “Submit Bot” in the “Competition” menu of Trality and choose said bot.
                                </li>
                                <li>
                                    A continuously updated ranking of all submitted Trading Bots is displayed after the Submission Deadline on the
                                    leaderboard in the Competition menu.
                                </li>
                                <li>
                                    Any submitted Trading Bot will run in the Competition until the end of the Simulation Period, unless disqualified
                                    or manually withdrawn.
                                </li>
                                <li>Each Participant may submit 1 Trading Bot to the Competition.</li>
                                <li>
                                    Participant's entry must not violate or infringe on any applicable law or regulation or third-party rights,
                                    especially but not limited to any intellectual property rights.
                                </li>
                                <li>
                                    As always on Trality, Participant owns his/her algorithm. Participant's intellectual property will remain
                                    Participant's secret; we will not look at Participant's code without their prior consent.
                                </li>
                            </ol>
                        </Section>
                        <Section>
                            <b>Duration and Trading</b>
                            <p>
                                The Simulation Period starts directly after the Submission Deadline, i.e. on December 8th, 2020, 00:00 UTC and runs
                                for 45 days, i.e. until January 21st, 2021, 24:00 UTC. During this period the Trading Bots run continuously on a
                                virtual Binance exchange account, which will be automatically assigned. This means that the bots submitted to this
                                Competition will NOT be trading with real assets but instead, run in a simulated environment, mirroring the real
                                market on Binance using 0.15% fees for all trades (both maker and taker). At the beginning of the Simulation Period,
                                each Trading Bot will be automatically assigned to such a virtual account and will henceforth trade with a virtual
                                starting balance of 20,000 USDT.
                            </p>
                        </Section>
                        <Section>
                            <b>Scoring and Ranking</b>
                            <p>
                                Competition entries that meet all the Criteria outlined above (as well as Rules and Conditions outlined below) are
                                ranked continuously following the beginning of the Simulation Period until its end. While only the ranking at the end
                                of the Simulation Period counts for the final result, this continuous ranking is meant as an indication for
                                participants on where they stand.
                            </p>
                            <p>
                                The scoring is based on a risk adjusted return metric, specifically on{' '}
                                <strong>Return over Maximum Drawdown (RoMaD)</strong>. It deflates the net profitability in percent by the maximum
                                peak through peak loss in percent. It is computed as follows:
                            </p>
                            <p>
                                <i>RoMaD</i> = <FractionLayout up={'TotalReturn'} down={'1 + MDD'} />
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
                                We define X<sub>t</sub> as the portfolio value in quoted currency at timestamp t. X<sub>0</sub> is defined as the
                                start capital at the beginning of the Simulation Period - in this case 20,000 USDT. MDDis defined as the maximum
                                drawdown in percent of the portfolio value in quoted currency from starttime to endtime t.
                            </p>
                        </Section>
                        <Section>
                            <b>Prizes</b>
                            <p>
                                At the end of the Simulation Period, the top 3 ranked participants according to their Trading Bot’s RoMaD will receive
                                a cash Prize. This cash Prize is related to the performance of their Trading Bot and is made up of a minimum absolute
                                reward and a variable performance-based reward.
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
                                        <td colSpan={2}>
                                            where <br />
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
                                            - 1<p>as described under Scoring and Ranking.</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <p>
                                According to this prize scheme the best ranked Trading Bot according to RoMaD will receive a Prize between EUR 1000 -
                                3000. Second place will receive between EUR 500 - 2000 and third place between EUR 300 - 1000.
                            </p>
                            <p>
                                In the event that multiple participants tie for a rank in the top 3, that Prize, as well as the next n Prizes will be
                                split evenly among the tied participants, where n is the number of participants that tied for that rank. In the event
                                that there are fewer than n Prizes available , then the remaining Prizes will be split evenly among the remaining
                                winners. The score of each winner will be public during the Simulation Period.{' '}
                                <strong>No one, including Trality, will see the winners’ algorithms.</strong>
                            </p>
                            <p>
                                Trality will email winners in order to pay out Prizes. Prizes are exclusively paid out via SWIFT bank transfer or
                                paypal under the condition that the winner replies to the notification email by explicitly stating his/her acceptance
                                of the Prize and informing Trality about his/her full name and address as well as bank account details or Paypal
                                details. Participants who fail to share this information with Trality are not eligible for their Prize. All costs and
                                fees associated with the Prize transfer are exclusively to be covered by the participant as Trality cannot be held
                                accountable for fees for money transfer all around the globe. If a currency conversion from EUR to the winner’s local
                                currency is necessary, the standard conversion rate for that day is used and conversion fees are to be paid by the
                                winner. If a money transfer to the participant is not possible due to regulatory, technical or other reasons, Trality
                                cannot be held accountable for the Prize.
                            </p>
                        </Section>
                        <Section>
                            <b>Bot Marketplace</b>
                            <p>
                                Trality reserves the right to have participating Trading Bots continue running in virtual trading mode on their
                                platform beyond the end of the Simulation Period in order to promote its platform and possible bot performance to be
                                achieved on it. Moreover, Trality reserves the right to promote participating Trading Bots on their forthcoming Bot
                                Marketplace, where the bots may be marketed to potential followers to copy-trading.{' '}
                                <strong>
                                    As always, the algorithm and all respective intellectual property rights will always remain with the Bot’s creator
                                    and noone - including Trality and including potential Bot Marketplace customers - will be able to see any Trading
                                    Bot’s underlying Algorithm!
                                </strong>{' '}
                                Should a Trading Bot be marketed on the Bot Marketplace its creator will be compensated for possible copy-trading and
                                additional terms of service may be going to apply.
                            </p>
                        </Section>
                        <Section>
                            <b>Other Rules</b>
                            <ol>
                                <li>
                                    Trading Bots submitted to the Competition must place all of their orders with the order functions as described in
                                    the <a href="https://docs.trality.com/trality-code-editor/api-documentation/order/creation">Trality Docs</a>.
                                </li>
                                <li>
                                    Trading Bots submitted to the Competition will be run with a fee structure on virtual accounts for Binance (0.15%
                                    Maker/Taker Fee).
                                </li>
                                <li>
                                    Trading bots submitted to the Competition will be run using the default 0 basis point fixed slippage model. Prices
                                    from submitted orders will always be taken from the best bid/ask price from Binance’s orderbook.
                                </li>
                                <li>
                                    Trading bots submitted to the Competition must use the official Trality API as documented{' '}
                                    <a href="https://docs.trality.com/trality-code-editor/api-documentation">here</a> and must use exclusively data
                                    fetched via the Trality{' '}
                                    <a href="https://docs.trality.com/trality-code-editor/api-documentation/data">Data Object</a>. Using a custom data
                                    source is not possible.
                                </li>
                                <li>
                                    Each Participant may have only one Trality account. If the Participant submits entries from more than one account,
                                    all entries may be disqualified.
                                </li>
                                <li>
                                    Collaboration on a Trading Bot is permitted, but Trality will not manage the collaboration or Prize division. The
                                    Competition submission is made by, and is the responsibility of, the registered account holder of the account
                                    submitting the Trading Bot. You must have all necessary rights to submit your Trading Bot to the Competition.
                                </li>
                                <li>
                                    Competition scores and rankings will change as we make improvements and changes to our trading engine. While we
                                    will do our best to minimize impact, you should expect platform adjustments to cause Competition leaderboard
                                    changes.
                                </li>
                                <li>
                                    Trality is still in its Beta phase, Trality therefore expressly points out that no liability is assumed for the
                                    processing of Trading Bots. This applies in particular to possible impacts on the ranking of participants,
                                    possible bot downtime, cancellation or non-filling of orders or crashing of bots caused by interruptions or other
                                    system failures as well as third parties (e.g. server downtime, internet outage, non-availability of APIs,
                                    programming and/or system errors on the part of the exchange for Cryptoassets).
                                </li>
                            </ol>
                        </Section>
                        <Section>
                            <b>General Conditions</b>
                            <ol>
                                <li>Prizes are non-transferable to other Trality members or to other accounts.</li>
                                <li>
                                    Trality reserves the right at its sole discretion to alter, amend, modify, suspend or terminate this Competition,
                                    or any aspect of it, including but not limited to changing the Prize frequency, Prize amount, criteria, scoring
                                    rules, or backtesting parameters, at any time and without prior notice. In such an event Trality will make
                                    reasonable efforts to notify all Participants by email.
                                </li>
                                <li>
                                    Trality will make all reasonable efforts to support the acceptance of entries and the execution of virtual Trading
                                    Bots. Entries may not be successfully processed or executed because of errors or failures. Those errors or
                                    failures may be caused by Trality, the Participant, third parties, or a combination of parties. Trality will not
                                    be liable or otherwise responsible for any entry that cannot be processed or executed, regardless of the cause of
                                    the problem.
                                </li>
                                <li>
                                    Trality will have complete discretion over interpretation of the Competition Rules, administration of the
                                    Competition and selection of the Winners. Decisions of Trality as to the administration of the Competition,
                                    interpretation of the Competition Rules and the selection of the Winners will be binding and final.
                                </li>
                                <li>
                                    Participant agrees and gives his/her express consent for Trality to use or publish without additional compensation
                                    in any medium (including, without limitation, in print, via television, via the internet, via email and or/other
                                    electronic form) and/or share with its agents, business partners and successors during and after the Competition,
                                    information for publicity purposes including photographs, videotape or digital recordings that Trality takes of
                                    Participant, Participant's Trality username, public written statements, and Trading Bot performance for all or
                                    part of the Competition, without compensation. Participant hereby waives any rights, claims or interests that
                                    Participant may have to control the use of any or all of the publicity material in whatever medium used.
                                </li>
                                <li>
                                    All current employees, interns, and contractors of Trality; and their immediate family members; and their
                                    household members are allowed to participate in the Competition.
                                </li>
                                <li>This Competition is void where prohibited by law.</li>
                                <li>
                                    If any provision(s) of these Competition Rules is held to be invalid or unenforceable, all remaining provisions
                                    hereof will remain in full force and effect.
                                </li>
                                <li>
                                    Competition Winners are solely responsible for the payment of any and all taxes, including but not limited to
                                    federal, state and local taxes that may apply on their Prize. Trality shall have the right, but not the
                                    obligation, to make any deductions and withholdings that Trality deems necessary or desirable under applicable
                                    federal, and local tax laws, rules, regulations, codes or ordinances.
                                </li>
                                <li>
                                    Trality is not responsible for the actions of Participants in connection with the Competition, including
                                    Participants’ attempts to circumvent the Competition Rules or otherwise interfere with the administration,
                                    security, fairness, integrity or proper conduct of the Competition. Persons found tampering with or abusing any
                                    aspect of this Competition, or who Trality believes to be causing or attempting to cause malfunction, error,
                                    disruption or damage will be disqualified. Additionally, any attempt to cheat the Competition, as determined at
                                    the sole discretion of Trality, may result in immediate disqualification of the Participant, as well as other
                                    possible consequences, including temporary or permanent disqualification from the Competition. Trality reserves
                                    the right, at its sole and absolute discretion, to disqualify any individual who is found to be, or suspected of,
                                    acting in violation of these Competition Rules, or to be acting in an un-sportsmanlike, obscene, immoral or
                                    disruptive manner, or with the intent to annoy, abuse, threaten or harass any other person.
                                </li>
                                <li>
                                    These Competition Rules shall be governed by and subject to the Trality{' '}
                                    <a href="https://www.trality.com/terms">Terms of Use</a> as well as{' '}
                                    <a href="https://www.trality.com/privacy">Privacy Statement</a> including the jurisdictional and dispute processes
                                    specified therein. The Terms of Use shall prevail the Competition Rules.
                                </li>
                            </ol>
                        </Section>
                        <Section>
                            <b>Binding Agreement</b>
                            <p>
                                Participant agrees that by participating in the Competition that Participant will be bound by these Competition Rules
                                (which may be amended or varied at any time by Trality with or without notice) as well as the terms and conditions
                                that apply to Participant's use of the Trality website.
                            </p>
                        </Section>
                        <Section>
                            <b>Liability</b>
                            <ol>
                                <li>
                                    To the maximum extent permitted by law, Participant agrees to release, discharge and hold harmless Trality and
                                    each of its parents, subsidiaries, affiliates, Prize providers/suppliers, agents, representatives, retailers, and
                                    advertising and promotion agencies, and each of their respective directors, officers, employees, agents,
                                    successors and assigns (collectively, the "Released Parties"), from any and all liability, claims, losses,
                                    injuries, demands, damages, actions, and/or causes of actions whether direct or indirect, which may be due to or
                                    arise out of or in connection with the participation in the Competition or any portion thereof, or the awarding,
                                    acceptance, receipt, use or misuse or possession of the Prizes or while preparing for or participating in any
                                    Competition-related activity (including, without limitation, liability for any property loss, damage, personal
                                    injury or death, violation of rights of publicity or privacy, or claims of defamation or portrayal in a false
                                    light; or based on any claim of infringement of intellectual property). Participants agree that the Released
                                    Parties shall have no responsibility or liability for discontinued Prizes; human error; incorrect or inaccurate
                                    transcription of information; any technical malfunctions of the telephone network, computer equipment or systems,
                                    software, or Internet service provider utilized by Trality; interruption or inability to access the Competition
                                    website or any online service via the Internet due to hardware or software compatibility problems; any damage to
                                    participant’s (or any third person’s) computer and/or its contents related to or resulting from any part of the
                                    Competition; any lost/delayed data transmissions, omissions, interruptions, defects; and/or any other errors or
                                    malfunctions, even if caused by the negligence of the Released Parties. Each participant further agrees to
                                    indemnify and hold harmless Released Parties from and against any and all liability resulting or arising from the
                                    Competition and to release all rights to bring any claim, action or proceeding against Released Parties and hereby
                                    acknowledges that Released Parties have neither made nor are in any manner responsible or liable for any warranty,
                                    representation or guarantee, express or implied, in fact or in law, relative to a Prize, including express
                                    warranties provided exclusively by a Prize supplier that may be sent along with a Prize. The releases hereunder
                                    are intended to apply to all claims not known or suspected to exist with the intent of waiving the effect of laws
                                    requiring the intent to release future unknown claims.
                                </li>
                                <li>
                                    Participant agrees that: (1) any and all disputes, claims and causes of action arising out of or connected with
                                    the Competition, or any Prize awarded, will be resolved individually, without resort to any form of class action;
                                    (2) any and all claims, judgments and awards will be limited to actual third-party, out-of-pocket costs incurred,
                                    (if any), not to exceed two hundred fifty dollars ($250.00), but in no event will attorneys’ fees be awarded or
                                    recoverable; (3) under no circumstances will any participant be permitted to obtain any award for, and participant
                                    hereby knowingly and expressly waives all rights to seek, punitive, incidental, consequential or special damages,
                                    lost profits and/or any other damages, other than actual out-of-pocket expenses not to exceed two hundred fifty
                                    dollars ($250.00), and/or any rights to have damages multiplied or otherwise increased; and (4) participant’s
                                    remedies are limited to a claim for money damages (if any) and participant irrevocably waives any right to seek
                                    injunctive or equitable relief. some jurisdictions do not allow the limitations or exclusion of liability for
                                    incidental or consequential damages, so the above may not apply to the participant.
                                </li>
                            </ol>
                        </Section>
                    </Header>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};

export default Terms;
