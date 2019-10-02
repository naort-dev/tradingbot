import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Item = styled.div`
    border-radius: 5px;
    box-shadow: 0 15px 60px 0 rgba(13, 21, 67, 0.05);
    padding: 45px 30px;
    > button {
        width: 100%;
    }
`;

const Header = styled.h2`
    font-size: 25px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.5px;
    text-align: center;
    color: ${(props) => props.theme.bluePrimary};
    margin-bottom: 35px;
`;

const Entry = styled.div`
    text-align: center;
    > h4 {
        font-size: 15px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.47;
        letter-spacing: normal;
        text-align: center;
        margin: 0px 0px;
        margin-bottom: 5px;
        min-height: 0;
    }
    > p {
        font-size: 18px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        margin: 0px 0px;
        margin-bottom: 30px;
    }
`;

const Description: React.FC<{ title: string }> = ({ title, children }) => {
    return (
        <Entry>
            <h4>{title} </h4>
            <p>{children}</p>
        </Entry>
    );
};

export const Pricing = {
    Container,
    Item,
    Header,
    Description,
};
