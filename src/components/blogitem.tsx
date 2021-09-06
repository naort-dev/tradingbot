import { Cell, TextLink, Padding, PaddingSizes, SubHeadline, Row, Text } from '@trality/web-ui-components';
import { LazyImage } from 'components';
import moment from 'moment';
import { BlogDataItem } from 'pages/blog';
import React from 'react';

interface Props {
    blogItem: BlogDataItem;
}

export const BlogItem: React.FC<Props> = ({ blogItem }) => {
    return (
        <Cell size={4} mobileSize={12} key={blogItem.url}>
            <TextLink href={blogItem.url.replace('https://www.trality.com/', '')}>
                <Padding
                    size={{}}
                    mobileSize={{
                        bottom: PaddingSizes.ThirtyTwo,
                    }}
                >
                    <LazyImage src={blogItem.feature_image} borders />
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
                        <SubHeadline subheadlineType="SubHeadline1">{blogItem.title}</SubHeadline>
                    </Padding>
                    <Text bodyType="Body2">{blogItem.excerpt.length > 250 ? blogItem.excerpt.slice(0, 250) + '...' : blogItem.excerpt}</Text>
                    <Padding size={{ top: PaddingSizes.TwentyFour }} mobileSize={{ top: PaddingSizes.TwentyFour }}>
                        <Row>
                            <Cell size={2} mobileSize={6}>
                                <LazyImage src={blogItem.authors[0].profile_image} />
                            </Cell>
                            <Cell size={10} mobileSize={6} alignVertical="middle">
                                <Text bodyType={'Caption'} darker>
                                    {blogItem.authors[0].name.toUpperCase()}
                                </Text>
                                <Text bodyType={'Caption'} lighter>
                                    {moment(blogItem.published_at).format('DD.m.YYYY')} • {blogItem.reading_time} min read
                                </Text>
                            </Cell>
                        </Row>
                    </Padding>
                </Padding>
            </TextLink>
        </Cell>
    );
};
