import React from 'react';
import styled from 'styled-components';
import { useDark } from 'hooks/dark';

const LogoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        justify-content: center;
    }
`;

const Logo = styled.div`
    width: 15%;
    > img {
        display: block;
        width: 100%;
        height: auto;
    }
    @media (max-width: 768px) {
        width: 32%;
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
