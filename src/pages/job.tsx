import { Layout } from '@containers';
import { Header, Link, Breadcrumb } from '@components';
import { MetaTags, Page } from '../../util/metaTags';
import * as LoaderGif from '../../assets/images/misc/trality-bot-animation.gif';
import React from 'react';
import styled from 'styled-components';
import { MainContainer, Row, Cell, Padding, PaddingSizes, Headline, Text, Button } from '@trality/web-ui-components';
import { Position, useJobs } from '@hooks';
import { Misc } from '@util';

const LoaderPosition = styled.div`
    text-align: center;
    margin: 0 auto;
`;
const Loader = styled.img`
    max-width: 150px;
`;

const Centering = styled.div`
    margin-top: 50px;
    text-align: center;

    @media (max-width: 768px) {
        & > button {
            width: 100%;
        }
    }
`;

const Job = () => {
    const urlParams = new URLSearchParams(!Misc.IsServer() ? window.location.search : '');
    const data = useJobs(urlParams.get('id') ?? '') as Position | null;
    if (!data) {
        return (
            <Layout.Page title="jobs-design">
                <LoaderPosition>
                    <Loader src={LoaderGif} />
                    <p>We're loading this position</p>
                </LoaderPosition>
            </Layout.Page>
        );
    }
    return (
        <Layout.Page title="jobs-design">
            <MetaTags page={Page.Jobs} />
            <Layout.Section fullHeight noPadding id="jobs-header">
                <Padding
                    size={{
                        top: PaddingSizes.NinetySix,
                        bottom: PaddingSizes.SixtyFour,
                    }}
                    mobileSize={{
                        top: PaddingSizes.NinetySix,
                        bottom: PaddingSizes.FiftySix,
                    }}
                >
                    <MainContainer>
                        <Row>
                            <Cell size={12} mobileSize={12}>
                                <Padding
                                    size={{
                                        bottom: PaddingSizes.SixtyFour,
                                    }}
                                    mobileSize={{
                                        bottom: PaddingSizes.FiftySix,
                                    }}
                                >
                                    <Headline headlineType="Headline1">{data.title}</Headline>
                                </Padding>
                            </Cell>
                        </Row>
                        {data.desc.map((item) => {
                            return (
                                <>
                                    <Padding
                                        size={{
                                            top: PaddingSizes.ThirtyTwo,
                                            bottom: PaddingSizes.SixtyFour,
                                        }}
                                        mobileSize={{
                                            top: PaddingSizes.FiftySix,
                                            bottom: PaddingSizes.FiftySix,
                                        }}
                                    >
                                        <Headline headlineType="Headline2">{item.headline}</Headline>
                                    </Padding>
                                    <Text bodyType="Body2">
                                        <div dangerouslySetInnerHTML={{ __html: item.data }} />
                                    </Text>
                                </>
                            );
                        })}
                        <Centering>
                            <Button onClick={() => (window.location.href = `https://trality.jobs.personio.de/job/${data.id}#apply`)}>
                                Apply now!
                            </Button>
                        </Centering>
                    </MainContainer>
                </Padding>
            </Layout.Section>
        </Layout.Page>
    );
};

export default Job;
