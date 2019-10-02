import styled from 'styled-components';

export const Center = styled.div<{ direction?: 'column' | 'row' }>`
    display: flex;
    width: 80vw;
    max-width: 1100px;
    @media (max-width: 768px) {
        display: block;
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
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
`;

export const CenterLeft = styled(CenterHorizontal)`
    justify-content: flex-start;
`;

export const CenterAllDirections = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;
