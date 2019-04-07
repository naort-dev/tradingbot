import * as React from 'react';
import mixpanel from 'mixpanel-browser';

class MixPanelWrapper {
    private local = false;
    constructor() {
        this.local = process.env.DEBUG !== undefined;
    }
    track(name: string) {
        if (!this.local) {
            mixpanel.track(name);
        }
    }
    has_opted_in_tracking() {
        if (!this.local) {
            return mixpanel.has_opted_in_tracking();
        } else {
            return true;
        }
    }
    opt_in_tracking() {
        if (!this.local) {
            mixpanel.opt_in_tracking();
        }
    }
}

const context = React.createContext<MixPanelWrapper>(null as any);
export const Provider = context.Provider;

if ((process as any).browser) {
    if (process.env.DEBUG === undefined) {
        mixpanel.init('1c23a8e7b7d2bfa789f7d1d000dbdb92');
        mixpanel.register({
            landingpage: 2,
        });
    }
}

const wrapper = new MixPanelWrapper();

export const MixpanelProvider: React.FunctionComponent<{}> = (props) => {
    return <Provider value={wrapper}>{props.children}</Provider>;
};

export const useMixpanel = () => {
    return React.useContext(context);
};
