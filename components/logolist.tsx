import React from 'react';
import styled from 'styled-components';
import { useDark } from 'hooks/dark';

const LogoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        justify-content: center;
        flex-wrap: wrap;
    }
`;

const Logo = styled.div`
    width: 15%;
    vertical-align: middle;
    margin-top: auto;
    margin-bottom: auto;
    > img {
        display: block;
        width: 90%;
        margin-left: 5%;
        height: auto;
        max-width: 150px;
    }
    @media (max-width: 768px) {
        width: 32.99%;
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
                    <img title={l.title} src={dark && l.dark ? l.dark : l.light} />
                </Logo>
            ))}
        </LogoContainer>
    );
};
