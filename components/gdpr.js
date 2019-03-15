import * as React from 'react';
import { Button } from '../theme';
import styled from 'styled-components';
import { observable } from 'mobx';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    max-width: 100%;
    width: 100%;
    padding: 2rem .5rem;
    background: #fff;
    z-index: 1030;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 2px solid ${props => props.theme.main};
    transition: 0.3s all;

    @media (max-width: 768px) {
        display: block;
        text-align: center;
    }
`

const B = styled(Button)`
    margin-left: 30px;
`;

@observer
class GDPR extends React.Component {

    @observable
    hasOptedIn = false;

    componentDidMount() {
        this.hasOptedIn = this.context.mixpanel.has_opted_in_tracking();
    }

    accept() {
        this.context.mixpanel.opt_in_tracking();
        this.hasOptedIn = true;
    }

    render() {
        if (this.hasOptedIn) {
            return null;
        }
        return (
            <Container>
                <p>We use cookies to provide and improve our services. By using our site, you consent to cookies.</p>
                <B hollow small onClick={this.accept.bind(this)}>
                    Accept
                </B>
            </Container>
        )
    }

}

GDPR.contextTypes = {
    mixpanel: PropTypes.object.isRequired,
};

export { GDPR }