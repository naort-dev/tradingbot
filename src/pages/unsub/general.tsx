import { Illustrations } from '@assets';
import { Layout } from '@containers';
import React from 'react';
import styled from 'styled-components';

import { MetaTags, Page } from '../../../util/metaTags';

const Center = styled.div`
    margin: 60px auto;
`;

const General = () => {
    return (
        <Layout.Page title="unsub">
            <MetaTags page={Page.UnSub} />
            <Layout.Section id="unsub">
                <Layout.Center>
                    <Layout.TwoColumn mobileReverted>
                        <Layout.OneColumn collapseMobile>
                            <Layout.CenterVertical>
                                <div>
                                    <h1>We are sad to let you go</h1>
                                    <p>You will no longer receive general Trality emails and updates from this list.</p>
                                </div>
                            </Layout.CenterVertical>
                        </Layout.OneColumn>
                        <Layout.OneColumn collapseMobile>
                            <Layout.Center>
                                <Center>
                                    <img src={Illustrations.Lost} />
                                </Center>
                            </Layout.Center>
                        </Layout.OneColumn>
                    </Layout.TwoColumn>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};

export default General;
