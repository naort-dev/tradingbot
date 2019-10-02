import { Layout } from '@containers';
import { Header } from '@components';

export default () => {
    return (
        <Layout.Page title="creator-code-editor">
            <Layout.Section fullHeight noPadding id="description">
                <Layout.Center>
                    <Header title="Code Editor"></Header>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};
