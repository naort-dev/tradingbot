import * as React from 'react';
import mixpanel from 'mixpanel-browser';

const context = React.createContext<typeof mixpanel>(null as any);

export const Provider = context.Provider;

if ((process as any).browser) {
    if (process.env.DEBUG) {
        mixpanel.init('.');
    } else {
        mixpanel.init('1c23a8e7b7d2bfa789f7d1d000dbdb92');
    }
    mixpanel.register({
        landingpage: 2,
    });
} else {
    mixpanel.init('.');
}

export const MixpanelProvider: React.FunctionComponent<{}> = (props) => {
    return <Provider value={mixpanel}>{props.children}</Provider>;
};

export const useMixpanel = () => {
    return React.useContext(context);
};
