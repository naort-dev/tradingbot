import { Layout } from '@containers';
import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { MetaTags, Page } from '../../util/metaTags';
import JsxParser from 'react-jsx-parser';
import parse, { HTMLReactParserOptions, attributesToProps, domToReact } from 'html-react-parser';
import {
    Assets,
    lightTheme,
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

const BlogBlockQuote = styled.blockquote`
    margin: 1.5em 0 1.5em;
    padding: 0 1.5em;
    border-left: 3px solid ${lightTheme.colors.blue.main};
`;

const BlueDotSpan = styled.span`
    color: ${lightTheme.colors.blue.main};
`;

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

    & figure {
        text-align: center;
        padding-top: ${PaddingSizes.Sixteen};
        padding-bottom: ${PaddingSizes.Sixteen};
    }
    & figcaption {
        text-align: left;
    }
    & pre {
        overflow-x: auto;
        max-width: 100%;
        border: 1px solid #000;
        color: #e5eff5;
        background: #0e0f11;
        border-radius: 5px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    & * {
        overflow-wrap: break-word;
    }
    & h1 {
        width: 100%;
    }

    & h2 {
        width: 100%;
    }

    & h3 {
        width: 100%;
    }

    & h4 {
        width: 100%;
    }

    & h5 {
        width: 100%;
    }
    & pre code {
        padding: 0;
        font-size: inherit;
        line-height: inherit;
        background: transparent;
    }

    & pre code :not(span) {
        color: inherit;
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
                    <Headline headlineType="Headline2">{domToReact((domNode as any).children, options)}</Headline>
                </Padding>
            );
        }

        if ((domNode as any).name === 'h3') {
            return (
                <Padding
                    size={{ top: PaddingSizes.Sixteen, bottom: PaddingSizes.Sixteen }}
                    mobileSize={{ top: PaddingSizes.Sixteen, bottom: PaddingSizes.Sixteen }}
                >
                    <Headline headlineType="Headline3">{domToReact((domNode as any).children, options)}</Headline>
                </Padding>
            );
        }

        if ((domNode as any).name === 'h4') {
            return (
                <Padding
                    size={{ top: PaddingSizes.Sixteen, bottom: PaddingSizes.Sixteen }}
                    mobileSize={{ top: PaddingSizes.Sixteen, bottom: PaddingSizes.Sixteen }}
                >
                    <SubHeadline subheadlineType="SubHeadline1">{domToReact((domNode as any).children, options)}</SubHeadline>
                </Padding>
            );
        }
        if ((domNode as any).name === 'h5') {
            return (
                <Padding
                    size={{ top: PaddingSizes.Sixteen, bottom: PaddingSizes.Sixteen }}
                    mobileSize={{ top: PaddingSizes.Sixteen, bottom: PaddingSizes.Sixteen }}
                >
                    <SubHeadline subheadlineType="SubHeadline2">{domToReact((domNode as any).children, options)}</SubHeadline>
                </Padding>
            );
        }
        if ((domNode as any).name === 'figcaption') {
            return (
                <figcaption>
                    <Text bodyType="Caption">{domToReact((domNode as any).children, options)}</Text>
                </figcaption>
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
                            <Button
                                fullWidth
                                onClick={() => {
                                    window.location.href = props['href'].replace('https://www.trality.com', '');
                                }}
                            >
                                {domToReact((domNode as any).children, options)}
                            </Button>
                        </Padding>
                    </Cell>
                </Row>
            );
        }
        if ((domNode as any).name === 'img' && domNode) {
            const props = attributesToProps((domNode as any).attribs);
            if (!props['src'].includes('ic_trust.png') && !props['style'] && (!props['className'] || !props['className'].includes('img-gallery'))) {
                // Certain images we don't want to use lazyimage since observer doesn't work with fixed elements
                if (props['src'].includes('exit-intent-popup') || props['src'].includes('sidebar-popup')) {
                    return <LazyImage src={props['src']} />;
                }
                return (
                    <Padding
                        size={{ top: PaddingSizes.Sixteen, bottom: PaddingSizes.Sixteen }}
                        mobileSize={{ top: PaddingSizes.Sixteen, bottom: PaddingSizes.Sixteen }}
                    >
                        <LazyImage src={props['src']} />
                    </Padding>
                );
            }
        }
        if ((domNode as any).name === 'blockquote') {
            return (
                <BlogBlockQuote>
                    <Text bodyType="Body1">{domToReact((domNode as any).children, options)}</Text>
                </BlogBlockQuote>
            );
        }
        if ((domNode as any).attribs && (domNode as any).attribs.class === 'primary-button button-link') {
            const props = attributesToProps((domNode as any).attribs);
            return (
                <Row>
                    <Cell size={12} mobileSize={12} align="center">
                        <Padding size={{ bottom: PaddingSizes.Four }} mobileSize={{ bottom: PaddingSizes.Four }}>
                            <Button
                                fullWidth
                                onClick={() => {
                                    window.location.href = (props['href'] as string).replace('https://www.trality.com', '');
                                }}
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

    React.useEffect(() => {
        (window as any).Prism.highlightAll();
    }, []);
    return (
        <Layout.Page title="team">
            <Helmet>
                <meta charSet="utf-8" />
                <link rel="stylesheet" href="/prism-tomorrow.min.css" />
                <link rel="stylesheet" href="/prism-toolbar.min.css" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />

                <title>{post.title} | Trality</title>
                <meta name="HandheldFriendly" content="True" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
            <Padding size={{ top: PaddingSizes.NinetySix }} mobileSize={{ top: PaddingSizes.NinetySix }}>
                <MainContainer>
                    <BlogContainer>
                        <Row>
                            <Headline headlineType="Headline1">{post.title}</Headline>
                        </Row>
                        <Padding size={{ top: PaddingSizes.TwentyFour }} mobileSize={{ top: PaddingSizes.TwentyFour }}>
                            <Row>
                                <Cell size={1} mobileSize={2}>
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
                        <Cell size={12} mobileSize={12} align="center" alignMobile="center">
                            <Padding
                                size={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}
                                mobileSize={{ top: PaddingSizes.TwentyFour, bottom: PaddingSizes.TwentyFour }}
                            >
                                <LazyImage src={post.feature_image} borders ensureFullContainerWidth />
                            </Padding>
                        </Cell>
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
