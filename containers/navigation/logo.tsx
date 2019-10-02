import styled from 'styled-components';

import { useDark } from '../../hooks/dark';
import { useOpen } from './hooks/useOpen';
import Link from 'next/link';
import { Logos } from '@assets';

const LogoImg = styled.img`
    height: 33px;
    @media (max-width: 768px) {
        height: 25px;
    }
`;

const A = styled.a`
    display: flex;
    align-items: center;
`;

export const Logo = () => {
    const { dark } = useDark();
    const { open } = useOpen();
    return (
        <Link href="/">
            <A>
                <LogoImg src={dark || open ? Logos.TralityWhiteWhite : Logos.TralityBlackBlue} />
            </A>
        </Link>
    );
};
