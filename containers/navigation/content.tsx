import { Logos } from '@assets';
import { useIsMobile } from '@hooks';
import { MainContainer, Cell, Row, Padding, PaddingSizes, TextLink, Assets } from '@trality/web-ui-components';
import { LazyImage } from 'components/lazyImage';
import { PageTypes } from '../../containers/layout/page';
import React from 'react';
import { useOpen } from './hooks/useOpen';
import { Menu } from './menu';
import { MobileIcon } from './mobileicon';

interface Props {
    pageType: PageTypes;
}

export const NavigationContent: React.FC<Props> = ({ pageType }) => {
    const { open } = useOpen();
    const isMobile = useIsMobile();
    return (
        <Padding
            size={{
                top: PaddingSizes.Sixteen,
                bottom: PaddingSizes.Sixteen,
            }}
            mobileSize={{
                top: PaddingSizes.Four,
                bottom: PaddingSizes.Four,
                left: PaddingSizes.Twelve,
            }}
        >
            <Row>
                <Cell size={2} mobileSize={5} align="left">
                    <TextLink href="/">
                        <LazyImage src={Assets.TralityLogo} width={isMobile ? '140px' : '170px'} />
                    </TextLink>
                </Cell>
                <Cell size={10} mobileSize={0} alignVertical="middle">
                    <Menu pageType={pageType} isMobile={false} />
                </Cell>
                <Cell size={0} mobileSize={5} align="right" alignVertical="middle"></Cell>
                <Cell size={0} mobileSize={2} align="right" alignVertical="middle">
                    <MobileIcon />
                </Cell>
                {open && (
                    <Cell size={0} mobileSize={12} alignVertical="middle">
                        <Menu pageType={pageType} isMobile={true} />
                    </Cell>
                )}
            </Row>
        </Padding>
    );
};
