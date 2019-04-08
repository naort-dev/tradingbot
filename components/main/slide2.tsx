import * as React from 'react';
import styled from 'styled-components';
import { LayoutDivided, Content } from '../general';
import * as image from './slide2/image@3x.png';

const Img = styled.img`
    @media (max-width: 768px) {
        max-height: 60vh;
    }
`;

export const Slide2: React.FunctionComponent<{}> = (props) => {
    return (
        <LayoutDivided imageIn="right">
            <div>
                <Content>
                    <h1>Follow bots.</h1>
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
            <div>
                <Img src={image} />
            </div>
        </LayoutDivided>
    );
};
