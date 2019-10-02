import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Item = styled.div`
    width: 33%;
    padding-right: 60px;
    margin-bottom: 30px;
    text-align: justify;
`;

export const Grid = {
    Container,
    Item,
};
