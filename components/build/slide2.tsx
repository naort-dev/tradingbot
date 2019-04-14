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
                    <h1>Fast backtesting.</h1>
                    <p>
                        Backtesting is at the heart of every trading algorithm iteration. That's why we made it as fast as possible and provide you
                        with debugging features you'll find nowhere else.
                    </p>
                    <ul>
                        <li>Live debugging using breakpoints or events</li>
                        <li>Interactive, blazing-fast backtesting</li>
                        <li>Automated scenario tests</li>
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
