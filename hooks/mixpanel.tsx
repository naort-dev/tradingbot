import * as React from 'react';
import mixpanel from 'mixpanel-browser';
import ReactGA from 'react-ga';
import { Router } from 'next/router';
import { Events } from '@constants';

class MixPanelWrapper {
    private debug = false;
    private browser = typeof window !== 'undefined';
    public opts = {
        landingpage: 3,
        app: 'landingpage',
    };
    constructor() {
        this.debug = process.env.DEBUG !== undefined;
        if (!this.debug && this.browser) {
            mixpanel.init('8b4bcb5de9824d9f88c5f79eaa8f06cb');
            mixpanel.register(this.opts);
            ReactGA.initialize('UA-137950515-1');
            ReactGA.set(this.opts);
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
            this.track('time-1m' as any);
        }, 1000 * 60 * 1);
        setTimeout(() => {
            this.track('time-3m' as any);
        }, 1000 * 60 * 3);
        setTimeout(() => {
            this.track('time-5m' as any);
        }, 1000 * 60 * 5);
        setTimeout(() => {
            this.track('time-10m' as any);
        }, 1000 * 60 * 10);
    }
    get shouldTrack() {
        return !this.debug && this.browser;
    }
    pageview(location: string) {
        if (this.shouldTrack) {
            ReactGA.pageview(location);
            mixpanel.track(Events.Pageview, {
                location,
            });
        }
    }
    track(name: Events, properties?: { [key: string]: string }) {
        if (this.shouldTrack) {
            ReactGA.event({
                category: 'event',
                action: name,
            });
            mixpanel.track(name, {
                ...(properties || {}),
            });
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
    distinctId() {
        return mixpanel.get_distinct_id();
    }
    AppendDistinctId(url: string, attributes?: { [key: string]: string }) {
        if (!this.shouldTrack || !url.startsWith('http') || url.search(/trality.com/g) < 0) {
            return url;
        }
        if (url.includes('?')) {
            url = url + '&distinct_id=' + this.distinctId() + '&lp=' + this.opts.landingpage;
        } else {
            url = url + '?distinct_id=' + this.distinctId() + '&lp=' + this.opts.landingpage;
        }
        if (attributes) {
            Object.keys(attributes).forEach((k) => {
                url += '&' + k + '=' + attributes[k];
            });
        }
        return url;
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
