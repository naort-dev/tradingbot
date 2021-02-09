import styled from 'styled-components';
import { Block } from './block';

export const SecondBlock = styled(Block)`
    display: flex;
    > div {
        width: calc(50% - ${(props) => (props.gap ? props.gap / 2 + 'px' : '0px')});
    }

    @media only screen and (max-width: 750px) {
        > div {
            width: 100%;
        }
    }
`;
