import { Layout } from '@containers';
import { BlockHeadline } from 'components/blockheadline';
import { BlockItem } from 'components/blockitem';
import { Container } from 'components/container';
import { Paragraph } from 'components/paragraph';
import { SecondBlock } from 'components/secondblock';
import React from 'react';
import styled from 'styled-components';

import * as RuleBuilderSketch1 from '../../assets/images/pngs/build_bots.png';
import * as RuleBulderSketch2 from '../../assets/images/pngs/backtesting.png';

const FeaturesTitle = styled.div`
    font-size: 24px;
    color: #0c0c0c;
    text-transform: uppercase;
    margin-top: 30px;
    margin-bottom: 32px;
`;

const FeatureList = styled.ul`
    list-style: none;
    > li::before {
        content: '•';
        color: #00b8e6;
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
    }
`;

const ListItem = styled.li`
    font-size: 18px;
    @media only screen and (max-width: 750px) {
        font-size: 14px;
    }
`;

export const FeaturesList = () => {
    return (
        <Layout.Section noPadding id="bla">
            <Layout.Center>
                <Container>
                    <SecondBlock margin={100} gap={0} mobileMargin={0}></SecondBlock>
                    <BlockHeadline>Rule Builder's key features</BlockHeadline>
                    <SecondBlock margin={0} gap={90} mobileMargin={0}>
                        <BlockItem>
                            <img src={RuleBuilderSketch1} width={'100%'} />
                        </BlockItem>
                        <BlockItem>
                            <FeaturesTitle>Building bots in a few minutes</FeaturesTitle>
                            <Paragraph>
                                Using the Trality Rule Builder, you can turn your ideas into a profitable strategy and optimize it until you're
                                satisfied.
                            </Paragraph>
                            <FeatureList>
                                <ListItem>Build upon curated, pre-defined trading strategies</ListItem>
                                <ListItem>Select from over 100 technical indicators</ListItem>
                                <ListItem>Use boolean logic to arrange strategy parts</ListItem>
                                <ListItem>Backtest your strategy with historical data</ListItem>
                            </FeatureList>
                        </BlockItem>
                    </SecondBlock>
                    <SecondBlock margin={49} gap={90} mobileMargin={0}>
                        <BlockItem>
                            <img src={RuleBulderSketch2} width={'100%'} />
                        </BlockItem>
                        <BlockItem>
                            <FeaturesTitle>Blazing-fast backtesting</FeaturesTitle>
                            <Paragraph>
                                Backtesting is at the heart of every bot creation iteration. That's why we made it as fast as possible and provide
                                debugging features you'll find nowhere else.
                            </Paragraph>
                            <FeatureList>
                                <ListItem>Improve your algorithms with in-browser backtesting</ListItem>
                                <ListItem>Chose individual time frames or automated scenario tests</ListItem>
                                <ListItem>Use breakpoints or events when debugging (coming soon!)</ListItem>
                                <ListItem>Optimize strategy parameters automatically (coming soon!)</ListItem>
                            </FeatureList>
                        </BlockItem>
                    </SecondBlock>
                </Container>
            </Layout.Center>
        </Layout.Section>
    );
};
