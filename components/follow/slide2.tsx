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
                    <h1>Follow a quality-screened expert bot.</h1>
                    <p>Using Trality is not a black box.</p>
                    <ul>
                        <li>Choose from well-documented expert bots and follow the one which matches your objectives</li>
                        <li>Connect to your favorite crypto exchange</li>
                        <li>The bot automatically starts trading for you</li>
                    </ul>
                </Content>
            </div>
            <div>
                <Img src={image} />
            </div>
        </LayoutDivided>
    );
};
