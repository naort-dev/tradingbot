import styled from 'styled-components';

import * as logo from '../../assets/images/logo_black_blue.png';
import * as logoDark from '../../assets/images/trality_logo_white.png';
import { useDark } from '../../hooks/dark';
import { useOpen } from './hooks/useOpen';
import Link from 'next/link';

const LogoImg = styled.img`
    height: 33px;
    @media (max-width: 768px) {
        height: 25px;
    }
`;

export const Logo = () => {
    const { dark } = useDark();
    const { open } = useOpen();
    return (
        <Link href="/">
            <a>
                <LogoImg src={dark || open ? logoDark : logo} />
            </a>
        </Link>
    );
};
