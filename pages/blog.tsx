import React from 'react';
import { Layout, Articles, BlogHeader, BlogPreview, BlogPreviewContainer } from '@containers';
import { NextPage } from 'next';
import { fetch } from '@util';
import Link from 'next/link';

interface Props {
    articles: Articles;
}

const BlogOverview: NextPage<Props> = ({ articles }) => {
    return (
        <Layout.Page title="resources-blog">
            <Layout.Section fullHeight id="header">
                <Layout.Center>
                    <BlogHeader {...articles[0]} />
                </Layout.Center>
            </Layout.Section>
            <Layout.Section minimumPadding id="detail">
                <Layout.Center>
                    <BlogPreviewContainer>
                        {articles.map((a) => (
                            <Link key={a.link} href={`/blog/${a.link}`}>
                                <a>
                                    <BlogPreview {...a} />
                                </a>
                            </Link>
                        ))}
                    </BlogPreviewContainer>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};

BlogOverview.getInitialProps = async ({ req }) => {
    const articles = await fetch(req, '/static/db/articles.json');
    return { articles };
};

export default BlogOverview;
