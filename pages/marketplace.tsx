import { Layout } from '@containers';
import { Header } from '@components';

export default () => {
    return (
        <Layout.Page title="marketplace">
            <Layout.Section fullHeight noPadding id="marketplace-description">
                <Layout.Center>
                    <Header title="Marketplace"></Header>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};
