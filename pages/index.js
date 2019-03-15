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
  GDPR
} from '../components';

import { Section } from '../theme';

import { observer } from 'mobx-react';
import styled from 'styled-components';
import Waypoint from 'react-waypoint';
import { observable } from 'mobx';
import PropTypes from 'prop-types';

const Container = styled.div`
    background-color: ${(props) => (props.dark ? '#181927' : 'transparent')};
    transition: 0.3s all;
`;

@observer
class Main extends React.Component {

    @observable
    entered = false;

    @observable
    scrollSent = 1;

    componentDidMount() {
        this.context.mixpanel.track('pageView');
    }

    _handleWaypointEnter() {
        this.entered = true;
    }

    _handleWaypointLeave({ currentPosition }) {
        if (currentPosition == 'below') {
            this.entered = false;
        }
    }

    handleScrollLog(id, { previousPosition }) {
        if (previousPosition !== 'below') {
            return;
        }
        if (id > this.scrollSent) {
            this.context.mixpanel.track(`scrolledUntil${id}`);
            this.scrollSent = id;
        }
    }

    render() {
        return (
            <React.Fragment>
                <GDPR />
                <Container dark={this.entered}>
                    <Navigation dark={this.entered} />
                    <Section first id="head">
                        <SlideHead />
                    </Section>
                    <Section>
                        <SlideSimple />
                    </Section>
                    <Waypoint onEnter={(e) => this.handleScrollLog(2, e)} />
                    <Section id="follow">
                        <SlideFollow />
                    </Section>
                    <Waypoint onEnter={(e) => this.handleScrollLog(3, e)} />
                    <Section>
                        <SlideAlgotrading />
                    </Section>
                    <Waypoint onEnter={(e) => this.handleScrollLog(4, e)} />
                    <Section>
                        <SlideLetExpertsTrade />
                    </Section>
                    <Waypoint onEnter={(e) => this.handleScrollLog(5, e)} />
                    <Waypoint onEnter={this._handleWaypointEnter.bind(this)} onLeave={this._handleWaypointLeave.bind(this)} bottomOffset="50%">
                        <div>
                            <Section dark id="build">
                                <SlideBuild />
                            </Section>
                            <Waypoint onEnter={(e) => this.handleScrollLog(6, e)} />
                            <Section dark>
                                <SlideForFree />
                            </Section>
                            <Waypoint onEnter={(e) => this.handleScrollLog(7, e)} />
                            <Section dark>
                                <SlideRent />
                            </Section>
                            <Waypoint onEnter={(e) => this.handleScrollLog(8, e)} />
                            <Section dark clearHeight>
                                <Footer />
                            </Section>
                            <Waypoint onEnter={(e) => this.handleScrollLog(9, e)} />
                        </div>
                    </Waypoint>
                </Container>
            </React.Fragment>
        );
    }
}

Main.contextTypes = {
    mixpanel: PropTypes.object.isRequired,
};

export default Main;
