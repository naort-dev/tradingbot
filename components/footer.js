import * as React from 'react';
import { LayoutCentered, Button } from '../theme';
import styled from 'styled-components';
import * as logo from '../assets/images/trality_logo_white.png';
import { scrollIt } from '../util/scrollit';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { observer } from 'mobx-react';
import { observable } from 'mobx';


const Wrap = styled.div`
    margin-bottom: 15px;
    margin-top: 15px;
    width: 100%;
`;

const Top = styled.div`
    padding-top: 35px;
    padding-bottom: 35px;
    border-bottom: 1px solid white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & img {
        height: 25px;
    }
`;

const Bottom = styled.div`
    padding-top: 35px;
    padding-bottom: 35px;
    display: flex;
    justify-content: space-between;
`;

const L = styled.div`

`;

const R = styled.div`
    display: flex;
    & > div {
        margin-left: 35px;
    }
    & > div > a:hover {
        cursor: pointer;
        color: ${props => props.theme.main};
    }
`;

const MButton = styled(Button)`
    margin-left: 10px;
    @media (max-width: 500px) {
        display: none;
    }
`

@observer
class Footer extends React.Component {

    @observable
    jobs = false;

    componentDidMount() {
        let { router } = this.props
        this.jobs = router.route == '/jobs'
    }

    onClickTwitter() {
        window.open('https://twitter.com/trality_crypto', '_blank');
        this.context.mixpanel.track(`clickedOnTwitterBottom`)
    }

    linkTo(id) {
        scrollIt(
            document.querySelector(id),
            300,
            'easeOutQuad',
            () => this.context.mixpanel.track(`clicked${id}`)
        )
    }

    render() {
        return (
            <LayoutCentered>
                <Wrap>
                    <Top>
                        <div>
                            <img src={logo} alt="Trality Logo"/>
                        </div>
                        <div>
                            { !this.jobs && 
                            <Button hollow small onClick={() => this.linkTo("#head")}>
                                subscribe
                            </Button>
                            }
                            <MButton hollow small onClick={this.onClickTwitter.bind(this)}>
                                follow us on twitter
                            </MButton>
                        </div>
                    </Top>
                    <Bottom>
                        <L>all rights reserved © trality 2018</L>
                        { !this.jobs && 
                        <R>
                            <div>
                                <a onClick={() => this.linkTo("#follow")}>follow bots</a>
                            </div>
                            <div>
                                <a onClick={() => this.linkTo("#build")}>build bots</a>
                            </div>
                        </R>
                        }
                    </Bottom>
                </Wrap>
            </LayoutCentered>
        );
    }
}

Footer.contextTypes = {
    mixpanel: PropTypes.object.isRequired,
};

Footer = withRouter(Footer)

export { Footer };

