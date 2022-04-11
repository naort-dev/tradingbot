import { Layout } from '@containers';
import React, { ReactNode } from 'react';
import moment from 'moment';
import { MetaTags, Page } from '../../util/metaTags';
import {
    Assets,
    Cell,
    CyanLightestBackground,
    Headline,
    MainContainer,
    Padding,
    PaddingSizes,
    Row,
    SubHeadline,
    Surface,
    Text,
    TextLink,
} from '@trality/web-ui-components';
import { FeaturedIn } from 'components/featuredin';
import { LazyImage } from 'components/lazyImage';
import { graphql } from 'gatsby';
export interface BlogDataItem {
    feature_image: string;
    title: string;
    excerpt: string;
    url: string;
    reading_time: number;
    published_at: string;
    authors: [
        {
            profile_image: string;
            name: string;
        },
    ];
}
interface BlogPageProps {
    data: {
        allGhostPost: {
            edges: [{ node: BlogDataItem }];
        };
    };
}

const Blog: React.FC<BlogPageProps> = ({ data }) => {
    const featured = data.allGhostPost.edges[0];
    const recent = data.allGhostPost.edges.slice(1, 4);
    const others = data.allGhostPost.edges.slice(4);
    const bracketsLinkExcerpt = /(\[.*?\])/g ;
    
    return (
        <Layout.Page title="team">
            <MetaTags page={Page.Blog} />
            <MainContainer>
                <Padding
                    size={{ top: PaddingSizes.SixtyFour, bottom: PaddingSizes.SixtyFour }}
                    mobileSize={{ top: PaddingSizes.OneHundred, bottom: PaddingSizes.Zero }}
                >
                    <Headline headlineType="Headline2">Trality Blog</Headline>
                    <Padding size={{ top: PaddingSizes.TwentyFour }}>
                        <Text bodyType={'Body2'}>Create and invest through automated trading bots.</Text>
                    </Padding>
                </Padding>
                <Padding 
                    size={{ top: PaddingSizes.SixtyFour, bottom: PaddingSizes.SixtyFour }}>
                    <Row>
                        <Cell size={4} mobileSize={12} alignVertical="middle">
                            <TextLink href={featured.node.url.replace('https://www.trality.com', '').slice(0, -1)}>
                                <Padding
                                    size={{ bottom: PaddingSizes.ThirtyTwo, left: PaddingSizes.Sixteen, right: PaddingSizes.Sixteen }}
                                    mobileSize={{
                                        bottom: PaddingSizes.ThirtyTwo, left: PaddingSizes.Sixteen, right: PaddingSizes.Sixteen 
                                    }}
                                >
                                    <Padding
                                        size={{
                                            top: PaddingSizes.TwentyFour,
                                            bottom: PaddingSizes.Sixteen,
                                        }}
                                        mobileSize={{
                                            top: PaddingSizes.Sixteen,
                                            bottom: PaddingSizes.Sixteen,
                                        }}
                                    >
                                        <SubHeadline subheadlineType="SubHeadline1">{featured.node.title}</SubHeadline>
                                    </Padding>
                                    <Text bodyType="Body2">
                                        {featured.node.excerpt.length > 250 ? featured.node.excerpt.replace(bracketsLinkExcerpt, '').slice(0, 250) + '...' : featured.node.excerpt}
                                    </Text>
                                    <Padding size={{ top: PaddingSizes.TwentyFour }} mobileSize={{ top: PaddingSizes.TwentyFour }}>
                                        <Row>
                                            <Cell size={2} mobileSize={2}>
                                                <Surface shadowType="dark-l" rounded>
                                                    <LazyImage src={featured.node.authors[0].profile_image} rounded/>
                                                </Surface>
                                            </Cell>
                                            
                                            <Cell size={10} mobileSize={6} alignVertical="middle">
                                                <Text bodyType={'Caption'} darker>
                                                    {featured.node.authors[0].name.toUpperCase()}
                                                </Text>
                                                <Text bodyType={'Caption'} lighter>
                                                    {moment(featured.node.published_at).format('DD MMMM YYYY')} • {featured.node.reading_time} min
                                                    read
                                                </Text>
                                            </Cell>
                                        </Row>
                                    </Padding>
                                </Padding>
                            </TextLink>
                        </Cell>
                        <Cell size={8} mobileSize={12}>
                            <LazyImage src={featured.node.feature_image} borders />
                        </Cell>
                    </Row>
                </Padding>
                <Padding size={{ top: PaddingSizes.SixtyFour, bottom: PaddingSizes.SixtyFour }}>
                    <Headline headlineType="Headline2">Recent blogs</Headline>
                    <Padding
                        size={{ top: PaddingSizes.SixtyFour }}
                        mobileSize={{ top: PaddingSizes.TwentyFour }}>
                        <Row>
                            {recent.map((item) => {
                                return (
                                    <Cell size={4} mobileSize={12} key={item.node.url}>
                                        <TextLink href={item.node.url.replace('https://www.trality.com', '').slice(0, -1)}>
                                            <Padding
                                                size={{ bottom: PaddingSizes.ThirtyTwo }}
                                                mobileSize={{
                                                    bottom: PaddingSizes.ThirtyTwo,
                                                }}
                                            >
                                                <LazyImage src={item.node.feature_image} borders />
                                                <Padding
                                                    size={{
                                                        top: PaddingSizes.TwentyFour,
                                                        bottom: PaddingSizes.Sixteen,
                                                    }}
                                                    mobileSize={{
                                                        top: PaddingSizes.Sixteen,
                                                        bottom: PaddingSizes.Sixteen,
                                                    }}
                                                >
                                                    <SubHeadline subheadlineType="SubHeadline1">{item.node.title}</SubHeadline>
                                                </Padding>
                                                <Text bodyType="Body2">
                                                    {item.node.excerpt.length > 250 ? item.node.excerpt.replace(bracketsLinkExcerpt, '').slice(0, 250) + '...' : item.node.excerpt}
                                                </Text>
                                                <Padding size={{ top: PaddingSizes.TwentyFour }} mobileSize={{ top: PaddingSizes.TwentyFour }}>
                                                    <Row>
                                                        <Cell size={2} mobileSize={2}>
                                                            <Surface shadowType="dark-l" rounded>
                                                                <LazyImage src={item.node.authors[0].profile_image} rounded />
                                                            </Surface>
                                                        </Cell>
                                                        <Cell size={10} mobileSize={6} alignVertical="middle">
                                                            <Text bodyType={'Caption'} darker>
                                                                {item.node.authors[0].name.toUpperCase()}
                                                            </Text>
                                                            <Text bodyType={'Caption'} lighter>
                                                                {moment(item.node.published_at).format('DD MMMM YYYY')} • {item.node.reading_time} min
                                                                read
                                                            </Text>
                                                        </Cell>
                                                    </Row>
                                                </Padding>
                                            </Padding>
                                        </TextLink>
                                    </Cell>
                                );
                            })}
                        </Row>
                    </Padding>
                </Padding>
                <Padding size={{ top: PaddingSizes.SixtyFour, bottom: PaddingSizes.SixtyFour }}>
                    <Headline headlineType="Headline2">Older blogs</Headline>
                    <Padding 
                        size={{ top: PaddingSizes.SixtyFour }}
                        mobileSize={{ top: PaddingSizes.TwentyFour}}>
                        <Row>
                            {others.map((item) => {
                                return (
                                    <Cell size={4} mobileSize={12} key={item.node.url}>
                                        <TextLink href={item.node.url.replace('https://www.trality.com', '').slice(0, -1)}>
                                            <Padding
                                                size={{ bottom: PaddingSizes.ThirtyTwo }}
                                                mobileSize={{
                                                    bottom: PaddingSizes.ThirtyTwo,
                                                }}
                                            >
                                                <LazyImage src={item.node.feature_image} borders />
                                                <Padding
                                                    size={{
                                                        top: PaddingSizes.TwentyFour,
                                                        bottom: PaddingSizes.Sixteen,
                                                    }}
                                                    mobileSize={{
                                                        top: PaddingSizes.Sixteen,
                                                        bottom: PaddingSizes.Sixteen,
                                                    }}
                                                >
                                                    <SubHeadline subheadlineType="SubHeadline1">{item.node.title}</SubHeadline>
                                                </Padding>
                                                <Text bodyType="Body2">
                                                    {item.node.excerpt.length > 250 ? item.node.excerpt.replace(bracketsLinkExcerpt, '').slice(0, 250) + '...' : item.node.excerpt}
                                                </Text>
                                                <Padding size={{ top: PaddingSizes.TwentyFour }} mobileSize={{ top: PaddingSizes.TwentyFour }}>
                                                    <Row>
                                                        <Cell size={2} mobileSize={2}>
                                                            <Surface shadowType="dark-l" rounded>
                                                                <LazyImage src={item.node.authors[0].profile_image} rounded />
                                                            </Surface>
                                                        </Cell>
                                                        <Cell size={10} mobileSize={6} alignVertical="middle">
                                                            <Text bodyType={'Caption'} darker>
                                                                {item.node.authors[0].name.toUpperCase()}
                                                            </Text>
                                                            <Text bodyType={'Caption'} lighter>
                                                                {moment(item.node.published_at).format('DD MMMM YYYY')} • {item.node.reading_time} min
                                                                read
                                                            </Text>
                                                        </Cell>
                                                    </Row>
                                                </Padding>
                                            </Padding>
                                        </TextLink>
                                    </Cell>
                                );
                            })}
                        </Row>
                    </Padding>
                </Padding>
            </MainContainer>
        </Layout.Page>
    );
};

export default Blog;

export const query = graphql`
    query BlogQuery {
        allGhostPost {
            edges {
                node {
                    id
                    url
                    canonical_url
                    authors {
                        cover_image
                        name
                        profile_image
                    }
                    title
                    reading_time
                    excerpt
                    feature_image
                    published_at
                }
            }
        }
    }
`;
