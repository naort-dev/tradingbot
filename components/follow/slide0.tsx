import React from 'react';
import { LayoutDivided, Content } from '../general';
import styled from 'styled-components';

import * as image from './slide0/group-24@3x.png';

const Img = styled.img``;

const Highlight = styled.span`
    background-color: ${(props) => props.theme.main};
    color: white;
`;

export const Slide0: React.FunctionComponent<{}> = (props) => {
    return (
        <LayoutDivided imageIn="right">
            <div>
                <Content>
                    <h1>
                        I want to <Highlight>follow</Highlight> expert bots.
                    </h1>
                    <p>
                        Life gets busy - most people don't have the time or experience to build and maintain complex trading bots. On Trality, you're
                        given an easy tool to let experts do the hard work for you - all from the comfort of our app.
                    </p>
                </Content>
            </div>
            <div>
                <Img src={image} />
            </div>
        </LayoutDivided>
    );
};
