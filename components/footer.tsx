import * as React from 'react';
import { LayoutCentered, Button } from '../theme';
import styled from 'styled-components';
import * as logo from '../assets/images/trality_logo_white.png';
import { scrollIt } from '../util/scrollit';
import { withRouter, WithRouterProps } from 'next/router';
import { useMixpanel } from '../hooks/mixpanel';

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

const L = styled.div``;

const R = styled.div`
    display: flex;
    & > div {
        margin-left: 35px;
    }
    & > div > a:hover {
        cursor: pointer;
        color: ${(props) => props.theme.main};
    }
`;

const MButton = styled(Button)`
    margin-left: 10px;
    @media (max-width: 500px) {
        display: none;
    }
`;

const Component: React.FunctionComponent<WithRouterProps> = (props) => {
    let jobs = props.router ? props.router.route == '/jobs' : false;
    let mixpanel = useMixpanel();
    const onClickTwitter = React.useCallback(() => {
        mixpanel.track('clickedOnTwitterBottom');
        window.open('https://twitter.com/trality_bots', '_blank');
    }, []);
    const linkTo = React.useCallback((id: string) => {
        scrollIt(document.querySelector(id), 300, 'easeOutQuad', () => mixpanel.track(`clicked${id}`));
    }, []);

    return (
        <LayoutCentered>
            <Wrap>
                <Top>
                    <div>
                        <img src={logo} alt="Trality Logo" />
                    </div>
                    <div>
                        {!jobs && (
                            <Button hollow small onClick={() => linkTo('#head')}>
                                subscribe
                            </Button>
                        )}
                        <MButton hollow small onClick={onClickTwitter}>
                            follow us on twitter
                        </MButton>
                    </div>
                </Top>
                <Bottom>
                    <L>all rights reserved © trality 2018</L>
                    {!jobs && (
                        <R>
                            <div>
                                <a onClick={() => linkTo('#follow')}>follow bots</a>
                            </div>
                            <div>
                                <a onClick={() => linkTo('#build')}>build bots</a>
                            </div>
                        </R>
                    )}
                </Bottom>
            </Wrap>
        </LayoutCentered>
    );
};

export const Footer = withRouter(Component);
