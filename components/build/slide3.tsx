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
                    <h1>Publish and profit twice.</h1>
                    <p>
                        Once you've got the idea for your algorithm figured out, you can publish your bot on our marketplace. Followers in turn reward
                        you with a monthly fee for your effort, thereby providing you a risk-free side income. And the best part: your algorithm will
                        never be revealed to anyone.
                    </p>
                </Content>
            </div>
        </LayoutDivided>
    );
};
