import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { LayoutDivided, Content } from '../general';
import Link from 'next/link';

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
                    <h1>Create bots.</h1>
                    <p>
                        We believe that building a trading bot is pretty cool. That's why we crafted the Trality Bot Creator: the most advanced of its kind that leaves nothing to be desired. The cherry on the cake: publish your bot to our Trality Bot Marketplace and generate risk free side-income.
                    </p>
                    <ul>
                        <li>Advanced coding in the Trality Bot Creator</li>
                        <li>Blazing-fast backtesting</li>
                        <li>Build a follower base and generate income</li>
                    </ul>
                    <Link replace href="/build">
                        <button>Read more</button>
                    </Link>
                </Content>
            </div>
        </LayoutDivided>
    );
};
