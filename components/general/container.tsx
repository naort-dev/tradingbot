import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 80vw;
    max-width: 1100px;
    @media (max-width: 1024px) {
        display: block;
        width: 100%;
        padding: 0 40px;
    }
    @media (max-width: 768px) {
        padding: 0 20px;
    }
`;
