import React from 'react';
import { LayoutDivided, Content } from '../general';
import styled from 'styled-components';
import * as img from './slide1/group-12@3xv3.png';
const Img = styled.img``;

export const Slide1: React.FunctionComponent<{}> = (props) => {
    return (
        <LayoutDivided imageIn="left">
            <div>
                <Img src={img} />
            </div>
            <div>
                <Content>
                    <h1>Advanced bot editor.</h1>
                    <p>Use our bot editor to bring your trading ideas to life.</p>
                    <ul>
                        <li>Use Python (and more to come) to code your stategies</li>
                        <li>Easy-to-use API to access financial data</li>
                        <li>Access to numerous synthesized order types</li>
                        <li>Intelligent auto-complete</li>
                        <li>Access to a full range of indicators, etc.</li>
                    </ul>
                </Content>
            </div>
        </LayoutDivided>
    );
};
