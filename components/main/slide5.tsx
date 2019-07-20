import { LayoutCentered } from '../../theme';
import styled from 'styled-components';
import { Content } from '../general';
import { Subscribe } from '../subscribe';

const Center = styled.div`
    width: 60%;
    @media (max-width: 768px) {
        width: 70%;
    }
    @media (max-width: 468px) {
        width: 90%;
    }
`;

export const Slide5: React.FunctionComponent<{}> = (props) => {
    return (
        <LayoutCentered>
            <Content>
                <Subscribe />
            </Content>
        </LayoutCentered>
    );
};
