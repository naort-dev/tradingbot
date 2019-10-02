import React from 'react';
import styled from 'styled-components';
import { GDPR } from '../gdpr';
import { Navigation } from '../navigation';
import { Background as Container } from '../../components/background';
import { Footer } from '@containers';
import { Section } from './section';
import { ImagesMisc } from '@assets';

const Background = styled.img`
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
`;

interface Props {
    title: string;
}

export const Page: React.FC<Props> = ({ children }) => {
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
