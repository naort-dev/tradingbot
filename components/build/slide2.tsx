import React from 'react';
import { LayoutDivided, Content } from '../general';
import styled from 'styled-components';
import * as img from './slide2/group-10@3xv3.png';
const Img = styled.img``;

export const Slide2: React.FunctionComponent<{}> = (props) => {
    return (
        <LayoutDivided imageIn="right">
            <div>
                <Content>
                    <h1>Blazing-fast backtesting.</h1>
                    <p>
                        Backtesting is at the heart of every trading algorithm iteration. That's why we made it as fast as possible and provide debugging features you'll find nowhere else.
                    </p>
                    <ul>
                        <li>Interactive, blazing-fast backtesting</li>
                        <li>Automated scenario tests or individual time frames</li>
                        <li>Live debugging using breakpoints or events</li>
                        <li>Parameter optimization</li>
                    </ul>
                </Content>
            </div>
            <div>
                <Img src={img} />
            </div>
        </LayoutDivided>
    );
};
