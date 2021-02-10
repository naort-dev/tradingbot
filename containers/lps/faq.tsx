import { Layout } from '@containers';
import { BlockHeadline } from 'components/blockheadline';
import { Container } from 'components/container';
import { SecondBlock } from 'components/secondblock';
import React from 'react';
import styled from 'styled-components';

import * as Expand from '../../assets/images/icons/expand.svg';
import * as Collapse from '../../assets/images/icons/collapse.svg';
import { Block } from 'components/block';
import { Paragraph } from 'components/paragraph';

interface FAQItem {
    title: string | null;
    answer: string | null;
}

const FAQMap: FAQItem[] = [
    {
        title: 'Do I need to deposit funds on Trality in order to trade?',
        answer:
            'No. There is no option for you to deposit funds on Trality because we are not an exchange and we do not store coins. In order to deploy a bot for live trading or paper trading, you need to connect your exchange account to Trality via an API key.',
    },
    {
        title: 'Is Trality safe?',
        answer:
            'Security is the biggest priority at Trality. The trading orders are executed on your behalf on the exchange and we don’t require withdrawal rights, so your funds are 100% secure.',
    },
    {
        title: 'How much profit can I make?',
        answer:
            'As a platform for algorithmic trading bots, our main goal is to provide you with state-of-the-art tools to help you minimize risk, limit losses and increase profits. However, we can not and will not assure any profit. It depends on your strategy, settings and market conditions.',
    },
    {
        title: 'Do you offer paper trading?',
        answer: 'Yes, you can trade with a simulated paper trading account on Trality.',
    },
    {
        title: 'Do you offer live trading?',
        answer: 'Yes, you can live trade on Trality.',
    },
    {
        title: 'Is your Free plan really free?',
        answer:
            'It sure is. The free plan is great for those who are just getting started. You can easily create, backtest and deploy one trading bot with a limit of €5,000 in trading volume per month. However, if you want to create and deploy more bots or if your trading volume exceeds the €5,000 monthly limit, you will need to upgrade your plan. Check the pricing page for more details.',
    },
    {
        title: 'Does Trality take any fees from my trades?',
        answer: "No, we don't charge any fees from your trades.",
    },
];

const FAQWrapper = styled.div`
    padding: 28px 0px 28px 0px;
    align-self: flex-start;
`;

const FAQRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

const FAQIcon = styled.img`
    cursor: pointer;
`;

const OverallDiv = styled.div`
    width: 100% !important;
    display: block;
    > div {
        width: 47%;
        margin-right: 25px;
        float: left;
    }
    @media only screen and (max-width: 750px) {
        > div {
            width: 100%;
        }
    }
    > div > div {
        border-bottom: 2px solid #b3b3b3;
    }

    > div:nth-child(1) {
        border-top: 2px solid #b3b3b3;
    }
    @media only screen and (min-width: 750px) {
        > div:nth-child(2) {
            border-top: 2px solid #b3b3b3;
        }
    }
`;

const FullGreyBackgroundBlock = styled(Block)`
    display: block;
    background: #f7f7f7;
`;

const SmallParagraph = styled(Paragraph)`
    font-size: 16px;
`;

const FAQArea = () => {
    const leftColumn: JSX.Element[] = [];
    const rightColumn: JSX.Element[] = [];

    FAQMap.map((currentFAQ, idx) =>
        idx % 2 ? rightColumn.push(<FAQCompItem faq={currentFAQ} />) : leftColumn.push(<FAQCompItem faq={currentFAQ} />),
    );

    return (
        <OverallDiv>
            <div>{leftColumn}</div>
            <div>{rightColumn}</div>
        </OverallDiv>
    );
};

const FAQCompItem: React.FunctionComponent<{ faq: FAQItem }> = ({ faq }) => {
    const [visible, setVisible] = React.useState(false);

    return (
        <FAQWrapper>
            <FAQRow>
                <div>{faq.title}</div>
                <div onClick={() => setVisible(!visible)}>
                    <FAQIcon src={visible ? Collapse : Expand} />
                </div>
            </FAQRow>
            {visible && <SmallParagraph>{faq.answer}</SmallParagraph>}
        </FAQWrapper>
    );
};

export const FAQ = () => {
    return (
        <FullGreyBackgroundBlock margin={100} mobileMargin={0}>
            <Layout.Section noPadding id="bla">
                <Layout.Center>
                    <Container>
                        <SecondBlock margin={61} gap={0} mobileMargin={0}></SecondBlock>
                        <BlockHeadline>FAQs</BlockHeadline>
                        <SecondBlock margin={0} gap={25} mobileMargin={0} flexWrap={true}>
                            <FAQArea />
                        </SecondBlock>
                        <SecondBlock margin={80} mobileMargin={0} />
                    </Container>
                </Layout.Center>
            </Layout.Section>
        </FullGreyBackgroundBlock>
    );
};
