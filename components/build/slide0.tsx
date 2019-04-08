import React from 'react';
import { LayoutDivided, Content } from '../general';
import styled from 'styled-components';
import * as img from './slide0/group-30-copy-v2@3x.png';
const Img = styled.img`
    max-height: 70vh !important;
`;

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
                        I want to <Highlight>create</Highlight> bots.
                    </h1>
                    <p>
                        At Trality, we provide you with the tools you need to succeed with your trading bot. We've got you covered, whether you want
                        to code, drag-and-drop algorithms or deploy your machine learning models.
                    </p>
                </Content>
            </div>
            <div>
                <Img src={img} />
            </div>
        </LayoutDivided>
    );
};
