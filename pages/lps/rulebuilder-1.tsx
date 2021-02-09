import * as React from 'react';
import { Layout } from '@containers';
import { MetaTags, Page } from '../../util/metaTags';
import { PageTypes } from '../../containers/layout/page';
import styled from 'styled-components';
import { Button } from '@components';

import { Logos } from '@assets';

import * as Alex from '../../assets/images/people/alex.jpg';
import * as Trustpilot from '../../assets/images/pngs/trustpilot.png';

import { ConstUrl } from '@constants';
import { CyanBlock } from 'containers/lps/cyanblock';
import { Container } from 'components/container';
import { Block } from 'components/block';
import { BlockItem } from 'components/blockitem';
import { SecondBlock } from 'components/secondblock';
import { BlockHeadline } from 'components/blockheadline';
import { Paragraph } from 'components/paragraph';
import { FAQ } from 'containers/lps/faq';
import { TrustPilotReviews } from 'constants/trustpilot';
import { InfoData } from 'containers/lps/infodata';
import { FeaturesList } from 'containers/lps/featureslist';

const VideoIframe = styled.iframe`
    width: 100%;
    height: 100%;
    @media only screen and (max-width: 750px) {
        height: auto;
    }
`;

const TrustPilotItem = styled(BlockItem)`
    width: 33% !important;
    @media only screen and (max-width: 750px) {
        width: 100% !important;
    }
`;

const DataBlockItem = styled(BlockItem)`
    width: 55% !important;
    @media only screen and (max-width: 750px) {
        width: 100% !important;
    }
`;

const DataBlock = styled.div`
    & > p {
        font-size: 20px;
        @media only screen and (max-width: 750px) {
            font-size: 14px;
        }
    }
    & > h2 {
        font-size: 48px;
        @media only screen and (max-width: 750px) {
            font-size: 28px;
            margin-bottom: 28px;
        }
    }
`;

const BackgroundBlock = styled(Block)`
    display: block;
    background: linear-gradient(90deg, #f7f7f7 50%, #ffffff 50%);
    @media only screen and (max-width: 750px) {
        background: none;
    }
`;

const VideoBlockItem = styled(BlockItem)`
    width: 100%;
    max-width: 880px;
`;

const HideOnMobile = styled.div`
    display: block;
    @media only screen and (max-width: 750px) {
        display: none;
    }
`;

const DisplayOnMobile = styled.div`
    display: none;
    @media only screen and (max-width: 750px) {
        display: block;
    }
`;

const ActionButton = styled(Button)`
    max-width: none;
    width: 100%;
    margin-top: 52px;
`;

const SpeechBlock = styled.div`
    margin-top: 80px;
    padding-left: 71px;
    @media only screen and (max-width: 750px) {
        padding: 0px 25px;
    }
`;

const PersonImg = styled.img`
    height: 120px;
    width: 120px;
    border-radius: 50%;
    margin-bottom: 30px;
`;

const NameHeadline = styled.div`
    font-size: 20px;
    color: #0c0c0c;
`;

const TitleHeadline = styled.div`
    font-size: 16px;
    color: #353535;
`;

const AsSeenBlock = styled.div`
    margin-top: 65px;
    margin-bottom: 15px;
    background-color: #f7f7f7;
    @media only screen and (max-width: 750px) {
        margin-top: 0px;
        margin-bottom: 0px;
        padding: 30px 25px;
    }
`;

const Title = styled.div`
    font-size: 22px;
    color: #353535;
`;

const LogosGrid = styled.div`
    display: flex;
    width: 100%;
    margin-top: 55px;
    flex-wrap: wrap;
    > div {
        width: 50%;
        margin-bottom: 51px;
        text-align: center;
        display: flex;
        align-items: center;
        height: 100px;
        > img {
            width: 80%;
            @media only screen and (max-width: 750px) {
                width: 90%;
            }
        }
    }
`;

const TrustPilotIcon = styled.img`
    max-width: 162px;
`;

const AllReviewsLink = styled.a<{ center?: boolean }>`
    margin-top: 20px;
    display: block;
    ${(props) => props.center && `text-align:center;`}
`;

const ReviewsBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    width: 70% !important;
    margin-left: 100px;
    @media only screen and (max-width: 750px) {
        width: 100% !important;
        margin-left: 0px;
        flex-wrap: nowrap;
        overflow: scroll;
        h3 {
            text-align: left;
        }
    }
`;

const ReviewItem = styled.div`
    display: block;
    max-width: 30%;
    @media only screen and (max-width: 750px) {
        min-width: 70% !important;
    }
    > h3 {
        font-size: 17px;
        padding-left: 25px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    > p {
        font-size: 14px;
        padding-left: 25px;
    }
`;

const ReviewDetails = styled.div`
    border-radius: 15px;
    background: #f7f7f7;
    padding: 25px;
    h3 {
        margin-top: 0px;
        font-size: 17px;
        margin-bottom: 10px;
        font-weight: bold;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    p {
        font-size: 15px;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin-bottom: 0px;
    }
`;

const Stars = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 10px;
`;

const Star = styled.div`
    ::before {
        content: '★';
        color: #2fb579;
    }
`;

const FullMobileCenter = styled(Layout.Center)`
    @media only screen and (max-width: 750px) {
        padding: 0px;
    }
`;

const RuleBuilder1 = () => {
    return (
        <Layout.Page title="home" pageType={PageTypes.LP}>
            <MetaTags page={Page.HP} />
            <Layout.Section noPadding id="home-description">
                <Layout.Center>
                    <Container>
                        <Block margin={100} gap={125} mobileMargin={0}>
                            <DataBlockItem>
                                <DataBlock>
                                    <h2>Create your own trading algorithm without code</h2>
                                    <p>
                                        The Rule Builder is a state-of-the-art tool that allows anyone to build and automate profitable trading bots
                                        without having to write any code.
                                    </p>
                                    <HideOnMobile>
                                        <ActionButton to={ConstUrl.Signup}>Try the Rule Builder for free!</ActionButton>
                                    </HideOnMobile>
                                </DataBlock>
                            </DataBlockItem>
                            <VideoBlockItem>
                                <VideoIframe
                                    height="315"
                                    src="https://www.youtube.com/embed/ugtCnc-wW7s"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                                <DisplayOnMobile>
                                    <ActionButton to={ConstUrl.Signup}>Try the Rule Builder for free!</ActionButton>
                                </DisplayOnMobile>
                            </VideoBlockItem>
                        </Block>
                    </Container>
                </Layout.Center>
            </Layout.Section>
            <BackgroundBlock margin={100} mobileMargin={30}>
                <Layout.Section noPadding id="bla">
                    <FullMobileCenter>
                        <Container>
                            <SecondBlock margin={0} mobileMargin={0}>
                                <BlockItem>
                                    <AsSeenBlock>
                                        <Title>Proudly supported by</Title>
                                        <LogosGrid>
                                            <div>
                                                <img src={Logos.TokentusBlack} width={'100%'} />
                                            </div>
                                            <div>
                                                <img src={Logos.BlockRocketBlack} width={'100%'} />
                                            </div>
                                            <div>
                                                <img src={Logos.FFGBlack} width={'100%'} />
                                            </div>
                                            <div>
                                                <img src={Logos.Hk} width={'100%'} />
                                            </div>
                                            <div>
                                                <img src={Logos.Inits} width={'100%'} />
                                            </div>
                                            <div>
                                                <img src={Logos.Vba} width={'100%'} />
                                            </div>
                                        </LogosGrid>
                                    </AsSeenBlock>
                                </BlockItem>
                                <BlockItem>
                                    <SpeechBlock>
                                        <PersonImg src={Alex} />
                                        <NameHeadline>Alexander Kahl</NameHeadline>
                                        <TitleHeadline>Vice President of Product at Trality</TitleHeadline>
                                        <Paragraph>
                                            “In the future, everything will be automated. This includes private investments through the use of
                                            algorithmic trading bots. We already see a lot of growth in the algorithmic trading world however most
                                            solutions drag their users in through flashy marketing that promises ‘get rich quick’ while offering
                                            generic black box signals. Trality provides state-of-the-art tools to create highly-intricate, super
                                            creative algorithms within an educational, community-driven infrastructure that promotes learning and
                                            development as a trader.”
                                        </Paragraph>
                                    </SpeechBlock>
                                </BlockItem>
                            </SecondBlock>
                        </Container>
                    </FullMobileCenter>
                </Layout.Section>
            </BackgroundBlock>
            <Layout.Section noPadding id="bla">
                <Layout.Center>
                    <Container>
                        <SecondBlock margin={100} mobileMargin={30}>
                            <TrustPilotItem>
                                <TrustPilotIcon src={Trustpilot} />
                                <h2>Honest reviews from our members</h2>
                                <Paragraph>
                                    At Trality we take feedback seriously and pride ourselves on providing the best customer service possible.
                                </Paragraph>
                                <HideOnMobile>
                                    <AllReviewsLink href="https://www.trustpilot.com/review/trality.com" target="_blank">
                                        See all reviews
                                    </AllReviewsLink>
                                    <ActionButton to={ConstUrl.Signup}>Try the Rule Builder for free!</ActionButton>
                                </HideOnMobile>
                            </TrustPilotItem>
                            <ReviewsBlock>
                                {TrustPilotReviews.map((review) => {
                                    return (
                                        <ReviewItem key={review.title}>
                                            <ReviewDetails>
                                                <Stars>
                                                    <Star />
                                                    <Star />
                                                    <Star />
                                                    <Star />
                                                    <Star />
                                                </Stars>
                                                <h3>{review.title}</h3>
                                                <p>{review.reviewText}</p>
                                            </ReviewDetails>
                                            <h3>{review.name}</h3>
                                            <p>{review.date}</p>
                                        </ReviewItem>
                                    );
                                })}
                            </ReviewsBlock>
                            <DisplayOnMobile>
                                <AllReviewsLink href="https://www.trustpilot.com/review/trality.com" target="_blank" center>
                                    See all reviews
                                </AllReviewsLink>
                                <ActionButton to={ConstUrl.Signup}>Try the Rule Builder for free!</ActionButton>
                            </DisplayOnMobile>
                        </SecondBlock>
                    </Container>
                </Layout.Center>
            </Layout.Section>
            <FeaturesList />
            <InfoData />
            <FAQ />
            <CyanBlock />
        </Layout.Page>
    );
};

export default RuleBuilder1;
