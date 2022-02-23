import { Layout } from '@containers';
import { CompetitionPage, PaddingSizes, Padding, CompetitionData } from '@trality/web-ui-components';
import React from 'react';
import { MetaTags, Page } from '../../util/metaTags';

const CompetitionUrl = typeof process.env.COMPETITION_URL === 'undefined' ? false : process.env.COMPETITION_URL;
const CompetitionDataUrl = typeof process.env.COMPETITION_DATA_URL === 'undefined' ? false : process.env.COMPETITION_DATA_URL;

const DataFetch = () => {
    return new Promise<CompetitionData>((resolve) => {
        if (CompetitionDataUrl) {
            fetch(CompetitionDataUrl, { credentials: 'include' }).then((data) => {
                data.json().then((json) => {
                    resolve({
                        participants: json.participants,
                        start: json.start,
                        end: json.end,
                    });
                });
            });
        }
    });
};

const Competition = () => {
    return (
        <Layout.Page title="Competition">
            <MetaTags page={Page.Competition} />
            <Padding size={{ top: PaddingSizes.SixtyFour }} mobileSize={{ top: PaddingSizes.NinetySix }}>
                <CompetitionPage
                    pageStyle="lp"
                    callToActionsVisible={CompetitionUrl ? true : false}
                    competitionData={CompetitionDataUrl ? DataFetch : undefined}
                    competitionBoxesVisible={CompetitionDataUrl ? true : false}
                    onCallToAction={CompetitionUrl ? () => window.location.assign(CompetitionUrl) : undefined}
                />
            </Padding>
        </Layout.Page>
    );
};

export default Competition;
