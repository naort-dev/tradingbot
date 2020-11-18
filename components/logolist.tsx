import React from 'react';
import styled from 'styled-components';
import { useDark } from 'hooks/dark';
import { LazyImage } from './lazyImage';

const LogoContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 15px;
    @media (max-width: 768px) {
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 25px;
        > div:nth-child(even) {
            justify-content: flex-start;
            padding-left: 10px;
        }
        > div:nth-child(odd) {
            justify-content: flex-end;
            padding-right: 10px;
        }
    }
`;

const Logo = styled.div`
    width: 15%;
    vertical-align: middle;
    margin-top: auto;
    margin-bottom: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
        display: block;
        width: 90%;
        margin-left: 5%;
        height: auto;
        max-width: 150px;
    }
    @media (max-width: 768px) {
        width: 49.99%;
    }
`;

interface LogoType {
    title: string;
    light: string;
    dark?: string;
}

interface Props {
    logos: LogoType[];
}

export const LogoList: React.FC<Props> = ({ logos }) => {
    const { dark } = useDark();
    return (
        <LogoContainer>
            {logos.map((l) => (
                <Logo key={l.title}>
                    <LazyImage title={l.title} alt={l.title} src={dark && l.dark ? l.dark : l.light} />
                </Logo>
            ))}
        </LogoContainer>
    );
};
