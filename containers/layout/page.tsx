import React, { useEffect } from 'react';
import styled from 'styled-components';
import { GDPR } from '../gdpr';
import { Navigation } from '../navigation';
import { Background as Container } from 'components/background';
import { Footer } from '@containers';
import { Section } from './section';
import { ImagesMisc } from '@assets';
import { useDark } from '@hooks';
import { scrollIt } from '@util';

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
            <GDPR />
            <Navigation pageType={pageType} />
            <>{children}</>
            <Section id="footer">
                <Footer pageType={pageType} />
            </Section>
        </Container>
    );
};
