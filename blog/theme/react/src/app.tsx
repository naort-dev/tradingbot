import { EventOrigin, EventStage, EventType, TrackingManagerConfig, TrackingProvider } from '@trality/web-tracking';
import React from 'react';
import ReactDOM from 'react-dom';

import { GDPR } from './components/gdpr';
const trackingLinks = ['gtm://?gtmId=GTM-KP8HKKB'];

const trackingConfig: TrackingManagerConfig = {
    configLinks: trackingLinks.filter((link) => !!link) as string[],
    options: {
        cookieName: 'tracking-optedin',
        ignoreGDPR: false,
        trackingCookie: {
            cookieName: '_tra_origin',
            cookieHostname: 'localhost',
        },
        debug: false,
        isBrowser: typeof window !== 'undefined',
    },
    eventProperties: {
        landingpage: 3,
        app: 'blog',
        origin: EventOrigin.LandingPage,
        stage: EventStage.Live,
    },
    setSessionDurationTracker: [EventType.Time1m, EventType.Time3m, EventType.Time5m, EventType.Time10m],
};

const Container = document.querySelector('#gdpr');
ReactDOM.render(
    <TrackingProvider config={trackingConfig}>
        <GDPR />
    </TrackingProvider>,
    Container,
);
