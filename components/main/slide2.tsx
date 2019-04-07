import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { Content, LayoutDivided, KnowMore } from '../../theme';

import * as icon from '../../assets/images/marketplaceicon.svg';
import * as image from './slide2/image.png';

const Img = styled.img`
    height: 70vh;
    position: relative;
    right: -130px;
    margin-top: 80px;
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

const Right: React.FunctionComponent<{}> = (props) => {
    return <Img src={image} alt="Traliy App Overview" />;
};

const Left: React.FunctionComponent<{}> = (props) => {
    return (
        <React.Fragment>
            <Content header="follow bots." icon={icon}>
                <div>
                    On our bot marketplace, select a bot from an expert that you like and follow it. While the expert is carefully watching and
                    adjusting the bot's strategy, your own bot mirrors the expert’s every algorithmic trade onto your account.
                </div>
                <ul>
                    <li>No coding skills needed</li>
                    <li>Simple backtesting</li>
                    <li>Code window for experts</li>
                </ul>
                <KnowMore>scroll down for more information</KnowMore>
            </Content>
        </React.Fragment>
    );
};

export const Slide2: React.FunctionComponent<{}> = (props) => {
    return <LayoutDivided left={<Left />} right={<Right />} rjustify="flex-end" content="left" />;
};
