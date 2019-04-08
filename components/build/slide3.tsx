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
                    <h1>Deploy in the infrastructure..</h1>
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
