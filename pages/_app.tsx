import * as React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { Router } from 'next/router';
import { TrackingProvider, TrackingConfig, EventOrigin, EventStage } from '@trality/web-tracking';
import { ThemeProvider } from '../components/themeprovider';
import { DarkProvider } from '../hooks/dark';
import { GlobalStyle } from '../theme/style';
import { PortalProvider } from 'hooks/usePortal';

import '../fix.css';

const trackingConfig: TrackingConfig = {
    configLinks: [
        'echo://?id=echoTrackerId',
        'gtm://?gtmId=GTM-KP8HKKB', 
        'mixpanel://?mixpanelId=8b4bcb5de9824d9f88c5f79eaa8f06cb&app=landingpage&landingpage=3&crossSubdomainCookie=true'
    ],
    options: {
        cookieName: 'tracking-optedin',
        ignoreGDPR: false,
        debug: !!process.env.DEBUG,
        browser: typeof window !== 'undefined'
    },
    eventProperties: {
        landingpage: 3,
        app: 'landingpage',
        origin: EventOrigin.LandingPage,
        stage: EventStage.Live,
    },
    setPageviewCallback: (fct) => { Router.events.on('routeChangeComplete', fct) }
};

class Trality extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <TrackingProvider config={trackingConfig}>
                <DarkProvider>
                    <ThemeProvider>
                        <>
                            <GlobalStyle />
                            <Head>
                                <title>{'Trality - Follow & Create Bots'}</title>
                                <meta charSet="UTF-8" />
                                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, user-scalable=no" />
                                <meta name="description" content="Trality is a platform for anybody who wants to profit from algorithmic crypto trading. " />
                                <meta httpEquiv="content-language" content="en" />
                                <meta name="title" content="Trality - Create Trading Bots" />
                                <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
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
                            <PortalProvider>
                                <Component {...pageProps} />
                            </PortalProvider>
                        </>
                    </ThemeProvider>
                </DarkProvider>          
            </TrackingProvider>
        );
    }
}

export default Trality;
