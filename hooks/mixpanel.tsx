import * as React from 'react';
import mixpanel from 'mixpanel-browser';
import ReactGA from 'react-ga';
import { Router } from 'next/router';

class MixPanelWrapper {
    private debug = false;
    private browser = typeof window !== 'undefined';
    constructor() {
        this.debug = process.env.DEBUG !== undefined;
        if (!this.debug && this.browser) {
            const opts = {
                landingpage: 3,
            };
            mixpanel.init('1c23a8e7b7d2bfa789f7d1d000dbdb92');
            mixpanel.register(opts);
            ReactGA.initialize('UA-137950515-1');
            ReactGA.set(opts);
            Router.events.on('routeChangeComplete', (url) => {
                this.pageview(url);
            });
            // Initial pageview
            this.pageview(window.location.pathname);
        }
        if (this.shouldTrack) {
            this.startTimeouts();
        }
    }
    startTimeouts() {
        setTimeout(() => {
            this.track('time-1m');
        }, 1000 * 60 * 1);
        setTimeout(() => {
            this.track('time-3m');
        }, 1000 * 60 * 3);
        setTimeout(() => {
            this.track('time-5m');
        }, 1000 * 60 * 5);
        setTimeout(() => {
            this.track('time-10m');
        }, 1000 * 60 * 10);
    }
    get shouldTrack() {
        return !this.debug && this.browser;
    }
    pageview(location: string) {
        if (this.shouldTrack) {
            ReactGA.pageview(location);
            mixpanel.track(location);
        }
    }
    track(name: string) {
        if (this.shouldTrack) {
            ReactGA.event({
                category: 'event',
                action: name,
            });
            mixpanel.track(name);
        }
    }
    has_opted_in_tracking() {
        if (!this.browser) {
            return true;
        }
        if (this.shouldTrack) {
            return mixpanel.has_opted_in_tracking();
        } else {
            return true;
        }
    }
    opt_in_tracking() {
        if (this.shouldTrack) {
            mixpanel.opt_in_tracking();
        }
    }
}

const context = React.createContext<MixPanelWrapper>(null as any);
export const Provider = context.Provider;

const wrapper = new MixPanelWrapper();

export const MixpanelProvider: React.FunctionComponent<{}> = (props) => {
    return <Provider value={wrapper}>{props.children}</Provider>;
};

export const useMixpanel = () => {
    return React.useContext(context);
};

export const withMixpanel = (Comp: any) => {
    return (props: any) => {
        let mixpanel = useMixpanel();
        return <Comp {...props} mixpanel={mixpanel} />;
    };
};
