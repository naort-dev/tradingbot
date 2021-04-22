import React from 'react';
import { useTracker } from '@trality/web-tracking';
import styled from 'styled-components';

const GdprContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    max-width: 100%;
    width: 100%;
    padding: 10px 10px;
    background: #fff;
    z-index: 1030;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 2px solid #00b8e6;
    transition: 0.3s all;
    @media (max-width: 768px) {
        display: block;
        text-align: center;
    }
    > p {
        line-height: 2;
        margin-bottom: 0px;
        padding-left: 15px;
        padding-right: 15px;
    }
    > button {
    }
`;

export const GDPR = () => {
    const [isClient, setIsClient] = React.useState<boolean>(false);
    const tracker = useTracker();
    //tmp cookie consent necessary till the cookie consent popup is redesigned
    const tmpCookieConsent = process.browser && window?.localStorage?.getItem('tr_lp_7e4486c6-ccbd-4f88-a106-12719ad141dd');
    const [hasOptedIn, setHasOptedIn] = React.useState(!!tmpCookieConsent);

    const accept = React.useCallback(() => {
        //tmp cookie consent necessary till the cookie consent popup is redesigned
        window.localStorage.setItem('tr_lp_7e4486c6-ccbd-4f88-a106-12719ad141dd', 'true');
        tracker.OptIn();
        setHasOptedIn(true);
    }, [hasOptedIn]);

    if (hasOptedIn) {
        return null;
    }

    return (
        <GdprContainer>
            <p>
                We use cookies to provide and improve our services. By using our site, you consent to cookies. For more information, please read our{' '}
                <a href="/privacy">
                    <a>Privacy policy</a>
                </a>
            </p>

            <button className="button-link hollow" onClick={() => accept()}>
                Accept
            </button>
        </GdprContainer>
    );
};
