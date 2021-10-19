import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { Button } from 'components';
import { useDark, DarkProp } from '@hooks';
import { Paddings } from '@theme';
import { useTracker } from '@trality/web-tracking';
import { Misc } from '@util';
import { TextLink } from '@trality/web-ui-components';

const GdprContainer = styled.div<DarkProp>`
    position: fixed;
    bottom: 0;
    left: 0;
    max-width: 100%;
    width: calc(100% - 20px);
    padding: ${Paddings.Middle} ${Paddings.Middle};
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
    ${(props) =>
        props.dark &&
        `
        background: #181927;
        color: #6d7385;
        & h1 {
            color: #fff !important;
        }
    `}
    > p {
        line-height: 2;
    }
`;

const StyledButton = styled((props) => <Button {...props} />)`
    margin-left: 30px;
    @media (max-width: 768px) {
        margin-left: 0px;
    }
`;

export const GDPR: React.FunctionComponent = () => {
    const [isClient, setIsClient] = useState<boolean>(false);
    const tracker = useTracker();
    //tmp cookie consent necessary till the cookie consent popup is redesigned
    const tmpCookieConsent = typeof window !== 'undefined' && window.localStorage?.getItem('tr_lp_7e4486c6-ccbd-4f88-a106-12719ad141dd');
    const [hasOptedIn, setHasOptedIn] = React.useState(!!tmpCookieConsent);
    const { dark } = useDark();

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
        <GdprContainer dark={dark}>
            <p>
                We use cookies to provide and improve our services. By using our site, you consent to cookies. For more information, please read our{' '}
                <TextLink href="/privacy">
                    <a>Privacy policy</a>
                </TextLink>
            </p>

            <StyledButton hollow small onClick={() => accept()}>
                Accept
            </StyledButton>
        </GdprContainer>
    );
};
