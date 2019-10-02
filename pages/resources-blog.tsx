import { Layout } from '@containers';
import { Header } from '@components';

import blogs from '../blog/blog.json';
import { useEffect } from 'react';

//const DynamicComponent1 = dynamic(import('../components/hello1'))

export default () => {
    console.log(blogs);

    useEffect(() => {
        console.log(blogs[0].reference);
    }, []);

    return (
        <Layout.Page title="resources-blog">
            <Layout.Section fullHeight noPadding id="overview">
                <Layout.Center>
                    <Header title="Blog"></Header>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};
