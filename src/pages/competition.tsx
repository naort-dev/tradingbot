import { Layout } from '@containers';
import { CompetitionPage, PaddingSizes, Padding } from '@trality/web-ui-components';
import React from 'react';
import { MetaTags, Page } from '../../util/metaTags';

const Competition = () => {
    return (
        <Layout.Page title="Competition">
            <MetaTags page={Page.Competition} />
            <Padding size={{ top: PaddingSizes.SixtyFour }} mobileSize={{ top: PaddingSizes.NinetySix }}>
                <CompetitionPage pageStyle="lp" callToActionsVisible={false} competitionBoxesVisible={false} />
            </Padding>
        </Layout.Page>
    );
};

export default Competition;
