import React from 'react';
import { LayoutDivided, Content } from '../general';
import styled from 'styled-components';

import * as image from './slide3/group-3@3x.png';

const Img = styled.img``;

export const Slide3: React.FunctionComponent<{}> = (props) => {
    return (
        <LayoutDivided imageIn="left">
            <div>
                <Img src={image} />
            </div>
            <div>
                <Content>
                    <h1>Enjoy complete safety of your funds.</h1>
                    <p>Your funds will always remain safe, in fact, the bots on Trality never touch them directly!</p>
                    <ul>
                        <li>Trality sends trading signals to your trusted exchange</li>
                        <li>Withdrawel-enabled API keys will always be rejected</li>
                        <li>The dashboard lets you unfollow and stop investment at any time</li>
                    </ul>
                </Content>
            </div>
        </LayoutDivided>
    );
};
