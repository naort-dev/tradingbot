import * as React from 'react';
import mixpanel from 'mixpanel-browser';

class MixPanelWrapper {
    private debug = false;
    private browser = typeof window !== 'undefined';
    constructor() {
        this.debug = true; //process.env.DEBUG !== undefined;
        if (!this.debug && this.browser) {
            mixpanel.init('1c23a8e7b7d2bfa789f7d1d000dbdb92');
            mixpanel.register({
                landingpage: 2,
            });
        }
    }
    track(name: string) {
        if (!this.debug && this.browser) {
            mixpanel.track(name);
        }
    }
    has_opted_in_tracking() {
        if (!this.debug && this.browser) {
            return mixpanel.has_opted_in_tracking();
        } else {
            return true;
        }
    }
    opt_in_tracking() {
        if (!this.debug && this.browser) {
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
