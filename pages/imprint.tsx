import * as React from 'react';
import styled from 'styled-components';
import { LayoutTop, Page } from '../theme';
import Link from 'next/link';
import * as arrow from '../assets/images/arrow-down.svg';
import { useMixpanel } from '../hooks/mixpanel';
import { useDark } from '../hooks/dark';
import { GDPR } from '../components';

const Header = styled.h1`
    font-weight: normal;
    font-size: 42px;
    text-align: left;
    margin-bottom: 100px;
    margin-top: 100px;
    @media (max-width: 768px) {
        text-align: center;
        margin-top: 100px;
        margin-bottom: 80px;
    }
`;

const Description = styled.div`
    margin-bottom: 50px;
    justify-content: left;
    text-align: left;
    ul {
        text-align: left;
    }
    @media (max-width: 768px) {
        width: 100%;
        padding-right: 25px;
        padding-left: 25px;
        text-align: center;
        font-size: 14px;
    }
    & > span {
        color: #00b3d8 !important;
    }
    > p {
        display: block;
        margin-top: 15px;
    }
`;

const Component: React.FunctionComponent<{}> = () => {
    const mixpanel = useMixpanel();
    let { dark, setDark } = useDark();
    React.useCallback(() => {
        mixpanel.track(`imprint`);
    }, []);

    React.useEffect(() => {
        setDark(false);
    }, [dark]);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            mixpanel.pageview('imprint');
        }
    }, []);

    return (
        <Page>
            <GDPR />
            <LayoutTop>
                <div>
                    <Header>Imprint</Header>
                    <Description>
                        <p>TRALITY GmbH</p>
                        <p>Novaragasse 19/9 AT-1020 Wien</p>
                        <p>Email: legal@trality.com</p>
                        <p>UID: ATU73931338</p>
                        <p>Company Register: 504493b, Commercial Court Vienna</p>
                        <p>Member of the Austrian Economic Chambers</p>
                    </Description>
                </div>
            </LayoutTop>
        </Page>
    );
};

export default Component;
