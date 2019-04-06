import * as React from 'react';

import {
    SlideHead,
    SlideSimple,
    SlideFollow,
    SlideAlgotrading,
    SlideLetExpertsTrade,
    SlideBuild,
    SlideForFree,
    SlideRent,
    Navigation,
    Footer,
    GDPR,
} from '../components';

import { Section } from '../theme';

import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';
import { useMixpanel } from '../hooks/mixpanel';

const Container = styled.div<{ dark?: boolean }>`
    background-color: ${(props) => (props.dark ? '#181927' : 'transparent')};
    transition: 0.3s all;
`;

const Main: React.FunctionComponent<{}> = () => {
    let [entered, setEntered] = React.useState(false);
    let [scrollSent, setScrollSent] = React.useState(1);
    let mixpanel = useMixpanel();

    const handleWaypointEnter = React.useCallback(() => {
        setEntered(true);
    }, []);

    const handleWaypointLeave = React.useCallback(({ currentPosition }: Waypoint.CallbackArgs) => {
        if (currentPosition == 'below') {
            setEntered(false);
        }
    }, []);

    const handleScrollLog = React.useCallback((id: number, { previousPosition }: Waypoint.CallbackArgs) => {
        if (previousPosition !== 'below') {
            return;
        }
        if (id > scrollSent) {
            mixpanel.track(`scrolledUntil${id}`);
            setScrollSent(id);
        }
    }, []);

    return (
        <React.Fragment>
            <GDPR />
            <Container dark={entered}>
                <Navigation dark={entered} />
                <Section first id="head">
                    <SlideHead />
                </Section>
                <Section>
                    <SlideSimple />
                </Section>
                <Waypoint onEnter={(e) => handleScrollLog(2, e)} />
                <Section id="follow">
                    <SlideFollow />
                </Section>
                <Waypoint onEnter={(e) => handleScrollLog(3, e)} />
                <Section>
                    <SlideAlgotrading />
                </Section>
                <Waypoint onEnter={(e) => handleScrollLog(4, e)} />
                <Section>
                    <SlideLetExpertsTrade />
                </Section>
                <Waypoint onEnter={(e) => handleScrollLog(5, e)} />
                <Waypoint onEnter={handleWaypointEnter} onLeave={handleWaypointLeave} bottomOffset="50%">
                    <div>
                        <Section dark id="build">
                            <SlideBuild />
                        </Section>
                        <Waypoint onEnter={(e) => handleScrollLog(6, e)} />
                        <Section dark>
                            <SlideForFree />
                        </Section>
                        <Waypoint onEnter={(e) => handleScrollLog(7, e)} />
                        <Section dark>
                            <SlideRent />
                        </Section>
                        <Waypoint onEnter={(e) => handleScrollLog(8, e)} />
                        <Section dark clearHeight>
                            <Footer />
                        </Section>
                        <Waypoint onEnter={(e) => handleScrollLog(9, e)} />
                    </div>
                </Waypoint>
            </Container>
        </React.Fragment>
    );
};

export default Main;
