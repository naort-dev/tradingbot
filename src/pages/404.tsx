import { Layout } from '@containers';
import { MainContainer, Cell, Row, Assets, Headline, Highlight, Text, Padding, PaddingSizes, TextLink } from '@trality/web-ui-components';
import { Header, LazyImage } from 'components';

const Error = () => {
    return (
        <Layout.Page title="error">
            <Padding size={{ top: PaddingSizes.OneHundred }} mobileSize={{ top: PaddingSizes.EightyFour }}>
                <MainContainer>
                    <Row>
                        <Cell size={6} mobileSize={12} alignVertical="middle">
                            <Padding mobileSize={{ bottom: PaddingSizes.Sixteen }}>
                                <Headline headlineType="Headline1">
                                    <Highlight>404</Highlight> Error
                                </Headline>
                                <Padding size={{ top: PaddingSizes.ThirtyTwo, bottom: PaddingSizes.SixtyFour }}>
                                    <Text bodyType="Body1">
                                        The page that you're looking for could not be found. Please double check your inputs or return to the
                                        homepage.
                                    </Text>
                                </Padding>
                                <TextLink href="/" withArrow>
                                    Return to homepage
                                </TextLink>
                            </Padding>
                        </Cell>
                        <Cell size={6} mobileSize={12} align="right">
                            <LazyImage src={Assets.BrokenBot} />
                        </Cell>
                    </Row>
                </MainContainer>
            </Padding>
        </Layout.Page>
    );
};

export default Error;
