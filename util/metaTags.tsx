import React from 'react';
import Head from 'next/head';

export enum Page {
    HP,
    CodeEditor,
    RuleBuilder,
    Features,
    Pricing,
    MarketPlace,
    FAQ,
    Jobs,
    About,
    Imprint,
    Privacy,
    Terms,
    Competition,
    CompetitionTerms,
    JobSrFullStack,
    JobBackend,
    JobFrontend,
    JobMobile
}

const titles = new Map([
    [Page.HP, 'Trality - Create & follow trading bots'],
    [Page.CodeEditor, 'Trality Code Editor - A state-of-the-art tool for bot creators'],
    [Page.RuleBuilder, 'Trality Rule Builder - A state-of-the-art tool for bot creators'],
    [Page.Features, 'Trality - Tools & Features'],
    [Page.Pricing, 'Trality - Pricing'],
    [Page.MarketPlace, 'Trality Marketplace - Where Creators and Followers meet'],
    [Page.FAQ, 'Trality - Frequently asked questions'],
    [Page.Jobs, "Trality Jobs - We're hiring!"],
    [Page.About, 'Meet the Trality Team!'],
    [Page.Imprint, 'Trality - Imprint'],
    [Page.Privacy, 'Trality - Privacy'],
    [Page.Terms, 'Trality - General Terms and Conditions'],
    [Page.Competition, 'Trality Trading Competition'],
    [Page.CompetitionTerms, 'Trality - Competition Terms and Conditions'],
    [Page.JobSrFullStack, 'Trality Jobs - Senior Full-Stack Developer'],
    [Page.JobBackend, 'Trality Jobs - Backend Developer'],
    [Page.JobFrontend, 'Trality Jobs - Frontend Developer'],
    [Page.JobMobile, 'Trality Jobs - Mobile Developer']
]);

const descriptions = new Map([
    [
        Page.HP,
        'Trality is the platform for anyone to create and invest through automated crypto trading bots. Creators can build the sophisticated bots in our browser-based Python editor. Followers can copy-trade on bots via an easy-to-use mobile app.',
    ],
    [
        Page.CodeEditor,
        'Trality Code Editor is the world’s first browser-based Python Bot Code Editor, which comes with a state-of-the-art Python API, end-to-end encryption and more.',
    ],
    [
        Page.RuleBuilder,
        "Trality Rule Builder is a graphical user interface that let's you build your trading bot's logic by simply dragging and dropping indicators and strategies.",
    ],
    [
        Page.Features,
        'At Trality, we provide you with the tools you need to succeed - from bot creation to trade execution. Here you an find our growing list of tools and features.',
    ],
    [
        Page.Pricing,
        'You can use all functionality entirely for free without providing any payment data. We will notify you in advance when pricing is activated.',
    ],
    [Page.MarketPlace, 'Profit from algorithmic trading by either publishing a bot to the Trality Bot Marketplace or follow bots by Creators.'],
    [Page.FAQ, 'We have collected on this page some frequently asked questions about our tools. Your question might be already answered here!'],
    [
        Page.Jobs,
        'Would you like to help us revolutionize trading by enabling everyone to profit from algorithmic trading? Get in touch with us! Open Positions...',
    ],
    [
        Page.About,
        'Once upon a time, two guys met and wondered why trading bots are only accessible to big banks & hedge funds. This wonder led to the vision of Trality...',
    ],
    [Page.Imprint, 'TRALITY GmbH, Novaragasse 19/9 AT-1020 Wien'],
    [Page.Privacy, 'Privacy Policy for Website Users. Who We Are and What this Policy Is...'],
    [
        Page.Terms,
        'The following General Terms and Conditions ("GTC") shall apply to all present and future business transactions, contracts and business relationships...',
    ],
    [Page.Competition, 'Create a winning trading bot using the Trality Bot Creator tools and get your hands on a big cash prize. Submission deadline: December 8, 2020.'],
    [Page.CompetitionTerms, 'Trading Competition Terms & Conditions'],
    [Page.JobSrFullStack, 'Would you like to help us as Senior Full-stack Developer? Get in touch with us! Open Position...'],
    [Page.JobBackend, 'Would you like to help us as Backend Developer? Get in touch with us! Open Position...'],
    [Page.JobFrontend, 'Would you like to help us as Frontend Developer? Get in touch with us! Open Position...'],
    [Page.JobMobile, 'Would you like to help us as Mobile Developer? Get in touch with us! Open Position...'],
]);

export const MetaTags:React.FunctionComponent<{page: Page}> = ({page}) => {
    const NoRobotsCheck = page === Page.Jobs || page === Page.JobMobile || page === Page.JobSrFullStack || page === Page.JobFrontend || page === Page.JobBackend;
    return (
        <Head>
            <title>{titles.get(page)}</title>
            <meta name="description" content={descriptions.get(page)} key="description" />
            <meta name="og:title" content={titles.get(page)} key="ogtitle" />
            <meta name="og:descrition" content={descriptions.get(page)} key="ogdesc" />
            {NoRobotsCheck && <meta name="robots" content="noindex, nofollow" /> }
        </Head>
    );
};
