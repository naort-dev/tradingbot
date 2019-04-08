import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { LayoutDivided, Content } from '../general';

import * as image from './slide3/group-30@3x.png';

const Img = styled.img``;

export const Slide3: React.FunctionComponent<{}> = (props) => {
    return (
        <LayoutDivided imageIn="left">
            <div>
                <Img src={image} />
            </div>
            <div>
                <Content>
                    <h1>Create Bots.</h1>
                    <p>
                        On our bot marketplace, select a bot from an expert that you like and follow it. While the expert is carefully watching and
                        adjusting the bot's strategy, your own bot mirrors the expert’s every algorithmic trade onto your account.
                    </p>
                    <ul>
                        <li>No coding skills needed</li>
                        <li>Simple backtesting</li>
                        <li>Code window for experts</li>
                    </ul>
                    <button>Read more</button>
                </Content>
            </div>
        </LayoutDivided>
    );
};
