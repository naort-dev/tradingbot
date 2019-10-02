import styled from 'styled-components';
import { Screens } from '@assets';

const Img = styled.img`
    height: 60vh;
    margin-right: 50px;
    @media (max-width: 930px) {
        margin-right: 0px;
    }
    @media (max-width: 768px) {
        margin-right: 0px;
        height: 55vh;
    }
`;

export const HeaderImage = () => {
    return <Img src={Screens.Phone} alt="Trality Phone Screenshot" />;
};

export default HeaderImage;
