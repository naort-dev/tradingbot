import React from 'react';
import { Logo } from './logo';
import { Menu } from './menu';
import { MobileIcon } from './mobileicon';

export const NavigationContent: React.FC = () => {
    return (
        <>
            <Logo />
            <Menu />
            <MobileIcon />
        </>
    );
};
