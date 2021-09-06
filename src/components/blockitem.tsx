import styled from 'styled-components';

export const BlockItem = styled.div<{ center?: boolean }>`
    display: block;
    ${(props) => props.center && 'justify-content:center;'}
    @media only screen and (max-width: 750px) {
        h2 {
            text-align: left;
        }
    }
`;
