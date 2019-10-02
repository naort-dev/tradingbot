import { Layout } from '@containers';
import { Header } from '@components';

export default () => {
    return (
        <Layout.Page title="creator-features">
            <Layout.Section fullHeight noPadding id="feature-description">
                <Layout.Center>
                    <Header title="Features"></Header>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};
