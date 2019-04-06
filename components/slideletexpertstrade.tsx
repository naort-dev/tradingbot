import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { Content, LayoutDivided } from '../theme';

import * as icon from '../assets/images/leisureicon1.svg';
import * as image from '../assets/images/leisurescreen2.png';

const Img = styled.img`
    height: 60vh;
    margin-right: 50px;
    @media (max-width: 1200px) {
        margin-right: 0px;
    }
    @media (max-width: 1100px) {
        height: 55vh;
    }
    @media (max-width: 950px) {
        height: 45vh;
        margin-left: 15px;
    }
    @media (max-width: 890px) {
        height: 40vh;
        margin-left: 15px;
    }
    @media (max-width: 768px) {
        margin-right: 0px;
        height: 55vh;
    }
`;

@observer
export class SlideLetExpertsTrade extends React.Component {
    get left() {
        return (
            <React.Fragment>
                <Content header="your funds are safe." icon={icon}>
                    <div>
                    Your funds will always remain safe, in fact, the bots on trality never even touch them directly but instead they send trading signals to your trusted exchange such as Binance, Bittrex or Bitfinex. Trality will never be able to withdraw your funds!
                    </div>
                </Content>
            </React.Fragment>
        );
    }

    get right() {
        return <Img src={image} alt="Trality App Screen"/>;
    }

    render() {
        return <LayoutDivided left={this.left} right={this.right} rjustify="flex-end" content="left" />;
    }
}
