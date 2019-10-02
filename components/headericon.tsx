import React from 'react';
import styled from 'styled-components';

interface HeaderIconProps {
    name: string;
    source: string;
}

const Wrapper = styled.div`
    & > img {
        margin-bottom: 25px;
    }
    margin: 25px 0px;
    text-align: center;
    width: 100%;
`;

export const HeaderIcon: React.FC<HeaderIconProps> = ({ name, source }) => {
    return (
        <Wrapper>
            <img src={source} />
            <h4>{name}</h4>
        </Wrapper>
    );
};
