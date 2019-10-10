import React from 'react';
import styled from 'styled-components';

interface HeaderIconProps {
    name: string;
    source: string | any;
}

const Wrapper = styled.div`
    text-align: center;
    width: 100%;
`;

const ImgWrapper = styled.div`
    height: 70px;
    & > img {
        width: auto;
        height: 100%;
    }
`;

export const HeaderIcon: React.FC<HeaderIconProps> = ({ name, source }) => {
    const Item = source;
    return (
        <Wrapper>
            <ImgWrapper>{typeof Item === 'string' ? <img src={Item} /> : <Item />}</ImgWrapper>
            <h4>{name}</h4>
        </Wrapper>
    );
};
