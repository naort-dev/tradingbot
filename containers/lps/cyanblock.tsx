import { Button } from '@components';
import { ConstUrl } from '@constants';
import { Layout } from '@containers';
import { Block } from 'components/block';
import { BlockItem } from 'components/blockitem';
import { Container } from 'components/container';
import { SecondBlock } from 'components/secondblock';
import React from 'react';
import styled from 'styled-components';

import * as RuleBuilderCreate from '../../assets/images/pngs/rule_builder_create.png';

const CreateButton = styled(Button)`
    margin-top: 48px;
`;

const CyanBackgroundBlock = styled(Block)`
    display: block;
    background: #001f26;
    padding-bottom: 48px;
`;

const WhiteHeadline = styled.h2`
    color: #fff;
`;

const WhiteParagraph = styled.p`
    font-size: 20px;
    color: #ffffff;
    @media only screen and (max-width: 750px) {
        font-size: 14px;
    }
`;

const ReadyToStartBlock = styled.div`
    margin-top: 80px;
`;

export const CyanBlock = () => {
    return (
        <CyanBackgroundBlock margin={0} mobileMargin={0}>
            <Layout.Section noPadding id="cyan-block">
                <Layout.Center>
                    <Container>
                        <SecondBlock margin={0} mobileMargin={0}>
                            <BlockItem>
                                <ReadyToStartBlock>
                                    <WhiteHeadline>Ready to start?</WhiteHeadline>
                                    <WhiteParagraph>
                                        We encourage you to explore the state-of-the-art tools on our website for free and see for yourself how easy
                                        it is to create, backtest and deploy your own trading algorithm.
                                    </WhiteParagraph>
                                    <CreateButton to={ConstUrl.Signup}>Create Account</CreateButton>
                                </ReadyToStartBlock>
                            </BlockItem>
                            <BlockItem>
                                <img src={RuleBuilderCreate} width={'100%'} />
                            </BlockItem>
                        </SecondBlock>
                    </Container>
                </Layout.Center>
            </Layout.Section>
        </CyanBackgroundBlock>
    );
};
