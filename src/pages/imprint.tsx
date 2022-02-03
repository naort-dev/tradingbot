import * as React from 'react';
import styled from 'styled-components';
import { Layout } from '@containers';

import { MetaTags, Page } from '../../util/metaTags';
import { Cell, MainContainer, Row, Text, Padding, PaddingSizes, Headline } from '@trality/web-ui-components';

const Imprint = () => {
    return (
        <Layout.Page title="imprint">
            <MetaTags page={Page.Imprint} />
            <MainContainer>
                <Row>
                    <Cell size={12} mobileSize={12}>
                        <Padding size={{ top: PaddingSizes.SixtyFour }} mobileSize={{ top: PaddingSizes.OneHundred }}>
                            <Headline headlineType="Headline2">Imprint</Headline>
                        </Padding>
                        <Padding size={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}>
                            <Text bodyType="Body2">TRALITY GmbH</Text>
                            <Text bodyType="Body2">Novaragasse 19/9 AT-1020 Wien</Text>
                            <Text bodyType="Body2">Email: hello@trality.com</Text>
                            <Text bodyType="Body2">UID: ATU73931338</Text>
                            <Text bodyType="Body2">Company Register: 504493b, Commercial Court Vienna</Text>
                            <Text bodyType="Body2">Member of the Austrian Economic Chambers</Text>
                        </Padding>
                    </Cell>
                </Row>
            </MainContainer>
        </Layout.Page>
    );
};

export default Imprint;
