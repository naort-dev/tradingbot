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
                    <p>Your funds will always remain safe, in fact, the bots on trality never even touch them directly!</p>
                    <p>
                        But instead they send trading signals to your trusted exchange such as Binance, Bittrex or Bitfinex. Trality will never be
                        able to withdraw your funds!
                    </p>
                    <ul>
                        <li>2 step verification</li>
                        <li>SMS confirmation</li>
                        <li>Completely secure account</li>
                    </ul>
                </Content>
            </div>
        </LayoutDivided>
    );
};
