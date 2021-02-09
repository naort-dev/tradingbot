import React from 'react';
import { NavigationProvider } from './provider';
import { NavigationContainer } from './container';
import { NavigationContent } from './content';
import { PageTypes } from 'containers/layout/page';

interface Props {
    pageType: PageTypes;
}

export const Navigation: React.FC<Props> = ({ pageType }) => {
    return (
        <NavigationProvider>
            <NavigationContainer>
                <NavigationContent pageType={pageType} />
            </NavigationContainer>
        </NavigationProvider>
    );
};
