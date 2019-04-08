import * as React from 'react';
import * as image from '../assets/images/background.svg';

import { Navigation, Footer, GDPR } from '../components';

import * as MainSlides from '../components/main';

import { Section } from '../theme';

import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';
import { useMixpanel } from '../hooks/mixpanel';
import { useDark } from '../hooks/dark';

const Container = styled.div<{ dark?: boolean }>`
    background-color: ${(props) => (props.dark ? '#181927' : 'transparent')};
    transition: 0.3s all;
`;

const Background = styled.img`
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
`;

const Main: React.FunctionComponent<{}> = () => {
    let [scrollSent, setScrollSent] = React.useState(1);
    let { dark, setDark } = useDark();
    let mixpanel = useMixpanel();

    const handleWaypointEnter = React.useCallback(() => {
        setDark(true);
    }, []);

    const handleWaypointLeave = React.useCallback(({ currentPosition }: Waypoint.CallbackArgs) => {
        if (currentPosition == 'below') {
            setDark(false);
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
            <Container dark={dark}>
                <Navigation dark={dark} />
                <Section first id="head">
                    <MainSlides.Slide0 />
                </Section>
                <Section>
                    <MainSlides.Slide1 />
                </Section>
                <Waypoint onEnter={(e) => handleScrollLog(2, e)} />
                <Section id="follow">
                    <MainSlides.Slide2 />
                </Section>
                <Waypoint onEnter={(e) => handleScrollLog(5, e)} />
                <Waypoint onEnter={handleWaypointEnter} onLeave={handleWaypointLeave} bottomOffset="50%">
                    <div>
                        <Section dark id="build">
                            <MainSlides.Slide3 />
                        </Section>
                        <Waypoint onEnter={(e) => handleScrollLog(6, e)} />
                        <Section dark>
                            <MainSlides.Slide4 />
                        </Section>
                        <Waypoint onEnter={(e) => handleScrollLog(8, e)} />
                        <Section clearHeight dark>
                            <Footer />
                        </Section>
                    </div>
                </Waypoint>
                <Background src={image} />
            </Container>
        </React.Fragment>
    );
};

export default Main;
