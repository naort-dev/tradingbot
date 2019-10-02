import React from 'react';
import styled from 'styled-components';

interface Props {}

const Wrapper = styled.div`
    > img {
        max-width: 100%;
        height: auto;
    }
`;

export const ImageContainer: React.FC<Props> = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};
