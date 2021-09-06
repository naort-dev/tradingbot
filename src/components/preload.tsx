import React from 'react';
import styled from 'styled-components';

interface Props {
    images: string[];
}

const W = styled.div`
    display: none;
`;

export const Preload: React.FC<Props> = ({ images }) => {
    return (
        <W>
            {[...new Set(images)].map((i) => (
                <img src={i} key={i} />
            ))}
        </W>
    );
};
