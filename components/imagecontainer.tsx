import React from 'react';
import styled from 'styled-components';

interface Props {
    scale?: number;
    marginLeft?: number;
    marginTop?: number;
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
        ${(props) =>
            props.marginLeft &&
            `
            margin-left: ${props.marginLeft}px;
        `}
        ${(props) =>
            props.marginTop &&
            `
            margin-top: ${props.marginTop}px;
        `}
    }
`;

export const ImageContainer: React.FC<Props> = ({ children, ...props }) => {
    return <Wrapper {...props}>{children}</Wrapper>;
};

export const Image: React.FC<{ image: string | any; alt?: string; scale?: number; marginLeft?: number; marginTop?: number }> = ({
    image,
    alt,
    scale,
    ...props
}) => {
    const Item = image;
    return (
        <ImageContainer scale={scale} {...props}>
            {typeof Item === 'string' ? <img src={Item} alt={alt} /> : <Item alt={alt} />}
        </ImageContainer>
    );
};
