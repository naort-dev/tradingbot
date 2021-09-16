import { Cell, Headline, Row, Text, Padding, PaddingSizes, TextLink, SubHeadline } from '@trality/web-ui-components';
import { graphql, useStaticQuery, StaticQuery } from 'gatsby';
import React from 'react';
import { useEffect } from 'react';
import { LazyImage } from './lazyImage';
import moment from 'moment';
import { BlogDataItem } from 'src/pages/blog';

export const BlogData = () => {
    return (
        <StaticQuery
            query={graphql`
                query BlogData {
                    allGhostPost(filter: { ghostId: { in: ["5fb2ae9b79d36f3a78f3d54c", "604b24cfdfb5e2400d30bf19", "6092e4b5dfb5e2400d30c23e"] } }) {
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
                                excerpt
                                feature_image
                                published_at
                            }
                        }
                    }
                }
            `}
            render={(data) => {
                return (
                    <Row>
                        {data.allGhostPost.edges.map((value: any) => {
                            const item = value.node as BlogDataItem;
                            return (
                                <Cell size={4} mobileSize={12} key={item.url}>
                                    <TextLink href={item.url.replace('https://www.trality.com/', '')}>
                                        <Padding
                                            size={{}}
                                            mobileSize={{
                                                bottom: PaddingSizes.ThirtyTwo,
                                            }}
                                        >
                                            <LazyImage src={item.feature_image} borders />
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
                                                <SubHeadline subheadlineType="SubHeadline1">{item.title}</SubHeadline>
                                            </Padding>
                                            <Text bodyType="Body2">
                                                {item.excerpt.length > 250 ? item.excerpt.slice(0, 250) + '...' : item.excerpt}
                                            </Text>
                                            <Padding size={{ top: PaddingSizes.TwentyFour }} mobileSize={{ top: PaddingSizes.TwentyFour }}>
                                                <Row>
                                                    <Cell size={2} mobileSize={6}>
                                                        <LazyImage src={item.authors[0].profile_image} />
                                                    </Cell>
                                                    <Cell size={10} mobileSize={6} alignVertical="middle">
                                                        <Text bodyType={'Caption'} darker>
                                                            {item.authors[0].name.toUpperCase()}
                                                        </Text>
                                                        <Text bodyType={'Caption'} lighter>
                                                            {moment(item.published_at).format('DD.m.YYYY')} • {item.reading_time} min read
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
                );
            }}
        />
    );
};
