import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { Content, LayoutCentered } from '../theme';

import * as icon from '../assets/images/arrow-right.svg';
import * as image from '../assets/images/expertscreen2.png';

const Center = styled.div`
    width: 60%;
    @media (max-width: 768px) {
        width: 70%;
    }
    @media (max-width: 468px) {
        width: 90%;
    }
`;


const Img = styled.img`
    height: 60vh;
    margin-right: 50px;
    position: relative;
    left: -20%;
    @media (max-width: 1200px) {
        height: 55vh;
        margin-right: 0px;
    }
    @media (max-width: 1030px) {
        height: 50vh;
        margin-right: 0px;
    }
    @media (max-width: 860px) {
        height: 45vh;
        margin-right: 0px;
    }
`;

@observer
export class SlideRent extends React.Component {
    get right() {
        return (
            <React.Fragment>
                <Content header="rent out bots and generate income." icon={icon}>
                    <div>
                    The cherry on the cake for expert traders: publish the bot you create on the Trality bot marketplace and generate income from people who mirror it - all without having to reveal a bit of your algorithm.
                    </div>
                </Content>
            </React.Fragment>
        );
    }

    /*get left() {
        return <Img src={image} />;
    }*/

    /*render() {
        return <LayoutDivided left={this.left} right={this.right} content="right" />;
    }*/

    render() {
        return <LayoutCentered><Center>{this.right}</Center></LayoutCentered>
    }
}
