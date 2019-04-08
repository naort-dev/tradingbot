import React from 'react';
import { LayoutDivided, Content } from '../general';
import styled from 'styled-components';
import * as img from './slide1/group-30@3x.png';
const Img = styled.img``;

export const Slide1: React.FunctionComponent<{}> = (props) => {
    return (
        <LayoutDivided imageIn="left">
            <div>
                <Img src={img} />
            </div>
            <div>
                <Content>
                    <h1>Advanced Bot Editor.</h1>
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
