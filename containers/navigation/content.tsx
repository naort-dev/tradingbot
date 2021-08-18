import { Logos } from '@assets';
import { MainContainer, Cell, Row, Padding, PaddingSizes, TextLink } from '@trality/web-ui-components';
import { LazyImage } from 'components/lazyImage';
import { PageTypes } from 'containers/layout/page';
import React from 'react';
import { useOpen } from './hooks/useOpen';
import { Logo } from './logo';
import { Menu } from './menu';
import { MobileIcon } from './mobileicon';

interface Props {
    pageType: PageTypes;
}

export const NavigationContent: React.FC<Props> = ({ pageType }) => {
    const { open } = useOpen();
    return (
        <Padding
            size={{
                top: PaddingSizes.Sixteen,
                bottom: PaddingSizes.Sixteen,
            }}
        >
            <MainContainer>
                <Row>
                    <Cell size={2} mobileSize={5} align="left">
                        <TextLink href="/">
                            <LazyImage src={Logos.TralityMainLogo} />
                        </TextLink>
                    </Cell>
                    <Cell size={10} mobileSize={0} alignVertical="middle">
                        <Menu pageType={pageType} isMobile={false} />
                    </Cell>
                    <Cell size={0} mobileSize={4} align="right" alignVertical="middle"></Cell>
                    <Cell size={0} mobileSize={3} align="right" alignVertical="middle">
                        <MobileIcon />
                    </Cell>
                    {open && (
                        <Cell size={0} mobileSize={12} alignVertical="middle">
                            <Menu pageType={pageType} isMobile={true} />
                        </Cell>
                    )}
                </Row>
            </MainContainer>
        </Padding>
    );
};
