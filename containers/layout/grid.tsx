import styled from 'styled-components';
import { Paddings, Margins } from 'theme';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Item = styled.div`
    width: 33%;
    padding-right: ${Paddings.VeryLarge};
    margin-bottom: ${Margins.Large};
    text-align: justify;
`;

export const Grid = {
    Container,
    Item,
};
