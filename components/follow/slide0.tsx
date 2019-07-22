import React from 'react';
import { LayoutDivided, Content } from '../general';
import styled from 'styled-components';

import * as image from './slide0/group-24@3x.png';
import * as comingsoon from '../../assets/images/coming-soon_grey.svg';

const Img = styled.img``;

const Highlight = styled.span`
    background-color: ${(props) => props.theme.main};
    color: white;
`;

const Coming = styled.div`
    padding-bottom: 25px;

`;

export const Slide0: React.FunctionComponent<{}> = (props) => {
    return (
        <LayoutDivided imageIn="right">
            <div>
                <Content>
                    <Coming>
                    <Img src={comingsoon} />
                    </Coming>
                    <h1>
                        I want to <Highlight>follow</Highlight> expert bots.
                    </h1>
                    <p>
                        Trality finally lets you experience the excitement of algorithmic trading without the need for expert experience.
                    </p>
                </Content>
            </div>
            <div>
                <Img src={image} />
            </div>
        </LayoutDivided>
    );
};
