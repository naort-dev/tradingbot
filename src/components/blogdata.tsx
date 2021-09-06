import { Row } from '@trality/web-ui-components';
import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { BlogDataItem } from 'pages/blog';
import { BlogItem } from './blogitem';

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
                            return <BlogItem blogItem={item} />;
                        })}
                    </Row>
                );
            }}
        />
    );
};
