import React from 'react';
import { GDPR } from '../gdpr';
import { Navigation } from '../navigation';

export const Page: React.FC = ({ children }) => {
    return (
        <>
            <GDPR />
            <Navigation />
            <>{children}</>
        </>
    );
};
