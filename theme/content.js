import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    z-index: 10;
    max-width: 100%;
    @media (max-width: 768px) {
        text-align: center;
    }
`;

const Head = styled.h1`
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
    ${props => props.small && `
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
    height: ${props => props.height}px;
    object-fit: contain;
    margin: auto;
`;

export class Content extends React.Component {
    render() {
        return (
            <Container>
                {this.props.icon && (
                    <Icon>
                        <Img src={this.props.icon} height={this.props.iconHeight || 18} alt="Icon"/>
                    </Icon>
                )}
                <Head small={this.props.small}>{this.props.header} </Head>
                <Main>{this.props.children}</Main>
            </Container>
        );
    }
}
