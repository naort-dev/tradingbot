import React from 'react';
import { LayoutDivided, Content } from '../general';
import styled from 'styled-components';

import * as image from './slide1/group-20@3x.png';

const Img = styled.img``;

export const Slide1: React.FunctionComponent<{}> = (props) => {
    return (
        <LayoutDivided imageIn="left">
            <div>
                <Img src={image} />
            </div>
            <div>
                <Content>
                    <h1>Make profits with algorithmic trading.</h1>
                    <p>
                        Trading bots are a set of algorithms that control automated buying and selling of assets. Doing so they exploite price
                        volatility, which is particularly high in crypto assets.
                    </p>
                </Content>
            </div>
        </LayoutDivided>
    );
};
