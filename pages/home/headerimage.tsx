import styled from 'styled-components';
import { Screens } from '@assets';

const Img = styled.img`
    max-width: 100%;
    height: auto;
    margin-left: 15px;
`;

export const HeaderImage = () => {
    return <Img src={Screens.Imac} alt="Trality Phone Screenshot" />;
};

export default HeaderImage;
