import * as React from 'react';
import { createPortal } from 'react-dom';
import { usePortal } from '@hooks';

export const Portal: React.FC = ({ children }) => {
    const target = usePortal();
    return target.current ? createPortal(children, target.current) : null;
};
