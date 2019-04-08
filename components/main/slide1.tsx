import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { Content, LayoutCentered, Button } from '../../theme';

import Link from 'next/link';

import * as follow from '../../assets/images/follow.svg';
import * as create from '../../assets/images/create.svg';
import * as profit from '../../assets/images/profit.svg';
import * as arrow from '../../assets/images/arrow-down.svg';

const Header = styled.h1`
    font-weight: normal;
    font-size: 42px;
    text-align: center;
    margin-bottom: 100px;
    margin-top: 100px;
    @media (max-width: 768px) {
        text-align: center;
        margin-top: 100px;
        margin-bottom: 80px;
    }
`;

const SimpleContainer = styled.div`
    display: flex;
    margin-bottom: 100px;
    @media (max-width: 1024px) {
        flex-wrap: wrap;
    }
`;

const Simple = styled.div`
    width: 32%;
    margin-bottom: 55px;
    padding: 0px 50px 0px;
    text-align: center;
    & > img {
        margin-bottom: 25px;
    }
    & > h5 {
        color: #0c1014;
        font-size: 20px;
        margin-bottom: 15px;
        font-weight: normal;
        text-align: center;
        min-height: 55px;
        margin-top: 10px;
    }
    & > div {
        text-align: center;
        margin-bottom: 15px;
        line-height: 1.53;
    }
    & > a {
        text-align: center;
        color: #00b3d8;
        cursor: pointer;
        display: block;
        text-decoration: none;
        font-weight: bold;
        margin-top: 25px;
        transition: 0.3s all;
        & > img {
            transition: 0.4s all;
            transform: rotate(-90deg);
            margin-left: 10px;
        }
    }
    & > a:hover {
        margin-left: 20px;
        opacity: 0.9;
    }
    @media (max-width: 1024px) {
        width: 50%;
    }

    @media (max-width: 768px) {
        width: 100%;
        padding-right: 25px;
        padding-left: 25px;
        text-align: center;
        font-size: 14px;
        & > h5 {
            text-align: center;
        }
    }
`;

@observer
export class Slide1 extends React.Component {
    render() {
        return (
            <LayoutCentered>
                <div>
                    <Header>It's simple.</Header>
                    <SimpleContainer>
                        <Simple>
                            <img src={follow} />
                            <h5>Follow bots</h5>
                            <div>
                                Some traders just want to sit back, relax and let experts do the work for them. On our bot marketplace, they can
                                simply select a bot and follow it.
                            </div>
                            <Link replace href="/follow">
                                <a>
                                    Read more
                                    <img src={arrow} />
                                </a>
                            </Link>
                        </Simple>
                        <Simple>
                            <img src={create} />
                            <h5>Create bots</h5>
                            <div>
                                Others just love to build custom trading bots. They are wizards with technical analysis and want to maintain and
                                improve their bots constantly.
                            </div>
                            <Link replace href="/build">
                                <a>
                                    Read more
                                    <img src={arrow} />
                                </a>
                            </Link>
                        </Simple>
                        <Simple>
                            <img src={profit} />
                            <h5>Profit from each other</h5>
                            <div>
                                On Trality, leisure and expert traders can profit from bots individually but, more importantly, also from each other.
                            </div>
                        </Simple>
                    </SimpleContainer>
                </div>
            </LayoutCentered>
        );
    }
}
