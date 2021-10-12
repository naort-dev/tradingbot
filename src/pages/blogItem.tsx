import { Layout } from '@containers';
import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { MetaTags, Page } from '../../util/metaTags';
import JsxParser from 'react-jsx-parser';
import parse, { HTMLReactParserOptions, attributesToProps, domToReact } from 'html-react-parser';
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
    Button,
    TextLink,
    BlogContainer,
} from '@trality/web-ui-components';
import { Helmet } from 'react-helmet';
import { LazyImage } from 'components/lazyImage';
import { graphql } from 'gatsby';
import moment from 'moment';

interface BlogDataItem {
    feature_image: string;
    title: string;
    excerpt: string;
    url: string;
    reading_time: number;
    html: string;
    authors: [
        {
            profile_image: string;
            name: string;
        },
    ];
    meta_title: string;
    meta_description: string;
    published_at: string;
    updated_at: string;
}
interface BlogPageProps {
    data: {
        ghostPost: BlogDataItem;
    };
    location: {
        pathname: string;
    };
}

const BlogDataContainer = styled.div`
    & img {
        max-width: 100%;
    }
    & .exit-intent {
        display: none;
    }
    & li::before {
        top: 1.3em;
    }
`;

const options: HTMLReactParserOptions = {
    replace: (domNode) => {
        if ((domNode as any).name === 'p') {
            return (
                <Padding
                    size={{ top: PaddingSizes.Sixteen, bottom: PaddingSizes.Sixteen }}
                    mobileSize={{ top: PaddingSizes.Sixteen, bottom: PaddingSizes.Sixteen }}
                >
                    <Text bodyType="Body1">{domToReact((domNode as any).children, options)}</Text>
                </Padding>
            );
        }
        if ((domNode as any).name === 'h2') {
            return (
                <Padding
                    size={{ top: PaddingSizes.Sixteen, bottom: PaddingSizes.Sixteen }}
                    mobileSize={{ top: PaddingSizes.Sixteen, bottom: PaddingSizes.Sixteen }}
                >
                    <SubHeadline subheadlineType="SubHeadline2">{domToReact((domNode as any).children, options)}</SubHeadline>
                </Padding>
            );
        }
        if ((domNode as any).name === 'li') {
            return (
                <Padding size={{ bottom: PaddingSizes.Four }} mobileSize={{ bottom: PaddingSizes.Four }}>
                    <li>
                        <Text bodyType="Body1">{domToReact((domNode as any).children, options)}</Text>
                    </li>
                </Padding>
            );
        }
        if ((domNode as any).attribs && (domNode as any).attribs.class === 'button-link-temp') {
            const props = attributesToProps((domNode as any).attribs);
            return (
                <Row>
                    <Cell size={12} mobileSize={12} align="center">
                        <Padding size={{ bottom: PaddingSizes.Four }} mobileSize={{ bottom: PaddingSizes.Four }}>
                            <Button onClick={() => (window.location.href = props['href'])}>{domToReact((domNode as any).children, options)}</Button>
                        </Padding>
                    </Cell>
                </Row>
            );
        }
        if ((domNode as any).name === 'img') {
            const props = attributesToProps((domNode as any).attribs);
            return <LazyImage src={props['src']} />;
        }
        if ((domNode as any).attribs && (domNode as any).attribs.class === 'primary-button button-link') {
            const props = attributesToProps((domNode as any).attribs);
            return (
                <Row>
                    <Cell size={12} mobileSize={12} align="center">
                        <Padding size={{ bottom: PaddingSizes.Four }} mobileSize={{ bottom: PaddingSizes.Four }}>
                            <Button
                                fullWidth
                                onClick={() => (window.location.href = (props['href'] as string).replace('https://www.trality.com', ''))}
                            >
                                {domToReact((domNode as any).children, options)}
                            </Button>
                        </Padding>
                    </Cell>
                </Row>
            );
        }
        if ((domNode as any).name === 'a') {
            const props = attributesToProps((domNode as any).attribs);
            return (
                <TextLink href={props['href']} target={props['target']} intext>
                    {domToReact((domNode as any).children, options)}
                </TextLink>
            );
        }
    },
};
const BlogItem: React.FC<BlogPageProps> = ({ location, data }) => {
    const post = data.ghostPost;
    const htmlData = parse(post.html, options);
    return (
        <Layout.Page title="team">
            <Helmet>
                <meta charSet="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />

                <title>{post.title} | Trality</title>
                <meta name="HandheldFriendly" content="True" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <link rel="shortcut icon" href="/favicon.png" type="image/png" />
                <link rel="canonical" href={`https://www.trality.com${location.pathname}`} />
                <meta name="referrer" content="no-referrer-when-downgrade" />

                <meta property="og:site_name" content="Trality Blog" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={post.meta_title} />
                <meta property="og:description" content={post.meta_description} />
                <meta property="og:url" content={`https://www.trality.com${location.pathname}`} />
                <meta property="og:image" content={post.feature_image} />
                <meta property="article:published_time" content={post.published_at} />
                <meta property="article:modified_time" content={post.updated_at} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={post.meta_title} />
                <meta name="twitter:description" content={post.meta_description} />
                <meta name="twitter:url" content={`https://www.trality.com${location.pathname}`} />
                <meta name="twitter:image" content={post.feature_image} />
                <meta name="twitter:label1" content="Written by" />
                <meta name="twitter:data1" content={post.authors[0].name} />
                <meta name="twitter:site" content="@trality_bots" />
                <meta property="og:image:width" content="1920" />
                <meta property="og:image:height" content="1080" />
            </Helmet>
            <Padding size={{ top: PaddingSizes.NinetySix }} mobileSize={{ top: PaddingSizes.SixtyFour }}>
                <MainContainer>
                    <BlogContainer>
                        <Row>
                            <Headline headlineType="Headline5" asH1>
                                {post.title}
                            </Headline>
                        </Row>
                        <Padding size={{ top: PaddingSizes.TwentyFour }} mobileSize={{ top: PaddingSizes.TwentyFour }}>
                            <Row>
                                <Cell size={1} mobileSize={6}>
                                    <LazyImage src={post.authors[0].profile_image} rounded />
                                </Cell>
                                <Cell size={11} mobileSize={6} alignVertical="middle">
                                    <Text bodyType={'Caption'} darker>
                                        {post.authors[0].name.toUpperCase()}
                                    </Text>
                                    <Text bodyType={'Caption'} lighter>
                                        {moment(post.published_at).format('DD MMMM YYYY')} • {post.reading_time} min read
                                    </Text>
                                </Cell>
                            </Row>
                        </Padding>
                    </BlogContainer>
                    <Row>
                        <Padding
                            size={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}
                            mobileSize={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}
                        >
                            <LazyImage src={post.feature_image} borders />
                        </Padding>
                    </Row>
                    <BlogContainer>
                        <BlogDataContainer>{htmlData}</BlogDataContainer>
                    </BlogContainer>
                </MainContainer>
            </Padding>
        </Layout.Page>
    );
};

export const query = graphql`
    query ($id: String) {
        ghostPost(id: { eq: $id }) {
            id
            url
            canonical_url
            authors {
                cover_image
                name
                profile_image
            }
            title
            excerpt
            feature_image
            published_at
            html
            meta_title
            meta_description
            reading_time
            updated_at
        }
    }
`;

export default BlogItem;
