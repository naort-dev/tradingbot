import styled from 'styled-components';

export const Center = styled.div`
    display: flex;
    width: 80vw;
    max-width: 1100px;
    @media (max-width: 768px) {
        display: block;
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
    }
`;
