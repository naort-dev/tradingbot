import React from 'react';
import { LayoutDivided, Content } from '../general';
import styled from 'styled-components';
import * as img from './slide3/bitmap@3x.png';
const Img = styled.img`
    right: 25% !important;
    max-height: 70vh !important;
    @media (max-width: 768px) {
        position: initial !important;
        margin-left: -50px;
    }
`;

export const Slide3: React.FunctionComponent<{}> = (props) => {
    return (
        <LayoutDivided imageIn="left">
            <div>
                <Img src={img} />
            </div>
            <div>
                <Content>
                    <h1>Publish and profit double.</h1>
                    <p>
                        Once you've got your idea for your strategy figured out, you can publish your bot on our marketplace. People who follow you
                        will pay you a monthly fee for your effort - generating a side income for you independent of the portfolio amount you're
                        trading. And the best of it: your algorithm will never be revealed to anyone.
                    </p>
                </Content>
            </div>
        </LayoutDivided>
    );
};
