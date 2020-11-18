import React from 'react';
import styled from 'styled-components';
import { Margins, Paddings } from 'theme';
import { Button as B } from '@components';
import { LazyImage } from 'components/lazyImage';

const Container = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`;

const PageHeader = styled.div`
    margin-bottom: 35px;
    > p {
        margin-bottom: 25px;
    }
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
        margin-bottom: 5px;
        margin-top: 0px;
        min-height: 0;
        color: #646482;
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
        margin-bottom: 15px;
        color: #181927;
    }
`;

const I = styled.div`
    position: relative;
    border-radius: 5px;
    max-width: 270px;
    box-shadow: 0 15px 60px 0 rgba(13, 21, 67, 0.05);
    padding: ${Paddings.Middle} ${Paddings.Middle};
    background-color: ${(props) => props.theme.background};
    width: 22.5%;
    > button {
        width: 100%;
    }
    @media (max-width: 768px) {
        width: 100%;
        max-width: 100%;
        margin-bottom: ${Margins.Large};
    }
`;

const FreeTrial = styled.div`
    background-color: ${(props) => props.theme.main};
    color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 30px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    @media (max-width: 768px) {
        position: relative;
    }
`;

const PopularChoice = styled.div`
    background-color: #2d9f2a;
    color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 30px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    @media (max-width: 768px) {
        position: relative;
    }
`;

const _Info = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme.main};
    display: inline-block;
    margin-left: 3px;
    border-radius: 10px;
    color: #fff;
    text-align: center;
`;

const Info = () => {
    return <_Info>i</_Info>;
};

const Item: React.FC<{ id: string }> = ({ children }) => {
    return <I>{children}</I>;
};

const Description: React.FC<{ title: string }> = ({ title, children }) => {
    return (
        <Entry>
            <h4>{title}</h4>
            <p>{children}</p>
        </Entry>
    );
};

const ImageContainer = styled.div`
    > img {
        max-width: 70%;
        margin-top: 55px;
        @media (max-width: 768px) {
            margin-top: 15px;
            max-width: 40%;
        }
    }
`;

const Image: React.FC<{ src: string, alt?: string }> = ({ src, alt }) => {
    return (
        <ImageContainer>
            <LazyImage src={src} alt={alt}/>
        </ImageContainer>
    );
};

const HeaderContainer = styled.div`
    text-align: center;
    > h2 {
        color: ${(props) => props.theme.bluePrimary};
        margin-bottom: 0px;
        font-size: 25px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.5px;
        margin-top: 15px;
    }
    > h3 {
        color: #181927;
        font-size: 45px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -1.5px;
        text-align: center;
        margin-bottom: 25px;
        margin-top: 10px;
    }
`;

const Button = styled(B)<{ popular?: boolean }>`
    background-color: #e5f7fb;
    color: #00b3d8;
    margin-top: 15px;
    margin-bottom: 25px;

    ${(props) =>
        props.popular &&
        `
    background-color: #00b3d8;
    color: #fff;
    `}
`;

export const EnterpriseBanner = styled.div`
    background-color: #181927;
    border-radius: 5px;
    padding: 20px 40px;
    min-height: 180px;
    display: flex;
    width: 100%;
    align-items: center;
    margin-top: 25px;
    margin-bottom: 25px;
    > img {
        max-height: 106px;
        margin-right: 25px;
    }
    > div {
        margin-right: 35px;
    }
    > button {
        width: 250px;
        margin-bottom: 0px;
    }
    h2 {
        color: #fff;
        font-size: 25px;
        margin-top: 10px;
        margin-bottom: 25px;
    }
    p {
        color: #fff;
        opacity: 0.5;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        h2 {
            margin-top: 25px;
        }
        p {
            margin-bottom: 25px;
        }
        > div {
            margin-right: 0px;
        }
        > img {
            margin-right: 0px;
        }
    }
`;

export const Explanation = styled.div`
    > b {
        margin-right: 5px;
        color: #00b3d8;
    }
    margin-bottom: 10px;
`;

export const NoteBanner = styled.div`
    background-color: #e5f7fb;

    border-radius: 5px;
    padding: 20px 30px;
    min-height: 180px;
    display: flex;
    width: 100%;
    align-items: center;
    margin-top: 25px;
    margin-bottom: 25px;

    > img {
        max-height: 106px;
        margin-right: 25px;
    }
    > div {
        margin-right: 35px;
    }
    > button {
        width: 250px;
        margin-bottom: 0px;
    }
    h2 {
        color: #00b3d8;
        font-size: 25px;
        margin-top: 10px;
        margin-bottom: 25px;
    }

    p {
        color: #000;
        opacity: 0.5;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        h2 {
            margin-top: 25px;
        }
        p {
            margin-bottom: 25px;
        }
        > div {
            margin-right: 0px;
        }
        > img {
            margin-right: 0px;
        }
    }
`;

const ToggleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-left: 40px;
    @media (max-width: 768px) {
        margin-left: 0px;
    }
    > img {
        max-height: 42px;
        margin-left: 10px;
    }
`;

const Toggle = styled.div<{ left?: boolean }>`
    border-radius: 4px;
    background-color: #f5f5f8;
    padding: 5px;
    height: 60px;
    display: flex;
    width: 260px;
    ${(props) =>
        props.left &&
        `
        > div:first-child {
            box-shadow: 0 5px 15px 0 rgba(24, 25, 39, 0.1);
            background-color: #ffffff;
            color: #00b3d8;
        }
    `}
    ${(props) =>
        !props.left &&
        `
        > div:last-child {
            box-shadow: 0 5px 15px 0 rgba(24, 25, 39, 0.1);
            background-color: #ffffff;
            color: #00b3d8;
        }
    `}
`;

const ToggleItem = styled.div`
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    cursor: pointer;
`;

const Header: React.FC<{ title: string; price: string }> = ({ title, price }) => {
    return (
        <HeaderContainer>
            <h2>{title}</h2>
            <h3>{price}</h3>
        </HeaderContainer>
    );
};

export const Pricing = {
    Container,
    Item,
    Header,
    Description,
    Image,
    PopularChoice,
    FreeTrial,
    Button,
    EnterpriseBanner,
    NoteBanner,
    Toggle,
    ToggleItem,
    PageHeader,
    ToggleContainer,
    Explanation,
};
