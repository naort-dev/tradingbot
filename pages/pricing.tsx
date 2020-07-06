import { Layout, Pricing, Explanation } from '@containers';
import { Header, Button } from '@components';
import { useState, useCallback } from 'react';
import styled from 'styled-components';

import * as PricingPawn from '../assets/images/illustrations/pricing_pawn.svg';
import * as PricingRook from '../assets/images/illustrations/pricing_rook.svg';
import * as PricingKnight from '../assets/images/illustrations/pricing_knight.svg';
import * as PricingQueen from '../assets/images/illustrations/pricing_queen.svg';

import * as UnderConstruction from '../assets/images/illustrations/under_construction.svg';
import * as SavePercent from '../assets/images/pngs/save_20p.png';

import * as PricingEnterprise from '../assets/images/illustrations/pricing_enterprise_king.svg';
import { EventType, SignupOrigins } from '@trality/web-tracking';
import { ConstUrl } from '@constants';

interface Plan {
    image: string;
    popular?: boolean;
    trial?: boolean;
    title: string;
    price: { [key: number]: string };
    volume: string;
    tickSize: string;
    liveBots: string;
    virtualBots: string;
    logRetention: string;
    backtests: string;
    origin: SignupOrigins;
    link: string;
}

const AllPlans: Plan[] = [
    {
        image: PricingPawn,
        popular: false,
        title: 'Pawn',
        price: {
            0: 'Free',
            1: 'Free',
        },
        volume: '-',
        tickSize: '60m',
        liveBots: '0',
        virtualBots: '1',
        logRetention: '1 Week',
        backtests: 'Unlimited',
        origin: SignupOrigins.PricingPawn,
        link: 'pawn',
    },
    {
        image: PricingRook,
        popular: false,
        trial: true,
        title: 'Rook',
        price: {
            0: '9.99€',
            1: '95€',
        },
        volume: '25.000€',
        tickSize: '60m',
        liveBots: '1',
        virtualBots: '3',
        logRetention: '1 Month',
        backtests: 'Unlimited',
        origin: SignupOrigins.PricingRook,
        link: 'rook',
    },
    {
        image: PricingKnight,
        popular: true,
        title: 'Knight',
        price: {
            0: '29.99€',
            1: '287€',
        },
        volume: '100.000€',
        tickSize: '5m',
        liveBots: '5',
        virtualBots: '5',
        logRetention: '6 Months',
        backtests: 'Unlimited',
        origin: SignupOrigins.PricingKnight,
        link: 'knight',
    },
    {
        image: PricingQueen,
        popular: false,
        title: 'Queen',
        price: {
            0: '59.99€',
            1: '575€',
        },
        volume: 'Unlimited',
        tickSize: '1m',
        liveBots: '10',
        virtualBots: '10',
        logRetention: 'Unlimited',
        backtests: 'Unlimited',
        origin: SignupOrigins.PricingQueen,
        link: 'queen',
    },
];

const CTA = styled.div`
    color: #fff;
    text-align: center;
    width: 100%;
    > h2 {
        margin-top: 60px;
        margin-bottom: 15px;
        color: #fff;
    }
    > h3 {
        color: #fff;
        margin-bottom: 25px;
    }
    > button {
        margin-bottom: 60px;
    }
`;

export default () => {
    const [yearly, setYearly] = useState(0);

    const onContact = useCallback(() => {
        const target = 'bWFpbHRvOmVudGVycHJpc2VAdHJhbGl0eS5jb20/c3ViamVjdD1FbnRlcnByaXNlIFBsYW4gRW5xdWlyeQ==';
        window.location.assign(atob(target));
    }, []);

    return (
        <Layout.Page title="pricing">
            <Layout.Section fullHeight noPadding id="pricing-overview">
                <Layout.Center>
                    <Header title="Start trading like a professional.">
                        <Pricing.PageHeader>
                            <Pricing.NoteBanner>
                                <img src={UnderConstruction} />
                                <div>
                                    <h2>We're still in Beta!</h2>
                                    <p>
                                        You can use all functionality entirely for free without providing any payment data. We will notify you in
                                        advance when pricing is activated and our beta is completed.
                                    </p>
                                </div>
                            </Pricing.NoteBanner>
                            <Pricing.ToggleContainer>
                                <Pricing.Toggle left={!Boolean(yearly)}>
                                    <Pricing.ToggleItem onClick={() => setYearly(0)}>Monthly</Pricing.ToggleItem>
                                    <Pricing.ToggleItem onClick={() => setYearly(1)}>Yearly</Pricing.ToggleItem>
                                </Pricing.Toggle>
                                <img src={SavePercent} />
                            </Pricing.ToggleContainer>
                        </Pricing.PageHeader>
                        <Pricing.Container>
                            {AllPlans.map((plan) => (
                                <Pricing.Item id={plan.title} key={plan.title}>
                                    {plan.popular && <Pricing.PopularChoice>Popular choice</Pricing.PopularChoice>}
                                    {plan.trial && <Pricing.FreeTrial>1 week free trial</Pricing.FreeTrial>}
                                    <Pricing.Image src={plan.image} />
                                    <Pricing.Header title={plan.title} price={plan.price[yearly]} />
                                    <Pricing.Description title="Trading Volume">{plan.volume}</Pricing.Description>
                                    <Pricing.Description title="Allowed Tick Interval">{plan.tickSize}</Pricing.Description>
                                    <Pricing.Description title="Live Bots">{plan.liveBots}</Pricing.Description>
                                    <Pricing.Description title="Virtual Bots">{plan.virtualBots}</Pricing.Description>
                                    <Pricing.Description title="Log Retention">{plan.logRetention}</Pricing.Description>
                                    <Pricing.Description title="Backtests">{plan.backtests}</Pricing.Description>
                                    <Pricing.Button
                                        popular={plan.popular}
                                        to={`${ConstUrl.Signup}?pricing=${plan.link}`}
                                        event={{
                                            type: EventType.SignupInitiated,
                                            attributes: {
                                                signupOrigin: plan.origin,
                                                interval: yearly === 0 ? 'monthly' : 'yearly',
                                            },
                                        }}
                                    >
                                        Start now
                                    </Pricing.Button>
                                </Pricing.Item>
                            ))}
                        </Pricing.Container>
                    </Header>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="explanation" fullHeight={false} noPadding>
                <Layout.Center>
                    <div>
                        <h2>Pricing Explained</h2>
                        <Pricing.Explanation>
                            <b>Trading Volume</b> We track the total volume that all of your bots trade (executed buy and sell orders) in fiat
                            equivalent for each month. You are allowed to trade a total volume with your bot according to your plan. You receive a
                            warning if your bot reaches 80% of your trading volume quota for the current month. Should your bot exceed the allowed
                            trading volume quota, it is subsequently only allowed to process sell orders in order to exit open positions.
                        </Pricing.Explanation>
                        <Pricing.Explanation>
                            <b>Allowed Tick Interval</b> Each bot runs on one or multiple tick intervals. Your plan specifies the lowest possible tick
                            interval you can select, upon which your bot should be executed. We currently support 1m, 5m, 15m, 30m, 1h, 6h, 12h and 1d
                            tick intervals.
                        </Pricing.Explanation>
                        <Pricing.Explanation>
                            <b>Live Bots and Virtual Bots</b> Specifies the number of bots that can be started trading either real assets (live bots)
                            or virtual money (virtual bots). Note that a single bot can run on multiple tick(!) sizes and have different strategies
                            for multiple trading pairs.
                        </Pricing.Explanation>
                        <Pricing.Explanation>
                            <b>Log Retention</b> Bot logs are useful outputs for debugging on what actions your bot(s) took at specific points in
                            time. We store the history of these logs for a certain period of time (or for an unlimited period of time in higher
                            plans).
                        </Pricing.Explanation>
                        <Pricing.Explanation>
                            <b>Backtests</b> Our goal is to enable you to experiment and iterate on your strategies as much as possible in order to
                            increase profitability. That's why we will always enable you to do as many backtests as you like, completely free of
                            charge.
                        </Pricing.Explanation>
                    </div>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="enterprise" fullHeight={false} noPadding>
                <Layout.Center>
                    <Pricing.EnterpriseBanner>
                        <img src={PricingEnterprise} />
                        <div>
                            <h2>Enterprise</h2>
                            <p>
                                We are happy to build custom features based on your needs. Let us know your requirements and we will help you
                                implement them into your trade processes.
                            </p>
                        </div>
                        <Pricing.Button popular onClick={onContact}>
                            Contact us
                        </Pricing.Button>
                    </Pricing.EnterpriseBanner>
                </Layout.Center>
            </Layout.Section>
            <Layout.Section id="start-now" fullHeight={false} noPadding themeColor="main">
                <Layout.Center>
                    <CTA>
                        <h2>Join our beta</h2>
                        <h3>
                            Become one of our many awesome traders that trust Trality.
                            <br /> No credit card required for you to get started.
                        </h3>
                        <Button dark to={ConstUrl.Signup}>
                            Signup now
                        </Button>
                    </CTA>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};
