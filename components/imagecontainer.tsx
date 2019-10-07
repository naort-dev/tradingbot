import React from 'react';
import styled from 'styled-components';

interface Props {
    scale?: number;
}

const Wrapper = styled.div<Props>`
    display: flex;
    width: auto;
    align-items: center;
    justify-content: center;
    > img {
        max-height: 70vh;
        max-width: 90%;
        width: auto;
        ${(props) =>
            props.scale &&
            `
            transform: scale(${props.scale});
        `}
    }
`;

export const ImageContainer: React.FC<Props> = ({ children, ...props }) => {
    return <Wrapper {...props}>{children}</Wrapper>;
};

export const Image: React.FC<{ image: string; alt?: string; scale?: number }> = ({ image, alt, scale }) => {
    return (
        <ImageContainer scale={scale}>
            <img src={image} alt={alt} />
        </ImageContainer>
    );
};
