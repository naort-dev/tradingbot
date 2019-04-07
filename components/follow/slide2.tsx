import React from 'react';
import { LayoutDivided, Content } from '../general';
import styled from 'styled-components';

import * as image from './slide2/group.png';
import * as bg from './slide2/rectangle.svg';

const Img = styled.img``;
const Rect = styled.img`
    position: absolute;
    left: 0;
    width: 100vw;
    top: 70%;
    z-index: -1;
`;

export const Slide2: React.FunctionComponent<{}> = () => {
    return (
        <LayoutDivided imageIn="right">
            <div>
                <Content>
                    <h1>Everything in one place.</h1>
                    <p>
                        Some traders just love to build custom trading bots. They are wizards with technical analysis and they want to maintain and
                        improve their bots.
                    </p>
                    <ul>
                        <li>Find the best bot for your trading</li>
                        <li>Choose monthly or annually payment</li>
                        <li>Rent the bot and make a profit!</li>
                    </ul>
                </Content>
            </div>
            <div>
                <Img src={image} />
            </div>
            <Rect src={bg} />
        </LayoutDivided>
    );
};
