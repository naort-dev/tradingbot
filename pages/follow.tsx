import * as React from 'react';
import * as image from '../assets/images/background.svg';
import { Navigation, Footer, GDPR } from '../components';

import * as Slides from '../components/follow';

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

const Page: React.FunctionComponent<{}> = () => {
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

    React.useEffect(() => {
        setDark(false);
    }, [dark]);

    return (
        <React.Fragment>
            <GDPR />
            <Container dark={dark}>
                <Navigation dark={dark} />
                <Section first id="head">
                    <Slides.Slide0 />
                </Section>
                <Section>
                    <Slides.Slide1 />
                </Section>
                <Section>
                    <Slides.Slide2 />
                </Section>
                <Section>
                    <Slides.Slide3 />
                </Section>
                <Section clearHeight>
                    <Footer />
                </Section>
                <Background src={image} />
            </Container>
        </React.Fragment>
    );
};

export default Page;
