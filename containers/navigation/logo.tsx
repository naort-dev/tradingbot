import styled from 'styled-components';

import { useDark } from '@hooks';
import { useOpen } from './hooks/useOpen';
import { Link } from 'gatsby';
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
        <Link to="/">
            <A>
                <LogoImg src={Logos.TralityMainLogo} alt="Trality Logo" />
            </A>
        </Link>
    );
};
