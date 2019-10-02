import styled from 'styled-components';

export const Center = styled.div<{ direction?: 'column' | 'row' }>`
    display: flex;
    width: 80vw;
    max-width: 1100px;
    @media (max-width: 768px) {
        display: block;
        width: 100%;
        padding-left: 30px;
        padding-right: 30px;
    }
    ${(props) =>
        props.direction &&
        `
        flex-direction: ${props.direction};
    `}
`;

export const CenterVertical = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;

export const CenterHorizontal = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const CenterRight = styled(CenterHorizontal)`
    justify-content: flex-end;
    @media (max-width: 768px) {
        justify-content: center;
    }
`;

export const CenterLeft = styled(CenterHorizontal)`
    justify-content: flex-start;
    @media (max-width: 768px) {
        justify-content: center;
    }
`;

export const CenterAllDirections = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;
