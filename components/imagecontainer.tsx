import React from 'react';
import styled from 'styled-components';

interface Props {}

const Wrapper = styled.div`
    > img {
        max-width: 90%;
        height: auto;
        max-height: 70vh;
    }
`;

export const ImageContainer: React.FC<Props> = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

export const Image: React.FC<{ image: string }> = ({ image }) => {
    return (
        <ImageContainer>
            <img src={image} />
        </ImageContainer>
    );
};
