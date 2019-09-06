import * as React from 'react';
import { Navigation, Footer } from '../components';
import { Section } from '../theme';

export const Page: React.FunctionComponent<{}> = (props) => {
    return (
        <React.Fragment>
            <Navigation dark={false} />
            <Section first id="head" nocenter>
                {props.children}
            </Section>
            <Section clearHeight>
                <Footer />
            </Section>
        </React.Fragment>
    );
};
