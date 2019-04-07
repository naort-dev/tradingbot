import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    z-index: 10;
    max-width: 100%;
    @media (max-width: 768px) {
        text-align: center;
    }
`;

const Head = styled.h1<{ small?: boolean }>`
    font-size: 60px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.18;
    letter-spacing: normal;
    margin-bottom: 45px;
    @media (max-width: 768px) {
        font-size: 45px;
        text-align: center;
        max-width: 70%;
        margin-left: auto;
        margin-right: auto;
    }
    @media (max-width: 550px) {
        max-width: 90%;
    }
    ${(props) =>
        props.small &&
        `
        font-size: 20px;
    `}
`;

const Main = styled.div`
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.56;
    letter-spacing: normal;
    @media (max-width: 768px) {
        font-size: 14px;
        text-align: center;
        max-width: 80%;
        margin: auto;
    }
    @media (max-width: 550px) {
        max-width: 90%;
    }
`;

const Icon = styled.div`
    margin-bottom: 25px;
    @media (max-width: 768px) {
        text-align: center;
    }
`;

const Img = styled.img`
    height: ${(props) => props.height}px;
    object-fit: contain;
    margin: auto;
`;

interface ContentProps {
    icon?: string;
    iconHeight?: number;
    small?: boolean;
    header: string | React.ReactNode;
}

const Content: React.FunctionComponent<ContentProps> = (props) => {
    return (
        <Container>
            <Head small={props.small}>{props.header} </Head>
            <Main>{props.children}</Main>
        </Container>
    );
};

//Content.defaultProps.iconHeight = 18;
export { Content };
