import * as React from 'react';
import { Button } from '../theme';
import styled from 'styled-components';
import { useMixpanel } from '../hooks/mixpanel';

const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    max-width: 100%;
    width: 100%;
    padding: 2rem 0.5rem;
    background: #fff;
    z-index: 1030;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 2px solid ${(props) => props.theme.main};
    transition: 0.3s all;

    @media (max-width: 768px) {
        display: block;
        text-align: center;
    }
`;

const B = styled(Button)`
    margin-left: 30px;
`;

export const GDPR: React.FunctionComponent<{}> = () => {
    const mixPanel = useMixpanel();
    let [hasOptedIn, setHasOptedIn] = React.useState(mixPanel.has_opted_in_tracking());

    let accept = React.useCallback(() => {
        mixPanel.opt_in_tracking();
        setHasOptedIn(true);
    }, [hasOptedIn]);

    if (hasOptedIn) {
        return null;
    }

    return (
        <Container>
            <p>We use cookies to provide and improve our services. By using our site, you consent to cookies.</p>
            <B hollow small onClick={() => accept()}>
                Accept
            </B>
        </Container>
    );
};
