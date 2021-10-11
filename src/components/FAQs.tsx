import React from 'react';
import { Cell, FAQ, Headline, MainContainer, Padding, PaddingSizes, Row, TextLink } from '@trality/web-ui-components';

const Data = [
    {
        question: 'How do I start creating a trading bot?',
        answer: (
            <>
                At Trality, you currently have two options to create trading bots: You create bots with code using our Trality Code Editor or
                alternatively, you can build bots with rules using our Trality Rule Builder. Find out more in our{' '}
                <TextLink intext href="https://www.trality.com/blog/crypto-trading-bots">
                    guide for beginners
                </TextLink>{' '}
                or our{' '}
                <TextLink intext href="https://docs.trality.com/" target="_blank">
                    rich documentation!
                </TextLink>
                <br />
                <br /> We’ve also created helpful get-started videos for both the Code Editor and the Rule Builder.
            </>
        ),
    },
    {
        question: 'Which exchanges do you support?',
        answer: (
            <>
                We currently support most of the popular exchange options. Binance, Coinbase, Kraken and Bitpanda - this list will continue to be
                expanded.
            </>
        ),
    },
    {
        question: 'What coding language do you support?',
        answer: <>We currently support Python and are working to support even more languages in the future.</>,
    },
    {
        question: 'Does Trality take fees from my trades?',
        answer: <>No Trality doesn’t take any fees from your trades.</>,
    },
    {
        question: 'Does trality support walk forward testing (paper trading)? ',
        answer: (
            <>
                Yes, at Trality this is accomplished via virtual accounts. In fact, we encourage users to employ these tests and all strategies should
                actually be validated this way before deploying with real money.
            </>
        ),
    },
    {
        question: 'Can you live trade on Trality?',
        answer: <>Yes.</>,
    },
    {
        question: 'How do you guarantee that the bots on the marketplace aren’t used for scamming people?',
        answer: (
            <>
                All bots are completely sandboxed and run individually.
                <br />
                <br />
                Trality only mirrors signals and portfolio distributions depending on the circumstances of the individual follower. Logging, debugging
                and other functionality is not available for followers.
                <br />
                <br />
                Nobody will ever directly touch your bot or the underlying code/algorithm. Instead, this goes for all bots including those on the
                upcoming Marketplace.
            </>
        ),
    },
    {
        question: 'How much does it cost?',
        answer: (
            <>
                Trality has a flexible pricing plan that should suit all kinds of traders. Starting with a{' '}
                <TextLink intext href="/pricing">
                    FREE plan
                </TextLink>{' '}
                for beginners, Trality offers options for intermediate and advanced traders too.
            </>
        ),
    },
    {
        question: 'Is the free plan really free?',
        answer: (
            <>
                It sure is. The free plan is great for those who are just getting started. You can easily create, backtest and deploy one trading bot
                with a limit of €5,000 in trading volume per month. However, if you want to create and deploy more bots or if your trading volume
                exceeds the €5,000 monthly limit, you will need to upgrade your plan. Check the{' '}
                <TextLink intext href="/pricing">
                    pricing page
                </TextLink>{' '}
                for more details.
            </>
        ),
    },
    {
        question: 'Is profit guaranteed?',
        answer: (
            <>
                No. The cryptocurrency market is highly volatile and speculative. Any trading activity is at your own risk. Never invest more than you
                can afford to lose.
            </>
        ),
    },
    {
        question: 'Do you have a forum?',
        answer: (
            <>
                Yes!{' '}
                <TextLink intext href="https://discord.gg/h5BPuKBQHv" target="_blank">
                    Our Discord channel
                </TextLink>{' '}
                is active with a number of different enthusiastic traders - join the discussion!
            </>
        ),
    },
    {
        question: 'Do you offer support?',
        answer: (
            <>
                For most basic questions, you can get an answer in our Discord channels. For more advanced questions, check out our{' '}
                <TextLink intext href="https://trality.zendesk.com/hc/en-us" target="_blank">
                    Helpdesk
                </TextLink>{' '}
                or write to us at:{' '}
                <TextLink intext onClick={() => window.location.assign(atob('bWFpbHRvOnN1cHBvcnRAdHJhbGl0eS5jb20='))} href="#" target="_blank">
                    support@trality.com.
                </TextLink>
            </>
        ),
    },
];

export const FAQs = () => {
    return (
        <Padding
            size={{
                top: PaddingSizes.SixtyFour,
                bottom: PaddingSizes.SixtyFour,
                left: PaddingSizes.Zero,
                right: PaddingSizes.Zero,
            }}
            mobileSize={{
                top: PaddingSizes.TwentyFour,
                bottom: PaddingSizes.ThirtyTwo,
                left: PaddingSizes.Zero,
                right: PaddingSizes.Zero,
            }}
        >
            <MainContainer>
                <Row>
                    <Cell size={12} mobileSize={12}>
                        <Padding
                            size={{
                                top: PaddingSizes.SixtyFour,
                                bottom: PaddingSizes.SixtyFour,
                                left: PaddingSizes.Zero,
                                right: PaddingSizes.Zero,
                            }}
                            mobileSize={{
                                top: PaddingSizes.TwentyFour,
                                bottom: PaddingSizes.ThirtyTwo,
                                left: PaddingSizes.Zero,
                                right: PaddingSizes.Zero,
                            }}
                        >
                            <Headline headlineType="Headline5">FAQs</Headline>
                        </Padding>
                    </Cell>
                </Row>
                {Data.map((item) => {
                    return <FAQ question={item.question} answer={item.answer} />;
                })}
                <div id="faq"></div>
            </MainContainer>
        </Padding>
    );
};
