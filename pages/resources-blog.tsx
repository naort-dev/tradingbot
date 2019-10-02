import { Layout } from '@containers';
import { Header } from '@components';

export default () => {
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
