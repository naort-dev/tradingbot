import React from 'react';
import styled from 'styled-components';
import { Margins } from 'theme';

interface HeaderIconProps {
    name: string;
    source: string;
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
    return (
        <Wrapper>
            <ImgWrapper>
                <img src={source} />
            </ImgWrapper>
            <h4>{name}</h4>
        </Wrapper>
    );
};
