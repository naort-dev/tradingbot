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
                    <h1>Advanced coding in the Trality Bot Creator.</h1>
                    <p>Use the Trality Bot Creator to bring your trading ideas to life.</p>
                    <ul>
                        <li>Support of Python (and more to come) to code algorithms</li>
                        <li>Easy-to-use API to access financial data</li>
                        <li>Numerous synthesized order types</li>
                        <li>Intelligent auto-complete</li>
                        <li>Access to full range of indicators</li>
                    </ul>
                </Content>
            </div>
        </LayoutDivided>
    );
};
