import * as React from 'react';
import styled from 'styled-components';
import { Layout } from '@containers';
import { Header } from '@components';

import { MetaTags, Page } from '../util/metaTags';
import { MainContainer, Padding, PaddingSizes } from '@trality/web-ui-components';

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

const Terms = () => {
    return (
        <Layout.Page title="terms">
            <MetaTags page={Page.Terms} />
            <MainContainer>
                <Padding
                    size={{
                        top: PaddingSizes.NinetySix,
                        bottom: PaddingSizes.NinetySix,
                        left: PaddingSizes.Zero,
                        right: PaddingSizes.Zero,
                    }}
                    mobileSize={{
                        top: PaddingSizes.FiftySix,
                        bottom: PaddingSizes.FiftySix,
                        left: PaddingSizes.Zero,
                        right: PaddingSizes.Zero,
                    }}
                >
                    <Layout.Section fullHeight noPadding id="overview">
                        <Layout.Center>
                            <Header title="General Terms and Conditions" subtitle="(February 2021)">
                                <Section>
                                    <ol>
                                        <li>
                                            <b>Scope / amendment of the General Terms and Conditions</b>
                                            <ol>
                                                <li>
                                                    The following General Terms and Conditions ("GTC") shall apply to all present and future business
                                                    transactions, contracts and business relationships, in any case and in particular also to
                                                    transactions with/on online or electronic platforms (such as https://www.trality.com,
                                                    https://app.trality.com) as well as mobile applications ("App"; App together with online or
                                                    electronic platforms the "Platform"), between TRALITY GmbH, FN 504493 b ("TRALITY") and persons
                                                    who visit or use the Platform and/or users of the App as well as persons who use one or more
                                                    services and functions offered on the Platform ("Services") and meet al requirements in accordance
                                                    with the Platform ("Users"; the User and TRALITY together the "Parties" and each a "Party"), in
                                                    each case in the version valid at the time of conclusion of a contract, even if no express
                                                    reference is made in each case to the GTC.
                                                </li>
                                                <li>
                                                    These GTC apply both to consumers and to entrepreneurs within the meaning of the Austrian Consumer
                                                    Protection Act (Konsumentenschutzgesetz "KSchG").
                                                </li>
                                                <li>
                                                    Insofar as reference is made to "consumer" in this GTC, these are natural persons in accordance
                                                    with the applicable legal definition of consumers, such as at present for whom the purpose of
                                                    using the services offered on the Platform or the purpose of using the App cannot be attributed to
                                                    a commercial, independent of freelance activity, i.e. a transaction with TRALITY is not part of
                                                    the operation of their business.
                                                </li>
                                                <li>
                                                    Insofar as these GTC refer to "entrepreneurs", these are persons to whom the respective definition
                                                    of consumer does not apply, such as currently, a natural or legal person or partnerships with
                                                    legal capacity, for whom the use of the Services offered on the Platform or the use of the App
                                                    belongs to the operation of their business. The distinction between consumer and entrepreneur is
                                                    made in accordance with the applicable law, such as the KSchG.
                                                </li>
                                                <li>
                                                    By ticking the appropriate box during registration on the platform, the User accepts these GTC and
                                                    declares his agreement with the content. The GTC can be retrieved, downloaded, printed and stored
                                                    on the respective storage of the User.
                                                </li>
                                                <li>
                                                    TRALITY expressly rejects any deviating general terms and conditions of the User. Deviating or
                                                    supplementary general terms and conditions of the User shall not become part of any contract, even
                                                    if they have not been expressly rejected.
                                                </li>
                                                <li>
                                                    The provisions of these GTC may be amended by TRALITY at any time without giving reasons. The User
                                                    will be informed about the amendments made in the GTC by mail and upon log in on the Platform and
                                                    can agree to the amended GTC by clicking an OK button during the log in on the Platform. In case
                                                    of a User who is an entrepreneur, the changes shall be deemed accepted if the User does not object
                                                    to them in writing by e-mail to legal@trality.com within 10 days of receipt of the aforementioned
                                                    notice. In the event of a lack of consent and/or, if the User is an entrepreneur, a timely
                                                    objection to the changes, the contractual relationship between the User and TRALITY shall continue
                                                    in accordance with the GTC in the version prior to the announced amendments.
                                                </li>
                                            </ol>
                                        </li>
                                        <li>
                                            <b>Conclusion of a contract</b>
                                            <ol>
                                                <li>
                                                    TRALITY only offers services and access to the Platform to those persons who are of legal age. The
                                                    User declares to be at least 18 years old. The time of the respective conclusion of the contract
                                                    between the User and TRALITY is governed by the following provisions. The User shall only be
                                                    notified separately of the conclusion of the contract if so provided for in the following
                                                    provisions or required by law. The fulfilment of the contract shall be carried out immediately
                                                    after the conclusion of the contract.
                                                </li>
                                                <li>
                                                    Every user who is to be classified as a consumer hereby expressly wishes TRALITY to begin
                                                    fulfilling the contract prematurely, i.e. before the expiry of any right of withdrawal on the part
                                                    of the User.
                                                </li>
                                                <li>
                                                    The User hereby expressly declares, that, in case the account of the User on the Platform is
                                                    linked to an electronic wallet or exchange account ("Wallet") via application programming
                                                    interface ("API"), the User has the power of disposal over the Wallet whether as owner, or as
                                                    authorised representative.
                                                </li>
                                            </ol>
                                        </li>
                                        <li>
                                            <b>Services by TRALITY</b>
                                            <ol>
                                                <li>
                                                    General
                                                    <ol>
                                                        <li>
                                                            TRALITY offers Users on the Platform the possibility to program algorithmic trading
                                                            programs ("Bots"), whereby the User is provided with various programming models, at the
                                                            sole discretion of TRALITY. It is expressly stated that TRALITY shall not serve as a
                                                            trading centre for cryptographic block-chain-based digital information units
                                                            ("Cryptoassets") or other goods of any kind. TRALITY does not accept or receive, transmit
                                                            or place any trade orders. All trade-related processes relating to Cryptoassets or other
                                                            goods of any kind shall take place exclusively with third parties. TRALITY merely provides
                                                            the software for programming, testing and deploying (which means live-, mirror- and
                                                            paper-trading) Bots of Users.
                                                        </li>
                                                        <li>
                                                            The User expressly agrees that TRALITY may change or remove functions and Services on the
                                                            Platform at any time in its sole discretion. The User also acknowledges that there may be
                                                            temporary interruptions to the Platform and the temporary suspension of Services due to
                                                            maintenance work and system and/or software updates.
                                                        </li>
                                                    </ol>
                                                </li>
                                                <li>
                                                    Registration / Login Data
                                                    <ol>
                                                        <li>
                                                            In order to be able to use the Services provided by TRALITY on the Platform, the User
                                                            undertakes to register on the Platform by providing TRALITY with valid and truthful
                                                            information in accordance with the registration form. The User will only be able to make
                                                            use of the Services provided on the Platform once registration has been successfully
                                                            completed.
                                                        </li>
                                                        <li>
                                                            TRALITY is entitled to reject Users at its own discretion without giving reasons and to
                                                            change any of the criteria for the registration at any time before concluding a
                                                            transaction. A User is expressly not entitled to demand the transmission of the result of
                                                            a possible rejection of TRALITY or to derive claims of any kind whatsoever from a known
                                                            result of a possible rejection, to the extent legally permissible.
                                                        </li>
                                                        <li>
                                                            The User registers itself on the Platform with its mail address and a password (the "Login
                                                            Data"). The User undertakes to keep the Login Data secret and to protect the Login Data
                                                            from access by unauthorised third parties. The User is solely responsible for the secrecy
                                                            and protection of the Login Data. If the User passes on the Login Data to third parties,
                                                            the User undertakes to bind the third party to comply with these GTC. The User shall be
                                                            liable for all disadvantages suffered by TRALITY if he fails to make the aforementioned
                                                            transfer. However, the above provision shall not apply in the event of misuse of the Login
                                                            Data by third parties for which the User is not at fault. In the event of loss of the
                                                            Login Data or if it is suspected that unauthorised third parties have gained knowledge of
                                                            the Login Data, the User is obliged to notify TRALITY immediately by email to
                                                            legal@trality.com, so that a blocking of the customer account can be initiated.
                                                            Registration on behalf of third parties or transfer of the User's account to third parties
                                                            is not permitted.
                                                        </li>
                                                    </ol>
                                                </li>
                                                <li>
                                                    Bot Creation
                                                    <ol>
                                                        <li>
                                                            The tab "Create Bots" offers Users tools to create and store their own Bots on the
                                                            platform by using the tools as provided for by the platform.
                                                        </li>
                                                        <li>
                                                            Via the Platform, TRALITY provides the User with standard settings of a source code
                                                            ("Templates") on which a bot may be created. It is expressly stated, that these Templates
                                                            are no recommendation or suggestion of any kind, but shall provide the User merely with a
                                                            basic structure on which the Bot may be built.
                                                        </li>
                                                        <li>
                                                            Back-testing: During the process of creating a Bot, the User is provided with the
                                                            possibility to test the created Bot (the "Back-Testing"). During the Back-Testing, the
                                                            provided services search for any technical problems in the created Bots (i.e. code
                                                            errors). In addition, in the course of the Back-Testing process, the User can also test
                                                            the outcome of the Bot by running a demo with the created Bot with historical data
                                                            available from Cryptocurrency exchanges on the Platform. The User expressly declares, that
                                                            it is understood, that the process of Back-testing is no guarantee for future economic
                                                            success – please also see clause 9.4.
                                                        </li>
                                                    </ol>
                                                </li>
                                                <li>
                                                    Tutorial: On the Platform, the User can find a tutorial in which useful tips relating to the
                                                    Platform, the Services provided and the creation of Bots can be found. The tutorial shall help the
                                                    User navigate through the Platform and optimise its use of the Services. The User understands and
                                                    acknowledges that the tutorial shall and must not be considered an investment advice or any other
                                                    proposal on how to create or use a Bot.
                                                </li>
                                                <li>
                                                    Documentation: Via <a href="https://docs.trality.com">https://docs.trality.com</a> ("Docs"),
                                                    TRALITY, besides the Platform, built a knowledge base on the various possibilities of how to
                                                    program a Bot. Docs is an additional service that shall help the User to create and implement a
                                                    strategy for the Bot. The User understands and acknowledges that Docs shall and must not be
                                                    considered an investment advice or any other proposal on how to create or use a Bot. The website{' '}
                                                    <a href="https://docs.trality.com">https://docs.trality.com</a> is hosted at and maintained by
                                                    Gitbook (<a href="https://www.gitbook.com">https://www.gitbook.com</a>); TRALITY only provides the
                                                    content for the Users.
                                                </li>
                                                <li>
                                                    Marketplace: Via the Platform, TRALITY provides the possibility for Users to follow Bots from
                                                    other Users of TRALITY. The Bots followed send trading signals to the followers account. A
                                                    software solution on the Platform forward these signals to the respective Exchange of the
                                                    following User for trading with their Cryptocurrencies on the account of the following User. The
                                                    User understands and expressly acknowledges, that the service on the Platform, which enables a
                                                    User to follow Bots of other Users, shall and must not be considered an investment advice or any
                                                    other proposal by TRALITY. It remains the free and unaffected choice of each User, whether he
                                                    follows one or several Bots.
                                                </li>
                                                <li>
                                                    Live Trading
                                                    <ol>
                                                        <li>
                                                            TRALITY offers the User the possibility to enable the Bot(s) for live trading on a
                                                            connected exchange ("Live Trading"). For Live Trading, the Bot needs to utilize an API of
                                                            the User in respect of the exchange. Via such API the Bot may communicate with the
                                                            respective exchange and place sell and buy orders respectively. The User is obliged to
                                                            test and to check whether the Bot is compatible with the exchange and/or its API in
                                                            respect of the exchange, from time to time. TRALITY does not assume any liability for any
                                                            compatibility with the exchange from time to time.
                                                        </li>
                                                        <li>
                                                            The User understands and expressly acknowledges the risks related to Live Trading,
                                                            including, in particular, but not limited to, the risks stated in section 9 of this GTC.
                                                            TRALITY does not assume any liability in respect of the API, the functionality of the API,
                                                            the compatibility of the Bot on the Platform with the exchange and with functions of the
                                                            API, any settings of the User with such exchange or different verification levels. The
                                                            User is solely responsible to provide for the respective settings and/or verification
                                                            levels necessary or useful to operate the Bot with the exchange. Further, TRALITY does not
                                                            assume any liability for any internet connections with the exchange, in particular, but
                                                            not limited to, in respect of any bandwidth, ping time, or any other details of any
                                                            internet connection.
                                                        </li>
                                                    </ol>
                                                </li>
                                                <li>
                                                    Licencing: TRALITY agrees to grant the User a non-exclusive license to use the software services
                                                    on the Platform. TRALITY reserves the right to exclude the User from such services without any
                                                    notice and without any grounds in the sole discretion of TRALITY, in particular, if the User has
                                                    breached one of his obligations under this GTC without curing such breach within 14 days or, if
                                                    the User creates a Bot which does not comply with the rules and regulations of a Cryptoasset
                                                    exchange used by the Bot, or if the User has breached any law in connection with the function of
                                                    the Bot.
                                                </li>
                                            </ol>
                                        </li>
                                        <li>
                                            <b>Pricing and Subscription Models</b>
                                            <ol>
                                                <li>
                                                    TRALITY offers the User on the Platform four different pricing and subscription models for trading
                                                    via a Bot, which differ in the scope of services and costs. Those models are called "Pawn",
                                                    "Knight", "Rook" and "Queen" (together "Pricing Models" and individually each a "Pricing Model").
                                                </li>
                                                <li>
                                                    On the Platform under "Pricing" and by clicking the tab "Monthly" or "Yearly", the User can find
                                                    the prices for buying the Pricing Model monthly,- or yearly. The tab "Start Now" guides the User
                                                    to the subscription and/or Login, as the case may be. If the User is logged in, the Pricing Models
                                                    are available under "Settings" and "Subscription". By clicking the Tab "Change Plan", the User
                                                    changes from the pre-chosen Pricing Model "Pawn" to the selection field "Select Plan". Under
                                                    "Select Plan" the User can choose the respective Pricing Model. Under "Billing Cycle" the User may
                                                    select and agree on the respective term of the contract and the respective billing period by
                                                    clicking on the tab "continue" (the respective period the "Subscription Period" and the respective
                                                    price the "Subscription Fee"). Under "Payment Method" the User shall select its payment method and
                                                    under "Review & Confirm" the User is able to conclude the respective contract legally binding by
                                                    clicking "confirm & pay".
                                                </li>
                                                <li>
                                                    After the expiry of a Subscription Period, the respective contract automatically renews for a time
                                                    period corresponding to the Subscription Period, unless the contract has been terminated according
                                                    to this GTC.
                                                </li>
                                                <li>
                                                    The following definitions shall apply:
                                                    <ol>
                                                        <li>
                                                            "Trading Volume" means the total trading volume of all Bots of the User in euro equivalent
                                                            each month. The User receives a warning, if the Bot reaches 80% of the respective Trading
                                                            Volume for the current month. If the Bot exceeds the allowed Trading Volume, it is only
                                                            allowed to process sell orders in order to exit the open positions.
                                                        </li>
                                                        <li>
                                                            "Allowed Tick Interval" means the lowest possible tick intervals which the User can
                                                            select. A tick interval means the time between one and another signal being sent by the
                                                            Bot to the Exchange. TRALITY provides the following tick intervals: 1 minute, 5 minutes,
                                                            15 minutes, 30 minutes, 1 hour, 6 hours, 12 hours and 1 day. The lowest Allowed Tick
                                                            Interval depends on the respective Pricing Model.
                                                        </li>
                                                        <li>
                                                            "Live Bots" and "Virtual Bots" specifies the number of Bots that can be started trading
                                                            with either real assets ("Live Bots") or virtual assets ("Virtual Bots").
                                                        </li>
                                                        <li>
                                                            "Log Retention" means the period of time for which TRALITY stores the respective logs of
                                                            the Bot. TRALITY uses those bot logs for debugging purpose.
                                                        </li>
                                                        <li>"Backtests" has the meaning set forth in 3.3.3.</li>
                                                    </ol>
                                                </li>
                                                <li>
                                                    Changes of Pricing Models during Subscription Period:
                                                    <ol>
                                                        <li>
                                                            During current Subscription Period, the User is not allowed to change to a Pricing Model,
                                                            which consists of less services than the one subscribed for ("Downgrade"). Downgrade shall
                                                            only be permissible with effect at the end of a Subscription Period and if the User
                                                            informs TRALITY via e-mail in advance.
                                                        </li>
                                                        <li>
                                                            The change to a Pricing Model, which consists of more services than the ones subscribed
                                                            for shall be permissible anytime via the Platform under "Subscription" during a
                                                            Subscription Period ("Upgrade"). If the User undertakes an Upgrade (such day on which the
                                                            Upgrade has been made by the User the "Upgrade Day"), by clicking on the tab "Change Plan"
                                                            under "Settings" and "Subscription", the User changes from the previous chosen Pricing
                                                            Model to the one selected under "Select Plan". Under "Billing Cycle" the User may select
                                                            and agree on the respective term of the upgrade contract and the respective billing period
                                                            by clicking on the tab "continue" (the respective upgrade period the "Upgrade Subscription
                                                            Period" and the respective price the "Upgrade Subscription Fee"). Under "Payment Method"
                                                            the User shall select its payment method and under "Review & Confirm" the User is able to
                                                            finally conclude the respective contract and undertake the upgrade legally binding by
                                                            clicking "confirm & pay". In case of an Upgrade, the portion of the Subscription Fee
                                                            already paid to TRALITY in advance for the current subscription attributable to the amount
                                                            of days between the Upgrade Day and the end of the current Subscription Period, shall be
                                                            set-off with the portion of the Upgrade Subscription Fee attributable to the amount of
                                                            days between the Upgrade Day and the end of the current Subscription Period.
                                                        </li>
                                                    </ol>
                                                </li>
                                            </ol>
                                        </li>
                                        <li>
                                            <b>Payment and Delay of Payment</b>
                                            <ol>
                                                <li>
                                                    If the User chooses a Pricing Model for Live Trading via the Platform, the User will be charged a
                                                    respective Subscription Fee according to the Subscription Fee and Subscription Period by TRALITY
                                                    in advance for each Subscription Period (the "Payment"). TRALITY offers the User the following
                                                    possibilities for Payment via stripe: Visa, Mastercard, Discover, Amex, Diners, Apple Pay, Google
                                                    Pay, Klarna and EPS (each a "Payment Method").
                                                </li>
                                                <li>
                                                    When signing up for Live Trading, the User is obliged to deposit his payment information subject
                                                    to the Payment Method used by the User (the "Payment Account") with TRALITY. The respective
                                                    Payment shall be immediately payable and due on the first day of each Subscription Period in
                                                    advance. Thus, the User shall authorize TRALITY to charge the Payment Account in accordance with
                                                    the general terms and conditions applicable for the Payment Method used by the User for its
                                                    respective Payment. The User is obliged to provide sufficient funds on the due date. If collection
                                                    via the Payment Method is not possible (e.g. insufficient funds), the User shall bear any
                                                    resulting costs (e.g. credit card fees)
                                                </li>
                                                <li>
                                                    The User is in delay with its Payment if the Payment cannot be charged from the Payment Account
                                                    because of insufficient funds or any other reason attributable to the User.{' '}
                                                </li>
                                                <li>
                                                    In the case of delay of the User, TRALITY shall be entitled to charge any fees related to such
                                                    delay, in particular, but not limited to, any dunning fees (a total amount of at least EUR 10.00
                                                    up to a maximum of EUR 20.00 will be charged). In case TRALITY engages a third party with any
                                                    dunning and collection services, TRALITY shall be entitled to additionally charge any additional
                                                    expenses charged by the third party and in compliance with the "Verordnung des Bundesministers für
                                                    wirtschaftliche Angelegenheiten über die Höchstsätze der Inkassoinstituten gebührenden
                                                    Vergütungen" (BGBI Nr. 141/1996 idgF), to the extent that these are reasonable and necessary to
                                                    cover adequate prosecution costs.{' '}
                                                </li>
                                            </ol>
                                        </li>
                                        <li>
                                            <b>Termination and Refund of Payments</b>
                                            <ol>
                                                <li>
                                                    6.1. If the User or TRALITY terminate the contract extraordinarily, the User shall be entitled to
                                                    a certain refund according to this section 6.2 ("Refund"). However and for the avoidance of any
                                                    doubt, there shall be no automatic refund. Instead and as a prerequisite, the User shall be
                                                    obliged to claim such Refund from TRALITY via e-mail in order to be entitled to such Refund. The
                                                    amount of the Refund, if any, shall be calculated and correspond to the portion of the
                                                    Subscription Fee already paid to TRAILITY in advance attributable to the amount of days between
                                                    the Termination Date and the end of the Subscription Period, in which termination occurred. The
                                                    Refund shall be payable within 14 days.
                                                </li>
                                            </ol>
                                        </li>
                                        <li>
                                            <b>Exception to the right of withdrawal</b>
                                            <ol>
                                                <li>
                                                    Pursuant to Art 11 of the Austrian Distance Transaction Act (Fern- und Auswärtsgeschäfte Gesetz
                                                    "FAGG"), a consumer is entitled to withdraw from a distance contract or a contract concluded
                                                    outside business premises within 14 days. The period begins with the day of the conclusion of the
                                                    contract (Art 11 para. 2 lit 3 FAGG). TRALITY shall expressly inform the consumer that, at the
                                                    express request of the consumer, performance of the contract may commence prior to expiry of the
                                                    withdrawal period. In this case the consumer loses his right of withdrawal. By ticking the
                                                    appropriate box during registration on the platform, the consumer expressly consents to immediate
                                                    performance of the contract by TRALITY. The User acknowledges that this terminates the right of
                                                    withdrawal in favour of consumers within the meaning of the KSchG for Services offered on the
                                                    Platform pursuant to Art 18 para. 1 lit 11 FAGG.
                                                </li>
                                            </ol>
                                        </li>
                                        <li>
                                            <b>Obligations of the User to cooperate</b>
                                            <ol>
                                                <li>
                                                    The User undertakes to do everything in his power to ensure the rapid performance of the contract
                                                    and to refrain from doing anything that could thwart or jeopardise the performance of the
                                                    contract. The User shall immediately notify TRALITY of any defects or other problems in connection
                                                    with the Platform and the Services offered and enable TRALITY to remedy them.
                                                </li>
                                                <li>
                                                    The User must ensure that the technical requirements for receiving e-mails from TRALITY are met at
                                                    all times.{' '}
                                                </li>
                                            </ol>
                                        </li>
                                        <li>
                                            <b>Risks</b>
                                            <br />
                                            The user understands and accepts the risks listed below in connection with the use of the platform and the
                                            services provided with it. These include in particular the following risks:
                                            <ol>
                                                <li>
                                                    Software risk: The Platform and Services provided by TRALITY are still under development and are
                                                    subject to constant change. It cannot be ruled out that the software is not yet fully developed
                                                    and contains weak points or errors that may restrict the use of the Platform and the Services and
                                                    the trading based on the Bots.
                                                </li>
                                                <li>
                                                    Regulations: To date, the Platform provided and the Services rendered by TRALITY have not been
                                                    subject to any significant regulatory restrictions. It is also TRALITY's intention not to be
                                                    subject to any financial market regulations at this stage. However, it is expressly pointed out
                                                    that the Services offered may be extended to the extent that certain financial market regulations
                                                    apply to TRALITY or the Services offered via the Platform in the future and that this may also
                                                    have an impact on Users.
                                                </li>
                                                <li>
                                                    Internet dangers and loss: The platform provided by TRALITY and the associated Services can become
                                                    the target of physical or electronic attacks. This could lead to the loss of data (such as
                                                    personal data or other data provided or created by the User). Data could also be taken away
                                                    unlawfully and used for abusive or fraudulent purposes (such as phishing or spoofing). The User
                                                    will carefully check messages and communications from TRALITY and check whether the messages or
                                                    communications originate from TRALITY if there are any uncertainties regarding the authenticity of
                                                    a message or communication.
                                                </li>
                                                <li>
                                                    No guarantee of success: The use of the TRALITY Platform and the Services offered is no guarantee
                                                    that the User will derive economic success from it. The Platform provided by TRALITY merely offers
                                                    the User the possibility of programming a Bot, which can thus be linked to the User's Wallet in
                                                    which Cryptoassets are stored. A back-test of a Bot programmed by the User himself, any prior
                                                    virtual trading on historical data or real time data with no connection to an Cryptoasset exchange
                                                    or any other testing possibly carried out on the Platform, in no way guarantees economic success
                                                    when using the Bot in live trading. Furthermore, TRALITY expressly informs the User, that there is
                                                    a certain risk that flawless execution of transactions at certain prices and quantities may occur.
                                                    Due to the fact, that transactions are carried out on certain Cryptoasset exchanges, there may be
                                                    a spread in price and/or quantity between the executed transactions as compared to the order
                                                    generate by a Bot (e.g. Slippage). For Users who follow a certain Bot, it might be the case that
                                                    the following User might not have the chance to generate the same prices and quantities as the Bot
                                                    he follows due to volatility on the market.
                                                </li>
                                                <li>
                                                    General market risk: The Bot programmed by the User himself does not guarantee economic success.
                                                    The User is aware that the value of Cryptoassets is subject to a general market risk and thus to
                                                    fluctuations in value and price. TRALITY has no influence on the values and prices of traded
                                                    Cryptoassets or other goods or assets.
                                                </li>
                                                <li>
                                                    Taxes: The use of the Platform, the Services offered with it or a Bot and especially the resulting
                                                    transactions can have tax effects at the level of the customer. The User expressly declares that
                                                    he/she will clarify any tax effects and obtain appropriate advice (e.g. from a tax advisor). The
                                                    User also expressly declares that he/she will not hold TRALITY or any party associated therewith
                                                    (in particular consultants, employees and other contractual partners) liable for tax obligations.
                                                </li>
                                            </ol>
                                        </li>
                                        <li>
                                            <b>Liability</b>
                                            <ol>
                                                <li>
                                                    The administration of the Platform and the associated Services is carried out by TRALITY with the
                                                    necessary due care. The User is aware that interruptions, failures or other errors and problems
                                                    may occur in both of the software (i.e software bugs) and the hardware of internet-based and
                                                    experimental technology services. TRALITY will try to find solutions to such problems as far as
                                                    possible. In any case, TRALITY does not assume any obligations and in particular any liability for
                                                    damages that may result or occur from interruptions, failures or other errors and problems of or
                                                    in connection with the Platform and the Services offered and/or the software, in particular in
                                                    case of not intended trades or false trades, which may lead to a financial and/or other damage of
                                                    any User.
                                                </li>
                                                <li>
                                                    The User is aware that technology-based and experimental systems may be subject to maintenance
                                                    work or development measures (software updates) and that interruptions to the Platform and the
                                                    associated Services may occur.
                                                </li>
                                                <li>
                                                    To the extent permitted by law, TRALITY shall only be liable on whatever legal grounds if damage
                                                    was caused by gross negligence or wilful misconduct by TRALITY. TRALITY's liability for slight
                                                    negligence is excluded to the extent permitted by law, with the exception of personal injury.
                                                    TRALITY's liability for damages arising directly or indirectly for the User or for third parties
                                                    on the basis of the information provided by the User is expressly excluded. The User is
                                                    responsible for the accuracy, including technical accuracy, of his own information. Further
                                                    TRALITY does not assume any liability in connection with the implementation of orders at any
                                                    third-party platform and/or exchange.
                                                </li>
                                                <li>
                                                    TRALITY expressly points out that no liability is assumed for the processing of transactions based
                                                    on the Bots. This applies in particular to damage caused by interruptions or other systemic
                                                    failures as well as special features of third parties (e.g. server downtime, internet outage,
                                                    non-availability of APIs, programming and/or system errors on the part of a trading centre or
                                                    exchange for Cryptoassets).
                                                </li>
                                                <li>
                                                    The User is aware that TRALITY has no influence on the placement and/or execution of transactions
                                                    with third parties. TRALITY makes no warranties or representations regarding the timelines, size
                                                    or volume of transactions based on the Bots. Liability is also excluded for any delayed
                                                    transactions or transactions that have not been completed in the desired form.
                                                </li>
                                                <li>
                                                    TRALITY provides the Platform and the associated Services 24 hours a day, 7 days a week. According
                                                    to the current state of the art, there is no procedure that can guarantee the faultlessness of
                                                    software. Accordingly, interruptions in data transmission may occur during use of the Platform and
                                                    the Services offered. TRALITY shall not be liable for disruptions, errors, delays and other
                                                    obstacles to performance that occur during the transmission of content via the Internet, unless
                                                    these are caused by gross negligence or intent.
                                                </li>
                                                <li>
                                                    TRALITY's systems are protected against attacks by hackers and viruses at TRALITY’s best efforts
                                                    and to the extend technically reasonably. However, the risk of such attacks cannot be excluded. If
                                                    a virus or hacker attack is not caused by TRALITY's grossly negligent or intentional neglect of
                                                    the security settings, TRALITY shall not be liable for the resulting damage, whatsoever.
                                                </li>
                                                <li>
                                                    The use of the Platform and the associated Services (such as the Tutorial, Docs or templates
                                                    provided) shall be at the user's own responsibility and risk. TRALITY accepts no liability of any
                                                    kind for the Services provided to the Users via the Platform. Any Services of TRALITY are for
                                                    supporting purposes only and may at no time be understood as investment advice or any other
                                                    proposal on how to use the Platform or Services.
                                                </li>
                                                <li>
                                                    TRALITY accepts no liability for loss of data or computer damage arising from the retrieval of
                                                    data via the Platform.
                                                </li>
                                                <li>
                                                    TRALITY shall not be liable for any third-party content made available on the Platform by other
                                                    third parties (e.g. external links, banners or other information and advertising offers), as the
                                                    case may be, to which TRALITY has created a link.
                                                </li>
                                                <li>
                                                    Claims for damages of a User who is an entrepreneur expires six months after knowledge of the
                                                    damage and the damaging party, but no later than two years after TRALITY's conduct giving rise to
                                                    liability.
                                                </li>
                                            </ol>
                                        </li>
                                        <li>
                                            <b>Copyright, Links</b>
                                            <ol>
                                                <li>
                                                    TRALITY hereby reserves all copyrights and IP-rights as used on or in connection with the Platform
                                                    or the Services provided, including external Services (Docs)- The Platform, the associated
                                                    Services and the underlying software are protected by copyright and may not be used or modified
                                                    beyond the granted right of use without the prior written consent of TRALITY. Similarly, the
                                                    design of the Platform and, in particular, the contents posted on the Platform (e.g. photos,
                                                    images or texts) are protected by copyright and are subject to other laws for the protection of
                                                    intellectual property and TRALITY is entitled to the rights thereto, unless otherwise indicated.
                                                </li>
                                                <li>
                                                    The direct or indirect references offered on the Platform to external content (e.g. external
                                                    links, banners or other information and advertising offers) are provided in the interest of the
                                                    User, as the case may be. The content offered is not designed, edited or otherwise evaluated by
                                                    TRALITY. TRALITY has no influence on these contents; access to them is the sole responsibility of
                                                    the User. It is not possible to monitor the content of linked platforms on an ongoing basis.
                                                </li>
                                            </ol>
                                        </li>
                                        <li>
                                            <b>Data protection</b>
                                        </li>
                                        TRALITY's data protection provisions apply to all Users and are an integral part of these GTC. They can be
                                        accessed on the website under <a href="https://www.trality.com/privacy">https://www.trality.com/privacy</a>.
                                        By ticking the appropriate box during registration on the Platform, the User accepts the data protection
                                        provisions and agrees to their content.
                                        <li>
                                            <b>Applicable law and jurisdiction</b>
                                            <ol>
                                                <li>
                                                    These GTC as well as all agreements made between the Parties are subject to Austrian law to the
                                                    exclusion of the UN Convention on Contracts for the International Sale of Goods and the conflict
                                                    rules of international private law. In the case of consumers, this choice of law shall only apply
                                                    insofar as the protection granted by the mandatory provisions of the law of the country of the
                                                    consumer's residence is thereby not jeopardized.
                                                </li>
                                                <li>
                                                    The competent court in Vienna, Innere Stadt, is responsible for all claims arising from disputes
                                                    arising from the contractual relationship. This shall not affect the right of the User to sue at
                                                    any other mandatory legal venue. For all actions brought by TRALITY against a User who is to be
                                                    qualified as a consumer and who has his domicile, habitual residence or place of employment in
                                                    Austria due to disputes arising from the contractual relationship, one of the courts in whose
                                                    district the consumer has his domicile, habitual residence or place of employment shall have
                                                    jurisdiction. For users who do not have a residence in Austria at the time of the conclusion of
                                                    the contract, the legal places of jurisdiction shall apply.
                                                </li>
                                            </ol>
                                        </li>
                                        <li>
                                            <b>Final provisions</b>
                                            <ol>
                                                <li>
                                                    TRALITY is entitled to transfer the contractual relationship with the User, if it is an
                                                    entrepreneur, to third parties without the prior written consent of the User.
                                                </li>
                                                <li>
                                                    Each contracting party shall bear the taxes, levies or fees resulting for it from the contractual
                                                    relationship itself. Any legal transaction fees shall be borne by the User if the User is an
                                                    entrepreneur.
                                                </li>
                                                <li>
                                                    TRALITY expressly reserves the right to rename or change the buttons named in these GTC with
                                                    quotation marks and execution marks. The names of the buttons in these GTC shall be judged by
                                                    their meaning and not by their express wording.
                                                </li>
                                                <li>
                                                    Should individual provisions of these GTC be or become invalid, this shall not affect the
                                                    remaining content of the GTC. The invalid provision shall be replaced by a valid provision which
                                                    is legally valid and comes as close as possible to the economic purpose of the invalid provision.
                                                </li>
                                                <li>
                                                    Deviations from these GTC, supplementary agreements or any conflicting terms and conditions of the
                                                    User shall only be effective if confirmed in writing by TRALITY. This also applies to the
                                                    agreement to waive this formal requirement. In the event of contradictions between these GTC and
                                                    deviating written agreements between the contracting parties, the provisions of the deviating
                                                    agreements shall take precedence.
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>
                                </Section>
                            </Header>
                        </Layout.Center>
                    </Layout.Section>
                </Padding>
            </MainContainer>
        </Layout.Page>
    );
};

export default Terms;
