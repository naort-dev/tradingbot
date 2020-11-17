import React from 'react';
import styled from 'styled-components';

import * as BK from './der-brutkasten.png';
import * as CT from './cointelegraph.png';
import * as ICOM from './investing-com.png';
import * as TT from './trending-topics.png';

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    > div {
        height: 100%;
        display: flex;
        text-align: center;
        justify-content: center;
    }
    > div:first-child {
        min-width: 200px;
        justify-content: flex-start;
        align-items: center;
        @media (max-width: 768px) {
            width: 100%;
            justify-content: center;
            margin-bottom: 15px;
        }
    }
    > div:last-child {
        display: flex;
        flex-wrap: wrap;
        @media (max-width: 768px) {
            justify-content: space-around;
            padding: 0px 5px;
        }
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Entry = styled.a`
    > img {
        max-width: 110px;
        margin: 10px 20px;
    }
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AsSeenIn = () => {
    return (
        <Container>
            <div>As seen in</div>
            <div>
                <Entry target="_blank" href="https://www.derbrutkasten.com/trality-erhalt-sechsstellige-ffg-fordreung/">
                    <img src={BK} alt="Der Brutkasten"/>
                </Entry>
                <Entry target="_blank" href="https://de.cointelegraph.com/news/wiener-startup-trality-entwickelt-marktplatz-fur-krypto-trading-bots">
                    <img src={CT} alt="Coin Telegraph"/>
                </Entry>
                <Entry
                    target="_blank"
                    href="https://de.investing.com/news/cryptocurrency-news/wiener-startup-trality-entwickelt-marktplatz-fur-kryptotradingbots-1976427"
                >
                    <img src={ICOM} alt="Investing" />
                </Entry>
                <Entry target="_blank" href="https://www.trendingtopics.at/trality-wiener-startup-baut-einen-app-store-fuer-krypto-bots/">
                    <img src={TT} alt="Trending Topics"/>
                </Entry>
            </div>
        </Container>
    );
};
