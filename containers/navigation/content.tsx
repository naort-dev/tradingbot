import { PageTypes } from 'containers/layout/page';
import React from 'react';
import { Logo } from './logo';
import { Menu } from './menu';
import { MobileIcon } from './mobileicon';

interface Props {
    pageType: PageTypes;
}

export const NavigationContent: React.FC<Props> = ({ pageType }) => {
    return (
        <>
            <Logo />
            <Menu pageType={pageType} />
            <MobileIcon />
        </>
    );
};
