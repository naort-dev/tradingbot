import React from 'react';
import { NavigationProvider } from './provider';
import { NavigationContainer } from './container';
import { NavigationContent } from './content';

export const Navigation: React.FC = () => {
    return (
        <NavigationProvider>
            <NavigationContainer>
                <NavigationContent />
            </NavigationContainer>
        </NavigationProvider>
    );
};
