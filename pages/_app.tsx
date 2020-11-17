import * as React from 'react';
import App, { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import { Router } from 'next/router';
import { TrackingProvider, TrackingManagerConfig, EventOrigin, EventStage, CookieStorageProvider, EventType } from '@trality/web-tracking';
import { ThemeProvider } from '../components/themeprovider';
import { DarkProvider } from '../hooks/dark';
import { GlobalStyle } from '../theme/style';
import { PortalProvider } from 'hooks/usePortal';

import '../fix.css';
import { parseCookies } from '@util';
import { PopupManagerComponent } from '../containers/popup';

// Found no way to fetch via env variable prefix, fetching explicitly ...
const trackingLinks = [
    process.env.NEXT_PUBLIC_APP_TRACKER_ECHO,
    process.env.NEXT_PUBLIC_APP_TRACKER_GTM,
    process.env.NEXT_PUBLIC_APP_TRACKER_MIXPANEL,
    process.env.NEXT_PUBLIC_APP_TRACKER_SEGMENT,
];

// Date prototype enrichment

Date.prototype.getMonthFormatted = function () {
    var month = this.getMonth() + 1;
    return month < 10 ? '0' + month : '' + month;
};
Date.prototype.getHoursFormatted = function () {
    var month = this.getHours();
    return month < 10 ? '0' + month : '' + month;
};
Date.prototype.getSecondsFormatted = function () {
    var month = this.getSeconds();
    return month < 10 ? '0' + month : '' + month;
};
Date.prototype.getMinutesFormatted = function () {
    var month = this.getMinutes();
    return month < 10 ? '0' + month : '' + month;
};

const trackingConfig: TrackingManagerConfig = {
    configLinks: trackingLinks.filter((link) => !!link) as string[],
    options: {
        cookieName: 'tracking-optedin',
        ignoreGDPR: true,
        trackingCookie: {
            cookieName: '_tra_origin',
            cookieHostname: process.env.NODE_ENV === 'development' ? 'localhost' : undefined,
        },
        debug: process.env.NEXT_PUBLIC_APP_DEBUG === 'true',
        isBrowser: typeof window !== 'undefined',
    },
    eventProperties: {
        landingpage: 3,
        app: 'landingpage',
        origin: EventOrigin.LandingPage,
        stage: EventStage.Live,
    },
    setPageviewCallback: (callback: (url: string) => void) => {
        Router.events.on('routeChangeComplete', callback);
    },
    setSessionDurationTracker: [EventType.Time1m, EventType.Time3m, EventType.Time5m, EventType.Time10m],
};

class Trality extends App {
    static async getInitialProps(appContext: AppContext) {
        const appProps = await App.getInitialProps(appContext);

        if (appContext.ctx.req) {
            const cookies = parseCookies(appContext.ctx.req.headers.cookie);
            CookieStorageProvider.Set({
                Set: () => {},
                Get: (name: string) => cookies[name] || null,
            });
        }

        return appProps;
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <TrackingProvider config={trackingConfig}>
                <DarkProvider>
                    <ThemeProvider>
                        <>
                            <GlobalStyle />
                            <Head>
                                <meta charSet="UTF-8" />
                                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, user-scalable=no" />
                                <meta httpEquiv="content-language" content="en" />
                                <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                                <link rel="shortcut icon" href="/static/favicon.ico" />
                                <link rel="apple-touch-icon" href="/static/apple-touch-icon.png" />
                                <link rel="preconnect" href="https://www.googletagmanager.com" />
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
                                <PopupManagerComponent />
                            </PortalProvider>
                        </>
                    </ThemeProvider>
                </DarkProvider>
            </TrackingProvider>
        );
    }
}

export default Trality;
