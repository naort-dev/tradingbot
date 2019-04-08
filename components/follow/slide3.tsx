import React from 'react';
import { LayoutDivided, Content } from '../general';
import styled from 'styled-components';

import * as image from './slide3/group-3@3x.png';

const Img = styled.img``;

export const Slide3: React.FunctionComponent<{}> = (props) => {
    return (
        <LayoutDivided imageIn="left">
            <div>
                <Img src={image} />
            </div>
            <div>
                <Content>
                    <h1>Your funds are safe.</h1>
                    <p>Your funds will always remain safe, in fact, the bots on Trality never even touch them directly!</p>
                    <p>
                        Instead, we send trading signals to your trusted exchange such as Binance, Bittrex or Bitfinex. Trality will never be able to
                        withdraw your funds!
                    </p>
                    <ul>
                        <li>Multi-Factor Authentification to start bots</li>
                        <li>Rejection of withdrawal-enabled API keys</li>
                        <li>Full control over your accounts</li>
                    </ul>
                </Content>
            </div>
        </LayoutDivided>
    );
};
