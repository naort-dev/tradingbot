import React from 'react';
import { LayoutDivided, Content } from '../general';
import styled from 'styled-components';
import * as img from './slide2/group-24@3x.png';
const Img = styled.img``;

export const Slide2: React.FunctionComponent<{}> = (props) => {
    return (
        <LayoutDivided imageIn="right">
            <div>
                <Content>
                    <h1>Upgrade your own bot with backtesting.</h1>
                    <p>
                        Some traders just love to build custom trading bots. They are wizards with technical analysis and they want to maintain and
                        improve their bots.
                    </p>
                    <button>Trade together now.</button>
                </Content>
            </div>
            <div>
                <Img src={img} />
            </div>
        </LayoutDivided>
    );
};
