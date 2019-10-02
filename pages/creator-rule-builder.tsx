import { Layout } from '@containers';
import { Header } from '@components';

export default () => {
    return (
        <Layout.Page title="creator-rule-editor">
            <Layout.Section fullHeight noPadding id="rule-editor-description">
                <Layout.Center>
                    <Header title="Rule Editor"></Header>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};
