import { Layout } from '@containers';
import { Header } from '@components';

export default () => {
    return (
        <Layout.Page title="jobs">
            <Layout.Section fullHeight noPadding id="jobs-header">
                <Layout.Center>
                    <Header title="Jobs"></Header>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};
