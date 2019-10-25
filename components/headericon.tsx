import React from 'react';
import styled from 'styled-components';

interface HeaderIconProps {
    name: string;
    source: string | any;
    scale?: number;
}

const Wrapper = styled.div`
    text-align: center;
    width: 100%;
`;

const ImgWrapper = styled.div<{ scale: number }>`
    height: ${(props) => props.scale * 70}px;
    & > img {
        width: auto;
        height: 100%;
    }
`;

export const HeaderIcon: React.FC<HeaderIconProps> = ({ scale, name, source }) => {
    const Item = source;
    return (
        <Wrapper>
            <ImgWrapper scale={scale || 1}>{typeof Item === 'string' ? <img src={Item} /> : <Item />}</ImgWrapper>
            <h4>{name}</h4>
        </Wrapper>
    );
};
