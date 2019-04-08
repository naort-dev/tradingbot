import React from 'react';
import { LayoutDivided, Content } from '../general';
import styled from 'styled-components';

import * as image from './slide1/group-30@3x.png';

const Img = styled.img``;

export const Slide1: React.FunctionComponent<{}> = (props) => {
    return (
        <LayoutDivided imageIn="left">
            <div>
                <Img src={image} />
            </div>
            <div>
                <Content>
                    <h1>What is algorithmic trading?</h1>
                    <p>
                        Some traders just love to build custom trading bots. They are wizards with technical analysis and they want to maintain and
                        improve their bots.
                    </p>
                    <button>Trade together now.</button>
                </Content>
            </div>
        </LayoutDivided>
    );
};
