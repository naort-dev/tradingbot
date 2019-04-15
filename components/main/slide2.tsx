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
                        On the Trality Bot Marketplace, simply select a bot from an expert, which matches your objectives and follow it. While the expert is carefully watching and
                        adjusting the bot's strategy, your own bot mirrors the expert’s every algorithmic trade onto your account.
                    </p>
                    <ul>
                        <li>Make profits with algorithmic trading</li>
                        <li>Follow a quality-screened expert bot</li>
                        <li>Enjoy complete safety of your funds</li>
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
