import * as React from 'react';
import styled from 'styled-components';
import { Layout } from '@containers';
import { Header } from 'components';

import { MetaTags, Page } from '../../util/metaTags';
import { Headline, MainContainer, Padding, PaddingSizes, Text } from '@trality/web-ui-components';

/* 
    TOOD: Refactor to support all items from web-ui-components
    This page for now has some inherited styles from web-ui-components, purely on the fact, that using only comps from there
    would not support the current layout of this page. This is to be fixed at some later stage, when we will not be as busy :)
*/

const Section = styled.div<{ center?: boolean }>`
    > ol > li:before {
        margin: 0px;
        color: #0c0c0c;
        padding: 0px;
        font-size: 20px;
        line-height: 24px;
        font-family: BasierSquareSemi, sans-serif;
    }
    ul { 
        list-style: disc;
    }
    ol {
        counter-reset: item;
        margin-top: 25px;
        & > li {
            display: block;
            font-size: 16px;
            line-height: 24px;
            padding-bottom: 16px;
        }
        b {
            margin: 0px;
            color: #0c0c0c;
            padding: 0px;
            font-size: 20px;
            line-height: 24px;
            font-family: BasierSquareSemi, sans-serif;
        }
        & > li:before {
            margin-right: 10px;
            content: counters(item, '.') ' ';
            counter-increment: item;
        }
    }

`;

const Terms = () => {
    return (
        <Layout.Page title="terms">
            <MetaTags page={Page.CreatorTerms} />
            <MainContainer>
                <Padding
                    size={{
                        top: PaddingSizes.SixtyFour,
                        bottom: PaddingSizes.NinetySix,
                        left: PaddingSizes.Zero,
                        right: PaddingSizes.Zero,
                    }}
                    mobileSize={{
                        top: PaddingSizes.SeventySix,
                        bottom: PaddingSizes.FiftySix,
                        left: PaddingSizes.Zero,
                        right: PaddingSizes.Zero,
                    }}
                >
                    <Layout.Section fullHeight noPadding id="overview">
                        <MainContainer>
                            <Headline headlineType="Headline2">Marketplace Submission Terms and Conditions</Headline>
                            <Section>
                                <ol>
                                    <li>
                                        <b>Scope of this Marketplace Submission Terms and Conditions</b>
                                        <ol>
                                            <li>
                                                The following Terms and Conditions are directed towards Creators, who wish to submit their trading bot to the Trality Bot Marketplace, in order to rent it out to potential users.
                                            </li>
                                            <li>
                                                The Marketplace submission terms and conditions as set forth herein shall form an integral part of and shall complement Trality’s General Terms and Conditions.
                                            </li>
                                            <li>
                                                In case of any discrepancies between the General Terms and Conditions and this Marketplace submission terms and conditions, the General Terms and Conditions shall prevail.
                                            </li>
                                            <li>
                                                Terms defined in the General Terms and Conditions shall have the same meaning in this Marketplace submission terms and conditions.
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <b>Submission of the created Bots to the Marketplace</b>
                                        <ol>
                                            <li>
                                                Via the Platform and under the section "Monetize", TRALITY provides Users the possibility to offer their created Bots via the Marketplace (as defined below and such offer to the Marketplace the "Submission") to other Users. The User needs to comply with the following steps.
                                            </li>
                                            <li>
                                                By clicking the tab "Let's do the KYC", the User will be redirected to the online payment services provider "Stripe" to fulfil the KYC procedure and payment setup. 
                                            </li>
                                            <li>
                                                If the KYC process has been successfully completed, the User shall insert the name of the Bot and a detailed Bot description. By clicking the boxes "I confirm that I've followed the Bot description template guide" and "I'm aware that that my bot's source code will be shared with Trality and I agree to the Marketplace T&Cs" and clicking the tab "Submit this Bot" TRALITY receives the Submission and shall be entitled to examine the source code.
                                            </li>
                                            <li>
                                                The examination of the Bot’s source code is done by Trality’s Bot Review Committee, currently consisting of the company’s CTO and Head of Creator Tooling and Experience.
                                            </li>
                                            <li>
                                                TRALITY reserves the right to and shall be entitled to reject the Bot and/or any User at its sole discretion, in particular, but not limited to, in case of non-compliance with the creator guidelines as set forth herein. If the Bot Review Committee rejects the Submission, the User receives an email with the respective details. 

                                            </li>
                                            <li>
                                                If TRALITY confirms the Submission, the User sees the submitted Bot under section "Eligible Bots" and by clicking "Submit this bot", the Bot goes live on Marketplace and shall be eligible by other Users for rental.
                                            </li>
                                            <li>
                                                By clicking the tab "Unpublish from Marketplace", clicking the box "I agree and want to unpublish my bot" and by confirming via clicking "Yes, I'm sure", the Bot shall no longer be available on the Marketplace for other Users. 
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <b>Intellectual property and non-disclosure of the source code</b>
                                        <p>Any intellectual property, in particular, but not limited to, in relation to a Bot created by Users shall remain with the User, except where this T&Cs provide expressly for otherwise. TRALITY, however, shall be entitled to examine the source code of the Bot in accordance with the Submission to the Marketplace (both as defined below) in order to ensure such quality as TRALITY deems necessary for the Bot. TRALITY, however, shall be obliged to non-disclose and to non-utilize the source code for any purpose other than for examining the quality of the source code.</p>
                                    </li>
                                    <li>
                                        <b>Submission Guidelines to be adhered to on the Marketplace</b>
                                        <ol>
                                            <li>
                                                Bot name and description must not include any of the following:
                                                <ul>
                                                    <li>
                                                        External links
                                                    </li>
                                                    <li>
                                                        Information that provides the ability to contact the creator
                                                    </li>
                                                    <li>
                                                        Profanity or any other content that could be perceived as offensive and/or inappropriate
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                Bot strategies cannot include the following:
                                                <ul>
                                                    <li>
                                                        Stealing the IP of other Users’ code
                                                    </li>
                                                    <li>
                                                        Injecting external code
                                                    </li>
                                                    <li>
                                                        Minified code
                                                    </li>
                                                    <li>
                                                        Hiding the intent of the strategy in overall complex code
                                                    </li>
                                                    <li>
                                                        Malicious intent, such as timing the market or pump and dump schemes
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                In order to submit a Bot to the marketplace, it needs to:
                                                <ol>
                                                    <li>
                                                        Be running on a live exchange account with real money on the Creators’ account
                                                    </li>
                                                    <li>
                                                        Adhere to our minimum requirements:
                                                        <ul>
                                                            <li>Minimum trading activity per day (we are looking for Bots that trade regularly)</li>
                                                            <li>Avg. time under water (as a measure of riskiness of your trading strategy)</li>
                                                            <li>Max drawdown over 3 month period (to examine volatility)</li>
                                                            <li>Performance relative to a weighted index benchmark (to evaluate true performance)</li>
                                                        </ul>
                                                    </li>
                                                    <p>
                                                        When submitting a new version of the same Bot to the marketplace, TRALITY reserves the right to start a new review process by the Bot Review Committee to assess the gravity of changes made to the Bot’s logic. 
                                                    </p>
                                                </ol>
                                            </li>
                                            <li>
                                                The Bot logic should continue to follow the general strategy of the initially created Bot. In some cases the Bot Review Committee may reject the Bot or request changes from its Creator.
                                            </li>
                                            <li>
                                                Trality reserves the right to reject Bot submissions, or remove a Bot from the marketplace by a creator due to but not limiting to:
                                                <ul>
                                                    <li>Violating any of the above mentioned terms</li>
                                                    <li>Previously submitted Bots by the same creator have violated any of the above mentioned terms</li>
                                                    <li>Bot strategy does not meet minimum quality criteria</li>
                                                    <li>Any other reasons we deem important</li>
                                                    <li>Trality reserves the right to change these criteria</li>
                                                </ul>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <b>Regulations</b>
                                        <ol>
                                            <li>
                                                The creator certifies that offering a Bot on Trality’s marketplace does not fall under investment advice or any other regulated activity under any crypto asset and/or financial instrument regulation in their own jurisdiction and/or if it does that the creator has all the necessary certifications, licenses and/or permissions, whatsoever.
                                            </li>
                                            <li>
                                                Creators need to complete a KYC process by Stripe in order to be listed on the marketplace and obtain their share of the funds.
                                            </li>
                                            <li>
                                                Trality cannot be held liable for creators being rejected during Stripe’s KYC.
                                            </li>
                                            <li>
                                                Trality reserves the right to block individual Bots from being listed on the marketplace.
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <b>Marketing</b>
                                        <p>Trality reserves the right to promote internally and externally Bots and content, which have been created by Creators on the Marketplace. Of course without any details on the underlying algorithm. The Creator hereby gives its respective consent to such advertising.</p>
                                    </li>
                                </ol>
                            </Section>
                        </MainContainer>
                    </Layout.Section>
                </Padding>
            </MainContainer>
        </Layout.Page>
    );
};

export default Terms;
