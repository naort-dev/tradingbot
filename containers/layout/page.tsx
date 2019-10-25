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

interface Props {
    title: string;
    dark?: boolean;
}

export const Page: React.FC<Props> = ({ dark, children }) => {
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
            <Navigation />
            <>{children}</>
            <Section id="footer">
                <Footer />
            </Section>
            <Background src={ImagesMisc.Background} />
        </Container>
    );
};
