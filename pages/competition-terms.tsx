import * as React from 'react';
import styled from 'styled-components';
import { Layout } from '@containers';
import { Header } from '@components';
import FractionLayout from 'components/fractionlayout';

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

const Table = styled.table`
    margin-top: 25px;
    margin-bottom: 25px;
    @media only screen and (min-width: 768px) {
        max-width: 450px;
        margin: 25px auto;
    }
`;

const Terms = () => {
    return (
        <Layout.Page title="terms">
            <Layout.Section fullHeight noPadding id="overview">
                <Layout.Center>
                    <Header title="Trality Trading Competition Terms &amp; Conditions">
                        <Section>
                            <b>Overview</b>
                            <p>
                                The Trality Trading Competition will run from November 1st 2020 until January 14th 2021. There are three cash prizes
                                up for grabs and both current and new Trality users are invited to participate by submitting their trading bots.
                                Scoring will be based on annualized Sharpe ratio but you can find all the fine details here.
                            </p>
                        </Section>
                        <Section>
                            <b>Eligibility</b>
                            <ol>
                                <li>
                                    To be eligible to take part in the competition, participants must have a registered Trality account. If you don’t
                                    have an account yet, you can sign up here. Trality accounts are for free at the moment and you will never be
                                    charged for our services without additional consent!
                                </li>
                                <li>
                                    Participants must be at least 18 years old or older at the time of entry. Age may be verified prior to prize
                                    distribution.
                                </li>
                                <li>Participants may be from any country or region where their entry is not prohibited or restricted by law.</li>
                                <li>There is no fee for entry and no purchase is necessary.</li>
                            </ol>
                        </Section>
                        <Section>
                            <b>Criteria</b>
                            <p>
                                In order to be eligible for participation in the Competition, entries are required to meet a particular set of
                                criteria (?) These are the criteria that are required of all Competition bots:
                            </p>
                            <p>
                                Your bot is allowed to trade in one or more of the following coins: BTC, ETH, XRP, LTC and EOS. The respective trading
                                intervals for your bot can be chosen freely. You can either use the rule editor or the code editor to create your bot.
                            </p>
                        </Section>
                        <Section>
                            <b>Submission</b>
                            <ol>
                                <li>Submission Deadline to the Competition is November 30, 2020 24:00 UTC.</li>
                                <li>
                                    To submit an entry to the Competition, you must create a Trading Bot on Trality adhering to the above mentioned
                                    criteria, using either the Trality Bot Code Editor or Rule Builder. After the bot creation, you must click on
                                    “Submit Bot” in the “Competition” menu of Trality and choose said bot. (?)
                                </li>
                                <li>
                                    A continuously updated ranking of all submitted trading bots is displayed after the Submission Deadline on the
                                    leaderboard in the Competition menu.
                                </li>
                                <li>
                                    Any submitted trading bot will run in the Competition until the end of the Competition Period, unless disqualified
                                    or manually withdrawn.
                                </li>
                                <li>Each Participant may submit up to 1 trading bot to the Competition.</li>
                                <li>Odds of winning depend on the total number of eligible entries.</li>
                                <li>
                                    To remove a trading bot from the Competition, Participants may send an email to Competition@trality.com with the
                                    bot’s ID and the wish to withdraw.
                                </li>
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
                                The Competition Period starts directly after the Submission Deadline, i.e. on December 1st, 2020, 00:00 UTC and runs
                                for 45 days, i.e. until January 14th, 2021, 24:00 UTC. During this period the bots run continuously on a virtual
                                Binance of any exchange supported by Trality? (?) account. This means that the bots submitted to this Competition will
                                NOT be trading with real assets but instead, run in a simulated environment, mirroring the real market on on the
                                relevant exchange. At the beginning of the Competition Period, each bot will be automatically assigned to such a
                                virtual account and will henceforth trade with a virtual starting balance of 20000 EUR.
                            </p>
                        </Section>
                        <Section>
                            <b>Scoring and Ranking</b>
                            <p>
                                Competition entries that meet all the structural criteria (see “Criteria” section above) are ranked continuously
                                following the beginning of the Competition Period until its end. While only the ranking at the end of the Competition
                                Period counts for the final result, this continuous ranking is meant as an indication for participants on where they
                                stand. The scoring is based on annualized Sharpe ratio and can be computed as follows:
                            </p>
                            <p>
                                <i>
                                    sharpe ={' '}
                                    <FractionLayout
                                        up={
                                            <>
                                                R<sub>p</sub>
                                            </>
                                        }
                                        down={
                                            <>
                                                O<sub>p</sub>
                                            </>
                                        }
                                    ></FractionLayout>
                                    , where R<sub>p</sub> is the portfolio return and O<sub>p</sub> is the volatility.
                                </i>
                            </p>
                            <p>
                                According to standard practice the return and volatility measures are annualized. For the computation we use daily
                                portfolio values.
                            </p>
                        </Section>
                        <Section>
                            <b>Bot Marketplace</b>
                            <p>
                                Trality reserves the right to have participating Trading Bots continue running in virtual trading mode on their
                                platform beyond the end of the Competition Perion in order to promote its platform and possible bot performance to be
                                achieved on it. Moreover, Trality reserves the right to promote participating Trading Bots on their forthcoming Bot
                                Marketplace, where the bots may be marketed to potential followers to copy-trading. As always, the algorithm and all
                                respective intellectual property rights will always remain with the Bot’s creator and noone - including Trality and
                                including potential Bot Marketplace customers - will be able to see your Trading Bot’s underlying Python Algorithm!
                                Should a Trading Bot be marketed on the Bot Marketplace its creator will be compensated for possible copytrading and
                                additional terms of service may be going to apply.
                            </p>
                        </Section>
                        <Section>
                            <b>Other Rules</b>
                            <ol>
                                <li>
                                    Trading Bots submitted to the Competition must place all of their orders with the order functions as described in
                                    the Trality Docs.
                                </li>
                                <li>
                                    Trading Bots submitted to the Competition will be run with the default fee structure on virtual accounts for the
                                    given Exchange
                                </li>
                                <li>Trading bots submitted to the Competition will be run using the default 0 basis point fixed slippage model.</li>
                                <li>
                                    Trading bots submitted to the Competition must use the official Trality API as documented here and must use
                                    exclusively data fetched via the Trality Data Object. Using a custom data source is not possible.
                                </li>
                                <li>
                                    Each Participant may have only one Trality account. If the Participant submits entries from more than one account,
                                    all entries may be disqualified.
                                </li>
                                <li>
                                    Collaboration on a Trading Bot is permitted, but Trality will not manage the collaboration or prize division. The
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
                            <b>Reward</b>
                            <p>
                                At the end of the Competition Period, the top 3 ranked participants according to Sharpe ratio will receive a cash
                                prize. This cash price is related to the performance of their bot
                            </p>
                            <Table>
                                <tr>
                                    <td>
                                        <strong>1st place</strong>
                                    </td>
                                    <td>EUR 20000 * min(max(performance,5%),15%)</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>2nd place</strong>
                                    </td>
                                    <td>EUR 20000 * min(max(performance,2.5%),10%)</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>3rd place</strong>
                                    </td>
                                    <td>EUR 20000 * min(max(performance,1.5%),5%)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <i>performance</i> ={' '}
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
                                    </td>
                                </tr>
                            </Table>
                            <p>
                                According to this pricing scheme the best ranked bot according to Sharpe ratio in the competition will get a payout
                                between EUR 1000 - 3000. Second place will get EUR 500 - 2000 And third place will get EUR 300 - 1000.
                            </p>
                            <p>
                                An individual may only win one prize, therefore if multiple Trading Bots from one participant make it to the top 3,
                                only the best-ranked bot of this participant is counted. In the event that multiple participants tie for a rank in the
                                top 3, that prize, as well as the next n prizes will be split evenly among the tied participants, where n is the
                                number of participants that tied for that rank. In the event that there are fewer than n prizes available , then the
                                remaining prizes will be split evenly among the remaining winners. The score of each winner will be public during the
                                Competition Period. No one, including Trality, will see the winners’ algorithms.
                            </p>
                            <p>
                                Trality will email winners in order to pay out prizes. Rewards are exclusively paid out via SWIFT bank transfer or
                                paypal under the condition that the winner replies to the notification email by explicitly stating his/her acceptance
                                of the price and informing Trality about his/her full name and address as well as bank account details or Paypal
                                details. Participants who fail to share this information with Trality are not eligible for their reward. All costs and
                                fees associated with the reward transfer are exclusively to be covered by the participant as Trality cannot be held
                                accountable for fees for money transfer all around the globe. If a money transfer to the participant is not possible
                                due to regulatory, technical or other reasons, Trality cannot be held accountable for the reward.
                            </p>
                        </Section>
                        <Section>
                            <b>General Conditions</b>
                            <ol>
                                <li>Prizes are non-transferable to other Trality members or to other accounts.</li>
                                <li>
                                    Trality reserves the right at its sole discretion to alter, amend, modify, suspend or terminate this Competition,
                                    or any aspect of it, including but not limited to changing the prize frequency, prize amount, criteria, scoring
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
                                    federal, state and local taxes that may apply on their prize. Trality shall have the right, but not the
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
                                    These Competition Rules shall be governed by and subject to the Trality Terms of Use as well as Privacy Statement
                                    including the jurisdictional and dispute processes specified therein.
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
                                    each of its parents, subsidiaries, affiliates, prize providers/suppliers, agents, representatives, retailers, and
                                    advertising and promotion agencies, and each of their respective directors, officers, employees, agents,
                                    successors and assigns (collectively, the "Released Parties"), from any and all liability, claims, losses,
                                    injuries, demands, damages, actions, and/or causes of actions whether direct or indirect, which may be due to or
                                    arise out of or in connection with the participation in the Competition or any portion thereof, or the awarding,
                                    acceptance, receipt, use or misuse or possession of the prizes or while preparing for or participating in any
                                    Competition-related activity (including, without limitation, liability for any property loss, damage, personal
                                    injury or death, violation of rights of publicity or privacy, or claims of defamation or portrayal in a false
                                    light; or based on any claim of infringement of intellectual property). Participants agree that the Released
                                    Parties shall have no responsibility or liability for discontinued prizes; human error; incorrect or inaccurate
                                    transcription of information; any technical malfunctions of the telephone network, computer equipment or systems,
                                    software, or Internet service provider utilized by Trality; interruption or inability to access the Competition
                                    website or any online service via the Internet due to hardware or software compatibility problems; any damage to
                                    participant’s (or any third person’s) computer and/or its contents related to or resulting from any part of the
                                    Competition; any lost/delayed data transmissions, omissions, interruptions, defects; and/or any other errors or
                                    malfunctions, even if caused by the negligence of the Released Parties. Each participant further agrees to
                                    indemnify and hold harmless Released Parties from and against any and all liability resulting or arising from the
                                    Competition and to release all rights to bring any claim, action or proceeding against Released Parties and hereby
                                    acknowledges that Released Parties have neither made nor are in any manner responsible or liable for any warranty,
                                    representation or guarantee, express or implied, in fact or in law, relative to a prize, including express
                                    warranties provided exclusively by a prize supplier that may be sent along with a prize. The releases hereunder
                                    are intended to apply to all claims not known or suspected to exist with the intent of waiving the effect of laws
                                    requiring the intent to release future unknown claims.
                                </li>
                                <li>
                                    PARTICIPANT AGREES THAT: (1) ANY AND ALL DISPUTES, CLAIMS AND CAUSES OF ACTION ARISING OUT OF OR CONNECTED WITH
                                    THE Competition, OR ANY PRIZE AWARDED, WILL BE RESOLVED INDIVIDUALLY, WITHOUT RESORT TO ANY FORM OF CLASS ACTION;
                                    (2) ANY AND ALL CLAIMS, JUDGMENTS AND AWARDS WILL BE LIMITED TO ACTUAL THIRD-PARTY, OUT-OF-POCKET COSTS INCURRED,
                                    (IF ANY), NOT TO EXCEED TWO HUNDRED FIFTY DOLLARS ($250.00), BUT IN NO EVENT WILL ATTORNEYS’ FEES BE AWARDED OR
                                    RECOVERABLE; (3) UNDER NO CIRCUMSTANCES WILL ANY PARTICIPANT BE PERMITTED TO OBTAIN ANY AWARD FOR, AND PARTICIPANT
                                    HEREBY KNOWINGLY AND EXPRESSLY WAIVES ALL RIGHTS TO SEEK, PUNITIVE, INCIDENTAL, CONSEQUENTIAL OR SPECIAL DAMAGES,
                                    LOST PROFITS AND/OR ANY OTHER DAMAGES, OTHER THAN ACTUAL OUT-OF-POCKET EXPENSES NOT TO EXCEED TWO HUNDRED FIFTY
                                    DOLLARS ($250.00), AND/OR ANY RIGHTS TO HAVE DAMAGES MULTIPLIED OR OTHERWISE INCREASED; AND (4) PARTICIPANT’S
                                    REMEDIES ARE LIMITED TO A CLAIM FOR MONEY DAMAGES (IF ANY) AND PARTICIPANT IRREVOCABLY WAIVES ANY RIGHT TO SEEK
                                    INJUNCTIVE OR EQUITABLE RELIEF. SOME JURISDICTIONS DO NOT ALLOW THE LIMITATIONS OR EXCLUSION OF LIABILITY FOR
                                    INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE MAY NOT APPLY TO THE PARTICIPANT.
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
