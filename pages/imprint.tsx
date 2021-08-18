import * as React from 'react';
import styled from 'styled-components';
import { Layout } from '@containers';

import { MetaTags, Page } from '../util/metaTags';
import { Cell, MainContainer, Row, Text, Padding, PaddingSizes } from '@trality/web-ui-components';

const Description = styled.div`
    margin-bottom: 50px;
    justify-content: left;
    text-align: left;
    ul {
        text-align: left;
    }
    @media (max-width: 768px) {
        width: 100%;
        padding-right: 25px;
        padding-left: 25px;
        text-align: center;
        font-size: 14px;
    }
    & > span {
        color: #00b8e6 !important;
    }
    > p {
        display: block;
        margin-top: 15px;
    }
`;

const Imprint = () => {
    return (
        <Layout.Page title="imprint">
            <MetaTags page={Page.Imprint} />
            <MainContainer>
                <Row>
                    <Cell size={12} mobileSize={12}>
                        <Padding
                            size={{
                                top: PaddingSizes.NinetySix,
                                bottom: PaddingSizes.NinetySix,
                            }}
                            mobileSize={{
                                top: PaddingSizes.FiftySix,
                                bottom: PaddingSizes.FiftySix,
                            }}
                        >
                            <Text bodyType="Body3">TRALITY GmbH</Text>
                            <Text bodyType="Body3">Novaragasse 19/9 AT-1020 Wien</Text>
                            <Text bodyType="Body3">Email: hello@trality.com</Text>
                            <Text bodyType="Body3">UID: ATU73931338</Text>
                            <Text bodyType="Body3">Company Register: 504493b, Commercial Court Vienna</Text>
                            <Text bodyType="Body3">Member of the Austrian Economic Chambers</Text>
                        </Padding>
                    </Cell>
                </Row>
            </MainContainer>
        </Layout.Page>
    );
};

export default Imprint;
