import * as React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 80vw;
    max-width: 1100px;
    @media (max-width: 768px) {
        display: block;
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
    }
`;

const Left = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.justify ? props.justify : 'center')};
    position: relative;
    @media (max-width: 768px) {
        width: 100%;
        min-height: 80vh;
        justify-content: center;
        align-items: center;
        ${props => props.hide && 'display: none;'}
    }
`;

const Right = styled(Left)``;

const Center = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const M = styled.div`
    width: 100%;
`;

const LayoutContainer = styled(Container)`
    @media (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: ${(props) => (props.content == 'right' ? 'column-reverse' : 'column')};
    }
`;

export class LayoutDivided extends React.Component {
    render() {
        return (
            <LayoutContainer dark={this.props.dark} content={this.props.content}>
                <Left justify={this.props.ljustify} hide={this.props.hideLeft}>{this.props.left}</Left>
                <Right justify={this.props.rjustify} hide={this.props.hideRight}>{this.props.right}</Right>
            </LayoutContainer>
        );
    }
}

export class LayoutCentered extends React.Component {
    render() {
        return (
            <Container dark={this.props.dark}>
                <Center>{this.props.children}</Center>
            </Container>
        );
    }
}

export class LayoutTop extends React.Component {
    render() {
        return (
            <Container dark={this.props.dark}>
                <M>{this.props.children}</M>
            </Container>
        );
    }
}
