import { ThemeProvider } from 'components';
import { TralityThemeProvider } from '@trality/web-ui-components';
import { DarkProvider } from '@hooks';
import React from 'react';
import { lightTheme } from '@trality/web-ui-components';
import { EventOrigin, EventStage, EventType, TrackingManagerConfig, TrackingProvider } from '@trality/web-tracking';

const trackingLinks = [process.env.TRACKER_ECHO, process.env.TRACKER_GTM, process.env.TRACKER_SENTRY, process.env.TRACKER_SEGMENT];
const trackingConfig: TrackingManagerConfig = {
    configLinks: trackingLinks.filter((link) => !!link) as string[],
    options: {
        cookieName: 'tracking-optedin',
        ignoreGDPR: false,
        trackingCookie: {
            cookieName: '_tra_origin',
            cookieHostname: typeof process.env.BUILD_ENV === 'undefined' ? 'local.trality-internal.com' : undefined,
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

const Layout: React.FunctionComponent = ({ children }) => (
    <DarkProvider>
        <TrackingProvider config={trackingConfig}>
            <ThemeProvider>
                <TralityThemeProvider theme={lightTheme}>{children}</TralityThemeProvider>
            </ThemeProvider>
        </TrackingProvider>
    </DarkProvider>
);

export default Layout;
