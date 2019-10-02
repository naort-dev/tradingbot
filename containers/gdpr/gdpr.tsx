import * as React from 'react';
import { Button } from '@components';
import styled from 'styled-components';
import { useMixpanel } from '../../hooks/mixpanel';
import { useDark, DarkProp } from '../../hooks/dark';
import Link from 'next/link';

const GdprContainer = styled.div<DarkProp>`
    position: fixed;
    bottom: 0;
    left: 0;
    max-width: 100%;
    width: 100%;
    padding: 2rem 2rem;
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
        line-height: 1.2;
    }
`;

const B = styled((props) => <Button {...props} />)`
    margin-left: 30px;
`;

export const GDPR: React.FunctionComponent = () => {
    const mixPanel = useMixpanel();
    let [hasOptedIn, setHasOptedIn] = React.useState(true);
    const { dark } = useDark();

    let accept = React.useCallback(() => {
        mixPanel.opt_in_tracking();
        setHasOptedIn(true);
    }, [hasOptedIn]);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            setTimeout(() => {
                setHasOptedIn(mixPanel.has_opted_in_tracking());
            }, 200);
        }
    }, []);

    if (hasOptedIn) {
        return null;
    }

    return (
        <GdprContainer dark={dark}>
            <p>
                We use cookies to provide and improve our services. By using our site, you consent to cookies. For more information, please read our{' '}
                <Link href="/privacy">
                    <a>Privacy policy</a>
                </Link>
            </p>

            <B hollow small onClick={() => accept()}>
                Accept
            </B>
        </GdprContainer>
    );
};
