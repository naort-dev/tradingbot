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
                    <h1>Create Bots.</h1>
                    <p>
                        We believe that building a trading bot is pretty cool. That's why we built the most advanced bot creation module in the field
                        that leaves nothing to be desired. The cherry on the cake: publish your bot to our marketplace and generate risk free
                        side-income.
                    </p>
                    <ul>
                        <li>Code your own bots</li>
                        <li>Blazing-fast backtesting</li>
                        <li>Attract followers and profit</li>
                    </ul>
                    <Link replace href="/build">
                        <button>Read more</button>
                    </Link>
                </Content>
            </div>
        </LayoutDivided>
    );
};
