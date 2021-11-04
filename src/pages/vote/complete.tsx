import { Layout } from '@containers';
import React from 'react';
import styled from 'styled-components';
import { Illustrations } from '@assets';

import { MetaTags, Page } from '../../../util/metaTags';
import { MainContainer, Row, Cell, Padding, PaddingSizes } from '@trality/web-ui-components';

const Center = styled.div`
    margin: 60px auto;
`;

const VoteComplete = () => {
    return (
        <Layout.Page title="unsub">
            <MetaTags page={Page.Vote} />
            <Padding
                size={{ top: PaddingSizes.NinetySix, bottom: PaddingSizes.NinetySix }}
                mobileSize={{ top: PaddingSizes.NinetySix, bottom: PaddingSizes.SixtyFour }}
            >
                <MainContainer>
                    <Row>
                        <Cell size={3} mobileSize={0}></Cell>

                        <Cell size={6} mobileSize={12}>
                            <Row>
                                <Cell size={6} mobileSize={12}>
                                    <h1>You are all set</h1>
                                    <p>Thank you for voting.</p>
                                </Cell>

                                <Cell size={6} mobileSize={12} align="center">
                                    <img src={Illustrations.BotPencil} />
                                </Cell>
                            </Row>
                        </Cell>

                        <Cell size={3} mobileSize={0}></Cell>
                    </Row>
                </MainContainer>
            </Padding>
        </Layout.Page>
    );
};

export default VoteComplete;
