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
import { HideDesktop, HideMobile, PaddingSizes, SvgSprite } from '@trality/web-ui-components';
import { CompetitionBanner } from './competitionbanner';

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

const Placeholder = styled.div`
    margin-bottom: 0px;
    @media only screen and (min-width: 768px) {
        margin-bottom: ${PaddingSizes.NinetyTwo}px;
    }
`;

const Hidden = styled.div`
    display: none;
`;

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
            {/* <HideMobile>
                <CompetitionBanner />
            </HideMobile> */}
            <Navigation pageType={pageType} />
            {/* <HideDesktop>
                <CompetitionBanner />
            </HideDesktop> */}
            <Placeholder />
            <>{children}</>
            <Hidden>
                <SvgSprite />
            </Hidden>
            <Section id="footer">
                <Footer pageType={pageType} />
            </Section>
        </Container>
    );
};
