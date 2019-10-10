import React from 'react';
import { Layout, Blog, BlogContent } from '@containers';
import { NextPage } from 'next';
import { fetch, slug, decode } from '@util';
import Error from '../_error';

interface Props {
    article?: Blog;
}

const BlogPage: NextPage<Props> = ({ article }) => {
    if (!article) return <Error />;
    return (
        <Layout.Page title="resources-blog">
            <Layout.Section minimumPadding id="header">
                <Layout.Center>
                    <BlogContent article={article} />
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};

BlogPage.getInitialProps = async ({ req }) => {
    const page = slug(req);
    let article: Blog | undefined;
    try {
        article = await fetch<Blog>(req, `/static/db/data/${page}.json`);
    } catch {}
    return { article };
};

export default BlogPage;
