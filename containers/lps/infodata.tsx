import { Layout } from '@containers';
import { BlockHeadline } from 'components/blockheadline';
import { BlockItem } from 'components/blockitem';
import { Container } from 'components/container';
import { Paragraph } from 'components/paragraph';
import { SecondBlock } from 'components/secondblock';

import * as LPIcon1 from '../../assets/images/icons/secure-funds.svg';
import * as LPIcon2 from '../../assets/images/icons/cloud-based.svg';
import * as LPIcon3 from '../../assets/images/icons/encrypted.svg';

import React from 'react';
import styled from 'styled-components';

const Icon = styled.img`
    display: block;
    max-width: 110px;
`;

export const InfoData = () => {
    return (
        <Layout.Section noPadding id="bla">
            <Layout.Center>
                <Container>
                    <SecondBlock margin={100} gap={0} mobileMargin={0}></SecondBlock>
                    <BlockHeadline>Your funds and algorithms are safe</BlockHeadline>
                    <SecondBlock margin={0} gap={50} mobileMargin={0}>
                        <BlockItem>
                            <Icon src={LPIcon1} />
                            <Paragraph>
                                Your funds lie safely on your exchange. Trality will never touch them directly and only use official exchange APIs.
                            </Paragraph>
                        </BlockItem>
                        <BlockItem>
                            <Icon src={LPIcon2} />{' '}
                            <Paragraph>
                                Your algorithms run reliably 24/7 and never miss a trade. Trality eliminates the need to setup your own trading
                                servers!
                            </Paragraph>
                        </BlockItem>
                        <BlockItem>
                            <Icon src={LPIcon3} />
                            <Paragraph>
                                Your trading strategies are end-to-end encrypted. We can't see your strategies as they are in-browser encrypted
                                (coming soon)
                            </Paragraph>
                        </BlockItem>
                    </SecondBlock>
                </Container>
            </Layout.Center>
        </Layout.Section>
    );
};
