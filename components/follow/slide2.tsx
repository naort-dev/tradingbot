import React from 'react';
import { LayoutDivided, Content } from '../general';
import styled from 'styled-components';

import * as image from './slide2/group@3x.png';
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
                    <h1>Three simple steps.</h1>
                    <p>Using Trality is as easy as 🥧.</p>
                    <ul>
                        <li>Drop in the API keys from your favourite crypto exchange</li>
                        <li>Select a quality-screened bot from our marketplace</li>
                        <li>Follow the bot and automatically copy its trades</li>
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
