import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { Content, LayoutDivided, KnowMore } from '../theme';

import * as icon from '../assets/images/marketplaceicon.svg';
import * as image from '../assets/images/appscreen1.png';
import * as bg from '../assets/images/left-bg.svg';

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

const Bg = styled.img`
    position: absolute;
    height: 100%;
    left: -50%;
    top: 0;
`;

@observer
export class SlideFollow extends React.Component {
    get left() {
        return (
            <React.Fragment>
                <Bg src={bg} />
                <Content header="follow bots." icon={icon}>
                    <div>
                    On our bot marketplace, select a bot from an expert that you like and follow it. While the expert is carefully watching and adjusting the bot's strategy, your own bot mirrors the expert’s every algorithmic trade onto your account.
                    </div>
                    <KnowMore>scroll down for more information</KnowMore>
                </Content>
            </React.Fragment>
        );
    }

    get right() {
        return <Img src={image} alt="Traliy App Overview"/>;
    }

    render() {
        return <LayoutDivided left={this.left} right={this.right} rjustify="flex-end" content="left" />;
    }
}
