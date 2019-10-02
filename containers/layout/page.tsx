import React, { useEffect } from 'react';
import styled from 'styled-components';
import { GDPR } from '../gdpr';
import { Navigation } from '../navigation';
import { Background as Container } from '../../components/background';
import { Footer } from '@containers';
import { Section } from './section';
import { ImagesMisc } from '@assets';
import { useDark } from 'hooks/dark';

const Background = styled.img`
    z-index: 0;
    position: absolute;
    top: 0;
    right: 0;
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
