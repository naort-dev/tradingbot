import * as React from 'react';
import styled from 'styled-components';
import { Layout } from '@containers';
import { Header } from '@components';

import { MetaTags, Page } from '../util/metaTags';

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
            <Layout.Section fullHeight noPadding id="imprint">
                <Layout.Center>
                    <Header title="Imprint">
                        <Description>
                            <p>TRALITY GmbH</p>
                            <p>Novaragasse 19/9 AT-1020 Wien</p>
                            <p>Email: hello@trality.com</p>
                            <p>UID: ATU73931338</p>
                            <p>Company Register: 504493b, Commercial Court Vienna</p>
                            <p>Member of the Austrian Economic Chambers</p>
                        </Description>
                    </Header>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};

export default Imprint;
