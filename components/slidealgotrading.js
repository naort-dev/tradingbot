import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { Content, LayoutDivided } from '../theme';

import * as icon from '../assets/images/leisureicon2.svg';
import * as image from '../assets/images/leisurescreen1.svg';
import * as dots from '../assets/images/dots.svg';

const Img = styled.img`
    height: 45vh;
    margin-right: 50px;
    position: absolute;
    left: -30%;
    opacity: 0.5;
    @media (max-width: 768px) {
        position: absolute;
        left: -10%;
        margin-right: 0;
        width: 130%;
        height: unset;
    }
`;

const Dots = styled.img``;

@observer
export class SlideAlgotrading extends React.Component {
    get right() {
        return (
            <React.Fragment>
                <Content header="what is algorithmic trading?" icon={icon}>
                    <div>
                    Trading bots are a set of algorithms that control automated buying and selling of assets. Doing so they are exploiting price volatility, which is particularly high in crypto currencies.
                    </div>
                </Content>
            </React.Fragment>
        );
    }

    get left() {
        return (
            <React.Fragment>
                <Img src={image} alt="Algorithmic Trading Candles"/>
                <Dots src={dots} />
            </React.Fragment>
        );
    }

    render() {
        return <LayoutDivided left={this.left} right={this.right} content="right" />;
    }
}
