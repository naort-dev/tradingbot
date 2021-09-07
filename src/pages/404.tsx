import { Layout } from '@containers';
import { Header } from 'components';

const Error = () => {
    return (
        <Layout.Page title="error">
            <Layout.Section fullHeight noPadding id="error-description">
                <Layout.Center>
                    <Header title="Error :(">We were unable to find the page you were looking for.</Header>
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};

export default Error;