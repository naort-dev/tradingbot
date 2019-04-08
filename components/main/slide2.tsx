import * as React from 'react';
import styled from 'styled-components';
import { LayoutDivided, Content } from '../general';
import * as image from './slide2/group-24@3x.png';
import Link from 'next/link';

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
                        On our Bot Marketplace, select a bot from an expert you like and follow it. While the expert is carefully watching and
                        adjusting the bot's strategy, your own bot mirrors the expert’s every algorithmic trade onto your account.
                    </p>
                    <ul>
                        <li>No coding skills needed</li>
                        <li>Possibility to customize bot to your needs</li>
                        <li>Watch your portfolio grow</li>
                    </ul>
                    <Link replace href="/follow">
                        <button>Read more</button>
                    </Link>
                </Content>
            </div>
            <div>
                <Img src={image} />
            </div>
        </LayoutDivided>
    );
};
