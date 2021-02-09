import React, { useEffect } from 'react';
import styled from 'styled-components';
import { GDPR } from '../gdpr';
import { Navigation } from '../navigation';
import { Background as Container } from '../../components/background';
import { Footer } from '@containers';
import { Section } from './section';
import { ImagesMisc } from '@assets';
import { useDark } from 'hooks/dark';
import { scrollIt } from 'util/scrollit';

const Background = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
`;

export enum PageTypes {
    Normal,
    LP,
}

interface Props {
    title: string;
    pageType?: PageTypes;
    dark?: boolean;
}

export const Page: React.FC<Props> = ({ dark, children, pageType = PageTypes.Normal }) => {
    const { setDark } = useDark();

    useEffect(() => {
        if (dark) {
            setDark(true);
        }
        scrollIt(0, 0);
    }, []);

    return (
        <Container>
            <BackgroundTriangle />
            <GDPR />
            <Navigation pageType={pageType} />
            <>{children}</>
            <Section id="footer">
                <Footer pageType={pageType} />
            </Section>
        </Container>
    );
};

const BackgroundTriangle = styled.div`
    display: none;
    @media (min-width: 767px) {
        max-width: 60vw;
        max-height: 90vh;
        width: 100%;
        height: 100%;
        display: block;
        background: linear-gradient(to top right, transparent 0%, rgba(0, 0, 0, 0) 50%, rgba(45, 50, 124, 0.01) 50%, rgba(45, 50, 124, 0.03) 100%);
        position: absolute;
        right: 0px;
        top: 0px;
    }
`;
