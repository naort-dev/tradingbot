import App, { Container } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';
import mixpanel from 'mixpanel-browser';
import MixpanelProvider from 'react-mixpanel';
import { theme } from '../theme/theme';

if (process.browser) {
    if (process.env.DEBUG) {
        mixpanel.init('.');
    } else {
        mixpanel.init('1c23a8e7b7d2bfa789f7d1d000dbdb92');
    }
    mixpanel.register({
        landingpage: 1
    });
}

class Trality extends App {

    render() {
        const { Component, pageProps } = this.props;
        return (
            <MixpanelProvider mixpanel={mixpanel}>
                <ThemeProvider theme={theme}>
                    <Container>
                        <Head>
                            <title>trality. - build & follow bots</title>
                            <meta charSet="UTF-8" />
                            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, user-scalable=no" />
                            <meta name="description" content="We connect people who know how to make the most of cryptotrading with people who prefer their money to work for them."/>
                            <link rel="canonical" href="https://www.trality.com/" />
                            <link rel="shortcut icon" href="/static/favicon.ico" />
                            <link rel="apple-touch-icon" href="/static/apple-touch-icon.png" />
                            <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-touch-icon-57x57.png" />
                            <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-touch-icon-72x72.png" />
                            <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-touch-icon-76x76.png" />
                            <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-touch-icon-114x114.png" />
                            <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-touch-icon-120x120.png" />
                            <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-touch-icon-144x144.png" />
                            <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-touch-icon-152x152.png" />
                            <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon-180x180.png" />
                        </Head>
                        <Component {...pageProps} />
                    </Container>
                </ThemeProvider>
            </MixpanelProvider>
        );
    }
}

export default Trality;
