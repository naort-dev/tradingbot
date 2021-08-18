import { Cell, Headline, Row, Text, Padding, PaddingSizes, TextLink, SubHeadline } from '@trality/web-ui-components';
import React from 'react';
import { useEffect } from 'react';
import { LazyImage } from './lazyImage';

interface BlogDataItem {
    feature_image: string;
    title: string;
    excerpt: string;
    url: string;
}

export const BlogData = () => {
    const [data, setData] = React.useState<BlogDataItem[] | null>(null);

    useEffect(() => {
        fetch('https://blog.trality.com/blog/ghost/api/v3/content/posts/?key=a41c51e1a44447ba15b823d955').then((data) => {
            data.json().then((result) => {
                console.log(result.posts.slice(0, 3));
                setData(result.posts.slice(0, 3));
            });
        });
    }, []);

    if (!data) {
        return (
            <Row>
                <Cell size={12} mobileSize={12}>
                    <Headline headlineType="Headline4">Loading data...</Headline>
                </Cell>
            </Row>
        );
    }
    return (
        <Row>
            {data.map((item) => {
                return (
                    <Cell size={4} mobileSize={12}>
                        <TextLink href={item.url}>
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
                                <Text bodyType="Body2">{item.excerpt.length > 250 ? item.excerpt.slice(0, 250) + '...' : item.excerpt}</Text>
                            </Padding>
                        </TextLink>
                    </Cell>
                );
            })}
        </Row>
    );
};
