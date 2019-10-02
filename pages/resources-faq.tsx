import { Layout } from '@containers';
import { Header } from '@components';

export default () => {
    return (
        <Layout.Page title="resources-faq">
            <Layout.Section fullHeight noPadding id="overview">
                <Layout.Center>
                    <Header title="Faqs"></Header>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};
