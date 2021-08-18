import styled from 'styled-components';

import { useDark } from '../../hooks/dark';
import { useOpen } from './hooks/useOpen';
import Link from 'next/link';
import { Logos } from '@assets';

const LogoImg = styled.img`
    height: 70px;
    @media (max-width: 920px) {
        height: 50px;
    }
    @media (max-width: 850px) {
        height: 30px;
    }
    @media (max-width: 768px) {
        height: 50px;
    }
`;

const A = styled.a`
    display: flex;
    align-items: center;
    cursor: pointer;
    max-height: 37px;
    margin-left: -15px;
`;

export const Logo = () => {
    return (
        <Link href="/">
            <A>
                <LogoImg src={Logos.TralityMainLogo} alt="Trality Logo" />
            </A>
        </Link>
    );
};
