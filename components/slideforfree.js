import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { Content, LayoutDivided } from '../theme';

import * as icon from '../assets/images/experticon1.svg';
import * as image from '../assets/images/expertscreen1_v3.png';

const Img = styled.img`
    height: 60vh;
    margin-right: 0px;
    position: relative;
    left: 50%;
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
    @media (max-width: 768px) {
        left: 20%;
    }
`;

@observer
export class SlideForFree extends React.Component {
    get left() {
        return (
            <React.Fragment>
                <Content header="build trading bots for free." icon={icon}>
                    <div>
                    We believe that knowing how to build a crypto bot is pretty cool. So we developed the most advanced bot editor in the field of crypto trading. It includes vast tools for algorithm optimization as well as dynamic coin selection and order optimization based on machine learning technology.
                    </div>
                </Content>
            </React.Fragment>
        );
    }

    get right() {
        return <Img src={image} alt="Trality Code Editor"/>;
    }

    render() {
        return <LayoutDivided left={this.left} right={this.right} content="left" />;
    }
}
